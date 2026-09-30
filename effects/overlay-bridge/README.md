# Nº 187 오버레이 브리지 · Overlay Bridge

> 클립 렌더 예정 / Clip rendering planned.

**같은 전면 그래픽이 컷 앞뒤 장면 위를 끊기지 않고 지나가 두 장면을 연결한다**

The same foreground graphic sweeps across the scenes before and after a cut, tying them together.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 브랜딩 | 설명 영상, 제품 시연, 발표 | gsap |

## 선택 기준 / Selection

같은 그래픽이 컷 앞뒤를 끊김 없이 지나가 두 장면을 하나로 묶는다 / Keeps continuity between brand and scenes.

- 로고나 브랜드 도형이 화면을 가로지르는 동안 뒤의 장면을 컷할 때 / When cutting the scene behind a logo or brand shape crossing the screen
- 시리즈 영상의 코너 전환에 고정 오버레이를 쓸 때 / When using a fixed overlay for section transitions in a series

좋은 예 / Good: 로고 도형이 500ms 동안 화면 왼쪽에서 오른쪽으로 지나가며, 도형이 화면 중앙을 덮는 250ms 시점에 뒤 장면을 컷한다
나쁜 예 / Bad: 오버레이가 컷보다 먼저 지나가 연결이 안 되거나, 컷 시점에 도형이 화면을 덮지 못해 컷이 그대로 보인다
주의 / Avoid: 컷은 오버레이가 화면 중앙을 완전히 덮는 시점에 정확히 맞춘다 · 오버레이는 장면 색과 대비되는 색으로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 500ms | 400~700ms | power2.inOut |
| 컷 시점 | 250ms | 오버레이 중앙 덮음 | +0ms 오프셋 |
| 오버레이 폭 | 화면의 120% | 110~140% | 완전히 덮음 |
| 이동 | x -2300에서 +2300 |  | 1920px 기준 |
| 브랜드 색 | 장면과 대비 |  | 고정 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.bridge', { x: -2300 }, { x: 2300, duration: 0.5, ease: 'power2.inOut' }, 0);
tl.set('.prev', { autoAlpha: 0 }, 0.25);
tl.set('.next', { autoAlpha: 1 }, 0.25);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 오버레이 브리지를 넣어줘. 폭 화면의 120%인 로고 도형(.bridge)이 x -2300에서 2300까지 0.5초 power2.inOut으로 지나가게 하고, 도형이 화면 중앙을 덮는 0.25초에 .prev를 숨기고 .next를 표시해. 오버레이는 두 장면 위 레이어에 독립적으로 두고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 오버레이 브리지를 구현해. .bridge x -2300에서 2300, 0.5초 power2.inOut, 0.25초에 .prev 숨김 및 .next 표시. 0.1초, 0.25초, 0.4초 시점을 캡처해 0.25초 프레임에서 오버레이가 화면을 완전히 덮고 있는지, 컷 흔적이 보이지 않는지 확인해.
```

### English · Claude Code
```text
Add an Overlay Bridge to <target>. A logo shape (.bridge, width 120% of frame) travels from x -2300 to 2300 over 0.5s with power2.inOut. At 0.25s, when it fully covers the frame center, hide .prev and show .next. Keep the overlay on its own layer above both scenes, on a paused, seekable timeline.
```

### English · Codex
```text
Implement Overlay Bridge in <file>. .bridge x -2300 to 2300, 0.5s power2.inOut; at 0.25s hide .prev and show .next. Capture at 0.1s, 0.25s, and 0.4s to confirm the overlay fully covers the frame at 0.25s and that no trace of the cut is visible.
```

예시 / Example: 오버레이 브리지를 `.hero`에 적용해. / Apply Overlay Bridge to `.hero`.

## 적용 / Application

- HyperFrames: 오버레이를 SVG 레이어로 독립시켜 두 장면 위에서 움직이고, 컷은 tl.set으로 오버레이 중앙 도달 시각(0.25초)에 정확히 맞춘다
- ReelForge: 씬 워커 브리프에 오버레이 자산, 폭 120%, 컷 시점 250ms를 싣는다
- Scrolline Deck: scrub에서는 오버레이 x를 진행률에 선형으로, 컷은 진행률 0.5에서 교체한다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [프레임 테두리 전환 · Frame Border Transition](../frame-border-transition/) · [줌 플래시 · Zoom Flash](../zoom-flash/)

출처 / Sources: [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/transitionseries) (Remotion License) · [remotion-dev/remotion](https://github.com/remotion-dev/remotion/tree/main/packages/template-overlay) (Remotion License)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
