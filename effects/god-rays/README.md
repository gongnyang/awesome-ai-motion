# Nº 449 빛내림 · God Rays

> 클립 렌더 예정 / Clip rendering planned.

**광원에서 여러 빛줄기가 뻗어 나와 천천히 흔들리고 밝기가 변하는 빛내림**

Multiple beams fan out from a light source, sway slowly and pulse in brightness.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 강조 | 발표, 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Light Ray Field, 빛줄기 배경, God Ray Sweep, 빛줄기 스윕, Light shafts, Crepuscular rays, Light Rays, LightRays, SideRays, Beams, LightPillar, Lightfall, light-rays

## 선택 기준 / Selection

신비롭고 경건한 공간감. 중심 광원과 깊이를 한 번에 만든다 / A mysterious, reverent sense of space. Creates a central light and depth in one move.

- 중요한 대상 뒤에서 빛이 뻗어 나오게 해 위상을 올릴 때 / Raise the stakes of a key subject with light streaming from behind it.
- 어두운 배경에 깊이와 빛의 방향을 줄 때 / Give a dark background depth and a direction of light.

좋은 예 / Good: 화면 위 중앙 광원에서 12개 빛줄기가 폭 50도로 뻗고 6초 주기로 밝기가 30% 오르내려 아래 제품이 빛 속에 놓인다
나쁜 예 / Bad: 빛줄기가 굵고 강해 화면 전체가 뿌옇게 되거나, 줄기가 각도마다 제각각 깜빡여 스트로브처럼 보인다
주의 / Avoid: 밝기 진폭 0.4 초과 금지 · 줄기가 텍스트를 가로지를 때 불투명도를 0.25 아래로 낮춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 6s | 4~10s | 밝기·각도 흔들림 루프 |
| 광선 수 | 12 | 8~18 | 각도 방향 노이즈 주파수 |
| 각도 폭 | 50deg | 35~70 | 광원 아래 부채꼴 |
| 밝기 진폭 | 0.3 | 0.15~0.4 | sin 위상 |
| 광원 위치 | (50%, -10%) | 고정 | 화면 밖 위쪽 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: Math.PI * 2, duration: 6, ease: 'none', onUpdate: draw }, 0);
// GLSL: float a = atan(uv.x - lx, ly - uv.y);
// float ray = smoothstep(0.3, 1.0, noise(a * 12.0 + sin(t) * 0.5));
// float fall = exp(-dist * 1.6); col += ray * fall * (0.7 + 0.3 * sin(t));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 빛내림 효과를 넣어줘. 화면 위 중앙 밖(50%, -10%)에서 광선 12개가 폭 50도 부채꼴로 뻗게 하고, 거리에 따라 exp(-1.6d)로 약해지게 해. 6초 주기로 밝기가 0.3 진폭으로 sin 변화하고 각도도 살짝 흔들리게 해. 제품 이미지 뒤에서 가장 밝고 텍스트 영역은 불투명도를 0.25 이하로 눌러줘.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 god rays 셰이더를 추가해. a=atan(uv.x-lx, ly-uv.y), ray=smoothstep(0.3,1.0,noise(a*12+sin(t)*0.5)), fall=exp(-dist*1.6), 색 += ray*fall*(0.7+0.3*sin t). t는 0에서 2π를 6초 선형 tween. 0초와 6초 프레임이 같은지, 1.5초 프레임에서 텍스트가 읽히는지 캡처로 확인해.
```

### English · Claude Code
```text
Add god rays to the background of <target>. Twelve beams fan out over a 50 degree spread from a source above the frame center at (50%, -10%), fading with exp(-1.6d). Brightness pulses with a sine of amplitude 0.3 over a 6-second loop and the angles sway slightly. Brightest behind the product image, with opacity held under 0.25 over text.
```

### English · Codex
```text
Add a god rays shader to the canvas in <file>. a=atan(uv.x-lx, ly-uv.y), ray=smoothstep(0.3,1.0,noise(a*12+sin(t)*0.5)), fall=exp(-dist*1.6), color += ray*fall*(0.7+0.3*sin t). Tween t from 0 to 2π linearly over 6 s. Capture 0 s and 6 s to confirm they match, and 1.5 s to confirm text stays readable.
```

예시 / Example: 빛내림를 `.hero`에 적용해. / Apply God Rays to `.hero`.

## 적용 / Application

- HyperFrames: 각도 기반 노이즈를 위상 t로 흔들고 t는 0~2π를 6초에 선형 tween해 루프를 닫는다. 캡처는 seek로 재현된다
- ReelForge: 씬 브리프에 광원 위치, 광선 수 12, 폭 50도, 밝기 진폭 0.3, 빛 색을 넣는다
- Scrolline Deck: 진행률로 t를 움직인다. 정지 구간에서 빛이 죽지 않게 t 진폭을 작게 유지한다

조합 / Pair with: [렌즈 플레어 · Lens Flare](../lens-flare/) · [글자 광선 · Text Light Rays](../text-light-rays/) · [이동 광원 · Moving Light](../moving-light/) · [램프 빛 펼치기 · Lamp Cone Reveal](../lamp-cone-reveal/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/light-rays) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_godrays) (MIT) · [paper-design/shaders](https://shaders.paper.design/god-rays) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
