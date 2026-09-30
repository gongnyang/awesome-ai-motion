# Nº 284 점에서 점으로 선 생성 · Point-to-point Construction

> 클립 렌더 예정 / Clip rendering planned.

**이전 점에서 출발한 다음 점이 실제 값의 위치로 움직이며 선이 이어진다.**

Each new point travels from the previous point to its data position, extending the line.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 순서·흐름 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Progressive point-to-point construction

## 선택 기준 / Selection

데이터가 순서대로 쌓여 추세가 생기는 과정을 보여준다. / Shows a trend emerging as observations accumulate in sequence.

- 데이터가 순서대로 쌓여 추세가 생기는 과정을 보여준다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain point-to-point construction while preserving item identities and chart scales.
- 월별 측정점이 앞 점에서 다음 값까지 이어져 추세를 만든다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 월별 측정점이 앞 점에서 다음 값까지 이어져 추세를 만든다.
나쁜 예 / Bad: 점 생성 속도를 값 크기에 따라 바꿔 시간 의미를 왜곡한다.
주의 / Avoid: 점 생성 속도를 값 크기에 따라 바꿔 시간 의미를 왜곡한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 4s | 3~6s | 시점 또는 전환 한 회 기준 |
| 점 수 | 20 | 8~40 | 점 간 시간은 전체 시간 나누기 점 수 |
| 선폭 | 3px | 2~5px | 값 축은 고정 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
points.forEach((pt,i)=>{
  const start = i ? points[i-1] : pt;
  const s = {x:start.x,y:start.y};
  tl.to(s,{x:pt.x,y:pt.y,duration:4/points.length,ease:'none',onUpdate:()=>drawPrefix(i,s)},i*4/points.length);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 점에서 점으로 선 생성을 적용해줘. 점별 출현 시간을 정하고 이전 점 좌표에서 목표 좌표로 보간해 연결선을 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 4s; 점 수 20; 선폭 3px; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 월별 측정점이 앞 점에서 다음 값까지 이어져 추세를 만든다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 점에서 점으로 선 생성을 적용해. 점별 출현 시간을 정하고 이전 점 좌표에서 목표 좌표로 보간해 연결선을 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 4s; 점 수 20; 선폭 3px; 이징 none를 사용해. 1초, 2초, 4초 시점을 캡처해 이전 점에서 출발한 다음 점이 실제 값의 위치로 움직이며 선이 이어진다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Point-to-point Construction to <target>. Use a 4s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Each new point travels from the previous point to its data position, extending the line.
```

### English · Codex
```text
Apply Point-to-point Construction in the chart update section of <file>. Use the card parameter defaults, a 4s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 1s, 2s, and 4s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 점에서 점으로 선 생성를 `.hero`에 적용해. / Apply Point-to-point Construction to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 4초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 점별 출현 시간을 정하고 이전 점 좌표에서 목표 좌표로 보간해 연결선을 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 4s; 점 수 20; 선폭 3px; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 월별 측정점이 앞 점에서 다음 값까지 이어져 추세를 만든다.
- Scrolline Deck: 진행률 0~1을 4초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [chartjs/Chart.js](https://www.chartjs.org/docs/latest/samples/animations/progressive-line.html) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
