# Nº 389 고정 장면 스크롤리텔링 · Pinned Scrollytelling

> 클립 렌더 예정 / Clip rendering planned.

**핵심 그림이나 코드 패널은 같은 위치에 머물고 설명이 스크롤되면서 내부 상태와 강조 범위가 바뀐다.**

A visual stays pinned while scrolling explanations change its internal state and emphasis.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 웹 UI | gsap |

다른 이름 / Also known as: 고정 장면 스크롤 설명, Pinned scrollycoding, 고정 코드와 스크롤 설명, Scrollytelling steps, 스크롤리텔링 단계

## 선택 기준 / Selection

한 대상을 중심으로 단계별 원리를 설명한다. / Explains a sequence of ideas around one stable visual reference.

- 코드 한 화면을 네 단계로 나눠 설명할 때 / Explain a code sample through four successive highlights.
- 문단을 읽는 동안 핵심 도식을 고정할 때 / Keep a diagram visible while prose describes its stages.

좋은 예 / Good: 그림을 고정하고 네 문단을 0.6초 이동시킨 뒤 각 강조를 1.8초 유지한다.
나쁜 예 / Bad: 문단과 그림이 모두 이동해 설명 대상의 위치를 다시 찾아야 한다.
주의 / Avoid: 고정 패널이 작은 화면의 본문을 가리지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단계 수 | 4개 | 3~6개 | 단계마다 강조 대상을 하나 정한다. |
| 상태 전환 | 800ms | 400~1000ms | 고정 패널 안에서 전환한다. |
| 읽기 유지 | 1800ms | 1500~3000ms | 전환 뒤 읽는 시간을 둔다. |
| 문단 이동 | 600ms | 400~800ms | 단계당 220px 이동한다. |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
gsap.set('.visual',{position:'absolute',top:120});
for(let i=0;i<4;i++){
  tl.to('.prose',{y:-220*i,duration:0.6,ease:'power2.out'},i*2.6);
  tl.fromTo('.step-'+i,{opacity:0},{opacity:1,duration:0.8},i*2.6);
  if(i)tl.to('.step-'+(i-1),{opacity:0,duration:0.8},i*2.6);
}
tl.to({}, {duration:1.8});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 고정 장면 스크롤리텔링를 구현해. 핵심 그림이나 코드 패널은 같은 위치에 머물고 설명이 스크롤되면서 내부 상태와 강조 범위가 바뀐다. 단계 수 4개, 상태 전환 800ms, 읽기 유지 1800ms, 문단 이동 600ms, 이징 power2.out를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 고정 패널이 작은 화면의 본문을 가리지 않게 한다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 고정 장면 스크롤리텔링를 적용해. 단계 수 4개, 상태 전환 800ms, 읽기 유지 1800ms, 문단 이동 600ms, 이징 power2.out를 사용하고 다음 동작을 구현해: 고정 HTML 패널과 이동 설명 레이어를 두고 GSAP 코어 타임라인에서 문단 위치와 패널 상태를 함께 갱신한다. 플러그인과 Math.random 없이 작성하고 2.6초·6.24초·10.4초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 그림을 고정하고 네 문단을 0.6초 이동시킨 뒤 각 강조를 1.8초 유지한다.
```

### English · Claude Code
```text
Implement Pinned Scrollytelling for <target> in <file>. A visual stays pinned while scrolling explanations change its internal state and emphasis. Use step count: 4; state transition duration: 800ms; reading hold: 1800ms; paragraph movement duration: 600ms; easing: power2.out in a single paused GSAP core timeline that supports seeking. Keep the pinned panel from covering prose on small screens.
```

### English · Codex
```text
Apply Pinned Scrollytelling to the <target> scene in <file> using step count: 4; state transition duration: 800ms; reading hold: 1800ms; paragraph movement duration: 600ms; easing: power2.out. A visual stays pinned while scrolling explanations change its internal state and emphasis. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 2.6, 6.24, 10.4 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Keep the pinned panel from covering prose on small screens.
```

예시 / Example: 고정 장면 스크롤리텔링를 `.hero`에 적용해. / Apply Pinned Scrollytelling to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 고정 장면 스크롤리텔링 상태를 넣고 seek(t)로 10.4초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 단계 수 4개, 상태 전환 800ms, 읽기 유지 1800ms, 문단 이동 600ms, 이징 power2.out를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 그림을 고정하고 네 문단을 0.6초 이동시킨 뒤 각 강조를 1.8초 유지한다.
- Scrolline Deck: 진행률 0~1을 10.4초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [코드 변경 전개 · Code Diff Reveal](../code-diff-reveal/) · [단계별 설명 모션 · Segmented Explanation](../segmented-explanation/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (GSAP Standard License) · [pmndrs/react-spring](https://www.react-spring.dev/docs/components/parallax) (MIT) · [motiondivision/motion](https://motion.dev/docs/react-scroll-animations) (MIT) · [code-hike/codehike](https://codehike.org/docs/layouts/scrollycoding) (MIT) · motion dictionary 3-type-data-ui.md#18. 스크롤리텔링 단계 · Scrollytelling steps (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
