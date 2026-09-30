# Nº 262 데이터 색상 전환 · Color Encoding Transition

> 클립 렌더 예정 / Clip rendering planned.

**위치가 고정된 데이터 마크의 색이 새 수치나 분류의 색으로 변한다.**

Stationary marks change color to reflect updated values or categories.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Animated mark color encoding, 마크 색상 인코딩 전환

## 선택 기준 / Selection

위치 변화를 섞지 않고 범주와 수치 변화만 읽는다. / Isolates changes in encoding without introducing spatial motion.

- 히트맵 수치 변화만 비교할 때 / Use when explaining color encoding transition in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 수치 색 장면에서 위치가 고정된 데이터 마크의 색이 새 수치나 분류의 색으로 변한다. 0.65s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 색 범위도 매 프레임 바꿔 같은 색의 의미가 달라진다
주의 / Avoid: 색 범위도 매 프레임 바꿔 같은 색의 의미가 달라진다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.65s | 0.455~0.975s | 후보의 주요 이동 또는 유지 시간이다 |
| 범례 전환 | 650ms | 400~900ms | 마크와 같은 시각에 갱신한다 |
| 위치 이동 | 0px | 0px | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
marks.forEach(m => {
  tl.to(m.el, {fill: m.nextColor, duration: .65, ease: 'none'}, 0);
});
legend.forEach(m => tl.to(m.el, {fill: m.nextColor, duration: .65, ease: 'none'}, 0));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 데이터 색상 전환 효과를 적용해. 같은 데이터 항목의 이전 색과 목표 색을 계산해 fill을 보간한다. 기본 구간은 0.65초, 범례 전환은 650ms, 위치 이동은 0px, 이징은 none로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 데이터 색상 전환 장면에 적용해. 같은 데이터 항목의 이전 색과 목표 색을 계산해 fill을 보간한다. 0.65초 구간과 none, 범례 전환 650ms, 위치 이동 0px를 적용하고 초기 상태를 명시해. 0초, 0.325초, 0.65초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Color Encoding Transition to <target>. Stationary marks change color to reflect updated values or categories. Use a 0.65-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the legend transition to 650ms and the position displacement to 0px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Color Encoding Transition in the relevant scene in <file>. Stationary marks change color to reflect updated values or categories. Use a 0.65-second primary interval with none easing and explicit initial states. Set the legend transition to 650ms and the position displacement to 0px. Capture at 0, 0.325, and 0.65 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 데이터 색상 전환를 `.hero`에 적용해. / Apply Color Encoding Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.65초 구간, 범례 전환 650ms, 위치 이동 0px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [d3/d3-interpolate](https://d3js.org/d3-interpolate) (ISC) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
