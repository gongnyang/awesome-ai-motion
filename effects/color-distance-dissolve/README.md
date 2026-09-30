# Nº 152 색차 디졸브 · Color Distance Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**두 장면의 색 차이가 큰 부분과 작은 부분이 서로 다른 속도로 교체되는 전환**

Areas where the two scenes differ most in color swap at different speeds from areas where they match.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 설명 영상, 숏폼 | webgl |

다른 이름 / Also known as: 색 거리 전환

## 선택 기준 / Selection

그림의 내용이 전환 순서를 정한다는 감각. 비슷한 색부터 먼저 스며든다 / The picture's own content decides the order of the change: similar colors melt across first.

- 같은 구도에서 색만 다른 두 장면(전과 후)을 자연스럽게 잇고 싶을 때 / Connect two scenes with the same layout but different colors, such as before and after.
- 콘텐츠 자체가 전환의 결을 정하는 디졸브를 원할 때 / Want a dissolve whose grain is set by the content itself.

좋은 예 / Good: 0.8초 동안 색이 비슷한 영역은 먼저, 색차가 큰 영역은 나중에 뒤 장면으로 바뀌며 power 5의 곡선으로 경계가 형성된다
나쁜 예 / Bad: 두 장면의 색이 거의 같아 차이가 없거나, 노이즈가 많은 사진에서 반짝임이 생긴다
주의 / Avoid: power 값 8 초과 금지(경계가 톱니처럼 거칠어진다) · 두 장면 색이 무관하면 다른 디졸브를 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.6~1.2s | 선형 |
| power | 5 | 2~8 | 클수록 차이 부분이 늦게 교체 |
| 진행 임계 | p | 0~1 | 진행률과 색거리 비교 |
| 혼합 | smoothstep |  | 경계 부드럽게 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 0.8, ease: 'none', onUpdate: () => {
  // GLSL: m = smoothstep(0.0, 0.1, p * 1.1 - pow(dist(a,b), 5.0));
  shader.set('progress', u.p);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 색 거리 디졸브를 만들어줘. 진행값 p를 0.8초 동안 0에서 1로 ease none으로 올리고, 픽셀마다 두 장면 색의 거리 d를 구해 mix 가중치를 smoothstep(0.0, 0.1, p*1.1 - pow(d, 5.0))로 계산하게 해. 진행값은 GSAP 상태 객체 하나에서 읽어 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 color distance dissolve를 적용해. progress를 0에서 1로 0.8s ease none, 셰이더에서 m = smoothstep(0.0, 0.1, p*1.1 - pow(distance(a,b), 5.0)). 0.3초와 0.5초 캡처에서 색이 비슷한 영역이 먼저 B로 바뀌는지, 0.8초에 전면이 B인지 확인해.
```

### English · Claude Code
```text
Build a color distance dissolve from <targetA> to <targetB>. Ramp progress p from 0 to 1 over 0.8 seconds with ease none. Per pixel, compute the color distance d between the two scenes and mix with smoothstep(0.0, 0.1, p*1.1 - pow(d, 5.0)). Read progress from one GSAP state object in a paused timeline that seeks.
```

### English · Codex
```text
Apply a color distance dissolve in <file>. Tween progress 0 to 1 over 0.8s with ease none and use m = smoothstep(0.0, 0.1, p*1.1 - pow(distance(a,b), 5.0)) in the shader. Capture at 0.3 and 0.5 seconds to confirm similar-color areas switch to B first, and at 0.8 seconds to confirm the whole frame is B.
```

예시 / Example: 색차 디졸브를 `.hero`에 적용해. / Apply Color Distance Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: progress 하나만 셰이더에 넘기고 나머지 계산은 픽셀에서 한다. 두 장면 텍스처를 미리 올려 seek 후 즉시 그린다
- ReelForge: 씬 워커 브리프에 power, durationMs, softness를 싣고 비교용 정지 이미지 두 장을 지정한다
- Scrolline Deck: 진행률 p를 그대로 셰이더 progress로 쓴다. 스크롤을 멈춘 프레임이 혼합 상태여도 자연스럽다

조합 / Pair with: [루마 와이프 · Luma Wipe](../luma-wipe/) · [노이즈 디졸브 전환 · Noise Dissolve Transition](../noise-dissolve/) · [HSV 디졸브 · HSV Dissolve](../hsv-dissolve/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ColourDistance.glsl) (MIT) · [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) (LGPL-2.1-or-later) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
