# Nº 619 배회하는 사각형 · Wandering Squares

> 클립 렌더 예정 / Clip rendering planned.

**작은 정사각형들이 네 모서리를 이동하면서 회전하고 크기를 바꾼다.**

Small squares travel around a closed rectangular route while rotating and scaling.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 떠도는 정사각 로더

## 선택 기준 / Selection

여러 객체가 협업하는 대기를 보여 준다. / Suggests several objects working through a repeating cycle.

- 협업 데이터 준비 화면에서 지속 활동을 표시할 때 / Add a compact multi-object waiting loop to a collaboration scene.
- 짧은 반복으로 여러 객체가 협업하는 대기를 보여 준다 때 / Use a short repeating motion to communicate suggests several objects working through a repeating cycle.

좋은 예 / Good: 협업 데이터 준비 화면에서 세 사각형이 작은 사각 경로를 돈다
나쁜 예 / Bad: 큰 이동 범위로 버튼과 제목 위를 가로질러 조작을 방해한다
주의 / Avoid: 큰 이동 범위로 버튼과 제목 위를 가로질러 조작을 방해한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1800ms | 1350~2700ms | 한 번의 반복에 걸리는 시간이다 |
| 객체 수 | 3개 | 2~4개 | 같은 폐곡선에 시간차로 배치한다 |
| 이동 거리 | 30px | 24~60px | 작은 정사각 경로의 한 변이다 |
| 위상차 | 200ms | 150~300ms | 출발 시간을 분리한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx i { position:absolute; width:12px; height:12px; background:currentColor; animation:wander 1.8s ease-in-out infinite; animation-delay:calc(var(--i)*-200ms); }
@keyframes wander {
  0%,100% { transform:translate(0,0) rotate(0deg) scale(1); }
  25% { transform:translate(30px,0) rotate(90deg) scale(.7); }
  50% { transform:translate(30px,30px) rotate(180deg) scale(1); }
  75% { transform:translate(0,30px) rotate(270deg) scale(.7); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 배회하는 사각형를 적용해. 주기 1800ms, 객체 수 3개, 이동 거리 30px, 위상차 200ms, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 배회하는 사각형를 적용해. 주기 1800ms, 객체 수 3개, 이동 거리 30px, 위상차 200ms, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.9초, 1.8초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Wandering Squares to <target>. Use a 1.8-second cycle, three squares, 30px travel, and 200ms offsets, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Wandering Squares in the waiting indicator or background region of <file>. Use a 1.8-second cycle, three squares, 30px travel, and 200ms offsets, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 0.9, and 1.8 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 배회하는 사각형를 `.hero`에 적용해. / Apply Wandering Squares to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1800ms로 고정한다.
- ReelForge: 씬 워커 브리프에 배회하는 사각형, 주기 1800ms, 객체 수 3개, 이동 거리 30px, 위상차 200ms를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1.8초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
