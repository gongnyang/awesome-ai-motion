#!/usr/bin/env node
// .staging/meta/*.json(효과), .staging/recipes/*.json(레시피)을 정본 index.json에 병합한다.
// - 이미 index.json에 있는 slug는 스테이징 값으로 덮어쓴다(스테이징이 최신).
// - 번호(no)는 family 순서 → family 안 기존 순서 → 새 항목 순으로 매긴다.
// - 효과 HTML의 body data-no/data-cat/data-ko/data-en 을 index.json 값으로 동기화한다.
// 사용: node scripts/merge.mjs [--no-sync]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IDX = path.join(ROOT, 'index.json');
const tax = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'taxonomy.json'), 'utf8'));
const idx = fs.existsSync(IDX) ? JSON.parse(fs.readFileSync(IDX, 'utf8')) : {};
const famOrder = Object.keys(tax.families);

function readDir(d) {
  const p = path.join(ROOT, d);
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => f.endsWith('.json')).sort().map(f => {
    try { return JSON.parse(fs.readFileSync(path.join(p, f), 'utf8')); }
    catch (e) { console.error('JSON 오류', d, f, e.message); process.exitCode = 1; return null; }
  }).filter(Boolean);
}

function mergeList(old = [], staged) {
  const map = new Map(old.map(e => [e.slug, e]));
  const order = old.map(e => e.slug);
  for (const s of staged) {
    if (!map.has(s.slug)) order.push(s.slug);
    map.set(s.slug, Object.assign({}, map.get(s.slug) || {}, s));
  }
  return order.map(s => map.get(s));
}

let effects = mergeList(idx.effects, readDir('.staging/meta'));
// 영문 보강(.staging/meta-en): 같은 slug에 필드만 덧씌움
for (const en of readDir('.staging/meta-en')) { const e = effects.find(x => x.slug === en.slug); if (e) Object.assign(e, en); }
for (const e of effects) {
  if (!tax.families[e.family]) { console.error(`알 수 없는 family: ${e.slug} → ${e.family}`); process.exitCode = 1; }
  const dir = path.join(ROOT, 'effects', e.slug);
  const has = f => fs.existsSync(path.join(dir, f));
  e.render = has('clip.mp4') ? 'done' : 'planned';
  e.files = e.render === 'done'
    ? { html: `effects/${e.slug}/index.html`, mp4: `effects/${e.slug}/clip.mp4`, gif: `effects/${e.slug}/preview.gif`, poster: `effects/${e.slug}/poster.jpg` }
    : (has('index.html') ? { html: `effects/${e.slug}/index.html` } : {});
}
// family 순서로 안정 정렬 후 번호
effects = effects.map((e, i) => [e, i]).sort((a, b) => (famOrder.indexOf(a[0].family) - famOrder.indexOf(b[0].family)) || (a[1] - b[1])).map(x => x[0]);
effects.forEach((e, i) => { e.no = String(i + 1).padStart(3, '0'); });

let recipes = mergeList(idx.recipes, readDir('.staging/recipes'));
for (const en of readDir('.staging/recipes-en')) { const r = recipes.find(x => x.slug === en.slug); if (r) Object.assign(r, en); }
recipes.forEach((r, i) => {
  r.no = 'R' + String(i + 1).padStart(2, '0');
  const dir = path.join(ROOT, 'recipes', r.slug);
  r.render = fs.existsSync(path.join(dir, 'clip.mp4')) ? 'done' : 'planned';
  const hp = path.join(dir, 'index.html');
  if (fs.existsSync(hp)) { const m = fs.readFileSync(hp, 'utf8').match(/data-size="(\d+x\d+)"/); if (m) r.size = m[1]; }
  r.files = r.render === 'done' ? { html: `recipes/${r.slug}/index.html`, mp4: `recipes/${r.slug}/clip.mp4`, gif: `recipes/${r.slug}/preview.gif`, poster: `recipes/${r.slug}/poster.jpg` } : {};
});

