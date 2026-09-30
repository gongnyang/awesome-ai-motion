# Nº 444 코스틱 물결 · Caustic Light Ripples

> 클립 렌더 예정 / Clip rendering planned.

**수면이나 유리 아래처럼 밝은 그물 모양의 빛이 천천히 흐르고 모였다 흩어진다**

A bright net of refracted light drifts, concentrates and disperses as if beneath water or glass.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 브랜딩 | 설명 영상, 숏폼, 웹 UI | webgl |

다른 이름 / Also known as: 코스틱 빛 물결

## 선택 기준 / Selection

빛이 굴절되어 모이는 물질의 존재를 느끼게 한다. 시원하고 맑은 수중 분위기를 만든다 / Makes the viewer feel the presence of a refracting material. It creates a cool, clear underwater atmosphere.

- 수영장, 유리, 물 같은 소재의 배경 질감이 필요할 때 / Need a background texture for pool, glass or water themes.
- 제품 아래 바닥에 물결 빛을 깔아 질감을 줄 때 / Lay moving water light on the floor beneath a product.

좋은 예 / Good: 무늬 스케일 4, 선 폭 0.02UV의 그물 빛이 0.25/s로 흐르고 밝기는 0.6에서 멈춘다. 전경 카드가 그 위에 또렷이 놓인다
나쁜 예 / Bad: 밝기를 1.0으로 올리고 선을 굵게 해서 네온 그물처럼 보이며, 전경 텍스트를 가린다
주의 / Avoid: 밝기 0.75 초과 금지(전경이 묻힘) · 속도 0.5/s 초과 금지(물이 끓는 것처럼 보임)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 무늬 스케일 | 4 | 3~6 | 클수록 촘촘 |
| 속도 | 0.25/s | 0.15~0.4/s | 느리게 흐름 |
| 밝기 | 0.6 | 0.4~0.75 | 배경일 때는 낮게 |
| 선 폭 | 0.02UV | 0.015~0.04UV | 밝은 그물 선 두께 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 1.5, duration: 6, ease: 'none', onUpdate: () => mat.uniforms.uTime.value = u.t }, 0);
// GLSL: v = 1.0; for (i<3) { p += vec2(cos(p.y + uTime), sin(p.x + uTime)) * 0.5; v *= abs(sin(p.x) * sin(p.y)); } v = pow(v, 0.25);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 아래에 코스틱 물결 빛을 WebGL로 깔아줘. 무늬 스케일 4, 속도 0.25/s, 밝기 0.6, 선 폭 0.02UV, 청록 단색, 6초. uTime은 타임라인 tween으로만 구동하고 전경 카드는 위에 그대로 읽히게 해.
```

### 한국어 · Codex
```text
<파일>에 caustic 셰이더를 추가해. 스케일 4, 속도 0.25/s, 밝기 0.6, 선 폭 0.02UV, 6초, ease none. 0초, 3초, 6초를 캡처해 그물 모양이 유지되면서 위치가 이동하는지, 전경 카드 텍스트 대비가 유지되는지 확인해.
```

### English · Claude Code
```text
Lay caustic ripples under <target> in WebGL. Pattern scale 4, speed 0.25/s, brightness 0.6, line width 0.02 UV, teal monochrome, 6 seconds. Drive uTime only from a timeline tween and keep the foreground card readable.
```

### English · Codex
```text
Add a caustic shader to <file>: scale 4, speed 0.25/s, brightness 0.6, line width 0.02 UV, 6 seconds, ease none. Capture at 0s, 3s and 6s and verify the net structure holds while it shifts position, and that foreground card text contrast is kept.
```

예시 / Example: 코스틱 물결를 `.hero`에 적용해. / Apply Caustic Light Ripples to `.hero`.

## 적용 / Application

- HyperFrames: uTime을 paused 타임라인 tween으로만 올린다. 결과를 seek해도 같도록 셰이더에 clock 의존을 두지 않는다
- ReelForge: 씬 워커 브리프에 스케일 4, 속도 0.25/s, 밝기 0.6, 색 한 가지(청록)를 싣는다
- Scrolline Deck: 진행률 0..1에 uTime 0~1.5를 대응시킨다. 스크롤이 멈춰도 무늬가 죽지 않게 하려면 0.02/s 정도의 별도 루프를 더한다

조합 / Pair with: [수면 굴절 · Water Surface Refraction](../water-refraction/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [빛내림 · God Rays](../god-rays/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgpu_caustics) (MIT) · [artcodev/three-fluid-fx](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/distortion/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
