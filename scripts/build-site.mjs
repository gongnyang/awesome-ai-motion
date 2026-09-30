#!/usr/bin/env node
// index.json(정본) → site/ 정적 사이트(한·영 전환). GitHub Pages에서 /site/ 로 열린다.
// 사용: node scripts/build-site.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { md, esc } from './lib-md.mjs';
import { syncRender } from './sync-render.mjs';
import { sourceUrl } from './source-links.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');
const I = syncRender(JSON.parse(fs.readFileSync(path.join(ROOT, 'index.json'), 'utf8')), ROOT);
const FAM = I.families;
const famKeys = Object.keys(FAM);
const bySlug = new Map(I.effects.map(e => [e.slug, e]));
const REPO = 'https://github.com/gongnyang/awesome-ai-motion';
const PURPOSE_EN = { '주목 끌기': 'Attention', '설명': 'Explain', '비교': 'Compare', '순서·흐름': 'Sequence', '강조': 'Emphasis', '전환': 'Transition', '데이터 증명': 'Data proof', '피드백': 'Feedback', '분위기': 'Mood', '브랜딩': 'Branding' };
const MEDIA_EN = { '설명 영상': 'Explainer video', '숏폼': 'Short-form', '스크롤덱': 'Scroll deck', '발표': 'Presentation', '제품 시연': 'Product demo', '데이터 스토리': 'Data story', '웹 UI': 'Web UI' };
const LEVEL_EN = { '기본': 'Basic', '중급': 'Intermediate', '고급': 'Advanced' };

// 한·영 병기: 영어가 없거나 같으면 한 번만
const L = (ko, en) => (en == null || en === '' || en === ko) ? esc(ko) : `<span lang="ko">${esc(ko)}</span><span lang="en">${esc(en)}</span>`;
const Lh = (ko, en) => `<span lang="ko">${ko}</span><span lang="en">${en}</span>`; // 이미 HTML인 경우
const write = (rel, html) => { const p = path.join(SITE, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, html); };
const up = d => '../'.repeat(d);
const famName = f => FAM[f] ? L(FAM[f].ko, cap(FAM[f].en)) : esc(f);
function cap(s) { return String(s || '').toLowerCase().replace(/(^|[\s&])([a-z])/g, (m, a, b) => a + b.toUpperCase()).replace(/\bUi\b/, 'UI').replace(/\b3d\b/, '3D'); }

