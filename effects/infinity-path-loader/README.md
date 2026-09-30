# Nº 608 인피니티 로더 · Infinity Path Loader

> 클립 렌더 예정 / Clip rendering planned.

**점이나 짧은 선이 무한대 모양 경로를 끊김 없이 돈다.**

A short stroke travels continuously around an infinity path.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: 무한대 경로 로더

## 선택 기준 / Selection

끝없이 이어지는 진행을 표현한다. / Suggests uninterrupted ongoing progress.

- 동기화 표시에서 지속 활동을 표시할 때 / Show continuous synchronization with an infinity-shaped route.
- 짧은 반복으로 끝없이 이어지는 진행을 표현한다 때 / Use a short repeating motion to communicate suggests uninterrupted ongoing progress.

좋은 예 / Good: 동기화 표시에서 무한대 경로의 짧은 선분이 2초마다 한 바퀴 돈다
나쁜 예 / Bad: 선분이 교차점을 지날 때 갑자기 다른 경로로 점프한다
주의 / Avoid: 선분이 교차점을 지날 때 갑자기 다른 경로로 점프한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2000ms | 1500~3000ms | 한 번의 반복에 걸리는 시간이다 |
| 경로 폭 | 80px | 60~140px | viewBox 비율을 유지한다 |
| 선분 길이 | 18% | 10~25% | pathLength 100 기준이다 |
| 이징 | linear | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { width:80px; overflow:visible; }
.fx path { fill:none; stroke:currentColor; stroke-width:4; stroke-linecap:round; stroke-dasharray:18 82; animation:infinity 2s linear infinite; }
@keyframes infinity {
  to { stroke-dashoffset:-100; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 인피니티 로더를 적용해. 주기 2000ms, 경로 폭 80px, 선분 길이 18%, 이징 linear로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해. SVG 경로에 pathLength="100"을 지정해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 인피니티 로더를 적용해. 주기 2000ms, 경로 폭 80px, 선분 길이 18%, 이징 linear를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1초, 2초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Infinity Path Loader to <target>. Use a 2-second cycle, an 80px wide closed SVG path with pathLength="100" and an 18-unit dash, and linear easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Infinity Path Loader in the waiting indicator or background region of <file>. Use a 2-second cycle, an 80px wide closed SVG path with pathLength="100" and an 18-unit dash, and linear easing; derive loop phase from absolute time. Capture at 0, 1, and 2 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 인피니티 로더를 `.hero`에 적용해. / Apply Infinity Path Loader to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 인피니티 로더, 주기 2000ms, 경로 폭 80px, 선분 길이 18%를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
