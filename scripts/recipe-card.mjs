// Bilingual recipe card for recipes with translated cautions and timing roles.
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
export function recipeCard(r, index) {
  const by = new Map(index.effects.map(e => [e.slug, e]));
  const L = [`# ${r.no} ${r.ko} · ${r.en}`, ''];
  L.push(r.render === 'done' ? '![교육 첫 5초 훅 · Educational opening hook](preview.gif)' : '> 클립 렌더 예정 / Clip rendering planned.', '');
  if (r.render === 'done') L.push('[MP4](clip.mp4) · [HTML](index.html)', '');
  L.push(`**${r.oneLiner}**`, '', r.oneLinerEn, '', `- 영상 / Video: ${r.style} / ${r.styleEn}`, `- 구조 / Structure: ${r.structure} / ${r.structureEn}`, `- 길이·화면 / Duration & canvas: ${r.duration} · ${r.size} (16:9)`, '');
  L.push('## 순서와 타이밍 / Sequence & timing', '', '| 시각 / Time | 효과 / Effect | 역할 / Role | 파라미터 / Parameters |', '|---|---|---|---|', ...(r.steps || []).map(s => {
    const e = by.get(s.effect);
    return `| ${cell(s.at)} | ${e ? `[${e.ko} · ${e.en}](../../effects/${e.slug}/)` : cell(s.effect)} | ${cell(s.role)} | ${cell(s.params)} |`;
  }), '');
  L.push('## 소재 바꾸기 / Adapt the lesson', '', '질문, 세 단계 경로, 학습 목표를 본편 주제로 교체하고 타이밍과 16:9 구도를 유지한다.', 'Replace the question, three-step path, and learning goal with your lesson topic while keeping the timing and 16:9 layout.', '', '예시 / Example: “분수는 왜 나눌까?” → “전체 → 같은 크기 조각 → 분수” → “부분과 전체의 관계” / “Why do fractions divide?” → “Whole → Equal parts → Fraction” → “How parts relate to a whole”.', '');
  L.push('## 주의 / Cautions', '', ...(r.avoid || []).map((a, i) => `- ${a}${r.avoidEn?.[i] ? ` / ${r.avoidEn[i]}` : ''}`), '');
  L.push('## 에이전트 프롬프트 / Agent prompts', '');
  for (const [label, p] of [['한국어', r.prompts], ['English', r.promptsEn]]) for (const tool of ['claude', 'codex']) if (p?.[tool]) L.push(`### ${label} · ${tool === 'claude' ? 'Claude Code' : 'Codex'}`, '```text', p[tool], '```', '');
  L.push('## 렌더 / Render', '', '```sh', 'node scripts/render.mjs recipes/edu-hook --jobs 1', '```', '', '[레시피 목록 / Recipes](../../site/recipes.html) · [index.json](../../index.json)', '');
  return L.join('\n');
}
