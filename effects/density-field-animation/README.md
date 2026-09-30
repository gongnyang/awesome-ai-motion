# Nº 264 시공간 밀도장 재생 · Spatiotemporal Density Animation

> 클립 렌더 예정 / Clip rendering planned.

**연속 색 면의 밝은 영역이 시간에 따라 이동하거나 넓어지고 좁아진다.**

A continuous density field shifts and changes extent over time.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | canvas |

다른 이름 / Also known as: Spatiotemporal density field

## 선택 기준 / Selection

개별 점 대신 공간적 집중과 이동 패턴을 본다. / Reveals spatial concentration and movement instead of individual points.

- 시간별 이동 집중 지역을 비교할 때 / Use when explaining spatiotemporal density animation in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 기상장 장면에서 연속 색 면의 밝은 영역이 시간에 따라 이동하거나 넓어지고 좁아진다. 0.5s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 시점마다 색상 최대값을 자동 조정한다
주의 / Avoid: 시점마다 색상 최대값을 자동 조정한다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.5s | 0.35~0.75s | 후보의 주요 이동 또는 유지 시간이다 |
| 밀도 반경 | 24px | 12~48px | 모든 시점에 동일한 반경을 쓴다 |
| 격자 간격 | 8px | 4~16px | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {p: 0};
const tl = gsap.timeline({paused: true});
tl.to(state, {p: 1, duration: .5, ease: 'none',
  onUpdate: () => drawDensity(state.p)}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 시공간 밀도장 재생 효과를 적용해. Canvas 격자에 시점별 밀도를 계산하고 같은 격자 셀 값과 색을 보간한다. 기본 구간은 0.5초, 밀도 반경은 24px, 격자 간격은 8px, 이징은 none로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 시공간 밀도장 재생 장면에 적용해. Canvas 격자에 시점별 밀도를 계산하고 같은 격자 셀 값과 색을 보간한다. 0.5초 구간과 none, 밀도 반경 24px, 격자 간격 8px를 적용하고 초기 상태를 명시해. 0초, 0.25초, 0.5초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Spatiotemporal Density Animation to <target>. A continuous density field shifts and changes extent over time. Use a 0.5-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the density radius to 24px and the grid spacing to 8px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Spatiotemporal Density Animation in the relevant scene in <file>. A continuous density field shifts and changes extent over time. Use a 0.5-second primary interval with none easing and explicit initial states. Set the density radius to 24px and the grid spacing to 8px. Capture at 0, 0.25, and 0.5 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 시공간 밀도장 재생를 `.hero`에 적용해. / Apply Spatiotemporal Density Animation to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.5초 구간, 밀도 반경 24px, 격자 간격 8px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Reuters Graphics](https://www.reuters.com/graphics/HEALTH-BIRDFLU/MIGRATION/movaqmblrva/) (unknown) · [Observable](https://old.observablehq.com/blog/effective-animation) (unknown) · [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
