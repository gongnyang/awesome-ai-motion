# Nº 168 이전 장면 유지 전환 · Held Scene Overlap

> 클립 렌더 예정 / Clip rendering planned.

**다음 장면이 시작되는 동안 이전 장면의 움직임을 잠시 유지하고 지연 구간 끝에서 새 장면을 공개한다**

While the next scene starts, the previous scene's motion is held briefly, and the new scene is revealed at the end of the delay.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 순서·흐름 | 설명 영상, 발표, 제품 시연 | gsap |

다른 이름 / Also known as: 장면 유지 겹침

## 선택 기준 / Selection

다음 장면이 시작되는 동안 이전 장면의 움직임을 잠시 붙잡아 동작의 마무리와 장면 교체를 따로 조절한다 / Lets the end of an action and the scene change be timed independently.

- 이전 장면의 마지막 동작이 끝나기 전에 다음 장면이 시작되는 겹침을 만들 때 / When the next scene starts before the previous scene's final motion has finished
- 대사나 소리는 다음 장면인데 화면은 이전 장면이 잠깐 남아 있어야 할 때 / When dialogue or sound belongs to the next scene but the picture should linger

좋은 예 / Good: 이전 장면의 마지막 동작이 0.6초 더 이어지는 동안 다음 장면의 소리가 먼저 시작되고, 0.6초 뒤 화면이 바뀐다
나쁜 예 / Bad: 유지 구간이 1초를 넘어 화면과 소리가 어긋난 것처럼 보이거나, 이전 장면 동작이 멈춰 화면이 굳는다
주의 / Avoid: 유지는 0.4~0.8초로 한다 · 유지 동안에도 이전 장면 동작은 계속 진행한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이전 장면 유지 | 600ms | 400~800ms | 컷을 늦춤 |
| 공개 컷 | 0ms | 고정 | 즉시 |
| 소리 선행 | 600ms | 400~800ms | 다음 장면 소리 |
| 이전 장면 시계 | 독립 진행 |  | 두 장면 시계 분리 |
| 다음 장면 시작 | 컷 시각 |  | 컷 시각에 정렬 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tPrev = gsap.timeline(), tNext = gsap.timeline();
tPrev.to('.ball', { x: 900, duration: 1.8, ease: 'power2.out' }, 0);
tl.add(tPrev, 0).add(tNext, 1.2);            // 다음 장면 시계는 1.2초에 시작
tl.set('.prev', { autoAlpha: 0 }, 1.8).set('.next', { autoAlpha: 1 }, 1.8);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 이전 장면 유지 전환을 넣어줘. 이전 장면 타임라인은 1.8초까지 계속 진행하고, 다음 장면 타임라인은 1.2초에 시작해서 소리가 먼저 나오게 해. 화면 교체는 1.8초에 tl.set으로 즉시. 두 장면은 각각 자식 타임라인으로 만들어 tl.add로 붙이고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 이전 장면 유지 전환을 구현해. tPrev는 .ball x 0에서 900을 1.8초 power2.out, tNext는 tl.add(tNext, 1.2), 1.8초에 .prev 숨김 및 .next 표시. 1.0초, 1.5초, 1.9초 시점을 캡처해 1.5초에 이전 장면 동작이 아직 진행 중인지, 1.9초에 다음 장면만 보이는지 확인해.
```

### English · Claude Code
```text
Add a Held Scene Overlap to <target>. Keep the previous scene's timeline running until 1.8s, start the next scene's timeline at 1.2s so its sound comes first, and swap visibility at 1.8s with tl.set. Build each scene as a child timeline attached with tl.add, seekable on a paused parent timeline.
```

### English · Codex
```text
Implement Held Scene Overlap in <file>. tPrev tweens .ball x 0 to 900 over 1.8s power2.out; tl.add(tNext, 1.2); at 1.8s hide .prev and show .next. Capture at 1.0s, 1.5s, and 1.9s to confirm the previous action is still in progress at 1.5s and only the next scene is visible at 1.9s.
```

예시 / Example: 이전 장면 유지 전환를 `.hero`에 적용해. / Apply Held Scene Overlap to `.hero`.

## 적용 / Application

- HyperFrames: 두 장면을 각각 자식 타임라인으로 만들어 tl.add로 붙이고, 가시성 교체 시각과 소리 시작 시각을 따로 지정한다. seek해도 자식 시계가 유지된다
- ReelForge: 씬 워커 브리프에 이전 장면 유지 600ms, 소리 선행 600ms, 컷 시각을 싣는다
- Scrolline Deck: scrub에서는 두 장면 진행률을 서로 다른 구간(prev 0~0.6, next 0.4~1)으로 매핑하고 0.6 근방에서 교체한다

조합 / Pair with: [동작 중첩 · Temporal Overlap](../temporal-overlap/) · [퇴장 후 등장 · Exit Before Enter](../exit-before-enter/) · [오버레이 브리지 · Overlay Bridge](../overlay-bridge/)

출처 / Sources: [motion-canvas/motion-canvas](https://motioncanvas.io/docs/transitions/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
