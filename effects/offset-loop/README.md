# Nº 612 누적 오프셋 루프 · Offset Loop

> 클립 렌더 예정 / Clip rendering planned.

**같은 동작이 반복될 때마다 마지막 변위가 더해져 계속 전진한다.**

Each repetition adds its final displacement and continues forward.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: loopOut offset

## 선택 기준 / Selection

끝없는 이동과 누적을 표현한다. / Communicates accumulation and ongoing travel.

- 변위가 누적됨을 설명할 때 / Explain cumulative displacement.
- 반복 생산이나 단계 상승을 표현할 때 / Represent repeated production or rising stages.

좋은 예 / Good: 물체가 매초 80px씩 더 이동해 누적 진행을 보여 준다.
나쁜 예 / Bad: 화면 경계를 넘는 이동을 무한 반복해 대상이 사라진다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단계 지속 | 1s | 0.6~2s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 단계 변위 | 80px | 40~120px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 단계 수 | 4 | 2~8 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 이징 | none | none 또는 power1.inOut | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
for (let i = 0; i < 4; i++) {
  tl.fromTo('.item', { x: i * 80 },
    { x: (i + 1) * 80, duration: 1, ease: 'none', immediateRender: false }, i);
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 누적 오프셋 루프을 구현해. 단계 지속 1s, 단계 변위 80px, 단계 수 4, 이징 none, 이징 none을 적용해. 주기 번호의 누적 변위에 주기 내부 보간값을 더한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 누적 오프셋 루프 장면 레이어에 적용해. 단계 지속 1s, 단계 변위 80px, 단계 수 4, 이징 none, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Offset Loop on <target>. Use step duration 1s; step displacement 80px; step count 4; easing none; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Offset Loop to the scene layer in <file>. Use step duration 1s; step displacement 80px; step count 4; easing none and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 누적 오프셋 루프를 `.hero`에 적용해. / Apply Offset Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 누적 오프셋 루프의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 단계 지속 1s, 단계 변위 80px, 단계 수 4, 이징 none을 싣고 gsap 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 1s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [연속 이동 · Continuous Motion](../continuous-motion/) · [계단식 모션 · Stepped Motion](../stepped-motion/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-language-reference/expression-language-reference.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
