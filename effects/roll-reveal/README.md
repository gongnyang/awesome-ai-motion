# Nº 051 롤 등장 · Roll Reveal

> 클립 렌더 예정 / Clip rendering planned.

**요소가 옆으로 이동하면서 평면 회전해 굴러 들어오거나 나간다.**

An element rolls in or out through sideways movement and planar rotation.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Roll In and Out, 구르기 등장과 퇴장

## 선택 기준 / Selection

재미있는 이동과 방향을 전달한다. / Communicates playful movement and direction.

- 원형 아이콘을 장난스럽게 넣을 때 / Introduce a round icon playfully.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 원형 쿠폰 아이콘이 왼쪽에서 구르며 들어온다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 표나 긴 텍스트에는 쓰지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 700ms | 489~979ms | 한 번의 동작 기준 |
| 이동 거리 | 100% | 100px~100% | 요소 너비 기준 |
| 시작 회전 | -120deg | -180~-60deg | 이동과 동시 회전 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 700ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{transform:translateX(-100%) rotate(-120deg);opacity:0} to{transform:translateX(0) rotate(0);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 롤 등장을 적용해. 지속 700ms, 이동 거리 100%, 시작 회전 -120deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 롤 등장 키프레임을 추가해. 지속 700ms, 이동 거리 100%, 시작 회전 -120deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.35초·0.7초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Roll Reveal to <target> in <file>. Implement the provided keyframes with 700ms duration, travel distance 100%, initial rotation -120deg, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Roll Reveal keyframes to the styles for <target> in <file> using 700ms duration, travel distance 100%, initial rotation -120deg, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.35, and 0.7 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 롤 등장를 `.hero`에 적용해. / Apply Roll Reveal to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.7초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 롤 등장의 지속 700ms, 이동 거리 100%, 시작 회전 -120deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.7초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
