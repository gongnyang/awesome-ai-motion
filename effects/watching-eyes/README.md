# Nº 620 눈동자 시선 루프 · Watching Eyes

> 클립 렌더 예정 / Clip rendering planned.

**한 쌍의 눈동자가 좌우로 이동하고 눈꺼풀이 잠깐 닫힌다.**

Pupils look from side to side and the eyelids briefly close.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Watching Eyes Loader, 움직이는 눈 로더

## 선택 기준 / Selection

살아 있는 대기와 친근함을 준다. / Adds a friendly sense of life to a waiting state.

- 챗봇 대기 아이콘의 눈동자가 좌우를 보고 150ms 동안 깜박인다에서 지속 활동을 표시할 때 / Give a chatbot waiting icon a gentle gaze and blink.
- 짧은 반복으로 살아 있는 대기와 친근함을 준다 때 / Use a short repeating motion to communicate adds a friendly sense of life to a waiting state.

좋은 예 / Good: 챗봇 대기 아이콘의 눈동자가 좌우를 보고 150ms 동안 깜박인다
나쁜 예 / Bad: 시선 이동이 매 프레임 달라져 사용자의 입력을 감시하는 느낌을 준다
주의 / Avoid: 시선 이동이 매 프레임 달라져 사용자의 입력을 감시하는 느낌을 준다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 3000ms | 2250~4500ms | 한 번의 반복에 걸리는 시간이다 |
| 시선 거리 | 6px | 3~8px | 동공이 눈 바깥으로 나가지 않게 한다 |
| 깜박임 | 150ms | 100~200ms | 주기 끝의 5% 구간을 사용한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx .pupil { animation:gaze 3s ease-in-out infinite; }
.fx .eye { transform-origin:center; animation:blink 3s linear infinite; }
@keyframes gaze { 0%,100% { transform:translateX(0); } 30% { transform:translateX(6px); } 65% { transform:translateX(-6px); } }
@keyframes blink {
  0%,90%,95%,100% { transform:scaleY(1); }
  92.5% { transform:scaleY(.05); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 눈동자 시선 루프를 적용해. 주기 3000ms, 시선 거리 6px, 깜박임 150ms, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 눈동자 시선 루프를 적용해. 주기 3000ms, 시선 거리 6px, 깜박임 150ms, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1.5초, 3초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Watching Eyes to <target>. Use a 3-second cycle, 6px pupil travel and a 150ms blink, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Watching Eyes in the waiting indicator or background region of <file>. Use a 3-second cycle, 6px pupil travel and a 150ms blink, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 1.5, and 3 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 눈동자 시선 루프를 `.hero`에 적용해. / Apply Watching Eyes to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 3000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 눈동자 시선 루프, 주기 3000ms, 시선 거리 6px, 깜박임 150ms를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 3초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
