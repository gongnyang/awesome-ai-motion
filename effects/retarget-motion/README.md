# Nº 021 진행 중 목표 변경 · Motion Retargeting

> 클립 렌더 예정 / Clip rendering planned.

**이동 도중 목표가 바뀌어도 현재 위치에서 새 방향으로 자연스럽게 가감속한다**

When the target changes mid-move, the element eases from its current position toward the new direction.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 고급 | 피드백, 순서·흐름 | 웹 UI, 제품 시연, 데이터 스토리 | gsap |

다른 이름 / Also known as: Adaptive reverse easing, 중간 반전의 가감속, Interrupt-and-retarget transition, 진행 중 목표 재설정, Interruptibility / Reversibility, 중단·반전 가능성

## 선택 기준 / Selection

취소와 복귀, 데이터 갱신이 갑작스럽지 않게 보인다. 사용자의 의도 변경에 화면이 부드럽게 반응한다 / Cancellations, reversals and data updates look smooth. The screen responds gracefully to a change of intent.

- 이동 중인 요소가 중간에 목적지가 바뀌는 인터랙션을 시연할 때 / Demonstrate an interaction where the destination changes mid-move.
- 실시간 데이터가 갱신될 때 막대가 되돌아가지 않고 새 값으로 이어 갈 때 / Let live data updates continue from the current value instead of resetting.

좋은 예 / Good: 800ms 이동의 40% 지점(320ms)에서 목표가 바뀌고, 현재 위치에서 400ms 동안 새 목표로 이어진다. 위치 점프가 없다
나쁜 예 / Bad: 목표가 바뀌면 시작점으로 순간 이동한 뒤 새 tween을 시작해 점프한다. 속도가 0으로 떨어졌다 다시 출발한다
주의 / Avoid: 현재 위치를 새 시작값으로 쓴다(시작점 복귀 금지) · 현재 속도를 이어 받을 수 있으면 이어 받는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 첫 이동 | 800ms | 600~1000ms | 원래 목표 x 700 |
| 변경 시점 | 40% | 30~60% | 320ms |
| 재이동 | 400ms | 300~600ms | 새 목표 x 200 |
| 이징 | power2.out |  | 재이동은 감속만 |

## 구현 / Implementation (GSAP)

```js
tl.to('.dot', { x: 700, duration: 0.8, ease: 'power2.out' }, 0.2);
tl.call(() => {}, null, 0.52);
tl.to('.dot', { x: 200, duration: 0.4, ease: 'power2.out', overwrite: 'auto' }, 0.52); // 현재 위치에서 재시작
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 점이 x 700으로 0.8초 동안 power2.out으로 이동하다가 0.52초에 목표가 x 200으로 바뀌는 장면을 만들어줘. 현재 위치에서 0.4초, power2.out으로 새 목표로 이어 가게 하고 시작점으로 튀지 않게 해.
```

### 한국어 · Codex
```text
<파일>에 retarget motion을 구현해. 첫 tween x 700 / 0.8s / power2.out, 0.52초에 새 tween x 200 / 0.4s / power2.out, 현재 위치에서 시작. 0.5초, 0.52초, 0.53초를 캡처해 0.52초 전후 x 값이 연속인지(점프 없음), 그 뒤 x가 200으로 수렴하는지 확인해.
```

### English · Claude Code
```text
In <target>, make a dot move to x 700 over 0.8 seconds with power2.out, then at 0.52 seconds retarget it to x 200. Continue from its current position over 0.4 seconds with power2.out and no jump back to the start.
```

### English · Codex
```text
Implement retarget motion in <file>: first tween x 700 / 0.8s / power2.out, then at 0.52s a new tween x 200 / 0.4s / power2.out starting from the current position. Capture at 0.5s, 0.52s and 0.53s and verify x is continuous across 0.52s with no jump and converges to 200 afterward.
```

예시 / Example: 진행 중 목표 변경를 `.hero`에 적용해. / Apply Motion Retargeting to `.hero`.

## 적용 / Application

- HyperFrames: overwrite auto가 paused 타임라인에서 seek 뒤에도 같은 결과를 내는지 미리 검증한다. 필요하면 변경 시점의 위치를 값으로 계산해 fromTo로 쓴다
- ReelForge: 브리프에 변경 시점과 새 목표를 파라미터로 싣는다. 씬은 변경 이벤트를 데이터 이벤트와 동기시킨다
- Scrolline Deck: 스크롤 방향이 바뀌는 순간이 곧 목표 변경이다. progress 자체를 새 목표로 보간하면 자연스럽게 이어진다

조합 / Pair with: [이징 · Easing](../easing-curves/) · [관성 이동 · Inertial Glide](../inertial-glide/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/GSAP/Tween/) (GSAP Standard License) · [d3/d3-transition](https://d3js.org/d3-transition) (ISC) · motion dictionary 1-principles.md#6. 모션 위계·코레오그래피 (own) · [bost.ocks.org](https://bost.ocks.org/mike/transition/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
