# Nº 515 셀룰러 오토마타 · Cellular Automaton Evolution

> 클립 렌더 예정 / Clip rendering planned.

**격자 칸이 이웃 상태에 따라 켜지고 꺼지며 무늬가 성장하거나 이동하는 셀룰러 오토마타**

Grid cells switch on and off by neighbor state, and patterns grow or drift.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 설명, 분위기 | 설명 영상, 발표, 데이터 스토리 | canvas |

다른 이름 / Also known as: 셀룰러 오토마타 변화, 1D 규칙

## 선택 기준 / Selection

작은 지역 규칙이 큰 패턴을 만든다는 사실. 단순함에서 복잡함이 나온다 / Small local rules producing large patterns. Complexity arising from simplicity.

- 창발, 생명, 규칙 기반 시스템을 설명할 때 / Explain emergence, life or rule-based systems.
- 격자 배경에 서서히 자라는 패턴을 깔 때 / Lay a slowly growing pattern over a grid background.

좋은 예 / Good: 60x36 격자에서 초기 25% 점유로 시작해 120ms마다 한 세대씩 진행하며 5초간 글라이더와 군집이 생긴다
나쁜 예 / Bad: 세대 간격이 40ms 이하로 빨라 깜빡임으로 보이거나 초기 점유율이 커서 전부 켜졌다 꺼졌다 한다
주의 / Avoid: 세대 간격 80ms 미만 금지(플리커) · 초기 점유율 0.35 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 세대 간격 | 120ms | 80~250ms | steps 이징 한 칸 |
| 격자 | 60x36 | 40x24~96x54 | 칸 32px 기준 |
| 초기 점유율 | 0.25 | 0.15~0.35 | 시드 배열 |
| 지속 | 5s | 3~8s | 약 41세대 |
| 규칙 | B3/S23 | 고정 | Conway |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
// 세대를 미리 계산해 표로 저장
let g = seedGrid(42, 60, 36, 0.25); const gens = [g];
for (let i = 0; i < 42; i++) gens.push(g = next(g)); // B3/S23
const u = { k: 0 };
tl.to(u, { k: 41, duration: 5, ease: 'steps(41)', onUpdate: () => draw(gens[Math.round(u.k)]) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 셀룰러 오토마타를 넣어줘. 60x36 격자(칸 32px)를 시드 42, 점유율 0.25로 초기화하고 Conway B3/S23 규칙으로 42세대를 미리 계산해 표로 저장해. 5초 동안 steps 이징으로 120ms마다 한 세대씩 재생하고, 켜진 칸은 흰색 불투명도 0.8, 방금 태어난 칸은 청록으로 표시해.
```

### 한국어 · Codex
```text
<파일>에 60x36 격자와 42세대 표를 만들어(시드 42, 점유율 0.25, B3/S23). GSAP으로 k를 0→41, 5초, ease steps(41)로 tween하고 onUpdate에서 gens[k]를 그려. 0.6초·2.4초·4.8초 캡처로 세대가 넘어갈 때만 화면이 바뀌고 전체가 깜빡이지 않는지 확인해.
```

### English · Claude Code
```text
Add a cellular automaton to the background of <target>. Initialize a 60x36 grid (32px cells) with seed 42 and 0.25 occupancy, precompute 42 generations with Conway B3/S23, and play one generation every 120 ms over 5 seconds with a steps ease. Live cells are white at 0.8 opacity and newborn cells teal.
```

### English · Codex
```text
In <file>, build a 60x36 grid and a 42-generation table (seed 42, occupancy 0.25, B3/S23). Tween k from 0 to 41 over 5 s with ease steps(41) in GSAP and draw gens[k] in onUpdate. Capture at 0.6 s, 2.4 s and 4.8 s to confirm the frame changes only at generation ticks and the whole grid does not flicker.
```

예시 / Example: 셀룰러 오토마타를 `.hero`에 적용해. / Apply Cellular Automaton Evolution to `.hero`.

## 적용 / Application

- HyperFrames: 42세대를 시드 초기 격자에서 사전 계산해 표로 저장한다. tween은 steps(41) 이징으로 세대 인덱스만 넘겨 seek가 정확하다
- ReelForge: 씬 브리프에 격자 60x36, 점유율 0.25, 시드 42, 규칙 B3/S23, 세대 간격 120ms를 싣는다
- Scrolline Deck: 진행률 0~1을 세대 인덱스에 매핑한다. 스크럽에는 steps 이징이 자연스럽고 스프링은 필요 없다

조합 / Pair with: [계단식 모션 · Stepped Motion](../stepped-motion/) · [보로노이 모션 · Animated Voronoi](../voronoi-motion/) · [그라데이션 배열 모션 · Graded Array Motion](../graded-array-motion/) · [입자 생명 · Particle Life Clusters](../particle-life/)

출처 / Sources: [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Game-Of-Life/) (MIT) · [nature-of-code/noc-book-2](https://natureofcode.com/cellular-automata/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
