# Nº 290 생키 흐름 재배치 · Sankey Reflow

> 클립 렌더 예정 / Clip rendering planned.

**흐름량이 바뀌면 리본 두께와 노드 높이가 변하고 연결 끝점이 함께 이동한다.**

Ribbon widths, node heights, and connected endpoints change together as flow values update.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Sankey value and node reflow, 생키 수치와 노드 재배치

## 선택 기준 / Selection

흐름량 변화와 전체 분배의 변화를 함께 읽는다. / Shows changes in flow volume and overall allocation together.

- 흐름량 변화와 전체 분배의 변화를 함께 읽는다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain sankey reflow while preserving item identities and chart scales.
- 같은 노드 ID를 유지하며 분기 유량에 맞춰 리본 폭과 노드 높이를 바꾼다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 같은 노드 ID를 유지하며 분기 유량에 맞춰 리본 폭과 노드 높이를 바꾼다.
나쁜 예 / Bad: 노드만 이동하고 연결 끝점은 뒤늦게 갱신한다.
주의 / Avoid: 노드만 이동하고 연결 끝점은 뒤늦게 갱신한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1s | 0.75~1.5s | 시점 또는 전환 한 회 기준 |
| 노드 폭 | 24px | 16~32px | 전후 같은 폭 |
| 노드 간격 | 8px | 6~16px | 연결 끝점도 함께 보간 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {p:0};
const matched = matchSankeyById(before,after);
tl.to(s,{p:1,duration:1,ease:'power2.inOut',onUpdate:()=>{
  renderSankeyInterpolated(matched,s.p,24,8);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 생키 흐름 재배치을 적용해줘. 전후 노드 경계와 리본 제어점을 ID로 대응해 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 노드 폭 24px; 노드 간격 8px; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 같은 노드 ID를 유지하며 분기 유량에 맞춰 리본 폭과 노드 높이를 바꾼다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 생키 흐름 재배치을 적용해. 전후 노드 경계와 리본 제어점을 ID로 대응해 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 노드 폭 24px; 노드 간격 8px; 이징 power2.inOut를 사용해. 0.25초, 0.5초, 1초 시점을 캡처해 흐름량이 바뀌면 리본 두께와 노드 높이가 변하고 연결 끝점이 함께 이동한다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Sankey Reflow to <target>. Use a 1s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Ribbon widths, node heights, and connected endpoints change together as flow values update.
```

### English · Codex
```text
Apply Sankey Reflow in the chart update section of <file>. Use the card parameter defaults, a 1s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.25s, 0.5s, and 1s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 생키 흐름 재배치를 `.hero`에 적용해. / Apply Sankey Reflow to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 전후 노드 경계와 리본 제어점을 ID로 대응해 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1s; 노드 폭 24px; 노드 간격 8px; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 같은 노드 ID를 유지하며 분기 유량에 맞춰 리본 폭과 노드 높이를 바꾼다.
- Scrolline Deck: 진행률 0~1을 1초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [d3/d3-sankey](https://github.com/d3/d3-sankey) (BSD-3-Clause) · [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
