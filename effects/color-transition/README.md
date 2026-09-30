# Nº 077 색 전환 · Color Transition

> 클립 렌더 예정 / Clip rendering planned.

**대상의 색이 기존 색에서 다음 색으로 부드럽게 바뀌는 전환**

An element's color blends smoothly from its current color to the next.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 강조, 피드백 | 웹 UI, 설명 영상, 데이터 스토리 | gsap |

다른 이름 / Also known as: Color-state transition, 상태 색 변화, FadeToColor

## 선택 기준 / Selection

활성화, 역할 변화, 상태 전이가 일어났음을 알린다 / Signals activation, a role change or a state transition.

- 버튼·노드가 대기에서 활성 상태로 바뀔 때 / When a button or node goes from idle to active
- 차트 막대가 임계값을 넘으며 경고색으로 바뀔 때 / When a chart bar crosses a threshold and turns to a warning color

좋은 예 / Good: 막대가 0.45초 동안 청색 #2f6bff에서 노랑 #ffc83d로 바뀌고 옆 라벨도 같은 시각에 색이 바뀐다
나쁜 예 / Bad: 색만 바뀌고 다른 단서가 없어 색맹 시청자가 변화를 못 읽거나, 색 전환이 0.1초 미만이라 깜빡임으로 보인다
주의 / Avoid: 색만으로 의미 전달 금지(아이콘·라벨 병행) · 길이 0.25초 미만 금지 · 전후 색의 대비비 3:1 이상

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 0.45s | 0.3~0.8s | 색 보간 |
| 이징 | sine.inOut | sine~power2.inOut | 부드럽게 |
| 전 색 | #2f6bff | 브랜드 토큰 | 시작 |
| 후 색 | #ffc83d | 브랜드 토큰 | 도착 |

## 구현 / Implementation (GSAP)

```js
tl.to('.bar', { backgroundColor: '#ffc83d', duration: 0.45, ease: 'sine.inOut' }, 0.4)
  .to('.bar-label', { color: '#7a5a00', duration: 0.45, ease: 'sine.inOut' }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 막대의 색 전환을 넣어줘. 0.4초부터 0.45초 동안 backgroundColor를 #2f6bff에서 #ffc83d로 sine.inOut으로 바꾸고 같은 시각에 라벨 글자색도 #7a5a00으로 바꿔. 색만으로 의미를 전하지 않게 라벨에 상태 문구를 함께 넣어줘. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 color-transition을 적용해. backgroundColor #2f6bff→#ffc83d, 0.45s, sine.inOut, position 0.4, 라벨 color #7a5a00 동시. 0.4초·0.6초·1.0초를 캡처해 중간 색이 보간되는지, 전후 대비비가 3:1 이상인지 계산해.
```

### English · Claude Code
```text
Add a color transition to the <target> bar with GSAP. From 0.4s over 0.45s change backgroundColor from #2f6bff to #ffc83d with sine.inOut, and change the label text color to #7a5a00 at the same time. Do not rely on color alone, so include a state phrase in the label. Paused timeline.
```

### English · Codex
```text
Apply color-transition to <target> in <file>. backgroundColor #2f6bff to #ffc83d, 0.45s, sine.inOut, position 0.4, label color #7a5a00 in parallel. Capture at 0.4s, 0.6s and 1.0s to check the mid color interpolates and compute that before and after contrast is at least 3:1.
```

예시 / Example: 색 전환를 `.hero`에 적용해. / Apply Color Transition to `.hero`.

## 적용 / Application

- HyperFrames: 색은 hex나 rgb로 통일해 GSAP 코어 보간이 안정되게 한다. fromTo로 시작 색을 고정한다
- ReelForge: 브리프에 전후 색 토큰, 길이, 변화 이유 문구(라벨)를 싣는다
- Scrolline Deck: scrub에서는 진행률 0.3~0.6 구간에서만 전환하고 나머지는 유지한다. 색 전환은 ease-out 또는 linear

조합 / Pair with: [상태 보간 · State Tween](../state-tween/) · [임계값 경고 펄스 · Threshold Pulse](../threshold-pulse/) · [차트 필터 페이드 · Chart Filter Fade](../chart-filter-fade/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
