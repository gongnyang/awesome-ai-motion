# Nº 450 홀로그램 광택 · Holographic sheen

> 클립 렌더 예정 / Clip rendering planned.

**표면 각도에 따라 색상이 무지개처럼 변하며 광택이 미끄러지는 홀로그램 카드 효과**

A rainbow sheen slides across a card as the surface angle changes, like a hologram.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 강조, 브랜딩, 분위기 | 웹 UI, 제품 시연, 숏폼 | webgl |

## 선택 기준 / Selection

희소하고 프리미엄한 물건이라는 인상을 주고, 표면의 입체감을 강조한다 / Suggests rarity and premium quality and emphasizes the depth of the surface.

- 카드, 배지, 리워드 같은 수집품형 UI에 프리미엄 느낌을 줄 때 / To give collectible-style UI like cards, badges, and rewards a premium feel
- 제품 표면이 빛을 받아 색이 변하는 모습을 보여줄 때 / To show a product surface changing color as it catches light

좋은 예 / Good: 카드가 3초 동안 천천히 기울어지며 표면의 무지개 광택이 왼쪽에서 오른쪽으로 한 번 지나간다
나쁜 예 / Bad: 채도를 높여 형광색 무지개가 카드 전체를 덮거나, 광택이 빠르게 깜빡여 글자 읽기를 방해한다
주의 / Avoid: 광택 밝기는 텍스트 영역에서 0.3 이하 · hue 회전 속도 0.3 초과 금지(번쩍임)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 3000ms | 2000~5000ms | 광택 한 번 통과 |
| hue 속도 | 0.15 | 0.08~0.3 | 초당 회전 비율 |
| Fresnel 강도 | 0.4 | 0.25~0.6 | 가장자리에서 세짐 |
| 광택 각도 | 25도 | 15~45도 | 대각선 밴드 |
| 기울임 | rotateY ±10도 | 6~14도 | 카드 자체 기울임 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
// fragment: h=fract(uv.x*1.2+uv.y*.6+uTime*.15)
vec3 rainbow=.5+.5*cos(6.283*(h+vec3(0,.33,.67)));
float band=smoothstep(.15,0.,abs(fract(dot(uv,vec2(.9,.4))-uProg)-.5)-.35);
float fres=pow(1.-dot(n,vec3(0,0,1)),3.);
col=mix(base,rainbow,(band*.5+fres*.4));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<카드>에 홀로그램 광택을 넣어줘. WebGL 또는 CSS conic-gradient로 무지개 hue 밴드를 만들고, 3초 동안 대각선 25도 밴드가 왼쪽에서 오른쪽으로 한 번 지나가게 해. hue 회전 속도 0.15, Fresnel 강도 0.4, 카드는 rotateY -10도에서 10도로 sine.inOut 기울임. 글자 영역의 광택 밝기는 0.3 이하로 제한하고 paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <카드>에 holographic-sheen을 구현해. 주기 3000ms, hue 속도 0.15, Fresnel 0.4, 밴드 각도 25도, rotateY ±10도. 0초, 1.5초, 3초를 캡처해 밴드가 이동하는지, 텍스트 영역 밝기가 과하지 않은지, 3초 뒤 카드가 원래 색으로 돌아오는지 확인해.
```

### English · Claude Code
```text
Add a holographic sheen to <card>. Build a rainbow hue band with WebGL or a CSS conic-gradient and sweep a 25-degree diagonal band from left to right once over 3s. Hue speed 0.15, Fresnel strength 0.4, and tilt the card rotateY from -10 to 10 degrees with sine.inOut. Keep sheen brightness over text at 0.3 or lower and drive it from a paused timeline.
```

### English · Codex
```text
Implement holographic-sheen on <card> in <file>: period 3000ms, hue speed 0.15, Fresnel 0.4, band angle 25 degrees, rotateY +/-10. Capture at 0s, 1.5s, and 3s to verify the band travels, text-area brightness stays moderate, and the card returns to its base color after 3s.
```

예시 / Example: 홀로그램 광택를 `.hero`에 적용해. / Apply Holographic sheen to `.hero`.

## 적용 / Application

- HyperFrames: 셰이더 uniform uProg와 카드 rotateY를 같은 paused 타임라인에서 sine.inOut으로 보간한다. hue 회전은 진행값 곱으로만 계산한다
- ReelForge: 브리프에 baseColor, sheenPeriod, hueSpeed, fresnel을 싣고 카드 크기 720x460px 등 고정 치수로 만든다
- Scrolline Deck: 스크롤 진행률을 광택 위치 uProg에 직접 매핑한다. 기울임은 ±10도 이하 ease-out 보간으로 제한한다

조합 / Pair with: [라이트 스윕 · Light Sweep](../light-sweep/) · [프레넬 림 · Fresnel Rim Sweep](../fresnel-rim/) · [뎁스 카드 플라이바이 · Depth Card Flyby](../depth-card-flyby/) · [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
