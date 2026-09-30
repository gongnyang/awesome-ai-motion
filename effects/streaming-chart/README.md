# Nº 296 실시간 차트 흐름 · Streaming Chart

> 클립 렌더 예정 / Clip rendering planned.

**새 표본이 오른쪽에 붙고 기존 선과 눈금이 왼쪽으로 밀리며 오래된 표본이 사라진다.**

New samples enter on the right as older samples and ticks move left out of a rolling window.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 순서·흐름 | 설명 영상, 데이터 스토리, 스크롤덱 | canvas |

다른 이름 / Also known as: Streaming chart scroll

## 선택 기준 / Selection

최근 변화가 계속 갱신되는 실시간 상태를 느낀다. / Communicates the continuous arrival of recent observations.

- 최근 변화가 계속 갱신되는 실시간 상태를 느낀다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain streaming chart while preserving item identities and chart scales.
- 30개 표본 창에서 새 값이 0.5초마다 들어오며 선이 왼쪽으로 흐른다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 30개 표본 창에서 새 값이 0.5초마다 들어오며 선이 왼쪽으로 흐른다.
나쁜 예 / Bad: 매 갱신마다 축 범위를 바꿔 실제 변화보다 큰 흔들림을 만든다.
주의 / Avoid: 매 갱신마다 축 범위를 바꿔 실제 변화보다 큰 흔들림을 만든다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.5s | 0.375~0.75s | 시점 또는 전환 한 회 기준 |
| 창 표본 수 | 30 | 20~60 | 오래된 표본은 창 밖으로 제거 |
| 표본 간격 | 500ms | 250~1000ms | 고정 데이터와 시간 척도 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {time:0};
const samples = fixedSamples;
tl.to(s,{time:10,duration:10,ease:'none',onUpdate:()=>{
  drawCanvasWindow(samples,s.time,30,0.5);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 실시간 차트 흐름을 적용해줘. Canvas 좌표를 시간 창 기준으로 다시 계산하고 전체 이동을 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.5s; 창 표본 수 30; 표본 간격 500ms; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 30개 표본 창에서 새 값이 0.5초마다 들어오며 선이 왼쪽으로 흐른다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 실시간 차트 흐름을 적용해. Canvas 좌표를 시간 창 기준으로 다시 계산하고 전체 이동을 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.5s; 창 표본 수 30; 표본 간격 500ms; 이징 none를 사용해. 0.125초, 0.25초, 0.5초 시점을 캡처해 새 표본이 오른쪽에 붙고 기존 선과 눈금이 왼쪽으로 밀리며 오래된 표본이 사라진다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Streaming Chart to <target>. Use a 0.5s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. New samples enter on the right as older samples and ticks move left out of a rolling window.
```

### English · Codex
```text
Apply Streaming Chart in the chart update section of <file>. Use the card parameter defaults, a 0.5s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.125s, 0.25s, and 0.5s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 실시간 차트 흐름를 `.hero`에 적용해. / Apply Streaming Chart to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.5초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. Canvas 좌표를 시간 창 기준으로 다시 계산하고 전체 이동을 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.5s; 창 표본 수 30; 표본 간격 500ms; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 30개 표본 창에서 새 값이 0.5초마다 들어오며 선이 왼쪽으로 흐른다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause) · [d3/d3-transition](https://d3js.org/d3-transition) (ISC)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
