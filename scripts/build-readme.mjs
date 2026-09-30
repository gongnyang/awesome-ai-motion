#!/usr/bin/env node
// index.json → bilingual entrances and docs navigation. Run via scripts/build.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { syncRender } from './sync-render.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I = syncRender(JSON.parse(fs.readFileSync(path.join(ROOT, 'index.json'), 'utf8')), ROOT);
const SITE = 'https://gongnyang.github.io/awesome-ai-motion/';
const REPO = 'https://github.com/gongnyang/awesome-ai-motion';
const effects = I.effects;
const recipes = I.recipes || [];
const routes = I.routes || [];
const rendered = effects.filter(e => e.render === 'done').length;
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ').replace(/[\u2013\u2014]/g, ', ');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const featuredSlugs = ['infinite-pan', 'camera-flythrough', 'infinite-zoom', 'deep-parallax', 'kinetic-type-sweep', 'giant-mask-reveal', 'particle-assemble', 'morph-match-cut', 'card-flip-stack', 'perspective-tilt', 'shader-wipe', 'noise-dissolve', 'light-sweep', 'scroll-scrub-cinema', 'ken-burns', 'overlapping-action'];
const available = (dir, entry) => entry.render === 'done' && fs.existsSync(path.join(ROOT, dir, entry.slug, 'preview.gif'));
const ranked = [...featuredSlugs.map(slug => effects.find(e => e.slug === slug)).filter(Boolean),
  ...effects.filter(e => !featuredSlugs.includes(e.slug))];
const featured = ranked.filter(e => available('effects', e)).slice(0, 16);
const recipeSlugs = ['edu-hook', 'shorts-hook', 'title-opener', 'product-demo', 'data-story', 'concept-explainer', 'before-after', 'scrolldeck-scene'];
const featuredRecipes = [...recipeSlugs.map(slug => recipes.find(r => r.slug === slug)).filter(Boolean),
  ...recipes.filter(r => !recipeSlugs.includes(r.slug))].filter(r => available('recipes', r)).slice(0, 8);

function gallery(ko, entries, dir) {
  const lines = ['<table>'];
  for (let i = 0; i < entries.length; i += 4) {
    lines.push('<tr>');
    for (const e of entries.slice(i, i + 4)) {
      const base = `${dir}/${e.slug}`;
      const name = esc(ko ? e.ko : e.en);
      lines.push(`<td align="center" width="25%"><a href="${base}/"><img src="${base}/preview.gif" alt="${name}" width="100%"><br><sub><b>${name}</b></sub></a><br><sub><a href="${base}/clip.mp4">MP4</a></sub></td>`);
    }
    lines.push('</tr>');
  }
  lines.push('</table>');
  return lines.join('\n');
}

