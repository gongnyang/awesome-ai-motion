# Nº 164 중력 렌즈 전환 · Gravitational Lens Transition

> 클립 렌더 예정 / Clip rendering planned.

**중심 주변 화면이 휘고 빛이 고리로 모였다 새 화면으로 풀리는 전환**

The frame bends around the center, light gathers into a ring, and it resolves into the new frame.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 설명 영상, 숏폼 | webgl |

다른 이름 / Also known as: Gravitational lens, 중력 렌즈

## 선택 기준 / Selection

거대한 힘이 공간을 굽힌다는 감각. SF와 우주 톤의 중후한 이동 / A sense of enormous force warping space: a weighty, sci-fi style move.

- 우주, 물리, 기술 스케일을 다루는 영상의 챕터 전환에서 / Change chapters in a video about space, physics, or technological scale.
- 한 지점으로 시선을 모으는 강한 도입에서 / Open strongly by pulling attention to one point.

좋은 예 / Good: 1.2초 동안 렌즈 반경 0.35 안쪽 화면이 중심으로 휘어 모이며 고리 형태의 빛이 생기고, 정점에서 뒤 장면으로 풀린다
나쁜 예 / Bad: 굴절 강도가 커서 중심 화면이 완전히 알아볼 수 없이 늘어지거나, 고리 밝기가 너무 세어 번쩍인다
주의 / Avoid: 변위 강도 0.15 초과 금지 · 고리 밝기는 원본 대비 +40% 이내로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 1.2s | 0.8~1.8s | 정점은 50% |
| 렌즈 반경 | 0.35 | 0.2~0.5 | 화면 짧은 변 대비 |
| 변위 강도 | 0.1 | 0.05~0.15 | 중심에서 거리 역함수 |
| 고리 밝기 | +25% | +10~40% | 고리 근처에만 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { k: 0 };
tl.to(u, { k: 1, duration: 0.6, ease: 'sine.in', onUpdate: () => lens.set(u.k * 0.1) })
  .set('.a', { display: 'none' })
  .to(u, { k: 0, duration: 0.6, ease: 'sine.out', onUpdate: () => lens.set(u.k * 0.1) });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 중력 렌즈 전환을 만들어줘. 중심 50% 50%, 렌즈 반경 0.35, 변위 강도는 0.6초 동안 0에서 0.1로(sine.in) 올라가고 그 시점에 B로 교체된 뒤 0.6초 동안 0으로(sine.out) 내려가게 해. 고리 밝기는 +25%로 제한하고 값은 GSAP 상태 객체에서 읽어 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 gravitational lens 전환을 넣어. 변위 강도 0에서 0.1 (0.6s, sine.in), 0.6초에 장면 교체, 0.1에서 0 (0.6s, sine.out)으로 보간한다. 0.3초, 0.6초, 0.9초 캡처로 중심 왜곡과 고리가 커졌다 사라지는지, 1.2초에 원본 프레임과 동일한지 픽셀 비교로 확인해.
```

### English · Claude Code
```text
Build a gravitational lens transition from <targetA> to <targetB>. Center at 50% 50%, lens radius 0.35. Raise displacement strength from 0 to 0.1 over 0.6 seconds (sine.in), swap to B at that point, then lower it back to 0 over 0.6 seconds (sine.out). Limit ring brightness to +25%, read values from a GSAP state object, and keep it in one paused timeline that seeks.
```

### English · Codex
```text
Add a gravitational lens transition to <file>. Tween displacement strength 0 to 0.1 (0.6s, sine.in), swap scenes at 0.6 seconds, then 0.1 to 0 (0.6s, sine.out). Capture at 0.3, 0.6, and 0.9 seconds to confirm central distortion and ring grow then fade, and at 1.2 seconds compare pixels against the original frame to confirm they match.
```

예시 / Example: 중력 렌즈 전환를 `.hero`에 적용해. / Apply Gravitational Lens Transition to `.hero`.

## 적용 / Application

- HyperFrames: 셰이더 uniform을 타임라인 상태로만 넣고 requestAnimationFrame에 의존하지 않는다. 캡처 직전 seek 후 한 번만 그린다
- ReelForge: 씬 워커 브리프에 lensRadius, strength, ringGain, centerXY를 싣는다
- Scrolline Deck: 진행률 p의 삼각 파형으로 강도를 준다. 중심을 피사체 밖에 두는 옵션을 노출한다

조합 / Pair with: [스월 전환 · Swirl Transition](../swirl-transition/) · [렌즈 왜곡 줌 · Lens Distortion Zoom](../lens-distortion-zoom/) · [워프 디졸브 · Warp Dissolve](../warp-dissolve/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/gravitational-lens/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
