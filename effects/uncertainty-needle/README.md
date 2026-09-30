# Nº 303 불확실성 바늘 움직임 · Uncertainty Needle Motion

> 클립 렌더 예정 / Clip rendering planned.

**예측 바늘이 중심값 주변의 서로 다른 위치로 반복 움직인다.**

A forecast needle moves among sampled positions around a central estimate.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Forecast uncertainty needle motion, 예측 불확실성 바늘 움직임

## 선택 기준 / Selection

고정된 결과가 아니라 불확실한 범위의 예측임을 느낀다. / Makes a forecast feel uncertain rather than fixed.

- 예측값이 하나로 확정되지 않았음을 설명할 때 / Use when explaining uncertainty needle motion in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 바늘 장면에서 예측 바늘이 중심값 주변의 서로 다른 위치로 반복 움직인다. 0.25s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 임의 진동을 실제 신뢰 구간처럼 제시한다
주의 / Avoid: 임의 진동을 실제 신뢰 구간처럼 제시한다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.25s | 0.175~0.375s | 후보의 주요 이동 또는 유지 시간이다 |
| 표본 갱신 | 400ms | 300~700ms | 고정 시드 분포 표본을 순서대로 쓴다 |
| 각도 범위 | -25~25deg | -40~40deg | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
angles.forEach((angle, i) => {
  tl.to(needle, {rotation: angle, transformOrigin: '50% 100%',
    duration: .25, ease: 'power2.inOut'}, i * .4);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 불확실성 바늘 움직임 효과를 적용해. 예측 분포에서 표본 값을 얻어 SVG 바늘의 회전각 또는 위치를 보간한다. 기본 구간은 0.25초, 표본 갱신은 400ms, 각도 범위은 -25~25deg, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 불확실성 바늘 움직임 장면에 적용해. 예측 분포에서 표본 값을 얻어 SVG 바늘의 회전각 또는 위치를 보간한다. 0.25초 구간과 power2.inOut, 표본 갱신 400ms, 각도 범위 -25~25deg를 적용하고 초기 상태를 명시해. 0초, 0.125초, 0.25초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Uncertainty Needle Motion to <target>. A forecast needle moves among sampled positions around a central estimate. Use a 0.25-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the sample update interval to 400ms and the angle range to -25~25deg. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Uncertainty Needle Motion in the relevant scene in <file>. A forecast needle moves among sampled positions around a central estimate. Use a 0.25-second primary interval with power2.inOut easing and explicit initial states. Set the sample update interval to 400ms and the angle range to -25~25deg. Capture at 0, 0.125, and 0.25 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 불확실성 바늘 움직임를 `.hero`에 적용해. / Apply Uncertainty Needle Motion to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.25초 구간, 표본 갱신 400ms, 각도 범위 -25~25deg와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Observable](https://old.observablehq.com/blog/effective-animation) (unknown) · [vega/vega](https://vega.github.io/vega/examples/hypothetical-outcome-plots/) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
