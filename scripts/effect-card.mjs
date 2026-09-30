import { sourceMarkdown } from './source-links.mjs';
// Compact bilingual effect cards. Catalog detail stays in build-docs.mjs.
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

export function sourceReference(s) {
  const reference = sourceMarkdown(s);
  return `${reference}${s.license ? ` (${s.license})` : ''}`;
}

export function effectCard(e, index) {
  const f = index.families[e.family] || { ko: e.family, en: e.family };
  const L = [`# Nº ${e.no} ${e.ko} · ${e.en}`, ''];
  if (e.render === 'done') L.push(`![${e.ko} · ${e.en}](preview.gif)`, '', '[MP4](clip.mp4) · [HTML](index.html)', '');
  else L.push('> 클립 렌더 예정 / Clip rendering planned.', '');
  L.push(`**${e.oneLiner || ''}**`, '', e.oneLinerEn || '', '');
  L.push('| Family | Level | Purpose | Media | Runtime |', '|---|---|---|---|---|', `| ${cell(f.ko)} · ${cell(f.en)} | ${cell(e.level)} | ${cell((e.purposes || []).join(', '))} | ${cell((e.media || []).join(', '))} | ${cell(e.runtime)} |`, '');
  const names = new Set([e.ko, e.en].map(n => n.toLowerCase()));
  const aliases = (e.aka || []).filter(a => { const key = a.toLowerCase(); if (names.has(key)) return false; names.add(key); return true; });
  if (aliases.length) L.push(`다른 이름 / Also known as: ${aliases.join(', ')}`, '');
  L.push('## 선택 기준 / Selection', '', `${e.conveys || ''}${e.conveysEn ? ` / ${e.conveysEn}` : ''}`, '');
  const uses = e.useWhen || [], usesEn = e.useWhenEn || [];
  for (let i = 0; i < Math.max(uses.length, usesEn.length); i++) L.push(`- ${[uses[i], usesEn[i]].filter(Boolean).join(' / ')}`);
  L.push('', `좋은 예 / Good: ${e.goodExample || ''}`, `나쁜 예 / Bad: ${e.badExample || ''}`, `주의 / Avoid: ${(e.avoid || []).join(' · ')}`, '');
  if (e.params?.length) {
    L.push('## 파라미터 / Parameters', '', '| Parameter | Default | Range | Note |', '|---|---|---|---|', ...e.params.map(p => `| ${cell(p.name)} | ${cell(p.default)} | ${cell(p.range)} | ${cell(p.note)} |`), '');
    if (e.ease && !e.params.some(p => /이징|ease|easing/i.test(p.name) && p.default === e.ease)) L.push(`이징 / Ease: \`${e.ease}\``, '');
  }
  if (e.snippet) L.push('## 구현 / Implementation (GSAP)', '', '```js', e.snippet, '```', '');
  L.push('## 프롬프트 / Prompts', '');
  for (const [label, p] of [['한국어', e.prompts], ['English', e.promptsEn]]) {
    for (const tool of ['claude', 'codex']) {
      if (p?.[tool]) L.push(`### ${label} · ${tool === 'claude' ? 'Claude Code' : 'Codex'}`, '```text', p[tool], '```', '');
    }
  }
  L.push(`예시 / Example: ${e.ko}를 \`.hero\`에 적용해. / Apply ${e.en} to \`.hero\`.`, '');
  const g = e.engines || {};
  if (g.hyperframes || g.reelforge || g.scrolline) {
    L.push('## 적용 / Application', '');
    for (const [key, label] of [['hyperframes', 'HyperFrames'], ['reelforge', 'ReelForge'], ['scrolline', 'Scrolline Deck']]) if (g[key]) L.push(`- ${label}: ${g[key]}`);
    L.push('');
  }
  const pairs = (e.pairsWith || []).map(s => index.effects.find(x => x.slug === s)).filter(Boolean);
  if (pairs.length) L.push(`조합 / Pair with: ${pairs.map(x => `[${x.ko} · ${x.en}](../${x.slug}/)`).join(' · ')}`, '');
  if (e.sources?.length) L.push(`출처 / Sources: ${e.sources.map(sourceReference).join(' · ')}`, '');
  L.push('[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)', '');
  return L.join('\n');
}
