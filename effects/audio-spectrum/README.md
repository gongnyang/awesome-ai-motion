# Nº 247 오디오 스펙트럼 · Audio Spectrum Visualizer

> 클립 렌더 예정 / Clip rendering planned.

**주파수 대역의 막대 또는 방사선 길이가 소리 세기에 따라 변화한다.**

Bars or radial lines change length using precomputed audio band samples.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | canvas |

다른 이름 / Also known as: Audio Spectrum Bars, 오디오 스펙트럼 바, Audio Spectrum, Spectrum Ribbon and Waveform, 스펙트럼 리본과 파형

## 선택 기준 / Selection

소리의 대역별 구성과 에너지를 보여준다. / Shows the spectral composition and energy of sound.

- 사전 추출한 16개 주파수 대역을 음악 시각과 맞춰 표시한다. / Visualize frequency-band energy in audio.
- 소리의 대역별 구성과 에너지를 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 사전 추출한 16개 주파수 대역을 음악 시각과 맞춰 표시한다.
나쁜 예 / Bad: 임의 막대 높이를 실제 소리 분석값으로 소개한다.
주의 / Avoid: 샘플에 오디오 시작 오프셋을 반영한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 샘플 속도 | 30fps | 24~60fps | 오디오에서 사전 추출 |
| 대역 수 | 16 | 8~32 | 주파수 순서 고정 |
| 스무딩 | 150ms | 80~250ms | 사전 배열에 적용 |
| 최소 높이 | 4px | 2~8px | 무음 바닥 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}),s={t:0};
tl.to(s,{t:2,duration:2,ease:'none',onUpdate:()=>{
 const f=s.t*30,i=Math.min(Math.floor(f),frames.length-2),p=f-i;
 ctx.clearRect(0,0,1920,1080);
 for(let b=0;b<16;b++){const v=frames[i][b]*(1-p)+frames[i+1][b]*p;
 const h=Math.max(4,v*240);ctx.fillRect(100+b*56,700-h,32,h);}
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 오디오 스펙트럼을 적용해. 사전 추출한 대역 배열을 시간으로 샘플링해 막대 길이에 매핑한다. 샘플 속도 30fps; 대역 수 16; 스무딩 150ms; 최소 높이 4px을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 오디오 스펙트럼을 적용해. 사전 추출한 대역 배열을 시간으로 샘플링해 막대 길이에 매핑한다. 샘플 속도 30fps; 대역 수 16; 스무딩 150ms; 최소 높이 4px을 적용한다. 0초, 1초, 2초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Audio Spectrum Visualizer on <target> in <file>. Use precomputed 30fps audio samples with 16 bands, 150ms smoothing, and a 4px minimum bar height. Apply the audio start offset and clamp sample indices at both ends. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Audio Spectrum Visualizer on <target> in <file>. Use precomputed 30fps audio samples with 16 bands, 150ms smoothing, and a 4px minimum bar height. Apply the audio start offset and clamp sample indices at both ends. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 1s, and 2s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 오디오 스펙트럼를 `.hero`에 적용해. / Apply Audio Spectrum Visualizer to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 오디오 스펙트럼 상태를 넣고 seek 시 2초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 샘플 속도 30fps; 대역 수 16; 스무딩 150ms; 최소 높이 4px을 싣고 사전 추출한 16개 주파수 대역을 음악 시각과 맞춰 표시한다.
- Scrolline Deck: 진행률 0~1을 2초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [오디오 파형 · Audio Waveform](../audio-waveform/) · [비트 싱크 · Beat Synchronization](../beat-sync/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/gsap-effects.md`) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown) · [remotion-dev/skills](https://github.com/remotion-dev/skills/blob/HEAD/skills/remotion-best-practices/remotion-markup/audio-visualization.md) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
