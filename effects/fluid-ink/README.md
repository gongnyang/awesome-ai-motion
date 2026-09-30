# Nº 503 유체 잉크 · Fluid Ink Advection

> 클립 렌더 예정 / Clip rendering planned.

**색 잉크가 물속에서 번지고 휘말리며 부드럽게 섞이는 유체 흐름**

Colored ink spreads and swirls in water, blending softly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 설명 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: Liquid Flow, 유체 색 흐름, 유체 잉크 확산, Stable fluids visual, Dye advection, LiquidEther, SplashCursor, Ferrofluid, Plasma, PlasmaWave

## 선택 기준 / Selection

생각이 번지고 에너지가 흐르는 느낌. 창의적이고 유동적인 분위기 / Ideas bleeding into one another and energy in flow. A creative, fluid mood.

- 창의·아이디어·생성 AI처럼 흐르고 섞이는 개념을 시각화할 때 / Visualize flowing, mixing concepts such as creativity or generative AI.
- 장면 사이 배경을 색이 번지는 표면으로 채울 때 / Fill the space between scenes with a surface of bleeding color.

좋은 예 / Good: 청록과 자홍 잉크가 8초 동안 반경 120px 소용돌이를 따라 휘감기며 가장자리에서 서서히 섞인다
나쁜 예 / Bad: 색이 3종을 넘어 탁한 갈색으로 뭉치거나 흐름이 빨라 연기처럼 보여 잉크 느낌이 사라진다
주의 / Avoid: 색은 2~3종 이내 · 감쇠 0.95 미만 금지(금방 사라져 밋밋함)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 8s | 6~12s | 한 번 섞이는 시간 |
| 소용돌이 반경 | 120px | 80~200px | 1920px 기준 |
| 감쇠 | 0.98 | 0.95~0.99 | 프레임당 잔상 유지 |
| 속도 | 0.2 | 0.1~0.3 | 이동장 배율 |
| 색 | #22d3ee, #e879f9 | 2~3종 | 팔레트 고정 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 상태 없는 근사: 도메인 워핑 두 겹으로 잉크를 흉내 낸다
const u = { t: 0 };
tl.to(u, { t: 8, duration: 8, ease: 'none', onUpdate: draw }, 0);
// GLSL: vec2 q = uv + 0.4*vec2(fbm(uv*2.+t*0.2), fbm(uv*2.+5.-t*0.2));
// float m = fbm(q*2.); col = mix(colA, colB, smoothstep(0.35, 0.65, m));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 유체 잉크 효과를 넣어줘. 청록(#22d3ee)과 자홍(#e879f9) 두 색이 도메인 워핑으로 8초 동안 서로 휘감기며 섞이게 하고, 소용돌이 크기는 약 120px, 속도 0.2로 해. 색은 두 가지만 쓰고 가장자리는 smoothstep으로 부드럽게 해. 시뮬레이션 대신 t의 순수 함수로 그려서 seek가 가능하게 만들어.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 잉크 셰이더를 추가해. q = uv + 0.4*vec2(fbm(uv*2+t*0.2), fbm(uv*2+5-t*0.2)), m = fbm(q*2), 색 = mix(colA, colB, smoothstep(0.35,0.65,m)). t는 8초 선형 tween. 프레임 누적 버퍼는 쓰지 마. 0초·4초·8초를 캡처해 두 색이 섞이며 탁해지지 않는지 확인해.
```

### English · Claude Code
```text
Add a fluid ink effect to the background of <target>. Two colors, teal (#22d3ee) and magenta (#e879f9), swirl and blend through domain warping over 8 seconds, with swirl size around 120px and speed 0.2. Use only two colors and soften edges with smoothstep. Draw as a pure function of t instead of simulating, so it can seek.
```

### English · Codex
```text
Add an ink shader to the canvas in <file>. q = uv + 0.4*vec2(fbm(uv*2+t*0.2), fbm(uv*2+5-t*0.2)); m = fbm(q*2); color = mix(colA, colB, smoothstep(0.35,0.65,m)). Tween t linearly over 8 s. No accumulation buffer. Capture 0 s, 4 s and 8 s to check the two colors blend without turning muddy.
```

예시 / Example: 유체 잉크를 `.hero`에 적용해. / Apply Fluid Ink Advection to `.hero`.

## 적용 / Application

- HyperFrames: 프레임 간 유체 시뮬레이션은 seek에 취약하다. 렌더 함수를 t의 순수 함수(도메인 워핑)로 짜고 paused 타임라인으로 t만 옮긴다
- ReelForge: 씬 브리프에 팔레트 2색, 소용돌이 반경, 속도 0.2, 주기 8초를 싣고 시뮬레이션 대신 워핑 근사임을 명시한다
- Scrolline Deck: 진행률을 t에 선형 매핑한다. 감쇠 누적 방식은 역스크롤에서 깨지므로 쓰지 않는다

조합 / Pair with: [도메인 워핑 · Domain Warping](../domain-warping/) · [흐름장 · Flow Field](../flow-field/) · [잉크 번짐 · Ink Bleed](../ink-bleed/) · [메시 그라디언트 흐름 · Mesh Gradient Flow](../mesh-gradient-flow/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) (MIT) · [artcodev/three-fluid-fx](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/overlay/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
