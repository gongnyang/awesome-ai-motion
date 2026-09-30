# Nº 293 누적 레이어 삽입 · Stack Layer Addition

> 클립 렌더 예정 / Clip rendering planned.

**새 레이어가 두께를 얻으면서 위쪽 레이어들이 연속적으로 밀려난다.**

A new layer gains thickness while the layers above it shift continuously.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | svg |

## 선택 기준 / Selection

전체의 증가와 새 구성 요소의 몫을 동시에 읽는다. / Shows both the increase in the total and the contribution of a new component.

- 누적 차트에 신규 매출 항목을 더할 때 / Add a newly introduced revenue category to a stack.
- 새 레이어가 전체 합계에 미치는 영향을 설명할 때 / Explain how an inserted layer changes a cumulative total.

좋은 예 / Good: 신규 조각의 두께가 0에서 120px로 늘어나는 동안 위 조각도 120px 함께 이동한다.
나쁜 예 / Bad: 신규 조각만 겹쳐 그려 기존 합계와 새 합계의 관계가 보이지 않는다.
주의 / Avoid: 레이어 경계 사이에 빈틈이나 겹침을 만들지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 삽입 시간 | 700ms | 500~1000ms | 신규 두께와 기존 위치를 함께 바꾼다. |
| 신규 두께 | 120px | 40~240px | 자료 척도로 산출한 목표값이다. |
| 초기 두께 | 0px | 0px 고정 | 삽입 전 상태를 명확히 한다. |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.fromTo('.new-layer',{attr:{y:600,height:0}},{attr:{y:480,height:120},duration:0.7,ease:'power2.inOut'},0);
document.querySelectorAll('.upper-layer').forEach(el=>{
  const y=+el.getAttribute('y');
  tl.fromTo(el,{attr:{y}},{attr:{y:y-120},duration:0.7,ease:'power2.inOut'},0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 누적 레이어 삽입를 구현해. 새 레이어가 두께를 얻으면서 위쪽 레이어들이 연속적으로 밀려난다. 삽입 시간 700ms, 신규 두께 120px, 초기 두께 0px, 이징 power2.inOut를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 레이어 경계 사이에 빈틈이나 겹침을 만들지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 누적 레이어 삽입를 적용해. 삽입 시간 700ms, 신규 두께 120px, 초기 두께 0px, 이징 power2.inOut를 사용하고 다음 동작을 구현해: 모든 레이어의 누적 시작값과 끝값을 함께 보간한다. 플러그인과 Math.random 없이 작성하고 0.17초·0.42초·0.7초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 신규 조각의 두께가 0에서 120px로 늘어나는 동안 위 조각도 120px 함께 이동한다.
```

### English · Claude Code
```text
Implement Stack Layer Addition for <target> in <file>. A new layer gains thickness while the layers above it shift continuously. Use insertion duration: 700ms; added thickness: 120px; initial thickness: 0px; easing: power2.inOut in a single paused GSAP core timeline that supports seeking. Keep neighboring layer boundaries contiguous.
```

### English · Codex
```text
Apply Stack Layer Addition to the <target> scene in <file> using insertion duration: 700ms; added thickness: 120px; initial thickness: 0px; easing: power2.inOut. A new layer gains thickness while the layers above it shift continuously. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.17, 0.42, 0.7 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Keep neighboring layer boundaries contiguous.
```

예시 / Example: 누적 레이어 삽입를 `.hero`에 적용해. / Apply Stack Layer Addition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 누적 레이어 삽입 상태를 넣고 seek(t)로 0.7초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 삽입 시간 700ms, 신규 두께 120px, 초기 두께 0px, 이징 power2.inOut를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 신규 조각의 두께가 0에서 120px로 늘어나는 동안 위 조각도 120px 함께 이동한다.
- Scrolline Deck: 진행률 0~1을 0.7초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [막대 성장 · Bar Grow](../bar-grow/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [reuters-graphics/chart-module-stacked-area-chart](https://github.com/reuters-graphics/chart-module-stacked-area-chart) (unknown) · [Observable @d3](https://observablehq.com/@d3/streamgraph-transitions) (unknown) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
