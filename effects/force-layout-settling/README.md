# Nº 266 포스 레이아웃 정착 · Force-directed Layout Settling

> 클립 렌더 예정 / Clip rendering planned.

**노드들이 연결선과 서로의 힘에 따라 움직이다가 진동이 줄며 안정된 배치에 멈춘다.**

Connected nodes relax under link forces, repulsion, and damping until the layout settles.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 순서·흐름 | 설명 영상, 데이터 스토리, 스크롤덱 | canvas |

다른 이름 / Also known as: Force layout relaxation

## 선택 기준 / Selection

연결 관계가 공간적인 구조로 드러나는 과정을 본다. / Reveals a spatial structure emerging from network relationships.

- 연결 관계가 공간적인 구조로 드러나는 과정을 본다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain force-directed layout settling while preserving item identities and chart scales.
- 고정 초기 배치의 관계망을 300 tick 계산해 5초 동안 정착시킨다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 고정 초기 배치의 관계망을 300 tick 계산해 5초 동안 정착시킨다.
나쁜 예 / Bad: 재생할 때마다 임의 초기 좌표를 써 군집이 바뀐다.
주의 / Avoid: 재생할 때마다 임의 초기 좌표를 써 군집이 바뀐다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 5s | 3.75~7.5s | 시점 또는 전환 한 회 기준 |
| 고정 tick | 300 | 200~400 | 초기 위치와 ID 순서 고정 |
| alpha 감소 | 0.0228 | 0.015~0.03 | 초기 alpha 1, 종료 0.001 |
| 속도 감쇠 | 0.4 | 0.3~0.6 | 진동을 줄임 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const frames = solveForceFixed(graph,{ticks:300,alpha:1,alphaMin:0.001,alphaDecay:0.0228,velocityDecay:0.4});
const s = {tick:0};
tl.to(s,{tick:299,duration:5,ease:'none',onUpdate:()=>{
  drawCanvasGraph(interpolateFrames(frames,s.tick));
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 포스 레이아웃 정착을 적용해줘. Canvas에서 링크 힘, 반발력과 감쇠를 계산하고 고정된 시간 간격으로 좌표를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 5s; 고정 tick 300; alpha 감소 0.0228; 속도 감쇠 0.4; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 고정 초기 배치의 관계망을 300 tick 계산해 5초 동안 정착시킨다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 포스 레이아웃 정착을 적용해. Canvas에서 링크 힘, 반발력과 감쇠를 계산하고 고정된 시간 간격으로 좌표를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 5s; 고정 tick 300; alpha 감소 0.0228; 속도 감쇠 0.4; 이징 none를 사용해. 1.25초, 2.5초, 5초 시점을 캡처해 노드들이 연결선과 서로의 힘에 따라 움직이다가 진동이 줄며 안정된 배치에 멈춘다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Force-directed Layout Settling to <target>. Use a 5s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Connected nodes relax under link forces, repulsion, and damping until the layout settles.
```

### English · Codex
```text
Apply Force-directed Layout Settling in the chart update section of <file>. Use the card parameter defaults, a 5s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 1.25s, 2.5s, and 5s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 포스 레이아웃 정착를 `.hero`에 적용해. / Apply Force-directed Layout Settling to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 5초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. Canvas에서 링크 힘, 반발력과 감쇠를 계산하고 고정된 시간 간격으로 좌표를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 5s; 고정 tick 300; alpha 감소 0.0228; 속도 감쇠 0.4; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 고정 초기 배치의 관계망을 300 tick 계산해 5초 동안 정착시킨다.
- Scrolline Deck: 진행률 0~1을 5초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [d3/d3-force](https://d3js.org/d3-force/simulation) (ISC) · [vega/vega](https://vega.github.io/vega/examples/force-directed-layout/) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
