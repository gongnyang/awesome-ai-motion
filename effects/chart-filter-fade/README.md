# Nº 258 차트 필터 페이드 · Chart Filter Fade

> 클립 렌더 예정 / Clip rendering planned.

**조건을 벗어난 점과 선이 흐려지고 새 조건의 항목이 나타난다.**

Marks outside a filter fade away while marks matching the new condition appear.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: 필터 항목 출입

## 선택 기준 / Selection

조건을 바꾸면 어떤 데이터가 남는지 구분한다. / Clarifies which observations remain after a condition changes.

- 조건을 바꾸면 어떤 데이터가 남는지 구분한다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain chart filter fade while preserving item identities and chart scales.
- 지역 필터를 바꾸면 제외 점이 0.35초에 사라지고 남은 점 좌표는 유지된다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 지역 필터를 바꾸면 제외 점이 0.35초에 사라지고 남은 점 좌표는 유지된다.
나쁜 예 / Bad: 필터와 축 재조정을 동시에 적용해 남은 점도 이동한다.
주의 / Avoid: 필터와 축 재조정을 동시에 적용해 남은 점도 이동한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.35s | 0.2625~0.525s | 시점 또는 전환 한 회 기준 |
| 제외 항목 불투명도 | 0 | 0~0.15 | 0이면 읽기와 클릭에서 제외 |
| 유지 항목 불투명도 | 1 | 0.8~1 | 축과 좌표 유지 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
marks.forEach((el,i)=>{
  tl.to(el,{opacity:included[i]?1:0,duration:0.35,ease:'none'},0);
});
// Derive hit testing from included, independently of playback direction.
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 차트 필터 페이드을 적용해줘. 조건별 대상 SVG 그룹의 opacity를 보간하고 종료 후 가시성을 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.35s; 제외 항목 불투명도 0; 유지 항목 불투명도 1; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 지역 필터를 바꾸면 제외 점이 0.35초에 사라지고 남은 점 좌표는 유지된다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 차트 필터 페이드을 적용해. 조건별 대상 SVG 그룹의 opacity를 보간하고 종료 후 가시성을 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.35s; 제외 항목 불투명도 0; 유지 항목 불투명도 1; 이징 none를 사용해. 0.0875초, 0.175초, 0.35초 시점을 캡처해 조건을 벗어난 점과 선이 흐려지고 새 조건의 항목이 나타난다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Chart Filter Fade to <target>. Use a 0.35s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Marks outside a filter fade away while marks matching the new condition appear.
```

### English · Codex
```text
Apply Chart Filter Fade in the chart update section of <file>. Use the card parameter defaults, a 0.35s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.0875s, 0.175s, and 0.35s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 차트 필터 페이드를 `.hero`에 적용해. / Apply Chart Filter Fade to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.35초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 조건별 대상 SVG 그룹의 opacity를 보간하고 종료 후 가시성을 갱신한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.35s; 제외 항목 불투명도 0; 유지 항목 불투명도 1; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 지역 필터를 바꾸면 제외 점이 0.35초에 사라지고 남은 점 좌표는 유지된다.
- Scrolline Deck: 진행률 0~1을 0.35초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
