# Nº 280 데이터 이동 잔상 · Motion Trails

> 클립 렌더 예정 / Clip rendering planned.

**움직이는 점 뒤에 지나온 좌표가 선이나 옅은 점으로 남는다.**

A moving point leaves a fading line or sequence of dots along its recent path.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Persistent motion trails, 데이터 이동 잔상 경로, Timestamped trip tails, 시간표 경로 꼬리

## 선택 기준 / Selection

최종 위치뿐 아니라 이동 방향과 과거 경로를 읽는다. / Makes direction and previous positions readable alongside the current position.

- 최종 위치뿐 아니라 이동 방향과 과거 경로를 읽는다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain motion trails while preserving item identities and chart scales.
- 선수 점 뒤에 최근 2초 경로를 옅은 꼬리로 남긴다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 선수 점 뒤에 최근 2초 경로를 옅은 꼬리로 남긴다.
나쁜 예 / Bad: 전체 궤적을 진하게 겹쳐 현재 위치를 가린다.
주의 / Avoid: 전체 궤적을 진하게 겹쳐 현재 위치를 가린다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 2s | 1.5~3s | 시점 또는 전환 한 회 기준 |
| 꼬리 표본 | 20 | 10~30 | 최근 좌표만 표시 |
| 꼬리 불투명도 | 0.3 | 0.15~0.4 | 오래된 표본일수록 옅게 |
| 표본 간격 | 100ms | 50~200ms | 고정 시간으로 좌표 조회 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {time:0};
tl.to(s,{time:2,duration:2,ease:'none',onUpdate:()=>{
  drawTrailAtTime(track,s.time,{samples:20,step:0.1,opacity:0.3});
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 데이터 이동 잔상을 적용해줘. 점 ID별 최근 좌표를 보관하고 시간에 따라 투명도가 낮아지는 경로를 그린다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 2s; 꼬리 표본 20; 꼬리 불투명도 0.3; 표본 간격 100ms; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 선수 점 뒤에 최근 2초 경로를 옅은 꼬리로 남긴다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 데이터 이동 잔상을 적용해. 점 ID별 최근 좌표를 보관하고 시간에 따라 투명도가 낮아지는 경로를 그린다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 2s; 꼬리 표본 20; 꼬리 불투명도 0.3; 표본 간격 100ms; 이징 none를 사용해. 0.5초, 1초, 2초 시점을 캡처해 움직이는 점 뒤에 지나온 좌표가 선이나 옅은 점으로 남는다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Motion Trails to <target>. Use a 2s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. A moving point leaves a fading line or sequence of dots along its recent path.
```

### English · Codex
```text
Apply Motion Trails in the chart update section of <file>. Use the card parameter defaults, a 2s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.5s, 1s, and 2s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 데이터 이동 잔상를 `.hero`에 적용해. / Apply Motion Trails to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 2초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 점 ID별 최근 좌표를 보관하고 시간에 따라 투명도가 낮아지는 경로를 그린다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 2s; 꼬리 표본 20; 꼬리 불투명도 0.3; 표본 간격 100ms; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 선수 점 뒤에 최근 2초 경로를 옅은 꼬리로 남긴다.
- Scrolline Deck: 진행률 0~1을 2초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Flourish](https://app.flourish.studio/@flourish/scatter) (unknown) · [Flourish](https://flourish.studio/blog/make-arrow-plots/) (unknown) · [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/9196682333199-Sports-template-player-animations) (unknown) · [visgl/deck.gl](https://deck.gl/docs/api-reference/geo-layers/trips-layer) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
