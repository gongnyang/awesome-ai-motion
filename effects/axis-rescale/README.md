# Nº 249 축 범위 전환 · Axis Rescaling

> 클립 렌더 예정 / Clip rendering planned.

**눈금과 격자선이 새 범위의 위치로 이동하고 필요한 눈금이 나타나거나 사라진다.**

Ticks and gridlines move to a new scale as marks update with them.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Axis rescale choreography, 축 재범위 전환, Animated axes, Small-multiple scale alignment, 소형 차트 축 맞춤

## 선택 기준 / Selection

데이터 변화와 화면 축척 변화를 구분한다. / Separates changes in data from changes in chart scale.

- 차트의 최대값이 바뀌어 축 범위를 조정할 때 / Use when explaining axis rescaling in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 범위 확대 장면에서 눈금과 격자선이 새 범위의 위치로 이동하고 필요한 눈금이 나타나거나 사라진다. 0.7s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 축만 바꾸고 데이터 마크 위치는 그대로 둔다
주의 / Avoid: 축만 바꾸고 데이터 마크 위치는 그대로 둔다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.7s | 0.49~1.05s | 후보의 주요 이동 또는 유지 시간이다 |
| 눈금 수 | 5개 | 4~7개 | 주요 눈금을 일정하게 유지한다 |
| 신규 눈금 페이드 | 250ms | 150~350ms | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
ticks.forEach(t => tl.to(t.el, {y: t.nextY, duration: .7, ease: 'power2.inOut'}, 0));
marks.forEach(m => tl.to(m.el, {attr: {cy: m.nextY}, duration: .7, ease: 'power2.inOut'}, 0));
tl.fromTo(newTicks, {opacity: 0}, {opacity: 1, duration: .25}, .45);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 축 범위 전환 효과를 적용해. 전후 스케일로 같은 눈금값의 위치를 계산하고 데이터 좌표와 함께 보간한다. 기본 구간은 0.7초, 눈금 수은 5개, 신규 눈금 페이드은 250ms, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 축 범위 전환 장면에 적용해. 전후 스케일로 같은 눈금값의 위치를 계산하고 데이터 좌표와 함께 보간한다. 0.7초 구간과 power2.inOut, 눈금 수 5개, 신규 눈금 페이드 250ms를 적용하고 초기 상태를 명시해. 0초, 0.35초, 0.7초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Axis Rescaling to <target>. Ticks and gridlines move to a new scale as marks update with them. Use a 0.7-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the tick count to 5 and the new tick fade to 250ms. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Axis Rescaling in the relevant scene in <file>. Ticks and gridlines move to a new scale as marks update with them. Use a 0.7-second primary interval with power2.inOut easing and explicit initial states. Set the tick count to 5 and the new tick fade to 250ms. Capture at 0, 0.35, and 0.7 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 축 범위 전환를 `.hero`에 적용해. / Apply Axis Rescaling to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.7초 구간, 눈금 수 5개, 신규 눈금 페이드 250ms와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) (Apache-2.0) · [Flourish](https://flourish.studio/blog/line-chart-race/) (unknown) · [reuters-graphics/chart-module-india-covid-cartogram](https://github.com/reuters-graphics/chart-module-india-covid-cartogram) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
