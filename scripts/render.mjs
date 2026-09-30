#!/usr/bin/env node
// HTML을 헤드리스 크로미움에서 seek 캡처하고 mp4·gif·포스터로 저장한다.
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FPS = 30;
const HELP = `Usage / 사용법:
  node scripts/render.mjs [folder | index.html ...] [options]

  --out <folder>  Save clip.mp4, poster.jpg, preview.gif to another folder.
                  별도 출력 폴더. 여러 입력은 입력별 하위 폴더에 저장.
  --embed         Render ?embed=1, without folio or caption framing.
                  머리글·폴리오·캡션 없는 소재 모드.
  --no-embed      Keep reference framing / 레퍼런스 틀 포함.
  --text <text>   Replace primary text before animation initialization.
                  data-slot="text|primary|headline|title" 사용, 없으면 mask-reveal 지원.
                  같은 슬롯 여러 개는 문구를 나눠 넣음. 줄바꿈으로 직접 분할 가능.
  --all           Render all repository effects and recipes / 전체 렌더.
  --missing       Skip existing output clip.mp4 / 출력 영상이 없는 대상만.
  --jobs <n>      Concurrent renders, default 3 / 동시 렌더 수, 기본 3.
  --help, -h      Show this help / 도움말.

Repository inputs default to reference framing; external inputs default to embed.
저장소 내부 입력은 틀 포함, 외부 입력은 소재 모드가 기본값.
Without --out, files go beside the input HTML, including external inputs.
--out 생략 시 외부 입력도 입력 HTML 폴더에 저장.
Relative inputs resolve from the working directory, then the skill root.
상대 입력은 현재 작업 폴더부터 찾고, 없으면 스킬 루트에서 찾음.
With multiple inputs, --out uses effects/<slug>, recipes/<slug>, or external folder names.
여러 입력의 출력 경로가 겹치면 오류. --all 과 개별 입력은 함께 사용할 수 없음.

Example / 예:
  node scripts/render.mjs /tmp/mask-reveal/index.html --embed --text "LLM은 다음 토큰을 고른다" --out /tmp/motion-output
  node scripts/render.mjs effects/mask-reveal --no-embed
`;

async function loadPlaywright() {
  try { return await import('playwright'); } catch {}
  const gRoot = execFileSync('npm', ['root', '-g']).toString().trim();
  return createRequire(path.join(gRoot, 'noop.js'))('playwright');
}

function within(base, file) {
  const rel = path.relative(base, file);
  return rel === '' || (!rel.startsWith(`..${path.sep}`) && rel !== '..' && !path.isAbsolute(rel));
}

function options(argv) {
  const opts = { inputs: [], jobs: 3 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--') { opts.inputs.push(...argv.slice(i + 1)); break; }
    if (['--out', '--text', '--jobs'].includes(a)) {
      const value = argv[++i];
      if (value === undefined || value.startsWith('--')) throw new Error(`${a}: 값 필요 / value required`);
      opts[a.slice(2)] = a === '--jobs' ? Number(value) : value;
    } else if (a === '--embed' || a === '--no-embed') opts.embed = a === '--embed';
    else if (a === '--all' || a === '--missing') opts[a.slice(2)] = true;
    else if (a.startsWith('-')) throw new Error(`알 수 없는 옵션 / unknown option: ${a}`);
    else opts.inputs.push(a);
  }
  if (!Number.isInteger(opts.jobs) || opts.jobs < 1) throw new Error('--jobs: 양의 정수 필요 / positive integer required');
  if (opts.all && opts.inputs.length) throw new Error('--all: 개별 입력과 함께 사용 불가 / cannot combine with inputs');
  return opts;
}

