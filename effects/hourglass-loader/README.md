# Nº 606 모래시계 로더 · Hourglass Loader

> 클립 렌더 예정 / Clip rendering planned.

**모래시계나 두 삼각형이 뒤집히고 내부 채움이 다시 흘러간다.**

Sand drains between two triangular chambers before the hourglass flips.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

## 선택 기준 / Selection

시간이 흐르는 대기를 알린다. / Communicates the passage of time while waiting.

- 예약 처리 대기에서 지속 활동을 표시할 때 / Use an hourglass for a time-related waiting state.
- 짧은 반복으로 시간이 흐르는 대기를 알린다 때 / Use a short repeating motion to communicate communicates the passage of time while waiting.

좋은 예 / Good: 예약 처리 대기에서 모래가 1.5초 동안 내려간 뒤 시계가 뒤집힌다
나쁜 예 / Bad: 실제 남은 시간을 모르는 상태에서 모래 양을 남은 시간으로 설명한다
주의 / Avoid: 실제 남은 시간을 모르는 상태에서 모래 양을 남은 시간으로 설명한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2000ms | 1500~3000ms | 한 번의 반복에 걸리는 시간이다 |
| 회전각 | 180deg | 180deg | 모래가 내려간 뒤 뒤집는다 |
| 채움 비율 | 100%에서 0% | 0~100% | 윗모래와 아랫모래를 반대로 조절한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { animation:glass 2s ease-in-out infinite; }
.fx .upper,.fx .lower { clip-path:polygon(0 0,100% 0,50% 100%); transform-origin:50% 100%; animation:sand 2s linear infinite; }
.fx .lower { animation-direction:reverse; rotate:180deg; }
@keyframes sand { 0% { scale:1 1; } 75%,100% { scale:1 0; } }
@keyframes glass { 0%,75% { transform:rotate(0); } 100% { transform:rotate(180deg); } }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 모래시계 로더를 적용해. 주기 2000ms, 회전각 180deg, 채움 비율 100%에서 0%, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 모래시계 로더를 적용해. 주기 2000ms, 회전각 180deg, 채움 비율 100%에서 0%, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1초, 2초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Hourglass Loader to <target>. Use a 2-second cycle, a 180 degree flip after 1.5 seconds and complementary chamber fills, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Hourglass Loader in the waiting indicator or background region of <file>. Use a 2-second cycle, a 180 degree flip after 1.5 seconds and complementary chamber fills, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 1, and 2 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 모래시계 로더를 `.hero`에 적용해. / Apply Hourglass Loader to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 모래시계 로더, 주기 2000ms, 회전각 180deg, 채움 비율 100%에서 0%를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [loadingio/css-spinner](https://github.com/loadingio/css-spinner) (CC0 loaders (README; root LICENSE absent)) · [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
