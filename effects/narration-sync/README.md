# Nº 405 해설 동기 모션 · Narration-synchronized Motion

> 클립 렌더 예정 / Clip rendering planned.

**원인을 말하는 순간 대응하는 변화가 화면에서 동시에 일어나게 맞추는 동기화**

When the narration names a cause, the matching visual change happens at the same moment.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Temporal contiguity of explanation and change, 설명과 변화의 동시 제시, Sparse keyword support with narration, 해설과 짧은 핵심어 지원

## 선택 기준 / Selection

말과 눈앞의 사건이 한 덩어리로 이어져 이해가 쉬워진다 / Speech and the event on screen fuse into one idea, which is easier to grasp.

- 용어를 말하는 순간 그 도형이 나타나야 할 때 / When a shape must appear as its term is spoken
- 원인과 결과를 말하는 타이밍에 두 변화를 각각 걸 때 / When two changes should land on their spoken cause and effect

좋은 예 / Good: 음성에서 매출이라고 말하는 1.24초에 막대가 0.8초 동안 올라오기 시작한다
나쁜 예 / Bad: 음성보다 0.5초 늦게 시각이 나타나 말이 끝난 뒤에야 이해된다
주의 / Avoid: 큐는 발화 시작 0~100ms 이내 · 큐 시각은 자막 타임스탬프에서 읽는다 · 시각 변화는 발화보다 먼저 시작하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 큐 지연 | 0~100ms | 0~150ms | 발화 시작 기준 |
| 변화 길이 | 0.8s | 0.5~1.2s | 등장 tween |
| 큐 수 | 2~4 | 1~5 | 한 장면 기준 |
| 이징 | power2.out | power2~power3.out | 도착이 분명 |

## 구현 / Implementation (GSAP)

```js
const cues = { revenue: 1.24, cost: 3.10 };
tl.from('.bar-revenue', { scaleY: 0, transformOrigin: '50% 100%', duration: 0.8, ease: 'power2.out' }, cues.revenue + 0.05)
  .from('.bar-cost', { scaleY: 0, transformOrigin: '50% 100%', duration: 0.8, ease: 'power2.out' }, cues.cost + 0.05);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>의 해설 동기 모션을 넣어줘. cues에 단어별 발화 시각 {revenue:1.24, cost:3.10}을 두고, 각 시각 +0.05초에 해당 막대가 scaleY 0에서 1로 0.8초 power2.out으로 올라오게 해. 큐 시각은 오디오 타임스탬프에서 읽은 값이야. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 narration-sync를 적용해. cues={revenue:1.24,cost:3.10}로 막대 tween을 position cues.x+0.05, 0.8s, power2.out에 건다. 1.2초·1.4초·3.2초를 캡처해 발화 시각 전에는 막대가 0이고 큐 후 100ms 이내에 자라기 시작하는지 확인해.
```

### English · Claude Code
```text
Add narration-synced motion to <target> with GSAP. Put word start times in cues {revenue:1.24, cost:3.10}, and at each time + 0.05s scale the matching bar from scaleY 0 to 1 over 0.8s with power2.out. Read cue times from the audio timestamps. One paused timeline.
```

### English · Codex
```text
Apply narration-sync to <target> in <file>. With cues={revenue:1.24,cost:3.10} tween the bars at position cues.x + 0.05, 0.8s, power2.out. Capture at 1.2s, 1.4s and 3.2s and check the bar is 0 before its cue and starts growing within 100ms after it.
```

예시 / Example: 해설 동기 모션를 `.hero`에 적용해. / Apply Narration-synchronized Motion to `.hero`.

## 적용 / Application

- HyperFrames: 큐 시각을 JSON 객체로 분리하고 오디오 클립 시작에 맞춘다. seek 시 오디오와 시각이 함께 가도록 타임라인 시각 기준을 통일
- ReelForge: 브리프에 대본, 큐 시각(단어별 타임스탬프), 큐 지연 값을 싣는다. 시각은 큐 + 0.05초
- Scrolline Deck: scrub에서는 시간 큐를 진행률로 바꿔 사용한다. 텍스트 위치와 도형 등장을 같은 진행률 구간에 둔다

조합 / Pair with: [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [단어 강조 · Word Emphasis](../word-emphasis/) · [순차 동작 · Action Sequence](../action-sequence/)

출처 / Sources: [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) (unknown) · [Cambridge University Press](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
