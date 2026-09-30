# Nº 254 시간별 버블 차트 · Animated Bubble Time Series

> 클립 렌더 예정 / Clip rendering planned.

**각 거품의 x와 y 위치 및 면적이 시간별 값에 맞춰 함께 바뀐다.**

Bubbles change position and area together as the displayed time advances.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: 시간별 거품 차트, Rosling bubble chart, Gapminder chart

## 선택 기준 / Selection

여러 지표의 발전 경로와 규모 변화를 동시에 본다. / Connects trajectories across multiple indicators with changes in scale.

- 여러 지표의 발전 경로와 규모 변화를 동시에 본다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain animated bubble time series while preserving item identities and chart scales.
- 국가별 소득과 수명이 이동하고 인구를 원 면적으로 나타낸다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 국가별 소득과 수명이 이동하고 인구를 원 면적으로 나타낸다.
나쁜 예 / Bad: 반지름을 인구에 비례시켜 면적 차이를 과장한다.
주의 / Avoid: 반지름을 인구에 비례시켜 면적 차이를 과장한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.5s | 0.375~0.75s | 시점 또는 전환 한 회 기준 |
| 면적 배율 | 1px²/단위 | 0.2~4px²/단위 | 반지름은 면적의 제곱근 |
| 연도 표시 | 1개 | 1개 | 모든 거품에 같은 연도 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {p:0};
tl.to(s,{p:1,duration:0.5,ease:'none',onUpdate:()=>{
  bubbles.forEach((el,i)=>{const a=before[i],b=after[i]; el.setAttribute('cx',lerp(a.x,b.x,s.p)); el.setAttribute('cy',lerp(a.y,b.y,s.p)); el.setAttribute('r',Math.sqrt(lerp(a.area,b.area,s.p)/Math.PI));});
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 시간별 버블 차트을 적용해줘. 국가 ID별 x, y, 면적을 보간하고 반지름은 면적의 제곱근으로 계산한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.5s; 면적 배율 1px²/단위; 연도 표시 1개; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 국가별 소득과 수명이 이동하고 인구를 원 면적으로 나타낸다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 시간별 버블 차트을 적용해. 국가 ID별 x, y, 면적을 보간하고 반지름은 면적의 제곱근으로 계산한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.5s; 면적 배율 1px²/단위; 연도 표시 1개; 이징 none를 사용해. 0.125초, 0.25초, 0.5초 시점을 캡처해 각 거품의 x와 y 위치 및 면적이 시간별 값에 맞춰 함께 바뀐다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Animated Bubble Time Series to <target>. Use a 0.5s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Bubbles change position and area together as the displayed time advances.
```

### English · Codex
```text
Apply Animated Bubble Time Series in the chart update section of <file>. Use the card parameter defaults, a 0.5s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.125s, 0.25s, and 0.5s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 시간별 버블 차트를 `.hero`에 적용해. / Apply Animated Bubble Time Series to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.5초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 국가 ID별 x, y, 면적을 보간하고 반지름은 면적의 제곱근으로 계산한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.5s; 면적 배율 1px²/단위; 연도 표시 1개; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 국가별 소득과 수명이 이동하고 인구를 원 면적으로 나타낸다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Observable @mbostock](https://observablehq.com/@mbostock/the-wealth-health-of-nations) (unknown) · [vizabi/bubblechart](https://github.com/vizabi/bubblechart) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
