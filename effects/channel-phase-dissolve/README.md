# Nº 149 색 채널 순차 디졸브 · Channel Phase Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**빨강과 초록과 파랑 채널이 서로 다른 시점에 새 장면으로 넘어가는 전환**

Red, green, and blue channels hand over to the new scene at different times.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 제품 시연 | webgl |

다른 이름 / Also known as: 색 채널 시차 페이드

## 선택 기준 / Selection

디지털 처리와 색 분리가 드러나는 교체. 채널 순서가 어긋나며 색이 번진다 / A swap that exposes digital processing: channels fall out of step and color bleeds.

- 기술적이고 디지털한 톤의 영상에서 크로스페이드에 개성을 더할 때 / Add character to a crossfade in a technical, digital-toned video.
- 글리치보다 부드러운 색 분리 연출에서 / Get a gentler color-split effect than a glitch.

좋은 예 / Good: 0.7초 동안 R은 0.0~0.6, G는 0.2~0.8, B는 0.4~1.0 구간에 각각 새 장면으로 넘어가며 중간에 색이 번진다
나쁜 예 / Bad: 채널 시차를 화면 전체 지속만큼 벌려 앞뒤 장면이 서로 다른 색으로 어둡게 물든 채 머문다
주의 / Avoid: 채널 시차 각각 0.4 진행률 초과 금지 · 글자 중심 장면은 사용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.0s | 선형 |
| R 구간 | 0.0~0.6 |  | 먼저 시작 |
| G 구간 | 0.2~0.8 |  | 중간 |
| B 구간 | 0.4~1.0 |  | 나중 끝 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const ch = { r: 0, g: 0, b: 0 };
const seg = (k, s, e) => tl.to(ch, { [k]: 1, duration: (e - s) * 0.7, ease: 'none' }, s * 0.7);
seg('r', 0, 0.6); seg('g', 0.2, 0.8); seg('b', 0.4, 1.0);
tl.eventCallback('onUpdate', () => shader.set(ch.r, ch.g, ch.b));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 채널 페이즈 디졸브를 만들어줘. 0.7초 전체 동안 R 채널은 0.0~0.6, G 채널은 0.2~0.8, B 채널은 0.4~1.0 구간(0.7초 기준 비율)에서 각각 A에서 B로 넘어가게 해. 채널 혼합률은 상태 객체 3개로 두고 이징 none, paused 타임라인 하나로 seek되게 만들어.
```

### 한국어 · Codex
```text
<파일>에 channel phase dissolve를 적용해. r,g,b 혼합률을 각각 0에서 1로 (0~0.42s, 0.14~0.56s, 0.28~0.7s) ease none으로 보간하고 셰이더에서 채널별 mix를 계산한다. 0.2초와 0.35초 캡처에서 색 번짐이 보이는지, 0.7초에 B와 동일한지 확인해.
```

### English · Claude Code
```text
Build a channel phase dissolve from <targetA> to <targetB> over 0.7 seconds. The R channel hands over during 0.0 to 0.6 of the duration, G during 0.2 to 0.8, and B during 0.4 to 1.0. Keep the three channel mix values in state objects, use ease none, and keep everything in one paused timeline that seeks.
```

### English · Codex
```text
Apply a channel phase dissolve in <file>. Tween r, g, b mix values 0 to 1 over (0 to 0.42s, 0.14 to 0.56s, 0.28 to 0.7s) with ease none and compute per-channel mix in the shader. Capture at 0.2 and 0.35 seconds to confirm visible color fringing, and at 0.7 seconds to confirm the frame matches B.
```

예시 / Example: 색 채널 순차 디졸브를 `.hero`에 적용해. / Apply Channel Phase Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: 채널별 혼합률을 상태 객체에 담아 셰이더에 전달한다. CSS로는 SVG feColorMatrix 세 채널 분리 사용
- ReelForge: 씬 워커 브리프에 rangeR, rangeG, rangeB, durationMs를 실어 구간을 조정 가능하게 한다
- Scrolline Deck: 진행률 p에서 채널별 clamp((p-s)/(e-s))를 계산한다. 이징은 linear

조합 / Pair with: [크로매틱 와이프 · Chromatic Wipe](../chromatic-wipe/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/colorphase.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