function page({ title, desc = I.description, depth, active = '', body }) {
  const u = up(depth);
  const nav = [['index.html', 'effects', '효과', 'Effects'], ['recipes.html', 'recipes', '레시피', 'Recipes'], ['routes.html', 'routes', '용도별 루트', 'Routes'], ['glossary.html', 'glossary', '용어', 'Glossary'], ['skill.html', 'skill', '스킬로 쓰기', 'Use as a skill']];
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script>try{var l=new URLSearchParams(location.search).get('lang')||localStorage.getItem('am-lang')||((navigator.language||'ko').indexOf('ko')===0?'ko':'en');document.documentElement.dataset.lang=l;document.documentElement.lang=l;var t=localStorage.getItem('am-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${u}assets/og.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="stylesheet" href="${u}assets/site.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23F4EEE3'/><circle cx='16' cy='16' r='8' fill='%23D6401C'/></svg>">
</head><body>
<div class="wrap">
<header class="folio"><a class="brand" href="${u}index.html">AWESOME AI MOTION</a>
<nav>${nav.map(([h, k, ko, en]) => `<a href="${u}${h}"${active === k ? ' class="on"' : ''}>${L(ko, en.toUpperCase())}</a>`).join('')}<a href="${REPO}">GITHUB</a><button class="lang" type="button" aria-label="언어 전환 / language"></button><button class="theme" type="button" aria-label="밝기 전환 / theme">◐</button></nav></header>
${body}
<footer class="foot"><span>AWESOME AI MOTION · ${L('모션 기법 도감', 'motion vocabulary for agents')} v${esc(I.version)}</span><span>${L(`효과 ${I.counts.effects} · 클립 ${I.counts.rendered} · 레시피 ${I.counts.recipes}`, `${I.counts.effects} effects · ${I.counts.rendered} clips · ${I.counts.recipes} recipes`)} · MIT</span></footer>
</div>
<script src="${u}assets/app.js"></script>
</body></html>
`;
}

function tile(e, depth, opts = {}) {
  const u = up(depth);
  const done = e.render === 'done';
  const q = [e.ko, e.en, ...(e.aka || []), e.oneLiner, e.oneLinerEn, FAM[e.family]?.ko, FAM[e.family]?.en, ...(e.purposes || []), ...(e.purposes || []).map(p => PURPOSE_EN[p]), ...(e.media || []), ...(e.media || []).map(m => MEDIA_EN[m]), e.slug].filter(Boolean).join(' ');
  const mp4 = done ? `${u}../effects/${e.slug}/clip.mp4` : '';
  const media = done
    ? (e.files.poster ? `<img src="${u}../${e.files.poster}" alt="${esc(e.ko)} · ${esc(e.en)}" loading="lazy" width="640" height="360">` : `<div class="ph"><div class="big">${L(e.ko, e.en)}</div></div>`)
    : `<div class="ph"><div class="st">${L('렌더 추가 예정', 'CLIP COMING')}</div><div class="big">${L(e.ko, e.en)}</div><div class="nn">${e.no}</div></div>`;
  const cmp = done && opts.compare ? `<button class="cmp" type="button" data-slug="${e.slug}" data-ko="${esc(e.ko)}" data-no="${e.no}" data-mp4="${mp4}" data-href="effect/${e.slug}.html">${L('비교', 'COMPARE')}</button>` : '';
  return `<a class="tile" href="${u}effect/${e.slug}.html"${done ? ` data-mp4="${mp4}"` : ''} data-fam="${e.family}" data-level="${esc(e.level || '')}" data-purposes="${esc((e.purposes || []).join('|'))}" data-media="${esc((e.media || []).join('|'))}" data-q="${esc(q)}">
<div class="media">${media}</div>${cmp}
<div class="cap"><span class="no">Nº ${e.no}</span><span class="ko">${L(e.ko, e.en)}</span><span class="en" lang="ko">${esc(e.en)}</span></div>
${opts.one === false ? '' : `<div class="one">${L(e.oneLiner || '', e.oneLinerEn)}</div>`}</a>`;
}

// ── 1. 효과 갤러리(홈)
const IMPACT = ['infinite-pan', 'camera-flythrough', 'infinite-zoom', 'deep-parallax', 'kinetic-type-sweep', 'giant-mask-reveal', 'particle-assemble', 'morph-match-cut', 'card-flip-stack', 'perspective-tilt', 'shader-wipe', 'noise-dissolve', 'light-sweep', 'scroll-scrub-cinema'];
const POPULAR = ['ken-burns', 'parallax', 'mask-reveal', 'match-cut', 'count-up', 'kinetic-beats', 'typewriter', 'whip-pan', 'zoom-through', 'bar-grow', 'cursor-click', 'overlapping-action'];
function xrow(e) {
  const q = [e.ko, e.en, ...(e.aka || []), e.oneLiner, e.oneLinerEn, FAM[e.family]?.ko, FAM[e.family]?.en, ...(e.purposes || []), ...(e.purposes || []).map(p => PURPOSE_EN[p]), ...(e.media || []), ...(e.media || []).map(m => MEDIA_EN[m]), e.slug].filter(Boolean).join(' ');
  return `<a class="xrow" href="effect/${e.slug}.html" data-fam="${e.family}" data-level="${esc(e.level || '')}" data-purposes="${esc((e.purposes || []).join('|'))}" data-media="${esc((e.media || []).join('|'))}" data-clip="${e.render === 'done' ? 1 : ''}" data-q="${esc(q)}"><span class="no">${e.no}</span><span class="ko">${L(e.ko, e.en)}</span><span class="en" lang="ko">${esc(e.en)}</span><span class="one">${L(e.oneLiner || '', e.oneLinerEn)}</span><span class="cl" aria-label="${e.render === 'done' ? '클립 있음 / Clip available' : '클립 준비 중 / Clip planned'}">${e.render === 'done' ? '●' : '○'}</span></a>`;
}
function home() {
  const cnt = (k, v) => I.effects.filter(e => (k === 'fam' ? e.family === v : k === 'level' ? e.level === v : (e[k] || []).includes(v))).length;
  const chips = (k, list, ko, en) => `<div class="frow"><span class="k">${L(ko, en)}</span>${list.map(([v, lko, len]) => `<button class="chip" type="button" data-k="${k}" data-v="${esc(v)}">${L(lko, len)}<small>${cnt(k === 'fam' ? 'fam' : k === 'purpose' ? 'purposes' : k, v)}</small></button>`).join('')}</div>`;
  const rendered = I.effects.filter(e => e.render === 'done');
  const featured = [...IMPACT, ...POPULAR].map(s => bySlug.get(s)).filter(e => e && e.render === 'done').slice(0, 16);
  const blocks = famKeys.map(f => {
    const list = rendered.filter(e => e.family === f);
    if (!list.length) return '';
    return `<section class="famblock" id="fam-${f}"><div class="fam-h"><h3>${esc(FAM[f].ko)}</h3><span class="en">${esc(FAM[f].en)}</span><span class="d">${L(`${FAM[f].desc} · 클립 ${list.length}`, `${FAM[f].descEn || ''} · ${list.length} clips`)}</span></div><div class="grid">${list.map(e => tile(e, 0, { compare: true })).join('\n')}</div></section>`;
  }).join('\n');
  const index = famKeys.map(f => {
    const list = I.effects.filter(e => e.family === f);
    if (!list.length) return '';
    return `<section class="famblock xfam"><div class="fam-h"><h3>${esc(FAM[f].ko)}</h3><span class="en">${esc(FAM[f].en)}</span><span class="d">${L(`${list.length}개`, `${list.length}`)}</span></div>${list.map(xrow).join('')}</section>`;
  }).join('\n');
  const hasHero = fs.existsSync(path.join(SITE, 'assets', 'hero.mp4'));
  const body = `
${hasHero ? `<section class="hero"><video src="assets/hero.mp4" poster="assets/og.jpg" autoplay muted loop playsinline aria-label="${esc('임팩트 효과 몽타주 · impact effects montage')}"></video><div class="herocap"><span class="mono">${L('도판 00. 임팩트 효과 몽타주', 'Fig. 00. Impact effects montage')}</span><span class="mono muted">${featured.slice(0, 6).map(e => L(e.ko, e.en)).join(' · ')}</span></div></section>` : ''}
<section class="mast">
  <div><div class="kick">${L('AWESOME AI MOTION · 에이전트에게 먹이는 모션 사전', 'AWESOME AI MOTION · A MOTION DICTIONARY YOUR AGENT CAN READ')}</div>
  <h1>${L('모션 기법 도감', 'A field guide to')}<br><span class="dd v">Motion</span> <span class="dd">for agents</span></h1>
  <p class="con">${L('무한 팬과 플라이스루부터 오버랩, 매치컷, 막대 성장, 토큰 쪼개기까지. 효과마다 정의, 기본 파라미터, 과용 주의, 구현 코드, 그리고 Claude Code와 Codex에 그대로 붙여 넣는 프롬프트를 한 장에 모았다. 클립은 전부 같은 종이, 같은 먹, 같은 주홍으로 그려 움직임만 비교된다.', 'From infinite pans and fly-throughs to overlapping action, match cuts, bar growth and token splits. Every effect gets a definition, tuned defaults, overuse warnings, implementation code, and prompts you can paste straight into Claude Code or Codex. Every clip is drawn with the same paper, ink and vermilion, so only the motion differs.')}</p></div>
  <div class="stats">
    <div class="stat"><div class="n">${I.counts.effects}</div><div class="l">${L('정의한 기법', 'techniques defined')}</div></div>
    <div class="stat"><div class="n v">${I.counts.rendered}</div><div class="l">${L('기준 클립', 'reference clips')}</div></div>
    <div class="stat"><div class="n">${I.counts.recipes}</div><div class="l">${L('조합 레시피', 'recipes')}</div></div>
    <div class="stat"><div class="n">${(I.routes || []).length}</div><div class="l">${L('용도별 루트', 'design routes')}</div></div>
  </div>
</section>
${featured.length ? `<section class="sec first featured"><div class="lab"><div class="dd">01</div><h2>${L('대표 효과', 'Featured')}</h2><p>${L('임팩트 큰 효과와 가장 많이 쓰는 효과', 'High-impact effects and the ones used most')}</p></div><div class="grid auto">${featured.map(e => tile(e, 0, { compare: true })).join('\n')}</div></section>` : ''}
<div class="filters">
  <label class="search"><input id="q" type="search" data-ph-ko="효과 이름, 영문, 용도로 찾기  ( / )" data-ph-en="Search by name, purpose or medium  ( / )" autocomplete="off"><span class="cnt" id="cnt"></span><span class="toggle"><input id="clip" type="checkbox">${L('클립 있는 것만', 'Clips only')}</span></label>
  ${chips('fam', famKeys.filter(f => cnt('fam', f)).map(f => [f, FAM[f].ko, cap(FAM[f].en)]), '동작별', 'Motion')}
  ${chips('purpose', I.purposes.filter(p => cnt('purposes', p)).map(p => [p, p, PURPOSE_EN[p]]), '목적별', 'Purpose')}
  ${chips('media', I.media.filter(m => cnt('media', m)).map(m => [m, m, MEDIA_EN[m]]), '매체별', 'Medium')}
  ${chips('level', I.levels.map(l => [l, l, LEVEL_EN[l]]), '난이도', 'Level')}
</div>
<div class="sech"><span class="dd">02</span><h2>${L('클립 갤러리', 'Clip gallery')}</h2><span class="muted">${L('화면에 들어온 클립은 저절로 재생된다. 비교 버튼으로 나란히 보기', 'Clips play as they scroll into view. Use Compare to watch them side by side')}</span></div>
<div id="gallery">${blocks}</div>
<div class="sech"><span class="dd">03</span><h2>${L('전체 기법', 'All techniques')}</h2><span class="muted">${L('● 클립 있음 · ○ 정의만(렌더 추가 예정)', '● clip · ○ definition only, clip coming')}</span></div>
<div id="index">${index}</div>
<p class="empty" id="none" hidden>${L('맞는 효과가 없다. 필터를 하나 풀어 보자.', 'Nothing matches. Try removing a filter.')}</p>
<div class="tray" id="tray"><div class="wrap"><span class="mono muted">${L('비교', 'COMPARE')}</span><div class="items" id="tray-items"></div><button class="btn ghost" id="tray-clear" type="button">${L('비우기', 'CLEAR')}</button><button class="btn" id="tray-go" type="button">${L('나란히 재생', 'PLAY SIDE BY SIDE')}</button></div></div>
<div class="overlay" id="overlay"><div class="wrap"><div class="head"><span class="brand dd">${L('나란히 비교', 'Side by side')}</span><div class="speed" data-for=".cv"><button data-rate="0.25">0.25x</button><button data-rate="0.5">0.5x</button><button data-rate="1" class="on">1x</button><button class="btn ghost" id="ov-sync" type="button">${L('처음부터', 'RESTART')}</button><button class="btn" id="ov-close" type="button">${L('닫기', 'CLOSE')}</button></div></div><div class="cgrid" id="cgrid"></div></div></div>`;
  write('index.html', page({ title: 'Awesome AI Motion · 모션 기법 도감', depth: 0, active: 'effects', body }));
}

// ── 2. 효과 상세
function detail(e) {
  const u = up(1);
  const done = e.render === 'done';
  const f = FAM[e.family] || { ko: e.family, en: '' };
  const li = a => (a || []).map(x => `<li>${esc(x)}</li>`).join('');
  const stage = done
    ? `<video id="v" src="${u}../effects/${e.slug}/clip.mp4" ${e.files.poster ? `poster="${u}../${e.files.poster}"` : ''} autoplay muted loop playsinline controls preload="metadata"></video>`
    : `<div class="ph"><span class="st">${L('렌더 추가 예정', 'CLIP COMING')}</span><span class="big">${L(e.ko, e.en)}</span><span class="st">${L('정의·파라미터·프롬프트는 아래에 있다', 'Definition, parameters and prompts are below')}</span></div>`;
  const pairs = (e.pairsWith || []).map(s => bySlug.get(s)).filter(Boolean);
  const eng = e.engines || {};
  const pr = e.prompts || {}, prE = e.promptsEn || {};
  const params = (e.params || []).map(p => `<tr><td>${esc(p.name)}</td><td class="val">${esc(p.default)}</td><td class="val">${esc(p.range || '')}</td><td>${esc(p.note || '')}</td></tr>`).join('');
  const tagLinks = [
    ...(e.purposes || []).map(p => `<a href="${u}index.html#purpose=${encodeURIComponent(p)}">${L(p, PURPOSE_EN[p])}</a>`),
    ...(e.media || []).map(m => `<a href="${u}index.html#media=${encodeURIComponent(m)}">${L(m, MEDIA_EN[m])}</a>`),
    e.level ? `<a href="${u}index.html#level=${encodeURIComponent(e.level)}">${L('난이도 ' + e.level, LEVEL_EN[e.level])}</a>` : '',
    e.runtime ? `<span class="mono muted">${esc(e.runtime)}</span>` : ''
  ].join('');
  const routes = (I.routes || []).filter(r => (r.effects || []).includes(e.slug));
  const recipes = (I.recipes || []).filter(r => (r.steps || []).some(s => s.effect === e.slug));
  const promptBlock = (id, label, ko, en) => ko ? `<div class="prompt"><div class="h"><b>${label}</b><button class="copy" type="button" data-target="#${id}-ko" lang="ko">복사</button>${en ? `<button class="copy" type="button" data-target="#${id}-en" lang="en">COPY</button>` : ''}</div><p id="${id}-ko"${en ? ' lang="ko"' : ''}>${esc(ko)}</p>${en ? `<p id="${id}-en" lang="en">${esc(en)}</p>` : ''}</div>` : '';
  let n = 0; const sn = () => String(++n).padStart(2, '0');
  const body = `
<div class="crumb"><a href="${u}index.html">${L('효과', 'Effects')}</a> / <a href="${u}index.html#fam=${e.family}">${famName(e.family)}</a> / Nº ${e.no}</div>
<div class="dhead"><div><h1>${L(e.ko, e.en)}</h1><div class="en" lang="ko">${esc(e.en)}</div><div class="en" lang="en">${esc(e.ko)}</div>${(e.aka || []).length ? `<div class="aka">${L('다른 이름', 'Also known as')} · ${esc(e.aka.join(' · '))}</div>` : ''}</div><div class="nn">${e.no}</div></div>
<div class="stage">${stage}
<div class="stagebar"><span class="fig">${L('도판', 'Fig.')} ${e.no}. ${esc(e.ko)} · ${esc(e.en)}${e.ease ? ` · ${esc(e.ease)}` : ''}</span>${done ? `<div class="speed" data-for="#v"><span>${L('재생 속도', 'Speed')}</span><button data-rate="0.25">0.25x</button><button data-rate="0.5">0.5x</button><button data-rate="1" class="on">1x</button></div>` : ''}</div></div>
<p class="one-big">${L(e.oneLiner || '', e.oneLinerEn)}</p>
<section class="sec" style="margin-top:48px"><div class="lab"><div class="dd">${sn()}</div><h2>${L('무엇을 전하나', 'What it tells')}</h2></div>
<div class="rows">
<div class="r"><div class="k">${L('전달 효과', 'Conveys')}<small>CONVEYS</small></div><div>${L(e.conveys || '', e.conveysEn)}</div></div>
<div class="r"><div class="k">${L('언제 쓰나', 'Use when')}<small>USE WHEN</small></div><div>${e.useWhenEn ? `<ul lang="ko">${li(e.useWhen)}</ul><ul lang="en">${li(e.useWhenEn)}</ul>` : `<ul>${li(e.useWhen)}</ul>`}</div></div>
<div class="r"><div class="k">${L('과용 주의', 'Avoid')}<small>AVOID</small></div><div><ul>${li(e.avoid)}</ul></div></div>
<div class="r"><div class="k">${L('분류', 'Tags')}<small>TAGS</small></div><div class="tags"><a href="${u}index.html#fam=${e.family}">${famName(e.family)}</a>${tagLinks}</div></div>
</div></section>
<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('좋은 예와 나쁜 예', 'Good and bad use')}</h2></div>
<div class="gb"><div class="g"><div class="t">${L('좋은 사례', 'GOOD')}</div><p>${esc(e.goodExample || '')}</p></div><div class="b"><div class="t">${L('과용 · 나쁜 사례', 'OVERUSE')}</div><p>${esc(e.badExample || '')}</p></div></div></section>
<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('파라미터', 'Parameters')}</h2><p>${L('기본값은 클립에 쓴 값', 'Defaults are the values used in the clip')}</p></div>
<div><table class="ptbl"><thead><tr><th>${L('항목', 'PARAM')}</th><th>${L('기본', 'DEFAULT')}</th><th>${L('범위', 'RANGE')}</th><th>${L('메모', 'NOTE')}</th></tr></thead><tbody>${params}</tbody></table>
${e.snippet ? `<div style="margin-top:28px"><div class="prompt"><div class="h"><b>GSAP</b><button class="copy" type="button" data-target="#snip">${L('복사', 'COPY')}</button></div><pre id="snip"><code>${esc(e.snippet)}</code></pre></div></div>` : ''}
<div class="links" style="margin-top:18px">${e.files && e.files.html ? `<a href="${u}../${e.files.html}">${L('라이브 소스 열기', 'Open live source')}</a><a href="${REPO}/blob/main/${e.files.html}">${L('소스 코드', 'Source')}</a>` : ''}<a href="${REPO}/tree/main/effects/${e.slug}">README</a></div></div></section>
<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('에이전트 프롬프트', 'Agent prompts')}</h2><p>${L('그대로 붙여 넣는다', 'Paste as is')}</p></div>
<div>${promptBlock('pc', 'Claude Code', pr.claude, prE.claude)}${promptBlock('px', 'Codex', pr.codex, prE.codex)}</div></section>
${eng.hyperframes || eng.reelforge || eng.scrolline ? `<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('도구별로 쓰기', 'In your tools')}</h2><p>HyperFrames · ReelForge · Scrolline</p></div>
<div class="rows">
${eng.hyperframes ? `<div class="r"><div class="k">HyperFrames<small>VIDEO · GSAP</small></div><div>${esc(eng.hyperframes)}</div></div>` : ''}
${eng.reelforge ? `<div class="r"><div class="k">ReelForge<small>BRIEF TO VIDEO</small></div><div>${esc(eng.reelforge)}</div></div>` : ''}
${eng.scrolline ? `<div class="r"><div class="k">Scrolline Deck<small>SCROLL SCRUB</small></div><div>${esc(eng.scrolline)}</div></div>` : ''}
</div></section>` : ''}
${pairs.length ? `<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('잘 맞는 조합', 'Pairs well with')}</h2></div><div class="pairs">${pairs.map(p => tile(p, 1, { one: false })).join('')}</div></section>` : ''}
${recipes.length || routes.length ? `<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('쓰이는 곳', 'Used in')}</h2></div><div class="rows">${recipes.map(r => `<div class="r"><div class="k">${L('레시피', 'Recipe')}<small>${r.no}</small></div><div><a href="${u}recipe/${r.slug}.html">${L(r.ko, r.en)}</a></div></div>`).join('')}${routes.map(r => `<div class="r"><div class="k">${L('루트', 'Route')}</div><div><a href="${u}route/${r.slug}.html">${L(r.ko, r.en)}</a></div></div>`).join('')}</div></section>` : ''}
<section class="sec"><div class="lab"><div class="dd">${sn()}</div><h2>${L('출처', 'Sources')}</h2><p>${L('개념 출처와 라이선스. 구현은 이 레포에서 새로 씀', 'Concept sources and licenses. Implementations are original to this repo')}</p></div>
<ul class="src">${(e.sources || []).map(s => `<li>${sourceUrl(s.url) ? `<a href="${esc(sourceUrl(s.url))}">${esc(s.title || s.url)}</a>` : `${esc(s.title || '')}${s.url ? ` (<code>${esc(s.url)}</code>)` : ''}`}<span class="lic">${esc(s.license || '')}</span></li>`).join('')}</ul></section>`;
  write(`effect/${e.slug}.html`, page({ title: `${e.ko} · ${e.en} · Awesome AI Motion`, desc: e.oneLinerEn ? `${e.oneLiner} / ${e.oneLinerEn}` : e.oneLiner, depth: 1, active: 'effects', body }));
}

// ── 3. 레시피
function recipes() {
  const list = I.recipes || [];
  const cards = list.map(r => {
    const done = r.render === 'done';
    return `<a class="tile${r.size === '720x1280' ? ' portrait' : ''}" href="recipe/${r.slug}.html"${done ? ` data-mp4="../recipes/${r.slug}/clip.mp4"` : ''}><div class="media">${done ? (r.files.poster ? `<img src="../${r.files.poster}" alt="${esc(r.ko)} · ${esc(r.en)}" loading="lazy">` : `<div class="ph"><div class="big">${L(r.ko, r.en)}</div></div>`) : `<div class="ph"><div class="st">${L('렌더 추가 예정', 'CLIP COMING')}</div><div class="big">${L(r.ko, r.en)}</div><div class="nn">${r.no}</div></div>`}</div><div class="cap"><span class="no">${r.no}</span><span class="ko">${L(r.ko, r.en)}</span><span class="en" lang="ko">${esc(r.en || '')}</span></div><div class="one">${L(r.oneLiner || '', r.oneLinerEn)}</div></a>`;
  }).join('\n');
  write('recipes.html', page({ title: '조합 레시피 · Recipes · Awesome AI Motion', depth: 0, active: 'recipes', body: `
