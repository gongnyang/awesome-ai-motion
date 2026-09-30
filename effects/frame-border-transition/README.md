# Nº 160 프레임 테두리 전환 · Frame Border Transition

> 클립 렌더 예정 / Clip rendering planned.

**두꺼운 프레임이나 테두리가 이동하거나 커져 컷을 가리고 새 화면을 둘러싼다**

A thick frame or border moves or grows to hide the cut and enclose the new screen.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 브랜딩 | 설명 영상, 제품 시연, 발표 | svg |

## 선택 기준 / Selection

두꺼운 테두리가 움직이거나 커져 컷을 가리고 새 화면을 감싼다. 브랜드 프레임 안에서 장면이 바뀐다 / Makes viewers feel scenes change inside a branded frame.

- 브랜드 색 프레임이 화면을 채우다 열리며 다음 장면이 들어올 때 / When a brand-colored frame fills the screen and opens onto the next scene
- 시리즈 영상에서 같은 프레임 모티프로 코너 전환을 통일할 때 / To unify corner transitions in a series with one frame motif

좋은 예 / Good: 80px 두께의 브랜드 색 테두리가 650ms 동안 안쪽으로 조여들어 중앙 컷을 가린 뒤, 다시 바깥으로 벌어지며 새 장면을 감싼다
나쁜 예 / Bad: 테두리가 컷 시점에 화면을 덮지 못해 컷이 그대로 보이거나, 두께가 20px 미만이라 프레임으로 읽히지 않는다
주의 / Avoid: 컷 시점에 테두리가 화면을 완전히 덮게 한다 · 브랜드 색 하나만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 650ms | 500~850ms | easeInOutCubic |
| 두께 | 80px | 60~120px | 최종 프레임 두께 |
| 컷 시점 | 325ms |  | 테두리 덮음 |
| 색 | 브랜드 단색 |  | 대비 확보 |
| 모서리 반경 | 0 또는 24px |  | 브랜드 문법 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.frame-fill', { scale: 1.6, opacity: 1 }, { scale: 1, duration: 0.325, ease: 'power3.in' }, 0);
tl.set('.prev', { autoAlpha: 0 }, 0.325).set('.next', { autoAlpha: 1 }, 0.325);
tl.to('.frame-fill', { scale: 1.6, duration: 0.325, ease: 'power3.out' }, 0.325);
tl.to('.frame-ring', { borderWidth: 80, duration: 0.325, ease: 'power3.out' }, 0.325);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 프레임 테두리 전환을 넣어줘. 브랜드 색 사각 테두리(.frame-fill)가 scale 1.6에서 1로 0.325초 power3.in으로 조여들어 화면을 덮고, 0.325초에 장면을 교체한 뒤 다시 scale 1.6으로 0.325초 power3.out으로 벌어져 새 화면을 감싸게 해. 최종 테두리 두께는 80px. paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 프레임 테두리 전환을 구현해. .frame-fill scale 1.6에서 1 (0.325초 power3.in), 0.325초에 장면 교체, scale 1에서 1.6 (0.325초 power3.out), .frame-ring borderWidth 80. 0.16초, 0.325초, 0.49초, 0.65초 시점을 캡처해 0.325초에 화면이 완전히 덮이는지, 0.65초에 80px 프레임이 남는지 확인해.
```

### English · Claude Code
```text
Add a Frame Border Transition to <target>. A brand-colored rectangular border (.frame-fill) closes in from scale 1.6 to 1 over 0.325s with power3.in, covering the frame. Swap scenes at 0.325s, then expand it back to scale 1.6 over 0.325s with power3.out, leaving an 80px border around the new scene. Paused, seekable timeline.
```

### English · Codex
```text
Implement Frame Border Transition in <file>. .frame-fill scale 1.6 to 1 (0.325s power3.in), swap scenes at 0.325s, then scale 1 to 1.6 (0.325s power3.out); .frame-ring borderWidth 80. Capture at 0.16s, 0.325s, 0.49s, and 0.65s to confirm full coverage at 0.325s and an 80px frame left at 0.65s.
```

예시 / Example: 프레임 테두리 전환를 `.hero`에 적용해. / Apply Frame Border Transition to `.hero`.

## 적용 / Application

- HyperFrames: 프레임은 SVG rect의 stroke-width와 scale을 보간한다. 컷은 프레임이 완전히 화면을 덮는 0.325초에 tl.set
- ReelForge: 씬 워커 브리프에 브랜드 색 hex, 두께 80px, 컷 시점 325ms를 싣는다
- Scrolline Deck: scrub에서는 진행률 0~0.5에 조여들기, 0.5~1에 벌어짐. 컷은 0.5에서 교체하고 프레임은 ease-out만 쓴다

조합 / Pair with: [오버레이 브리지 · Overlay Bridge](../overlay-bridge/) · [마스크 전환 · Shape Mask Transition](../iris-mask/) · [와이프 · Wipe](../wipe/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
