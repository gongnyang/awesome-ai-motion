// Skill entrypoint and on-demand lists. Called by build-docs.mjs with index.json.
import fs from 'node:fs';
import path from 'node:path';

export function buildSkill(ROOT, I) {
  const write = (file, text) => fs.writeFileSync(path.join(ROOT, file), `${text.trimEnd()}\n`);
  const cell = value => String(value ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ').replace(/[\u2013\u2014]/g, ', ');
  const by = new Map(I.effects.map(e => [e.slug, e]));
  const effectLink = slug => by.has(slug) ? `[${slug}](../effects/${slug}/README.md)` : `\`${slug}\``;
  const heading = title => [`# ${title}`, '', '정본 [index.json](../index.json)에서 생성. 필요한 절만 읽는다.', 'Generated from [index.json](../index.json). Read only the relevant section.', ''];
  const purposeEn = ['Attention', 'Explanation', 'Comparison', 'Sequence and flow', 'Emphasis', 'Transition', 'Data evidence', 'Feedback', 'Atmosphere', 'Branding'];
  const mediumEn = ['Explainer video', 'Short form', 'Scroll deck', 'Presentation', 'Product demo', 'Data story', 'Web UI'];
  const ranked = list => [...list].sort((a, b) => Number(b.render === 'done') - Number(a.render === 'done'));
  const candidates = list => ranked(list).slice(0, 8).map(e => effectLink(e.slug)).join(' · ');
  const D = heading('효과 고르는 결정표 · Motion decision tables');
  D.push('## 장면 의도로 고르기 · Choose by scene intent', '', '| 장면 · Scene | 구성 · Structure | 효과·레시피 · Effects and recipe |', '|---|---|---|');
  D.push(`| 교육·설명 영상 첫 5초 훅 · First five seconds of an educational or explainer video | 0~1초 질문·의외의 결과, 1~3초 원리나 비교의 단서, 3~5초 학습 약속과 읽을 홀드. 한 화면 한 주장. / 0~1s question or surprising result; 1~3s a clue to the mechanism or comparison; 3~5s a learning promise and readable hold. One claim per screen. | ${['mask-reveal', 'split-compare', 'count-up', 'annotation-callout'].map(effectLink).join(' · ')}${(I.recipes || []).some(r => r.slug === 'edu-hook') ? ' · [edu-hook](../recipes/edu-hook/README.md)' : ' · [레시피 목록 · Recipes](recipes.md)'} |`);
  D.push('', '큰 카메라 이동은 질문이나 결과를 드러낼 때만 사용한다. 도해 설명 중에는 초점과 읽기 시간을 지킨다.', 'Use large camera motion only to reveal a question or result; preserve focus and reading time during explanation.', '');
  for (const [field, labels, title] of [['purposes', purposeEn, '목적으로 고르기 · Choose by purpose'], ['media', mediumEn, '매체로 고르기 · Choose by medium']]) {
    D.push(`## ${title}`, '', '| 기준 · Criterion | 먼저 볼 효과 · Candidates | 전체 수 · Total |', '|---|---|---|');
    I[field].forEach((label, i) => {
      const list = I.effects.filter(e => (e[field] || []).includes(label));
      if (list.length) D.push(`| ${cell(label)} · ${labels[i] || cell(label)} | ${candidates(list)} | ${list.length} |`);
    });
    D.push('');
  }
  D.push('## 동작 분류 · Motion families', '', '| Family | 뜻 · Meaning | 효과 · Effects | 클립 · Clips |', '|---|---|---|---|');
  for (const [key, f] of Object.entries(I.families)) {
    const list = I.effects.filter(e => e.family === key);
    if (list.length) D.push(`| \`${key}\` ${cell(f.ko)} · ${cell(f.en)} | ${cell(f.desc)} / ${cell(f.descEn || f.en)} | ${list.length} | ${list.filter(e => e.render === 'done').length} |`);
  }
  write('references/decision-tables.md', D.join('\n'));

  const R = heading('레시피 목록 · Recipe index');
  R.push('각 레시피의 순서·타이밍·프롬프트는 연결된 카드에서 읽는다.', 'Open a recipe card for timing, sequence and prompts.', '', '| 레시피 · Recipe | 언제 · Use when | 효과 순서 · Sequence |', '|---|---|---|');
  for (const r of I.recipes || []) R.push(`| [${cell(r.ko)} · ${cell(r.en || r.slug)}](../recipes/${r.slug}/README.md) | ${cell(r.style)} / ${cell(r.styleEn || r.oneLinerEn || r.en)} | ${(r.steps || []).map(s => effectLink(s.effect)).join(' → ')} |`);
  write('references/recipes.md', R.join('\n'));

  const routeUse = {
    newsletter: ['이메일·글 속 짧은 GIF와 도해', 'Short GIFs and diagrams within email or articles'],
    infographic: ['데이터와 비교를 보여 주는 도판', 'Diagrams showing data and comparisons'],
    thumbnail: ['썸네일·강의 카드·표지 정지 컷', 'Still frames for thumbnails, lesson cards and covers'],
    'video-editing': ['강의·설명 영상의 컷과 도해', 'Cuts and diagrams for educational or explainer videos'],
    promo: ['제품·서비스 소개와 홍보', 'Product or service introductions and promotion'],
    shorts: ['세로 피드의 훅과 핵심 메시지', 'Hooks and key messages for vertical feeds'],
    'deck-and-site': ['스크롤덱과 웹사이트 장면', 'Scroll deck and website scenes'],
  };
  const T = heading('용도별 루트 목록 · Design route index');
  T.push('산출물이 정해졌을 때 해당 문서의 판단 순서를 따른다.', 'When the deliverable is known, follow the decision order in its route document.', '', '| 루트 · Route | 용도 · Deliverable | 관련 효과 · Related effects |', '|---|---|---|');
  for (const r of I.routes || []) {
    // Dates in route source summaries do not belong in this reusable index.
    const usage = routeUse[r.slug] || [r.ko, r.en || r.slug];
    T.push(`| [${cell(r.ko)} · ${cell(r.en || r.slug)}](../${r.file}) | ${usage.map(cell).join(' / ')} | ${(r.effects || []).filter(s => by.has(s)).slice(0, 8).map(effectLink).join(' · ')} |`);
  }
  write('references/routes.md', T.join('\n'));

  const C = heading('렌더 완료 클립 목록 · Rendered clip index');
  C.push('완료 상태의 효과·레시피만 표시한다. 새 클립은 정본을 갱신하고 재생성하면 나타난다.', 'Only completed effects and recipes are listed. Update the source and rebuild to include new clips.', '');
  for (const [kind, list, title] of [['effects', I.effects, '효과 · Effects'], ['recipes', I.recipes || [], '레시피 · Recipes']]) {
    C.push(`## ${title}`, '', '| 이름 · Name | MP4 | GIF | HTML |', '|---|---|---|---|');
    for (const item of list.filter(e => e.render === 'done')) {
      const dir = `../${kind}/${item.slug}`;
      C.push(`| [${cell(item.ko)} · ${cell(item.en || item.slug)}](${dir}/README.md) | [MP4](${dir}/clip.mp4) | [GIF](${dir}/preview.gif) | [HTML](${dir}/index.html) |`);
    }
    C.push('');
  }
  write('references/clips.md', C.join('\n'));

  const counts = `효과 ${I.effects.length}개 · 클립 ${I.effects.filter(e => e.render === 'done').length}개 · 레시피 ${(I.recipes || []).length}개 · 루트 ${(I.routes || []).length}개\n${I.effects.length} effects · ${I.effects.filter(e => e.render === 'done').length} clips · ${(I.recipes || []).length} recipes · ${(I.routes || []).length} routes`;
  const text = fs.readFileSync(path.join(ROOT, 'scripts/templates/skill.txt'), 'utf8').replace('{{counts}}', counts);
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
  const lines = body.split('\n').length;
  const description = text.match(/^description: (.+)$/m)?.[1] || '';
  if (lines < 80 || lines > 120 || Buffer.byteLength(text) > 8192 || description.length < 300 || description.length > 450) {
    throw new Error(`SKILL budget: ${lines} body lines, ${Buffer.byteLength(text)} bytes, ${description.length} description chars`);
  }
  write('SKILL.md', text);
}
