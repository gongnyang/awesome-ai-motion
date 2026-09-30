# Nº 498 글자 액체 왜곡 · Text Liquid Distortion

> 클립 렌더 예정 / Clip rendering planned.

**글자의 윤곽과 내부가 노이즈에 따라 출렁이며 휘는 액체 왜곡**

Stroke edges and interiors bend and ripple with noise.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 주목 끌기 | 숏폼, 웹 UI | webgl |

다른 이름 / Also known as: Liquid Text Distortion, 텍스트 액체 왜곡, SVG Turbulence Text Warp, SVG 난류 텍스트 휨, Rolling Text Distortion, 텍스트 국소 물결 왜곡

## 선택 기준 / Selection

유동적이고 불안정한 상태. 물속에 잠긴 글자처럼 살아 있는 물성이 느껴진다 / Fluid, unstable, and alive, like letters underwater.

- 제목이 물결치듯 등장하거나 사라지는 감성적인 장면 / Emotional scenes where the title ripples in or out
- 불안정한 상태나 변화 직전의 긴장을 글자로 표현할 때 / Expressing tension before a change through the text itself

좋은 예 / Good: 제목이 0.8초 동안 변위 강도 0.15로 출렁이다가 0으로 가라앉아 또렷한 글자가 된다
나쁜 예 / Bad: 변위를 0.5 이상 줘 글자가 알아볼 수 없이 흐트러지고 정지 상태로 돌아오지 않는다
주의 / Avoid: 변위는 끝에서 반드시 0으로 수렴시킨다. 왜곡이 남으면 글자가 오탈자처럼 보인다 · 노이즈는 시드 고정. 시간 t만으로 결정되게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 변위 강도 | 0.15 | 0~0.2 | UV 변위 최대 |
| 노이즈 속도 | 0.5 | 0.3~0.8 | uSpeed |
| 지속 | 0.8s | 0.6~1.2s | 강도 감소 구간 |
| 시드 | 0.4 | 고정 | uSeed |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
// fragment: vec2 uv = vUv + amp * (noise(vUv * 6. + uTime * uSpeed) - .5);
const u = {amp:0.15};
tl.to(u, {amp:0, duration:0.8, ease:'power2.out', onUpdate(){ mat.uniforms.uAmp.value = u.amp; mat.uniforms.uTime.value = tl.time(); render(); }}, 0.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목에 액체 왜곡을 넣어줘. 글자를 캔버스 텍스처로 만들고 UV를 노이즈로 변위하되 강도를 0.15에서 0으로 0.8초 동안 power2.out으로 줄여. 노이즈 속도 0.5, 시드 0.4 고정, uTime은 타임라인 시간에서 읽어 seek해도 같은 프레임이 나오게 해.
```

### 한국어 · Codex
```text
<파일>에 text liquid distortion을 적용해. 셰이더에서 uv+uAmp*(noise(uv*6+uTime*0.5)-0.5)로 샘플링, uAmp 0.15에서 0을 0.8초 power2.out, uTime=tl.time(). 0.3초·0.7초·1.4초를 캡처해 초반에 왜곡, 종료 후 왜곡 0인지 확인하고 같은 시점 두 번 캡처가 픽셀 동일한지 비교해.
```

### English · Claude Code
```text
Add a liquid distortion to the title in <target>. Render the text to a canvas texture and displace UVs with noise, easing amplitude from 0.15 to 0 over 0.8s power2.out. Noise speed 0.5, seed fixed at 0.4, read uTime from the timeline so seeking reproduces frames.
```

### English · Codex
```text
Apply text liquid distortion in <file>. Sample with uv+uAmp*(noise(uv*6+uTime*0.5)-0.5); uAmp 0.15 to 0 over 0.8s power2.out; uTime=tl.time(). Capture at 0.3s, 0.7s and 1.4s to confirm distortion early and zero after settling, and compare two captures of the same time for pixel equality.
```

예시 / Example: 글자 액체 왜곡를 `.hero`에 적용해. / Apply Text Liquid Distortion to `.hero`.

## 적용 / Application

- HyperFrames: 캔버스에 글자를 그려 텍스처로 쓰고 uTime을 tl.time()에서 읽는다. requestAnimationFrame 대신 onUpdate에서 한 프레임씩 그리기를 호출한다
- ReelForge: 브리프에 문구, 변위 0.15에서 0, 0.8초, 노이즈 속도 0.5, 시드 0.4를 싣는다. WebGL 사용 사실을 명시해 렌더러가 GPU 옵션을 켜게 한다
- Scrolline Deck: 진행률로 uAmp를 직접 정한다. 스크롤을 멈추면 변위 0으로 정지하도록 구간을 스냅하고 uTime은 진행률 함수로 쓴다

조합 / Pair with: [끈적한 글자 모프 · Gooey Text Morph](../gooey-text-morph/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [글자 조각 어긋남 · Text Slice Offset](../text-slice-offset/)

출처 / Sources: [bradley/Blotter](https://github.com/bradley/Blotter) (MIT) · [codrops/TextDistortionEffects](https://github.com/codrops/TextDistortionEffects) (unknown) · [codrops/OnScrollSVGFilterText](https://github.com/codrops/OnScrollSVGFilterText) (MIT) · [codrops/AnimateSVGTextPath](https://github.com/codrops/AnimateSVGTextPath) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
