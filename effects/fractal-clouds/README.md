# Nº 504 프랙탈 구름 · Fractal Clouds

> 클립 렌더 예정 / Clip rendering planned.

**부드러운 구름 덩어리가 천천히 이동하며 모양을 바꾸는 프랙탈 구름**

Soft cloud masses drift slowly and change shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기 | 설명 영상, 발표, 스크롤덱 | webgl |

다른 이름 / Also known as: Drifting Clouds, 흐르는 구름, Fractal Noise Evolution, 프랙탈 노이즈 진화, Fractal Noise, fBm, 프랙탈 노이즈 변화, Fractal Brownian motion texture

## 선택 기준 / Selection

넓은 공간과 평온함. 서두르지 않는 시간의 흐름 / A wide open space and calm. The unhurried passing of time.

- 하늘·자연·클라우드 주제의 배경을 잔잔하게 채울 때 / Fill a sky, nature or cloud-themed background quietly.
- 텍스트가 많은 장면 뒤에서 조용히 움직이는 배경이 필요할 때 / Provide a quietly moving backdrop behind text-heavy scenes.

좋은 예 / Good: 연한 푸른 하늘 위에 구름 덩어리가 16초에 걸쳐 초당 10px로 흘러가며 천천히 모양이 바뀐다
나쁜 예 / Bad: 이동이 초당 40px를 넘어 구름이 달려가는 것처럼 보이거나, 대비가 강해 회색 연기 덩어리처럼 무거워진다
주의 / Avoid: 속도 초당 20px 초과 금지 · 텍스트 뒤에서는 구름 대비를 0.3 이하로 유지한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 16s | 12~24s | 모양 변화 루프 |
| 이동 속도 | 10px/s | 5~20px/s | 수평 이동 |
| 구름 덩어리 | 6 | 4~9 | fbm 저주파 개수 |
| 형태 변화 | 0.2 | 0.1~0.3 | 시간 위상 배율 |
| 옥타브 | 5 | 4~6 | fbm 층 수 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 16, duration: 16, ease: 'none', onUpdate: draw }, 0);
// GLSL: vec2 p = uv * 3.0 + vec2(t * 10.0 / 1920.0 * 3.0, 0.0);
// float c = fbm(vec3(p, t * 0.2 * 0.1)); // 5 octaves
// col = mix(sky, cloud, smoothstep(0.45, 0.75, c));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 뒤에 프랙탈 구름 배경을 넣어줘. 연한 푸른 하늘색 바탕에 구름 덩어리 6개가 5옥타브 fbm으로 그려지고, 초당 10px 속도로 수평 이동하며 16초 동안 모양이 천천히 바뀌게 해. 구름 대비는 0.3 이하로 잔잔하게 유지하고 시간은 paused 타임라인의 t 하나로만 구동해.
```

### 한국어 · Codex
```text
<파일>의 배경 캔버스에 구름 셰이더를 추가해. p=uv*3+vec2(t*10/1920*3,0), c=fbm(vec3(p,t*0.02)) 5옥타브, 색=mix(sky,cloud,smoothstep(0.45,0.75,c)). t는 16초 선형 tween. 0초·8초·16초를 캡처해 구름이 이동하고 모양이 서서히 변하며 대비가 낮은지 확인해.
```

### English · Claude Code
```text
Add a fractal cloud background behind <target>. On a pale sky-blue base, draw 6 cloud masses with 5-octave fbm, drifting horizontally at 10px per second and slowly changing shape over 16 seconds. Keep cloud contrast at 0.3 or lower and drive time with a single t on a paused timeline.
```

### English · Codex
```text
Add a cloud shader to the background canvas in <file>. p=uv*3+vec2(t*10/1920*3,0); c=fbm(vec3(p,t*0.02)) with 5 octaves; color=mix(sky,cloud,smoothstep(0.45,0.75,c)). Tween t linearly over 16 s. Capture 0 s, 8 s and 16 s to confirm drift, gradual shape change and low contrast.
```

예시 / Example: 프랙탈 구름를 `.hero`에 적용해. / Apply Fractal Clouds to `.hero`.

## 적용 / Application

- HyperFrames: 3D 노이즈의 z축에 시간을 넣어 모양을 바꾸고 x축으로 이동시킨다. t 하나로 구동해 긴 타임라인에서도 seek가 정확하다
- ReelForge: 씬 브리프에 하늘색·구름색, 속도 10px/s, 덩어리 6, 길이를 초 단위로 싣는다
- Scrolline Deck: 스크롤과 시간 이동이 겹치면 산만하므로 진행률에 이동을 묶되 총 이동량을 화면 폭의 10% 이내로 제한한다

조합 / Pair with: [도메인 워핑 · Domain Warping](../domain-warping/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/) · [메시 그라디언트 흐름 · Mesh Gradient Flow](../mesh-gradient-flow/) · [앰비언트 입자 유영 · Ambient Particle Drift](../ambient-particle-drift/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/cloud-shader) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/noise-grain-effects.html) (unknown) · [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/shader-glsl/SKILL.md) (MIT) · [paper-design/shaders](https://shaders.paper.design/perlin-noise) (Apache-2.0) · [paper-design/shaders](https://shaders.paper.design/simplex-noise) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
