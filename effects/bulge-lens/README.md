# Nº 443 볼록 렌즈 · Bulge Lens

> 클립 렌더 예정 / Clip rendering planned.

**투명한 렌즈가 이미지 위를 지나가며 그 아래 부분만 볼록하게 부풀려 보이는 왜곡**

A transparent lens sweeps across an image and bulges only the region beneath it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 주목 끌기, 강조 | 숏폼, 제품 시연, 웹 UI | webgl |

다른 이름 / Also known as: Refractive lens travel, 굴절 렌즈 이동, Bulge, 볼록 렌즈 변형, 볼록 렌즈 왜곡, Bulge distortion, 3D Text Bulge, 3D 텍스트 부풀림

## 선택 기준 / Selection

유리알을 대고 훑는 듯한 확대 효과. 시선이 렌즈 위치를 따라가고 화면에 물리적 질감이 생긴다 / Feels like dragging a glass bead over the picture. The eye follows the lens and the surface gains a physical, tactile quality.

- 이미지 안의 특정 부분을 차례로 짚어 보여 줄 때 / Point out details inside an image one after another.
- 제품 사진 표면의 질감이나 디테일을 훑어 보여 줄 때 / Sweep across a product photo to show surface texture.

좋은 예 / Good: 제품 사진 위를 반지름 288px 렌즈가 3초 동안 왼쪽에서 오른쪽으로 지나가며 로고 부분에서 굴절이 가장 커 보인다
나쁜 예 / Bad: 렌즈 강도가 0.2를 넘어 이미지가 찢어지듯 늘어나거나, 렌즈가 너무 빨리 지나가 무엇을 봤는지 남지 않는다
주의 / Avoid: 굴절 강도 0.1 초과 금지(경계가 찢어져 보임) · 렌즈가 텍스트 위를 지날 때 읽어야 하는 문장은 피한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 3s | 2~5s | 렌즈가 한 번 가로지르는 시간 |
| 렌즈 반경 | 15% (약 288px) | 10~20% | 화면 폭 1920px 기준 |
| 굴절 강도 | 0.05 | 0.03~0.10 | 중심 UV 이동량 |
| 경계 부드러움 | 0.25 | 0.15~0.4 | 렌즈 가장자리 smoothstep 폭 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { x: 0.15, y: 0.5, r: 0.15, k: 0.05 };
tl.to(u, { x: 0.85, duration: 3, ease: 'sine.inOut', onUpdate: draw }, 0);
// GLSL: d = distance(uv, c); m = 1.0 - smoothstep(r*0.75, r, d);
// uv = mix(uv, c + (uv - c) * (1.0 - k*m*20.0), m);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지 위에 볼록 렌즈 효과를 넣어줘. 반지름은 화면 폭의 15%, 굴절 강도 0.05로 하고 렌즈가 왼쪽 15% 지점에서 오른쪽 85% 지점까지 3초 동안 sine.inOut으로 지나가게 해. 렌즈 가장자리는 smoothstep으로 부드럽게 하고, WebGL 셰이더 uniform 하나(진행값)로 구동해서 paused 타임라인으로 seek 가능하게 만들어.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 bulge 프래그먼트 셰이더를 붙여. uniform은 center(vec2), radius 0.15, strength 0.05이고 center.x를 0.15에서 0.85로 3초 tween(sine.inOut)한다. Math.random은 쓰지 않는다. 0.5초·1.5초·2.5초 시점을 캡처해 렌즈가 이동하고 가장자리에 찢김이 없는지 확인해.
```

### English · Claude Code
```text
Add a bulge lens over <target>. Radius 15% of the frame width, refraction strength 0.05, moving from 15% to 85% of the width over 3 seconds with sine.inOut. Soften the rim with smoothstep and drive it with a single progress uniform in a WebGL shader so a paused timeline can seek it.
```

### English · Codex
```text
Attach a bulge fragment shader to the image canvas in <file>. Uniforms: center (vec2), radius 0.15, strength 0.05; tween center.x from 0.15 to 0.85 over 3 s with sine.inOut. No Math.random. Capture at 0.5 s, 1.5 s and 2.5 s to confirm the lens travels and the rim shows no tearing.
```

예시 / Example: 볼록 렌즈를 `.hero`에 적용해. / Apply Bulge Lens to `.hero`.

## 적용 / Application

- HyperFrames: 렌즈 위치 u.x를 paused 타임라인으로 움직이고 onUpdate에서 캔버스를 다시 그린다. 렌더는 시간의 순수 함수로 두어 seek해도 같은 프레임이 나온다
- ReelForge: 씬 워커 브리프에 이미지 경로, 렌즈 반경 15%, 굴절 0.05, 이동 3초, 경로 시작·끝 좌표를 파라미터로 싣는다
- Scrolline Deck: 렌즈 x를 스크롤 진행률 0~1에 선형으로 묶고 감쇠는 ease-out으로 준다. 스프링은 scrub에서 튀어 쓰지 않는다

조합 / Pair with: [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [유리 굴절 · Glass Refraction](../glass-refraction/) · [구면화 · Spherize](../spherize/) · [좌표 줌 · Zoom to Detail](../zoom-to-detail/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/js-three-uniforms) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown) · [Robpayot/webgl-distortion-bulge-effect](https://github.com/Robpayot/webgl-distortion-bulge-effect) (MIT) · [romanjeanelie/bulge-text-effect-codrops](https://github.com/romanjeanelie/bulge-text-effect-codrops) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
