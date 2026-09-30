# Nº 206 이동 교차 페이드 · Translate Fade

> 클립 렌더 예정 / Clip rendering planned.

**이전 대상이 다음 위치로 이동하며 옅어지고 같은 이동 영역에서 새 대상이 선명해진다**

The old element moves off to the next position while fading, and the new one sharpens in the same travel zone.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 웹 UI, 발표, 설명 영상 | gsap |

다른 이름 / Also known as: Translate fade boundary, 이동 페이드 경계, Fade transform, 겹쳐 위치 맞추는 페이드 변환, FadeTransform, FadeTransformPieces

## 선택 기준 / Selection

이전 대상이 밀려 옅어지고 같은 자리에서 새 대상이 선명해진다. 부드러운 내용 교체다 / Combines lateral movement with a fading afterimage swap.

- 카드, 탭, 슬라이드 안의 내용을 옆으로 밀며 바꿀 때 / When swapping card, tab, or slide content by sliding sideways
- 텍스트나 숫자 블록을 다음 단계 내용으로 자연스럽게 교체할 때 / When replacing a text or number block with the next step naturally

좋은 예 / Good: 이전 요소가 왼쪽으로 화면 폭의 30%(576px)까지 밀리며 0.7초에 걸쳐 옅어지고, 새 요소가 오른쪽 같은 폭에서 들어와 선명해진다
나쁜 예 / Bad: 이동량이 작아 페이드와 구별이 안 되거나, 두 요소가 겹치는 구간에서 글자가 뒤섞여 읽히지 않는다
주의 / Avoid: 겹침 구간에서 두 텍스트가 동시에 읽히지 않게 opacity 교차 지점을 50% 이전으로 둔다 · 이동량은 화면 폭의 20~35%로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~900ms | power2.inOut |
| 이동량 | 화면 폭 30% | 20~35% | 576px |
| opacity | 1에서 0 / 0에서 1 |  | 겹침 중앙 교차 |
| 교차 시점 | 진행 40% | 30~50% | 텍스트가 겹쳐 읽히지 않게 |
| 방향 | 오른쪽에서 왼쪽 | 좌우 상하 | 읽기 방향 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.old', { x: -576, opacity: 0, duration: 0.7, ease: 'power2.inOut' }, 0);
tl.fromTo('.new', { x: 576, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power2.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 요소를 다음 내용으로 바꿀 때 이동 교차 페이드를 넣어줘. .old는 x를 -576px, opacity 0으로, .new는 x 576px, opacity 0에서 x 0, opacity 1로 0.7초 power2.inOut으로 동시에 진행해. 글자가 겹쳐 읽히지 않도록 opacity 교차점을 진행 40%로 맞추고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 전환부에 이동 교차 페이드를 구현해. .old x 0에서 -576, opacity 1에서 0, .new x 576에서 0, opacity 0에서 1, 둘 다 0.7초 power2.inOut 같은 시작. 0.28초, 0.35초, 0.7초 시점을 캡처해 두 요소가 동시에 선명하게 겹치는 구간이 없는지, 0.7초에 .old가 안 보이는지 확인해.
```

### English · Claude Code
```text
Apply a Translate Fade when swapping content in <target>. .old goes to x -576px and opacity 0; .new goes from x 576px, opacity 0 to x 0, opacity 1; both over 0.7s with power2.inOut, starting together. Set the opacity crossover around 40% progress so text does not overlap legibly, and keep it on one seekable paused timeline.
```

### English · Codex
```text
Implement Translate Fade in <file>. .old x 0 to -576 and opacity 1 to 0; .new x 576 to 0 and opacity 0 to 1; both 0.7s power2.inOut from the same start. Capture at 0.28s, 0.35s, and 0.7s to confirm there is no moment where both texts are sharp and overlapping and that .old is invisible at 0.7s.
```

예시 / Example: 이동 교차 페이드를 `.hero`에 적용해. / Apply Translate Fade to `.hero`.

## 적용 / Application

- HyperFrames: 두 요소를 같은 자리에 겹치고 x와 opacity만 보간한다. paused 타임라인 하나에서 시작 시각을 같게 하면 seek가 안전하다
- ReelForge: 씬 워커 브리프에 이동량 30%, 지속 700ms, 방향을 싣고 이전 요소는 화면 밖 이탈 전에 opacity 0이 되도록 명시한다
- Scrolline Deck: scrub에서는 이동량을 진행률에 선형으로 묶고 opacity는 진행률 0.4에서 교차하는 두 구간으로 나눈다

조합 / Pair with: [크로스페이드 · Crossfade](../crossfade/) · [푸시 전환 · Push](../push-transition/) · [페이드 슬라이드 · Fade Slide](../fade-slide/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/x_axis_translation.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
