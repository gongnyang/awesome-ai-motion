# Nº 447 유리 굴절 · Glass Refraction

> 클립 렌더 예정 / Clip rendering planned.

**유리 패널 뒤 배경이 흐려지고 굴절되어 패널이 움직일 때 함께 일렁이는 효과**

A glass panel blurs and refracts the background behind it, rippling as the panel moves.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 강조, 브랜딩 | 웹 UI, 제품 시연, 발표 | webgl |

다른 이름 / Also known as: Frosted glass, 반투명 유리, Glass Refraction Motion, 유리 굴절 이동

## 선택 기준 / Selection

투명한 물질감과 깊이를 주고, 패널이 배경 위에 떠 있는 위계를 만든다 / Conveys transparent material and depth, and shows the panel floating above the background in the hierarchy.

- 카드나 패널이 배경 위에서 이동하며 유리처럼 보이게 할 때 / When a card or panel moves over a background and should read as glass
- UI 패널의 계층을 재질로 구분하고 싶을 때 / To separate UI layers through material instead of only color

좋은 예 / Good: 유리 패널이 1.5초 동안 오른쪽으로 이동하며 패널 안 배경이 6px 굴절되고 16px 흐려진 채 따라온다
나쁜 예 / Bad: blur를 40px 이상으로 올려 뒤가 뭉개지거나, 굴절이 커서 배경 그림이 깨져 보인다
주의 / Avoid: backdrop-filter 영역은 720px 이하 패널에만 쓴다(성능) · 굴절 변위 12px 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 1500ms | 1000~2200ms | 패널 이동 |
| blur | 16px | 10~24px | backdrop-filter |
| 굴절 변위 | 6px | 3~10px | feDisplacementMap scale |
| 패널 opacity | 0.12 | 0.08~0.2 | 흰색 채움 |
| 테두리 밝기 | 0.35 | 0.2~0.5 | 1px 상단 하이라이트 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
/* .glass{backdrop-filter:blur(16px) saturate(1.3);background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.35);border-radius:28px} */
tl.to('.glass',{x:640,duration:1.5,ease:'power3.inOut'},t)
 .to('#disp',{attr:{scale:6}},t) /* feDisplacementMap */
 .to('#disp',{attr:{scale:0}},t+1.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<패널>을 유리 재질로 만들어 오른쪽으로 640px 이동시켜줘. backdrop-filter blur(16px) saturate(1.3), 흰색 배경 opacity 0.12, 1px 테두리 opacity 0.35, radius 28px. 이동은 1.5초 power3.inOut, 이동 중 feDisplacementMap scale을 0에서 6px까지 올렸다 0으로 되돌려. paused 타임라인 하나로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <패널>에 glass-refraction을 적용해. blur 16px, 굴절 변위 6px, 이동 1500ms power3.inOut, 패널 opacity 0.12. 0초, 0.75초, 1.5초, 1.7초를 캡처해 이동 중 굴절이 보이고 정지 후 0이 되는지, backdrop-filter가 실제 렌더에 반영되는지 확인해.
```

### English · Claude Code
```text
Turn <panel> into glass and move it 640px right. Use backdrop-filter blur(16px) saturate(1.3), white fill at opacity 0.12, a 1px border at opacity 0.35, radius 28px. Move over 1.5s with power3.inOut, and ramp feDisplacementMap scale from 0 to 6px and back to 0 during the move. One paused timeline.
```

### English · Codex
```text
Apply glass-refraction to <panel> in <file>: blur 16px, refraction 6px, move 1500ms power3.inOut, panel opacity 0.12. Capture at 0s, 0.75s, 1.5s, and 1.7s to verify refraction is visible mid-move and returns to 0 at rest, and that backdrop-filter actually shows up in the render.
```

예시 / Example: 유리 굴절를 `.hero`에 적용해. / Apply Glass Refraction to `.hero`.

## 적용 / Application

- HyperFrames: backdrop-filter와 SVG feDisplacementMap 값을 paused 타임라인으로 구동한다. 프레임 캡처 렌더러에서 backdrop-filter가 지원되는지 먼저 스냅샷으로 확인한다
- ReelForge: 브리프에 blurPx, refractPx, panelOpacity, moveMs를 싣고 패널 크기를 고정해 워커가 같은 결과를 내게 한다
- Scrolline Deck: 스크롤 진행률로 패널 x를 옮기고 굴절 scale은 속도에 비례해 0~6으로 준다. 정지하면 굴절도 0이 된다

조합 / Pair with: [그림자 엘리베이션 · Shadow Elevation](../shadow-elevation/) · [프레넬 림 · Fresnel Rim Sweep](../fresnel-rim/) · [골 유리 · Fluted Glass Drift](../fluted-glass/) · [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/liquid-glass-widgets/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ios26-liquid-glass/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/macos-tahoe-liquid-glass/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
