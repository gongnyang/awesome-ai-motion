# Nº 132 클록 와이프 · Clock Wipe

> 클립 렌더 예정 / Clip rendering planned.

**중심에서 회전하는 부채꼴 경계가 다음 장면을 드러내는 와이프**

A rotating pie-shaped edge sweeps from the center and reveals the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 순서·흐름 | 설명 영상, 발표, 데이터 스토리 | svg |

다른 이름 / Also known as: 시계 와이프, Pinwheel wipe, 바람개비 와이프, Radial Wipe, 방사 와이프

## 선택 기준 / Selection

시간이 흐른다는 연상. 시계 바늘이 지나가며 다음 장면이 열린다 / The feeling of time passing, as if a clock hand is opening the next scene.

- 타임라인, 진행률, 시간 경과를 다룬 장면으로 넘어갈 때 / Move into a scene about timelines, progress, or elapsed time.
- 한 방향으로 도는 경계로 리듬감 있게 장면을 바꿀 때 / Change scenes with a single rhythmic sweep.

좋은 예 / Good: 12시 방향에서 시작한 경계가 0.8초 동안 시계 방향으로 한 바퀴 돌며 다음 장면을 드러낸다
나쁜 예 / Bad: 경계 속도가 들쭉날쭉하거나, 한 바퀴에 2초 이상 걸려 지루하다
주의 / Avoid: 이징은 linear를 기본으로 한다(가감속이 있으면 시계처럼 보이지 않는다) · 중심이 피사체와 겹치면 중심을 피사체 밖으로 옮긴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.5~1.2s | 한 바퀴 기준 |
| 시작 각도 | 0deg (12시) | 0~270deg | 시계 방향 |
| 중심 | 50% 50% | 임의 좌표 | 피사체 위 피함 |
| 날개 수 | 1 | 1~4 | 4는 핀휠 변형 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const s = { a: 0 };
tl.to(s, { a: 360, duration: 0.8, ease: 'none', onUpdate: () => {
  document.querySelector('.b').style.clipPath =
    `conic-gradient(from 0deg at 50% 50%, #000 ${s.a}deg, transparent 0)`; } });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A> 위에 <대상B>가 클록 와이프로 드러나게 해줘. 12시 방향에서 시작해 시계 방향으로 0.8초 동안 360도 돌고, 중심은 50% 50%, 이징은 none(linear). mask는 conic-gradient로 만들고 각도는 GSAP 상태 객체에서 읽어 paused 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 clock wipe를 적용해. 뒤 레이어에 conic-gradient mask를 걸고 각도를 0에서 360도로 0.8초, ease none으로 보간한다. 0.2초, 0.4초, 0.6초 시점을 캡처해 경계가 90도, 180도, 270도 근처인지 확인하고 0.8초에 뒤 장면이 전체 노출되는지 본다.
```

### English · Claude Code
```text
Reveal <targetB> over <targetA> with a clock wipe. Start at 12 o'clock and sweep clockwise 360 degrees over 0.8 seconds, center at 50% 50%, ease none (linear). Build the mask with conic-gradient, read the angle from a GSAP state object, and keep it in one paused timeline that supports seeking.
```

### English · Codex
```text
Apply a clock wipe in <file>. Put a conic-gradient mask on the incoming layer and tween the angle from 0 to 360 degrees over 0.8 seconds with ease none. Capture at 0.2, 0.4, and 0.6 seconds to check the edge sits near 90, 180, and 270 degrees, and at 0.8 seconds to confirm the new scene is fully shown.
```

예시 / Example: 클록 와이프를 `.hero`에 적용해. / Apply Clock Wipe to `.hero`.

## 적용 / Application

- HyperFrames: 마스크 각도를 paused 타임라인의 onUpdate에서 계산해 쓴다. 각도 값은 상태 객체 하나에 둬서 seek 때 같은 결과가 나오게 한다
- ReelForge: 씬 워커 브리프에 centerX, centerY, sweepMs, wings를 파라미터로 싣는다. 뒤 장면은 mask로만 노출한다
- Scrolline Deck: 진행률 p를 각도 360*p로 직결한다. 이징을 걸지 않아야 스크롤 속도와 회전 속도가 일치한다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [마스크 전환 · Shape Mask Transition](../iris-mask/) · [마스크 리빌 · Mask Reveal](../mask-reveal/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/angular.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Radial.glsl) (MIT) · [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) (LGPL-2.1-or-later) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/clock-wipe) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
