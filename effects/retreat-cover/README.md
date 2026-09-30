# Nº 191 축소 후 덮기 · Retreat and Cover

> 클립 렌더 예정 / Clip rendering planned.

**이전 장면이 작아지고 어두워지는 동안 새 장면이 들어와 덮는 전환**

The previous scene shrinks and darkens while the new scene slides in and covers it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: 물러나며 덮기

## 선택 기준 / Selection

이전 장면이 뒤로 물러나고 새 주제가 앞으로 나오는 깊이감의 교체 / Depth: the old scene retreats as the new topic steps forward.

- 스택이나 레이어처럼 새 내용이 위에 쌓이는 이야기에서 / Tell a story where new content stacks on top like layers.
- 앞 장면을 기억하게 하면서 다음 장면으로 넘어갈 때 / Keep the previous scene in memory while moving on.

좋은 예 / Good: 뒤 장면이 0.7초 동안 scale 1에서 0.71로 줄고 brightness가 1에서 0.6이 되는 사이, 새 장면이 오른쪽에서 밀려 들어와 덮는다
나쁜 예 / Bad: 뒤 장면이 너무 작아져 여백이 크게 드러나거나, 새 장면이 속도 차 없이 같은 속도로 들어와 깊이가 없다
주의 / Avoid: 뒤 장면 scale 0.6 미만 금지 · 새 장면 이동은 뒤 장면의 이동 속도보다 빠르게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.0s | 동시 진행 |
| 뒤 장면 scale | 1→0.71 | 0.6~0.85 | 1920x1080 기준 |
| 밝기 | 1→0.6 | 0.4~0.8 | 어두워지며 물러남 |
| 새 장면 이동 | x 1920→0 | 방향 4가지 | linear에 가까운 power1 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.a', { scale: 0.71, filter: 'brightness(0.6)',
    duration: 0.7, ease: 'power1.inOut' }, 0)
  .fromTo('.b', { x: 1920 },
    { x: 0, duration: 0.7, ease: 'power1.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 리트릿 앤 커버 전환을 만들어줘. A는 0.7초 동안 scale 1에서 0.71, filter brightness 1에서 0.6으로 물러나고, B는 같은 시각에 x 1920px에서 0으로 밀려 들어와 A를 덮게 해. 이징 power1.inOut, B가 위 레이어이고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>에 retreat and cover를 적용해. .a scale 1에서 0.71과 brightness 0.6 (0.7s, power1.inOut), .b x 1920에서 0 (0.7s, power1.inOut), position 0에서 동시에 시작. 0.35초에 A가 약 0.85배로 줄어 있고 B가 화면 중간까지 왔는지, 0.7초에 B가 전체를 덮는지 캡처로 확인해.
```

### English · Claude Code
```text
Build a retreat-and-cover transition from <targetA> to <targetB>. Over 0.7 seconds A retreats from scale 1 to 0.71 and brightness 1 to 0.6, while B slides in from x 1920px to 0 at the same time and covers it. Use power1.inOut, B on top, and one paused timeline.
```

### English · Codex
```text
Apply retreat and cover in <file>. .a scale 1 to 0.71 with brightness 0.6 (0.7s, power1.inOut), .b x 1920 to 0 (0.7s, power1.inOut), both starting at position 0. Capture at 0.35 seconds to confirm A is around 0.85 scale and B is halfway across, and at 0.7 seconds to confirm B covers the frame.
```

예시 / Example: 축소 후 덮기를 `.hero`에 적용해. / Apply Retreat and Cover to `.hero`.

## 적용 / Application

- HyperFrames: 뒤 레이어 transform과 filter, 새 레이어 x를 같은 타임라인 position 0에서 시작한다. z-index를 미리 확정한다
- ReelForge: 씬 워커 브리프에 retreatScale, dimTo, direction, durationMs를 싣는다
- Scrolline Deck: 진행률 p 하나로 scale = 1 - 0.29p, x = 1920(1-p). 스프링 없이 ease-out 권장

조합 / Pair with: [푸시 전환 · Push](../push-transition/) · [줌 전환 · Zoom Through](../zoom-through/) · [스케일 스왑 · Scale Swap](../scale-swap/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/LeftRight.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TopBottom.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
