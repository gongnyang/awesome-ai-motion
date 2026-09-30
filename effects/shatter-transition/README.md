# Nº 195 샤터 전환 · Shatter Transition

> 클립 렌더 예정 / Clip rendering planned.

**화면이나 물체가 작은 조각으로 갈라져 흩어지며 다음 장면을 드러내는 전환**

The frame or object splits into small fragments that scatter and reveal the next scene; in reverse, fragments gather into the new scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 제품 시연, 설명 영상 | webgl |

다른 이름 / Also known as: Fragment shatter, 조각 분해, Chaos collapse transition, 혼돈 붕괴 전환, Scatter Disintegration, 흩어짐 분해, Scatter effect, Fracture and Shatter, 균열과 파편 분해

## 선택 기준 / Selection

붕괴와 확산의 강한 인상. 유리가 깨지듯 앞 장면이 무너진다 / A strong impression of collapse and dispersal: the old scene falls apart like breaking glass.

- 기존 방식의 붕괴나 충격적인 반전을 전할 때 / Convey the collapse of an old way or a shocking reversal.
- 오프닝이나 클라이맥스에서 강한 시각적 사건이 필요할 때 / Openers or climaxes that need a strong visual event.

좋은 예 / Good: 1.0초 동안 파편 30개가 시드 1의 고정 궤적으로 최대 화면 30% 변위, 120도/s 회전으로 흩어지며 뒤 장면을 드러낸다
나쁜 예 / Bad: 파편이 무작위로 프레임마다 달라 깜빡이거나, 파편이 너무 작아 먼지처럼만 보인다
주의 / Avoid: 파편 수 60개 초과 금지 · 난수는 시드 고정, Math.random 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 1.0s | 0.7~1.5s | 파편 낙하 포함 |
| 파편 수 | 30 | 16~60 | 시드 1 |
| 최대 변위 | 화면 30% | 15~40% | 방사형 |
| 회전 | 120deg/s | 60~240 | 파편별 고정 |

이징 / Ease: `power2.in`

## 구현 / Implementation (GSAP)

```js
const rnd = (i, k) => ((Math.sin(i * 12.9898 + k * 78.233) * 43758.5453) % 1 + 1) % 1;
gsap.utils.toArray('.frag').forEach((f, i) => {
  const a = rnd(i, 1) * Math.PI * 2, d = 200 + rnd(i, 2) * 380;
  tl.to(f, { x: Math.cos(a) * d, y: Math.sin(a) * d + 120, rotation: (rnd(i, 3) - 0.5) * 240,
    opacity: 0, duration: 1.0, ease: 'power2.in' }, rnd(i, 4) * 0.08);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 샤터 전환을 만들어줘. A를 파편 30개(clipPath 폴리곤)로 나누고 각 파편이 시드 고정 궤적으로 최대 화면 30%까지 날아가며 120도/s로 회전하고 opacity 0이 되도록 1.0초 power2.in으로 보간해. 시작 지연은 파편마다 0~0.08초, Math.random 금지, B는 뒤에 대기, paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 shatter transition을 적용해. .frag 30개에 sin 해시 기반 궤적으로 x, y, rotation, opacity 0을 1.0s power2.in으로 보간하고 시작 지연은 0~0.08s. 0.2초, 0.5초, 1.0초 캡처로 파편이 흩어지며 B가 드러나는지, 같은 시각을 두 번 캡처해 파편 위치가 같은지 확인해.
```

### English · Claude Code
```text
Build a shatter transition from <targetA> to <targetB>. Split A into 30 clipPath polygon fragments; each flies out on a fixed seeded path up to 30% of the frame, rotating 120 degrees per second and fading to opacity 0 over 1.0 second with power2.in, with 0 to 0.08 second start delays. No Math.random, B waits behind, one paused timeline.
```

### English · Codex
```text
Apply a shatter transition in <file>. Tween 30 .frag elements along sin-hash trajectories in x, y, rotation, and opacity 0 over 1.0s with power2.in, start delays 0 to 0.08s. Capture at 0.2, 0.5, and 1.0 seconds to confirm fragments scatter while B is revealed, and capture the same time twice to confirm identical fragment positions.
```

예시 / Example: 샤터 전환를 `.hero`에 적용해. / Apply Shatter Transition to `.hero`.

## 적용 / Application

- HyperFrames: 파편은 앞 장면 조각 이미지(clipPath 폴리곤)로 미리 나누고 x, y, rotation만 움직인다. 궤적은 시드 해시로 계산해 seek에서 같은 결과
- ReelForge: 씬 워커 브리프에 fragments, seed, maxDisplacementPct, rotationDegPerSec를 싣는다
- Scrolline Deck: 진행률 p에서 파편 위치 = 시드 궤적 * ease(p). 역방향(응집)은 p를 뒤집어 재사용. scrub은 ease-out

조합 / Pair with: [화면 흔들림 · Screen Shake](../screen-shake/) · [스트로브 플래시 · Strobe Flash](../strobe-flash/) · [파편 분해 · Shatter](../shatter/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fragment.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/stylize-effects.html) (unknown) · [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_break) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
