# Nº 040 플리커 리빌 · Flicker Reveal

> 클립 렌더 예정 / Clip rendering planned.

**요소가 불규칙하게 켜졌다 꺼졌다 하다가 완전히 나타나거나 사라진다.**

An element switches on and off at uneven intervals before becoming fully visible.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 깜박이며 나타나기, Text Opacity Flicker, 텍스트 점멸, Glyph Flicker Reveal, 글자 깜박임 등장

## 선택 기준 / Selection

전기 신호나 불안정한 연결을 표현한다. / Suggests an electrical signal or an unstable connection.

- 가상의 신호 연결을 보여 줄 때 / Represent a fictional signal connecting.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 작은 통신 아이콘이 고정된 여섯 번의 점멸 뒤 켜진다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 큰 면적의 점멸과 반복 재생을 피한다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1200ms | 840~1680ms | 한 번의 동작 기준 |
| 점멸 횟수 | 6회 | 2~6회 | 고정된 불규칙 시점 |
| 불투명도 | 0 또는 1 | 0~1 | 중간 보간 없음 |

이징 / Ease: `steps(1, end)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1200ms steps(1, end) both; }
@keyframes effect {
  0%,12%,31%,48%,63%,77%,89%{opacity:0} 8%,25%,43%,58%,72%,84%,100%{opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 플리커 리빌을 적용해. 지속 1200ms, 점멸 횟수 6회, 불투명도 0 또는 1, 이징 steps(1, end)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 플리커 리빌 키프레임을 추가해. 지속 1200ms, 점멸 횟수 6회, 불투명도 0 또는 1, 이징 steps(1, end)을 적용하고 0초·0.6초·1.2초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Flicker Reveal to <target> in <file>. Implement the provided keyframes with 1200ms duration, flickers 6, opacity 0 or 1, easing steps(1, end). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Flicker Reveal keyframes to the styles for <target> in <file> using 1200ms duration, flickers 6, opacity 0 or 1, easing steps(1, end). Capture at 0, 0.6, and 1.2 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 플리커 리빌를 `.hero`에 적용해. / Apply Flicker Reveal to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1.2초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 플리커 리빌의 지속 1200ms, 점멸 횟수 6회, 불투명도 0 또는 1, 이징 steps(1, end)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.2초 동작에 매핑한다. 점멸 시점은 고정 진행률 구간으로 유지한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) (MIT) · [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
