# Nº 210 웨이브 디졸브 · Wave Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**화면 전체가 주기적인 물결로 휘고 흔들리는 동안 두 장면이 섞이는 전환**

The whole frame bends and sways in periodic waves while the two scenes blend.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: Dreamy wave dissolve, 몽환 파동 디졸브, Butterfly wave distortion, 나비 곡선 파동 왜곡, Parametric wave distortion, 매개 곡선 파동 왜곡

## 선택 기준 / Selection

꿈과 회상처럼 경계가 흐릿한 분위기. 물속에서 보는 듯한 흔들림 / A blurry, dreamlike boundary, as if seen through water.

- 꿈, 회상, 상상 장면으로 들어갈 때 / Enter dream, recollection, or imagined scenes.
- 리플과 다르게 화면 전체가 흔들리는 물결이 필요할 때 / When a full-frame wave is needed rather than a localized ripple.

좋은 예 / Good: 1초 동안 진폭 화면 3%의 사인 물결이 화면을 흔들고 정점(0.5초)에서 두 장면이 반씩 섞인 뒤 감쇠하며 멈춘다
나쁜 예 / Bad: 진폭이 커서 멀미가 나거나, 주파수가 높아 지글거려 글자가 읽히지 않는다
주의 / Avoid: 진폭 화면 5% 초과 금지 · 파동 수는 화면당 2~4개

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 1.0s | 0.7~1.5s | 정점 50% |
| 진폭 | 화면 3% | 1~5% | 삼각파로 증감 |
| 파동 수 | 3 | 2~4 | 세로 방향 |
| 이징 | sine.inOut | sine | 부드러운 왕복 |

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 1.0, ease: 'sine.inOut', onUpdate: () => {
  const amp = 0.03 * Math.sin(Math.PI * u.p);
  wave.set({ amp, phase: u.p * Math.PI * 4 }); mix.set(u.p);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 웨이브 디졸브를 만들어줘. 1초 동안 진행값 p를 sine.inOut으로 0에서 1로 올리고, 세로 방향 사인 왜곡 진폭을 화면 폭의 3%*sin(pi*p), 위상을 4*pi*p로 걸면서 A와 B를 p로 섞어. 파동 수 3개, 양 끝에서 왜곡이 0이어야 하며 paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 wave dissolve를 넣어. p를 0에서 1로 1.0s sine.inOut, UV 변위 amp = 0.03*sin(pi p), phase = 4*pi*p, mix(A,B,p). 0.5초 캡처에서 화면 물결이 가장 크고 두 장면이 반씩 섞였는지, 0초와 1.0초에 왜곡이 0인지 확인해.
```

### English · Claude Code
```text
Build a wave dissolve from <targetA> to <targetB>. Ramp progress p from 0 to 1 over 1 second with sine.inOut. Apply a vertical sine distortion with amplitude 3% of frame width times sin(pi*p) and phase 4*pi*p while mixing A and B by p. Use 3 waves, distortion 0 at both ends, and one paused timeline.
```

### English · Codex
```text
Add a wave dissolve to <file>. Tween p 0 to 1 over 1.0s with sine.inOut, UV displacement amp = 0.03*sin(pi p), phase = 4*pi*p, mix(A,B,p). Capture at 0.5 seconds to confirm the largest waves with the scenes half mixed, and at 0 and 1.0 seconds to confirm zero distortion.
```

예시 / Example: 웨이브 디졸브를 `.hero`에 적용해. / Apply Wave Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: amp와 phase를 진행값 하나에서 계산해 셰이더나 SVG feDisplacementMap에 넘긴다. Date.now나 time uniform 사용 금지
- ReelForge: 씬 워커 브리프에 ampPct, waves, durationMs를 싣는다
- Scrolline Deck: 진행률 p로 amp = 0.03 sin(pi p), phase = 4 pi p를 계산한다. 양 끝에서 왜곡 0

조합 / Pair with: [리플 디졸브 · Ripple Dissolve](../ripple-dissolve/) · [워프 디졸브 · Warp Dissolve](../warp-dissolve/) · [블러 디졸브 · Blur Dissolve](../blur-dissolve/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Dreamy.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ButterflyWaveScrawler.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/CrazyParametricFun.glsl) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
