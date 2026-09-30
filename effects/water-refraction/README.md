# Nº 493 수면 굴절 · Water Surface Refraction

> 클립 렌더 예정 / Clip rendering planned.

**이미지가 잔물결 아래에서 흔들리고 물결의 밝은 면이 이동하는 수면 굴절**

The image wobbles beneath ripples while bright facets of the waves travel across it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기 | 숏폼, 제품 시연, 설명 영상 | webgl |

## 선택 기준 / Selection

물속이나 젖은 표면의 감각. 시원하고 차분한 흔들림 / The feel of being underwater or on a wet surface. A cool, calm shimmer.

- 수영장·바다·음료 같은 물 관련 이미지를 살아 있게 만들 때 / Bring water-related images such as pools, seas or drinks to life.
- 회상이나 꿈 전환에 물결 너머 장면 느낌을 줄 때 / Give flashbacks or dream transitions a scene-beyond-ripples feel.

좋은 예 / Good: 이미지가 진폭 0.02UV, 파장 0.12UV의 물결 아래에서 6초 동안 초당 0.1UV로 일렁이고 밝은 면이 이동한다
나쁜 예 / Bad: 진폭이 0.06UV를 넘어 이미지가 찢기거나 파장이 너무 짧아 자글자글한 노이즈처럼 보인다
주의 / Avoid: 진폭 0.04UV 초과 금지 · 텍스트가 있는 이미지에는 진폭 0.01UV로 낮춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 6s | 4~10s | 루프 |
| 진폭 | 0.02UV | 0.01~0.04 | UV 변위 |
| 파장 | 0.12UV | 0.08~0.2 | 사인 파장 |
| 이동 | 0.1UV/s | 0.05~0.2 | 파 진행 속도 |
| 하이라이트 | 0.25 | 0.1~0.4 | 기울기 기반 반사 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 6, duration: 6, ease: 'none', onUpdate: draw }, 0);
// GLSL: float h = sin((uv.x + uv.y*0.6 - t*0.1) * 6.283/0.12) + 0.6*sin((uv.y - uv.x*0.3 + t*0.07) * 6.283/0.17);
// vec2 g = vec2(dFdx(h), dFdy(h)); uv += g * 0.02; col = texture(tex, uv) + pow(max(dot(normalize(vec3(-g,1.0)), L), 0.0), 20.0) * 0.25;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 수면 굴절을 넣어줘. 사인 두 겹으로 수면 높이를 만들고(파장 0.12UV와 0.17UV, 초당 0.1UV와 0.07UV로 이동) 기울기만큼 UV를 0.02 굴절시켜. 기울기가 광원 방향과 맞는 곳에는 하이라이트를 0.25 세기로 더해. 6초 일정한 속도로 재생해.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 water 셰이더를 추가해. h=sin((uv.x+uv.y*0.6-t*0.1)*2π/0.12)+0.6*sin((uv.y-uv.x*0.3+t*0.07)*2π/0.17), g=(dFdx(h),dFdy(h)), uv+=g*0.02, 하이라이트 pow(...,20)*0.25. t는 6초 선형. 0초·3초·6초 캡처로 물결이 이동하고 이미지가 찢기지 않는지 확인해.
```

### English · Claude Code
```text
Add water refraction to the image in <target>. Build the surface height from two sines (wavelengths 0.12UV and 0.17UV, traveling at 0.1UV and 0.07UV per second) and refract the UV by the slope at 0.02. Add a highlight at strength 0.25 where the slope faces the light. Play at constant speed for 6 seconds.
```

### English · Codex
```text
Add a water shader to the image canvas in <file>. h=sin((uv.x+uv.y*0.6-t*0.1)*2π/0.12)+0.6*sin((uv.y-uv.x*0.3+t*0.07)*2π/0.17); g=(dFdx(h),dFdy(h)); uv+=g*0.02; highlight pow(...,20)*0.25. Tween t linearly over 6 s. Capture 0 s, 3 s and 6 s to confirm ripples travel and the image does not tear.
```

예시 / Example: 수면 굴절를 `.hero`에 적용해. / Apply Water Surface Refraction to `.hero`.

## 적용 / Application

- HyperFrames: 수면 높이를 t의 해석식으로 두고 기울기는 dFdx/dFdy로 얻는다. 프레임 상태가 없어 seek와 캡처가 일치한다
- ReelForge: 씬 브리프에 이미지, 진폭 0.02UV, 파장 0.12UV, 이동 0.1UV/s, 하이라이트 0.25를 싣는다
- Scrolline Deck: 진행률을 t에 선형 매핑한다. 글자가 있는 이미지는 진폭을 절반으로 낮춘다

조합 / Pair with: [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [빗방울 유리 · Raindrop Glass](../raindrop-glass/) · [코스틱 물결 · Caustic Light Ripples](../caustic-ripples/) · [웨이브 워프 · Wave Warp](../wave-warp/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/water) (Apache-2.0) · [mrdoob/three.js](https://threejs.org/examples/#webgl_shaders_ocean) (MIT) · [artcodev/three-fluid-fx](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/distortion/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
