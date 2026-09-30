# Nº 157 퇴장 후 등장 · Exit Before Enter

> 클립 렌더 예정 / Clip rendering planned.

**이전 요소가 완전히 사라진 다음에야 새 요소가 나타나는 순차 교체**

The previous element fully disappears before the new one appears.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 웹 UI, 제품 시연, 설명 영상 | gsap |

## 선택 기준 / Selection

상태가 순서대로 바뀐다는 분명함. 두 요소가 겹쳐 흐트러지지 않는다 / A clear, sequential change of state, with no overlap to muddy the read.

- 같은 자리에서 카드, 문구, 탭 내용을 바꿀 때 / Change the content of a card, line of text, or tab in the same spot.
- 두 요소가 겹치면 읽기 어려운 텍스트 교체에서 / Replace text where overlapping elements would be hard to read.

좋은 예 / Good: 이전 문구가 0.25초 동안 위로 12px 빠지며 사라지고, 완전히 사라진 뒤 새 문구가 아래에서 12px 올라오며 0.4초 동안 나타난다
나쁜 예 / Bad: 퇴장이 끝나기 전에 등장이 시작되어 글자가 겹치거나, 퇴장에 0.8초 넘게 걸려 답답하다
주의 / Avoid: 퇴장이 끝나기 전에 등장을 시작하지 않는다 · 총 소요 0.8초 초과 금지(UI에서는 0.65초 이내)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 퇴장 | 0.25s | 0.15~0.35s | opacity와 y 이동 |
| 등장 | 0.4s | 0.25~0.55s | 퇴장보다 길게 |
| 이동 거리 | 12px | 8~24px | 방향은 일관되게 |
| 대기 | 0s | 0~0.08s | 퇴장과 등장 사이 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.to('.old', { opacity: 0, y: -12, duration: 0.25, ease: 'power2.in' })
  .set('.old', { display: 'none' })
  .fromTo('.new', { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<이전 요소>를 <새 요소>로 교체하는데 exit-before-enter로 해줘. 이전 요소는 0.25초 동안 opacity 0, y -12px (power2.in)로 빠지고 display none, 그 직후 새 요소가 opacity 0, y +12px에서 0.4초 동안 나타나게 해 (power2.out). 두 요소가 동시에 보이는 프레임이 없어야 하고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 텍스트 교체에 exit-before-enter를 적용해. .old opacity 0과 y -12px (0.25s, power2.in) 뒤 display none, .new opacity 0과 y 12px에서 원위치 (0.4s, power2.out)를 순서대로 붙인다. 0.25초 시점에 둘 다 안 보이는 프레임이 있는지, 0.2초와 0.3초에 두 요소가 동시에 보이지 않는지 캡처로 확인해.
```

### English · Claude Code
```text
Replace <oldElement> with <newElement> using exit-before-enter. The old element fades to opacity 0 and moves y -12px over 0.25 seconds (power2.in), then display none. Right after, the new element goes from opacity 0 and y +12px to rest over 0.4 seconds (power2.out). No frame should show both elements, and everything sits in one paused timeline.
```

### English · Codex
```text
Apply exit-before-enter to the text swap in <file>. Chain .old opacity 0 and y -12px (0.25s, power2.in) then display none, followed by .new from opacity 0 and y 12px to rest (0.4s, power2.out). Capture at 0.2 and 0.3 seconds to confirm both elements are never visible together, and check the gap frame at 0.25 seconds.
```

예시 / Example: 퇴장 후 등장를 `.hero`에 적용해. / Apply Exit Before Enter to `.hero`.

## 적용 / Application

- HyperFrames: 타임라인에서 퇴장 tween 다음에 등장 tween을 순서대로 붙인다(position을 생략). display 전환도 타임라인에 넣어 seek에서 남지 않게 한다
- ReelForge: 씬 워커 브리프에 exitMs, enterMs, gapMs, offsetPx를 노출한다. 텍스트 교체 비트에 반복 사용한다
- Scrolline Deck: 진행률 0~0.4 퇴장, 0.4~1 등장으로 분할한다. 겹침이 없어야 하므로 경계에서 opacity가 정확히 0이 되게 한다

조합 / Pair with: [크로스페이드 · Crossfade](../crossfade/) · [딥 투 컬러 · Dip to Color](../dip-to-color/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [motiondivision/motion](https://motion.dev/docs/react-animate-presence) (MIT) · [pmndrs/react-spring](https://www.react-spring.dev/docs/components/use-transition) (MIT) · [motion.dev examples](https://motion.dev/examples/react-animate-presence-modes) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
