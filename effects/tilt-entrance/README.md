# Nº 057 틸트 등장 · Tilt Entrance

> 클립 렌더 예정 / Clip rendering planned.

**요소가 비스듬한 평면에서 들어오며 기울기와 비틀림을 풀어 정렬된다.**

An element arrives at an angle and removes its rotation and skew as it aligns.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 기울기 복원 등장

## 선택 기준 / Selection

역동적인 요소가 정돈되는 느낌을 준다. / Makes energetic movement feel organized at the end.

- 포스터 카드를 정렬시킬 때 / Align a tilted poster card.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 기울어진 포스터가 올라오며 수평으로 정돈된다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 읽는 동안 기울기를 유지하지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 650ms | 454~909ms | 한 번의 동작 기준 |
| 시작 회전 | 30deg | 10~30deg | 중앙 기준 |
| 시작 비틀림 | 15deg | 5~15deg | 가로 skew |
| 세로 이동 | 80px | 40~120px | 1920x1080 기준 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 650ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{transform:translateY(80px) rotate(30deg) skewX(15deg);opacity:0} to{transform:translateY(0) rotate(0) skewX(0);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 틸트 등장을 적용해. 지속 650ms, 시작 회전 30deg, 시작 비틀림 15deg, 세로 이동 80px, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 틸트 등장 키프레임을 추가해. 지속 650ms, 시작 회전 30deg, 시작 비틀림 15deg, 세로 이동 80px, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.325초·0.65초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Tilt Entrance to <target> in <file>. Implement the provided keyframes with 650ms duration, initial rotation 30deg, initial skew 15deg, vertical travel 80px, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Tilt Entrance keyframes to the styles for <target> in <file> using 650ms duration, initial rotation 30deg, initial skew 15deg, vertical travel 80px, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.325, and 0.65 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 틸트 등장를 `.hero`에 적용해. / Apply Tilt Entrance to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.65초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 틸트 등장의 지속 650ms, 시작 회전 30deg, 시작 비틀림 15deg, 세로 이동 80px, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.65초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
