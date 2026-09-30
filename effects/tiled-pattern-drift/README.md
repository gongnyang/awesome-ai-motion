# Nº 618 반복 패턴 흐름 · Tiled Pattern Drift

> 클립 렌더 예정 / Clip rendering planned.

**도형 격자와 선 무늬가 일정한 방향으로 흘러 경계에서 다시 이어진다.**

A tiled pattern drifts continuously and reconnects at its boundary.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | css |

다른 이름 / Also known as: 반복 무늬 이동

## 선택 기준 / Selection

기하학적 배경에 연속 흐름을 준다. / Adds directional flow to a geometric background.

- 기하학적 배경을 움직일 때 / Animate a geometric background.
- 일정한 방향성을 낮은 대비로 나타낼 때 / Suggest steady direction with low visual contrast.

좋은 예 / Good: 40px 타일 배경이 6초 동안 120px 이동해 같은 무늬로 이어진다.
나쁜 예 / Bad: 타일 크기와 이동 거리가 맞지 않아 반복 경계에서 튄다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 6s | 3~10s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 셀 크기 | 40px | 24~80px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 속도 | 20px/s | 8~30px/s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 주기 이동 | 120px | 40~240px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
tl.fromTo('.pattern', { backgroundPosition: '0px 0px' },
  { backgroundPosition: '120px 0px', duration: 6, ease: 'none' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 반복 패턴 흐름을 구현해. 주기 6s, 셀 크기 40px, 속도 20px/s, 주기 이동 120px, 이징 none을 적용해. CSS 반복 배경 위치를 한 타일 길이만큼 움직이거나 canvas 도형 좌표를 모듈러 이동한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 반복 패턴 흐름 장면 레이어에 적용해. 주기 6s, 셀 크기 40px, 속도 20px/s, 주기 이동 120px, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Tiled Pattern Drift on <target>. Use period 6s; cell size 40px; speed 20px/s; cycle displacement 120px; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Tiled Pattern Drift to the scene layer in <file>. Use period 6s; cell size 40px; speed 20px/s; cycle displacement 120px and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 반복 패턴 흐름를 `.hero`에 적용해. / Apply Tiled Pattern Drift to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 반복 패턴 흐름의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 6s, 셀 크기 40px, 속도 20px/s, 주기 이동 120px을 싣고 css 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 6s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [마키 · Marquee](../marquee/) · [원근 격자 전진 · Perspective Grid Drift](../perspective-grid-drift/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [ui.aceternity.com](https://ui.aceternity.com/components/scales) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
