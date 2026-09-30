# Nº 453 액체 금속 · Liquid Metal

> 클립 렌더 예정 / Clip rendering planned.

**은색 표면이 점성 있게 흐르며 거울 같은 반사가 계속 변하는 액체 금속 질감**

A silver surface flows viscously while mirror-like reflections keep shifting.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 브랜딩 | 제품 시연, 숏폼, 발표 | webgl |

다른 이름 / Also known as: 액체 금속 흐름, Liquid Metal Morph, 액체 금속 모프, Liquid Metal Shimmer, 액체 금속 반짝임, Chrome shader, LiquidChrome, MetallicPaint, MoltenMetal

## 선택 기준 / Selection

미래적이고 차가운 금속 느낌. 무겁게 흐르는 점성이 기술 제품의 존재감을 만든다 / A cold, futuristic metal feel. The heavy viscosity gives high-tech products presence.

- 로고나 제목을 액체 금속 재질로 보여 줄 때 / Show a logo or title in a liquid metal finish.
- 하이테크 제품 인트로의 배경 표면으로 쓸 때 / Use as the surface behind a high-tech product intro.

좋은 예 / Good: 은색 표면이 7초 동안 점성 있게 출렁이며 반사 하이라이트가 이동하고 로고 형태가 그 위에 새겨져 보인다
나쁜 예 / Bad: 노이즈가 너무 잘아 자글거리거나 대비가 3을 넘어 금속이 아니라 젖은 플라스틱처럼 번들거린다
주의 / Avoid: 대비 2.0 초과 금지 · 변형 속도 0.4 초과 금지(점성이 사라짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 7s | 5~10s | 루프 길이 |
| 변형 강도 | 0.2 | 0.1~0.3 | 법선 노이즈 진폭 |
| 속도 | 0.25 | 0.15~0.4 | 노이즈 이동 배율 |
| 대비 | 1.5 | 1.0~2.0 | 반사색 명암 폭 |
| 환경색 | #dfe6ee to #1a2230 | 고정 | 가상 환경 그라디언트 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 7, duration: 7, ease: 'none', onUpdate: draw }, 0);
// GLSL: vec3 n = normalize(vec3(-dfdx, -dfdy, 1.0)); // fbm(uv*2.0 + t*0.25)의 기울기
// vec3 r = reflect(vec3(0,0,-1), n); col = mix(dark, light, pow(r.y*0.5+0.5, contrast));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 로고 뒤 표면에 액체 금속 효과를 넣어줘. 은색 표면을 fbm 노이즈 법선으로 만들고 변형 강도 0.2, 속도 0.25, 대비 1.5로 반사색을 밝은 회색에서 어두운 남색까지 매핑해. 7초 동안 일정하게 흘러 루프가 되게 하고, 로고 마스크 영역만 반사 강도를 20% 높여줘.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 liquid metal 셰이더를 추가해. 법선은 fbm(uv*2+t*0.25)의 기울기로 계산, 반사색은 pow(r.y*0.5+0.5, 1.5)로 두 색 혼합, t는 7초 선형 tween. 프레임 간 상태를 저장하지 마. 0초·3.5초·7초를 캡처해 반사가 이동하고 시작·끝이 이어지는지 확인해.
```

### English · Claude Code
```text
Add a liquid metal effect to the surface behind the logo in <target>. Build a silver surface with fbm-noise normals, deformation 0.2, speed 0.25, contrast 1.5, mapping reflections from light gray to dark navy. Flow steadily over 7 seconds as a loop and raise reflection strength by 20% inside the logo mask.
```

### English · Codex
```text
Add a liquid metal shader to the canvas in <file>. Normals from the gradient of fbm(uv*2+t*0.25); reflection color = mix of two colors by pow(r.y*0.5+0.5, 1.5); tween t linearly over 7 s. Keep no state between frames. Capture 0 s, 3.5 s and 7 s to confirm reflections travel and the loop closes.
```

예시 / Example: 액체 금속를 `.hero`에 적용해. / Apply Liquid Metal to `.hero`.

## 적용 / Application

- HyperFrames: 법선은 fbm의 해석적 기울기로 계산해 프레임 간 상태가 없게 한다. t 하나로 구동해 seek와 렌더가 일치한다
- ReelForge: 씬 브리프에 변형 0.2, 속도 0.25, 대비 1.5와 로고 마스크 이미지를 파라미터로 싣는다
- Scrolline Deck: 진행률로 t를 움직이되 홀드 구간에서는 미세하게 흐르도록 idle 위상을 더한다. 스프링 대신 ease-out

조합 / Pair with: [비단 주름 흐름 · Silk Flow](../silk-flow/) · [홀로그램 광택 · Holographic sheen](../holographic-sheen/) · [유리 굴절 · Glass Refraction](../glass-refraction/) · [도메인 워핑 · Domain Warping](../domain-warping/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [motiondesign.school](https://motiondesign.school/blog/after-effects-tutorial/) (unknown) · [paper-design/shaders](https://shaders.paper.design/liquid-metal) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
