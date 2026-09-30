# Nº 388 경로 위 행렬 · Path Convoy

> 클립 렌더 예정 / Clip rendering planned.

**여러 물체나 단위 입자가 시간차 또는 일정 간격을 두고 같은 경로를 따라 이동한다.**

Objects follow the same path with staggered starts or fixed spacing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 웹 UI | svg |

다른 이름 / Also known as: Motion path convoy, Sankey unit particle flow, 생키 단위 입자 흐름

## 선택 기준 / Selection

물류, 데이터 전달, 처리 흐름을 표현한다. / Makes logistics, packet transfer, and processing flow visible.

- 네트워크 경로의 패킷 전달을 보여줄 때 / Show packets traveling along a network route.
- 물류 경로를 따라 이동하는 단위를 설명할 때 / Trace a procession of units through a logistics path.

좋은 예 / Good: 여섯 점이 0.12초 간격으로 출발해 같은 경로를 2.4초 동안 통과한다.
나쁜 예 / Bad: 점의 간격을 수량과 무관하게 바꿔 흐름량이 변한 것처럼 보인다.
주의 / Avoid: 입자 수를 실제 처리량처럼 보이게 할 때 단위를 명시한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 물체 수 | 6개 | 3~12개 | 같은 경로를 공유한다. |
| 출발 간격 | 120ms | 80~240ms | 점별 시작 시각을 늦춘다. |
| 경로 시간 | 2400ms | 1600~4000ms | 경로 전체를 통과하는 시간이다. |
| 이징 | none | none \| power2.out \| power2.inOut | 데이터의 시간 진행은 none을 유지한다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
const path=document.querySelector('.route'), length=path.getTotalLength();
document.querySelectorAll('.packet').forEach((el,i)=>{
  const state={p:0};
  tl.to(state,{p:1,duration:2.4,ease:'none',onUpdate:()=>{const q=path.getPointAtLength(state.p*length);gsap.set(el,{attr:{cx:q.x,cy:q.y}});}},i*0.12);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 경로 위 행렬를 구현해. 여러 물체나 단위 입자가 시간차 또는 일정 간격을 두고 같은 경로를 따라 이동한다. 물체 수 6개, 출발 간격 120ms, 경로 시간 2400ms, 이징 none를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 입자 수를 실제 처리량처럼 보이게 할 때 단위를 명시한다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 경로 위 행렬를 적용해. 물체 수 6개, 출발 간격 120ms, 경로 시간 2400ms, 이징 none를 사용하고 다음 동작을 구현해: 각 물체의 경로 진행값에 위상 또는 시작 지연을 적용한다. 플러그인과 Math.random 없이 작성하고 0.75초·1.8초·3초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 여섯 점이 0.12초 간격으로 출발해 같은 경로를 2.4초 동안 통과한다.
```

### English · Claude Code
```text
Implement Path Convoy for <target> in <file>. Objects follow the same path with staggered starts or fixed spacing. Use object count: 6; start spacing: 120ms; traversal duration: 2400ms; easing: none in a single paused GSAP core timeline that supports seeking. State the unit when particle count represents throughput.
```

### English · Codex
```text
Apply Path Convoy to the <target> scene in <file> using object count: 6; start spacing: 120ms; traversal duration: 2400ms; easing: none. Objects follow the same path with staggered starts or fixed spacing. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.75, 1.8, 3 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. State the unit when particle count represents throughput.
```

예시 / Example: 경로 위 행렬를 `.hero`에 적용해. / Apply Path Convoy to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 경로 위 행렬 상태를 넣고 seek(t)로 3초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 물체 수 6개, 출발 간격 120ms, 경로 시간 2400ms, 이징 none를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 여섯 점이 0.12초 간격으로 출발해 같은 경로를 2.4초 동안 통과한다.
- Scrolline Deck: 진행률 0~1을 3초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [경로 순차 강조 · Route Highlight](../route-highlight/) · [생키 리본 성장 · Sankey Ribbon Growth](../sankey-ribbon-grow/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) (GSAP Standard License) · [greensock/GSAP](https://gsap.com/resources/getting-started/Staggers/) (GSAP Standard License) · [juliangarnier/anime](https://animejs.com/documentation/svg/createmotionpath) (MIT) · [The New York Times](https://www.nytimes.com/interactive/2018/03/19/upshot/race-class-white-and-black-men.html) (unknown) · [Observable](https://old.observablehq.com/blog/effective-animation) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
