# Nº 605 격자 펄스 · Grid Pulse

> 클립 렌더 예정 / Clip rendering planned.

**격자의 칸들이 대각선이나 행 순서로 줄어들고 다시 커진다.**

Grid cells shrink and grow with diagonal phase offsets.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Grid Pulse Loader, 격자 맥동 로더

## 선택 기준 / Selection

여러 작업 단위가 계속 처리됨을 보여 준다. / Suggests multiple work units being processed continuously.

- 일괄 처리 카드에서 지속 활동을 표시할 때 / Represent ongoing batch processing with a compact grid.
- 짧은 반복으로 여러 작업 단위가 계속 처리됨을 보여 준다 때 / Use a short repeating motion to communicate suggests multiple work units being processed continuously.

좋은 예 / Good: 일괄 처리 카드에서 3x3 칸이 대각선 순서로 작아졌다 커진다
나쁜 예 / Bad: 완료된 작업 칸까지 사라지게 해 완료 상태가 불분명하다
주의 / Avoid: 완료된 작업 칸까지 사라지게 해 완료 상태가 불분명하다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1300ms | 975~1950ms | 한 번의 반복에 걸리는 시간이다 |
| 격자 | 3x3 | 2x2~4x4 | 정사각 칸을 일정 간격으로 배치한다 |
| 위상차 | 100ms | 60~150ms | 행과 열 인덱스 합으로 지연한다 |
| 최소 크기 | 0 | 0~0.4 | scale 기준이다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { display:grid; grid-template-columns:repeat(3,12px); gap:4px; }
.fx i { height:12px; background:currentColor; animation:grid 1.3s ease-in-out infinite; animation-delay:calc((var(--row) + var(--col))*-100ms); }
@keyframes grid {
  0%,100% { transform:scale(1); opacity:1; }
  50% { transform:scale(0); opacity:0; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 격자 펄스를 적용해. 주기 1300ms, 격자 3x3, 위상차 100ms, 최소 크기 0, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 격자 펄스를 적용해. 주기 1300ms, 격자 3x3, 위상차 100ms, 최소 크기 0, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.65초, 1.3초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Grid Pulse to <target>. Use a 1.3-second cycle, a 3 by 3 grid, 100ms diagonal offsets, and scale from 0 to 1, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Grid Pulse in the waiting indicator or background region of <file>. Use a 1.3-second cycle, a 3 by 3 grid, 100ms diagonal offsets, and scale from 0 to 1, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 0.65, and 1.3 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 격자 펄스를 `.hero`에 적용해. / Apply Grid Pulse to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1300ms로 고정한다.
- ReelForge: 씬 워커 브리프에 격자 펄스, 주기 1300ms, 격자 3x3, 위상차 100ms, 최소 크기 0를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1.3초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [loadingio/css-spinner](https://github.com/loadingio/css-spinner) (CC0 loaders (README; root LICENSE absent)) · [css-loaders.com](https://css-loaders.com/) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
