# Nº 017 동시 동작 · Concurrent Motion

> 클립 렌더 예정 / Clip rendering planned.

**여러 대상이나 속성이 같은 시간대에 함께 움직이는 합성**

Several targets or properties move in the same window of time.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 설명, 비교 | 설명 영상, 데이터 스토리, 발표 | gsap |

다른 이름 / Also known as: Concurrent action composition, 동시 동작 합성, AnimationGroup

## 선택 기준 / Selection

동시에 일어나는 변화의 관계. 함께 바뀌는 것을 한 번에 읽는다 / Relationships between simultaneous changes. Things that change together are read at once.

- 두 값이 동시에 반대로 움직이는 관계를 보여 줄 때 / When two values move in opposite directions at the same time
- 위치와 색이 하나의 사건으로 함께 바뀔 때 / When position and color change as one event

좋은 예 / Good: 왼쪽 막대는 줄고 오른쪽 막대는 늘어나는 것이 정확히 같은 0.9초 동안 진행된다
나쁜 예 / Bad: 각 요소의 시작 시각이 조금씩 달라 같은 사건으로 보이지 않는다
주의 / Avoid: 동시 대상 4개 이하(넘으면 그룹화) · 길이와 이징을 같게 하거나 의도적으로 다르게 · 도착 시각을 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 길이 | 0.9s | 0.6~1.2s | 모든 대상 공통 |
| 시작 차이 | 0ms | 0~40ms | 동시로 보이는 한도 |
| 이징 | power2.inOut | power1~power3.inOut | 공통 적용 |
| 홀드 | 0.6s | 0.4~1.0s | 도착 뒤 정지 |

## 구현 / Implementation (GSAP)

```js
tl.to('.left', { height: 120, duration: 0.9, ease: 'power2.inOut' }, 0.3)
  .to('.right', { height: 360, duration: 0.9, ease: 'power2.inOut' }, 0.3)
  .to('.gauge', { rotation: 60, duration: 0.9, ease: 'power2.inOut' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>의 .left, .right, .gauge가 정확히 같은 시간에 움직이게 해줘. 0.3초 시작, 0.9초 길이, power2.inOut 공통이고 .left는 높이 120px, .right는 360px, .gauge는 rotation 60도가 돼. 시작 시각이 어긋나지 않게 같은 position을 써. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 concurrent-motion을 적용해. 세 tween 모두 position 0.3, duration 0.9, ease power2.inOut. 0.3초·0.75초·1.2초를 캡처해 세 대상의 진행률(현재값-시작값)/(목표값-시작값)이 서로 같은지 확인해.
```

### English · Claude Code
```text
Make .left, .right and .gauge of <target> move at exactly the same time with GSAP. Start 0.3s, duration 0.9s, ease power2.inOut for all; .left height 120px, .right 360px, .gauge rotation 60 degrees. Use the same position so starts do not drift. Paused timeline.
```

### English · Codex
```text
Apply concurrent-motion to <target> in <file>. All three tweens at position 0.3, duration 0.9, ease power2.inOut. Capture at 0.3s, 0.75s and 1.2s and check the progress (current-start)/(target-start) is equal for all three.
```

예시 / Example: 동시 동작를 `.hero`에 적용해. / Apply Concurrent Motion to `.hero`.

## 적용 / Application

- HyperFrames: 같은 position 값 0.3을 여러 tween에 준다. 라벨을 쓰면 시작 시각 관리가 쉽다
- ReelForge: 브리프에 동시 대상 목록과 공통 길이·이징을 싣는다
- Scrolline Deck: scrub에서는 모든 대상이 같은 진행률을 공유한다. 서로 다른 ease를 쓰면 도착 시각이 어긋나므로 통일

조합 / Pair with: [그룹 이동 · Group Motion](../group-motion/) · [동작 중첩 · Temporal Overlap](../temporal-overlap/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/composition.py) (MIT) · [motion-canvas/motion-canvas](https://motioncanvas.io/docs/flow/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
