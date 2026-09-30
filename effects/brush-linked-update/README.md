# Nº 253 브러시 연동 갱신 · Brush-linked Update

> 클립 렌더 예정 / Clip rendering planned.

**선택 창이 이동하거나 넓어지면 상세 차트가 해당 기간의 데이터로 연속 갱신된다.**

Moving or resizing a brush window updates a linked detail chart.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 데이터 증명 | 데이터 스토리, 스크롤덱, 발표 | svg |

다른 이름 / Also known as: Brush-window linked update, 범위 선택 창과 연결 차트

## 선택 기준 / Selection

전체 시계열과 선택 구간의 관계를 이해한다. / Connects the full time series to the selected interval.

- 브러시 연동 갱신으로 전체 시계열과 선택 구간의 관계를 이해한다 때 / Use this effect when you need to communicate: Connects the full time series to the selected interval.
- 스크롤덱에서 데이터의 중간 상태와 선택 범위를 설명할 때 / Explain intermediate values and selected ranges in a scroll-driven data story.

좋은 예 / Good: 개요의 기간 창을 옮기면 상세 차트의 같은 기간이 함께 바뀐다
나쁜 예 / Bad: 선택 기간과 상세 축의 날짜가 서로 다르다
주의 / Avoid: 선택 기간과 상세 축의 날짜가 서로 다르다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1s | 0.6~1.5s | 1920x1080 시연 기준의 한 동작 시간 |
| 상세 갱신 시간 | 400ms | 200~600ms | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const range = {start:0,end:4};
const data = [12,18,10,25,21,30,26,35];
tl.to(range,{start:2,end:6,duration:1,ease:'power2.inOut',onUpdate:()=>{
  gsap.set('.brush',{attr:{x:range.start*60,width:(range.end-range.start)*60}});
  gsap.utils.toArray('.detail-dot').forEach((el,i)=>{const t=range.start+i*(range.end-range.start)/3,k=Math.floor(t);gsap.set(el,{attr:{cx:i*100,cy:300-5*(data[k]+(data[Math.min(k+1,7)]-data[k])*(t-k))}});});
}},0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 브러시 연동 갱신을 적용해. 선택 창이 이동하거나 넓어지면 상세 차트가 해당 기간의 데이터로 연속 갱신된다. 기본 지속 1초, 상세 갱신 시간 400ms, 이징 power2.inOut를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 브러시 연동 갱신을 적용해. 기본 지속 1초, 상세 갱신 시간 400ms, 이징 power2.inOut를 사용해. 0초, 0.5초, 1.4초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Brush-linked Update to <target> in <file>. Moving or resizing a brush window updates a linked detail chart. Use a 1-second duration, a 400ms detail update, and power2.inOut easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Brush-linked Update to <target> in the demonstration scene in <file>. Use a 1-second duration, a 400ms detail update, and power2.inOut easing. Capture at 0, 0.5, and 1.4 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 브러시 연동 갱신를 `.hero`에 적용해. / Apply Brush-linked Update to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 브러시 연동 갱신 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 1초, 상세 갱신 시간 400ms, 이징 power2.inOut를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 1초, 상세 갱신 시간 400ms, 이징 power2.inOut와 시작 상태, 완료 상태를 싣는다. 개요의 기간 창을 옮기면 상세 차트의 같은 기간이 함께 바뀐다.
- Scrolline Deck: 진행률 0~1을 1초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [차트 스크럽 · Chart Scrub](../chart-scrub/) · [컨트롤 연동 · Control Target Sync](../control-target-sync/)

출처 / Sources: [MIT Visualization Group](https://vis.csail.mit.edu/pubs/animated-vega-lite/) (unknown) · [d3/d3-zoom](https://d3js.org/d3-zoom) (ISC) · [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
