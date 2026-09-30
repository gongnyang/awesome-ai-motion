# Nº 462 배럴 왜곡 · Barrel Lens Warp

> 클립 렌더 예정 / Clip rendering planned.

**화면 가장자리의 직선이 휘며 전체가 광각 렌즈처럼 부풀어 보이는 배럴 왜곡**

Straight lines at the screen edge curve and the whole image bulges like a wide-angle lens.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 전환 | 숏폼, 제품 시연, 설명 영상 | webgl |

다른 이름 / Also known as: 배럴 렌즈 워프

## 선택 기준 / Selection

넓은 시야와 카메라 렌즈의 존재감. 화면이 물리적인 유리를 통과한 듯한 인상 / The presence of a wide field of view and a camera lens. As if the image passed through physical glass.

- 화면 녹화나 UI 스크린샷에 렌즈 기운을 얹을 때 / Add a lens feel to a screen recording or UI screenshot.
- 장면 전환 직전 부풀어 오르는 광각 효과를 줄 때 / Add a bulging wide-angle effect just before a transition.

좋은 예 / Good: 왜곡 계수가 1.6초 동안 0에서 0.18까지 올라 가장자리 직선이 바깥쪽으로 휘며 화면이 부푼다
나쁜 예 / Bad: 계수가 0.4를 넘어 가장자리가 잘려 나가거나 글자가 심하게 휘어 읽을 수 없다
주의 / Avoid: 왜곡 계수 0.25 초과 금지 · 텍스트가 가장자리에 있는 화면에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.6s | 1~2.4s | 0에서 최대까지 |
| 왜곡 계수 | 0 to 0.18 | 0.05~0.25 | r2에 비례 |
| 중심 | (0.5, 0.5) | 고정 | UV 기준 |
| 줌 보정 | 1.08 | 1.03~1.15 | 가장자리 잘림 방지 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { k: 0 };
tl.to(u, { k: 0.18, duration: 1.6, ease: 'power3.inOut', onUpdate: draw }, 0.2);
// GLSL: vec2 p = uv - 0.5; float r2 = dot(p, p);
// vec2 q = p * (1.0 + k * r2) / zoom; col = texture(tex, q + 0.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 배럴 왜곡을 넣어줘. 0.2초에 시작해 1.6초 동안 power3.inOut으로 왜곡 계수를 0에서 0.18까지 올려. UV는 p=uv-0.5, q=p*(1+k*dot(p,p))/1.08로 변환해 가장자리 잘림을 줌 보정으로 막고, 텍스트는 화면 중앙 60% 안에 두어 읽히게 해.
```

### 한국어 · Codex
```text
<파일>의 화면 캔버스에 barrel 셰이더를 추가해. p=uv-0.5, r2=dot(p,p), q=p*(1+k*r2)/1.08, 텍스처 clamp. k는 0.2초부터 1.6초 power3.inOut로 0→0.18. 0.5초·1.2초·2.4초 캡처로 가장자리 직선이 바깥으로 휘고 검은 여백이 생기지 않는지 확인해.
```

### English · Claude Code
```text
Add a barrel warp to <target>. Starting at 0.2 seconds, raise the distortion coefficient from 0 to 0.18 over 1.6 seconds with power3.inOut. Convert UVs with p=uv-0.5, q=p*(1+k*dot(p,p))/1.08 so the zoom correction prevents edge cropping, and keep text within the central 60 percent so it stays readable.
```

### English · Codex
```text
Add a barrel shader to the screen canvas in <file>. p=uv-0.5; r2=dot(p,p); q=p*(1+k*r2)/1.08; clamp the texture. Tween k 0 to 0.18 from 0.2 s over 1.6 s power3.inOut. Capture 0.5 s, 1.2 s and 2.4 s to confirm edge lines curve outward and no black margins appear.
```

예시 / Example: 배럴 왜곡를 `.hero`에 적용해. / Apply Barrel Lens Warp to `.hero`.

## 적용 / Application

- HyperFrames: k를 paused 타임라인에서 tween하고 셰이더는 k만 받는다. 텍스처 wrap은 clamp로 두어 가장자리 반복을 막는다
- ReelForge: 씬 브리프에 최대 계수 0.18, 1.6초, 줌 보정 1.08, 중심을 싣는다
- Scrolline Deck: k를 진행률에 매핑한다. 스크럽 중 가장자리 픽셀 보간이 거칠어 보이므로 linear 필터와 밉맵을 켠다

조합 / Pair with: [어안 렌즈 확대 · Fisheye Lens](../fisheye-lens/) · [렌즈 왜곡 줌 · Lens Distortion Zoom](../lens-distortion-zoom/) · [구면화 · Spherize](../spherize/) · [원근 평면화 · Perspective Flatten](../perspective-flatten/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/lens-distortion) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
