# Nº 592 앰비언트 글로우 · Ambient Glow

> 클립 렌더 예정 / Clip rendering planned.

**표면 뒤의 부드러운 다색 빛이 천천히 밝아지고 위치가 변한다.**

A blurred multicolor light shifts and brightens behind a surface.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 웹 UI | css |

다른 이름 / Also known as: 배경 발광 호흡

## 선택 기준 / Selection

따뜻한 공간감과 지속 활동을 만든다. / Creates warm depth and a sense of continuing activity.

- 제품 카드 뒤의 흐린 빛이 5초 동안 밝아지며 24px 왕복한다에서 지속 활동을 표시할 때 / Add a soft breathing backlight behind a product card.
- 짧은 반복으로 따뜻한 공간감과 지속 활동을 만든다 때 / Use a short repeating motion to communicate creates warm depth and a sense of continuing activity.

좋은 예 / Good: 제품 카드 뒤의 흐린 빛이 5초 동안 밝아지며 24px 왕복한다
나쁜 예 / Bad: 본문과 버튼까지 흐림을 적용해 조작 대상이 흐려진다
주의 / Avoid: 본문과 버튼까지 흐림을 적용해 조작 대상이 흐려진다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 5000ms | 3750~7500ms | 한 번의 반복에 걸리는 시간이다 |
| 흐림 | 48px | 32~72px | 빛 면에만 적용한다 |
| 불투명도 | 0.5에서 1 | 0.3~1 | 본문 대비를 먼저 확인한다 |
| 이동 거리 | 24px | 12~40px | 빛 중심을 작게 이동한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { position:relative; isolation:isolate; }
.fx::before { content:""; position:absolute; inset:-24px; z-index:-1; background:linear-gradient(120deg,#0d9488,#818cf8); filter:blur(48px); animation:glow 5s ease-in-out infinite; }
@keyframes glow {
  0%,100% { opacity:.5; transform:translateX(-12px); }
  50% { opacity:1; transform:translateX(12px); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 앰비언트 글로우를 적용해. 주기 5000ms, 흐림 48px, 불투명도 0.5에서 1, 이동 거리 24px, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 앰비언트 글로우를 적용해. 주기 5000ms, 흐림 48px, 불투명도 0.5에서 1, 이동 거리 24px, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 2.5초, 5초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Ambient Glow to <target>. Use a 5-second cycle, 48px blur, opacity from 0.5 to 1, and 24px light travel, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Ambient Glow in the waiting indicator or background region of <file>. Use a 5-second cycle, 48px blur, opacity from 0.5 to 1, and 24px light travel, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 2.5, and 5 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 앰비언트 글로우를 `.hero`에 적용해. / Apply Ambient Glow to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 5000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 앰비언트 글로우, 주기 5000ms, 흐림 48px, 불투명도 0.5에서 1, 이동 거리 24px를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 5초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [브리딩 루프 · Breathing Loop](../breathing-loop/) · [색 전환 · Color Transition](../color-transition/) · [페이드 · Fade](../fade/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/neon-gradient-card) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/background-gradient) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [ibelick/motion-primitives](https://motion-primitives.com/docs/glow-effect) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