function readme(ko) {
  const t = (en, kr) => ko ? kr : en;
  return `<p align="center">
<a href="${SITE}"><img src="docs/hero.gif" alt="${t('Reference motion clips in paper, ink and vermilion', '종이·먹·주홍으로 그린 모션 기준 클립')}" width="100%"></a>
</p>

<h1 align="center">Awesome AI Motion</h1>

<p align="center"><b>${t('A motion field guide your AI agent can read.', 'AI 에이전트가 읽는 모션 기법 도감.')}</b></p>

<p align="center">${t(`${effects.length} techniques · ${rendered} reference clips · ${recipes.length} recipes · ${routes.length} design routes`, `기법 ${effects.length}개 · 기준 클립 ${rendered}개 · 레시피 ${recipes.length}개 · 용도별 루트 ${routes.length}개`)}</p>

<p align="center">
<a href="${ko ? 'README.md' : 'README.ko.md'}">${t('한국어', 'English')}</a> · <a href="${SITE}">${t('Website', '사이트')}</a> · <a href="SKILL.md">Agent skill</a> · <a href="docs/catalog.md">${t('Full catalog', '전체 목록')}</a>
</p>

${t('Choose motion for what a scene needs to communicate. Each effect card gives you a definition, tuned parameters, examples, sources and prompts for Claude Code and Codex.', '장면이 전해야 할 의미에 맞춰 모션을 고른다. 효과 카드마다 정의, 기본 파라미터, 예시, 출처와 Claude Code·Codex용 프롬프트가 있다.')}

## ${t('Quick start', '빠른 시작')}

### 1. ${t('Get the guide', '레포 받기')}

\`\`\`bash
git clone ${REPO}.git
cd awesome-ai-motion
\`\`\`

${t('Browsing the website, reading cards and using the skill require no dependency installation.', '사이트 탐색, 카드 읽기, 스킬 연결에는 의존성 설치가 필요 없다.')}
${t('For local rendering, use Node.js 20+, ffmpeg on PATH, and Playwright with Chromium installed.', '로컬 렌더에는 Node.js 20 이상, PATH에 있는 ffmpeg, Chromium을 설치한 Playwright가 필요하다.')}
${t('Run the following only when those rendering dependencies are missing:', '렌더 의존성이 없을 때만 아래 설치를 진행한다:')}

\`\`\`bash
npm install                          # ${t('Optional if global playwright is available', '전역 playwright가 있으면 선택 사항')}
npx playwright install chromium      # ${t('Skip if Chromium is already installed', 'Chromium 설치가 되어 있으면 생략')}
ffmpeg -version                      # ${t('Verify ffmpeg is on PATH', 'ffmpeg가 PATH에 있는지 확인')}
\`\`\`

### 2. ${t('Connect the skill', '스킬 연결')}

${t('Link this checkout into Claude Code’s skill directory:', '현재 체크아웃을 Claude Code 스킬 디렉터리에 연결한다:')}

\`\`\`bash
mkdir -p ~/.claude/skills
ln -s "$PWD" ~/.claude/skills/awesome-ai-motion
\`\`\`

${t('Or copy it instead of creating a link. Choose one method; the destination should be unused.', '링크 대신 복사해도 된다. 두 방법 중 하나를 선택하고, 대상 경로는 비어 있어야 한다.')}

\`\`\`bash
mkdir -p ~/.claude/skills
cp -R "$PWD" ~/.claude/skills/awesome-ai-motion
\`\`\`

${t('For Codex, use the same link or copy under `~/.codex/skills/`. Copies need updating when the guide changes.', 'Codex는 같은 방식으로 `~/.codex/skills/`에 연결하거나 복사한다. 복사본은 레포 변경 시 다시 갱신한다.')}
${t('Then ask the agent to choose an effect for the scene:', '연결한 다음 에이전트에게 장면에 맞는 효과를 요청한다:')}

\`\`\`text
${t('Choose motion for a product reveal. Read the effect card and use its default parameters.', '제품 공개 장면에 맞는 모션을 골라줘. 효과 카드를 읽고 기본 파라미터로 적용해줘.')}
\`\`\`

### 3. ${t('Render your first clip', '첫 클립 렌더')}

${t('Render a copy with your own text, an embeddable stage and a separate output directory:', '문구를 바꾸고 임베드용 무대를 적용해 별도 출력 디렉터리에 렌더한다:')}

\`\`\`bash
node scripts/render.mjs effects/mask-reveal \\
  --embed --text "${t('Make it move', '움직임으로 전해')}" --out .staging/my-first-motion
\`\`\`

${t('Open `.staging/my-first-motion/clip.mp4`, `preview.gif` or `poster.jpg`. The source effect stays available for reuse.', '결과는 `.staging/my-first-motion/`의 `clip.mp4`, `preview.gif`, `poster.jpg`로 확인한다. 원본 효과는 다음 작업에도 재사용한다.')}
${t('Use an output directory outside `effects/` and `recipes/` to keep reference clips intact.', '기준 클립을 보존하려면 `effects/`와 `recipes/` 밖에 출력 경로를 잡는다.')}

## ${t('Sixteen high-impact clips', '먼저 볼 임팩트 클립 16개')}

${t('Large camera moves, bold reveals and shape changes show the range of the guide. Click a preview to read its card.', '큰 카메라 이동, 강한 리빌, 형태 변화를 중심으로 골랐다. 미리보기를 누르면 효과 카드로 이동한다.')}

${gallery(ko, featured, 'effects')}

## ${t('Eight recipes in motion', '움직임으로 보는 레시피 8개')}

${t('Watch effects combine into a scene, including the educational opening hook. Click a name or preview to read the recipe.', '교육 첫 5초 훅을 포함해 효과가 하나의 장면으로 이어지는 모습을 본다. 이름이나 미리보기를 누르면 레시피로 이동한다.')}

${gallery(ko, featuredRecipes, 'recipes')}

${t(`Use the [website](${SITE}) for slow playback and comparisons of up to four clips. The [full catalog](docs/catalog.md) includes every technique and its clip status.`, `[사이트](${SITE})에서 느린 재생과 최대 네 클립 비교를 할 수 있다. [전체 목록](docs/catalog.md)에서 모든 기법과 클립 유무를 확인한다.`)}

## ${t('Find your next scene', '다음 장면 고르기')}

| ${t('Start here', '입구')} | ${t('Use it for', '쓰임')} |
|---|---|
| [${t('Website', '사이트')}](${SITE}) | ${t('Browse, play, filter and compare clips', '클립 탐색·재생·필터·비교')} |
| [${t('Docs contents', '문서 목차')}](docs/README.md) | ${t('Navigate the guide without reading every card', '필요한 문서로 바로 이동')} |
| [${t('Full catalog', '전체 카탈로그')}](docs/catalog.md) | ${t('All techniques grouped by motion family', '동작 분류별 전체 기법 목록')} |
| [${t('Decision tables', '결정표')}](references/decision-tables.md) | ${t('Choose by purpose or medium', '목적·매체 기준으로 효과 선택')} |
| [${t('Recipes', '레시피')}](recipes/) | ${t('Combine effects into a timed scene', '효과를 순서·타이밍으로 조합')} |
| [${t('Design routes', '용도별 루트')}](routes/) | ${t('Plan a promo, short, deck or other deliverable; route documents are in Korean', '소개·홍보, 쇼츠, 덱 등 산출물 설계; 루트 문서는 국문')} |
| [${t('Agent workflow', '에이전트 작업 흐름')}](SKILL.md) | ${t('Purpose, card, adaptation, render and verification', '목적 선택부터 카드 확인·수정·렌더·검증까지')} |
| [${t('Source data', '정본 데이터')}](index.json) | ${t('Query effect metadata directly', '효과 메타데이터 직접 조회')} |

${t('A card lives at `effects/<slug>/README.md`. Rendered effects also include `index.html`, `clip.mp4`, `preview.gif` and `poster.jpg`.', '카드는 `effects/<slug>/README.md`에 있다. 렌더된 효과는 `index.html`, `clip.mp4`, `preview.gif`, `poster.jpg`도 포함한다.')}

## ${t('Contributing', '기여')}

${t('See [CONTRIBUTING.md](CONTRIBUTING.md) for new effects, improved defaults and reference clips. Keep motion legible, use the shared stage, and verify the rendered result.', '새 효과·기본값 개선·기준 클립 추가는 [CONTRIBUTING.md](CONTRIBUTING.md)를 따른다. 동작이 분명히 보이게 만들고 공용 무대를 사용한 뒤 렌더 결과를 확인한다.')}
${t('`index.json` is the canonical catalog. Update the relevant source or generator, then regenerate the docs and website:', '`index.json`이 정본 카탈로그다. 해당 원본이나 생성기를 수정하고 문서·사이트를 다시 생성한다:')}

\`\`\`bash
node scripts/build.mjs
node scripts/check.mjs
\`\`\`

## ${t('License and sources', '라이선스와 출처')}

${t('Original work is covered by [MIT](LICENSE). Source references and component licenses are recorded in [ATTRIBUTIONS.md](ATTRIBUTIONS.md) and each effect card.', '직접 만든 결과물은 [MIT](LICENSE)로 제공한다. 참조 출처와 구성 요소 라이선스는 [ATTRIBUTIONS.md](ATTRIBUTIONS.md)와 각 효과 카드에 기록한다.')}
${t('GSAP and bundled fonts retain their own licenses. Consult the attribution notice when redistributing those assets.', 'GSAP과 포함된 글꼴은 각각의 라이선스를 따른다. 해당 자산을 재배포할 때 출처 고지를 확인한다.')}
`;
}

