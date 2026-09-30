# Nº 514 가지 성장 · Branch Growth

> 클립 렌더 예정 / Clip rendering planned.

**한 줄기에서 가지가 갈라지고 작은 가지가 다시 갈라지며 구조가 자라나는 효과**

A trunk splits into branches, smaller branches split again, and the structure grows.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 설명, 순서·흐름, 분위기 | 설명 영상, 발표, 스크롤덱 | svg |

다른 이름 / Also known as: Recursive Growth, 재귀 가지 성장, Recursive Branch Growth, Space Colonization Branch Growth, 공간 점유 가지 성장, Space colonization, Leaf venation growth

## 선택 기준 / Selection

성장, 확장, 계층 구조를 직관적으로 보여준다. 나무나 네트워크가 뻗어 나가는 은유를 만든다 / Shows growth, expansion, and hierarchy intuitively, a metaphor for a tree or network reaching outward.

- 조직, 지식, 기능이 갈라지는 계층 구조를 설명할 때 / To explain hierarchies where organizations, knowledge, or features branch out
- 성장이나 확장의 은유로 배경 도해를 그릴 때 / To draw a background diagram as a metaphor for growth or expansion

좋은 예 / Good: 줄기에서 깊이 5까지 가지가 4초 동안 길이 비 0.618, 분기 각 28도로 순서대로 자라난다
나쁜 예 / Bad: 깊이를 9 이상으로 잡아 가지가 뭉치거나, 모든 가지가 동시에 나타나 성장의 순서가 안 보인다
주의 / Avoid: 깊이 7 초과 금지 · 깊이 순서대로 시간차를 두어 성장을 보이게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 지속 | 4000ms | 2500~6000ms | 깊이별 순차 |
| 깊이 | 5 | 4~7 | 분기 단계 |
| 길이 비 | 0.618 | 0.55~0.75 | 자식/부모 |
| 분기 각 | 28도 | 20~40도 | 좌우 대칭 |
| 선 굵기 | 8px에서 1px | 6~10px에서 1px | 깊이별 감소 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
// 깊이별 path를 사전 생성(시드 고정), stroke-dashoffset로 순차 draw
const D=5;
for(let d=0;d<D;d++){ const g=gsap.utils.toArray('.d'+d+' path');
 tl.fromTo(g,{strokeDashoffset:(i,e)=>e.getTotalLength()},{strokeDashoffset:0,duration:.8,ease:'power2.out'},t+d*.65); }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<도해>로 가지 성장을 만들어줘. 재귀로 깊이 5, 길이 비 0.618, 분기 각 ±28도의 SVG path를 시드 고정으로 미리 생성하고 깊이별 그룹으로 나눠, stroke-dashoffset으로 깊이 d번째 그룹을 0.8초 power2.out으로 draw하되 깊이마다 0.65초씩 늦게 시작해. 선 굵기는 깊이마다 8px에서 1px로 줄여. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>에 branch-growth를 구현해. 깊이 5, 길이 비 0.618, 분기 각 28도, 총 4000ms, 깊이별 시작차 650ms, seed 고정. 0.5초, 1.5초, 2.5초, 4.2초를 캡처해 깊이 순서로 자라는지, 최종 프레임에서 모든 가지가 그려졌는지, 가지가 겹쳐 뭉치지 않는지 확인해.
```

### English · Claude Code
```text
Build a branch growth diagram in <diagram>. Pre-generate SVG paths recursively with a fixed seed at depth 5, length ratio 0.618, and branch angle +/-28 degrees, grouped by depth. Draw each group with stroke-dashoffset over 0.8s with power2.out, each depth starting 0.65s later. Thin the stroke from 8px to 1px by depth. Drive from a paused timeline.
```

### English · Codex
```text
Implement branch-growth in <file>: depth 5, length ratio 0.618, angle 28 degrees, total 4000ms, depth stagger 650ms, fixed seed. Capture at 0.5s, 1.5s, 2.5s, and 4.2s to verify growth proceeds by depth, all branches are drawn in the final frame, and branches do not clump together.
```

예시 / Example: 가지 성장를 `.hero`에 적용해. / Apply Branch Growth to `.hero`.

## 적용 / Application

- HyperFrames: 가지 path를 깊이별 그룹으로 미리 만들고 dashoffset만 paused 타임라인에서 보간한다. 스크립트가 실행 중 생성하는 재귀는 seed 고정
- ReelForge: 브리프에 depth, lengthRatio, angleDeg, totalMs, seed를 싣고 시작 위치와 줄기 굵기를 명시한다
- Scrolline Deck: 진행률을 깊이 0~D에 매핑해 스크롤로 성장 단계를 앞뒤로 볼 수 있게 한다. dashoffset은 선형 ease-out

조합 / Pair with: [선 그리기 · Line Draw](../line-draw/) · [자연 성장 루프 · Nature Growth Loop](../nature-growth-loop/) · [트리 펼침과 접힘 · Tree Expand and Collapse](../tree-expand-collapse/) · [확산 제한 성장 · Diffusion Limited Aggregation](../diffusion-limited-growth/)

출처 / Sources: local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/SKILL.md`) (Apache-2.0) · [processing/p5.js-website](https://p5js.org/examples/Repetition-Recursive-Tree/) (MIT) · [anthropics/skills](https://github.com/anthropics/skills/blob/HEAD/skills/algorithmic-art/SKILL.md) (Apache-2.0) · [nature-of-code/noc-book-2](https://natureofcode.com/fractals/) (unknown) · [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#space-colonization) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
