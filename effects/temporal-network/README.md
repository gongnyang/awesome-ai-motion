# Nº 298 시간별 네트워크 변화 · Temporal Network Transition

> 클립 렌더 예정 / Clip rendering planned.

**노드와 연결선이 시간에 따라 나타나거나 사라지고 남은 노드들이 새 연결에 맞춰 재배치된다.**

Nodes and links enter, leave, and move between time snapshots.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | canvas |

다른 이름 / Also known as: Temporal network birth and death, 시간별 네트워크 생성과 소멸

## 선택 기준 / Selection

관계망의 성장과 해체를 시간 흐름으로 이해한다. / Shows how a network grows or dissolves over time.

- 연도별 거래 관계를 비교할 때 / Use when explaining temporal network transition in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 인물 관계 변화 장면에서 노드와 연결선이 시간에 따라 나타나거나 사라지고 남은 노드들이 새 연결에 맞춰 재배치된다. 1.2s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 매 시점 모든 노드의 위치를 초기화한다
주의 / Avoid: 매 시점 모든 노드의 위치를 초기화한다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1.2s | 0.84~1.8s | 후보의 주요 이동 또는 유지 시간이다 |
| 출입 페이드 | 300ms | 150~450ms | 노드 ID를 유지한다 |
| 배치 이동 제한 | 180px | 60~300px | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {p: 0};
const tl = gsap.timeline({paused: true});
tl.to(state, {p: 1, duration: 1.2, ease: 'power2.inOut',
  onUpdate: () => drawNetwork(state.p)}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 시간별 네트워크 변화 효과를 적용해. 이전 좌표를 유지한 상태에서 노드와 링크를 갱신하고 새 목표 배치를 보간한다. 기본 구간은 1.2초, 출입 페이드은 300ms, 배치 이동 제한은 180px, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 시간별 네트워크 변화 장면에 적용해. 이전 좌표를 유지한 상태에서 노드와 링크를 갱신하고 새 목표 배치를 보간한다. 1.2초 구간과 power2.inOut, 출입 페이드 300ms, 배치 이동 제한 180px를 적용하고 초기 상태를 명시해. 0초, 0.6초, 1.2초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Temporal Network Transition to <target>. Nodes and links enter, leave, and move between time snapshots. Use a 1.2-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the entry and exit fade to 300ms and the layout travel limit to 180px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Temporal Network Transition in the relevant scene in <file>. Nodes and links enter, leave, and move between time snapshots. Use a 1.2-second primary interval with power2.inOut easing and explicit initial states. Set the entry and exit fade to 300ms and the layout travel limit to 180px. Capture at 0, 0.6, and 1.2 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 시간별 네트워크 변화를 `.hero`에 적용해. / Apply Temporal Network Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1.2초 구간, 출입 페이드 300ms, 배치 이동 제한 180px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Observable @d3](https://observablehq.com/@d3/temporal-force-directed-graph) (unknown) · [d3/d3-force](https://d3js.org/d3-force/simulation) (ISC)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
