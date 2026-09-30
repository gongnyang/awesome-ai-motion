#!/usr/bin/env node
// 정본, 효과 파일, 문서 구조와 상대 링크 검사. 실패가 있으면 exit 1.
// 사용: node scripts/check.mjs [--quiet]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I = JSON.parse(fs.readFileSync(path.join(ROOT, 'index.json'), 'utf8'));
const quiet = process.argv.includes('--quiet');
const errs = [], warns = [];
const E = (s, m) => errs.push(`${s}: ${m}`), W = (s, m) => warns.push(`${s}: ${m}`);
const slugs = new Set(I.effects.map(e => e.slug));
const REQ = ['slug', 'family', 'ko', 'en', 'oneLiner', 'conveys', 'purposes', 'media', 'level', 'useWhen', 'goodExample', 'badExample', 'avoid', 'params', 'prompts', 'sources'];
const DASH = /[—–]/;
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const seen = new Set();
for (const e of I.effects) {
  const s = e.slug || '(slug 없음)';
  if (seen.has(s)) E(s, '중복 slug'); seen.add(s);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s)) E(s, 'slug 형식');
  for (const k of REQ) if (e[k] == null || (Array.isArray(e[k]) && !e[k].length) || e[k] === '') E(s, `필수 키 비어 있음: ${k}`);
  if (!I.families[e.family]) E(s, `family 어휘 밖: ${e.family}`);
  for (const p of e.purposes || []) if (!I.purposes.includes(p)) E(s, `purposes 어휘 밖: ${p}`);
  for (const m of e.media || []) if (!I.media.includes(m)) E(s, `media 어휘 밖: ${m}`);
  if (e.level && !I.levels.includes(e.level)) E(s, `level 어휘 밖: ${e.level}`);
  for (const p of e.pairsWith || []) if (!slugs.has(p)) W(s, `pairsWith 없는 slug: ${p}`);
  if (!e.prompts || !e.prompts.claude || !e.prompts.codex) E(s, '프롬프트 2종 필요');
  const txt = JSON.stringify(e);
  if (DASH.test(txt)) E(s, '줄표(— –) 사용');
  if (EMOJI.test(txt)) E(s, '이모지 사용');
  if (e.render === 'done') {
    const html = fs.readFileSync(path.join(ROOT, 'effects', s, 'index.html'), 'utf8');
    const script = html.split('stage.js')[1] || '';
    for (const bad of ['Math.random', 'Date.now', 'performance.now', 'setTimeout', 'setInterval', 'requestAnimationFrame']) if (script.includes(bad)) E(s, `결정론 위반: ${bad}`);
    if (!/Motion\.ready\(\)/.test(html)) E(s, 'Motion.ready() 없음');
    if (/#[0-9a-fA-F]{3,6}\b/.test(html.replace(/url\([^)]*\)/g, '').replace(/%23[a-z]/g, ''))) W(s, 'HTML에 hex 색(토큰 밖) 있음');
    for (const f of ['clip.mp4', 'preview.gif', 'poster.jpg']) if (!fs.existsSync(path.join(ROOT, 'effects', s, f))) E(s, `파일 없음: ${f}`);
    const kb = fs.statSync(path.join(ROOT, 'effects', s, 'preview.gif')).size / 1024;
    if (kb > 900) W(s, `gif ${Math.round(kb)}KB`);
  }
}
for (const r of I.recipes || []) for (const st of r.steps || []) if (!slugs.has(st.effect)) W(r.slug, `레시피 단계의 없는 효과: ${st.effect}`);

// 폴더와 정본은 양방향으로 일치해야 한다.
for (const [dir, entries] of [['effects', I.effects], ['recipes', I.recipes || []]]) {
  const expected = new Set();
  for (const entry of entries) {
    if (expected.has(entry.slug) && dir === 'recipes') E(dir, `중복 slug / duplicate slug: ${entry.slug}`);
    expected.add(entry.slug);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(entry.slug || '')) E(dir, `slug 형식 / invalid slug: ${entry.slug}`);
    const folder = path.join(ROOT, dir, entry.slug || '');
    if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) E(dir, `slug 폴더 없음 / missing slug folder: ${entry.slug}`);
  }
  for (const entry of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    if (entry.isDirectory() && !expected.has(entry.name)) E(dir, `정본에 없는 폴더 / folder absent from index.json: ${entry.name}`);
  }
}

