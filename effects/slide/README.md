# Nº 054 슬라이드 · Slide

> 클립 렌더 예정 / Clip rendering planned.

**요소가 화면 가장자리 또는 일정 거리 밖에서 들어오거나 빠져나간다.**

An element slides in from an edge or moves out of view.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 기본 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Slide In and Out, 슬라이드 등장과 퇴장, Text Group Slide, 텍스트 묶음 슬라이드, Line-by-Line Slide, Short Slide Right, Short Slide Down

## 선택 기준 / Selection

요소의 출처와 이동 방향을 알려 준다. / Makes the origin and direction of movement clear.

- 옆 패널의 출처를 보여 줄 때 / Show where a side panel comes from.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 안내 패널이 자신의 너비만큼 왼쪽에서 들어온다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 이동 경로에 본문을 두지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 600ms | 420~840ms | 한 번의 동작 기준 |
| 이동 거리 | 100% | 48px~100% | 요소 너비 기준 |
| 방향 | 왼쪽 | 상하좌우 | 부모 overflow hidden |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{transform:translateX(-100%)} to{transform:translateX(0)}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 슬라이드을 적용해. 지속 600ms, 이동 거리 100%, 방향 왼쪽, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 슬라이드 키프레임을 추가해. 지속 600ms, 이동 거리 100%, 방향 왼쪽, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.3초·0.6초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Slide to <target> in <file>. Implement the provided keyframes with 600ms duration, travel distance 100%, direction left, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Slide keyframes to the styles for <target> in <file> using 600ms duration, travel distance 100%, direction left, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.3, and 0.6 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 슬라이드를 `.hero`에 적용해. / Apply Slide to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.6초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 슬라이드의 지속 600ms, 이동 거리 100%, 방향 왼쪽, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.6초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [miniMAC/magic](https://github.com/miniMAC/magic) (MIT) · [michalsnik/aos](https://github.com/michalsnik/aos) (MIT) · [foundation/motion-ui](https://github.com/foundation/motion-ui) (MIT) · [pixel-point/animate-text](https://github.com/pixel-point/animate-text) (unknown) · [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
