# Nº 456 픽셀 정렬 · Pixel Sorting

> 클립 렌더 예정 / Clip rendering planned.

**밝기 순으로 픽셀 줄을 밀어 세로 또는 가로 줄무늬로 늘어뜨리는 글리치 아트 효과**

Pixel rows are pushed by brightness into stretched vertical or horizontal streaks, a glitch-art effect.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 주목 끌기, 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Pixel sort smear, 픽셀 정렬 번짐, Pixel Sort Stretch, 픽셀 정렬 늘어짐

## 선택 기준 / Selection

이미지가 데이터로 녹아내리는 듯한 실험적이고 도발적인 인상을 준다 / Gives an experimental, provocative impression of an image melting into data.

- 이미지 전환에서 화면이 데이터처럼 흘러내리게 할 때 / To let an image dissolve into data-like streaks during a transition
- 음악 영상이나 실험적 타이틀에서 강한 질감을 줄 때 / For strong texture in music videos or experimental titles

좋은 예 / Good: 이미지가 0.6초 동안 세로 8px 줄 단위로 밝은 픽셀부터 아래로 60px 밀려 늘어난 뒤 다음 이미지로 넘어간다
나쁜 예 / Bad: 임계값 없이 전체 픽셀을 정렬해 이미지가 알아볼 수 없이 뭉개진다
주의 / Avoid: 인물 얼굴에는 정렬 마스크를 걸지 않는다 · 지속 1.2초 초과 금지(효과가 지루해짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 400~1000ms | 정렬 진행 |
| 줄 폭 | 8px | 4~16px | 세로 줄 단위 |
| 최대 변위 | 60px | 30~120px | 밝기에 비례 |
| 밝기 임계 | 0.55 | 0.4~0.7 | 이 이상만 이동 |
| 방향 | 아래 | 아래/오른쪽 | 전환 방향과 일치 |

이징 / Ease: `power2.in`

## 구현 / Implementation (GSAP)

```js
// fragment: 열 단위 밝기 비례 샘플 오프셋
float lum=dot(texture2D(tex,vec2(uv.x,uv.y)).rgb,vec3(.299,.587,.114));
float k=step(.55,lum)*lum*uProg*60./1080.;
vec2 u=vec2(floor(uv.x*240.)/240.,uv.y-k);
gl_FragColor=texture2D(tex,u);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<이미지>에 픽셀 정렬 효과를 넣어줘. WebGL fragment shader에서 8px 폭 세로 줄마다 밝기 0.55 이상인 픽셀만 밝기에 비례해 최대 60px까지 아래로 밀어줘. 진행값은 0.6초 동안 power2.in으로 0에서 1로 올리고, 끝에 다음 이미지로 0.15초 교차해. 난수 없이 결정론으로, paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 pixel-sort 셰이더 전환을 구현해. 줄 폭 8px, 최대 변위 60px, 임계 0.55, 지속 600ms, ease power2.in. 0초, 0.3초, 0.6초, 0.8초를 캡처해 밝은 부분만 아래로 늘어나는지, 어두운 영역이 제자리인지, 0.8초에 다음 이미지가 온전한지 확인해.
```

### English · Claude Code
```text
Add a pixel-sort effect to <image>. In a WebGL fragment shader, for each 8px-wide vertical stripe, push only pixels with brightness above 0.55 downward in proportion to brightness, up to 60px. Ramp progress from 0 to 1 over 0.6s with power2.in, then cross-fade to the next image over 0.15s. Deterministic, no randomness, seekable via a paused timeline.
```

### English · Codex
```text
Implement a pixel-sort shader transition in <file>: stripe width 8px, max shift 60px, threshold 0.55, duration 600ms, ease power2.in. Capture at 0s, 0.3s, 0.6s, and 0.8s to verify only bright regions stretch downward, dark regions stay put, and the next image is intact at 0.8s.
```

예시 / Example: 픽셀 정렬를 `.hero`에 적용해. / Apply Pixel Sorting to `.hero`.

## 적용 / Application

- HyperFrames: 진짜 정렬은 프레임마다 비용이 커서 셰이더 근사(밝기 비례 오프셋)를 쓴다. uProg만 paused 타임라인이 구동하므로 seek 결과가 같다
- ReelForge: 브리프에 sortDurationMs, stripeWidth, maxShiftPx, threshold를 싣는다. 전환이면 A 이미지가 흘러내린 뒤 B 이미지로 교차하도록 씬을 나눈다
- Scrolline Deck: 스크롤 진행률을 uProg에 매핑한다. 되감기해도 같은 줄무늬가 나오도록 밝기 임계와 줄 폭을 고정값으로 둔다

조합 / Pair with: [글리치 전환 · Glitch Transition](../glitch-transition/) · [데이터모시 전환 · Datamosh Transition](../datamosh-transition/) · [슬릿 스캔 · Slit Scan](../slit-scan/) · [노이즈 디졸브 전환 · Noise Dissolve Transition](../noise-dissolve/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown) · [fand/vfx-js](https://github.com/fand/vfx-js/tree/main/packages/effects#effects) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
