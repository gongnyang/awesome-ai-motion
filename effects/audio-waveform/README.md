# Nº 248 오디오 파형 · Audio Waveform

> 클립 렌더 예정 / Clip rendering planned.

**소리의 진폭을 나타내는 선이 시간에 따라 변한다.**

A line changes over time to display the amplitude of an audio signal.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | canvas |

## 선택 기준 / Selection

발화와 음악의 강약을 눈으로 보여준다. / Makes the dynamics of speech and music visible.

- 인터뷰 화면에 발화 강약을 표시할 때 / Show speech intensity beneath an interview excerpt.
- 음악 재생 위치와 진폭을 함께 보여줄 때 / Display the amplitude of a soundtrack alongside playback.

좋은 예 / Good: 사전 분석한 256개 샘플을 24fps 프레임으로 선택해 높이 60px 파형을 그린다.
나쁜 예 / Bad: 무작위 파형을 만들어 실제 발화가 없는 순간에도 소리가 있는 것처럼 보인다.
주의 / Avoid: 음원 분석값 대신 임의 진폭을 쓰지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 분석 프레임 | 24fps | 24~60fps | 재생 시간으로 프레임을 선택한다. |
| 프레임 샘플 | 256개 | 128~512개 | 사전 분석한 정규화 진폭이다. |
| 최대 높이 | 60px | 40~120px | 위아래 합친 높이이다. |
| 표시 폭 | 1200px | 800~1600px | 샘플을 동일 간격으로 배치한다. |
| 이징 | none | none \| power2.out \| power2.inOut | 데이터의 시간 진행은 none을 유지한다. |

## 구현 / Implementation (GSAP)

```js
// frames contains precomputed PCM windows at 24 frames per second.
const tl=gsap.timeline({paused:true}),state={t:0};
const canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d');
tl.to(state,{t:5,duration:5,ease:'none',onUpdate:()=>{
  const samples=frames[Math.min(frames.length-1,Math.floor(state.t*24))];
  ctx.clearRect(0,0,canvas.width,canvas.height);ctx.beginPath();
  samples.forEach((v,i)=>{const x=i*1200/(samples.length-1),y=100+v*30;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.stroke();
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 오디오 파형를 구현해. 소리의 진폭을 나타내는 선이 시간에 따라 변한다. 분석 프레임 24fps, 프레임 샘플 256개, 최대 높이 60px, 표시 폭 1200px, 이징 none를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 음원 분석값 대신 임의 진폭을 쓰지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 오디오 파형를 적용해. 분석 프레임 24fps, 프레임 샘플 256개, 최대 높이 60px, 표시 폭 1200px, 이징 none를 사용하고 다음 동작을 구현해: 오디오 PCM 샘플 또는 사전 분석값으로 폴리라인을 그린다. 플러그인과 Math.random 없이 작성하고 1.25초·3.0초·5초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 사전 분석한 256개 샘플을 24fps 프레임으로 선택해 높이 60px 파형을 그린다.
```

### English · Claude Code
```text
Implement Audio Waveform for <target> in <file>. A line changes over time to display the amplitude of an audio signal. Use analysis frame rate: 24fps; samples per frame: 256; total waveform height: 60px; display width: 1200px; easing: none in a single paused GSAP core timeline that supports seeking. Use precomputed audio samples rather than invented amplitudes.
```

### English · Codex
```text
Apply Audio Waveform to the <target> scene in <file> using analysis frame rate: 24fps; samples per frame: 256; total waveform height: 60px; display width: 1200px; easing: none. A line changes over time to display the amplitude of an audio signal. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 1.25, 3.0, 5 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Use precomputed audio samples rather than invented amplitudes.
```

예시 / Example: 오디오 파형를 `.hero`에 적용해. / Apply Audio Waveform to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 오디오 파형 상태를 넣고 seek(t)로 5초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 분석 프레임 24fps, 프레임 샘플 256개, 최대 높이 60px, 표시 폭 1200px, 이징 none를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 사전 분석한 256개 샘플을 24fps 프레임으로 선택해 높이 60px 파형을 그린다.
- Scrolline Deck: 진행률 0~1을 5초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [오디오 스펙트럼 · Audio Spectrum Visualizer](../audio-spectrum/) · [비트 싱크 · Beat Synchronization](../beat-sync/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