function catalog() {
  const lines = ['# Motion catalog · 모션 전체 목록', '',
    `Generated from [index.json](../index.json): ${effects.length} techniques · ${rendered} clips. 정본에서 생성한 전체 목록이다.`, '',
    '[English entrance](../README.md) · [한국어 입구](../README.ko.md) · [Docs contents · 문서 목차](README.md)', '',
    '## Contents · 목차', ''];
  const families = Object.entries(I.families).filter(([key]) => effects.some(e => e.family === key));
  for (const [key, f] of families) lines.push(`- [${cell(f.en)} · ${cell(f.ko)}](#family-${key})`);
  for (const [key, f] of families) {
    lines.push('', `<a id="family-${key}"></a>`, '', `## ${cell(f.en)} · ${cell(f.ko)}`, '',
      '| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |', '|---|---|---|---|');
    for (const e of effects.filter(e => e.family === key)) {
      const clip = e.render === 'done' ? `[MP4](../effects/${e.slug}/clip.mp4)` : 'Pending · 준비 중';
      lines.push(`| ${cell(e.no)} | [${cell(e.en)} · ${cell(e.ko)}](../effects/${e.slug}/) | ${cell(e.oneLinerEn || '')}<br>${cell(e.oneLiner)} | ${clip} |`);
    }
  }
  return lines.join('\n') + '\n';
}

