# Nº 176 루마 와이프 · Luma Wipe

> 클립 렌더 예정 / Clip rendering planned.

**장면이나 흑백 보조 이미지의 밝기 순서에 따라 영역들이 다음 장면으로 교체되는 와이프**

Regions swap to the next scene in the brightness order of the footage itself or a grayscale helper image.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 강조 | 설명 영상, 발표, 숏폼 | webgl |

다른 이름 / Also known as: Luma map wipe, 휘도 맵 와이프, Luma image dissolve, 영상 휘도 순서 디졸브, Gradient Wipe, 그라디언트 와이프

## 선택 기준 / Selection

원하는 그림이나 질감의 순서로 장면이 열린다. 방송 그래픽의 정통 전환 / Scenes open in whatever pattern or texture you choose: a classic broadcast transition.

- 로고 모양, 텍스처, 그라디언트 순서로 장면을 열고 싶을 때 / Open a scene in the shape of a logo, texture, or gradient.
- 브랜드 패턴으로 오프닝 전환을 디자인할 때 / Design an opening transition from a brand pattern.

좋은 예 / Good: 0.85초 동안 임계값이 0에서 1로 올라가며 보조 명도 맵의 어두운 곳부터 뒤 장면이 열리고 경계는 softness 0.08로 부드럽다
나쁜 예 / Bad: 명도 맵이 대비가 낮아 전환이 전체가 한꺼번에 일어나거나, softness 0이라 톱니 경계가 튄다
주의 / Avoid: 명도 맵은 전체 명도 범위 0~1을 쓴다(대비 조정) · softness 0.03 미만 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.85s | 0.6~1.4s | 임계값 0에서 1 |
| softness | 0.08 | 0.03~0.2 | 경계 폭 |
| 명도 맵 | 1장 | 그라디언트/텍스처/로고 | 흑백 |
| 반전 | false |  | 밝은 곳부터 열기 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 1, duration: 0.85, ease: 'power1.inOut', onUpdate: () => {
  // GLSL: m = smoothstep(t - 0.08, t, luma(map)); out = mix(B, A, m)
  shader.set('threshold', u.t * 1.08 - 0.04);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 루마 와이프를 만들어줘. <맵 파일>의 명도를 기준으로 임계값을 0.85초 동안 power1.inOut으로 0에서 1로 올려, 어두운 픽셀부터 B가 열리게 해. 경계 softness는 0.08, 임계값은 GSAP 상태 객체에서 읽어 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 luma wipe를 적용해. threshold를 0에서 1로 0.85s power1.inOut 보간하고 셰이더에서 m = smoothstep(t-0.08, t, luma(map))으로 A와 B를 mix한다. 0.3초, 0.5초, 0.7초 캡처로 맵의 어두운 곳부터 열리는지, 0.85초에 B 전체인지 확인해.
```

### English · Claude Code
```text
Build a luma wipe from <targetA> to <targetB>. Using the luminance of <mapFile>, raise a threshold from 0 to 1 over 0.85 seconds with power1.inOut so B opens from the darkest pixels first. Edge softness 0.08. Read the threshold from a GSAP state object in one paused timeline that seeks.
```

### English · Codex
```text
Apply a luma wipe in <file>. Tween threshold 0 to 1 over 0.85s with power1.inOut and mix A and B with m = smoothstep(t-0.08, t, luma(map)) in the shader. Capture at 0.3, 0.5, and 0.7 seconds to confirm it opens from the map's dark areas first, and at 0.85 seconds to confirm the frame is fully B.
```

예시 / Example: 루마 와이프를 `.hero`에 적용해. / Apply Luma Wipe to `.hero`.

## 적용 / Application

- HyperFrames: 임계값 하나만 타임라인 값으로 셰이더에 넘긴다. 명도 맵 파일을 프로젝트에 포함해 경로를 고정한다
- ReelForge: 씬 워커 브리프에 mapAsset, softness, invert, durationMs를 싣는다
- Scrolline Deck: 진행률 p를 임계값으로 직결한다. 스크롤을 멈췄을 때 반쯤 열린 패턴이 남아도 자연스럽도록 softness를 넉넉히 둔다

조합 / Pair with: [색차 디졸브 · Color Distance Dissolve](../color-distance-dissolve/) · [마스크 리빌 · Mask Reveal](../mask-reveal/) · [루미넌스 멜트 · Luminance Melt](../luminance-melt/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/luma.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/transition-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