const lineCount = s => s ? s.split(/\r?\n/).length - (s.endsWith('\n') ? 1 : 0) : 0;
function limitDocument(rel, maxLines, maxBytes, warning = false) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) { E(rel, '문서 없음 / missing document'); return; }
  const text = fs.readFileSync(p, 'utf8');
  const lines = lineCount(text), bytes = Buffer.byteLength(text);
  const report = warning ? W : E;
  if (lines > maxLines) report(rel, `줄 수 상한 / line limit: ${lines} > ${maxLines}`);
  if (maxBytes && bytes > maxBytes) report(rel, `바이트 상한 / byte limit: ${bytes} > ${maxBytes}`);
  return text;
}
for (const rel of ['SKILL.md', 'SKILL.ko.md', 'SKILL.en.md']) {
  if (rel !== 'SKILL.md' && !fs.existsSync(path.join(ROOT, rel))) continue;
  const text = limitDocument(rel, 120, 8 * 1024);
  const frontmatter = text?.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
  const description = frontmatter?.match(/^description:\s*(.*)((?:\r?\n[ \t]+[^\r\n]*)*)/m);
  if (!description) { E(rel, 'description 없음 / missing description'); continue; }
  let value = description[1].trim();
  const continuation = description[2].trim();
  if (/^[>|][+-]?$/.test(value)) value = continuation.replace(/\s+/g, ' ');
  else if (continuation) value += ' ' + continuation.replace(/\s+/g, ' ');
  if (/^(["'])[\s\S]*\1$/.test(value)) value = value.slice(1, -1);
  const chars = Array.from(value).length;
  if (!chars) E(rel, 'description 비어 있음 / empty description');
  if (chars > 450) E(rel, `description 글자 상한 / character limit: ${chars} > 450`);
}
for (const rel of ['README.md', 'README.ko.md']) limitDocument(rel, 200);
for (const e of I.effects) limitDocument(`effects/${e.slug}/README.md`, 90, null, true);

// 저장소의 모든 Markdown/HTML을 검사한다. Git 내부, 의존성, 임시 렌더 캐시는 제외한다.
const documents = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.cache'].includes(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.isFile() && /\.(md|html)$/i.test(entry.name)) documents.push(p);
  }
}
walk(ROOT);
const decodeEntities = s => s.replace(/&(?:amp|quot|apos|lt|gt);|&#(x[\da-f]+|\d+);/gi, (m, n) => n
  ? String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n))
  : ({ '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' }[m.toLowerCase()]));
const withoutCode = (s, keepText = false) => s.replace(/^ {0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^ {0,3}\1[^\n]*(?:\n|$)/gm, '')
  .replace(/(`+)([^`]*?)\1/g, keepText ? '$2' : '');
