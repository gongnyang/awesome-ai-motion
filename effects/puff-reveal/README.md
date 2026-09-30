# Nº 050 퍼프 리빌 · Puff Reveal

> 클립 렌더 예정 / Clip rendering planned.

**확대되고 흐린 요소가 줄어들며 선명해지거나 확대되며 흐려져 사라진다.**

An enlarged blurred element shrinks into focus, or expands and blurs away.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 흐림 확대 리빌, Blur Scale Reveal, Vanish, 압축 흐림 소멸

## 선택 기준 / Selection

공기처럼 부드러운 생성과 소멸을 표현한다. / Creates a soft appearance or disappearance.

- 이미지나 로고를 부드럽게 공개할 때 / Reveal an image or logo softly.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 로고가 확대된 흐림 상태에서 제 크기로 선명해진다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 전체 화면의 큰 blur 레이어는 피한다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 700ms | 489~979ms | 한 번의 동작 기준 |
| 시작 축척 | 2 | 1.2~2 | 중앙 기준 |
| 시작 흐림 | 12px | 4~16px | 최종 0px |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 700ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{transform:scale(2);filter:blur(12px);opacity:0} to{transform:scale(1);filter:blur(0);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 퍼프 리빌을 적용해. 지속 700ms, 시작 축척 2, 시작 흐림 12px, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 퍼프 리빌 키프레임을 추가해. 지속 700ms, 시작 축척 2, 시작 흐림 12px, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.35초·0.7초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Puff Reveal to <target> in <file>. Implement the provided keyframes with 700ms duration, initial scale 2, initial blur 12px, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Puff Reveal keyframes to the styles for <target> in <file> using 700ms duration, initial scale 2, initial blur 12px, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.35, and 0.7 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 퍼프 리빌를 `.hero`에 적용해. / Apply Puff Reveal to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.7초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 퍼프 리빌의 지속 700ms, 시작 축척 2, 시작 흐림 12px, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.7초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [miniMAC/magic](https://github.com/miniMAC/magic) (MIT) · [magicuidesign/magicui](https://magicui.design/docs/components/blur-fade) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
