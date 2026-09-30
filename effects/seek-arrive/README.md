# Nº 500 목표 추적과 도착 · Seek and Arrive

> 클립 렌더 예정 / Clip rendering planned.

**개체가 목표를 향해 방향을 바꾸고 도착 직전에 감속한다.**

An agent turns toward a target and slows down as it approaches.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 웹 UI | canvas |

## 선택 기준 / Selection

목표를 따라가는 의도와 멈추기 위한 거리의 관계를 보여준다. / Shows goal-directed behavior and the relationship between stopping distance and speed.

- 자율 에이전트가 목표를 찾아가는 원리를 설명할 때 / Explain how an autonomous agent approaches a target.
- 포인터나 로봇이 목표 근처에서 속도를 줄이는 모습을 보여줄 때 / Show a pointer or robot slowing down near its destination.

좋은 예 / Good: 개체가 120px 떨어진 목표를 향해 가속하고 마지막 90px에서 속도를 줄여 멈춘다.
나쁜 예 / Bad: 목표를 매 프레임 무작위로 바꿔 도착 과정이 보이지 않는다.
주의 / Avoid: 감속반경을 이동 거리보다 크게 잡아 전체 이동이 느려지지 않게 한다. · seek 때 이전 프레임의 위치를 누적하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 1.8s | 1.5~3.0s | 120px 이동 기준. 도착 오차가 남으면 종료 후 목표에 고정한다. |
| 최고 속도 | 120px/s | 80~240px/s | 1920x1080 화면의 작은 개체 기준. |
| 감속반경 | 90px | 40~120px | 반경 안에서 희망 속도를 거리 비율로 줄인다. |
| 최대 가속도 | 220px/s² | 120~360px/s² | 목표 방향으로 속도를 바꾸는 정도. |

이징 / Ease: `none, 거리 비례 감속`

## 구현 / Implementation (GSAP)

```js
const clock = { t: 0 }, tl = gsap.timeline({ paused: true });
function sample(t) {
  let x = 0, v = 0; const dt = 1 / 120;
  for (let i = 0; i < Math.floor(t / dt); i++) {
    const d = 120 - x, desired = 120 * Math.min(1, Math.abs(d) / 90) * Math.sign(d);
    v += Math.max(-220 * dt, Math.min(220 * dt, desired - v)); x += v * dt;
  }
  return t >= 1.8 ? 120 : x;
}
tl.to(clock, { t: 1.8, duration: 1.8, ease: 'none', onUpdate: () => gsap.set('.agent', { x: sample(clock.t) }) });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 목표 추적과 도착을 구현해. 목표는 시작점에서 오른쪽 120px, 시간은 1.8초, 최고 속도는 120px/s, 감속반경은 90px, 최대 가속도는 220px/s²로 정해. 고정 1/120초 간격으로 초기 상태부터 계산하고 paused GSAP 타임라인으로 seek하며 종료 시 목표에 고정해.
```

### 한국어 · Codex
```text
<파일>의 에이전트 이동 장면에 <대상>의 목표 도착을 적용해. 120px 이동에 1.8초, 최고 속도 120px/s, 감속반경 90px, 최대 가속도 220px/s²를 쓰고 매 seek에서 초기 상태부터 재계산해. 0.3초, 1.2초, 1.8초 캡처로 방향, 감속, 최종 도착을 확인하고 역순 seek에서도 위치가 같은지 검증해.
```

### English · Claude Code
```text
Implement seek and arrive for <target> in <file>. Place the target 120px to the right of the starting point and use 1.8 seconds, a maximum speed of 120px/s, a slowing radius of 90px, and a maximum acceleration of 220px/s². Recompute from the initial state at fixed 1/120-second steps, drive playback with a paused GSAP timeline, and pin the agent to the target at the end.
```

### English · Codex
```text
Apply seek and arrive to <target> in the agent movement scene in <file>. Use a 120px displacement over 1.8 seconds, a maximum speed of 120px/s, a 90px slowing radius, and a maximum acceleration of 220px/s²; recompute from the initial state on each seek. Capture at 0.3, 1.2, and 1.8 seconds to check direction, deceleration, and final arrival, then verify matching positions when seeking backward.
```

예시 / Example: 목표 추적과 도착를 `.hero`에 적용해. / Apply Seek and Arrive to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인의 시간을 입력으로 고정 1/120초 시뮬레이션을 처음부터 재계산하고 seek마다 canvas를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1.8초, 최고 속도 120px/s, 감속반경 90px, 가속도 220px/s²와 종료 고정 조건을 싣는다.
- Scrolline Deck: 진행률 0~1을 0~1.8초 샘플에 매핑한다. scrub에서 스프링 대신 power2.out을 쓰려면 거리 기반 궤적과 중복 감속하지 않는다.

조합 / Pair with: [벡터장 방향 정렬 · Vector Field Alignment](../vector-field-alignment/) · [데이터 이동 잔상 · Motion Trails](../motion-trails/) · [주석 위치 추적 · Annotation Tracking](../annotation-tracking/)

출처 / Sources: [nature-of-code/noc-book-2](https://natureofcode.com/autonomous-agents/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
