# Nº 378 푸리에 회전 좌표 · Fourier Winding

> 클립 렌더 예정 / Clip rendering planned.

**신호의 점들이 회전 좌표에 감기고 중심 또는 평균점이 주파수에 따라 움직인다.**

Signal samples wind around a rotating frame while their mean moves with frequency.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 고급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | canvas |

다른 이름 / Also known as: Fourier rotating-frame explanation, 푸리에 회전 좌표 해설

## 선택 기준 / Selection

특정 주파수 성분이 왜 드러나는지 이해한다. / Reveals why a matching frequency produces a distinct mean displacement.

- 푸리에 회전 좌표으로 원인과 결과를 설명할 때 / Explain causes and results using fourier winding.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 감긴 신호와 평균점을 함께 보여 주며 주파수 성분을 설명한다.
나쁜 예 / Bad: 회전 속도만 바꾸고 평균점을 갱신하지 않는다.
주의 / Avoid: 회전 속도만 바꾸고 평균점을 갱신하지 않는다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 3s | 2.10~4.20s | 첫 동작 또는 후보의 기본 단계 길이 |
| 주파수 | 2Hz | 1~5Hz | 신호 시간의 초 단위를 유지한다 |
| 이징 | none | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const state={frequency:1},samples=Array.from({length:240},(_,i)=>({t:i/240,v:1+Math.cos(4*Math.PI*i/240)}));
const draw=()=>{const pts=samples.map(({t,v})=>({x:v*Math.cos(-2*Math.PI*state.frequency*t),y:v*Math.sin(-2*Math.PI*state.frequency*t)})); ctx.clearRect(0,0,1920,1080); ctx.beginPath(); pts.forEach((p,i)=>ctx[i?"lineTo":"moveTo"](960+p.x*180,540+p.y*180)); ctx.stroke(); const avg=pts.reduce((a,p)=>({x:a.x+p.x/240,y:a.y+p.y/240}),{x:0,y:0}); ctx.fillRect(956+avg.x*180,536+avg.y*180,8,8);};
tl.to(state,{frequency:5,duration:3,ease:"none",onUpdate:draw});
draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 푸리에 회전 좌표을 적용해. 신호의 점들이 회전 좌표에 감기고 중심 또는 평균점이 주파수에 따라 움직인다. 자체 복소 회전 좌표와 평균 좌표를 계산해 canvas로 그린다. 기본 지속은 3s, 주파수은 2Hz, 이징은 none로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 푸리에 회전 좌표을 적용해. 기본 지속은 3s, 주파수은 2Hz, 이징은 none로 설정한다. 0초, 1.5초, 3초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Fourier Winding to <target> in <file>. Signal samples wind around a rotating frame while their mean moves with frequency. Use a base duration of 3s and none; use a frequency sweep from 1Hz to 5Hz over 3s with 240 samples and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Fourier Winding in the explanatory scene of <file> for <target>, using 3s and none with a frequency sweep from 1Hz to 5Hz over 3s with 240 samples. Capture at 0, 1.5, and 3 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 푸리에 회전 좌표를 `.hero`에 적용해. / Apply Fourier Winding to `.hero`.

## 적용 / Application

- HyperFrames: 푸리에 회전 좌표의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 푸리에 회전 좌표, 기본 지속 3s, 주파수 2Hz, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 주파수 2Hz를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [오디오 파형 · Audio Waveform](../audio-waveform/) · [오실로스코프 잔광 · Oscilloscope Trace](../oscilloscope-trace/)

출처 / Sources: [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2018/fourier.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
