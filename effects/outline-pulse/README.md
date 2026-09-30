# Nº 080 윤곽 펄스 · Outline Pulse

> 클립 렌더 예정 / Clip rendering planned.

**이미지나 물체의 경계선이 나타나고 두께와 밝기가 잠깐 커졌다 줄어드는 맥동**

A shape's edge line appears and briefly thickens and brightens before easing back.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 고급 | 강조, 주목 끌기 | 설명 영상, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Outline and Edge Pulse, 윤곽과 에지 맥박

## 선택 기준 / Selection

복잡한 화면에서 선택한 형태를 분명히 드러낸다 / Reveals the selected form clearly on a busy screen.

- 사진 속 제품·인물의 윤곽을 짚을 때 / When tracing the outline of a product or person in a photo
- 3D 물체나 아이콘을 선택했다는 표시를 줄 때 / When marking a 3D object or icon as selected

좋은 예 / Good: 윤곽이 강도 0에서 0.8로 올라가고 두께가 1px에서 3px로 커졌다가 1.4초에 1px로 돌아온다
나쁜 예 / Bad: 윤곽이 지나치게 두꺼워 형태가 뭉개지거나, 배경과 같은 색이라 보이지 않는다
주의 / Avoid: 두께 4px 초과 금지 · 윤곽 색은 배경과 3:1 이상 · 선택된 대상만 윤곽

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 1.4s | 1.0~2.0s | 상승과 복귀 합산 |
| 두께 | 1→3px | 1~4px | 1920x1080 기준 |
| 강도 | 0→0.8 | 0.5~1.0 | 알파 또는 밝기 |
| 이징 | sine.inOut | sine~power2.inOut | 맥동 |

## 구현 / Implementation (GSAP)

```js
tl.to('.shape', { attr: { 'stroke-width': 3 }, strokeOpacity: 0.8, duration: 0.7, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 윤곽 path에 윤곽 펄스를 넣어줘. 0.4초부터 0.7초 동안 stroke-width 1에서 3px, strokeOpacity 0에서 0.8로 sine.inOut으로 올라갔다가 같은 시간에 1px, 0으로 돌아와. 색은 <강조색>, 배경과 3:1 이상. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 outline-pulse를 적용해. .shape의 stroke-width 1→3, strokeOpacity 0→0.8, 0.7s, sine.inOut, yoyo true, repeat 1, position 0.4. 0.4초·1.1초·1.9초를 캡처해 최대 두께 3px, 종료 시 1px인지와 윤곽 대비 3:1을 확인해.
```

### English · Claude Code
```text
Add an outline pulse to the <target> outline path with GSAP. From 0.4s over 0.7s raise stroke-width 1 to 3px and strokeOpacity 0 to 0.8 with sine.inOut, then return to 1px and 0 in the same time. Color <accent>, at least 3:1 against the background. Paused timeline.
```

### English · Codex
```text
Apply outline-pulse to <target> in <file>. Tween .shape stroke-width 1 to 3 and strokeOpacity 0 to 0.8, 0.7s, sine.inOut, yoyo true, repeat 1, position 0.4. Capture at 0.4s, 1.1s and 1.9s to check max width 3px, 1px at the end, and outline contrast 3:1.
```

예시 / Example: 윤곽 펄스를 `.hero`에 적용해. / Apply Outline Pulse to `.hero`.

## 적용 / Application

- HyperFrames: SVG 윤곽 path의 stroke-width와 strokeOpacity를 tween한다. 이미지 윤곽은 미리 추출한 path를 사용해 결정론을 보장
- ReelForge: 브리프에 윤곽 path나 마스크, 두께 범위, 색, 길이를 싣는다
- Scrolline Deck: scrub에서는 진행률 0~0.5에 굵어지고 0.5~1에 얇아지는 매핑. ease-out

조합 / Pair with: [블룸 펄스 · Bloom Pulse](../bloom-pulse/) · [테두리 리빌 · Border Reveal](../border-reveal/) · [스포트라이트 · Spotlight](../spotlight/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_outline) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_sobel) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
