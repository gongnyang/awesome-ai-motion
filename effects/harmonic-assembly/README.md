# Nº 381 고조파 성분 합성 · Harmonic Component Assembly

> 클립 렌더 예정 / Clip rendering planned.

**서로 다른 사인 파형이 쌓이거나 겹쳐지고 합성 결과가 점차 목표 파형에 가까워진다.**

Sine components accumulate into a composite waveform that approaches a target shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 고급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | svg |

## 선택 기준 / Selection

복잡한 파형이 단순 성분의 합임을 이해한다. / Shows that a complex waveform can be built from simple components.

- 고조파 성분 합성으로 원인과 결과를 설명할 때 / Explain causes and results using harmonic component assembly.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 사인 성분을 하나씩 더하고 누적 파형을 같은 축에서 비교한다.
나쁜 예 / Bad: 성분마다 축척을 바꿔 합성 관계를 오해하게 한다.
주의 / Avoid: 성분마다 축척을 바꿔 합성 관계를 오해하게 한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.8s | 0.56~1.12s | 첫 동작 또는 후보의 기본 단계 길이 |
| 성분 수 | 5개 | 3~9개 | 홀수 고조파부터 순서대로 더한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const weights=Array(5).fill(0);
const draw=()=>{const pts=Array.from({length:240},(_,i)=>{const x=i/239*2*Math.PI,y=weights.reduce((s,w,k)=>s+w*Math.sin((2*k+1)*x)/(2*k+1),0);return `${100+i*6},${540-y*120}`;}); sum.setAttribute("points",pts.join(" "));};
weights.forEach((_,k)=>tl.to(weights,{[k]:1,duration:0.8,ease:"power2.inOut",onUpdate:draw},k));
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 고조파 성분 합성을 적용해. 서로 다른 사인 파형이 쌓이거나 겹쳐지고 합성 결과가 점차 목표 파형에 가까워진다. 독립 파형과 누적 합 파형을 계산해 SVG 점 배열을 보간한다. 기본 지속은 0.8s, 성분 수은 5개, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 고조파 성분 합성을 적용해. 기본 지속은 0.8s, 성분 수은 5개, 이징은 power2.inOut로 설정한다. 0초, 0.4초, 0.8초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Harmonic Component Assembly to <target> in <file>. Sine components accumulate into a composite waveform that approaches a target shape. Use a base duration of 0.8s and power2.inOut; use five odd harmonic components added at 1s intervals and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Harmonic Component Assembly in the explanatory scene of <file> for <target>, using 0.8s and power2.inOut with five odd harmonic components added at 1s intervals. Capture at 0, 0.4, and 0.8 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 고조파 성분 합성를 `.hero`에 적용해. / Apply Harmonic Component Assembly to `.hero`.

## 적용 / Application

- HyperFrames: 고조파 성분 합성의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 고조파 성분 합성, 기본 지속 0.8s, 성분 수 5개, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 성분 수 5개를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [푸리에 회전 좌표 · Fourier Winding](../fourier-winding/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2019/diffyq/part2/fourier_series.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
