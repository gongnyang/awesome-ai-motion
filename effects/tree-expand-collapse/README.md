# Nº 300 트리 펼침과 접힘 · Tree Expand and Collapse

> 클립 렌더 예정 / Clip rendering planned.

**부모 노드에서 자식 노드와 연결선이 퍼져 나오거나 부모 위치로 접혀 사라진다.**

Children and links unfold from a parent or collapse back into it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Collapsible tree expansion, 트리 가지 펼침과 접힘

## 선택 기준 / Selection

상하위 구조와 포함 관계를 이해한다. / Makes hierarchy and containment easy to follow.

- 조직도의 하위 부서를 공개할 때 / Use when explaining tree expand and collapse in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 계층 공개 장면에서 부모 노드에서 자식 노드와 연결선이 퍼져 나오거나 부모 위치로 접혀 사라진다. 0.65s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 자식이 부모와 무관한 화면 가장자리에서 나온다
주의 / Avoid: 자식이 부모와 무관한 화면 가장자리에서 나온다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.65s | 0.455~0.975s | 후보의 주요 이동 또는 유지 시간이다 |
| 깊이 간격 | 120px | 80~180px | 부모와 자식 사이의 거리다 |
| 출입 페이드 | 250ms | 150~350ms | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
children.forEach(n => {
  tl.fromTo(n.el, {attr: {cx: parent.x, cy: parent.y}, opacity: 0},
    {attr: {cx: n.x, cy: n.y}, opacity: 1, duration: .65, ease: 'power2.inOut'}, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 트리 펼침과 접힘 효과를 적용해. 노드의 이전 부모 좌표와 목표 트리 좌표를 보간하고 연결선 끝점을 갱신한다. 기본 구간은 0.65초, 깊이 간격은 120px, 출입 페이드은 250ms, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 트리 펼침과 접힘 장면에 적용해. 노드의 이전 부모 좌표와 목표 트리 좌표를 보간하고 연결선 끝점을 갱신한다. 0.65초 구간과 power2.inOut, 깊이 간격 120px, 출입 페이드 250ms를 적용하고 초기 상태를 명시해. 0초, 0.325초, 0.65초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Tree Expand and Collapse to <target>. Children and links unfold from a parent or collapse back into it. Use a 0.65-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the depth spacing to 120px and the entry and exit fade to 250ms. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Tree Expand and Collapse in the relevant scene in <file>. Children and links unfold from a parent or collapse back into it. Use a 0.65-second primary interval with power2.inOut easing and explicit initial states. Set the depth spacing to 120px and the entry and exit fade to 250ms. Capture at 0, 0.325, and 0.65 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 트리 펼침과 접힘를 `.hero`에 적용해. / Apply Tree Expand and Collapse to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.65초 구간, 깊이 간격 120px, 출입 페이드 250ms와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Observable @d3](https://observablehq.com/@d3/collapsible-tree) (unknown) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [the-pudding/sankey-nba](https://github.com/the-pudding/sankey-nba) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
