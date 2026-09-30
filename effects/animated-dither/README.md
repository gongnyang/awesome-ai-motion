# Nº 460 디더링 모션 · Animated Dithering

> 클립 렌더 예정 / Clip rendering planned.

**제한된 색과 규칙적 점 패턴으로 이미지를 표현하고 색 단계가 변하며 움직이는 효과**

An image is drawn with limited colors and regular dot patterns, and the color levels animate.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 전환, 브랜딩 | 숏폼, 설명 영상, 웹 UI | canvas |

다른 이름 / Also known as: Ordered dither, 순서 디더 공개, Animated Dither, 디더 패턴 전환, 디더링 변화, Dither Shader, Dither, DitherVeil, HalftoneReveal, dither-shader

## 선택 기준 / Selection

저해상도 게임과 초기 컴퓨터 그래픽의 레트로 감성을 주며 독특한 흑백 질감을 만든다 / Brings low-res game and early-computer nostalgia and a distinctive black-and-white texture.

- 레트로 게임, 인디, 일러스트 톤의 브랜드 영상에서 질감을 줄 때 / To add texture in retro-game, indie, or illustrated brand videos
- 이미지가 흑백 점 패턴에서 풀컬러로 서서히 살아나는 전환을 만들 때 / For a transition where an image comes to life from a dither pattern into full color

좋은 예 / Good: 이미지가 2색 Bayer 디더로 시작해 1.2초 동안 색 단계 2, 4, 8, 16으로 늘어나 원본으로 돌아온다
나쁜 예 / Bad: 디더 패턴을 매 프레임 바꿔 화면이 지글거리게 하거나, 색 단계를 한 번에 크게 건너뛴다
주의 / Avoid: Bayer 행렬은 프레임마다 바꾸지 않는다(고정 패턴) · 셀 크기 4px 초과 금지(뭉개짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1200ms | 800~2000ms | 색 단계 증가 |
| 행렬 | Bayer 8x8 | 4x4/8x8 | 고정 임계 맵 |
| 색 단계 | 2에서 16 | 2~32 | 단계별 계단식 증가 |
| 셀 크기 | 2px | 1~4px | 픽셀 확대 배율 |
| 팔레트 | 흑백 또는 2색 | 1~4색 | 브랜드 색 지정 가능 |

이징 / Ease: `steps(4)`

## 구현 / Implementation (GSAP)

```js
// fragment: 임계 맵 M(8x8)/64
float t=bayer8(floor(gl_FragCoord.xy/2.));
float L=dot(texture2D(tex,uv).rgb,vec3(.299,.587,.114));
float levels=mix(2.,16.,uProg);
float q=floor(L*(levels-1.)+t)/(levels-1.);
gl_FragColor=vec4(mix(c0,c1,q),1.);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<이미지>에 애니메이션 디더링을 넣어줘. Bayer 8x8 임계 맵으로 셀 크기 2px, 처음 2색(흑백)에서 시작해 1.2초 동안 색 단계를 2, 4, 8, 16으로 계단식(steps 4)으로 올려서 원본에 가까워지게 해. 임계 맵은 고정이고 매 프레임 바꾸지 마. paused 타임라인으로 uProg를 구동해.
```

### 한국어 · Codex
```text
<파일>에 animated-dither 셰이더를 구현해. Bayer 8x8, 셀 2px, 색 단계 2에서 16, 1200ms steps(4). 0초, 0.4초, 0.8초, 1.3초를 캡처해 점 패턴이 유지되면서 색 단계만 늘어나는지, 프레임 사이 패턴이 흔들리지 않는지, 1.3초에 원본 톤에 가까운지 확인해.
```

### English · Claude Code
```text
Add animated dithering to <image>. Use a Bayer 8x8 threshold map at 2px cells, starting in 2 colors (black and white) and stepping through 2, 4, 8, and 16 color levels over 1.2s with steps(4) so it approaches the original. Keep the threshold map fixed and never change it per frame. Drive uProg from a paused timeline.
```

### English · Codex
```text
Implement an animated-dither shader in <file>: Bayer 8x8, 2px cells, levels 2 to 16, 1200ms steps(4). Capture at 0s, 0.4s, 0.8s, and 1.3s to verify the dot pattern persists while only levels increase, the pattern does not shimmer between frames, and 1.3s is close to the source tone.
```

예시 / Example: 디더링 모션를 `.hero`에 적용해. / Apply Animated Dithering to `.hero`.

## 적용 / Application

- HyperFrames: uProg를 paused 타임라인에서 steps(4)로 보간해 색 단계가 계단식으로 오른다. Bayer 임계는 gl_FragCoord로 고정되어 seek해도 같다
- ReelForge: 브리프에 matrixSize, levelFrom, levelTo, cellPx, palette를 싣는다. 2색 팔레트는 브랜드 토큰에서 고른다
- Scrolline Deck: 스크롤 진행률로 색 단계를 올린다. 계단식 변화는 스크럽에서도 자연스럽다. 스프링은 쓰지 않는다

조합 / Pair with: [ASCII 모션 · ASCII Motion](../ascii-motion/) · [하프톤 모션 · Halftone Motion](../halftone-motion/) · [하프톤 디졸브 · Halftone Dissolve](../halftone-dissolve/) · [디픽셀 리빌 · Depixelate Reveal](../depixelate-reveal/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ordered-dither-pass/registry-item.json) (Apache-2.0) · [ui.aceternity.com](https://ui.aceternity.com/components/dither-shader) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [paper-design/shaders](https://shaders.paper.design/dithering) (Apache-2.0) · [paper-design/shaders](https://shaders.paper.design/image-dithering) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
