# Nº 084 스윙 · Swing

> 클립 렌더 예정 / Clip rendering planned.

**고정된 축에 매달린 요소가 좌우로 회전하다 진폭이 줄며 제자리로 돌아온다**

An element hung from a fixed pivot rotates side to side, shrinking in amplitude until it rests.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 강조, 피드백 | 웹 UI, 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Corner Swing, 모서리 피벗 스윙, anchor-corner-swing, Pendulum Decay, 진자 감쇠, pendulum-decay-swing, Swing Attention, 매달린 흔들기

## 선택 기준 / Selection

카드가 걸려 있거나 힘을 받은 듯한 물성을 느끼게 한다. 진자의 감쇠로 자연스러운 멈춤을 만든다 / Gives cards a hanging, force-driven physicality. Pendulum damping produces a natural stop.

- 걸린 카드나 간판이 등장한 뒤 자연스럽게 흔들려 자리 잡을 때 / A hanging card or sign settles with a gentle sway after entering.
- 알림이나 변경을 흔들림으로 알릴 때 / Signal a notification or change with a swing.

좋은 예 / Good: 좌상단 피벗의 카드가 6도에서 시작해 550ms 동안 -3.6도, 2도, 0으로 진폭이 줄며 멈춘다
나쁜 예 / Bad: 진폭이 15도 이상이라 카드가 천장에 걸린 광고판처럼 흔들리고, 감쇠 없이 계속 왕복해 멈추지 않는다
주의 / Avoid: 초기 회전 10도 초과 금지 · 표나 긴 문단 본문에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 초기 회전 | 6도 | 4~10도 | 첫 진폭 |
| 총 길이 | 550ms | 400~800ms | 감쇠 후 정지 |
| 피벗 | 좌상 | transformOrigin | top left 또는 top center |
| 감쇠 비 | 0.6 | 0.5~0.7 | 다음 진폭 = 이전 x 감쇠 비 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
gsap.set('.card', { transformOrigin: '0% 0%' });
tl.to('.card', { rotation: 6, duration: 0.12, ease: 'power2.out' }, 0.3)
  .to('.card', { rotation: -3.6, duration: 0.15, ease: 'power2.inOut' })
  .to('.card', { rotation: 2, duration: 0.15, ease: 'power2.inOut' })
  .to('.card', { rotation: 0, duration: 0.13, ease: 'power2.out' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 카드에 스윙을 넣어줘. transformOrigin은 좌상단, 6도에서 -3.6도, 2도, 0도 순으로 진폭이 줄게 하고 총 0.55초, 각 구간은 power2.inOut, 마지막은 power2.out이야. 시작은 등장 완료 직후 0.3초에 걸어줘.
```

### 한국어 · Codex
```text
<파일>의 카드에 swing을 적용해. 피벗 top left, rotation 6 → -3.6 → 2 → 0, 구간 duration 0.12, 0.15, 0.15, 0.13초, ease power2.inOut(마지막 power2.out). 0.42초, 0.57초, 0.72초, 0.85초 시점을 캡처해 각도 부호가 번갈아 바뀌고 진폭이 줄어드는지 확인해.
```

### English · Claude Code
```text
Add a swing to the card in <target>. Set transformOrigin to top left and step rotation 6, -3.6, 2, 0 degrees over 0.55 seconds, each segment power2.inOut and the last power2.out. Start at 0.3 seconds right after the entrance finishes.
```

### English · Codex
```text
Apply swing to the card in <file>: pivot top left, rotation 6 to -3.6 to 2 to 0, segment durations 0.12, 0.15, 0.15, 0.13s, ease power2.inOut (last power2.out). Capture at 0.42s, 0.57s, 0.72s and 0.85s and verify the angle sign alternates and the amplitude shrinks.
```

예시 / Example: 스윙를 `.hero`에 적용해. / Apply Swing to `.hero`.

## 적용 / Application

- HyperFrames: transformOrigin을 set으로 미리 지정하고 감쇠 진폭을 순차 tween으로 쌓는다. paused 타임라인에서 seek해도 각도가 같다
- ReelForge: 오브젝트 씬 브리프에 피벗 위치, 초기 회전, 감쇠 비, 총 길이를 파라미터로 싣는다
- Scrolline Deck: 스프링 대신 감쇠 tween 순서를 진행률 4구간으로 나눈다. scrub 중에는 2회 왕복만 남기고 ease-out을 쓴다

조합 / Pair with: [팔로스루 · Follow-through](../follow-through/) · [셰이크 · Shake](../shake/) · [워블 · Wobble](../wobble/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#anchor-corner-swing`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#pendulum-decay-swing`) (Apache-2.0) · [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#tilt-card`) (MIT) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [jschr/textillate](https://github.com/jschr/textillate) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
