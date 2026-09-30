# Nº 272 가상 결과 프레임 순환 · Hypothetical Outcome Plot Cycling

> 클립 렌더 예정 / Clip rendering planned.

**같은 축 위에 가능한 결과의 선이나 점이 한 프레임씩 바뀐다.**

Possible outcomes replace one another frame by frame on fixed axes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | canvas |

다른 이름 / Also known as: HOPs

## 선택 기준 / Selection

분포의 폭과 가능한 결과의 다양성을 반복 관찰한다. / Communicates uncertainty through repeated sampled outcomes.

- 가능한 예측 결과의 다양성을 보여줄 때 / Use when explaining hypothetical outcome plot cycling in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 시계열 결과 장면에서 같은 축 위에 가능한 결과의 선이나 점이 한 프레임씩 바뀐다. 0.5s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 표본 사이를 보간해 실제 표본에 없는 결과를 만든다
주의 / Avoid: 표본 사이를 보간해 실제 표본에 없는 결과를 만든다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.5s | 0.35~0.75s | 후보의 주요 이동 또는 유지 시간이다 |
| 표본 수 | 50개 | 20~100개 | 고정 시드로 미리 생성한다 |
| 프레임 전환 | 0ms | 0ms | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {frame: 0};
const tl = gsap.timeline({paused: true});
frames.forEach((frame, i) => {
  tl.set(state, {frame: i, onUpdate: () => drawFrame(frames[state.frame])}, i * .5);
});
tl.to({}, {duration: .5});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 가상 결과 프레임 순환 효과를 적용해. 고정 시드로 분포 표본을 생성하고 timer 또는 타임라인으로 표본 프레임을 교체한다. 기본 구간은 0.5초, 표본 수은 50개, 프레임 전환은 0ms, 이징은 none로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 가상 결과 프레임 순환 장면에 적용해. 고정 시드로 분포 표본을 생성하고 timer 또는 타임라인으로 표본 프레임을 교체한다. 0.5초 구간과 none, 표본 수 50개, 프레임 전환 0ms를 적용하고 초기 상태를 명시해. 0초, 0.25초, 0.5초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Hypothetical Outcome Plot Cycling to <target>. Possible outcomes replace one another frame by frame on fixed axes. Use a 0.5-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the sample count to 50 and the frame transition to 0ms. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Hypothetical Outcome Plot Cycling in the relevant scene in <file>. Possible outcomes replace one another frame by frame on fixed axes. Use a 0.5-second primary interval with none easing and explicit initial states. Set the sample count to 50 and the frame transition to 0ms. Capture at 0, 0.25, and 0.5 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 가상 결과 프레임 순환를 `.hero`에 적용해. / Apply Hypothetical Outcome Plot Cycling to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.5초 구간, 표본 수 50개, 프레임 전환 0ms와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [vega/vega](https://vega.github.io/vega/examples/hypothetical-outcome-plots/) (BSD-3-Clause) · [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
