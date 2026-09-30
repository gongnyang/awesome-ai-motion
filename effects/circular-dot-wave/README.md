# Nº 597 원형 도트 웨이브 · Circular Dot Wave

> 클립 렌더 예정 / Clip rendering planned.

**원 둘레의 점이나 짧은 막대가 순서대로 커지거나 밝아진다.**

Dots around a circle brighten sequentially.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 원형 점 파동

## 선택 기준 / Selection

시계 방향으로 진행되는 대기를 알린다. / Signals an active clockwise waiting cycle.

- 저장 버튼 옆의 열두 점이 시계 방향으로 밝아진다에서 지속 활동을 표시할 때 / Provide a compact waiting indicator beside a save action.
- 짧은 반복으로 시계 방향으로 진행되는 대기를 알린다 때 / Use a short repeating motion to communicate signals an active clockwise waiting cycle.

좋은 예 / Good: 저장 버튼 옆의 열두 점이 시계 방향으로 밝아진다
나쁜 예 / Bad: 원형 점을 완료율 게이지처럼 일부만 고정해 표시한다
주의 / Avoid: 원형 점을 완료율 게이지처럼 일부만 고정해 표시한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1200ms | 900~1800ms | 한 번의 반복에 걸리는 시간이다 |
| 점 수 | 12개 | 8~16개 | 원 둘레에 균등 배치한다 |
| 위상차 | 100ms | 75~150ms | 주기를 점 수로 나눈다 |
| 이징 | linear | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { position:relative; width:64px; height:64px; }
.fx i { position:absolute; inset:28px; transform:rotate(calc(var(--i)*30deg)) translateY(-24px); }
.fx b { display:block; width:8px; height:8px; border-radius:50%; background:currentColor; animation:signal 1.2s linear infinite; animation-delay:calc(var(--i)*-100ms); }
@keyframes signal {
  0%,100% { opacity:1; transform:scale(1); }
  80% { opacity:.2; transform:scale(.6); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 원형 도트 웨이브를 적용해. 주기 1200ms, 점 수 12개, 위상차 100ms, 이징 linear로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 원형 도트 웨이브를 적용해. 주기 1200ms, 점 수 12개, 위상차 100ms, 이징 linear를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.6초, 1.2초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Circular Dot Wave to <target>. Use a 1.2-second cycle, 12 dots with 100ms offsets, and linear easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Circular Dot Wave in the waiting indicator or background region of <file>. Use a 1.2-second cycle, 12 dots with 100ms offsets, and linear easing; derive loop phase from absolute time. Capture at 0, 0.6, and 1.2 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 원형 도트 웨이브를 `.hero`에 적용해. / Apply Circular Dot Wave to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1200ms로 고정한다.
- ReelForge: 씬 워커 브리프에 원형 도트 웨이브, 주기 1200ms, 점 수 12개, 위상차 100ms를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1.2초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) (MIT) · [loadingio/css-spinner](https://github.com/loadingio/css-spinner) (CC0 loaders (README; root LICENSE absent)) · [css-loaders.com](https://css-loaders.com/) (unknown) · [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
