# Nº 457 비단 주름 흐름 · Silk Flow

> 클립 렌더 예정 / Clip rendering planned.

**광택 있는 천 같은 주름이 천천히 움직이며 빛과 그림자가 흐르는 배경 질감**

Glossy cloth-like folds drift slowly while light and shadow flow along them.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 브랜딩 | 제품 시연, 발표, 웹 UI | webgl |

다른 이름 / Also known as: Silk, Ribbons

## 선택 기준 / Selection

부드럽고 고급스러운 재질감. 서두르지 않는 여유와 프리미엄 인상 / A soft, premium material feel. It reads as unhurried and luxurious.

- 럭셔리·뷰티·핀테크처럼 차분하고 고급스러운 브랜드 배경 / Backgrounds for calm, high-end brands such as luxury, beauty or fintech.
- 제품 소개 화면의 뒤를 부드러운 빛의 결로 채울 때 / Fill the space behind a product intro with a gentle grain of light.

좋은 예 / Good: 진한 자주색 비단 주름이 8초에 걸쳐 천천히 이동하고 하이라이트가 결을 따라 흘러 앞의 제품이 돋보인다
나쁜 예 / Bad: 주름 대비가 커서 물결 무늬가 요란하거나, 이동이 빨라 물속 같은 인상이 되어 고급감이 사라진다
주의 / Avoid: 대비 0.6 초과 금지 · 속도 0.3 초과 금지(느릴수록 고급스럽다)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 8s | 6~12s | 루프 한 바퀴 |
| 주름 밀도 | 8 | 5~12 | 방향성 노이즈 주파수 |
| 속도 | 0.2 | 0.1~0.3 | UV 이동 배율 |
| 대비 | 0.4 | 0.25~0.55 | 명암 폭 |
| 하이라이트 | 0.5 | 0.3~0.7 | 스페큘러 세기 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 8, duration: 8, ease: 'none', onUpdate: draw }, 0);
// GLSL: float w = sin(dot(uv, dir)*8.0 + fbm(uv*1.5 + t*0.05)*4.0 + t*0.2);
// vec3 col = base * (0.6 + contrast * w) + spec * pow(max(w, 0.0), 6.0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 비단 주름 흐름을 넣어줘. 진한 자주색 바탕에 방향성 노이즈 주름을 주파수 8, 속도 0.2, 대비 0.4로 그리고 주름 마루에 밝은 하이라이트를 얹어. 8초에 걸쳐 일정한 속도로 천천히 흐르게(ease none) 하고, 제품 이미지가 놓일 오른쪽 40%는 대비를 낮춰줘. 시간은 paused 타임라인 값 하나로만 구동해.
```

### 한국어 · Codex
```text
<파일>의 배경 캔버스에 silk 셰이더를 추가해. w = sin(dot(uv,dir)*8 + fbm(uv*1.5+t*0.05)*4 + t*0.2), 색 = base*(0.6+0.4*w) + spec*pow(max(w,0),6). t는 8초 선형 tween. 0초·4초·8초를 캡처해 주름이 부드럽게 이동하고 오른쪽 40% 영역의 대비가 낮은지 확인해.
```

### English · Claude Code
```text
Add a silk flow to the background of <target>. Deep purple base with directional-noise folds at frequency 8, speed 0.2, contrast 0.4, and a bright highlight on the fold crests. Flow at constant speed (ease none) over 8 seconds, and lower the contrast in the right 40% where the product image sits. Drive time with a single paused-timeline value.
```

### English · Codex
```text
Add a silk shader to the background canvas in <file>. w = sin(dot(uv,dir)*8 + fbm(uv*1.5+t*0.05)*4 + t*0.2); color = base*(0.6+0.4*w) + spec*pow(max(w,0),6). Tween t linearly over 8 s. Capture 0 s, 4 s and 8 s to confirm smooth fold drift and low contrast in the right 40%.
```

예시 / Example: 비단 주름 흐름를 `.hero`에 적용해. / Apply Silk Flow to `.hero`.

## 적용 / Application

- HyperFrames: 시간 t를 ease none으로 선형 진행해 속도를 일정하게 둔다. 셰이더는 t만의 함수로 짜서 seek와 프레임 캡처가 일치하게 한다
- ReelForge: 씬 워커 브리프에 기본색, 하이라이트색, 주기 8초, 대비 0.4를 넣고 배경 전용 씬으로 분리한다
- Scrolline Deck: 진행률에 t를 선형 매핑하되 총 이동량을 작게 잡아 스크롤 속도에 상관없이 느긋하게 보이게 한다

조합 / Pair with: [액체 금속 · Liquid Metal](../liquid-metal/) · [메시 그라디언트 흐름 · Mesh Gradient Flow](../mesh-gradient-flow/) · [홀로그램 광택 · Holographic sheen](../holographic-sheen/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
