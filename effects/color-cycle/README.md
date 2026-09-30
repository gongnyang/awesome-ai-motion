# Nº 598 컬러 사이클 · Color Cycle

> 클립 렌더 예정 / Clip rendering planned.

**배경이나 요소의 색이 여러 색상 사이를 천천히 바꾼다.**

A surface cycles slowly through a small palette.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 웹 UI | css |

다른 이름 / Also known as: Color Cycling, 색상 순환, Animated Color Text, 색상 흐름 글자

## 선택 기준 / Selection

다양함과 계속되는 상태를 표현한다. / Suggests variety and continuing activity.

- 대기 카드의 배경이 비슷한 명도의 네 색을 6초에 걸쳐 순환한다에서 지속 활동을 표시할 때 / Add a gentle color loop to a waiting card.
- 짧은 반복으로 다양함과 계속되는 상태를 표현한다 때 / Use a short repeating motion to communicate suggests variety and continuing activity.

좋은 예 / Good: 대기 카드의 배경이 비슷한 명도의 네 색을 6초에 걸쳐 순환한다
나쁜 예 / Bad: 성공과 오류 상태의 색을 같은 순환에 넣어 상태 의미가 바뀐다
주의 / Avoid: 성공과 오류 상태의 색을 같은 순환에 넣어 상태 의미가 바뀐다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 6000ms | 4500~9000ms | 한 번의 반복에 걸리는 시간이다 |
| 색상 수 | 4개 | 2~4개 | 서로 비슷한 명도의 색을 고른다 |
| 채도 | 45% | 20~60% | 색 변화가 본문보다 강하지 않게 한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { animation:colors 6s ease-in-out infinite; }
@keyframes colors {
  0%,100% { background-color:#334155; }
  25% { background-color:#315b63; }
  50% { background-color:#514b70; }
  75% { background-color:#65515b; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 컬러 사이클를 적용해. 주기 6000ms, 색상 수 4개, 채도 45%, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 컬러 사이클를 적용해. 주기 6000ms, 색상 수 4개, 채도 45%, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 3초, 6초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Color Cycle to <target>. Use a 6-second cycle, four colors at similar lightness, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Color Cycle in the waiting indicator or background region of <file>. Use a 6-second cycle, four colors at similar lightness, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 3, and 6 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 컬러 사이클를 `.hero`에 적용해. / Apply Color Cycle to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 6000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 컬러 사이클, 주기 6000ms, 색상 수 4개, 채도 45%를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 6초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [브리딩 루프 · Breathing Loop](../breathing-loop/) · [색 전환 · Color Transition](../color-transition/) · [페이드 · Fade](../fade/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [magicuidesign/magicui](https://magicui.design/docs/components/rainbow-button) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [magicuidesign/magicui](https://magicui.design/docs/components/aurora-text) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/colourful-text) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