function targets(opts) {
  let inputs = opts.inputs;
  if (opts.all || !inputs.length) {
    inputs = ['effects', 'recipes'].flatMap(kind => {
      const dir = path.join(ROOT, kind);
      return fs.existsSync(dir) ? fs.readdirSync(dir).sort().filter(s => fs.existsSync(path.join(dir, s, 'index.html'))).map(s => `${kind}/${s}`) : [];
    });
  }
  const destinations = new Set();
  const list = inputs.map(input => {
    let source = path.resolve(input);
    if (!fs.existsSync(source)) source = path.resolve(ROOT, input);
    if (fs.existsSync(source) && fs.statSync(source).isDirectory()) source = path.join(source, 'index.html');
    if (!fs.existsSync(source) || !fs.statSync(source).isFile() || path.basename(source) !== 'index.html') throw new Error(`index.html 없음 / not found: ${input}`);
    source = fs.realpathSync(source);
    const dir = path.dirname(source);
    const internal = within(ROOT, source);
    const label = internal ? path.relative(ROOT, dir) : dir;
    let out = opts.out ? path.resolve(opts.out) : dir;
    if (opts.out && inputs.length > 1) out = path.join(out, internal ? path.relative(ROOT, dir) : path.basename(dir));
    // realpath also catches a supplied output symlink pointing back at the source.
    let ancestor = out;
    while (!fs.existsSync(ancestor)) ancestor = path.dirname(ancestor);
    out = path.resolve(fs.realpathSync(ancestor), path.relative(ancestor, out));
    if (opts.out && out === dir) throw new Error(`--out: 원본 폴더와 같음 / same as source: ${out}`);
    if (destinations.has(out)) throw new Error(`출력 경로 중복 / duplicate output: ${out}`);
    destinations.add(out);
    return { source, dir, out, label, embed: opts.embed ?? !internal };
  });
  return opts.missing ? list.filter(t => !fs.existsSync(path.join(t.out, 'clip.mp4'))) : list;
}

// Runs after the scene has been parsed, before effect scripts create their timelines.
function replaceText(text) {
  let nodes = [];
  for (const slot of ['text', 'primary', 'headline', 'title']) {
    nodes = [...document.querySelectorAll(`.scene [data-slot="${slot}"]`)];
    if (nodes.length) break;
  }
  // The original mask-reveal template has no data-slot yet. Match its structure,
  // so a copy can have any folder name and still retain both animated lines.
  if (!nodes.length) nodes = [...document.querySelectorAll('.scene .title .window > .line')];
  if (!nodes.length) { window.__textError = '--text: data-slot 또는 mask-reveal 문구 자리 없음 / no supported text slot'; return; }
  const lines = text.split('\n');
  let parts;
  if (lines.length > 1) {
    if (lines.length !== nodes.length) { window.__textError = '--text: 줄 수와 슬롯 수가 다름 / line count must match slots'; return; }
    parts = lines;
  } else {
    parts = Array(nodes.length).fill('');
    const words = text.trim().split(/\s+/u);
    let index = 0;
    const budget = Math.ceil(text.length / nodes.length);
    for (const word of words) {
      if (parts[index] && parts[index].length + word.length + 1 > budget && index < parts.length - 1) index++;
      parts[index] += (parts[index] ? ' ' : '') + word;
    }
  }
  nodes.forEach((node, i) => { node.textContent = parts[i]; });
  document.fonts.ready.then(() => {
    nodes.forEach(node => {
      const width = node.parentElement.clientWidth;
      if (width && node.scrollWidth > width) node.style.fontSize = `${parseFloat(getComputedStyle(node).fontSize) * width / node.scrollWidth}px`;
    });
  });
}

