# Nº 156 윤곽 추출 스타일 전환 · Edge Trace Stylization

> 클립 렌더 예정 / Clip rendering planned.

**사진의 면이 사라지고 경계선만 남은 선화로 바뀌는 윤곽 추출 전환**

The photo's surfaces vanish, leaving only edges as a line drawing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 설명 | 설명 영상, 발표, 제품 시연 | webgl |

다른 이름 / Also known as: Find Edges

## 선택 기준 / Selection

사진에서 구조로. 형태의 뼈대가 드러나 도해적이고 분석적인 인상을 준다 / From photo to structure. The skeleton of the form is exposed, giving a diagrammatic, analytical impression.

- 제품 사진에서 구조 도해 설명으로 넘어갈 때 / Move from a product photo to a structural explanation.
- 실사 이미지를 설계도나 스케치 스타일로 바꿔 보여 줄 때 / Turn a realistic image into a blueprint or sketch look.

좋은 예 / Good: 제품 사진이 0.8초 동안 색이 빠지며 윤곽선만 남은 선화로 바뀌고 그 위에 주석이 붙는다
나쁜 예 / Bad: 임계값이 너무 낮아 노이즈 선이 화면을 덮거나, 임계값이 높아 윤곽이 끊겨 형태를 알 수 없다
주의 / Avoid: edge threshold 0.08 미만 금지(노이즈 과다) · 선화 상태에서 최소 0.6초 정지해 읽게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.8s | 0.5~1.2s | 사진에서 선화까지 |
| 경계 임계값 | 0.15 | 0.1~0.25 | Sobel 출력 컷 |
| 혼합 | 0 to 1 | 0~1 | 원본색과 선화 mix |
| 선 색 | #111827 | 고정 | 흰 바탕 기준 |
| 선 두께 | 1.5px | 1~2.5px | Sobel 샘플 간격 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { m: 0 };
tl.to(u, { m: 1, duration: 0.8, ease: 'power2.inOut', onUpdate: draw }, 0.3);
// GLSL: float g = length(vec2(sobelX(tex, uv), sobelY(tex, uv)));
// float line = smoothstep(0.15, 0.30, g);
// col = mix(texture(tex, uv).rgb, mix(vec3(1.0), ink, line), m);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 사진에 윤곽 추출 전환을 넣어줘. 0.3초에 시작해 0.8초 동안 power2.inOut으로 원본에서 Sobel 경계선 그림(흰 바탕, 진한 남색 선 #111827)으로 mix가 0에서 1이 되게 해. 임계값은 smoothstep(0.15, 0.30)이고 선화 상태로 0.6초 정지한 뒤 주석 텍스트가 나오게 해.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 edge 셰이더를 추가해. g=length(vec2(sobelX,sobelY)), line=smoothstep(0.15,0.30,g), col=mix(tex, mix(white, ink, line), m). m은 0.3초부터 0.8초 power2.inOut로 0→1. 0.5초·0.9초·1.8초 캡처로 색이 빠지며 윤곽만 남고 노이즈 선이 화면을 덮지 않는지 확인해.
```

### English · Claude Code
```text
Add an edge trace transition to the photo in <target>. Starting at 0.3 seconds, mix from the original to a Sobel edge drawing (white paper, dark navy lines #111827) from 0 to 1 over 0.8 seconds with power2.inOut. Threshold smoothstep(0.15, 0.30). Hold the line drawing for 0.6 seconds, then bring in annotation text.
```

### English · Codex
```text
Add an edge shader to the image canvas in <file>. g=length(vec2(sobelX,sobelY)); line=smoothstep(0.15,0.30,g); col=mix(tex, mix(white, ink, line), m). Tween m 0 to 1 from 0.3 s over 0.8 s power2.inOut. Capture 0.5 s, 0.9 s and 1.8 s to confirm color drains, only outlines remain, and noise lines do not flood the frame.
```

예시 / Example: 윤곽 추출 스타일 전환를 `.hero`에 적용해. / Apply Edge Trace Stylization to `.hero`.

## 적용 / Application

- HyperFrames: m을 paused 타임라인에서 tween하고 Sobel은 원본 텍스처만 읽으니 상태가 없다. 텍스처 로드가 끝난 뒤 첫 프레임을 그린다
- ReelForge: 씬 브리프에 이미지 경로, 임계값 0.15, 전환 0.8초, 선 색과 종이색, 선화 정지 0.6초를 싣는다
- Scrolline Deck: 진행률 0~0.5에 m 0→1을 걸고 이후 홀드한다. 스크럽에서 선이 깜빡이지 않도록 임계 범위를 0.15~0.30으로 넓힌다

조합 / Pair with: [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [윤곽 디졸브 · Outline Dissolve](../outline-dissolve/) · [모프 전환 · Morph](../shape-morph/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/stylize-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
