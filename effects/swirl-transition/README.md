# Nº 203 스월 전환 · Swirl Transition

> 클립 렌더 예정 / Clip rendering planned.

**화면이 한 지점을 중심으로 소용돌이처럼 비틀려 들어가고 다음 장면에서 풀리는 전환**

The frame twists into a whirlpool around one point, then untwists on the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Swirl vortex, 소용돌이 전환, Vortex zoom orbit, 소용돌이 줌 회전

## 선택 기준 / Selection

차원 이동과 강한 공간 변화. 다른 세계로 빨려 들어가는 느낌 / Dimensional travel and a strong change of space: being pulled into another world.

- 장면 밖으로 이동하거나 꿈과 다른 세계로 들어가는 이야기에서 / Move out of a scene or into a dream or another world in a story.
- 강한 공간 변화를 한 번의 전환으로 표현할 때 / Express a big change of space in a single transition.

좋은 예 / Good: 0.9초 동안 중심에서 최대 180도 비틀림이 걸려 앞 장면이 빨려 들어가고, 정점 이후 뒤 장면의 비틀림이 풀리며 정지한다
나쁜 예 / Bad: 비틀림이 360도를 넘어 화면이 알아볼 수 없이 감기거나, 중심이 피사체 얼굴을 왜곡한다
주의 / Avoid: 최대 회전 270도 초과 금지 · 영향 반경은 화면 짧은 변의 80%를 넘기지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.9s | 0.6~1.4s | 정점은 50% |
| 최대 회전 | 180deg | 90~270deg | 중심에서 멀수록 감쇠 |
| 영향 반경 | 화면 80% | 50~100% | 짧은 변 기준 |
| 확대 | 1→1.15 | 1~2.2 | 2.2는 확대 변형 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { a: 0 };
tl.to(u, { a: 1, duration: 0.45, ease: 'power2.in', onUpdate: () => swirl.setUniform('angle', u.a * Math.PI) })
  .to(u, { a: 0, duration: 0.45, ease: 'power2.out' })
  .set('.a', { display: 'none' }, 0.45);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 스월 전환을 WebGL 또는 SVG 필터로 만들어줘. 중심 50% 50%, 영향 반경은 화면 짧은 변의 80%, 최대 회전 180도. 0.45초 동안 각도를 0에서 최대로 올려 A를 감고(power2.in), 그 시점에 B로 교체한 뒤 0.45초 동안 0으로 풀어(power2.out). 각도는 GSAP 상태 값에서 읽어 paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>에 swirl 전환을 적용해. uAngle을 0에서 180도까지 0.45s power2.in, 이어 0으로 0.45s power2.out으로 보간하고 0.45초에 텍스처를 A에서 B로 교체한다. 0.2초, 0.45초, 0.7초 캡처로 중심 비틀림이 커졌다가 풀리는지, 0.9초에 왜곡이 0인지 확인해.
```

### English · Claude Code
```text
Build a swirl transition from <targetA> to <targetB> with WebGL or an SVG filter. Center at 50% 50%, influence radius 80% of the short side, max rotation 180 degrees. Ramp the angle from 0 to max over 0.45 seconds (power2.in) to twist A, swap to B at that point, then unwind to 0 over 0.45 seconds (power2.out). Read the angle from a GSAP state value in one paused timeline.
```

### English · Codex
```text
Apply a swirl transition in <file>. Tween uAngle from 0 to 180 degrees over 0.45s with power2.in, then back to 0 over 0.45s with power2.out, swapping the texture from A to B at 0.45 seconds. Capture at 0.2, 0.45, and 0.7 seconds to confirm the twist grows and releases, and at 0.9 seconds to confirm distortion is 0.
```

예시 / Example: 스월 전환를 `.hero`에 적용해. / Apply Swirl Transition to `.hero`.

## 적용 / Application

- HyperFrames: WebGL 셰이더의 uAngle은 타임라인 상태 값으로만 넣는다. 캔버스 텍스처는 두 씬 프레임을 미리 올려 seek 후 바로 그려지게 한다
- ReelForge: 씬 워커 브리프에 maxAngleDeg, radiusPct, centerXY, zoom을 싣고 장면 교체 시각을 0.45초로 고정한다
- Scrolline Deck: 진행률 0~0.5에 각도를 0에서 최대로, 0.5~1에 다시 0으로 삼각 매핑한다. 스프링 없이 ease-out 사용

조합 / Pair with: [워프 디졸브 · Warp Dissolve](../warp-dissolve/) · [중력 렌즈 전환 · Gravitational Lens Transition](../gravitational-lens/) · [줌 전환 · Zoom Through](../zoom-through/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/swirl-vortex/registry-item.json) (Apache-2.0) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Swirl.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Revolve_Left.glsl) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
