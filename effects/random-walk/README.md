# Nº 536 랜덤 워크 · Random Walk

> 클립 렌더 예정 / Clip rendering planned.

**점들이 짧은 임의 이동을 반복하며 불규칙한 궤적을 남기는 랜덤 워크**

Dots repeat short random steps, leaving irregular trails.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 설명, 분위기 | 설명 영상, 데이터 스토리, 발표 | canvas |

다른 이름 / Also known as: Brownian walk

## 선택 기준 / Selection

탐색, 불확실성, 확산. 어디로 갈지 모르지만 시간이 지나면 퍼져 나간다는 것 / Exploration, uncertainty and diffusion. Where each goes is unknown, yet over time they spread out.

- 확산·탐색·무작위 과정을 개념적으로 설명할 때 / Explain diffusion, search or random processes conceptually.
- 통계나 물리 수업 화면에서 브라운 운동 같은 개념을 시각화할 때 / Visualize Brownian motion in a statistics or physics lesson.

좋은 예 / Good: 점 80개가 화면 중앙에서 출발해 4초 동안 스텝 표준편차 1.5px로 흩어지며 반투명 궤적이 부채꼴로 퍼진다
나쁜 예 / Bad: 스텝이 커서 점이 튀며 궤적이 직선처럼 보이거나, 난수를 실행마다 바꿔 결과가 재현되지 않는다
주의 / Avoid: 매 실행 같은 결과가 나오도록 시드 난수 고정 · 궤적 불투명도 0.25 이상이면 화면이 뭉친다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 4s | 3~8s | 전체 재생 |
| 점 수 | 80 | 40~150 | 시드 배열 |
| 스텝 표준편차 | 1.5px | 1~3px | 고정 스텝 16.67ms 기준 |
| 궤적 불투명도 | 0.18 | 0.1~0.25 | 선 알파 |
| 시드 | 42 | 고정 | PRNG 초기값 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
function rng(s) { return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
const r = rng(42), N = 80, steps = 240, path = [];
let pts = Array.from({ length: N }, () => ({ x: 960, y: 540, h: [[960, 540]] }));
for (let k = 0; k < steps; k++) pts.forEach(p => { p.x += (r() - 0.5) * 5.2; p.y += (r() - 0.5) * 5.2; p.h.push([p.x, p.y]); });
tl.to(u = { k: 0 }, { k: steps, duration: 4, ease: 'none', onUpdate: () => draw(pts, Math.round(u.k)) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 랜덤 워크를 넣어줘. 점 80개가 중앙(960,540)에서 출발해 4초 동안 240스텝을 걷게 하고, 매 스텝은 x·y에 각각 균일 난수 -2.6~2.6px(표준편차 약 1.5px)를 더해. 난수는 시드 42의 LCG를 써서 사전 계산해 표로 저장하고, 궤적은 불투명도 0.18 선으로 남겨. Math.random은 쓰지 마.
```

### 한국어 · Codex
```text
<파일>에 LCG 시드 42로 80개 점 × 240스텝 경로 표를 만들고 GSAP으로 인덱스 k를 0→240, 4초 선형 tween하며 매 프레임 0..k까지 궤적을 그려. 스텝은 균일 ±2.6px. 1초·2초·4초 캡처로 점이 중앙에서 부채꼴로 퍼지는지, 재실행 시 같은 프레임이 나오는지 비교해.
```

### English · Claude Code
```text
Add a random walk to <target>. 80 dots start at the center (960,540) and walk 240 steps over 4 seconds, each step adding a uniform random -2.6 to 2.6px (about 1.5px standard deviation) to x and y. Precompute with a seed-42 LCG into a table and leave trails as lines at 0.18 opacity. Do not use Math.random.
```

### English · Codex
```text
In <file>, build a path table of 80 dots by 240 steps with an LCG seeded 42, tween index k from 0 to 240 over 4 s linear with GSAP, and draw trails from 0 to k each frame. Steps are uniform plus or minus 2.6px. Capture 1 s, 2 s and 4 s to confirm the dots fan out from the center, and compare reruns for identical frames.
```

예시 / Example: 랜덤 워크를 `.hero`에 적용해. / Apply Random Walk to `.hero`.

## 적용 / Application

- HyperFrames: 시드 PRNG로 240스텝을 미리 계산해 경로 표에 저장하고 타임라인은 인덱스만 진행한다. 다시 실행해도 같은 궤적이다
- ReelForge: 씬 브리프에 점 수 80, 시드 42, 스텝 크기, 4초, 궤적 알파 0.18을 싣는다. 난수 함수를 브리프에 함께 적는다
- Scrolline Deck: 진행률 0~1을 스텝 인덱스에 매핑한다. 역스크롤에서는 표를 거꾸로 읽어 궤적이 되감긴다

조합 / Pair with: [다체 궤도 군집 · N-body Orbital Cluster](../nbody-cluster/) · [입자 연결망 · Connected Particle Network](../particle-network/) · [보이드 군집 · Boid Flocking](../boid-flocking/) · [시공간 밀도장 재생 · Spatiotemporal Density Animation](../density-field-animation/)

출처 / Sources: [nature-of-code/noc-book-2](https://natureofcode.com/random/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
