# Nº 616 도형 굴리기 루프 · Rolling Shape Loop

> 클립 렌더 예정 / Clip rendering planned.

**원이나 다각형이 바닥을 따라 구르거나 모서리를 축으로 넘어간다.**

A shape translates along a floor while rotating in proportion to its travel.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Rolling Shape Loader, 도형 구르기 로더

## 선택 기준 / Selection

이동을 동반한 반복 작업을 보여 준다. / Suggests repeated work involving movement.

- 전송 대기 표시에서 지속 활동을 표시할 때 / Use a rolling shape to indicate repeated transport.
- 짧은 반복으로 이동을 동반한 반복 작업을 보여 준다 때 / Use a short repeating motion to communicate suggests repeated work involving movement.

좋은 예 / Good: 전송 대기 표시에서 작은 원이 80px 굴러가고 끝에서 사라져 다시 출발한다
나쁜 예 / Bad: 이동 거리와 회전량이 맞지 않아 바닥에서 미끄러진다
주의 / Avoid: 이동 거리와 회전량이 맞지 않아 바닥에서 미끄러진다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1600ms | 1200~2400ms | 한 번의 반복에 걸리는 시간이다 |
| 이동 거리 | 80px | 40~160px | 반지름 약 12.7px 원의 한 바퀴 거리다 |
| 회전각 | 360deg | 180~720deg | 이동 거리를 원둘레와 맞춘다 |
| 이징 | linear | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { width:25.46px; height:25.46px; border-radius:50%; background:conic-gradient(#0d9488 50%,#334155 0); animation:roll 1.6s linear infinite; }
@keyframes roll {
  0% { transform:translateX(0) rotate(0); opacity:0; }
  10%,90% { opacity:1; }
  100% { transform:translateX(80px) rotate(360deg); opacity:0; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 도형 굴리기 루프를 적용해. 주기 1600ms, 이동 거리 80px, 회전각 360deg, 이징 linear로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 도형 굴리기 루프를 적용해. 주기 1600ms, 이동 거리 80px, 회전각 360deg, 이징 linear를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.8초, 1.6초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Rolling Shape Loop to <target>. Use a 1.6-second cycle, 80px travel, 360 degree rotation, and a 12.73px radius, and linear easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Rolling Shape Loop in the waiting indicator or background region of <file>. Use a 1.6-second cycle, 80px travel, 360 degree rotation, and a 12.73px radius, and linear easing; derive loop phase from absolute time. Capture at 0, 0.8, and 1.6 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 도형 굴리기 루프를 `.hero`에 적용해. / Apply Rolling Shape Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1600ms로 고정한다.
- ReelForge: 씬 워커 브리프에 도형 굴리기 루프, 주기 1600ms, 이동 거리 80px, 회전각 360deg를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1.6초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
