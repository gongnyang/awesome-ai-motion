# Nº 060 즉시 등장 · Hard Appearance

> 클립 렌더 예정 / Clip rendering planned.

**정해진 순간에 요소가 중간 과정 없이 화면에 나타난다.**

An element appears instantly at a defined moment.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 설명, 강조 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: Hard appearance cut, 즉시 나타나기, Add

## 선택 기준 / Selection

컷의 순간을 분명히 하고 즉시 새 정보를 제시한다. / Makes a cut explicit and presents information immediately.

- 컷에 맞춰 정보를 즉시 제시할 때 / Present information exactly on a cut.
- 연속 동작 없이 상태를 바꿀 때 / Change state without an animated transition.

좋은 예 / Good: 0.4초 컷 순간에 결론 카드를 바로 켜고 0.8초 유지한다.
나쁜 예 / Bad: 긴 설명 중 새 요소를 예고 없이 계속 켜 주의가 분산된다.
주의 / Avoid: 같은 장면의 여러 대상에 동시에 적용하지 않는다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 지속 | 0ms | 0ms | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 유지 | 800ms | 500~1500ms | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 등장 시점 | 400ms | 0~2000ms | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 최종 불투명도 | 1 | 1 | 1920x1080 기준. 장면 시작을 0초로 둔다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
tl.set('.item', { autoAlpha: 0 }, 0);
tl.set('.item', { autoAlpha: 1 }, 0.4);
tl.to({}, { duration: 0.8 }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 즉시 등장을 구현해. 전환 지속 0ms, 유지 800ms, 등장 시점 400ms, 최종 불투명도 1, 이징 none을 적용해. 타임라인의 지정 시점에 visibility를 바꾼다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 즉시 등장 장면 레이어에 적용해. 전환 지속 0ms, 유지 800ms, 등장 시점 400ms, 최종 불투명도 1, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Hard Appearance on <target>. Use transition duration 0ms; hold duration 800ms; appearance time 400ms; final opacity 1; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Hard Appearance to the scene layer in <file>. Use transition duration 0ms; hold duration 800ms; appearance time 400ms; final opacity 1 and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 즉시 등장를 `.hero`에 적용해. / Apply Hard Appearance to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 즉시 등장의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 전환 지속 0ms, 유지 800ms, 등장 시점 400ms, 최종 불투명도 1을 싣고 gsap 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 0ms 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [하드컷 · Hard Cut](../hard-cut/) · [단어 강조 · Word Emphasis](../word-emphasis/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/animation.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
