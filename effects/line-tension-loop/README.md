# Nº 422 선 곡률 루프 · Line Tension Loop

> 클립 렌더 예정 / Clip rendering planned.

**같은 데이터 점을 잇는 선이 직선에 가까워졌다가 둥근 곡선으로 돌아간다.**

A line alternates between straight and curved interpolation while its data points stay fixed.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 설명, 강조 | 설명 영상, 웹 UI, 숏폼 | canvas |

다른 이름 / Also known as: Looping line tension, 선 곡률 반복 변화

## 선택 기준 / Selection

선 보간 방식의 차이를 보여주거나 차트를 반복 강조한다. / Explains the difference between interpolation styles.

- 보간 방식을 비교할 때 / Compare interpolation methods.
- 고정 데이터 선의 형태를 설명할 때 / Explain the geometry of a fixed data series.

좋은 예 / Good: 같은 네 점을 유지하며 직선과 부드러운 보간선을 비교한다.
나쁜 예 / Bad: 곡률 변경을 데이터 값 변화처럼 설명한다.
주의 / Avoid: 같은 장면의 여러 대상에 동시에 적용하지 않는다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 편도 지속 | 1s | 0.6~2s | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 최소 곡률 | 0 | 0~0.2 | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 최대 곡률 | 1 | 0.4~1 | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 왕복 주기 | 2s | 1.2~4s | 1920x1080 기준. 장면 시작을 0초로 둔다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { tension: 0 };
const tl = gsap.timeline({ paused: true });
tl.to(state, { tension: 1, duration: 1, ease: 'none',
  onUpdate: () => { chart.data.datasets[0].tension = state.tension; chart.update('none'); } })
  .to(state, { tension: 0, duration: 1, ease: 'none',
  onUpdate: () => { chart.data.datasets[0].tension = state.tension; chart.update('none'); } });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 선 곡률 루프을 구현해. 편도 지속 1s, 최소 곡률 0, 최대 곡률 1, 왕복 주기 2s, 이징 none을 적용해. 점 좌표를 유지하고 Bézier 제어점의 tension만 보간한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 선 곡률 루프 장면 레이어에 적용해. 편도 지속 1s, 최소 곡률 0, 최대 곡률 1, 왕복 주기 2s, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Line Tension Loop on <target>. Use one-way duration 1s; minimum tension 0; maximum tension 1; round-trip period 2s; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Line Tension Loop to the scene layer in <file>. Use one-way duration 1s; minimum tension 0; maximum tension 1; round-trip period 2s and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 선 곡률 루프를 `.hero`에 적용해. / Apply Line Tension Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 선 곡률 루프의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 편도 지속 1s, 최소 곡률 0, 최대 곡률 1, 왕복 주기 2s을 싣고 canvas 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 1s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [차트 경로 모프 · Chart Path Morph](../chart-path-morph/) · [비교 분할 · Split Compare](../split-compare/)

출처 / Sources: [chartjs/Chart.js](https://www.chartjs.org/docs/latest/samples/animations/loop.html) (MIT) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
