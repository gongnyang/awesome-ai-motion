# Nº 392 할선에서 접선으로 수렴 · Secant-to-tangent Convergence

> 클립 렌더 예정 / Clip rendering planned.

**곡선 위 두 점 사이 간격이 줄고 두 점을 잇는 선이 접선에 가까워진다.**

Two points on a curve approach each other as their secant approaches a tangent.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | svg |

다른 이름 / Also known as: 할선의 접선 수렴

## 선택 기준 / Selection

순간 변화율을 극한 과정으로 이해한다. / Shows instantaneous rate of change as a limiting process.

- 할선에서 접선으로 수렴으로 원인과 결과를 설명할 때 / Explain causes and results using secant-to-tangent convergence.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 고정점 옆의 점을 가까이 옮기며 할선 기울기를 함께 갱신한다.
나쁜 예 / Bad: 점 간격을 0으로 만들어 기울기 계산이 깨진다.
주의 / Avoid: 점 간격을 0으로 만들어 기울기 계산이 깨진다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 2.2s | 1.54~3.08s | 첫 동작 또는 후보의 기본 단계 길이 |
| 점 간격 | 160→4px | 80~240px → 2~8px | 최소 간격은 0보다 크게 둔다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const state={h:160}, f=x=>0.002*x*x;
const draw=()=>{const h=state.h,m=(f(200+h)-f(200))/h; gsap.set(point,{x:200+h,y:f(200+h)}); line.setAttribute("x1",100); line.setAttribute("y1",f(200)-100*m); line.setAttribute("x2",400); line.setAttribute("y2",f(200)+200*m);};
tl.to(state,{h:4,duration:2.2,ease:"power2.inOut",onUpdate:draw});
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 할선에서 접선으로 수렴을 적용해. 곡선 위 두 점 사이 간격이 줄고 두 점을 잇는 선이 접선에 가까워진다. 함수 샘플 두 점과 자체 할선 좌표를 동시에 SVG로 갱신한다. 기본 지속은 2.2s, 점 간격은 160→4px, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 할선에서 접선으로 수렴을 적용해. 기본 지속은 2.2s, 점 간격은 160→4px, 이징은 power2.inOut로 설정한다. 0초, 1.1초, 2.2초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Secant-to-tangent Convergence to <target> in <file>. Two points on a curve approach each other as their secant approaches a tangent. Use a base duration of 2.2s and power2.inOut; use point separation from 160px to 4px and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Secant-to-tangent Convergence in the explanatory scene of <file> for <target>, using 2.2s and power2.inOut with point separation from 160px to 4px. Capture at 0, 1.1, and 2.2 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 할선에서 접선으로 수렴를 `.hero`에 적용해. / Apply Secant-to-tangent Convergence to `.hero`.

## 적용 / Application

- HyperFrames: 할선에서 접선으로 수렴의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 할선에서 접선으로 수렴, 기본 지속 2.2s, 점 간격 160→4px, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 점 간격 160→4px를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [종속 도형 동기 갱신 · Dependent Geometry Update](../dependent-geometry/) · [주석 위치 추적 · Annotation Tracking](../annotation-tracking/)

출처 / Sources: [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2017/eoc/chapter2.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
