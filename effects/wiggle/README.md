# Nº 591 위글 · Wiggle

> 클립 렌더 예정 / Clip rendering planned.

**위치나 회전이 불규칙하게 이어지며 미세하게 흔들리는 움직임**

A continuous, irregular jitter in position or rotation.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 주목 끌기 | 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Wiggle Motion, 위글 움직임, Random shake

## 선택 기준 / Selection

불안, 활력, 손으로 만든 듯한 미세한 생동감 / Unease, energy, or a hand-made sense of life in the smallest motion.

- 정지 화면 요소에 살아 있는 느낌을 조금 줄 때 / When a still element needs a little liveliness
- 긴장하거나 떨리는 캐릭터·카메라 흔들림을 표현할 때 / When showing a nervous character or a camera shake

좋은 예 / Good: 스티커가 2Hz로 위치 ±12px, 회전 ±3도 안에서 시드 고정 값으로 2초간 떤다
나쁜 예 / Bad: Math.random으로 매 렌더가 달라지거나 진폭이 40px을 넘어 화면 밖으로 밀린다
주의 / Avoid: 난수는 시드 고정 배열로만 · 진폭은 위치 ±20px, 회전 ±5도 이하 · 본문 텍스트에는 걸지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주파수 | 2Hz | 1~4Hz | 초당 목표 변경 횟수 |
| 위치 진폭 | ±12px | 4~20px | 1920x1080 기준 |
| 회전 진폭 | ±3deg | 1~5deg | 위치와 독립 |
| 길이 | 2.0s | 1~4s | 끝에서 0으로 복귀 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
let s = 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647 * 2 - 1;
for (let i = 0; i < 4; i++) tl.to('.el', { x: rnd() * 12, y: rnd() * 12, rotation: rnd() * 3, duration: 0.5, ease: 'sine.inOut' }, 0.2 + i * 0.5);
tl.to('.el', { x: 0, y: 0, rotation: 0, duration: 0.4 }, 2.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>에 위글을 넣어줘. 시드 고정 난수(seed 7)로 0.2초부터 0.5초마다 x, y는 ±12px, rotation은 ±3도 안의 새 목표로 sine.inOut 이동하고, 2.2초에 0으로 복귀해. Math.random은 쓰지 마. paused 타임라인 하나에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 wiggle을 적용해. LCG seed 7로 4개 목표를 만들어 x·y ±12px, rotation ±3deg, duration 0.5, position 0.2+i*0.5로 tween하고 2.2s에 0 복귀. 같은 페이지를 두 번 렌더해 1.0초 프레임이 픽셀 동일한지, 2.6초에 x=0인지 확인해.
```

### English · Claude Code
```text
Add a wiggle to <target> with GSAP. Using a fixed-seed random (seed 7), from 0.2s every 0.5s move to a new target within +/-12px in x and y and +/-3 degrees rotation with sine.inOut, and return to 0 at 2.2s. No Math.random. One paused timeline.
```

### English · Codex
```text
Apply wiggle to <target> in <file>. Build 4 targets from an LCG seeded with 7, x and y within +/-12px, rotation +/-3deg, duration 0.5, position 0.2 + i*0.5, then return to 0 at 2.2s. Render twice and confirm the 1.0s frame is pixel-identical and x is 0 at 2.6s.
```

예시 / Example: 위글를 `.hero`에 적용해. / Apply Wiggle to `.hero`.

## 적용 / Application

- HyperFrames: 시드 LCG로 값을 미리 뽑고 타임라인 구성 시점에 고정한다. 마지막에 0 복귀 tween을 넣어 loop 경계를 닫는다
- ReelForge: 브리프에 주파수·진폭·시드를 함께 싣는다. 같은 시드면 프레임이 항상 동일해야 한다
- Scrolline Deck: scrub에서는 진폭을 진행률 비례로 곱하고 방향 전환을 ease-out으로 처리한다. 순방향과 역방향이 같은 결과여야 한다

조합 / Pair with: [시간 흔들림 · Temporal Wiggle](../temporal-wiggle/) · [셰이크 · Shake](../shake/) · [화면 흔들림 · Screen Shake](../screen-shake/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-examples/expression-examples.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
