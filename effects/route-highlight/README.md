# Nº 406 경로 순차 강조 · Route Highlight

> 클립 렌더 예정 / Clip rendering planned.

**경로의 노드와 연결선이 출발부터 도착까지 차례로 밝아지고 나머지는 옅어지는 강조**

Nodes and links along a route light up in order from start to finish while the rest fades.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 순서·흐름, 설명 | 설명 영상, 데이터 스토리, 발표 | svg |

다른 이름 / Also known as: Highlighted route traversal, 흐름 경로 순차 강조

## 선택 기준 / Selection

복잡한 네트워크 안에서 하나의 흐름만 따라가게 한다 / Follows a single flow through a complex network.

- 고객 여정·자금 흐름처럼 하나의 경로를 추적할 때 / When tracing one path such as a customer journey or money flow
- 선후 관계 그래프에서 선택한 선수 연결을 보여 줄 때 / When showing a chosen prerequisite chain in a dependency graph

좋은 예 / Good: 경로 노드 5개가 0.35초 간격으로 차례로 진해지고 연결선 3px이 이어지며 나머지는 opacity 0.15로 내려간다
나쁜 예 / Bad: 경로 전체가 한 번에 밝아져 순서를 알 수 없거나, 비선택 요소가 0.5 이상이라 배경이 시끄럽다
주의 / Avoid: 비선택 opacity 0.1~0.25 · 노드 수 8개 초과 경로는 구간으로 나눈다 · 도착 노드에서 0.5초 유지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 노드당 간격 | 0.35s | 0.25~0.5s | 다음 노드까지 |
| 비선택 opacity | 0.15 | 0.1~0.25 | 배경 감쇠 |
| 강조선 두께 | 3px | 2~5px | 1920x1080 기준 |
| 이징 | power2.out | none~power2.out | 선 그리기는 none |

## 구현 / Implementation (GSAP)

```js
tl.to('.node:not(.on), .edge:not(.on)', { opacity: 0.15, duration: 0.3 }, 0.2);
route.forEach((id, i) => {
  tl.to('#n' + id, { opacity: 1, scale: 1.15, duration: 0.25, ease: 'power2.out' }, 0.5 + i * 0.35);
  if (i) tl.fromTo('#e' + route[i - 1] + '-' + id, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.3, ease: 'none' }, 0.35 + i * 0.35);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 그래프에서 경로 <경로 ID 배열>만 순서대로 밝혀줘. 0.2초에 나머지 노드와 선을 opacity 0.15로 내리고, 0.5초부터 0.35초 간격으로 노드를 opacity 1, scale 1.15로 키우며 사이 연결선을 strokeDashoffset 1에서 0으로 0.3초 그려. 선 두께 3px. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 route-highlight를 적용해. 비선택 요소 opacity 0.15(0.3s, position 0.2), route.forEach로 노드 tween 0.25s(position 0.5+i*0.35), 연결선 strokeDashoffset 1→0 0.3s(position 0.35+i*0.35). 각 선 path에 pathLength=1을 둔다. 0.4초·1.2초·2.5초를 캡처해 밝은 구간이 출발에서 도착으로 늘어나는지 확인해.
```

### English · Claude Code
```text
Light up only the route <route ID array> in the <target> graph with GSAP. At 0.2s fade other nodes and links to opacity 0.15. From 0.5s, every 0.35s raise a node to opacity 1 and scale 1.15 and draw the link before it with strokeDashoffset 1 to 0 over 0.3s. Line width 3px. Put it on a paused timeline.
```

### English · Codex
```text
Apply route-highlight to <target> in <file>. Dim non-route items to 0.15 (0.3s, position 0.2). In route.forEach tween nodes over 0.25s at position 0.5 + i*0.35 and links strokeDashoffset 1 to 0 over 0.3s at 0.35 + i*0.35, with pathLength=1 on each line. Capture at 0.4s, 1.2s and 2.5s to check the lit segment grows from start to end.
```

예시 / Example: 경로 순차 강조를 `.hero`에 적용해. / Apply Route Highlight to `.hero`.

## 적용 / Application

- HyperFrames: path에 pathLength=1과 dashoffset을 쓰면 플러그인 없이 그려진다. 경로 배열을 고정해 seek 결과가 일정하다
- ReelForge: 브리프에 경로 ID 배열, 노드 간격, 비선택 opacity를 싣는다
- Scrolline Deck: scrub에서는 노드 인덱스를 진행률 i/(n-1)에 매핑하고 선 그리기는 linear, 노드 강조는 ease-out

조합 / Pair with: [패스 하이라이트 · Path Highlight](../path-highlight/) · [선 그리기 · Line Draw](../line-draw/) · [점선 흐름 · Dashed Flow](../dashed-flow/)

출처 / Sources: [d3/d3-sankey](https://github.com/d3/d3-sankey) (BSD-3-Clause) · [the-pudding/sankey-nba](https://github.com/the-pudding/sankey-nba) (MIT) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
