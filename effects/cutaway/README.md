# Nº 154 컷어웨이 · Cutaway

> 클립 렌더 예정 / Clip rendering planned.

**주행동을 보여주다가 관련 대상이나 반응 장면을 잠깐 삽입하고 원래 행동으로 돌아온다**

The main action is interrupted by a brief related shot or reaction, then it returns.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 설명, 분위기 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Cutaway Shot, Humor reaction insert, 짧은 반응 삽입

## 선택 기준 / Selection

주행동 중에 관련 화면이나 반응을 잠깐 끼워 맥락을 채우고 편집 공백을 자연스럽게 덮는다 / Fills in context and naturally hides edit gaps.

- 설명 중 관련 화면이나 참고 영상을 잠깐 보여 줄 때 / When briefly showing a related screen or reference during an explanation
- 말실수나 편집 점프를 다른 화면으로 자연스럽게 덮을 때 / When covering a slip of the tongue or an edit jump with another shot

좋은 예 / Good: 주 영상이 계속 흐르는 동안 관련 화면이 1.2초 동안 전체로 들어왔다 나가고 0.7초 더 원래 행동을 보여 준다
나쁜 예 / Bad: 삽입이 짧아 알아볼 수 없거나(0.3초), 삽입 중 주 영상 시간이 멈춰 복귀 후 같은 말이 반복된다
주의 / Avoid: 삽입 중에도 주 영상의 시간은 흐르게 한다 · 유머 반응 삽입은 500ms 이하로 짧게

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 입출 컷 | 0ms | 고정 | 즉시 |
| 삽입 홀드 | 1200ms | 800~1600ms | 유머 반응은 500ms |
| 복귀 홀드 | 700ms | 500~1000ms |  |
| 작은 창 크기 | 화면의 28% | 20~35% | 전체 화면 대신 사용할 때 |
| 작은 창 위치 | 우하단 여백 48px |  | 대체 형태 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.set('.cut', { autoAlpha: 1 }, 3.0);
tl.set('.cut', { autoAlpha: 0 }, 4.2);
// 주 영상 .main 은 컷 구간에도 계속 재생(시계 공유)
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상 3.0초에 컷어웨이를 넣어줘. 3.0초에 관련 화면 .cut을 표시하고 4.2초에 숨겨. 주 영상은 컷 구간에도 계속 재생돼야 하고, 복귀 뒤 0.7초 유지해. 전환 트윈 없이 tl.set만 사용하고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 컷어웨이를 구현해. 3.0초 .cut 표시, 4.2초 숨김, tl.set. .main은 계속 재생. 2.9초, 3.6초, 4.3초, 5.0초 시점을 캡처해 3.6초에 .cut이 보이는지, 4.3초에 .main으로 돌아왔는지, .main의 진행이 3.6초 이전보다 진행돼 있는지 확인해.
```

### English · Claude Code
```text
Add a Cutaway to <target> at 3.0s. Show the related layer .cut at 3.0s and hide it at 4.2s. The main video keeps playing during the cutaway; hold 0.7s after returning. Use tl.set only with no transition tweens, and make it seekable on a paused timeline.
```

### English · Codex
```text
Implement Cutaway in <file>. .cut shown at 3.0s, hidden at 4.2s via tl.set; .main keeps playing. Capture at 2.9s, 3.6s, 4.3s, and 5.0s to confirm .cut is visible at 3.6s, .main is back at 4.3s, and that .main has progressed beyond where it was before the cutaway.
```

예시 / Example: 컷어웨이를 `.hero`에 적용해. / Apply Cutaway to `.hero`.

## 적용 / Application

- HyperFrames: 주 영상은 항상 재생하고 .cut 가시성만 교체한다. 두 레이어를 하나의 paused 타임라인 시계에 두면 seek 시 시간이 어긋나지 않는다
- ReelForge: 씬 워커 브리프에 삽입 시각 3.0초, 홀드 1.2초, 전체/작은 창 여부를 싣는다
- Scrolline Deck: scrub에서는 진행률 구간 하나에서만 .cut을 보이고 주 영상 진행은 계속된다. 구간 앞뒤에 보간은 넣지 않는다

조합 / Pair with: [인서트 컷 · Insert Shot](../insert-shot/) · [리액션 컷 · Reaction Cut](../reaction-cut/) · [교차 편집 · Cross Cutting](../cross-cutting/)

출처 / Sources: [CapCut](https://www.capcut.com/resource/types-of-filmmaking-transitions) (unknown) · [Fireship](https://www.youtube.com/watch?v=vKJpN5FAeF4) (unknown) · motion dictionary 2-transitions-camera.md#11. 컷어웨이 · Cutaway Shot (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
