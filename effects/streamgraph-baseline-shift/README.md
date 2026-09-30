# Nº 295 스트림그래프 기준선 이동 · Streamgraph Baseline Shift

> 클립 렌더 예정 / Clip rendering planned.

**동일 레이어들이 두께를 유지하거나 갱신하면서 중앙 기준선과 누적 기준선 사이로 이동한다.**

Stacked layers move between centered and cumulative baselines through shared offset interpolation.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

## 선택 기준 / Selection

면 레이어의 모양과 기준선 선택이 어떻게 다른지 보여준다. / Reveals how baseline choice changes the shape of a layered chart.

- 면 레이어의 모양과 기준선 선택이 어떻게 다른지 보여준다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain streamgraph baseline shift while preserving item identities and chart scales.
- 같은 레이어 두께를 유지하며 중앙 정렬에서 0 기준 누적으로 바꾼다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 같은 레이어 두께를 유지하며 중앙 정렬에서 0 기준 누적으로 바꾼다.
나쁜 예 / Bad: 기준선 이동을 수치 증가라고 설명한다.
주의 / Avoid: 기준선 이동을 수치 증가라고 설명한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.9s | 0.675~1.35s | 시점 또는 전환 한 회 기준 |
| 레이어 수 | 5 | 3~8 | 레이어 순서는 고정 |
| 기준선 이동 | 160px | 80~240px | 표본별 오프셋으로 계산 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {p:0};
tl.to(s,{p:1,duration:0.9,ease:'power2.inOut',onUpdate:()=>{
  layers.forEach((el,i)=>el.setAttribute('d',areaWithOffset(data[i],offsetsA,offsetsB,s.p)));
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 스트림그래프 기준선 이동을 적용해줘. 각 x 표본의 기준 오프셋을 보간해 모든 레이어 경계를 함께 이동한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.9s; 레이어 수 5; 기준선 이동 160px; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 같은 레이어 두께를 유지하며 중앙 정렬에서 0 기준 누적으로 바꾼다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 스트림그래프 기준선 이동을 적용해. 각 x 표본의 기준 오프셋을 보간해 모든 레이어 경계를 함께 이동한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.9s; 레이어 수 5; 기준선 이동 160px; 이징 power2.inOut를 사용해. 0.225초, 0.45초, 0.9초 시점을 캡처해 동일 레이어들이 두께를 유지하거나 갱신하면서 중앙 기준선과 누적 기준선 사이로 이동한다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Streamgraph Baseline Shift to <target>. Use a 0.9s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Stacked layers move between centered and cumulative baselines through shared offset interpolation.
```

### English · Codex
```text
Apply Streamgraph Baseline Shift in the chart update section of <file>. Use the card parameter defaults, a 0.9s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.225s, 0.45s, and 0.9s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 스트림그래프 기준선 이동를 `.hero`에 적용해. / Apply Streamgraph Baseline Shift to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.9초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 각 x 표본의 기준 오프셋을 보간해 모든 레이어 경계를 함께 이동한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.9s; 레이어 수 5; 기준선 이동 160px; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 같은 레이어 두께를 유지하며 중앙 정렬에서 0 기준 누적으로 바꾼다.
- Scrolline Deck: 진행률 0~1을 0.9초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Observable @d3](https://observablehq.com/@d3/streamgraph-transitions) (unknown) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
