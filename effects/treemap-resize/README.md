# Nº 302 트리맵 면적 갱신 · Treemap Resizing

> 클립 렌더 예정 / Clip rendering planned.

**직사각형들이 가급적 이웃 관계를 유지하면서 면적을 늘리거나 줄인다.**

Treemap rectangles resize while preserving their neighborhood where possible.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Stable treemap resizing

## 선택 기준 / Selection

구성 항목의 규모 변화를 공간적 맥락과 함께 비교한다. / Compares changing shares within a stable spatial context.

- 연도별 예산 구성의 면적을 비교할 때 / Use when explaining treemap resizing in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 예산 구성 장면에서 직사각형들이 가급적 이웃 관계를 유지하면서 면적을 늘리거나 줄인다. 1s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 면적 갱신마다 타일 순서까지 섞는다
주의 / Avoid: 면적 갱신마다 타일 순서까지 섞는다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1s | 0.7~1.5s | 후보의 주요 이동 또는 유지 시간이다 |
| 내부 여백 | 1px | 1~4px | 타일 사이 경계를 남긴다 |
| 라벨 최소 폭 | 64px | 48~96px | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
tiles.forEach(t => {
  tl.to(t.el, {attr: {x: t.x, y: t.y, width: t.w, height: t.h},
    duration: 1, ease: 'power2.inOut'}, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 트리맵 면적 갱신 효과를 적용해. 안정된 타일 배치의 전후 x, y, 폭, 높이를 보간한다. 기본 구간은 1초, 내부 여백은 1px, 라벨 최소 폭은 64px, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 트리맵 면적 갱신 장면에 적용해. 안정된 타일 배치의 전후 x, y, 폭, 높이를 보간한다. 1초 구간과 power2.inOut, 내부 여백 1px, 라벨 최소 폭 64px를 적용하고 초기 상태를 명시해. 0초, 0.5초, 1초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Treemap Resizing to <target>. Treemap rectangles resize while preserving their neighborhood where possible. Use a 1-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the inner gutter to 1px and the minimum label width to 64px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Treemap Resizing in the relevant scene in <file>. Treemap rectangles resize while preserving their neighborhood where possible. Use a 1-second primary interval with power2.inOut easing and explicit initial states. Set the inner gutter to 1px and the minimum label width to 64px. Capture at 0, 0.5, and 1 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 트리맵 면적 갱신를 `.hero`에 적용해. / Apply Treemap Resizing to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1초 구간, 내부 여백 1px, 라벨 최소 폭 64px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Observable @d3](https://observablehq.com/@d3/animated-treemap) (unknown) · [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
