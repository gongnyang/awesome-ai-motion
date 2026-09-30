# Nº 052 회전 등장 · Rotate Reveal

> 클립 렌더 예정 / Clip rendering planned.

**요소가 평면에서 회전하며 나타나거나 회전하며 사라진다.**

An element rotates in the plane while appearing or disappearing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Rotate In and Out, 회전 등장과 퇴장, Spin Reveal

## 선택 기준 / Selection

장면에 방향감과 역동성을 더한다. / Adds direction and energy to a reveal.

- 배지 방향을 강조할 때 / Give a badge a directional reveal.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 작은 배지가 반시계 방향에서 정면으로 돌아 나타난다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 긴 문장에는 큰 회전을 피한다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 600ms | 420~840ms | 한 번의 동작 기준 |
| 시작 회전 | -90deg | -90~90deg | 평면 회전 |
| 기준점 | 50% 50% | 중앙 또는 모서리 | 회전 경로 확보 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{transform:rotate(-90deg);opacity:0} to{transform:rotate(0);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 회전 등장을 적용해. 지속 600ms, 시작 회전 -90deg, 기준점 50% 50%, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 회전 등장 키프레임을 추가해. 지속 600ms, 시작 회전 -90deg, 기준점 50% 50%, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.3초·0.6초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Rotate Reveal to <target> in <file>. Implement the provided keyframes with 600ms duration, initial rotation -90deg, pivot 50% 50%, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Rotate Reveal keyframes to the styles for <target> in <file> using 600ms duration, initial rotation -90deg, pivot 50% 50%, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.3, and 0.6 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 회전 등장를 `.hero`에 적용해. / Apply Rotate Reveal to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.6초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 회전 등장의 지속 600ms, 시작 회전 -90deg, 기준점 50% 50%, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.6초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [jamiebuilds/tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
