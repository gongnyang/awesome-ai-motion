# Nº 136 플래시 전환 · Flash Transition

![플래시 전환 · Flash Transition](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**흰색 섬광이 화면을 덮는 순간 장면이 바뀌고 밝기가 돌아오는 전환**

A white flash covers the frame, the scene changes at the peak, and brightness recovers.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 주목 끌기 | 숏폼, 제품 시연, 설명 영상 | gsap |

다른 이름 / Also known as: Overexposure flash, 과노출 플래시, Flash Cut, 플래시 컷, flash-frame-subliminal, light-flash-join, Exposure flash

## 선택 기준 / Selection

충격과 강한 박자. 비트가 떨어지는 순간의 컷을 눈에 박아 준다 / Impact and a hard beat: the cut on the downbeat is burned into the eye.

- 음악 비트나 강조 문장에 맞춰 장면을 바꿀 때 / Change scenes on a music beat or emphasized line.
- 제품 공개나 타이틀 직전에 시선을 모을 때 / Gather attention just before a product reveal or title.

좋은 예 / Good: 비트 시점에 0.1초로 흰색이 100%까지 올라 1~2프레임 유지되고, 그 사이 장면이 바뀐 뒤 0.25초 동안 걷힌다
나쁜 예 / Bad: 섬광을 0.5초 이상 끌거나, 한 영상에서 5번 넘게 써서 눈이 피로하고 효과가 무뎌진다
주의 / Avoid: 섬광 유지 3프레임 초과 금지 · 영상 하나에 3회 이하로 쓴다(광과민 안전)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 상승 | 0.1s | 0.05~0.15s | in은 빠르게 |
| 정점 유지 | 2 프레임 | 1~3프레임 | 이 사이 장면 교체 |
| 복구 | 0.25s | 0.15~0.4s | out은 조금 길게 |
| 색 | #fff | #fff~브랜드 밝은 색 | 순백은 가장 세다 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.to('.flash', { opacity: 1, duration: 0.1, ease: 'power2.in' })
  .set('.a', { display: 'none' })
  .set('.b', { display: 'block' })
  .to('.flash', { opacity: 0, duration: 0.25, ease: 'power2.out' }, '+=0.067');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 넘어가는 지점에 플래시 전환을 넣어줘. 전면 #fff 오버레이가 0.1초 동안 opacity 1까지 올라가고 2프레임(30fps 기준 0.067초) 유지되는 사이 A를 숨기고 B를 보이게 한 뒤, 0.25초 동안 0으로 내려가게 해. 이징은 올릴 때 power2.in, 내릴 때 power2.out이고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 컷 지점에 flash transition을 적용해. #fff 오버레이 opacity 0에서 1 (0.1s), 0.067초 유지, 1에서 0 (0.25s)으로 두고 정점에서 장면을 교체한다. 0.1초 시점 캡처가 순백인지, 0.2초에 뒤 장면이 이미 보이는지, 0.45초에 오버레이가 사라졌는지 확인해.
```

### English · Claude Code
```text
Add a flash transition between <targetA> and <targetB>. A full-frame #fff overlay rises to opacity 1 over 0.1 seconds and holds for 2 frames (0.067s at 30fps), during which A is hidden and B shown, then falls to 0 over 0.25 seconds. Use power2.in going up, power2.out coming down, in one paused timeline.
```

### English · Codex
```text
Apply a flash transition at the cut in <file>. Tween a #fff overlay from opacity 0 to 1 (0.1s), hold 0.067s, then 1 to 0 (0.25s), swapping scenes at the peak. Capture at 0.1 seconds to confirm pure white, at 0.2 seconds to confirm the new scene is already visible, and at 0.45 seconds to confirm the overlay is gone.
```

예시 / Example: 플래시 전환를 `.hero`에 적용해. / Apply Flash Transition to `.hero`.

## 적용 / Application

- HyperFrames: 전면 오버레이 opacity만 움직이고 장면 교체를 set으로 정점에 둔다. set이 seek 시 되돌려지도록 타임라인에 반드시 넣는다
- ReelForge: 씬 워커 브리프에 beatSec, riseMs, holdFrames, decayMs를 실어 비트 시각에 정렬한다
- Scrolline Deck: 진행률 0.48~0.52 구간에서만 오버레이를 켠다. 스크롤을 정지했을 때 흰 화면이 남지 않도록 정점 구간을 아주 좁게 둔다

조합 / Pair with: [스트로브 플래시 · Strobe Flash](../strobe-flash/) · [줌 플래시 · Zoom Flash](../zoom-flash/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/flash-through-white/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/editorial-flash-overlay/registry-item.json) (Apache-2.0) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Overexposure.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-light.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