function servedHtml(target, opts) {
  let html = fs.readFileSync(target.source, 'utf8');
  // Resolve shared library URLs against the skill, leaving local assets beside the input.
  html = html.replace(/\b(src|href)\s*=\s*(["'])(?:\/|(?:\.{1,2}\/)*)lib\/([^"']+)\2/gi,
    (_, attr, quote, resource) => `${attr}=${quote}/__motion_lib/${resource}${quote}`);
  if (opts.text !== undefined) {
    if (!/<\/main\s*>/i.test(html)) throw new Error('--text: main scene 없음 / missing main scene');
    const value = JSON.stringify(opts.text).replace(/</g, '\\u003c');
    html = html.replace(/<\/main\s*>/i, closing => `${closing}<script>(${replaceText.toString()})(${value});</script>`);
  }
  return html;
}

async function startServer(list, opts) {
  const html = list.map(t => servedHtml(t, opts));
  const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
  const server = createServer((req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (pathname === '/favicon.ico') { res.writeHead(204); res.end(); return; }
      const input = pathname.match(/^\/inputs\/(\d+)\/(.*)$/);
      let base, relative;
      if (pathname.startsWith('/__motion_lib/')) { base = path.join(ROOT, 'lib'); relative = pathname.slice('/__motion_lib/'.length); }
      else if (input && list[Number(input[1])]) {
        const id = Number(input[1]);
        if (input[2] === 'index.html') { res.writeHead(200, { 'Content-Type': mime['.html'] }); res.end(html[id]); return; }
        base = list[id].dir; relative = input[2];
      } else { res.writeHead(404); res.end(); return; }
      const file = path.resolve(base, relative);
      if (!within(base, file) || !fs.existsSync(file) || !fs.statSync(file).isFile() || !within(fs.realpathSync(base), fs.realpathSync(file))) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
      res.end(fs.readFileSync(file));
    } catch { res.writeHead(500); res.end(); }
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return { server, url: `http://127.0.0.1:${server.address().port}` };
}

function ff(args) { execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' }); }

async function renderOne(browser, target, url) {
  const { out } = target;
  const cacheRoot = path.join(ROOT, '.cache', 'frames');
  fs.mkdirSync(cacheRoot, { recursive: true });
  const cache = fs.mkdtempSync(path.join(cacheRoot, 'render-'));
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  try {
    await page.goto(url + '?render=1' + (target.embed ? '&embed=1' : ''));
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 20000 });
    const textError = await page.evaluate(() => window.__textError);
    if (textError) throw new Error(textError);
    if (errors.length) throw new Error(errors.join(' | '));
    const { dur, size, poster } = await page.evaluate(() => ({ dur: window.__dur, size: window.__size || [1280, 720], poster: window.__poster }));
    const [vw, vh] = size;
    if (!Number.isFinite(dur) || dur <= 0 || !size.every(v => Number.isInteger(v) && v > 0)) throw new Error('잘못된 duration/size');
    if (vw !== 1280 || vh !== 720) await page.setViewportSize({ width: vw, height: vh });
    fs.mkdirSync(out, { recursive: true });
    const n = Math.round(dur * FPS);
    for (let f = 0; f < n; f++) {
      await page.evaluate(t => window.__seek(t), f / FPS);
      await page.screenshot({ path: path.join(cache, `f${String(f).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 92 });
    }
    await page.evaluate(t => window.__seek(t), Number.isFinite(poster) ? poster : dur - 0.3);
    await page.screenshot({ path: path.join(out, 'poster.jpg'), type: 'jpeg', quality: 86 });
    const inp = ['-framerate', String(FPS), '-i', path.join(cache, 'f%04d.jpg')];
    ff([...inp, '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-tune', 'animation', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(out, 'clip.mp4')]);
    ff([...inp, '-vf', `fps=15,scale=${vw >= vh ? '480:-1' : '-1:480'}:flags=lanczos,split[a][b];[a]palettegen=max_colors=48:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4`, path.join(out, 'preview.gif')]);
    const kb = f => Math.round(fs.statSync(path.join(out, f)).size / 1024);
    if (kb('preview.gif') > 800) ff([...inp, '-vf', `fps=10,scale=${vw >= vh ? '400:-1' : '-1:400'}:flags=lanczos,split[a][b];[a]palettegen=max_colors=32:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5`, path.join(out, 'preview.gif')]);
    return { frames: n, mp4: kb('clip.mp4'), gif: kb('preview.gif'), errors };
  } finally {
    await page.close();
    fs.rmSync(cache, { recursive: true, force: true });
  }
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--help') || argv.includes('-h')) { console.log(HELP); return; }
  const opts = options(argv);
  const list = targets(opts);
  if (!list.length) { console.log('렌더할 대상 없음'); return; }
  const { chromium } = await loadPlaywright();
  const { server, url } = await startServer(list, opts);
  let browser;
  let i = 0, fail = 0;
  try {
    browser = await chromium.launch({ headless: true });
    async function worker() {
      while (i < list.length) {
        const id = i++;
        const target = list[id];
        try {
          const r = await renderOne(browser, target, `${url}/inputs/${id}/index.html`);
          console.log(`OK  ${target.label}  ${r.frames}f  mp4 ${r.mp4}KB  gif ${r.gif}KB  ${target.embed ? 'embed' : 'reference'}  out ${target.out}${r.errors.length ? '  ERR ' + r.errors.join(' | ') : ''}`);
          if (r.errors.length) fail++;
        } catch (e) { fail++; console.error(`FAIL ${target.label}  ${e.message.split('\n')[0]}`); }
      }
    }
    await Promise.all(Array.from({ length: Math.min(opts.jobs, list.length) }, worker));
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
  console.log(`끝: ${list.length}개, 실패 ${fail}`);
  if (fail) process.exitCode = 1;
}

main().catch(e => { console.error(e.message); process.exitCode = 1; });
