# Nº 455 입자 비디오 모자이크 · Particle Video Mosaic

> 클립 렌더 예정 / Clip rendering planned.

**점 격자의 위치는 유지한 채 각 점의 색이 영상 프레임을 따라 바뀌어 움직이는 장면을 점으로 재현한다**

A fixed grid of dots takes its colors from the video frame by frame, redrawing the moving scene as points.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 설명 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: 2D 비디오 점

## 선택 기준 / Selection

영상이 작은 정보 단위의 집합이라는 것을 보여 준다. 디지털 화면의 해상도와 입자성을 연출로 드러낸다 / Shows that video is a collection of tiny units of information. It exposes the resolution and graininess of a digital screen as a stylistic choice.

- 실제 영상이 점 단위 데이터로 구성됐다는 것을 시각적으로 설명할 때 / Explain visually that video is built from point-sized data.
- 영상 전환 사이에 점 격자 질감으로 디지털 세계관을 만들 때 / Give a transition a dot grid texture that sets a digital tone.

좋은 예 / Good: 5px 간격 격자의 2px 점들이 33.33ms마다 영상 프레임 색을 받아 4초 동안 인물의 움직임을 점으로 그려 낸다
나쁜 예 / Bad: 점 간격을 20px 이상으로 벌려 영상 내용이 읽히지 않거나, 점 위치가 프레임마다 흔들려 노이즈처럼 보인다
주의 / Avoid: 점 간격 8px 초과 금지(영상 형태가 읽히지 않음) · 원본 영상의 사용 권리를 미리 확인한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 샘플 간격 | 5px | 4~8px | 1920 기준 384x216 점 |
| 점 크기 | 2px | 1.5~3px | 간격의 40% 안팎 |
| 프레임 갱신 | 33.33ms | 30fps 고정 | 원본 프레임과 동기 |
| 길이 | 4s | 3~6s | 영상 길이에 맞춤 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const v = document.querySelector('video'); // paused, currentTime을 타임라인이 지정
tl.to({}, { duration: 4, ease: 'none', onUpdate() { v.currentTime = this.progress() * 4; drawDots(v, 5, 2); } }, 0);
// drawDots: 5px 격자마다 색을 샘플링해 2px 원을 그림
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상을 5px 간격 점 격자로 다시 그려줘. 각 점은 2px 원이고 색은 원본 프레임에서 샘플링하며 4초 동안 재생해. video는 paused로 두고 타임라인 progress로 currentTime을 지정해서 seek해도 같은 프레임이 나오게 해줘.
```

### 한국어 · Codex
```text
<파일>에 particle video mosaic를 WebGL로 구현해. 샘플 간격 5px, 점 2px, 4초, 영상 텍스처 UV 샘플링. currentTime은 timeline progress로만 갱신한다. 0초, 2초, 4초를 캡처해 점 위치가 프레임 간 고정인지, 색만 영상 내용을 따라가는지 확인해.
```

### English · Claude Code
```text
Redraw the video in <target> as a dot grid with 5px pitch. Each dot is a 2px circle whose color is sampled from the source frame, over 4 seconds. Keep the video paused and set currentTime from timeline progress so seeking gives identical frames.
```

### English · Codex
```text
Implement a particle video mosaic in WebGL in <file>: 5px sample pitch, 2px dots, 4 seconds, sampling the video texture by UV. Update currentTime from timeline progress only. Capture at 0s, 2s and 4s and verify dot positions are fixed across frames while only colors follow the video content.
```

예시 / Example: 입자 비디오 모자이크를 `.hero`에 적용해. / Apply Particle Video Mosaic to `.hero`.

## 적용 / Application

- HyperFrames: video는 paused로 두고 타임라인 onUpdate에서 currentTime만 지정한다. seek가 정확하도록 프레임 정렬된 mp4를 쓴다
- ReelForge: 씬 워커 브리프에 소스 영상 경로, 샘플 간격 5px, 점 크기 2px, 길이를 싣는다
- Scrolline Deck: 진행률 0..1을 영상 currentTime에 대응시킨다. scrub에서는 되감기 시 디코딩 지연이 있으므로 프레임 이미지 시퀀스를 권한다

조합 / Pair with: [하프톤 모션 · Halftone Motion](../halftone-motion/) · [ASCII 모션 · ASCII Motion](../ascii-motion/) · [디더링 모션 · Animated Dithering](../animated-dither/)

출처 / Sources: [naughtyduk/particlesGL](https://github.com/naughtyduk/particlesGL) (custom personal-noncommercial/commercial-paid)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
