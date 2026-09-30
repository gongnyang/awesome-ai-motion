# Nº 277 지역 윤곽 이동 비교 · Geographic Outline Comparison

> 클립 렌더 예정 / Clip rendering planned.

**한 지역의 윤곽을 다른 위치로 옮기거나 실제 비율로 바꿔 겹쳐 비교한다.**

A regional outline moves and rescales against a fixed geographic reference.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 스크롤덱, 발표 | svg |

## 선택 기준 / Selection

지도의 위치나 투영에 따른 크기 오해를 확인한다. / Exposes size misconceptions caused by location and projection.

- 지역 윤곽 이동 비교으로 원인과 결과를 설명할 때 / Explain causes and results using geographic outline comparison.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 같은 면적 축척으로 보정한 지역 윤곽을 기준 지역 위에 겹친다.
나쁜 예 / Bad: 화면상 크기만 맞춰 실제 면적 비교라고 설명한다.
주의 / Avoid: 화면상 크기만 맞춰 실제 면적 비교라고 설명한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1.2s | 0.84~1.68s | 첫 동작 또는 후보의 기본 단계 길이 |
| 이동 거리 | 360px | 160~600px | 기준 윤곽은 고정한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |
| 면적 보정 축척 | 0.62 | 실제 면적 자료에 따른 계산값 | 예시 값이다. 선택한 지역과 기준 축척에서 면적 비율의 제곱근으로 산출한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
gsap.set(reference,{opacity:0.5});
tl.to(outline,{x:360,y:0,scale:0.62,transformOrigin:"50% 50%",duration:1.2,ease:"power2.inOut"});
tl.to(outline,{opacity:0.65,duration:0.25},0.95);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 지역 윤곽 이동 비교을 적용해. 한 지역의 윤곽을 다른 위치로 옮기거나 실제 비율로 바꿔 겹쳐 비교한다. 새로 만든 지리 윤곽 SVG의 위치와 비율을 보간한다. 기본 지속은 1.2s, 이동 거리은 360px, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 지역 윤곽 이동 비교을 적용해. 기본 지속은 1.2s, 이동 거리은 360px, 이징은 power2.inOut로 설정한다. 0초, 0.6초, 1.2초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Geographic Outline Comparison to <target> in <file>. A regional outline moves and rescales against a fixed geographic reference. Use a base duration of 1.2s and power2.inOut; use 360px travel and a scale factor of 0.62 derived from the chosen area calibration and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Geographic Outline Comparison in the explanatory scene of <file> for <target>, using 1.2s and power2.inOut with 360px travel and a scale factor of 0.62 derived from the chosen area calibration. Capture at 0, 0.6, and 1.2 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 지역 윤곽 이동 비교를 `.hero`에 적용해. / Apply Geographic Outline Comparison to `.hero`.

## 적용 / Application

- HyperFrames: 지역 윤곽 이동 비교의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 지역 윤곽 이동 비교, 기본 지속 1.2s, 이동 거리 360px, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 이동 거리 360px를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [비교 분할 · Split Compare](../split-compare/) · [데이터 면적 변화 · Animated Size Encoding](../size-encoding/)

출처 / Sources: [Vox](https://www.youtube.com/watch?v=kIID5FDi2JQ) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