<section class="sec first" style="padding-top:48px"><div class="lab"><div class="dd">R</div><h2>${L('조합 레시피', 'Recipes')}</h2><p>${L('영상 스타일별로 효과를 어떤 순서와 타이밍으로 묶나', 'Which effects to chain, in what order and timing, per video style')}</p></div>
<div class="grid">${cards}</div></section>` }));
  for (const r of list) {
    const done = r.render === 'done';
    const steps = (r.steps || []).map(s => { const e = bySlug.get(s.effect); return `<li><span class="t">${esc(s.at || '')}</span><div><b>${e ? `<a href="../effect/${e.slug}.html">${L(e.ko, e.en)}</a>` : esc(s.effect)}</b> <span class="muted">${esc(s.role || '')}</span>${s.params ? `<div class="mono muted" style="font-size:12px;margin-top:4px">${esc(s.params)}</div>` : ''}</div></li>`; }).join('');
    const pr = r.prompts || {}, prE = r.promptsEn || {};
    const pb = (id, label, ko, en) => ko ? `<div class="prompt"><div class="h"><b>${label}</b><button class="copy" type="button" data-target="#${id}-ko" lang="ko">복사</button>${en ? `<button class="copy" type="button" data-target="#${id}-en" lang="en">COPY</button>` : ''}</div><p id="${id}-ko"${en ? ' lang="ko"' : ''}>${esc(ko)}</p>${en ? `<p id="${id}-en" lang="en">${esc(en)}</p>` : ''}</div>` : '';
    const body = `
