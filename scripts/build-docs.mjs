#!/usr/bin/env node
// index.json(정본) → 효과·레시피 README.md, references/catalog.md(MD 모음집), references/decision-tables.md,
// SKILL.md와 references/의 결정표·레시피·루트·클립 목록은 build-skill.mjs로 생성.
// 사용: node scripts/build-docs.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { effectCard, sourceReference } from './effect-card.mjs';
import { recipeCard } from './recipe-card.mjs';
import { markdownAnchor } from './source-links.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I = JSON.parse(fs.readFileSync(path.join(ROOT, 'index.json'), 'utf8'));
const FAM = I.families;
const by = new Map(I.effects.map(e => [e.slug, e]));
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const w = (rel, s) => { const p = path.join(ROOT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };

function effectMd(e, forCatalog = false) {
  const f = FAM[e.family] || { ko: e.family };
  const rel = forCatalog ? `../effects/${e.slug}/` : '';
  const L = [];
  L.push(`${forCatalog ? '###' : '#'} Nº ${e.no} ${e.ko} · ${e.en}`, '');
  if (!forCatalog) {
    L.push(e.render === 'done' ? `![${e.ko} 3초 클립](preview.gif)` : '> 클립 렌더 추가 예정. 정의·파라미터·프롬프트는 그대로 쓸 수 있다.', '');
    if (e.render === 'done') L.push(`[mp4](clip.mp4) · [라이브 소스](index.html) · [사이트 상세](../../site/effect/${e.slug}.html)`, '');
  } else if (e.render === 'done') L.push(`[클립](${rel}preview.gif) · [README](${rel})`, '');
  L.push(`**${e.oneLiner || ''}**`, '');
  if (e.oneLinerEn && !forCatalog) L.push(`*${e.oneLinerEn}*`, '');
  L.push(`| 분류 | 난이도 | 목적 | 매체 | 런타임 |`, `|---|---|---|---|---|`, `| ${cell(f.ko)} | ${cell(e.level)} | ${cell((e.purposes || []).join(', '))} | ${cell((e.media || []).join(', '))} | ${cell(e.runtime)} |`, '');
  if ((e.aka || []).length) L.push(`다른 이름: ${e.aka.join(', ')}`, '');
  const h = forCatalog ? '####' : '##';
  L.push(`${h} 무엇을 전하나`, '', e.conveys || '', '');
  L.push(`${h} 언제 쓰나`, '', ...(e.useWhen || []).map(x => `- ${x}`), '');
  L.push(`${h} 좋은 예와 나쁜 예`, '', `- 좋은 예: ${e.goodExample || ''}`, `- 나쁜 예: ${e.badExample || ''}`, '');
  L.push(`${h} 과용 주의`, '', ...(e.avoid || []).map(x => `- ${x}`), '');
  if ((e.params || []).length) {
    L.push(`${h} 파라미터`, '', '| 항목 | 기본 | 범위 | 메모 |', '|---|---|---|---|', ...e.params.map(p => `| ${cell(p.name)} | ${cell(p.default)} | ${cell(p.range)} | ${cell(p.note)} |`), '');
    if (e.ease) L.push(`이징: \`${e.ease}\``, '');
  }
  if (e.snippet) L.push(`${h} 구현 요지 (GSAP)`, '', '```js', e.snippet, '```', '');
  const p = e.prompts || {};
  L.push(`${h} 에이전트 프롬프트`, '');
  if (p.claude) L.push('Claude Code', '', '```text', p.claude, '```', '');
  if (p.codex) L.push('Codex', '', '```text', p.codex, '```', '');
  const pe = e.promptsEn || {};
  if (!forCatalog && (e.oneLinerEn || pe.claude)) {
    L.push('## In English', '');
    if (e.oneLinerEn) L.push(`**${e.en}.** ${e.oneLinerEn}`, '');
    if (e.conveysEn) L.push(`What it tells the viewer: ${e.conveysEn}`, '');
    if ((e.useWhenEn || []).length) L.push('Use when:', '', ...e.useWhenEn.map(x => `- ${x}`), '');
    if (pe.claude) L.push('Claude Code prompt', '', '```text', pe.claude, '```', '');
    if (pe.codex) L.push('Codex prompt', '', '```text', pe.codex, '```', '');
  }
  const g = e.engines || {};
  if (g.hyperframes || g.reelforge || g.scrolline) {
    L.push(`${h} 도구별로 쓰기`, '');
    if (g.hyperframes) L.push(`- HyperFrames: ${g.hyperframes}`);
    if (g.reelforge) L.push(`- ReelForge: ${g.reelforge}`);
    if (g.scrolline) L.push(`- Scrolline Deck: ${g.scrolline}`);
    L.push('');
  }
  const pairs = (e.pairsWith || []).map(s => by.get(s)).filter(Boolean);
  if (pairs.length) L.push(`${h} 잘 맞는 조합`, '', pairs.map(x => `[${x.ko}](${forCatalog ? `#${markdownAnchor(`Nº ${x.no} ${x.ko} · ${x.en}`)}` : `../${x.slug}/`})`).join(' · '), '');
  if ((e.sources || []).length) L.push(`${h} 출처`, '', ...e.sources.map(s => `- ${sourceReference(s)}`), '');
  return L.join('\n');
}

// 1. 효과 README
for (const e of I.effects) w(`effects/${e.slug}/README.md`, effectCard(e, I));

// 2. 레시피 README
for (const r of I.recipes || []) {
  if (r.slug === 'edu-hook') { w(`recipes/${r.slug}/README.md`, recipeCard(r, I)); continue; }
  const L = [`# ${r.no} ${r.ko} · ${r.en || ''}`, ''];
  L.push(r.render === 'done' ? '![레시피 클립](preview.gif)' : '> 클립 렌더 추가 예정', '');
  L.push(`**${r.oneLiner || ''}**`, '', `- 어울리는 영상: ${r.style || ''}`, `- 구조: ${r.structure || ''}`, `- 길이: ${r.duration || ''}`, '');
  L.push('## 순서와 타이밍', '', '| 시각 | 효과 | 역할 | 파라미터 |', '|---|---|---|---|', ...(r.steps || []).map(s => { const e = by.get(s.effect); return `| ${cell(s.at)} | ${e ? `[${e.ko}](../../effects/${e.slug}/)` : cell(s.effect)} | ${cell(s.role)} | ${cell(s.params)} |`; }), '');
  if ((r.avoid || []).length) L.push('## 주의', '', ...r.avoid.map(a => `- ${a}`), '');
  const p = r.prompts || {};
  L.push('## 에이전트 프롬프트', '');
  if (p.claude) L.push('Claude Code', '', '```text', p.claude, '```', '');
  if (p.codex) L.push('Codex', '', '```text', p.codex, '```', '');
  w(`recipes/${r.slug}/README.md`, L.join('\n'));
}

// 3. MD 모음집(가족별 전체)
{
  const L = ['# 모션 기법 모음집', '', `효과 ${I.counts.effects}개(클립 ${I.counts.rendered}개). 정본은 [index.json](../index.json), 이 파일은 거기서 생성된다.`, ''];
  L.push('## 차례', '', ...Object.entries(FAM).map(([k, f]) => { const n = I.effects.filter(e => e.family === k).length; return n ? `- [${f.ko} · ${f.en}](#${markdownAnchor(`${f.ko} · ${f.en}`)}) ${n}개` : ''; }).filter(Boolean), '');
  for (const [k, f] of Object.entries(FAM)) {
    const list = I.effects.filter(e => e.family === k);
    if (!list.length) continue;
    L.push(`## ${f.ko} · ${f.en}`, '', f.desc, '', '| Nº | 효과 | 한 줄 정의 | 클립 |', '|---|---|---|---|', ...list.map(e => `| ${e.no} | [${e.ko} · ${e.en}](../effects/${e.slug}/) | ${cell(e.oneLiner)} | ${e.render === 'done' ? '있음' : '예정'} |`), '');
    for (const e of list) L.push(effectMd(e, true), '');
  }
  w('references/catalog.md', L.join('\n'));
}

// 4. Compact skill entrypoint and on-demand references (owned by skill generator).
const { buildSkill } = await import('./build-skill.mjs');
buildSkill(ROOT, I);
console.log(`docs: README ${I.effects.length}+${(I.recipes || []).length}, catalog.md, skill references`);
