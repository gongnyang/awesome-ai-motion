# Nº 252 상자수염 요약 갱신 · Boxplot Update

> 클립 렌더 예정 / Clip rendering planned.

**중앙값 선, 상자 양 끝과 수염 끝점이 새 분포의 요약값 위치로 함께 이동한다.**

The median, quartiles, and whisker endpoints move to updated summary positions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Boxplot summary transition

## 선택 기준 / Selection

분포의 중심과 흩어짐이 어떻게 달라졌는지 비교한다. / Compares changes in a distribution’s center and spread.

- 전후 분포의 중앙값과 사분위 범위를 비교할 때 / Use when explaining boxplot update in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 분포 시점 전환 장면에서 중앙값 선, 상자 양 끝과 수염 끝점이 새 분포의 요약값 위치로 함께 이동한다. 0.9s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 수염 정의를 바꾸고 같은 통계처럼 제시한다
주의 / Avoid: 수염 정의를 바꾸고 같은 통계처럼 제시한다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.9s | 0.63~1.35s | 후보의 주요 이동 또는 유지 시간이다 |
| 이상치 페이드 | 250ms | 150~400ms | 이상치 ID를 대응한다 |
| 상자 폭 | 48px | 32~72px | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
parts.forEach(p => {
  tl.to(p.el, {attr: p.nextAttrs, duration: .9, ease: 'power2.inOut'}, 0);
});
tl.fromTo(newOutliers, {opacity: 0}, {opacity: 1, duration: .25}, .65);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 상자수염 요약 갱신 효과를 적용해. 사분위수, 중앙값과 수염의 SVG 좌표를 보간하고 이상치 ID를 대응한다. 기본 구간은 0.9초, 이상치 페이드은 250ms, 상자 폭은 48px, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 상자수염 요약 갱신 장면에 적용해. 사분위수, 중앙값과 수염의 SVG 좌표를 보간하고 이상치 ID를 대응한다. 0.9초 구간과 power2.inOut, 이상치 페이드 250ms, 상자 폭 48px를 적용하고 초기 상태를 명시해. 0초, 0.45초, 0.9초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Boxplot Update to <target>. The median, quartiles, and whisker endpoints move to updated summary positions. Use a 0.9-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the outlier fade to 250ms and the box width to 48px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Boxplot Update in the relevant scene in <file>. The median, quartiles, and whisker endpoints move to updated summary positions. Use a 0.9-second primary interval with power2.inOut easing and explicit initial states. Set the outlier fade to 250ms and the box width to 48px. Capture at 0, 0.45, and 0.9 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 상자수염 요약 갱신를 `.hero`에 적용해. / Apply Boxplot Update to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.9초 구간, 이상치 페이드 250ms, 상자 폭 48px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT) · [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) (Apache-2.0) · [Flourish](https://app.flourish.studio/@flourish/scatter) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
