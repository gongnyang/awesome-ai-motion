# Nº 385 메모리 조각 할당 · Memory Chunk Allocation

> 클립 렌더 예정 / Clip rendering planned.

**큰 데이터 블록이 여러 조각으로 나뉘고 메모리 슬롯이 대응 색으로 차례로 채워진다.**

A data block splits into chunks as matching memory slots fill in sequence.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

## 선택 기준 / Selection

파일과 메모리의 크기 차이 및 할당 관계를 이해한다. / Explains how data size maps to memory allocation.

- 메모리 조각 할당으로 원인과 결과를 설명할 때 / Explain causes and results using memory chunk allocation.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 데이터 조각과 메모리 슬롯에 같은 색과 번호를 붙여 할당한다.
나쁜 예 / Bad: 조각 수와 슬롯 수가 달라 대응을 추적할 수 없다.
주의 / Avoid: 조각 수와 슬롯 수가 달라 대응을 추적할 수 없다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.6s | 0.42~0.84s | 첫 동작 또는 후보의 기본 단계 길이 |
| 슬롯 간격 | 160ms | 100~250ms | 8개 슬롯에 고정 순서로 배정한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
chunks.forEach((part,i)=>tl.to(part,{x:i*12,duration:0.6,ease:"power2.inOut"},0));
slots.forEach((slot,i)=>{
  tl.to(slot,{backgroundColor:"#55aacc",duration:0.16},0.6+i*0.16);
  tl.to(chunks[i],{opacity:0.4,duration:0.16},0.6+i*0.16);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 메모리 조각 할당을 적용해. 큰 데이터 블록이 여러 조각으로 나뉘고 메모리 슬롯이 대응 색으로 차례로 채워진다. 자체 블록 레이아웃의 간격을 넓히고 대응 슬롯 fill을 갱신한다. 기본 지속은 0.6s, 슬롯 간격은 160ms, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 메모리 조각 할당을 적용해. 기본 지속은 0.6s, 슬롯 간격은 160ms, 이징은 power2.inOut로 설정한다. 0초, 0.3초, 0.6초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Memory Chunk Allocation to <target> in <file>. A data block splits into chunks as matching memory slots fill in sequence. Use a base duration of 0.6s and power2.inOut; use eight slots filled at 160ms intervals after a 600ms split and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Memory Chunk Allocation in the explanatory scene of <file> for <target>, using 0.6s and power2.inOut with eight slots filled at 160ms intervals after a 600ms split. Capture at 0, 0.3, and 0.6 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 메모리 조각 할당를 `.hero`에 적용해. / Apply Memory Chunk Allocation to `.hero`.

## 적용 / Application

- HyperFrames: 메모리 조각 할당의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 메모리 조각 할당, 기본 지속 0.6s, 슬롯 간격 160ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 슬롯 간격 160ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [토큰 쪼개기 · Token Split](../token-split/) · [단위 격자 · Unit Grid Fill](../unit-grid/)

출처 / Sources: [motion-canvas/examples](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/memory.tsx) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
