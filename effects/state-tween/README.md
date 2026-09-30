# Nº 024 상태 보간 · State Tween

> 클립 렌더 예정 / Clip rendering planned.

**위치·크기·회전·색이 저장된 다음 상태로 동시에 바뀌는 보간**

Position, size, rotation and color change together toward a saved next state.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 설명, 순서·흐름 | 설명 영상, 웹 UI, 데이터 스토리 | gsap |

다른 이름 / Also known as: State-to-state property tween, 목표 상태 속성 보간, MoveToTarget, State transition, 상태 전이, Compound transform, 복합 변환

## 선택 기준 / Selection

한 대상의 상태가 연속적으로 바뀌었다는 것을 읽게 한다 / Shows one object's state changing continuously.

- 카드가 접힘 상태에서 펼침 상태로 바뀔 때 / When a card goes from collapsed to expanded
- 아이콘이 대기에서 활성으로 바뀔 때 / When an icon goes from idle to active
- 다이어그램 노드가 위치와 색을 함께 바꿀 때 / When a diagram node changes position and color together

좋은 예 / Good: 노드가 x 0→420px, scale 1→1.3, rotation 0→15도, 색 파랑→노랑으로 0.8초 동안 함께 바뀐다
나쁜 예 / Bad: 속성마다 길이와 이징이 달라 각자 따로 움직이는 것처럼 보이거나, 목표 상태가 불명확하다
주의 / Avoid: 속성마다 같은 길이·이징을 쓴다(의도적 차이 제외) · 시작과 목표 상태를 코드에 명시 · 색은 알파와 함께 보간

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 0.8s | 0.5~1.2s | 모든 속성 공통 |
| 이징 | power2.inOut | power1~power3.inOut | smooth |
| 목표 상태 | x, scale, rotation, color | 속성 2~4개 | 한 번에 너무 많이 바꾸지 않는다 |
| 홀드 | 0.6s | 0.4~1.0s | 도착 뒤 정지 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.node', { x: 0, scale: 1, rotation: 0, backgroundColor: '#2f6bff' }, { x: 420, scale: 1.3, rotation: 15, backgroundColor: '#ffc83d', duration: 0.8, ease: 'power2.inOut' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>의 상태 보간을 넣어줘. 0.3초부터 0.8초 동안 x 0→420px, scale 1→1.3, rotation 0→15도, backgroundColor #2f6bff→#ffc83d를 power2.inOut으로 동시에 바꾸고, 시작 상태를 fromTo에 명시해. 도착 뒤 0.6초 정지. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 state-tween을 적용해. fromTo 시작 {x 0,scale 1,rotation 0,bg #2f6bff}, 목표 {x 420,scale 1.3,rotation 15,bg #ffc83d}, 0.8s, power2.inOut, position 0.3. 0.3초·0.7초·1.1초를 캡처해 모든 속성이 같은 비율로 진행하는지 확인해.
```

### English · Claude Code
```text
Add a state tween to <target> with GSAP. From 0.3s over 0.8s change x 0 to 420px, scale 1 to 1.3, rotation 0 to 15 degrees and backgroundColor #2f6bff to #ffc83d together with power2.inOut, with the start state written in fromTo. Hold 0.6s after arrival. Paused timeline.
```

### English · Codex
```text
Apply state-tween to <target> in <file>. fromTo start {x 0, scale 1, rotation 0, bg #2f6bff} to {x 420, scale 1.3, rotation 15, bg #ffc83d}, 0.8s, power2.inOut, position 0.3. Capture at 0.3s, 0.7s and 1.1s to check all properties progress at the same ratio.
```

예시 / Example: 상태 보간를 `.hero`에 적용해. / Apply State Tween to `.hero`.

## 적용 / Application

- HyperFrames: fromTo로 시작·목표 상태를 함께 적으면 seek 시 초기화가 확실하다. 색은 hex로 통일한다
- ReelForge: 브리프에 상태 A/B를 속성 표로 싣고 길이는 한 값으로 공유한다
- Scrolline Deck: scrub에서는 진행률 p가 A에서 B로의 보간 비율이다. 각 속성에 같은 ease-out을 적용

조합 / Pair with: [모션 블렌드 · Motion Blending](../motion-blend/) · [색 전환 · Color Transition](../color-transition/) · [동시 동작 · Concurrent Motion](../concurrent-motion/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) (MIT) · motion dictionary 1-principles.md#6. 모션 위계·코레오그래피 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
