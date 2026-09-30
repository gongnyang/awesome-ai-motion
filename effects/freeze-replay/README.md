# Nº 269 중요 시점 정지와 재생 · Freeze and Replay

> 클립 렌더 예정 / Clip rendering planned.

**진행 중인 차트가 특정 시점에 멈춰 주석을 보여주고 같은 구간을 다시 재생한다.**

A chart holds at a checkpoint, displays an annotation, then replays the interval.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | gsap |

다른 이름 / Also known as: Data checkpoint freeze and replay, 데이터 중요 시점 정지와 재생

## 선택 기준 / Selection

짧게 지나간 중요 변화와 전후 관계를 다시 읽는다. / Makes a brief critical change readable in context.

- 차트의 결정적인 추월을 다시 설명할 때 / Use when explaining freeze and replay in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 결정적 추월 장면에서 진행 중인 차트가 특정 시점에 멈춰 주석을 보여주고 같은 구간을 다시 재생한다. 2s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 정지 중에도 주석의 기준 데이터가 바뀐다
주의 / Avoid: 정지 중에도 주석의 기준 데이터가 바뀐다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 2s | 1.4~3s | 후보의 주요 이동 또는 유지 시간이다 |
| 정지 시간 | 1800ms | 1000~2500ms | 주석을 읽을 시간을 확보한다 |
| 재생 횟수 | 1회 | 1~2회 | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {p: 0};
const tl = gsap.timeline({paused: true});
tl.to(state, {p: 1, duration: 2, ease: 'none', onUpdate: () => drawChart(state.p)});
tl.to({}, {duration: 1.8});
tl.set(state, {p: 0, onUpdate: () => drawChart(state.p)});
tl.to(state, {p: 1, duration: 2, ease: 'none', onUpdate: () => drawChart(state.p)});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 중요 시점 정지와 재생 효과를 적용해. 공유 시간 진행률을 정지한 뒤 지정된 시간 구간부터 다시 증가시킨다. 기본 구간은 2초, 정지 시간은 1800ms, 재생 횟수은 1회, 이징은 none로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 중요 시점 정지와 재생 장면에 적용해. 공유 시간 진행률을 정지한 뒤 지정된 시간 구간부터 다시 증가시킨다. 2초 구간과 none, 정지 시간 1800ms, 재생 횟수 1회를 적용하고 초기 상태를 명시해. 0초, 1초, 2초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Freeze and Replay to <target>. A chart holds at a checkpoint, displays an annotation, then replays the interval. Use a 2-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the hold duration to 1800ms and the replay count to 1. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Freeze and Replay in the relevant scene in <file>. A chart holds at a checkpoint, displays an annotation, then replays the interval. Use a 2-second primary interval with none easing and explicit initial states. Set the hold duration to 1800ms and the replay count to 1. Capture at 0, 1, and 2 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 중요 시점 정지와 재생를 `.hero`에 적용해. / Apply Freeze and Replay to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 2초 구간, 정지 시간 1800ms, 재생 횟수 1회와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview) (unknown) · [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
