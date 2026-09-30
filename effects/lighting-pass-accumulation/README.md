# Nº 383 조명 패스 누적 · Lighting Pass Accumulation

> 클립 렌더 예정 / Clip rendering planned.

**개별 조명의 결과가 차례로 나타나고 합쳐져 최종 화면이 밝아진다.**

Individual lighting passes appear and accumulate into the final composite.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | canvas |

## 선택 기준 / Selection

최종 영상이 여러 빛의 기여로 구성됨을 이해한다. / Shows how multiple light contributions build a rendered image.

- 조명 패스 누적으로 원인과 결과를 설명할 때 / Explain causes and results using lighting pass accumulation.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 세 조명 패스를 가산 합성하고 각 빛의 기여를 이름으로 표시한다.
나쁜 예 / Bad: 알파 교차 표시를 가산 합성이라고 설명한다.
주의 / Avoid: 알파 교차 표시를 가산 합성이라고 설명한다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.7s | 0.49~0.98s | 첫 동작 또는 후보의 기본 단계 길이 |
| 패스 간격 | 200ms | 100~350ms | 앞 패스를 유지한 채 다음 빛을 더한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const state={a:0,b:0,c:0},layers=[keyLight,fillLight,rimLight];
const draw=()=>{ctx.clearRect(0,0,1920,1080); ctx.save(); ctx.globalCompositeOperation="lighter"; layers.forEach((img,i)=>{ctx.globalAlpha=state[["a","b","c"][i]];ctx.drawImage(img,0,0);});ctx.restore();};
["a","b","c"].forEach((key,i)=>tl.to(state,{[key]:1,duration:0.7,ease:"power2.inOut",onUpdate:draw},i*0.9));
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 조명 패스 누적을 적용해. 개별 조명의 결과가 차례로 나타나고 합쳐져 최종 화면이 밝아진다. 자체 생성한 빛 레이어를 canvas에서 투명도와 가산 합성으로 겹친다. 기본 지속은 0.7s, 패스 간격은 200ms, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 조명 패스 누적을 적용해. 기본 지속은 0.7s, 패스 간격은 200ms, 이징은 power2.inOut로 설정한다. 0초, 0.35초, 0.7초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Lighting Pass Accumulation to <target> in <file>. Individual lighting passes appear and accumulate into the final composite. Use a base duration of 0.7s and power2.inOut; use three additive lighting passes lasting 700ms each with 200ms gaps and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Lighting Pass Accumulation in the explanatory scene of <file> for <target>, using 0.7s and power2.inOut with three additive lighting passes lasting 700ms each with 200ms gaps. Capture at 0, 0.35, and 0.7 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 조명 패스 누적를 `.hero`에 적용해. / Apply Lighting Pass Accumulation to `.hero`.

## 적용 / Application

- HyperFrames: 조명 패스 누적의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 조명 패스 누적, 기본 지속 0.7s, 패스 간격 200ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 패스 간격 200ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [누적 레이어 삽입 · Stack Layer Addition](../stack-layer-addition/) · [색 전환 · Color Transition](../color-transition/)

출처 / Sources: [motion-canvas/examples](https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/lightComposite.tsx) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
