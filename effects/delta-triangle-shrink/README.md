# Nº 376 변화량 삼각형 축소 · Delta Triangle Shrink

> 클립 렌더 예정 / Clip rendering planned.

**곡선 근처의 가로와 세로 변화량 선분이 함께 작아지고 라벨이 계속 붙어 있다.**

Horizontal and vertical change segments shrink together while their labels remain attached.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | svg |

## 선택 기준 / Selection

작은 입력 변화와 출력 변화의 비율을 읽는다. / Makes the ratio between small input and output changes readable.

- 변화량 삼각형 축소으로 원인과 결과를 설명할 때 / Explain causes and results using delta triangle shrink.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 가로 변화량과 세로 변화량을 같은 입력값으로 줄인다.
나쁜 예 / Bad: 삼각형을 균일 축소해 실제 곡선의 변화율과 어긋난다.
주의 / Avoid: 삼각형을 균일 축소해 실제 곡선의 변화율과 어긋난다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1.8s | 1.26~2.52s | 첫 동작 또는 후보의 기본 단계 길이 |
| 가로 변화량 | 120→8px | 80~180px → 4~16px | 세로 변화량도 같은 함수로 계산한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const state={d:120},f=x=>0.002*x*x;
const draw=()=>{const d=state.d,dy=f(200+d)-f(200); triangle.setAttribute("points",`200,80 ${200+d},80 ${200+d},${80+dy}`); gsap.set(label,{x:200+d+12,y:80+dy});};
tl.to(state,{d:8,duration:1.8,ease:"power2.inOut",onUpdate:draw});
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 변화량 삼각형 축소을 적용해. 곡선 근처의 가로와 세로 변화량 선분이 함께 작아지고 라벨이 계속 붙어 있다. 공통 delta 변수로 SVG 직각 선분과 라벨 위치를 갱신한다. 기본 지속은 1.8s, 가로 변화량은 120→8px, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 변화량 삼각형 축소을 적용해. 기본 지속은 1.8s, 가로 변화량은 120→8px, 이징은 power2.inOut로 설정한다. 0초, 0.9초, 1.8초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Delta Triangle Shrink to <target> in <file>. Horizontal and vertical change segments shrink together while their labels remain attached. Use a base duration of 1.8s and power2.inOut; use horizontal delta from 120px to 8px and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Delta Triangle Shrink in the explanatory scene of <file> for <target>, using 1.8s and power2.inOut with horizontal delta from 120px to 8px. Capture at 0, 0.9, and 1.8 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 변화량 삼각형 축소를 `.hero`에 적용해. / Apply Delta Triangle Shrink to `.hero`.

## 적용 / Application

- HyperFrames: 변화량 삼각형 축소의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 변화량 삼각형 축소, 기본 지속 1.8s, 가로 변화량 120→8px, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 가로 변화량 120→8px를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [할선에서 접선으로 수렴 · Secant-to-tangent Convergence](../secant-to-tangent/) · [주석 위치 추적 · Annotation Tracking](../annotation-tracking/)

출처 / Sources: [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2017/eoc/chapter2.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
