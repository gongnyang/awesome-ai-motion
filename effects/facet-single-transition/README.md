# Nº 307 패널 통합 전환 · Facet-to-single Transition

> 클립 렌더 예정 / Clip rendering planned.

**여러 작은 차트 패널의 데이터 마크가 한 공통 축으로 이동하거나 한 차트에서 여러 패널로 갈라진다**

Data marks from several small chart panels move onto one shared axis, or one chart splits into several panels.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 비교, 데이터 증명 | 데이터 스토리, 발표, 스크롤덱 | svg |

다른 이름 / Also known as: Facet-to-single comparison, 패싯 차트와 단일 차트 전환

## 선택 기준 / Selection

작은 차트 여러 개의 데이터 마크가 하나의 공통 축으로 모이거나, 하나에서 여러 패널로 갈라진다 / Links the comparison of split items and their overall relationship with the same data.

- 항목별 차트를 나란히 보여 준 뒤 겹쳐서 전체 관계를 보여 줄 때 / To show per-item charts side by side, then overlay them to show the overall relationship
- 하나의 겹친 차트에서 항목별 패널로 분해해 각각의 흐름을 읽게 할 때 / To decompose a merged chart into per-item panels so each trend can be read

좋은 예 / Good: 3개 패널의 선 마크가 1100ms 동안 각자의 위치에서 공통 축의 겹친 위치로 이동하고, 색은 항목별로 고정된 채 패널 틀이 사라진다
나쁜 예 / Bad: 이동 중 마크의 색이 바뀌어 어떤 항목인지 놓치거나, 패널 축과 공통 축의 스케일이 달라 위치가 튄다
주의 / Avoid: 색은 전환 내내 고정한다 · 두 상태의 축 범위를 같은 값(0~100)으로 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1100ms | 900~1400ms | cubicInOut |
| 패널 수 | 3 | 2~4 | 2열 또는 3열 |
| 마크 이동 | 동시 이동 |  | 색 고정 |
| 패널 틀 opacity | 1에서 0 |  | 전환 초반 400ms |
| 축 범위 | 같은 값 0~100 |  | 스케일 정렬 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
const to = { a: { x: 0, y: 0 }, b: { x: -640, y: 0 }, c: { x: -1280, y: 0 } }; // 패널 좌표 대 공통 좌표 차이
Object.entries(to).forEach(([k, v]) => tl.to(`.mark-${k}`, { x: v.x, y: v.y, duration: 1.1, ease: 'power3.inOut' }, 0));
tl.to('.panel-frame', { opacity: 0, duration: 0.4, ease: 'none' }, 0);
tl.to('.common-axis', { opacity: 1, duration: 0.4 }, 0.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 차트에 패널 통합 전환을 넣어줘. 패널 3개(.mark-a, .mark-b, .mark-c)의 선 마크를 공통 축 위치로 1.1초 power3.inOut으로 동시에 이동시키고 색은 항목별로 고정해. 패널 틀(.panel-frame)은 0.4초 안에 opacity 0으로 빼고 0.5초부터 공통 축(.common-axis)을 0.4초 동안 나타나게 해. 두 상태의 축 범위는 0~100으로 맞춰.
```

### 한국어 · Codex
```text
<파일>에 패널 통합 전환을 구현해. 마크 a, b, c에 시작-끝 좌표 델타를 계산해 1.1초 power3.inOut, .panel-frame opacity 1에서 0 (0.4초), .common-axis opacity 0에서 1 (0.5초부터 0.4초). 0.3초, 0.6초, 0.9초, 1.1초 시점을 캡처해 마크 색이 바뀌지 않는지, 1.1초에 마크가 공통 축 좌표에 정확히 놓였는지 확인해.
```

### English · Claude Code
```text
Add a Facet-to-Single Transition to <target>. Move the line marks of 3 panels (.mark-a, .mark-b, .mark-c) to the shared axis positions together over 1.1s with power3.inOut, keeping each item's color fixed. Fade out .panel-frame within 0.4s and fade in .common-axis from 0.5s over 0.4s. Use the same 0 to 100 axis range in both states.
```

### English · Codex
```text
Implement Facet-to-Single Transition in <file>. Compute start-to-end deltas for marks a, b, and c and tween them over 1.1s power3.inOut; .panel-frame opacity 1 to 0 (0.4s); .common-axis 0 to 1 (0.4s from 0.5s). Capture at 0.3s, 0.6s, 0.9s, and 1.1s to confirm mark colors never change and marks land exactly on the shared axis coordinates at 1.1s.
```

예시 / Example: 패널 통합 전환를 `.hero`에 적용해. / Apply Facet-to-single Transition to `.hero`.

## 적용 / Application

- HyperFrames: 마크의 시작과 끝 좌표를 데이터에서 계산해 x, y 델타로 트윈한다. 두 상태 모두 같은 스케일 함수를 써서 좌표를 산출하면 seek 안전하다
- ReelForge: 씬 워커 브리프에 패널 수, 두 상태의 축 범위, 항목별 색, 지속 1100ms를 싣는다
- Scrolline Deck: scrub에서는 마크 이동을 진행률 0~1에 ease-out으로, 패널 틀 opacity는 0~0.35에 처리한다. 역스크롤 시 다시 갈라진다

조합 / Pair with: [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/) · [그룹 이동 · Group Motion](../group-motion/) · [비교 분할 · Split Compare](../split-compare/)

출처 / Sources: [MIT Visualization Group](https://vis.csail.mit.edu/pubs/animated-vega-lite/) (unknown) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [Flourish](https://app.flourish.studio/@flourish/scatter) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