const anchorCache = new Map();
const filterValues = { purpose: I.purposes, media: I.media, level: I.levels, fam: Object.keys(I.families) };
function isCatalogFilter(target, fragment) {
  if (target !== path.join(ROOT, 'site', 'index.html') || !fragment.includes('=')) return false;
  const params = [...new URLSearchParams(fragment)];
  return params.length > 0 && params.every(([key, value]) => key === 'q' || (key === 'clip' ? ['0', '1'].includes(value) : filterValues[key]?.includes(value)));
}
function anchors(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  let text = fs.readFileSync(file, 'utf8');
  const ids = new Set();
  for (const match of text.matchAll(/\s(?:id|name)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) ids.add(decodeEntities(match[1] ?? match[2] ?? match[3]));
  if (/\.md$/i.test(file)) {
    text = withoutCode(text, true);
    const occurrences = new Map();
    const heading = value => {
      const slug = decodeEntities(value).replace(/<[^>]*>/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .toLowerCase().replace(/[^\p{L}\p{N}\p{M}_\-\s]/gu, '').replace(/\s/g, '-');
      const count = occurrences.get(slug) || 0;
      occurrences.set(slug, count + 1);
      ids.add(count ? `${slug}-${count}` : slug);
    };
    const lines = text.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^ {0,3}#{1,6}\s+(.+?)(?:\s+#+)?\s*$/);
      if (match) heading(match[1]);
      else if (i && /^ {0,3}(?:=+|-+)\s*$/.test(lines[i]) && lines[i - 1].trim()) heading(lines[i - 1].trim());
    }
  }
  anchorCache.set(file, ids);
  return ids;
}
let linkCount = 0;
const checked = new Set();
const linkStats = new Map();
function linkStat(file) {
  if (!linkStats.has(file)) linkStats.set(file, fs.statSync(file, { throwIfNoEntry: false }));
  return linkStats.get(file);
}
function checkLink(file, raw) {
  const href = decodeEntities(raw.trim()).replace(/\\([() ])/g, '$1');
  if (!href || /^(?:[a-z][a-z\d+.-]*:|\/)/i.test(href)) return;
  const key = `${file}\0${href}`;
  if (checked.has(key)) return;
  checked.add(key); linkCount++;
  const rel = path.relative(ROOT, file);
  let pathname, fragment;
  try {
    const hash = href.indexOf('#');
    pathname = decodeURIComponent((hash < 0 ? href : href.slice(0, hash)).split('?')[0]);
    fragment = hash < 0 ? '' : decodeURIComponent(href.slice(hash + 1));
  } catch { E(rel, `링크 인코딩 오류 / invalid link encoding: ${href}`); return; }
  let target = pathname ? path.resolve(path.dirname(file), pathname) : file;
  const stat = linkStat(target);
  if (!stat) { E(rel, `깨진 상대 링크 / broken relative link: ${href}`); return; }
  if (stat.isDirectory()) {
    const names = /\.md$/i.test(file) ? ['README.md', 'index.html'] : ['index.html', 'README.md'];
    const landing = names.map(name => path.join(target, name)).find(p => linkStat(p)?.isFile());
    // 폴더 자체 링크는 GitHub의 디렉터리 탐색으로 유효하다.
    if (!landing) {
      if (fragment) E(rel, `앵커 대상 문서 없음 / no anchor landing document: ${href}`);
      return;
    }
    target = landing;
  }
  if (fragment && /\.(md|html)$/i.test(target) && !isCatalogFilter(target, fragment) && !anchors(target).has(fragment)) E(rel, `깨진 앵커 / broken anchor: ${href}`);
}
for (const file of documents) {
  let text = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  if (/\.md$/i.test(file)) {
    text = withoutCode(text);
    const definitions = new Map();
    const normalize = s => s.trim().replace(/\s+/g, ' ').toLowerCase();
    for (const match of text.matchAll(/^ {0,3}\[([^\]]+)\]:\s*(?:<([^>]+)>|(\S+))/gm)) definitions.set(normalize(match[1]), match[2] || match[3]);
    // 괄호가 포함된 URL과 선택적인 링크 제목도 처리한다.
    for (const match of text.matchAll(/!?\[(?:[^\[\]\n]|\[[^\]\n]*\])*\]\(\s*(?:<([^>\n]+)>|((?:[^\s()]|\([^()]*\))+))(?:\s+["'][^\n]*?["'])?\s*\)/g)) checkLink(file, match[1] || match[2]);
    for (const match of text.matchAll(/!?\[([^\]\n]+)\](?:\[([^\]\n]*)\])?/g)) {
      const url = definitions.get(normalize(match[2] || match[1]));
      if (url) checkLink(file, url);
    }
  }
  text = text.replace(/(<(script|style)\b[^>]*>)[\s\S]*?<\/\2\s*>/gi, '$1');
  for (const tag of text.matchAll(/<[a-z](?:[^>"']|"[^"]*"|'[^']*')*>/gi)) {
    for (const match of tag[0].matchAll(/\s(?:href|src|poster|action|data-href|data-mp4)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
      // action is a URL on forms; custom elements may use it as an enum.
      if (/^\saction\s*=/i.test(match[0]) && !/^<form\b/i.test(tag[0])) continue;
      checkLink(file, match[1] ?? match[2] ?? match[3]);
    }
    for (const match of tag[0].matchAll(/\ssrcset\s*=\s*(["'])(.*?)\1/gi)) {
      if (!match[2].trim().startsWith('data:')) for (const item of match[2].split(',')) checkLink(file, item.trim().split(/\s+/)[0]);
    }
  }
}
if (!quiet) console.log(`문서 / documents: ${documents.length} · 상대 링크 / relative links: ${linkCount}`);
if (!quiet) { warns.forEach(w => console.log('경고', w)); }
errs.forEach(e => console.log('실패', e));
console.log(`검사: 효과 ${I.effects.length} · 실패 ${errs.length} · 경고 ${warns.length}`);
process.exit(errs.length ? 1 : 0);
