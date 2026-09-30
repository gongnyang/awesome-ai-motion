# Nº 257 변화 방향 화살표 · Connected Change Arrows

> 클립 렌더 예정 / Clip rendering planned.

**기준 위치에 남은 점에서 새 위치로 선이 늘어나고 화살촉이 끝을 따라 움직인다.**

An arrow extends from a fixed previous position toward the updated position.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

## 선택 기준 / Selection

변화의 방향과 크기를 동시에 읽는다. / Encodes both the direction and magnitude of change.

- 변화의 방향과 크기를 동시에 읽는다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain connected change arrows while preserving item identities and chart scales.
- 이전 소득과 수명 좌표에서 새 좌표로 화살표를 늘린다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 이전 소득과 수명 좌표에서 새 좌표로 화살표를 늘린다.
나쁜 예 / Bad: 항목마다 다른 축 척도를 써 화살표 길이를 비교할 수 없다.
주의 / Avoid: 항목마다 다른 축 척도를 써 화살표 길이를 비교할 수 없다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.9s | 0.675~1.35s | 시점 또는 전환 한 회 기준 |
| 선폭 | 1.5px | 1~3px | 기준점은 고정 |
| 화살촉 길이 | 6px | 5~10px | 선 끝 marker로 연결 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
arrows.forEach((el,i)=>{
  gsap.set(el,{attr:{x1:before[i].x,y1:before[i].y,x2:before[i].x,y2:before[i].y}});
  tl.to(el,{attr:{x2:after[i].x,y2:after[i].y},duration:0.9,ease:'power2.inOut'},0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 변화 방향 화살표을 적용해줘. 이전 점을 고정하고 현재 점까지의 SVG 선과 marker 위치를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.9s; 선폭 1.5px; 화살촉 길이 6px; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 이전 소득과 수명 좌표에서 새 좌표로 화살표를 늘린다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 변화 방향 화살표을 적용해. 이전 점을 고정하고 현재 점까지의 SVG 선과 marker 위치를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.9s; 선폭 1.5px; 화살촉 길이 6px; 이징 power2.inOut를 사용해. 0.225초, 0.45초, 0.9초 시점을 캡처해 기준 위치에 남은 점에서 새 위치로 선이 늘어나고 화살촉이 끝을 따라 움직인다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Connected Change Arrows to <target>. Use a 0.9s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. An arrow extends from a fixed previous position toward the updated position.
```

### English · Codex
```text
Apply Connected Change Arrows in the chart update section of <file>. Use the card parameter defaults, a 0.9s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.225s, 0.45s, and 0.9s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 변화 방향 화살표를 `.hero`에 적용해. / Apply Connected Change Arrows to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.9초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 이전 점을 고정하고 현재 점까지의 SVG 선과 marker 위치를 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.9s; 선폭 1.5px; 화살촉 길이 6px; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 이전 소득과 수명 좌표에서 새 좌표로 화살표를 늘린다.
- Scrolline Deck: 진행률 0~1을 0.9초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Flourish](https://flourish.studio/blog/make-arrow-plots/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
