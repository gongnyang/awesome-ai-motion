# Nº 020 관성 이동 · Inertial Glide

> 클립 렌더 예정 / Clip rendering planned.

**놓인 물체가 이동 방향을 유지하다가 서서히 감속하며 멈춘다**

A released object keeps its direction of travel and gradually decelerates to a stop.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 중급 | 피드백, 분위기 | 웹 UI, 제품 시연, 숏폼 | gsap |

다른 이름 / Also known as: 관성 미끄러짐, Numeric property physics, 속성 물리 변화

## 선택 기준 / Selection

속도와 마찰을 느끼게 한다. 밀어서 놓은 것 같은 자연스러운 정지가 된다 / Conveys speed and friction, like something pushed and let go, with a natural stop.

- 카드를 던지듯 밀어 놓았을 때 미끄러지다 멈추게 할 때 / Let a card slide and stop after being pushed.
- 스와이프 뒤 목록이 관성으로 흘러갈 때 / Let a list coast after a swipe.

좋은 예 / Good: 초기 속도 600px/s에서 시정수 700ms로 지수 감쇠하며 최대 2000ms 동안 미끄러지다 멈춘다
나쁜 예 / Bad: 감쇠가 없어 등속으로 가다 갑자기 멈추거나, 초기 속도가 3000px/s라 화면 밖으로 나간다
주의 / Avoid: 정지 조건은 속도 5px/s 미만 · 이동 거리는 화면 안에 들어오도록 초기 속도를 정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 초기 속도 | 600px/s | 300~1000px/s | 방향 포함 |
| 감쇠 시정수 | 700ms | 400~1000ms | v = v0 * exp(-t/tau) |
| 최대 재생 | 2000ms | 1500~2500ms |  |
| 총 이동 | 약 420px | v0*tau | 600*0.7 |

이징 / Ease: `expo.out`

## 구현 / Implementation (GSAP)

```js
const v0 = 600, tau = 0.7, dist = v0 * tau; // 420px
tl.to('.card', { x: dist, duration: 2, ease: 'expo.out' }, 0.3);
// 정확한 지수 감쇠: x(t) = v0*tau*(1 - exp(-t/tau)), expo.out은 근사
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 카드에 관성 이동을 넣어줘. 초기 속도 600px/s, 시정수 0.7초로 지수 감쇠하게 하고 총 2초 동안 x 420px 이동해 멈추게 해. GSAP에서 ease expo.out으로 근사하고 시작은 0.3초.
```

### 한국어 · Codex
```text
<파일>에 inertial glide를 구현해. x(t) = 600*0.7*(1 - exp(-t/0.7)), 2초, onUpdate로 계산. 0.5초, 1.0초, 2.0초에 캡처해 위치 증가량이 점점 줄어드는지, 2초에 약 402px 이상이면서 420px를 넘지 않는지 확인해.
```

### English · Claude Code
```text
Add inertial glide to the card in <target>. Use an initial velocity of 600px/s and a time constant of 0.7 seconds for exponential decay, traveling about 420px over 2 seconds and stopping. Approximate with ease expo.out in GSAP and start at 0.3 seconds.
```

### English · Codex
```text
Implement inertial glide in <file>: x(t) = 600*0.7*(1 - exp(-t/0.7)), 2 seconds, computed in onUpdate. Capture at 0.5s, 1.0s and 2.0s and verify the position increments shrink and the value at 2s is about 402px and never exceeds 420px.
```

예시 / Example: 관성 이동를 `.hero`에 적용해. / Apply Inertial Glide to `.hero`.

## 적용 / Application

- HyperFrames: expo.out으로 지수 감쇠를 근사하거나 onUpdate에서 x(t)를 공식으로 계산한다. 공식이면 seek 결정론이 보장된다
- ReelForge: 브리프에 초기 속도, 시정수, 최대 재생 시간을 싣는다. 이동 거리는 v0*tau로 미리 계산한다
- Scrolline Deck: 진행률을 시간으로 보고 x(t)를 공식으로 계산한다. 스크롤을 멈추면 관성으로 더 가지 않고 진행률에 고정된다

조합 / Pair with: [진행 중 목표 변경 · Motion Retargeting](../retarget-motion/) · [팔로스루 · Follow-through](../follow-through/) · [이징 · Easing](../easing-curves/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/InertiaPlugin/) (GSAP Standard License) · [greensock/GSAP](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/) (GSAP Standard License) · [motiondivision/motion](https://motion.dev/docs/react-transitions) (MIT) · [motiondivision/motionone](https://github.com/motiondivision/motionone/blob/main/README.md) (MIT) · [Popmotion/popmotion](https://github.com/Popmotion/popmotion) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