// 용어: research/glossary.json → 효과 연결(이름·영문 일치)
let glossary = idx.glossary || [];
const gp = path.join(ROOT, 'research', 'glossary.json');
if (fs.existsSync(gp)) glossary = JSON.parse(fs.readFileSync(gp, 'utf8'));
const nk = s => String(s || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const eByName = new Map();
for (const e of effects) { [e.ko, e.en, ...(e.aka || [])].forEach(n => { if (n && !eByName.has(nk(n))) eByName.set(nk(n), e.slug); }); }
for (const t of glossary) {
  if (t.effect && effects.some(e => e.slug === t.effect)) continue;
  const cands = [t.ko, t.en, ...(String(t.en || '').split(/[\/,]/))];
  t.effect = cands.map(c => eByName.get(nk(c))).find(Boolean) || '';
}

// 루트: routes/*.md → 제목·첫 문단·연결 효과
const routes = [];
const RD = path.join(ROOT, 'routes');
if (fs.existsSync(RD)) {
  const order = ['뉴스레터', '인포그래픽', '썸네일', '영상편집', '소개홍보', '쇼츠', '덱과사이트'];
  const files = fs.readdirSync(RD).filter(f => f.endsWith('.md') && f !== 'README.md').sort((a, b) => ((order.indexOf(a.replace('.md', '')) + 99) % 99) - ((order.indexOf(b.replace('.md', '')) + 99) % 99));
  for (const f of files) {
    const src = fs.readFileSync(path.join(RD, f), 'utf8');
    const title = (src.match(/^#\s+(.+)$/m) || [, f.replace('.md', '')])[1].trim();
    const para = src.replace(/^#.*$/m, '').split(/\n\s*\n/).map(x => x.trim()).find(x => x && !/^[#|>`-]/.test(x)) || '';
    const slugs = effects.filter(e => src.includes(e.slug) || (e.ko.length > 2 && src.includes(e.ko))).map(e => e.slug);
    const slugMap = { '뉴스레터': 'newsletter', '인포그래픽': 'infographic', '썸네일': 'thumbnail', '영상편집': 'video-editing', '소개홍보': 'promo', '쇼츠': 'shorts', '덱과사이트': 'deck-and-site' };
    const base = f.replace('.md', '');
    const enMap = { newsletter: 'Newsletter', infographic: 'Infographic', thumbnail: 'Thumbnail', 'video-editing': 'Video editing', promo: 'Intro & promo', shorts: 'Shorts', 'deck-and-site': 'Decks & sites' };
    const rs = slugMap[base] || base.replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'route-' + routes.length;
    routes.push({ slug: rs, ko: base, en: enMap[rs] || rs, title, oneLiner: para.replace(/\s+/g, ' ').slice(0, 160), file: `routes/${f}`, effects: slugs });
  }
}

const out = {
  name: 'awesome-ai-motion',
  version: tax.version,
  description: tax.description,
  descriptionEn: tax.description_en,
  families: tax.families,
  purposes: tax.purposes,
  media: tax.media,
  levels: tax.levels,
  counts: { effects: effects.length, rendered: effects.filter(e => e.render === 'done').length, recipes: recipes.length },
  effects,
  recipes,
  routes: routes.length ? routes : (idx.routes || []),
  glossary,
};
for (const k of Object.keys(idx)) if (!(k in out)) out[k] = idx[k];
fs.writeFileSync(IDX, JSON.stringify(out, null, 1) + '\n');

// HTML 동기화
if (!process.argv.includes('--no-sync')) {
  const setAttr = (html, k, v) => {
    const re = new RegExp(`(<body[^>]*\\s${k}=")[^"]*(")`);
    return re.test(html) ? html.replace(re, `$1${v}$2`) : html.replace(/<body/, `<body ${k}="${v}"`);
  };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const sync = (file, e, cat) => {
    if (!fs.existsSync(file)) return;
    let h = fs.readFileSync(file, 'utf8');
    const before = h;
    h = setAttr(h, 'data-no', e.no); h = setAttr(h, 'data-cat', esc(cat));
    h = setAttr(h, 'data-ko', esc(e.ko)); h = setAttr(h, 'data-en', esc(e.en));
    if (h !== before) fs.writeFileSync(file, h);
  };
  for (const e of effects) { const f = tax.families[e.family] || { ko: '', en: '' }; sync(path.join(ROOT, 'effects', e.slug, 'index.html'), e, `${f.ko} · ${f.en}`); }
  for (const r of recipes) sync(path.join(ROOT, 'recipes', r.slug, 'index.html'), r, `레시피 · ${r.style || 'RECIPE'}`);
}
console.log(`index.json: 효과 ${out.counts.effects} (렌더 ${out.counts.rendered}) · 레시피 ${recipes.length}`);
