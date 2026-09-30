# Nº 274 선 차트 레이스 · Line Chart Race

> 클립 렌더 예정 / Clip rendering planned.

**시간을 따라 선이 늘어나고 각 선의 끝점과 라벨이 움직이며 경쟁 순위가 바뀐다.**

Lines extend through time while their endpoints and labels move with changing values.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Horserace chart

## 선택 기준 / Selection

지금의 선두와 과거의 추세를 함께 읽는다. / Keeps the current leader and the preceding trend visible together.

- 지금의 선두와 과거의 추세를 함께 읽는다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain line chart race while preserving item identities and chart scales.
- 세 기업 선이 시간에 따라 늘어나고 끝 라벨이 선두 교체를 따라간다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 세 기업 선이 시간에 따라 늘어나고 끝 라벨이 선두 교체를 따라간다.
나쁜 예 / Bad: 라벨을 숨겨 선이 교차할 때 항목을 식별할 수 없다.
주의 / Avoid: 라벨을 숨겨 선이 교차할 때 항목을 식별할 수 없다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.5s | 0.375~0.75s | 시점 또는 전환 한 회 기준 |
| 끝점 반지름 | 5px | 4~8px | 라벨과 함께 이동 |
| 마지막 정지 | 1000ms | 800~2000ms | 최종 순위 읽기 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {index:0};
tl.to(s,{index:series[0].length-1,duration:(series[0].length-1)*0.5,ease:'none',onUpdate:()=>renderRace(s.index)});
tl.to({}, {duration:1});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 선 차트 레이스을 적용해줘. 시간별 선을 누적하고 끝점 및 라벨 좌표를 값에 맞춰 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.5s; 끝점 반지름 5px; 마지막 정지 1000ms; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 세 기업 선이 시간에 따라 늘어나고 끝 라벨이 선두 교체를 따라간다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 선 차트 레이스을 적용해. 시간별 선을 누적하고 끝점 및 라벨 좌표를 값에 맞춰 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.5s; 끝점 반지름 5px; 마지막 정지 1000ms; 이징 none를 사용해. 0.125초, 0.25초, 0.5초 시점을 캡처해 시간을 따라 선이 늘어나고 각 선의 끝점과 라벨이 움직이며 경쟁 순위가 바뀐다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Line Chart Race to <target>. Use a 0.5s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Lines extend through time while their endpoints and labels move with changing values.
```

### English · Codex
```text
Apply Line Chart Race in the chart update section of <file>. Use the card parameter defaults, a 0.5s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.125s, 0.25s, and 0.5s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 선 차트 레이스를 `.hero`에 적용해. / Apply Line Chart Race to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.5초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 시간별 선을 누적하고 끝점 및 라벨 좌표를 값에 맞춰 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.5s; 끝점 반지름 5px; 마지막 정지 1000ms; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 세 기업 선이 시간에 따라 늘어나고 끝 라벨이 선두 교체를 따라간다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Flourish](https://flourish.studio/blog/line-chart-race/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
