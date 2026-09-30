# Nº 528 패킹 이완 · Packing Relaxation

> 클립 렌더 예정 / Clip rendering planned.

**흩어진 원이 서로 밀리고 크기를 조절해 겹침 없는 배치로 정착하는 효과**

Scattered circles push each other and adjust size until they settle into an overlap-free layout.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 순서·흐름, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | canvas |

다른 이름 / Also known as: 패킹 완화, Circle Packing Relaxation, 원 채우기 이완, Voronoi Stipple Relaxation, 보로노이 점묘 이완, Lloyd relaxation, Weighted Voronoi stippling

## 선택 기준 / Selection

혼돈에서 균형으로 정리되는 과정을 보여준다. 데이터 분포와 공간 배분을 직관적으로 설명한다 / Shows the process of order emerging from chaos and makes data distribution and space allocation intuitive.

- 버블 차트나 카테고리 비율을 겹침 없이 배치하는 과정을 보여줄 때 / To show bubble charts or category shares being laid out without overlap
- 무작위 분포가 정돈된 구조로 정리되는 은유를 만들 때 / As a metaphor for a random distribution organizing into structure

좋은 예 / Good: 원 40개가 겹친 채 시작해 80회 완화 계산을 4초에 나누어 보여주며 서로 밀려나 겹침 없이 정착한다
나쁜 예 / Bad: 완화 단계를 실시간 누적으로 돌려 seek할 때 결과가 달라지거나, 원 수가 많아 프레임이 끊긴다
주의 / Avoid: 원 100개 초과 금지 · 반드시 사전 계산한 단계 좌표를 시간에 매핑

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 지속 | 4000ms | 2500~6000ms | 완화 단계 재생 |
| 원 수 | 40개 | 20~80개 | 반경 18~52px |
| 완화 횟수 | 80회 | 40~120회 | 사전 계산 스텝 |
| 패딩 | 4px | 2~8px | 원 사이 최소 간격 |
| 이징 | power2.out | power1~power3 | 초반 빠르고 끝 느리게 |

## 구현 / Implementation (GSAP)

```js
// 사전 계산: steps[k][i] = {x,y,r}
const steps=[]; let c=init(seed);
for(let k=0;k<80;k++){ c=relax(c,4); steps.push(c.map(o=>({...o}))); }
function draw(p){const s=steps[Math.min(79,Math.floor(p*80))];
 ctx.clearRect(0,0,1920,1080); s.forEach(o=>{ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,6.283);ctx.stroke();});}
tl.to({p:0},{p:1,duration:4,ease:'power2.out',onUpdate(){draw(this.targets()[0].p)}},t);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 원 40개(반경 18~52px, 시드 고정)를 겹친 초기 배치에서 시작해 80회 완화로 겹침 없이 정착하는 장면을 만들어줘. relax는 겹치는 원끼리 밀어내고 패딩 4px를 유지하는 방식으로 사전 계산해 단계 배열로 저장하고, 4초 동안 power2.out으로 단계 인덱스를 재생해. progress 순수 함수로 그려 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 packing-relaxation을 구현해. 원 40개, 완화 80회, 4000ms power2.out, 패딩 4px, seed 고정. 0초, 1초, 2초, 4초를 캡처해 초기 겹침이 사라지는지, 4초에 겹치는 원 쌍이 0인지 좌표로 검사하고, 같은 시점 재렌더가 동일한지 확인해.
```

### English · Claude Code
```text
Create a scene where 40 circles in <target> (radius 18-52px, fixed seed) start overlapped and settle without overlap after 80 relaxation steps. Precompute relax by pushing overlapping circles apart while keeping 4px padding, store as a step array, and play the step index over 4s with power2.out. Draw as a pure function of progress so it is seekable.
```

### English · Codex
```text
Implement packing-relaxation in <file>: 40 circles, 80 relaxation steps, 4000ms power2.out, padding 4px, fixed seed. Capture at 0s, 1s, 2s, and 4s to verify initial overlap disappears, check by coordinates that overlapping pairs are 0 at 4s, and confirm re-rendering the same time is identical.
```

예시 / Example: 패킹 이완를 `.hero`에 적용해. / Apply Packing Relaxation to `.hero`.

## 적용 / Application

- HyperFrames: relax 결과를 80단계 배열로 사전 계산하고 draw는 p로 단계를 고른다. 누적 시뮬레이션을 실시간으로 돌리지 않는다
- ReelForge: 브리프에 circleCount, radiiRange, relaxSteps, paddingPx, seed를 싣는다
- Scrolline Deck: 진행률 p를 단계 인덱스에 매핑한다. 스크롤을 되감으면 이전 단계 좌표가 그대로 나온다

조합 / Pair with: [점 재배치 · Dot Regroup](../dot-regroup/) · [포스 레이아웃 정착 · Force-directed Layout Settling](../force-layout-settling/) · [집계 분할과 합치기 · Aggregate Split and Merge](../aggregate-split-merge/) · [시간별 버블 차트 · Animated Bubble Time Series](../bubble-time-series/)

출처 / Sources: local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/SKILL.md`) (Apache-2.0) · [anthropics/skills](https://github.com/anthropics/skills/blob/HEAD/skills/algorithmic-art/SKILL.md) (Apache-2.0) · [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#lloyds-relaxation) (unknown) · [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#weighted-voronoi-stippling) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
