# Nº 281 오실로스코프 잔광 · Oscilloscope Trace

> 클립 렌더 예정 / Clip rendering planned.

**빛점이 파형을 훑고 뒤의 선은 시간이 지나며 흐려진다.**

A bright sampling point leaves an exponentially fading waveform trail.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | canvas |

## 선택 기준 / Selection

시간에 따른 신호와 측정 도구의 작동을 보여준다. / Evokes a working signal measurement instrument.

- 측정 신호의 밝은 주사점 뒤에 300ms 잔광을 남긴다. / Show a measured signal over time.
- 시간에 따른 신호와 측정 도구의 작동을 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 측정 신호의 밝은 주사점 뒤에 300ms 잔광을 남긴다.
나쁜 예 / Bad: 이전 프레임을 누적해 seek 위치마다 잔광이 달라진다.
주의 / Avoid: 샘플 시각에서 잔광을 직접 계산한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주사 지속 | 2000ms | 1000~4000ms | 한 화면 주사 기준 |
| 잔광 시간상수 | 300ms | 150~600ms | 지수 감쇠 |
| 격자 | 10x8 | 8x6~12x10 | 측정 단위 표시 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}),s={t:0};
tl.to(s,{t:2,duration:2,ease:'none',onUpdate:()=>{
 ctx.clearRect(0,0,1920,1080);
 for(let i=0;i<samples.length;i++){
  const age=s.t-i/samples.length*2;if(age<0)continue;
  ctx.globalAlpha=Math.exp(-age/0.3);ctx.fillRect(i*1920/samples.length,540-samples[i]*180,3,3);
 }ctx.globalAlpha=1;
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 오실로스코프 잔광을 적용해. 주사 위치와 exp(-age/tau) 잔광을 프레임 시간에서 직접 계산한다. 주사 지속 2000ms; 잔광 시간상수 300ms; 격자 10x8을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 오실로스코프 잔광을 적용해. 주사 위치와 exp(-age/tau) 잔광을 프레임 시간에서 직접 계산한다. 주사 지속 2000ms; 잔광 시간상수 300ms; 격자 10x8을 적용한다. 0초, 1초, 2초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Oscilloscope Trace on <target> in <file>. Scan the waveform over 2000ms on a 10 by 8 grid. Compute trail opacity from sample age using a 300ms exponential decay constant; redraw from absolute time. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Oscilloscope Trace on <target> in <file>. Scan the waveform over 2000ms on a 10 by 8 grid. Compute trail opacity from sample age using a 300ms exponential decay constant; redraw from absolute time. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 1s, and 2s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 오실로스코프 잔광를 `.hero`에 적용해. / Apply Oscilloscope Trace to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 오실로스코프 잔광 상태를 넣고 seek 시 2초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 주사 지속 2000ms; 잔광 시간상수 300ms; 격자 10x8을 싣고 측정 신호의 밝은 주사점 뒤에 300ms 잔광을 남긴다.
- Scrolline Deck: 진행률 0~1을 2초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [오디오 파형 · Audio Waveform](../audio-waveform/) · [격자 그리기 · Grid Draw](../grid-draw/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/oscilloscope-trace/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
