# Nº 400 단계 요약 재구성 · Step Recap Reconstruction

> 클립 렌더 예정 / Clip rendering planned.

**과정이 끝난 뒤 각 단계의 작은 그림이 차례로 모여 하나의 요약 흐름이 된다.**

Small illustrations of completed steps gather into a single recap flow.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Active step recap reconstruction

## 선택 기준 / Selection

전체 과정과 단계 사이 관계를 다시 정리한다. / Reinforces the overall process and the relationships between its steps.

- 단계 요약 재구성으로 원인과 결과를 설명할 때 / Explain causes and results using step recap reconstruction.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 네 단계의 작은 그림을 가로로 모으고 순서 연결선을 추가한다.
나쁜 예 / Bad: 요약에서 단계 순서를 바꾸거나 읽기 전에 사라진다.
주의 / Avoid: 요약에서 단계 순서를 바꾸거나 읽기 전에 사라진다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.45s | 0.32~0.63s | 첫 동작 또는 후보의 기본 단계 길이 |
| 단계 간격 | 100ms | 60~180ms | 앞 단계가 도착한 뒤 연결선을 드러낸다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
steps.forEach((step,i)=>tl.to(step,{x:200+i*320,y:760,scale:0.4,duration:0.45,ease:"power2.out"},i*0.55));
links.forEach((link,i)=>tl.fromTo(link,{scaleX:0},{scaleX:1,transformOrigin:"0% 50%",duration:0.25},0.45+(i+1)*0.55));
tl.to({}, {duration:2});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 단계 요약 재구성을 적용해. 과정이 끝난 뒤 각 단계의 작은 그림이 차례로 모여 하나의 요약 흐름이 된다. 자체 단계 그룹을 요약 좌표로 이동하고 연결선을 그린다. 기본 지속은 0.45s, 단계 간격은 100ms, 이징은 power2.out로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 단계 요약 재구성을 적용해. 기본 지속은 0.45s, 단계 간격은 100ms, 이징은 power2.out로 설정한다. 0초, 0.225초, 0.45초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Step Recap Reconstruction to <target> in <file>. Small illustrations of completed steps gather into a single recap flow. Use a base duration of 0.45s and power2.out; use 450ms step travel with 100ms gaps and a final 2000ms hold and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Step Recap Reconstruction in the explanatory scene of <file> for <target>, using 0.45s and power2.out with 450ms step travel with 100ms gaps and a final 2000ms hold. Capture at 0, 0.225, and 0.45 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 단계 요약 재구성를 `.hero`에 적용해. / Apply Step Recap Reconstruction to `.hero`.

## 적용 / Application

- HyperFrames: 단계 요약 재구성의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 단계 요약 재구성, 기본 지속 0.45s, 단계 간격 100ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 단계 간격 100ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [행위자 과정 순환 · Process Loop](../process-loop/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