function contents() {
  const lines = ['# Documentation · 문서 목차', '',
    'Start with a scene’s purpose, then read only the card or guide you need.',
    '장면의 목적을 정한 다음 필요한 카드와 안내만 읽는다.', '',
    '[English](../README.md) · [한국어](../README.ko.md) · [Website · 사이트](' + SITE + ')', '',
    '## Choose motion · 효과 선택', '',
    '- [Full catalog · 전체 기법 목록](catalog.md)',
    '- [Decision tables · 목적·매체·동작 결정표](../references/decision-tables.md)',
    '- [Agent skill · 에이전트 작업 흐름](../SKILL.md)',
    '- [Motion dictionary · 모션 사전](../references/dictionary/README.md) (Korean · 국문)',
    '- [Detailed card collection · 상세 카드 모음](../references/catalog.md)', '',
    '## Recipes · 레시피', ''];
  for (const r of recipes) lines.push(`- [${cell(r.en || r.ko)} · ${cell(r.ko)}](../recipes/${r.slug}/)`);
  lines.push('', '## Design routes · 용도별 루트', '', 'Route documents are in Korean. 루트 문서는 국문으로 제공한다.', '');
  for (const r of routes) lines.push(`- [${cell(r.en)} · ${cell(r.ko)}](../${encodeURI(r.file)})`);
  lines.push('', '## Maintain and credit · 기여와 출처', '',
    '- [Contributing · 기여](../CONTRIBUTING.md)',
    '- [Canonical data · 정본](../index.json)',
    '- [Attributions · 출처 고지](../ATTRIBUTIONS.md)',
    '- [License · 라이선스](../LICENSE)', '');
  return lines.join('\n');
}

const outputs = new Map([
  ['README.md', readme(false)], ['README.ko.md', readme(true)],
  ['docs/README.md', contents()], ['docs/catalog.md', catalog()],
]);
for (const [rel, content] of outputs) {
  if (/[\u2013\u2014]/u.test(content)) throw new Error(`Forbidden dash in ${rel}`);
  if (rel.startsWith('README')) {
    const lines = content.trimEnd().split('\n').length;
    if (lines > 200) throw new Error(`${rel}: ${lines} lines, expected at most 200`);
  }
  fs.mkdirSync(path.dirname(path.join(ROOT, rel)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, rel), content);
}
console.log([...outputs.keys()].join(' · '));