<div class="crumb"><a href="../recipes.html">${L('레시피', 'Recipes')}</a> / ${r.no}</div>
<div class="dhead"><div><h1>${L(r.ko, r.en)}</h1><div class="en" lang="ko">${esc(r.en || '')}</div></div><div class="nn">${r.no}</div></div>
<div class="stage">${done ? `<video id="v" src="../../recipes/${r.slug}/clip.mp4" ${r.files.poster ? `poster="../../${r.files.poster}"` : ''} autoplay muted loop playsinline controls preload="metadata"${r.size === '720x1280' ? ' style="max-width:420px;aspect-ratio:9/16;margin:0 auto"' : ''}></video>` : `<div class="ph"><span class="st">${L('렌더 추가 예정', 'CLIP COMING')}</span><span class="big">${L(r.ko, r.en)}</span></div>`}
<div class="stagebar"><span class="fig">${L('레시피', 'Recipe')} ${r.no}. ${esc(r.ko)}${r.duration ? ` · ${esc(r.duration)}` : ''}</span>${done ? `<div class="speed" data-for="#v"><span>${L('재생 속도', 'Speed')}</span><button data-rate="0.25">0.25x</button><button data-rate="0.5">0.5x</button><button data-rate="1" class="on">1x</button></div>` : ''}</div></div>
<p class="one-big">${L(r.oneLiner || '', r.oneLinerEn)}</p>
<section class="sec" style="margin-top:48px"><div class="lab"><div class="dd">01</div><h2>${L('언제 쓰나', 'When to use')}</h2></div><div class="rows">
<div class="r"><div class="k">${L('어울리는 영상', 'Style')}<small>STYLE</small></div><div>${L(r.style || '', r.styleEn)}</div></div>
<div class="r"><div class="k">${L('구조', 'Structure')}<small>STRUCTURE</small></div><div>${L(r.structure || '', r.structureEn)}</div></div>
<div class="r"><div class="k">${L('주의', 'Avoid')}<small>AVOID</small></div><div><ul>${(r.avoid || []).map(a => `<li>${esc(a)}</li>`).join('')}</ul></div></div></div></section>
<section class="sec"><div class="lab"><div class="dd">02</div><h2>${L('순서와 타이밍', 'Order and timing')}</h2></div><ol class="steps">${steps}</ol></section>
<section class="sec"><div class="lab"><div class="dd">03</div><h2>${L('에이전트 프롬프트', 'Agent prompts')}</h2></div><div>${pb('pc', 'Claude Code', pr.claude, prE.claude)}${pb('px', 'Codex', pr.codex, prE.codex)}</div></section>
<div class="links">${r.files.html ? `<a href="../../recipes/${r.slug}/index.html">${L('라이브 소스 열기', 'Open live source')}</a>` : ''}<a href="${REPO}/tree/main/recipes/${r.slug}">README</a></div>`;
    write(`recipe/${r.slug}.html`, page({ title: `${r.ko} · ${r.en || ''} · Awesome AI Motion`, desc: r.oneLiner, depth: 1, active: 'recipes', body }));
  }
}

// ── 4. 루트
function routes() {
  const list = I.routes || [];
  write('routes.html', page({ title: '용도별 루트 · Routes · Awesome AI Motion', depth: 0, active: 'routes', body: `
