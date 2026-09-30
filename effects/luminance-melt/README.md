# Nº 177 루미넌스 멜트 · Luminance Melt

> 클립 렌더 예정 / Clip rendering planned.

**장면의 밝기와 노이즈를 따라 영역이 위나 아래로 녹아내리듯 새 장면으로 바뀌는 전환**

Regions melt away upward or downward following the frame's brightness and noise, and the new scene takes over.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: 휘도 녹아내리기

## 선택 기준 / Selection

화면 내용이 액체처럼 분해되는 느낌. 밝은 곳이 먼저 흘러내린다 / The picture dissolves like a liquid, with bright areas running first.

- 녹아내리듯 사라지는 주제(시간, 부패, 변화)를 다룰 때 / Subjects about time, decay, or change that melts away.
- 아래로 흘러내리는 방향성이 있는 전환이 필요할 때 / A directional, downward-flowing transition.

좋은 예 / Good: 0.9초 동안 밝은 픽셀부터 아래로 흘러내리며(l_threshold 0.8) 노이즈가 섞인 경계로 뒤 장면이 드러난다
나쁜 예 / Bad: 방향과 노이즈가 프레임마다 달라 줄무늬가 깜빡이거나, 흘러내림이 너무 균일해 단순 와이프처럼 보인다
주의 / Avoid: 노이즈는 시드 고정 · 깜빡임이 보이면 노이즈 해상도를 낮춰 저주파로 바꾼다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.9s | 0.6~1.4s | 선형 |
| 방향 | 1(아래) | 1/-1 | 세로 |
| l_threshold | 0.8 | 0.5~0.95 | 밝기 기준 |
| 노이즈 세기 | 0.3 | 0.1~0.5 | 저주파 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 0.9, ease: 'none', onUpdate: () => {
  // GLSL: melt = p*1.4 - uv.y*dir - (luma > 0.8 ? 0.2 : 0.0) - noise(uv)*0.3
  shader.set('progress', u.p);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 루미넌스 멜트를 만들어줘. 진행값 p를 0.9초 동안 ease none으로 0에서 1로 올리고, 각 픽셀의 melt = p*1.4 - uv.y*방향 - (밝기>0.8이면 0.2) - 고정 노이즈*0.3이 0을 넘는 곳부터 B로 교체해. 노이즈는 고정 텍스처, paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 luminance melt를 적용해. progress 0에서 1을 0.9s ease none으로 보간하고 melt = p*1.4 - uv.y*dir - (luma>0.8?0.2:0) - noiseTex*0.3이 양수인 픽셀을 B로 바꾼다. 0.3초, 0.6초 캡처로 밝은 영역이 먼저 아래로 흘러내리는지, 같은 시각 두 번 캡처해 노이즈가 동일한지 확인해.
```

### English · Claude Code
```text
Build a luminance melt from <targetA> to <targetB>. Ramp progress p from 0 to 1 over 0.9 seconds with ease none. Per pixel, switch to B where melt = p*1.4 - uv.y*direction - (0.2 if luma > 0.8) - fixedNoise*0.3 goes above 0. Use a fixed noise texture in one paused timeline.
```

### English · Codex
```text
Apply a luminance melt in <file>. Tween progress 0 to 1 over 0.9s with ease none and switch pixels to B where melt = p*1.4 - uv.y*dir - (luma>0.8?0.2:0) - noiseTex*0.3 is positive. Capture at 0.3 and 0.6 seconds to confirm bright areas run down first, and capture the same time twice to confirm identical noise.
```

예시 / Example: 루미넌스 멜트를 `.hero`에 적용해. / Apply Luminance Melt to `.hero`.

## 적용 / Application

- HyperFrames: progress만 uniform으로 보내고 노이즈는 텍스처로 고정한다. seed를 바꾸지 않는다
- ReelForge: 씬 워커 브리프에 direction, lumaThreshold, noiseAmount, noiseAsset을 싣는다
- Scrolline Deck: 진행률 p를 melt 임계값에 매핑한다. 스크롤이 멈추면 반쯤 녹은 화면이 남으니 의도된 정지 지점에서만 멈추게 한다

조합 / Pair with: [루마 와이프 · Luma Wipe](../luma-wipe/) · [번 전환 · Burn Transition](../burn-transition/) · [노이즈 디졸브 전환 · Noise Dissolve Transition](../noise-dissolve/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/luminance_melt.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
