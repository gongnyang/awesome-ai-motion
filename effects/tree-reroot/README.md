# Nº 301 트리 루트 재배치 · Tree Re-rooting

> 클립 렌더 예정 / Clip rendering planned.

**선택한 노드가 중심으로 이동하고 연결된 가지들이 새 방향과 위치로 펼쳐진다.**

A selected node becomes the root while connected branches move into a new layout.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Tree focus and re-rooting, 트리 초점과 루트 재배치

## 선택 기준 / Selection

같은 관계망을 다른 중심에서 이해한다. / Explains the same relationships from a different center.

- 관계도를 선택한 인물 중심으로 다시 볼 때 / Use when explaining tree re-rooting in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 방사 재루트 장면에서 선택한 노드가 중심으로 이동하고 연결된 가지들이 새 방향과 위치로 펼쳐진다. 0.9s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 새 루트마다 노드 ID와 색을 바꾼다
주의 / Avoid: 새 루트마다 노드 ID와 색을 바꾼다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.9s | 0.63~1.35s | 후보의 주요 이동 또는 유지 시간이다 |
| 중심 이동 제한 | 768px | 192~768px | 1920px 화면 폭의 40% 이내다 |
| 라벨 페이드 | 250ms | 150~350ms | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
nodes.forEach(n => {
  tl.to(n.el, {attr: {cx: n.nextX, cy: n.nextY},
    duration: .9, ease: 'power2.inOut'}, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 트리 루트 재배치 효과를 적용해. 노드 ID를 유지하고 새 루트의 목표 트리 좌표로 노드와 연결선을 보간한다. 기본 구간은 0.9초, 중심 이동 제한은 768px, 라벨 페이드은 250ms, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 트리 루트 재배치 장면에 적용해. 노드 ID를 유지하고 새 루트의 목표 트리 좌표로 노드와 연결선을 보간한다. 0.9초 구간과 power2.inOut, 중심 이동 제한 768px, 라벨 페이드 250ms를 적용하고 초기 상태를 명시해. 0초, 0.45초, 0.9초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Tree Re-rooting to <target>. A selected node becomes the root while connected branches move into a new layout. Use a 0.9-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the center travel limit to 768px and the label fade to 250ms. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Tree Re-rooting in the relevant scene in <file>. A selected node becomes the root while connected branches move into a new layout. Use a 0.9-second primary interval with power2.inOut easing and explicit initial states. Set the center travel limit to 768px and the label fade to 250ms. Capture at 0, 0.45, and 0.9 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 트리 루트 재배치를 `.hero`에 적용해. / Apply Tree Re-rooting to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.9초 구간, 중심 이동 제한 768px, 라벨 페이드 250ms와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [the-pudding/sankey-nba](https://github.com/the-pudding/sankey-nba) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
