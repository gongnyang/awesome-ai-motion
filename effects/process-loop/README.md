# Nº 391 행위자 과정 순환 · Process Loop

> 클립 렌더 예정 / Clip rendering planned.

**작은 캐릭터나 아이콘이 단계별 위치로 이동하며 처리 과정이 순환한다.**

An actor or icon visits successive stages in a repeating process.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Process loop with actors

## 선택 기준 / Selection

과정에서 각 역할과 순서를 기억한다. / Clarifies roles and order within a cycle.

- 행위자 과정 순환으로 원인과 결과를 설명할 때 / Explain causes and results using process loop.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 아이콘이 네 처리 단계에서 잠깐 멈추며 현재 단계를 강조한다.
나쁜 예 / Bad: 아이콘이 끊임없이 돌아 단계 이름을 읽지 못한다.
주의 / Avoid: 아이콘이 끊임없이 돌아 단계 이름을 읽지 못한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 4s | 2.80~5.60s | 첫 동작 또는 후보의 기본 단계 길이 |
| 단계 휴지 | 400ms | 250~600ms | 각 도착 위치에서 역할을 읽는다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const stops=[{x:0,y:0},{x:240,y:0},{x:240,y:180},{x:0,y:180},{x:0,y:0}];
stops.slice(1).forEach((p,i)=>{
  tl.to(actor,{...p,duration:0.6,ease:"power2.inOut"},i);
  tl.set(stages,{opacity:0.35},i); tl.set(stages[i],{opacity:1},i);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 행위자 과정 순환을 적용해. 작은 캐릭터나 아이콘이 단계별 위치로 이동하며 처리 과정이 순환한다. SVG 경로 이동과 단계 강조를 공통 타임라인에 배치한다. 기본 지속은 4s, 단계 휴지은 400ms, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 행위자 과정 순환을 적용해. 기본 지속은 4s, 단계 휴지은 400ms, 이징은 power2.inOut로 설정한다. 0초, 2초, 4초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Process Loop to <target> in <file>. An actor or icon visits successive stages in a repeating process. Use a base duration of 4s and power2.inOut; use four stages with 600ms travel and 400ms holds and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Process Loop in the explanatory scene of <file> for <target>, using 4s and power2.inOut with four stages with 600ms travel and 400ms holds. Capture at 0, 2, and 4 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 행위자 과정 순환를 `.hero`에 적용해. / Apply Process Loop to `.hero`.

## 적용 / Application

- HyperFrames: 행위자 과정 순환의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 행위자 과정 순환, 기본 지속 4s, 단계 휴지 400ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 단계 휴지 400ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [경로 순차 강조 · Route Highlight](../route-highlight/) · [활성 표시 이동 · Active Indicator Glide](../active-indicator-glide/)

출처 / Sources: [Kurzgesagt](https://kurzgesagt.org/what-we-do?visit=videos) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
