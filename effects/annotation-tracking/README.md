# Nº 369 주석 위치 추적 · Annotation Tracking

> 클립 렌더 예정 / Clip rendering planned.

**라벨과 지시선이 움직이는 대상의 위치를 따라가며 일정한 간격이나 연결 관계를 유지한다.**

Labels and leader lines follow a moving target with a fixed spatial relationship.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | svg |

다른 이름 / Also known as: Relative-position annotation tracking, 상대 위치 주석 추적, MaintainPositionRelativeTo, Specification label lock-on, 제품 사양 라벨 고정, Spatially contiguous animated labels, 공간적으로 붙인 설명

## 선택 기준 / Selection

대상이 움직여도 설명과 대상의 대응을 유지한다. / Keeps explanations attached to the objects they describe.

- 주석 위치 추적으로 원인과 결과를 설명할 때 / Explain causes and results using annotation tracking.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 이동하는 제품 부품 옆에서 사양 라벨과 지시선이 함께 따라간다.
나쁜 예 / Bad: 라벨이 늦게 따라와 다른 부품을 가리킨다.
주의 / Avoid: 라벨이 늦게 따라와 다른 부품을 가리킨다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1.2s | 0.84~1.68s | 첫 동작 또는 후보의 기본 단계 길이 |
| 라벨 간격 | 12px | 8~32px | 대상과 라벨 사이 화면 간격 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const state = {x:0};
const draw = () => { gsap.set(target,{x:state.x}); gsap.set(label,{x:state.x+12}); line.setAttribute("x2",state.x); };
tl.to(state,{x:240,duration:1.2,ease:"power2.inOut",onUpdate:draw});
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 주석 위치 추적을 적용해. 라벨과 지시선이 움직이는 대상의 위치를 따라가며 일정한 간격이나 연결 관계를 유지한다. 대상의 화면 좌표에 고정 오프셋을 더해 HTML 라벨을 배치하고 SVG 지시선 끝점을 같은 프레임에 갱신한다. 기본 지속은 1.2s, 라벨 간격은 12px, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 주석 위치 추적을 적용해. 기본 지속은 1.2s, 라벨 간격은 12px, 이징은 power2.inOut로 설정한다. 0초, 0.6초, 1.2초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Annotation Tracking to <target> in <file>. Labels and leader lines follow a moving target with a fixed spatial relationship. Use a base duration of 1.2s and power2.inOut; use label offset 12px and tracking lag 0ms and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Annotation Tracking in the explanatory scene of <file> for <target>, using 1.2s and power2.inOut with label offset 12px and tracking lag 0ms. Capture at 0, 0.6, and 1.2 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 주석 위치 추적를 `.hero`에 적용해. / Apply Annotation Tracking to `.hero`.

## 적용 / Application

- HyperFrames: 주석 위치 추적의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 주석 위치 추적, 기본 지속 1.2s, 라벨 간격 12px, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 라벨 간격 12px를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [주석 등장 · Annotation Callout](../annotation-callout/) · [대상 추적 박스 · Object Tracking Box](../object-tracking-box/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/updaters/update.py) (MIT) · [Apple](https://www.apple.com/apple-events/) (unknown) · [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
