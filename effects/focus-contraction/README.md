# Nº 078 초점 원판 축소 · Focus Contraction

> 클립 렌더 예정 / Clip rendering planned.

**넓고 반투명한 원판이 목표 위치로 줄어들며 사라져 정확한 지점을 알려 주는 신호**

A wide, translucent disk shrinks onto the target and vanishes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 주목 끌기, 강조 | 설명 영상, 제품 시연, 웹 UI | svg |

다른 이름 / Also known as: Contracting focus disk, 축소 원판 초점 신호, FocusOn

## 선택 기준 / Selection

지금 볼 곳은 여기라는 조준. 바깥에서 안으로 시선이 모인다 / A sighting cue that says look here. Attention converges from outside in.

- 화면 안의 작은 버튼·수치를 정확히 짚어야 할 때 / When a small button or number must be pinpointed
- 긴 화면 전환 직후 시선을 목표로 모을 때 / When pulling the eye to the target after a long screen change

좋은 예 / Good: 반지름 400px, opacity 0.25 원판이 0.7초 동안 목표 위치의 반지름 0으로 줄어들며 사라진다
나쁜 예 / Bad: 원판 불투명도가 0.6 이상이라 뒤 내용을 가리거나, 목표가 원판 중심이 아니다
주의 / Avoid: 시작 opacity 0.35 이하 · 원판 중심을 목표 중심에 정확히 맞춘다 · 반복 금지(1회)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 0.7s | 0.5~1.0s | 수축과 소멸 합산 |
| 시작 반지름 | 400px | 250~600px | 1920x1080 기준 |
| opacity | 0.25→0 | 0.15~0.35 | 가려짐 방지 |
| 이징 | power2.out | power2~power3.out | 목표 근처에서 느리게 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.focus', { attr: { r: 400 }, opacity: 0.25 }, { attr: { r: 0 }, opacity: 0, duration: 0.7, ease: 'power2.out' }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 위치에 초점 원판 축소를 넣어줘. 0.4초부터 0.7초 동안 원판(cx, cy는 <좌표>) 반지름을 400에서 0으로, opacity를 0.25에서 0으로 power2.out으로 줄여. 원판 색은 <강조색>. 반복은 없고 paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 focus-contraction을 적용해. #focus에 cx, cy를 목표 좌표로 두고 fromTo(r 400→0, opacity 0.25→0, 0.7s, power2.out, position 0.4). 0.4초·0.75초·1.2초를 캡처해 원판이 목표 중심으로 수렴하는지, 1.2초에 화면에 남지 않는지 확인해.
```

### English · Claude Code
```text
Add a focus contraction at <target> with GSAP. From 0.4s over 0.7s shrink a disk (cx, cy at <coordinates>) from radius 400 to 0 and opacity 0.25 to 0 with power2.out. Disk color <accent>. No repeat, on a paused timeline.
```

### English · Codex
```text
Apply focus-contraction to <target> in <file>. Set cx and cy of #focus to the target center and fromTo (r 400 to 0, opacity 0.25 to 0, 0.7s, power2.out, position 0.4). Capture at 0.4s, 0.75s and 1.2s to check the disk converges on the target center and is gone by 1.2s.
```

예시 / Example: 초점 원판 축소를 `.hero`에 적용해. / Apply Focus Contraction to `.hero`.

## 적용 / Application

- HyperFrames: 원판 cx, cy를 목표 좌표로 미리 지정한다. fromTo로 시작 상태를 정의해 paused seek 시 튀지 않게 한다
- ReelForge: 브리프에 목표 좌표, 시작 반지름, 길이를 싣고 색은 브랜드 강조색으로 지정한다
- Scrolline Deck: scrub에서는 진행률 0~0.5에 수축하고 0.5 이후 opacity 0으로 둔다. 되감기에서도 같은 궤적

조합 / Pair with: [스포트라이트 · Spotlight](../spotlight/) · [둘레선 강조 · Circumscribe](../circumscribe/) · [확대 콜아웃 · Zoom Callout](../zoom-callout/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
