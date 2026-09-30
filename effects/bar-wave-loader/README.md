# Nº 594 막대 웨이브 로더 · Bar Wave Loader

> 클립 렌더 예정 / Clip rendering planned.

**나란한 막대들이 차례로 길어지고 짧아져 파도처럼 움직인다.**

Adjacent bars rise and fall in a staggered wave.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 막대 파동 로더

## 선택 기준 / Selection

신호 처리나 작업 리듬을 보여 준다. / Suggests signal processing and a steady work rhythm.

- 음성 처리 상태에 다섯 막대가 100ms 간격으로 높아진다에서 지속 활동을 표시할 때 / Indicate that voice processing is active.
- 짧은 반복으로 신호 처리나 작업 리듬을 보여 준다 때 / Use a short repeating motion to communicate suggests signal processing and a steady work rhythm.

좋은 예 / Good: 음성 처리 상태에 다섯 막대가 100ms 간격으로 높아진다
나쁜 예 / Bad: 고정 파형을 실제 음량 측정값으로 표시한다
주의 / Avoid: 고정 파형을 실제 음량 측정값으로 표시한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1200ms | 900~1800ms | 한 번의 반복에 걸리는 시간이다 |
| 막대 수 | 5개 | 3~7개 | 나란히 배치한다 |
| 위상차 | 100ms | 60~150ms | 왼쪽부터 순서를 준다 |
| 최소 높이 비율 | 0.4 | 0.25~0.6 | scaleY 기준이다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { display:flex; gap:6px; height:40px; align-items:center; }
.fx i { width:6px; height:40px; background:currentColor; animation:bars 1.2s ease-in-out infinite; animation-delay:calc(var(--i)*-100ms); }
@keyframes bars {
  0%,100% { transform:scaleY(.4); }
  50% { transform:scaleY(1); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 막대 웨이브 로더를 적용해. 주기 1200ms, 막대 수 5개, 위상차 100ms, 최소 높이 비율 0.4, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 막대 웨이브 로더를 적용해. 주기 1200ms, 막대 수 5개, 위상차 100ms, 최소 높이 비율 0.4, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.6초, 1.2초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Bar Wave Loader to <target>. Use a 1.2-second cycle, five bars, 100ms offsets, and scaleY from 0.4 to 1, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Bar Wave Loader in the waiting indicator or background region of <file>. Use a 1.2-second cycle, five bars, 100ms offsets, and scaleY from 0.4 to 1, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 0.6, and 1.2 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 막대 웨이브 로더를 `.hero`에 적용해. / Apply Bar Wave Loader to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1200ms로 고정한다.
- ReelForge: 씬 워커 브리프에 막대 웨이브 로더, 주기 1200ms, 막대 수 5개, 위상차 100ms, 최소 높이 비율 0.4를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1.2초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) (MIT) · [loadingio/css-spinner](https://github.com/loadingio/css-spinner) (CC0 loaders (README; root LICENSE absent)) · [css-loaders.com](https://css-loaders.com/) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
