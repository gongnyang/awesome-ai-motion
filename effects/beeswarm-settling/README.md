# Nº 251 비즈웜 정착 · Beeswarm Settling

> 클립 렌더 예정 / Clip rendering planned.

**같은 값 근처의 점들이 서로 밀려 겹치지 않는 띠로 정착한다.**

Nearby observations spread into a non-overlapping band while keeping their value-axis positions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | canvas |

다른 이름 / Also known as: 비즈웜 충돌 정착

## 선택 기준 / Selection

개별 항목과 분포 밀도를 함께 읽는다. / Shows individual observations and local distribution density together.

- 개별 항목과 분포 밀도를 함께 읽는다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain beeswarm settling while preserving item identities and chart scales.
- 같은 점수의 점을 수직으로 펼쳐 값 위치와 밀도를 함께 보여준다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 같은 점수의 점을 수직으로 펼쳐 값 위치와 밀도를 함께 보여준다.
나쁜 예 / Bad: 충돌 해소 중 값 축 좌표를 밀어 원래 점수가 달라 보인다.
주의 / Avoid: 충돌 해소 중 값 축 좌표를 밀어 원래 점수가 달라 보인다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1s | 0.75~1.5s | 시점 또는 전환 한 회 기준 |
| 점 반지름 | 4px | 3~7px | 점 면적 동일 |
| 충돌 여백 | 1px | 1~3px | 값 축 좌표 고정 |
| 감쇠 | 0.4 | 0.3~0.6 | 고정 tick 사전 계산에 적용 |
| 이징 | power2.out | power2.out | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {p:0};
const target = solveBeeswarmFixed(values,4,1);
tl.to(s,{p:1,duration:1,ease:'power2.out',onUpdate:()=>{
  drawCanvasPoints(target.map((v,i)=>({x:v.x,y:lerp(start[i].y,v.y,s.p),r:4})));
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 비즈웜 정착을 적용해줘. 값 축의 목표 위치를 고정하고 수직 충돌을 풀어 Canvas 점 좌표를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 점 반지름 4px; 충돌 여백 1px; 감쇠 0.4; 이징 power2.out로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 같은 점수의 점을 수직으로 펼쳐 값 위치와 밀도를 함께 보여준다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 비즈웜 정착을 적용해. 값 축의 목표 위치를 고정하고 수직 충돌을 풀어 Canvas 점 좌표를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 점 반지름 4px; 충돌 여백 1px; 감쇠 0.4; 이징 power2.out를 사용해. 0.25초, 0.5초, 1초 시점을 캡처해 같은 값 근처의 점들이 서로 밀려 겹치지 않는 띠로 정착한다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Beeswarm Settling to <target>. Use a 1s transition with power2.out easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Nearby observations spread into a non-overlapping band while keeping their value-axis positions.
```

### English · Codex
```text
Apply Beeswarm Settling in the chart update section of <file>. Use the card parameter defaults, a 1s transition, and power2.out easing; implement the snippet geometry helpers from fixed input data. Capture at 0.25s, 0.5s, and 1s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 비즈웜 정착를 `.hero`에 적용해. / Apply Beeswarm Settling to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 값 축의 목표 위치를 고정하고 수직 충돌을 풀어 Canvas 점 좌표를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1s; 점 반지름 4px; 충돌 여백 1px; 감쇠 0.4; 이징 power2.out와 항목 ID, 축 범위, 전후 데이터를 싣는다. 같은 점수의 점을 수직으로 펼쳐 값 위치와 밀도를 함께 보여준다.
- Scrolline Deck: 진행률 0~1을 1초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [d3/d3-force](https://d3js.org/d3-force/simulation) (ISC) · [the-pudding/pop-love-songs](https://github.com/the-pudding/pop-love-songs) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
