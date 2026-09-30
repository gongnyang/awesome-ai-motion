# Nº 484 파문 왜곡 · Ripple Distortion

> 클립 렌더 예정 / Clip rendering planned.

**화면 위로 원형 파문이 지나가며 주변 색과 모양이 잠깐 변했다가 가라앉는 효과**

A circular ripple passes over the screen, briefly changing surrounding color and shape, then settles.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 피드백, 전환, 강조 | 웹 UI, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Distortion ripple overlay, 화면 왜곡 파문, Radial Ripple Distortion, 방사 물결 왜곡

## 선택 기준 / Selection

클릭이나 활성화의 반응을 물질감 있게 보여주고 화면이 물처럼 응답하는 인상을 준다 / Shows click or activation feedback with material feel, as if the screen responds like water.

- 클릭, 활성화, 착지 지점에서 파문으로 반응을 보여줄 때 / To show a response as a ripple at a click, activation, or landing point
- 이미지 전환에서 물결이 화면을 훑고 지나가게 할 때 / For an image transition where waves sweep across the screen

좋은 예 / Good: 클릭 지점에서 파문이 0.5UV/s로 퍼지며 변위 0.02UV가 지수 감쇠로 1.4초 안에 사라진다
나쁜 예 / Bad: 변위를 0.1UV 이상 주어 화면이 찢어지거나, 파문이 사라지지 않고 계속 남는다
주의 / Avoid: 변위 0.04UV 초과 금지 · 1.4초 후 변위 0 보장

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1400ms | 1000~2200ms | 지수 감쇠 |
| 파문 속도 | 0.5UV/s | 0.3~0.8UV/s | 원 반경 증가 |
| 파장 | 0.05UV | 0.03~0.08UV | 링 간격 |
| 변위 | 0.02UV | 0.01~0.04UV | 샘플 좌표 이동 |
| 감쇠 | exp(-2.5t) | -2~-4 | 시간 감쇠 |

이징 / Ease: `expo.out`

## 구현 / Implementation (GSAP)

```js
// fragment
vec2 d=uv-uCenter; float r=length(d);
float t=uTime;                 // 0..1.4s
float front=t*.5;
float w=sin((r-front)*6.283/.05)*exp(-2.5*t)*smoothstep(.12,0.,abs(r-front));
vec2 u=uv+normalize(d+1e-5)*w*.02;
gl_FragColor=texture2D(tex,u);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<화면>에 파문 왜곡을 넣어줘. WebGL fragment shader에서 클릭 지점을 중심으로 전면이 0.5UV/s로 퍼지고, 파장 0.05UV의 사인 링이 exp(-2.5t)로 감쇠하며 샘플 좌표를 최대 0.02UV 밀어내게 해. 지속은 1.4초, 끝에서 변위 0. uTime은 paused 타임라인이 구동하고 클릭 좌표는 고정값으로 넣어.
```

### 한국어 · Codex
```text
<파일>에 ripple-distortion 셰이더를 구현해. 지속 1400ms, 파문 속도 0.5UV/s, 파장 0.05UV, 변위 0.02UV, 감쇠 exp(-2.5t). 0.2초, 0.6초, 1.0초, 1.5초를 캡처해 링이 퍼지는지, 진폭이 줄어드는지, 1.5초에 원본과 일치하는지 확인해.
```

### English · Claude Code
```text
Add a ripple distortion to <screen>. In a WebGL fragment shader, expand a wavefront from the click point at 0.5 UV/s, with a sine ring of 0.05 UV wavelength decaying by exp(-2.5t), displacing sample coordinates by up to 0.02 UV. Duration 1.4s, displacement 0 at the end. Drive uTime from a paused timeline and use a fixed click coordinate.
```

### English · Codex
```text
Implement a ripple-distortion shader in <file>: duration 1400ms, wave speed 0.5 UV/s, wavelength 0.05 UV, displacement 0.02 UV, decay exp(-2.5t). Capture at 0.2s, 0.6s, 1.0s, and 1.5s to verify the ring expands, amplitude shrinks, and 1.5s matches the original.
```

예시 / Example: 파문 왜곡를 `.hero`에 적용해. / Apply Ripple Distortion to `.hero`.

## 적용 / Application

- HyperFrames: uTime과 uCenter를 uniform으로 넘기고 uTime만 paused 타임라인이 구동한다. 캡처 렌더에서 클릭 좌표는 고정값으로 지정한다
- ReelForge: 브리프에 centerUV, durationMs, waveSpeed, wavelength, displacement를 싣는다
- Scrolline Deck: 진행률에서 uTime을 계산하고 전면 반경이 화면을 벗어난 뒤에는 변위가 자연히 0이 된다. 스프링 대신 지수 감쇠를 쓴다

조합 / Pair with: [난류 왜곡 · Turbulent Displace](../turbulent-displace/) · [리플 링 · Ripple Rings](../ripple-rings/) · [볼록 렌즈 · Bulge Lens](../bulge-lens/) · [수면 굴절 · Water Surface Refraction](../water-refraction/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-apple-intelligence) (unknown) · [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/shader-glsl/SKILL.md) (MIT) · [paper-design/shaders](https://shaders.paper.design/water) (Apache-2.0) · [mrdoob/three.js](https://threejs.org/examples/#webgl_gpgpu_water) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
