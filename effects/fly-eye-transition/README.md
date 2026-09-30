# Nº 159 플라이 아이 전환 · Fly Eye Transition

> 클립 렌더 예정 / Clip rendering planned.

**영상이 작은 렌즈들로 쪼개져 확대 굴절되고 색이 분리되며 교차하는 전환**

The frame breaks into tiny lenses that magnify and refract, split colors, and cross into the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 제품 시연 | webgl |

다른 이름 / Also known as: Fly eye mosaic, 곤충 눈 굴절

## 선택 기준 / Selection

복안과 유리 표면 같은 낯선 시야. 프리즘을 통해 보는 듯한 굴절 / An unfamiliar view like a compound eye or glass surface: refraction as through a prism.

- 실험적이고 기술적인 톤의 영상에서 개성 있는 전환이 필요할 때 / Give an experimental, technical video a distinctive transition.
- 유리, 렌즈, 곤충 같은 주제 연출에서 / Themes such as glass, lenses, or insects.

좋은 예 / Good: 0.8초 동안 화면이 셀 크기 0.04의 렌즈 격자로 나뉘어 zoom 50까지 굴절하고 색 분리 0.3이 생겼다가 뒤 장면으로 풀린다
나쁜 예 / Bad: 셀이 너무 작아 노이즈처럼 보이거나, 굴절 강도가 커서 중심 피사체를 알아볼 수 없다
주의 / Avoid: 셀 크기 0.02 미만 금지 · 굴절 정점은 0.15초 이내

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.6~1.2s | 선형 |
| 셀 크기 | 0.04 | 0.03~0.08 | 화면 비율 |
| zoom | 50 | 20~60 | 굴절 강도 |
| 색 분리 | 0.3 | 0~0.4 | RGB 오프셋 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 0.8, ease: 'none', onUpdate: () => {
  const k = Math.sin(Math.PI * u.p);
  eye.set({ size: 0.04, zoom: 50 * k, sep: 0.3 * k, mix: u.p });
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 플라이 아이 전환을 만들어줘. 화면을 셀 크기 0.04의 렌즈 격자로 나누고 0.8초 동안 진행값 p를 linear로 0에서 1로 올리면서 굴절 zoom을 50*sin(pi*p), 색 분리를 0.3*sin(pi*p), 혼합을 p로 걸어. 값은 상태 객체 하나에서 읽고 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 fly eye transition을 적용해. p 0에서 1을 0.8s ease none, 셰이더에서 cell=0.04, zoom=50*sin(pi p), colorSep=0.3*sin(pi p), mix(A,B,p). 0.4초 캡처에서 렌즈 셀과 색 분리가 최대인지, 0초와 0.8초에 굴절이 0인지 확인해.
```

### English · Claude Code
```text
Build a fly-eye transition from <targetA> to <targetB>. Divide the frame into a lens grid with cell size 0.04, ramp progress p from 0 to 1 linearly over 0.8 seconds, and apply refraction zoom 50*sin(pi*p), color separation 0.3*sin(pi*p), and blend by p. Read values from one state object in a paused timeline that seeks.
```

### English · Codex
```text
Apply a fly eye transition in <file>. Tween p 0 to 1 over 0.8s with ease none; in the shader use cell=0.04, zoom=50*sin(pi p), colorSep=0.3*sin(pi p), mix(A,B,p). Capture at 0.4 seconds to confirm lens cells and color separation peak, and at 0 and 0.8 seconds to confirm zero refraction.
```

예시 / Example: 플라이 아이 전환를 `.hero`에 적용해. / Apply Fly Eye Transition to `.hero`.

## 적용 / Application

- HyperFrames: 셰이더 uniform을 진행값 하나에서 계산한다. 셀 격자는 uv를 고정 크기로 반복해 seed 없이 결정론적이다
- ReelForge: 씬 워커 브리프에 cellSize, zoom, colorSep, durationMs를 싣는다
- Scrolline Deck: 진행률 삼각파 sin(pi p)로 굴절과 색 분리를 주고 mix는 p로 선형

조합 / Pair with: [칼레이도스코프 전환 · Kaleidoscope Transition](../kaleidoscope-transition/) · [모자이크 이동 전환 · Mosaic Traversal](../mosaic-traverse/) · [크로매틱 와이프 · Chromatic Wipe](../chromatic-wipe/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/flyeye.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
