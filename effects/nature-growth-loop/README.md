# Nº 611 자연 성장 루프 · Nature Growth Loop

> 클립 렌더 예정 / Clip rendering planned.

**식물이나 해와 같은 작은 자연 도형이 자라거나 떠오르며 반복한다.**

Natural shapes grow in stages and return to their starting size.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: Nature Growth Loader, 자연 성장 로더

## 선택 기준 / Selection

편안하고 유기적인 대기를 만든다. / Creates a calm and organic waiting atmosphere.

- 환경 서비스의 대기 표시에서 지속 활동을 표시할 때 / Use a small growing plant in an environmental service waiting state.
- 짧은 반복으로 편안하고 유기적인 대기를 만든다 때 / Use a short repeating motion to communicate creates a calm and organic waiting atmosphere.

좋은 예 / Good: 환경 서비스의 대기 표시에서 줄기와 잎이 자란 뒤 천천히 작아진다
나쁜 예 / Bad: 반복 성장 애니메이션을 실제 환경 성과 수치 옆에 증거처럼 놓는다
주의 / Avoid: 반복 성장 애니메이션을 실제 환경 성과 수치 옆에 증거처럼 놓는다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2400ms | 1800~3600ms | 한 번의 반복에 걸리는 시간이다 |
| 성장 비율 | 0에서 1 | 0~1 | 줄기와 잎의 scale을 조절한다 |
| 부위 시간차 | 160ms | 100~240ms | 줄기 다음에 잎이 자란다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx .stem,.fx .leaf { transform-box:fill-box; transform-origin:50% 100%; animation:grow 2.4s ease-in-out infinite; }
.fx .leaf { animation-delay:160ms; }
@keyframes grow {
  0%,100% { transform:scale(0); opacity:0; }
  40%,80% { transform:scale(1); opacity:1; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 자연 성장 루프를 적용해. 주기 2400ms, 성장 비율 0에서 1, 부위 시간차 160ms, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 자연 성장 루프를 적용해. 주기 2400ms, 성장 비율 0에서 1, 부위 시간차 160ms, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1.2초, 2.4초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Nature Growth Loop to <target>. Use a 2.4-second cycle, scale from 0 to 1 with the leaves following the stem by 160ms, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Nature Growth Loop in the waiting indicator or background region of <file>. Use a 2.4-second cycle, scale from 0 to 1 with the leaves following the stem by 160ms, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 1.2, and 2.4 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 자연 성장 루프를 `.hero`에 적용해. / Apply Nature Growth Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2400ms로 고정한다.
- ReelForge: 씬 워커 브리프에 자연 성장 루프, 주기 2400ms, 성장 비율 0에서 1, 부위 시간차 160ms를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2.4초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
