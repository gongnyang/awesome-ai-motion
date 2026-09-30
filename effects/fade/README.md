# Nº 039 페이드 · Fade

> 클립 렌더 예정 / Clip rendering planned.

**요소가 제자리에 머문 채 투명도만 바뀌어 나타나거나 사라진다.**

An element appears or disappears through opacity alone.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 기본 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Fade In and Out, 페이드 등장과 퇴장, Opacity Reveal, Dissolve In, Fade visibility transition, FadeIn, FadeOut, FadeInFromPoint

## 선택 기준 / Selection

조용한 시작과 종료를 알린다. / Creates a quiet beginning or ending.

- 본문을 조용히 보여 줄 때 / Reveal body text quietly.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 설명 문장이 위치 변화 없이 600ms 동안 나타난다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 같은 위치의 두 문장이 오래 겹치지 않게 한다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 600ms | 420~840ms | 한 번의 동작 기준 |
| 시작 불투명도 | 0 | 0~0.3 | 등장 시작 |
| 끝 불투명도 | 1 | 0.8~1 | 읽을 수 있는 최종 상태 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{opacity:0} to{opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 페이드을 적용해. 지속 600ms, 시작 불투명도 0, 끝 불투명도 1, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 페이드 키프레임을 추가해. 지속 600ms, 시작 불투명도 0, 끝 불투명도 1, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.3초·0.6초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Fade to <target> in <file>. Implement the provided keyframes with 600ms duration, initial opacity 0, final opacity 1, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Fade keyframes to the styles for <target> in <file> using 600ms duration, initial opacity 0, final opacity 1, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.3, and 0.6 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 페이드를 `.hero`에 적용해. / Apply Fade to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.6초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 페이드의 지속 600ms, 시작 불투명도 0, 끝 불투명도 1, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.6초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [슬라이드 · Slide](../slide/) · [마스크 리빌 · Mask Reveal](../mask-reveal/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [michalsnik/aos](https://github.com/michalsnik/aos) (MIT) · [foundation/motion-ui](https://github.com/foundation/motion-ui) (MIT) · [jamiebuilds/tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) (MIT) · [pixel-point/animate-text](https://github.com/pixel-point/animate-text) (unknown) · [jschr/textillate](https://github.com/jschr/textillate) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
