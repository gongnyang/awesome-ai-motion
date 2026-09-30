# Nº 379 지구에서 지도 투영 모프 · Globe-to-map Projection Morph

> 클립 렌더 예정 / Clip rendering planned.

**구의 표면 격자가 펼쳐져 평면 지도로 변하고 지역의 형태가 함께 바뀐다.**

A globe’s surface grid unfolds into a flat projection, changing regional shapes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 고급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | webgl |

## 선택 기준 / Selection

평면 투영에서 왜 왜곡이 생기는지 알게 한다. / Explains where distortion in a map projection comes from.

- 지구에서 지도 투영 모프으로 원인과 결과를 설명할 때 / Explain causes and results using globe-to-map projection morph.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 동일한 위경도 격자를 구에서 메르카토르 평면으로 펼친다.
나쁜 예 / Bad: 점 대응 없이 서로 다른 지도를 교차 표시한다.
주의 / Avoid: 점 대응 없이 서로 다른 지도를 교차 표시한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다. · 메르카토르 투영의 위도는 ±85도로 제한한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 2.2s | 1.54~3.08s | 첫 동작 또는 후보의 기본 단계 길이 |
| 격자 밀도 | 24×12 | 12×6~48×24 | 구면과 평면의 정점 순서를 맞춘다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const state={mix:0};
const draw=()=>{for(let i=0;i<positions.length;i++) positions[i]=sphere[i]+(map[i]-sphere[i])*state.mix; gl.bindBuffer(gl.ARRAY_BUFFER,buffer); gl.bufferSubData(gl.ARRAY_BUFFER,0,positions); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT); gl.drawElements(gl.LINES,indexCount,gl.UNSIGNED_SHORT,0);};
tl.to(state,{mix:1,duration:2.2,ease:"power2.inOut",onUpdate:draw});
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 지구에서 지도 투영 모프을 적용해. 구의 표면 격자가 펼쳐져 평면 지도로 변하고 지역의 형태가 함께 바뀐다. 자체 구면 좌표와 평면 투영 좌표를 WebGL 정점으로 보간한다. 기본 지속은 2.2s, 격자 밀도은 24×12, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 지구에서 지도 투영 모프을 적용해. 기본 지속은 2.2s, 격자 밀도은 24×12, 이징은 power2.inOut로 설정한다. 0초, 1.1초, 2.2초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Globe-to-map Projection Morph to <target> in <file>. A globe’s surface grid unfolds into a flat projection, changing regional shapes. Use a base duration of 2.2s and power2.inOut; use a 24 by 12 grid with matching vertex indices and pole latitudes clamped to 85deg and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Globe-to-map Projection Morph in the explanatory scene of <file> for <target>, using 2.2s and power2.inOut with a 24 by 12 grid with matching vertex indices and pole latitudes clamped to 85deg. Capture at 0, 1.1, and 2.2 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 지구에서 지도 투영 모프를 `.hero`에 적용해. / Apply Globe-to-map Projection Morph to `.hero`.

## 적용 / Application

- HyperFrames: 지구에서 지도 투영 모프의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 지구에서 지도 투영 모프, 기본 지속 2.2s, 격자 밀도 24×12, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 격자 밀도 24×12를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [격자 그리기 · Grid Draw](../grid-draw/) · [지역 윤곽 이동 비교 · Geographic Outline Comparison](../map-outline-comparison/)

출처 / Sources: [Vox](https://www.youtube.com/watch?v=kIID5FDi2JQ) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
