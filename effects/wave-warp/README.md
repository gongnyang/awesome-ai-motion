# Nº 494 웨이브 워프 · Wave Warp

> 클립 렌더 예정 / Clip rendering planned.

**문장의 위치는 유지된 채 글자 윤곽이 사인파처럼 휘고 흔들리는 효과**

Letter outlines bend and sway like a sine wave while the sentence stays in place.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 강조 | 숏폼, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: Text Wave Distort, 글자 표면 왜곡, 웨이브 왜곡

## 선택 기준 / Selection

물결, 소리, 열기 같은 진동을 글자에 입힌다. 텍스트가 살아 움직이는 인상을 준다 / Gives text the vibration of water, sound, or heat and makes it feel alive.

- 음성이나 소리를 다루는 장면의 제목에 진동감을 줄 때 / For titles in sound or voice scenes that need a sense of vibration
- 수면 위 또는 열기 속 글자를 표현할 때 / To render text on water or in heat haze

좋은 예 / Good: 제목 글자가 진폭 4px, 파장 80px의 사인파로 1.8초 동안 물결치고 마지막 0.4초에 진폭이 0으로 줄어든다
나쁜 예 / Bad: 진폭을 15px 이상 주어 글자를 알아볼 수 없거나, 파동 주기가 빨라 어지럽다
주의 / Avoid: 진폭 8px 초과 금지 · 끝에서 진폭 0으로 복원

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1800ms | 1200~3000ms | 마지막 400ms는 복원 |
| 진폭 | 4px | 2~8px | displacement scale |
| 파장 | 80px | 50~140px | baseFrequency로 조절 |
| 주기 | 1200ms | 800~2000ms | 위상 이동 |
| 방향 | 수평 | 수평/수직 | y 변위 방향 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
/* <feTurbulence type=fractalNoise baseFrequency='0.012 0' seed=2/><feDisplacementMap scale=4 yChannelSelector=G/> */
tl.to('#turb',{attr:{baseFrequency:'0.012 0.02'},duration:1.8,ease:'none'},t)
 .fromTo('#disp',{attr:{scale:0}},{attr:{scale:4},duration:.4,ease:'sine.out'},t)
 .to('#disp',{attr:{scale:0},duration:.4,ease:'sine.inOut'},t+1.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<제목>에 웨이브 워프를 넣어줘. SVG feTurbulence(baseFrequency 0.012 0, seed 2)와 feDisplacementMap으로 글자 윤곽에 진폭 4px, 파장 약 80px의 물결을 주고, 1.8초 동안 위상이 이동하게 해. 처음 0.4초에 진폭을 올리고 마지막 0.4초에 0으로 sine.inOut 복원. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <제목>에 wave-warp를 구현해. 진폭 4px, 파장 80px, 지속 1800ms, 복원 400ms. 0.3초, 0.9초, 2.0초를 캡처해 글자 윤곽이 물결치는지, 2.0초에 원래 모양과 일치하는지, 글자가 읽히는지 확인해.
```

### English · Claude Code
```text
Add a wave warp to <title>. Use SVG feTurbulence (baseFrequency 0.012 0, seed 2) with feDisplacementMap to ripple the outlines at 4px amplitude and about 80px wavelength, shifting phase over 1.8s. Raise amplitude in the first 0.4s and restore it to 0 in the last 0.4s with sine.inOut. Drive from a paused timeline.
```

### English · Codex
```text
Implement wave-warp on <title> in <file>: amplitude 4px, wavelength 80px, duration 1800ms, restore 400ms. Capture at 0.3s, 0.9s, and 2.0s to verify outlines ripple, 2.0s matches the original shape, and the text stays readable.
```

예시 / Example: 웨이브 워프를 `.hero`에 적용해. / Apply Wave Warp to `.hero`.

## 적용 / Application

- HyperFrames: SVG 필터를 텍스트 컨테이너에 걸고 scale attr을 paused 타임라인에서 보간한다. canvas 방식은 글자 표본 좌표에 sin(x/80*2π+phase)*4를 더한다
- ReelForge: 브리프에 amplitudePx, wavelengthPx, periodMs, axis를 싣는다. 텍스트는 짧은 제목에 한정한다
- Scrolline Deck: 진행률로 위상을 이동시키고 진폭은 시작과 끝에서 0이 되게 sine 봉우리로 준다. 스크롤 정지 시 진폭이 남지 않게 한다

조합 / Pair with: [난류 왜곡 · Turbulent Displace](../turbulent-displace/) · [오디오 파형 · Audio Waveform](../audio-waveform/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [스크램블 · Text Scramble](../text-scramble/)

출처 / Sources: local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#text-wave-distort`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-wave-distort/scene.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-wave-distort/index.html`) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