<section class="sec first" style="padding-top:48px"><div class="lab"><div class="dd">→</div><h2>${L('용도별 루트', 'Design routes')}</h2><p>${L('뉴스레터부터 쇼츠까지. 판단 순서, 구조 템플릿, 권장 효과', 'From newsletters to shorts: decision order, structure templates, recommended effects')}</p></div>
<div class="rgrid">${list.map((r, i) => `<a class="rcard" href="route/${r.slug}.html"><div class="n">${String(i + 1).padStart(2, '0')}</div><h3>${L(r.ko, r.en)}</h3><p>${L(r.oneLiner || '', r.oneLinerEn)}</p></a>`).join('')}</div>
<p class="muted" lang="en" style="margin-top:24px">Route documents are written in Korean.</p></section>` }));
  for (const r of list) {
    const src = fs.existsSync(path.join(ROOT, r.file)) ? fs.readFileSync(path.join(ROOT, r.file), 'utf8') : '';
    const link = u => /^(https?:|#)/.test(u) ? u : `${REPO}/blob/main/${path.posix.normalize(path.posix.join('routes', u))}`;
    const html = md(src, { link });
    const toc = [...src.matchAll(/^##\s+(.+)$/gm)].map(m => { const id = m[1].replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').toLowerCase(); return `<a href="#${esc(id)}">${esc(m[1].replace(/[*`]/g, ''))}</a>`; }).join('');
    const eff = (r.effects || []).map(s => bySlug.get(s)).filter(Boolean);
    const body = `<div class="crumb"><a href="../routes.html">${L('루트', 'Routes')}</a> / ${L(r.ko, r.en)}</div>
<div class="docgrid"><aside class="toc">${toc}${eff.length ? `<div style="margin-top:24px" class="mono muted">${L('연결 효과', 'Linked effects')} ${eff.length}</div>` : ''}</aside><article class="doc">${html}
${eff.length ? `<h2>${L('연결된 효과', 'Linked effects')}</h2><div class="pairs">${eff.map(p => tile(p, 1, { one: false })).join('')}</div>` : ''}</article></div>`;
    write(`route/${r.slug}.html`, page({ title: `${r.ko} · ${r.en || ''} · Awesome AI Motion`, desc: r.oneLiner, depth: 1, active: 'routes', body }));
  }
}

