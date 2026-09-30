# Nº 263 불확실성 띠 공개 · Confidence Band Reveal

> 클립 렌더 예정 / Clip rendering planned.

**추정선 주변의 반투명 띠가 시간 순서로 펼쳐지거나 폭을 바꾼다.**

A translucent interval around an estimate unfolds in time or changes width.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Confidence-band reveal

## 선택 기준 / Selection

추세와 함께 추정의 범위를 읽는다. / Shows the estimated trend together with its uncertainty range.

- 추세와 함께 추정의 범위를 읽는다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain confidence band reveal while preserving item identities and chart scales.
- 예측선과 95% 예측구간을 같은 진행률로 공개하고 범례에 구간을 명시한다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 예측선과 95% 예측구간을 같은 진행률로 공개하고 범례에 구간을 명시한다.
나쁜 예 / Bad: 구간 의미를 생략해 띠를 실제 최솟값과 최댓값으로 읽게 한다.
주의 / Avoid: 구간 의미를 생략해 띠를 실제 최솟값과 최댓값으로 읽게 한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1.2s | 0.9~1.8s | 시점 또는 전환 한 회 기준 |
| 띠 불투명도 | 0.2 | 0.12~0.3 | 중앙선보다 옅게 |
| 클립 너비 | 960px | 640~1440px | 선과 띠에 같은 클립 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
gsap.set('.band',{opacity:0.2});
gsap.set('#bandClip rect',{attr:{width:0}});
tl.to('#bandClip rect',{attr:{width:960},duration:1.2,ease:'none'});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 불확실성 띠 공개을 적용해줘. 상한과 하한 SVG 경로를 구성하고 공통 클립 경계로 공개한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1.2s; 띠 불투명도 0.2; 클립 너비 960px; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 예측선과 95% 예측구간을 같은 진행률로 공개하고 범례에 구간을 명시한다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 불확실성 띠 공개을 적용해. 상한과 하한 SVG 경로를 구성하고 공통 클립 경계로 공개한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1.2s; 띠 불투명도 0.2; 클립 너비 960px; 이징 none를 사용해. 0.3초, 0.6초, 1.2초 시점을 캡처해 추정선 주변의 반투명 띠가 시간 순서로 펼쳐지거나 폭을 바꾼다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Confidence Band Reveal to <target>. Use a 1.2s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. A translucent interval around an estimate unfolds in time or changes width.
```

### English · Codex
```text
Apply Confidence Band Reveal in the chart update section of <file>. Use the card parameter defaults, a 1.2s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.3s, 0.6s, and 1.2s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 불확실성 띠 공개를 `.hero`에 적용해. / Apply Confidence Band Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.2초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 상한과 하한 SVG 경로를 구성하고 공통 클립 경계로 공개한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1.2s; 띠 불투명도 0.2; 클립 너비 960px; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 예측선과 95% 예측구간을 같은 진행률로 공개하고 범례에 구간을 명시한다.
- Scrolline Deck: 진행률 0~1을 1.2초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [reuters-graphics/chart-module-polling-lines](https://github.com/reuters-graphics/chart-module-polling-lines) (unknown) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
