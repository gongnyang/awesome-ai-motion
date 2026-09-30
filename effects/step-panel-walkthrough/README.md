# Nº 399 단계와 패널 동기 진행 · Step-panel Walkthrough

> 클립 렌더 예정 / Clip rendering planned.

**단계 목록의 활성 표시가 이동하고 옆 코드 패널의 대응 내용이 바뀐다.**

The active step moves through a list as a neighboring code panel updates.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Step-and-code panel walkthrough, 단계 목록과 코드 패널 시연

## 선택 기준 / Selection

현재 단계와 전체 진행 위치를 동시에 안다. / Shows both the current task and its place in the overall sequence.

- 단계와 패널 동기 진행으로 원인과 결과를 설명할 때 / Explain causes and results using step-panel walkthrough.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 단계 목록의 강조가 이동할 때 옆 코드 패널도 같은 단계로 바뀐다.
나쁜 예 / Bad: 목록은 다음 단계인데 패널은 이전 코드를 유지한다.
주의 / Avoid: 목록은 다음 단계인데 패널은 이전 코드를 유지한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 2s | 1.40~2.80s | 첫 동작 또는 후보의 기본 단계 길이 |
| 패널 전환 | 650ms | 350~800ms | 활성 표시와 패널 키를 함께 바꾼다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
panels.forEach((panel,i)=>{
  tl.to(indicator,{y:i*64,duration:0.3,ease:"power2.out"},i*2);
  tl.set(panels,{opacity:0},i*2);
  tl.fromTo(panel,{opacity:0,y:12},{opacity:1,y:0,duration:0.65,ease:"power2.out"},i*2);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 단계와 패널 동기 진행을 적용해. 단계 목록의 활성 표시가 이동하고 옆 코드 패널의 대응 내용이 바뀐다. 자체 단계 키로 목록 강조와 코드 토큰 이동을 같은 타임라인에 묶는다. 기본 지속은 2s, 패널 전환은 650ms, 이징은 power2.out로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 단계와 패널 동기 진행을 적용해. 기본 지속은 2s, 패널 전환은 650ms, 이징은 power2.out로 설정한다. 0초, 1초, 2초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Step-panel Walkthrough to <target> in <file>. The active step moves through a list as a neighboring code panel updates. Use a base duration of 2s and power2.out; use 2000ms steps, 300ms indicator travel, and 650ms panel transitions and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Step-panel Walkthrough in the explanatory scene of <file> for <target>, using 2s and power2.out with 2000ms steps, 300ms indicator travel, and 650ms panel transitions. Capture at 0, 1, and 2 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 단계와 패널 동기 진행를 `.hero`에 적용해. / Apply Step-panel Walkthrough to `.hero`.

## 적용 / Application

- HyperFrames: 단계와 패널 동기 진행의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 단계와 패널 동기 진행, 기본 지속 2s, 패널 전환 650ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 패널 전환 650ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [활성 표시 이동 · Active Indicator Glide](../active-indicator-glide/) · [코드와 실행 결과 교대 · Code-result Alternation](../code-result-alternation/)

출처 / Sources: [code-hike/codehike](https://codehike.org/docs/layouts/spotlight) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