// ── 5. 용어
function glossary() {
  const g = I.glossary || [];
  const groups = {};
  for (const t of g) (groups[t.group || '기타'] ||= []).push(t);
  const body = `
<section class="sec first" style="padding-top:48px"><div class="lab"><div class="dd">Aa</div><h2>${L('용어 사전', 'Glossary')}</h2><p>${L('모션 사전 네 권에서 뽑은 설계 용어. 클립이 있는 항목은 연결', 'Design terms from the four-volume motion dictionary, linked to clips where available')}</p></div>
<div class="gl"><label class="search"><input id="gq" type="search" data-ph-ko="용어 찾기" data-ph-en="Find a term" autocomplete="off"><span class="cnt" id="gcnt"></span></label>
${Object.entries(groups).map(([k, ts]) => `<div class="glsec"><div class="fam-h"><h3>${esc(k)}</h3><span class="d">${ts.length}</span></div>${ts.map(t => {
    const e = t.effect && bySlug.get(t.effect);
    return `<div class="term" data-q="${esc([t.ko, t.en, t.def].join(' '))}"><h3>${esc(t.ko)}<small>${esc(t.en || '')}</small></h3><div><p>${esc(t.def || '')}</p>${t.params ? `<div class="src">${esc(t.params)}</div>` : ''}${e ? `<div class="see">${L('클립', 'Clip')} · <a href="effect/${e.slug}.html">Nº ${e.no} ${L(e.ko, e.en)}</a></div>` : ''}</div></div>`;
  }).join('')}</div>`).join('')}</div></section>`;
  write('glossary.html', page({ title: '용어 사전 · Glossary · Awesome AI Motion', depth: 0, active: 'glossary', body }));
}

