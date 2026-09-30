# Nº 401 타임라인 사건 전개 · Timeline Scrub

> 클립 렌더 예정 / Clip rendering planned.

**시간축의 재생 표시가 이동하고 해당 시점의 사건 카드나 지도 상태가 나타난다.**

A playhead moves along a time axis and reveals the event or map state at each date.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Timeline scrub narrative, 타임라인 따라 역사 전개, Timed event captions, 시간별 사건 캡션

## 선택 기준 / Selection

사건의 선후와 변화를 시간에 연결한다. / Connects chronological order to changing states.

- 타임라인 사건 전개으로 원인과 결과를 설명할 때 / Explain causes and results using timeline scrub.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 시간축 표시가 연도에 도착하면 대응 사건 카드를 밝힌다.
나쁜 예 / Bad: 시간축과 사건 카드가 서로 다른 시점을 표시한다.
주의 / Avoid: 시간축과 사건 카드가 서로 다른 시점을 표시한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1.2s | 0.84~1.68s | 첫 동작 또는 후보의 기본 단계 길이 |
| 표시 이동 | 500ms | 300~700ms | 사건 도착 때 카드를 바꾼다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
events.forEach((card,i)=>{
  tl.to(marker,{x:i*240,duration:0.5,ease:"power2.inOut"},i*1.2);
  tl.set(events,{opacity:0},i*1.2+0.5);
  tl.set(card,{opacity:1},i*1.2+0.5);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 타임라인 사건 전개을 적용해. 시간축의 재생 표시가 이동하고 해당 시점의 사건 카드나 지도 상태가 나타난다. 시간값으로 축 표시와 사건 그룹의 opacity를 동기 갱신한다. 기본 지속은 1.2s, 표시 이동은 500ms, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 타임라인 사건 전개을 적용해. 기본 지속은 1.2s, 표시 이동은 500ms, 이징은 power2.inOut로 설정한다. 0초, 0.6초, 1.2초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Timeline Scrub to <target> in <file>. A playhead moves along a time axis and reveals the event or map state at each date. Use a base duration of 1.2s and power2.inOut; use 500ms marker travel at 1200ms event intervals and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Timeline Scrub in the explanatory scene of <file> for <target>, using 1.2s and power2.inOut with 500ms marker travel at 1200ms event intervals. Capture at 0, 0.6, and 1.2 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 타임라인 사건 전개를 `.hero`에 적용해. / Apply Timeline Scrub to `.hero`.

## 적용 / Application

- HyperFrames: 타임라인 사건 전개의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 타임라인 사건 전개, 기본 지속 1.2s, 표시 이동 500ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 표시 이동 500ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [차트 스크럽 · Chart Scrub](../chart-scrub/) · [활성 표시 이동 · Active Indicator Glide](../active-indicator-glide/)

출처 / Sources: [Vox](https://www.youtube.com/watch?v=kIID5FDi2JQ) (unknown) · [Flourish](https://flourish.studio/blog/line-chart-race/) (unknown) · [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
