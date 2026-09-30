# Nº 408 타일 가능성 수렴 · Tile Possibility Collapse

> 클립 렌더 예정 / Clip rendering planned.

**격자의 각 칸에 겹쳐 보이던 타일 후보가 하나씩 확정되고 이웃 후보도 줄어 무늬가 완성되는 과정**

Each grid cell shows overlapping candidate tiles that commit one by one while neighbor options shrink, until the pattern is complete.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 고급 | 설명, 순서·흐름, 분위기 | 설명 영상, 발표, 데이터 스토리 | canvas |

다른 이름 / Also known as: Wave Function Collapse, WFC tile generation

## 선택 기준 / Selection

지역 제약이 전체 구조를 결정하는 과정. 무질서한 가능성이 규칙으로 수렴하는 모습을 보여 준다 / Local constraints determine global structure, and disorder converges into rules.

- 알고리즘·생성 모델이 규칙에서 구조를 만드는 원리를 설명할 때 / Explaining how an algorithm or generative model builds structure from rules
- 절차적 생성 무늬가 만들어지는 과정을 시각화할 때 / Visualizing how a procedural pattern is generated

좋은 예 / Good: 24x14 격자에서 칸이 60ms마다 하나씩 확정되고 이웃 칸의 후보가 120ms 동안 강조되며 줄어 4.5초 만에 무늬가 완성된다
나쁜 예 / Bad: 확정 순서가 무작위 연출이라 이웃 제약이 반영되지 않고 인접 칸 타일이 서로 맞지 않는다
주의 / Avoid: 알고리즘은 시드 고정 난수로 미리 실행해 기록만 재생한다. 재생 중 계산하면 seek가 불가능하다 · 후보 8종을 넘기지 않는다. 격자가 커질수록 확정 속도를 올려 4~6초에 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 4.5s | 3~6s | 격자 크기에 맞춤 |
| 격자 | 24x14 | 16x10~32x18 | 칸 |
| 후보 종류 | 8 | 4~8 | 타일 종류 |
| 칸 확정 | 60ms | 40~100ms | 이웃 강조 120ms |

이징 / Ease: `steps`

## 구현 / Implementation (GSAP)

```js
// 미리 계산한 기록: log = [{cell, tile, neighbors:[...], t}] (시드 고정)
log.forEach(e => {
  tl.set(cellEl(e.cell), {className:'cell tile-' + e.tile}, e.t)
    .fromTo(neighborEls(e.neighbors), {outlineColor:'#fff8'}, {outlineColor:'#fff0', duration:0.12}, e.t);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 웨이브 함수 붕괴를 재생해줘. 24x14 격자에 8종 타일을 시드 고정으로 미리 풀어 기록(JSON)을 만들고, 렌더에서는 4.5초 동안 칸을 60ms마다 확정하며 이웃 칸을 120ms 강조해. 확정 전 칸은 후보 타일이 겹친 흐린 상태로 표시해.
```

### 한국어 · Codex
```text
<파일>에 wave function collapse를 적용해. 빌드 스크립트가 시드 고정으로 확정 로그를 JSON으로 저장하고 렌더는 cell별 e.t에 클래스를 set하며 이웃 outline을 0.12초 강조. 0초·2.0초·4.5초를 캡처해 후보 상태, 부분 확정, 완성 무늬를 확인하고 인접 타일 규칙 위반이 0건인지 로그로 검사해.
```

### English · Claude Code
```text
Play back a wave function collapse in <target>. Precompute with a fixed seed a 24x14 grid with 8 tile types and save the log to JSON. At render time, collapse one cell every 60ms across 4.5s and highlight neighbors for 120ms. Show uncollapsed cells as blurred stacks of candidate tiles.
```

### English · Codex
```text
Apply wave function collapse in <file>. A build script stores the seeded collapse log as JSON; rendering sets each cell class at e.t and outlines neighbors for 0.12s. Capture at 0s, 2.0s and 4.5s to verify candidate state, partial collapse and the finished pattern, and check the log for 0 adjacency rule violations.
```

예시 / Example: 타일 가능성 수렴를 `.hero`에 적용해. / Apply Tile Possibility Collapse to `.hero`.

## 적용 / Application

- HyperFrames: 캔버스 또는 DOM 격자에 기록을 시간순으로 재생한다. 알고리즘은 빌드 단계에서 시드 고정으로 실행해 JSON으로 두고 렌더는 재생만 한다
- ReelForge: 브리프에 격자 24x14, 후보 8종, 시드값, 4.5초, 기록 JSON 경로를 싣는다. 알고리즘 실행은 별도 스크립트로 분리한다
- Scrolline Deck: 진행률에 비례해 기록 인덱스를 결정한다. 진행률을 되돌리면 기록을 거꾸로 되감아 후보 상태로 복귀한다

조합 / Pair with: [흩어진 글자 조립 · Text Scatter Assemble](../text-scatter-assemble/) · [디픽셀 리빌 · Depixelate Reveal](../depixelate-reveal/) · [플리커 리빌 · Flicker Reveal](../flicker-reveal/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#wave-function-collapse-wfc) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
