# Nº 013 순차 동작 · Action Sequence

> 클립 렌더 예정 / Clip rendering planned.

**한 동작이 끝난 뒤 다음 동작이 시작해 단계를 차례로 보여 주는 연결**

One action finishes and the next begins, showing steps in order.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 순서·흐름, 설명 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: Sequential action chain, 순차 동작 연결, Succession, Sequence

## 선택 기준 / Selection

과정의 선후 관계가 정확히 읽힌다. 한 번에 하나씩 이해하게 한다 / The order of a process reads exactly. Viewers take one step at a time.

- 절차나 파이프라인 단계를 순서대로 보여 줄 때 / When showing procedure or pipeline steps in order
- 원인 다음 결과가 이어지는 설명 / When a cause is followed by its result

좋은 예 / Good: 입력 상자 등장 0.7초, 0.12초 쉼, 화살표 그리기 0.7초, 쉼, 결과 상자 등장 0.7초 순으로 이어진다
나쁜 예 / Bad: 단계가 겹치거나 간격이 없어 어디서 끝나고 시작하는지 모르겠다
주의 / Avoid: 단계 간 간격 0.08~0.2초 · 단계 수 5개 이하(넘으면 나누기) · 각 단계는 하나의 의미만

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단계 길이 | 0.7s | 0.5~1.0s | 한 단계 tween |
| 단계 간격 | 0.12s | 0.08~0.2s | 끝과 다음 시작 사이 |
| 단계 수 | 3 | 2~5 | 한 장면 기준 |
| 이징 | power2.out | power2~power3.out | 도착이 분명 |

## 구현 / Implementation (GSAP)

```js
const steps = ['.s1', '.s2', '.s3'];
steps.forEach((s, i) => tl.from(s, { opacity: 0, y: 24, duration: 0.7, ease: 'power2.out' }, 0.3 + i * (0.7 + 0.12)));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 단계 .s1, .s2, .s3를 순서대로 보여줘. 0.3초에 시작해 각 단계는 opacity 0, y +24px에서 0.7초 power2.out으로 나타나고 다음 단계는 앞 단계 끝나고 0.12초 뒤에 시작해. 마지막 뒤 0.6초 정지. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 action-sequence를 적용해. steps.forEach로 from({opacity 0, y 24}, 0.7s, power2.out)를 position 0.3+i*0.82에 건다. 0.5초·1.3초·2.2초를 캡처해 항상 한 단계만 움직이는지, 앞 단계가 남아 있는지 확인해.
```

### English · Claude Code
```text
Reveal the steps .s1, .s2 and .s3 of <target> in order with GSAP. Start at 0.3s. Each step animates from opacity 0, y +24px over 0.7s with power2.out, and the next starts 0.12s after the previous ends. Hold 0.6s after the last. One paused timeline.
```

### English · Codex
```text
Apply action-sequence to <target> in <file>. With steps.forEach add from({opacity 0, y 24}, 0.7s, power2.out) at position 0.3 + i*0.82. Capture at 0.5s, 1.3s and 2.2s to check only one step moves at a time and earlier steps remain.
```

예시 / Example: 순차 동작를 `.hero`에 적용해. / Apply Action Sequence to `.hero`.

## 적용 / Application

- HyperFrames: 단계 시작 시각을 i*(길이+간격)으로 계산해 넣으면 편집 후에도 순서가 유지된다. tl.from의 즉시 render 옵션에 주의
- ReelForge: 브리프에 단계 배열, 단계 길이, 간격, 각 단계 해설 한 줄을 싣는다
- Scrolline Deck: scrub에서는 단계를 진행률 구간 n등분에 매핑하고 사이에 짧은 정지 구간을 둔다

조합 / Pair with: [동작 중첩 · Temporal Overlap](../temporal-overlap/) · [단계별 설명 모션 · Segmented Explanation](../segmented-explanation/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/composition.py) (MIT) · motion dictionary 1-principles.md#5. 타이밍·간격·리듬 기본기 (own) · [motion-canvas/motion-canvas](https://motioncanvas.io/docs/flow/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
