# Nº 576 구면화 · Spherize

> 클립 렌더 예정 / Clip rendering planned.

**평면 이미지가 구면에 감긴 듯 가운데가 튀어나오며 움직인다**

A flat image bulges in the middle as if wrapped around a sphere.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 전환, 주목 끌기 | 숏폼, 설명 영상, 제품 시연 | webgl |

## 선택 기준 / Selection

평면이 입체 표면으로 바뀌는 순간의 놀라움을 준다. 화면이 물체가 되는 전환에 쓴다 / Delivers the surprise of a flat surface turning into a solid. Useful for screen-to-object transitions.

- 이미지가 지구본이나 구슬로 변하는 전환을 만들 때 / Transition an image into a globe or marble.
- 평면 화면에 볼록한 렌즈 같은 강조를 줄 때 / Add a convex lens emphasis to a flat screen.

좋은 예 / Good: 900ms 동안 구면화 강도가 0에서 70%로 올라가며 이미지가 부풀듯 둥글어진다. 가장자리 왜곡은 부드럽다
나쁜 예 / Bad: 강도를 100%로 올려 가장자리가 무한히 늘어나 이미지가 읽히지 않고, 픽셀이 깨진다
주의 / Avoid: 강도 85% 초과 금지 · 이미지 해상도가 낮으면 쓰지 않는다(픽셀 깨짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 600~1200ms |  |
| 강도 | 0→70% | 40~85% | UV 보간 비율 |
| 이징 | power2.inOut | power2~power3 |  |
| 배경 | 어두운 단색 |  | 가장자리 밖은 투명 |

## 구현 / Implementation (GSAP)

```js
const u = { s: 0 };
tl.to(u, { s: 0.7, duration: 0.9, ease: 'power2.inOut', onUpdate: () => mat.uniforms.uStrength.value = u.s }, 0.3);
// GLSL: vec2 q = uv*2.-1.; float r = length(q); vec2 sph = q * (1. - mix(0., (1.-sqrt(max(1.-r*r,0.))), uStrength)); uv2 = sph*.5+.5;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 구면화를 WebGL로 넣어줘. 0.3초부터 0.9초 동안 strength를 0에서 0.7로 power2.inOut으로 올리고, 가운데가 볼록하게 튀어나온 구면 매핑으로 UV를 왜곡해. 가장자리 밖은 투명, 배경은 어두운 단색.
```

### 한국어 · Codex
```text
<파일>에 spherize 셰이더를 추가해. uStrength 0→0.7, 0.9s, ease power2.inOut, 시작 0.3초. 0.3초, 0.75초, 1.2초를 캡처해 강도가 올라갈수록 중앙이 확대되고 가장자리가 압축되는지, 이미지가 읽히는 정도를 유지하는지 확인해.
```

### English · Claude Code
```text
Add spherize to the image in <target> in WebGL. From 0.3 seconds raise strength from 0 to 0.7 over 0.9 seconds with power2.inOut, distorting UVs with a spherical mapping that bulges the center. Outside the edge is transparent over a dark flat background.
```

### English · Codex
```text
Add a spherize shader to <file>: uStrength 0 to 0.7, 0.9s, ease power2.inOut, start 0.3s. Capture at 0.3s, 0.75s and 1.2s and verify the center enlarges and the edges compress as strength rises while the image stays readable.
```

예시 / Example: 구면화를 `.hero`에 적용해. / Apply Spherize to `.hero`.

## 적용 / Application

- HyperFrames: uStrength를 paused 타임라인 tween으로 올린다. 셰이더에는 시간 의존을 두지 않는다
- ReelForge: 씬 브리프에 강도 목표값, 지속, 배경색을 싣는다. 텍스처 해상도는 2배 이상 확보
- Scrolline Deck: 진행률을 uStrength에 선형으로 매핑한다. 되감기 시 왜곡이 대칭으로 풀린다

조합 / Pair with: [볼록 렌즈 · Bulge Lens](../bulge-lens/) · [배럴 왜곡 · Barrel Lens Warp](../barrel-warp/) · [트월 · Twirl Distortion](../twirl/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
