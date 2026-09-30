# Nº 489 질감 채움 모션 · Animated Texture Fill

> 클립 렌더 예정 / Clip rendering planned.

**고정된 모양 마스크 안에서 질감 이미지가 움직이거나 프레임마다 교체되는 효과**

A texture image moves or swaps frame by frame inside a fixed shape mask.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 브랜딩, 강조 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Texture text fill, 글자 내부 질감 흐름, Text Image Fill, 글자 속 이미지, bg-clip-text-shape, Heatmap Logo Flow, 열지도 로고 흐름, Gem Smoke Mask, 보석 연무 마스크

## 선택 기준 / Selection

글자나 도형에 살아 있는 재질감을 부여하고, 모양은 고정한 채 내용물만 흐르게 한다 / Gives letters or shapes a living material feel while keeping the shape itself fixed.

- 큰 제목 글자 안에 영상이나 질감이 흐르게 할 때 / To make video or texture flow inside large title letters
- 도형 배지나 로고에 재질감을 입힐 때 / To give shaped badges or logos a material feel

좋은 예 / Good: 굵은 제목 글자 안에서 노을 질감 이미지가 2초 동안 오른쪽으로 320px 흐르고, 글자 윤곽은 움직이지 않는다
나쁜 예 / Bad: 얇은 글자에 질감을 채워 읽기 어렵거나, 질감 이동이 너무 빨라 글자 형태가 흐려 보인다
주의 / Avoid: 글자 굵기 700 미만에는 쓰지 않는다 · 질감 대비를 낮춰 글자 윤곽이 읽히도록 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 2000ms | 1200~3500ms | 질감 이동 |
| 이동 거리 | 320px | 160~600px | 마스크 안 background-position |
| 교체 간격 | 3프레임 | 2~4프레임 | 질감 프레임 교체 방식 |
| 배경 크기 | 150% | 130~200% | 마스크보다 크게 |
| 텍스트 굵기 | 800 | 700~900 | 가독성 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
/* .fill{font-weight:800;font-size:220px;background:url(tex.jpg);background-size:150%;-webkit-background-clip:text;color:transparent} */
tl.fromTo('.fill',{backgroundPositionX:'0px'},{backgroundPositionX:'-320px',duration:2,ease:'none'},t);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<제목> 글자 안에서 질감이 흐르게 해줘. font-weight 800, 220px, background-clip text에 노을 질감 이미지를 background-size 150%로 깔고, 2초 동안 background-position-x를 0에서 -320px로 linear 이동. 글자 윤곽은 고정, 텍스트는 그대로 읽히게 질감 대비를 낮춰. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <제목>에 texture-fill-motion을 적용해. 굵기 800, 220px, 배경 150%, 이동 320px, 2000ms linear. 0초, 1초, 2초를 캡처해 질감만 이동하고 글자 윤곽은 고정인지, background-clip이 렌더에 적용되는지, 글자가 읽히는지 확인해.
```

### English · Claude Code
```text
Make a texture flow inside the letters of <title>. Use font-weight 800 at 220px with background-clip text and a sunset texture image at background-size 150%, and move background-position-x from 0 to -320px over 2s, linear. Keep the outline fixed and lower texture contrast so the text stays readable. Drive it from a paused timeline.
```

### English · Codex
```text
Apply texture-fill-motion to <title> in <file>: weight 800, 220px, background 150%, shift 320px, 2000ms linear. Capture at 0s, 1s, and 2s to verify only the texture moves while letter outlines stay fixed, background-clip text renders, and the text is readable.
```

예시 / Example: 질감 채움 모션를 `.hero`에 적용해. / Apply Animated Texture Fill to `.hero`.

## 적용 / Application

- HyperFrames: background-clip text는 캡처 렌더러에서 지원되는지 스냅샷으로 먼저 확인한다. 위치 보간은 paused 타임라인의 선형 tween 하나면 충분하다
- ReelForge: 브리프에 textureSrc, shiftPx, durationMs, fontWeight를 싣는다. 질감이 영상이면 프레임 시크로 교체한다
- Scrolline Deck: 진행률을 background-position에 선형 매핑한다. ease는 none이 스크럽에서 가장 예측 가능하다

조합 / Pair with: [마스크 리빌 · Mask Reveal](../mask-reveal/) · [액체 금속 · Liquid Metal](../liquid-metal/) · [조명 애니메이션 · Animated Lighting](../animated-lighting/) · [키네틱 비트 · Kinetic Beats](../kinetic-beats/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/texture-mask-text/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-texture/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:music-to-video/references/template-catalog.md`) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#bg-clip-text-shape`) (Apache-2.0) · local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#held-text-strobe-burst`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