// ── 6. 스킬로 쓰기
function skill() {
  const src = fs.readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8').replace(/^---[\s\S]*?---\n/, '');
  const toc = [...src.matchAll(/^##\s+(.+)$/gm)].map(m => { const id = m[1].replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').toLowerCase(); return `<a href="#${esc(id)}">${esc(m[1])}</a>`; }).join('');
  const body = `<div class="docgrid"><aside class="toc">${toc}</aside><article class="doc"><p class="muted">한국어·영어 작업 흐름과 필요한 참조 문서를 제공한다. / Bilingual workflow with references loaded on demand.</p>${md(src, { link: u => /^https?:|^#/.test(u) ? u : `${REPO}/blob/main/${u.replace(/^\.\//, '')}` })}</article></div>`;
  write('skill.html', page({ title: '스킬로 쓰기 · Use as a skill · Awesome AI Motion', depth: 0, active: 'skill', body }));
}

for (const d of ['effect', 'recipe', 'route']) fs.rmSync(path.join(SITE, d), { recursive: true, force: true });
home();
I.effects.forEach(detail);
recipes();
routes();
glossary();
if (fs.existsSync(path.join(ROOT, 'SKILL.md'))) skill();
console.log(`site: 효과 ${I.effects.length} · 레시피 ${(I.recipes || []).length} · 루트 ${(I.routes || []).length} · 용어 ${(I.glossary || []).length}`);
