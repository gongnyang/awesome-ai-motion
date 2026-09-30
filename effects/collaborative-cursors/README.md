# Nº 327 협업 커서 · Collaborative Cursors

> 클립 렌더 예정 / Clip rendering planned.

**서로 다른 이름의 커서들이 한 화면에서 독립 경로로 움직이고 작업한다.**

Named cursors follow independent paths and perform coordinated actions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 순서·흐름 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: Multi Cursor, 다중 커서 안무, multi-cursor-choreography

## 선택 기준 / Selection

여러 사람이 동시에 작업하는 존재감을 보여준다. / Makes simultaneous participation and division of work visible.

- 공동 편집 기능을 소개할 때 / Introduce shared editing.
- 여러 담당자의 작업 분담을 보여줄 때 / Show how collaborators divide tasks.

좋은 예 / Good: 이름표가 붙은 커서 3개가 다른 카드에 도착해 차례로 선택한다
나쁜 예 / Bad: 모든 커서가 같은 경로로 겹쳐 협업 대상이 가려진다
주의 / Avoid: 이름표를 다른 커서 경로 위에 겹치지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 커서 수 | 3 | 2~5 | 이름표를 구별할 수 있는 수 |
| 경로 시간 | 4000ms | 2500~6000ms | 각 경로의 길이 |
| 행동 시간차 | 300ms | 150~500ms | 조작 순서를 구분 |
| 이동 거리 | 360px | 200~600px | 1920x1080 기준 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const routes = [[360,120],[-280,240],[180,-160]];
routes.forEach(([x,y],i) => {
  tl.to(`.cursor-${i}`, {x,y,duration:4,ease:'power2.inOut'}, i*0.3);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 협업 커서을 적용한다. 커서 3개의 경로를 고정 좌표로 정의하고 각 행동 시작을 300ms씩 늦춘다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 협업 커서 장면에 적용한다. 커서 3개의 경로를 고정 좌표로 정의하고 각 행동 시작을 300ms씩 늦춘다. 1.15초·2.99초·4.80초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Collaborative Cursors to <target> in <file>. Define fixed paths for three cursors and offset their actions by 300ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Collaborative Cursors in the scene for <target> in <file>. Define fixed paths for three cursors and offset their actions by 300ms. Capture at 1.15s, 2.99s, 4.80s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 협업 커서를 `.hero`에 적용해. / Apply Collaborative Cursors to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 협업 커서의 초기 상태와 종료 상태를 함께 기록하고 4.60초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 협업 커서 대상 선택자와 커서 수 3, 경로 시간 4000ms, 행동 시간차 300ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 4.60초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/multiplayer-cursors/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/multi-cursor-choreography.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
