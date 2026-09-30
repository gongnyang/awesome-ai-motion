# Nº 256 카토그램 재배열 · Cartogram Transition

> 클립 렌더 예정 / Clip rendering planned.

**지역들이 지리적 위치에서 격자나 수치 면적의 위치로 이동하며 동일 지역의 색과 이름이 남는다.**

Regions move from geographic positions into a grid or value-sized layout.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Geographic cartogram rearrangement, 지도 카토그램 재배열

## 선택 기준 / Selection

지리 크기와 데이터 규모의 차이를 연결한다. / Links geographic size with the magnitude represented by data.

- 지역 면적과 인구 규모의 차이를 비교할 때 / Use when explaining cartogram transition in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 격자 카토그램 장면에서 지역들이 지리적 위치에서 격자나 수치 면적의 위치로 이동하며 동일 지역의 색과 이름이 남는다. 1.2s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 지역 정체성이 사라지는 임의 순서로 이동시킨다
주의 / Avoid: 지역 정체성이 사라지는 임의 순서로 이동시킨다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1.2s | 0.84~1.8s | 후보의 주요 이동 또는 유지 시간이다 |
| 라벨 페이드 | 250ms | 150~400ms | 지역 이름은 동일하게 유지한다 |
| 타일 간격 | 4px | 2~8px | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
regions.forEach(r => {
  tl.to(r.el, {x: r.dx, y: r.dy, scale: r.nextScale,
    duration: 1.2, ease: 'power2.inOut'}, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 카토그램 재배열 효과를 적용해. 지역별 지리 중심과 카토그램 중심을 대응하고 형태 크기를 함께 보간한다. 기본 구간은 1.2초, 라벨 페이드은 250ms, 타일 간격은 4px, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 카토그램 재배열 장면에 적용해. 지역별 지리 중심과 카토그램 중심을 대응하고 형태 크기를 함께 보간한다. 1.2초 구간과 power2.inOut, 라벨 페이드 250ms, 타일 간격 4px를 적용하고 초기 상태를 명시해. 0초, 0.6초, 1.2초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Cartogram Transition to <target>. Regions move from geographic positions into a grid or value-sized layout. Use a 1.2-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the label fade to 250ms and the tile spacing to 4px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Cartogram Transition in the relevant scene in <file>. Regions move from geographic positions into a grid or value-sized layout. Use a 1.2-second primary interval with power2.inOut easing and explicit initial states. Set the label fade to 250ms and the tile spacing to 4px. Capture at 0, 0.6, and 1.2 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 카토그램 재배열를 `.hero`에 적용해. / Apply Cartogram Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1.2초 구간, 라벨 페이드 250ms, 타일 간격 4px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) (Apache-2.0) · [reuters-graphics/chart-module-india-covid-cartogram](https://github.com/reuters-graphics/chart-module-india-covid-cartogram) (unknown) · [Observable](https://old.observablehq.com/blog/effective-animation) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
