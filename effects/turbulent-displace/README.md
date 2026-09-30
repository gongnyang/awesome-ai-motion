# Nº 490 난류 왜곡 · Turbulent Displace

> 클립 렌더 예정 / Clip rendering planned.

**저주파 노이즈에 따라 화면 픽셀과 윤곽이 출렁였다가 원래대로 복원되는 효과**

Pixels and outlines slosh along a flowing irregular pattern, then restore.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 전환, 강조 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: Heat haze, 열 아지랑이, SVG filter distortion, SVG 필터 왜곡, 터뷸런트 변위, Displacement Map, 변위 맵, SVG Turbulence Displacement, SVG 난류 왜곡, Turbulence filter warp, SVG 난류 변위

## 선택 기준 / Selection

열기나 물속처럼 공기가 일렁이는 느낌과 불안정한 순간을 표현한다 / Expresses air rippling like heat haze or being underwater, and an unstable moment.

- 꿈, 회상, 열기, 수중 장면으로 넘어가는 전환에 쓸 때 / For transitions into dream, memory, heat, or underwater scenes
- 제목이 나타나기 전이나 사라질 때 윤곽을 일렁이게 할 때 / To make outlines waver before a title appears or as it disappears

좋은 예 / Good: 이미지가 3초 동안 변위 4px로 은은히 일렁이다가 마지막 0.5초에 0으로 복원된다
나쁜 예 / Bad: 변위를 20px 이상 주어 화면이 무너지거나, 노이즈 속도를 높여 멀미가 난다
주의 / Avoid: 변위 8px 초과 금지 · 노이즈 속도 0.5 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 3000ms | 2000~4500ms | 복원 포함 |
| 변위 | 4px | 2~8px | feDisplacementMap scale |
| 노이즈 속도 | 0.3 | 0.15~0.5 | baseFrequency 이동 속도 |
| 주파수 | 0.008 | 0.005~0.015 | 저주파 |
| 복원 구간 | 500ms | 300~800ms | 마지막에 scale 0 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
/* <feTurbulence id=t baseFrequency='0.008 0.012' seed=3/><feDisplacementMap in=SourceGraphic scale=4/> */
const o={f:.008};
tl.to('#disp',{attr:{scale:4},duration:.6,ease:'sine.inOut'},t)
 .to('#t',{attr:{baseFrequency:'0.010 0.014'},duration:3,ease:'none'},t)
 .to('#disp',{attr:{scale:0},duration:.5,ease:'sine.inOut'},t+2.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<이미지>에 난류 왜곡을 넣어줘. SVG feTurbulence(baseFrequency 0.008 0.012, seed 3)와 feDisplacementMap을 쓰고 scale을 0에서 4px로 0.6초 sine.inOut으로 올려. 3초 동안 baseFrequency를 선형으로 천천히 이동시키고 마지막 0.5초에 scale을 0으로 내려 복원해. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <이미지>에 turbulent-displace를 구현해. scale 4px, 지속 3000ms, 복원 500ms, baseFrequency 0.008에서 0.010, seed 3. 0.6초, 1.5초, 3.2초를 캡처해 윤곽이 일렁이는지, 3.2초에 원본과 픽셀 일치하는지 확인해.
```

### English · Claude Code
```text
Add turbulent displacement to <image>. Use SVG feTurbulence (baseFrequency 0.008 0.012, seed 3) with feDisplacementMap, raising scale from 0 to 4px over 0.6s with sine.inOut. Slowly shift baseFrequency linearly over 3s and drop scale to 0 in the last 0.5s to restore. Drive from a paused timeline.
```

### English · Codex
```text
Implement turbulent-displace on <image> in <file>: scale 4px, duration 3000ms, restore 500ms, baseFrequency 0.008 to 0.010, seed 3. Capture at 0.6s, 1.5s, and 3.2s to verify outlines waver and that 3.2s matches the original pixel for pixel.
```

예시 / Example: 난류 왜곡를 `.hero`에 적용해. / Apply Turbulent Displace to `.hero`.

## 적용 / Application

- HyperFrames: baseFrequency attr과 displacement scale을 tween해 노이즈가 흐르는 것처럼 보이게 한다. seed는 고정한다. 캡처 렌더러의 SVG 필터 지원은 사전에 스냅샷으로 확인한다
- ReelForge: 브리프에 displacePx, noiseSpeed, durationMs, restoreMs를 싣는다
- Scrolline Deck: 진행률 구간의 앞 80%는 변위 유지, 뒤 20%는 scale을 0으로 내린다. 스크럽 종료 지점에서 반드시 0이 되게 한다

조합 / Pair with: [웨이브 워프 · Wave Warp](../wave-warp/) · [도메인 워핑 · Domain Warping](../domain-warping/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [수면 굴절 · Water Surface Refraction](../water-refraction/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/thermal-distortion/registry-item.json) (Apache-2.0) · [pmndrs/react-spring](https://www.react-spring.dev/examples) (MIT) · [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/) (GSAP Standard License) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown) · [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
