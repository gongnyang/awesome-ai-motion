# Nº 604 그라디언트 드리프트 · Gradient Drift

> 클립 렌더 예정 / Clip rendering planned.

**큰 그라디언트의 위치가 천천히 움직이며 색 영역이 흐른다.**

Large gradient regions drift slowly across the surface.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 웹 UI | css |

다른 이름 / Also known as: 그라디언트 이동

## 선택 기준 / Selection

부드러운 분위기와 지속 활동감을 만든다. / Creates a soft atmosphere and a sense of ongoing activity.

- 제품 소개 제목 뒤에서 지속 활동을 표시할 때 / Create a calm background behind a product introduction.
- 짧은 반복으로 부드러운 분위기와 지속 활동감을 만든다 때 / Use a short repeating motion to communicate creates a soft atmosphere and a sense of ongoing activity.

좋은 예 / Good: 제품 소개 제목 뒤에서 청록과 보라 색 영역이 8초 동안 왕복한다
나쁜 예 / Bad: 본문 전체의 색을 빠르게 바꿔 글자가 배경에 묻힌다
주의 / Avoid: 본문 전체의 색을 빠르게 바꿔 글자가 배경에 묻힌다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 8000ms | 6000~12000ms | 한 번의 반복에 걸리는 시간이다 |
| 배경 크기 | 300% | 200~400% | 넓은 색 영역을 확보한다 |
| 이동 폭 | 100% | 40~100% | 배경 위치를 왕복한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { background:linear-gradient(120deg,#334155,#0d9488,#818cf8); background-size:300% 300%; animation:drift 8s ease-in-out infinite; }
@keyframes drift {
  0%,100% { background-position:0% 50%; }
  50% { background-position:100% 50%; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 그라디언트 드리프트를 적용해. 주기 8000ms, 배경 크기 300%, 이동 폭 100%, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 그라디언트 드리프트를 적용해. 주기 8000ms, 배경 크기 300%, 이동 폭 100%, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 4초, 8초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Gradient Drift to <target>. Use a 8-second cycle, 300% background size and a 100% position sweep, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Gradient Drift in the waiting indicator or background region of <file>. Use a 8-second cycle, 300% background size and a 100% position sweep, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 4, and 8 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 그라디언트 드리프트를 `.hero`에 적용해. / Apply Gradient Drift to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 8000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 그라디언트 드리프트, 주기 8000ms, 배경 크기 300%, 이동 폭 100%를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 8초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [브리딩 루프 · Breathing Loop](../breathing-loop/) · [색 전환 · Color Transition](../color-transition/) · [페이드 · Fade](../fade/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [magicuidesign/magicui](https://magicui.design/docs/components/animated-gradient-text) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/background-gradient-animation) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
