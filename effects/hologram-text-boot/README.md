# Nº 628 홀로그램 부팅 · Hologram Text Boot

> 클립 렌더 예정 / Clip rendering planned.

**아래 발광점에서 투영 광원이 켜지고 위로 훑는 빛이 글자판을 만들어 내는 홀로그램 부팅**

A projection cone ignites from a glowing point and a scanning light builds a text panel upward.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 고급 | 분위기, 주목 끌기, 브랜딩 | 제품 시연, 숏폼, 설명 영상 | canvas |

다른 이름 / Also known as: Hologram boot

## 선택 기준 / Selection

가상의 정보가 공간 안에서 켜지는 느낌. 미래적이고 기술적인 도입부가 된다 / Virtual information switching on in space: futuristic and technical.

- AI·기술 제품의 시스템 부팅형 오프닝 / System-boot openings for AI or tech products
- 대시보드나 결과 패널을 공간 UI처럼 띄울 때 / Floating dashboards or result panels like spatial UI

좋은 예 / Good: 바닥 광원이 200ms에 켜지고 원뿔이 뻗으며 600ms 동안 위로 훑는 주사선을 따라 글자판이 채워지고 마지막에 1프레임 색 어긋남이 생긴다
나쁜 예 / Bad: 주사선과 색 어긋남이 계속 남아 글자가 흔들려 읽히지 않는다
주의 / Avoid: 색 어긋남은 1프레임만, 2px 이하로 둔다 · 배경이 밝은 화면에서는 쓰지 않는다. 발광은 어두운 배경에서만 보인다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 1.0s | 0.8~1.4s | 광원 켜짐부터 안정 |
| 주사 | 0.6s | 0.4~0.8s | 아래에서 위로 clip-path |
| 간섭 | 1프레임 | 1~2 | RGB 채널 2px 어긋남 |
| 원뿔 opacity | 0.25 | 0.15~0.35 | 광원에서 위로 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.src', {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.2, ease:'power2.out'}, 0.1)
  .fromTo('.cone', {opacity:0}, {opacity:0.25, duration:0.2}, 0.25)
  .fromTo('.panel', {clipPath:'inset(100% 0 0 0)'}, {clipPath:'inset(0% 0 0 0)', duration:0.6, ease:'none'}, 0.4)
  .set('.panel', {textShadow:'2px 0 #f0f, -2px 0 #0ff'}, 1.0)
  .set('.panel', {textShadow:'none'}, 1.033);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 패널을 홀로그램 부팅으로 띄워줘. 0.1초에 바닥 광원이 켜지고, 0.25초에 원뿔(opacity 0.25)이 뻗고, 0.4초부터 0.6초 동안 clip-path로 아래에서 위로 글자판이 채워져. 마지막에 텍스트 색 어긋남(시안/마젠타 2px)을 딱 1프레임만 넣고 이후 고정해.
```

### 한국어 · Codex
```text
<파일>에 hologram text boot를 적용해. .src scale 0에서 1(0.2초), .cone opacity 0.25, .panel clipPath inset(100% 0 0 0)에서 inset(0)을 0.4초부터 0.6초 linear, 1.0초에 textShadow 색 어긋남을 1프레임 set 후 해제. 0.2초·0.7초·1.03초·1.5초를 캡처해 광원, 부분 채움, 색 어긋남 1프레임, 안정 상태를 확인해.
```

### English · Claude Code
```text
Boot the panel in <target> as a hologram: a floor light ignites at 0.1s, a cone (opacity 0.25) extends at 0.25s, and from 0.4s a 0.6s bottom-to-top clip-path scan fills the panel. Add a one-frame cyan/magenta 2px text offset at the end, then lock it stable.
```

### English · Codex
```text
Apply hologram text boot in <file>. .src scale 0 to 1 (0.2s); .cone opacity 0.25; .panel clipPath inset(100% 0 0 0) to inset(0) from 0.4s over 0.6s linear; set textShadow offset for exactly one frame at 1.0s then clear. Capture at 0.2s, 0.7s, 1.03s and 1.5s to verify source, partial fill, one-frame offset and stable state.
```

예시 / Example: 홀로그램 부팅를 `.hero`에 적용해. / Apply Hologram Text Boot to `.hero`.

## 적용 / Application

- HyperFrames: 원뿔은 conic 또는 clip-path 삼각형 div, 주사선은 clip-path inset 보간. 발광은 box-shadow가 아닌 미리 만든 그라데이션 이미지로 두면 seek가 안정적이다
- ReelForge: 브리프에 문구, 광원 위치, 주사 0.6초, 간섭 1프레임, 색 시안/마젠타를 싣는다
- Scrolline Deck: 진행률 0.2~0.6에 주사를 매핑한다. 홀드 구간에서는 간섭 효과를 끄고 완성된 패널만 보이게 한다

조합 / Pair with: [레이저 점화 · Laser Ignite Text](../laser-ignite-text/) · [LED 문자 점등 · LED Matrix Text](../led-matrix-text/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
