# Nº 279 행렬 행과 열 정렬 · Matrix Row-column Sorting

> 클립 렌더 예정 / Clip rendering planned.

**셀들이 같은 행과 열 묶음을 유지하면서 새 순서의 격자 위치로 이동한다.**

Matrix cells move to new row and column ranks while retaining their identities.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

## 선택 기준 / Selection

상관 묶음이나 군집 구조가 정렬을 통해 드러나는 것을 본다. / Reveals clusters and correlation structure through sorting.

- 상관 행렬을 군집 순서로 정렬할 때 / Use when explaining matrix row-column sorting in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 상관 행렬 장면에서 셀들이 같은 행과 열 묶음을 유지하면서 새 순서의 격자 위치로 이동한다. 1s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 셀 색도 동시에 바꿔 정렬 결과와 값 변화를 혼동시킨다
주의 / Avoid: 셀 색도 동시에 바꿔 정렬 결과와 값 변화를 혼동시킨다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1s | 0.7~1.5s | 후보의 주요 이동 또는 유지 시간이다 |
| 셀 피치 | 16px | 12~32px | 인접 셀 중심 사이의 거리다 |
| 셀 내부 여백 | 1px | 1~3px | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
cells.forEach(c => {
  tl.to(c.el, {attr: {x: c.nextColumn * 16, y: c.nextRow * 16},
    duration: 1, ease: 'power2.inOut'}, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 행렬 행과 열 정렬 효과를 적용해. 행과 열의 이전 순위 및 목표 순위를 구해 각 셀 x와 y를 함께 보간한다. 기본 구간은 1초, 셀 피치은 16px, 셀 내부 여백은 1px, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 행렬 행과 열 정렬 장면에 적용해. 행과 열의 이전 순위 및 목표 순위를 구해 각 셀 x와 y를 함께 보간한다. 1초 구간과 power2.inOut, 셀 피치 16px, 셀 내부 여백 1px를 적용하고 초기 상태를 명시해. 0초, 0.5초, 1초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Matrix Row-column Sorting to <target>. Matrix cells move to new row and column ranks while retaining their identities. Use a 1-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the cell pitch to 16px and the inner cell gutter to 1px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Matrix Row-column Sorting in the relevant scene in <file>. Matrix cells move to new row and column ranks while retaining their identities. Use a 1-second primary interval with power2.inOut easing and explicit initial states. Set the cell pitch to 16px and the inner cell gutter to 1px. Capture at 0, 0.5, and 1 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 행렬 행과 열 정렬를 `.hero`에 적용해. / Apply Matrix Row-column Sorting to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1초 구간, 셀 피치 16px, 셀 내부 여백 1px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [MIT Visualization Group](https://vis.csail.mit.edu/pubs/animated-vega-lite/) (unknown) · [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
