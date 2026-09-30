# Nº 614 경로 컨베이어 · Path Conveyor

> 클립 렌더 예정 / Clip rendering planned.

**작은 객체가 컨베이어나 미로 경로를 따라 반복 이동한다.**

Small objects travel repeatedly along a conveyor-like route.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: Conveyor and Maze Loader, 컨베이어와 경로 로더, Text Path Conveyor, 경로 위 텍스트 이동

## 선택 기준 / Selection

단계 처리와 생산 흐름을 보여 준다. / Shows staged processing and production flow.

- 작업 큐 설명에서 지속 활동을 표시할 때 / Explain a repeating production queue with objects on a shared route.
- 짧은 반복으로 단계 처리와 생산 흐름을 보여 준다 때 / Use a short repeating motion to communicate shows staged processing and production flow.

좋은 예 / Good: 작업 큐 설명에서 객체들이 300ms 간격으로 120px 폐곡선을 따라 움직인다
나쁜 예 / Bad: 경로가 교차하는 곳에서 객체가 겹쳐 처리 순서를 읽을 수 없다
주의 / Avoid: 경로가 교차하는 곳에서 객체가 겹쳐 처리 순서를 읽을 수 없다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2400ms | 1800~3600ms | 한 번의 반복에 걸리는 시간이다 |
| 객체 시간차 | 300ms | 200~400ms | 같은 경로에서 객체의 간격을 만든다 |
| 경로 길이 | 120px | 80~240px | 단순한 폐곡선을 사용한다 |
| 이징 | linear | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx .item { offset-path:path("M0 0 H40 V20 H0 Z"); offset-rotate:0deg; animation:conveyor 2.4s linear infinite; animation-delay:calc(var(--i)*-300ms); }
@keyframes conveyor {
  from { offset-distance:0%; }
  to { offset-distance:100%; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 경로 컨베이어를 적용해. 주기 2400ms, 객체 시간차 300ms, 경로 길이 120px, 이징 linear로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 경로 컨베이어를 적용해. 주기 2400ms, 객체 시간차 300ms, 경로 길이 120px, 이징 linear를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1.2초, 2.4초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Path Conveyor to <target>. Use a 2.4-second cycle, a closed 120px route with 300ms object offsets, and linear easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Path Conveyor in the waiting indicator or background region of <file>. Use a 2.4-second cycle, a closed 120px route with 300ms object offsets, and linear easing; derive loop phase from absolute time. Capture at 0, 1.2, and 2.4 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 경로 컨베이어를 `.hero`에 적용해. / Apply Path Conveyor to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2400ms로 고정한다.
- ReelForge: 씬 워커 브리프에 경로 컨베이어, 주기 2400ms, 객체 시간차 300ms, 경로 길이 120px를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2.4초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [경로 위 행렬 · Path Convoy](../path-convoy/) · [경로 순차 강조 · Route Highlight](../route-highlight/) · [행위자 과정 순환 · Process Loop](../process-loop/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown) · [codrops/AnimateSVGTextPath](https://github.com/codrops/AnimateSVGTextPath) (MIT) · [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/textPath) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
