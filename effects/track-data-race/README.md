# Nº 299 트랙 데이터 레이스 · Track Data Race

> 클립 렌더 예정 / Clip rendering planned.

**경쟁자 표식들이 각자의 시간 기록에 맞춰 트랙을 이동하고 순위가 바뀐다.**

Competitors move along a track according to their recorded timing checkpoints.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Sports track data race, 트랙 경로 데이터 레이스

## 선택 기준 / Selection

기록 차이를 실제 경주의 거리와 속도로 체감한다. / Turns differences in race times into visible distance and speed.

- 선수 기록 차이를 트랙 거리로 비교할 때 / Use when explaining track data race in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 육상 장면에서 경쟁자 표식들이 각자의 시간 기록에 맞춰 트랙을 이동하고 순위가 바뀐다. 8s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 모든 선수를 같은 일정 속도로 움직여 기록을 왜곡한다
주의 / Avoid: 모든 선수를 같은 일정 속도로 움직여 기록을 왜곡한다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 8s | 5.6~12s | 후보의 주요 이동 또는 유지 시간이다 |
| 카메라 배율 | 2 | 1~2 | 선두 추적 시 전체 맥락을 함께 남긴다 |
| 결승 정지 | 1500ms | 1000~2500ms | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {time: 0};
const tl = gsap.timeline({paused: true});
tl.to(state, {time: raceSeconds, duration: 8, ease: 'none',
  onUpdate: () => drawRacersAtRecordedTime(state.time)});
tl.to({}, {duration: 1.5});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 트랙 데이터 레이스 효과를 적용해. 거리와 기록 시간의 대응을 계산해 SVG 트랙상의 위치를 재생 시각으로 갱신한다. 기본 구간은 8초, 카메라 배율은 2, 결승 정지은 1500ms, 이징은 none로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 트랙 데이터 레이스 장면에 적용해. 거리와 기록 시간의 대응을 계산해 SVG 트랙상의 위치를 재생 시각으로 갱신한다. 8초 구간과 none, 카메라 배율 2, 결승 정지 1500ms를 적용하고 초기 상태를 명시해. 0초, 4초, 8초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Track Data Race to <target>. Competitors move along a track according to their recorded timing checkpoints. Use a 8-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the camera scale to 2 and the finish hold to 1500ms. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Track Data Race in the relevant scene in <file>. Competitors move along a track according to their recorded timing checkpoints. Use a 8-second primary interval with none easing and explicit initial states. Set the camera scale to 2 and the finish hold to 1500ms. Capture at 0, 4, and 8 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 트랙 데이터 레이스를 `.hero`에 적용해. / Apply Track Data Race to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 8초 구간, 카메라 배율 2, 결승 정지 1500ms와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
