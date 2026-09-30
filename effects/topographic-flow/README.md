# Nº 458 등고선 표면 흐름 · Topographic contour flow

> 클립 렌더 예정 / Clip rendering planned.

**변형되는 표면 위에 촘촘한 등고선이 그려지며 높이와 색이 천천히 흐르는 배경**

Dense contour lines draw across a deforming surface as height and color drift slowly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 브랜딩 | 설명 영상, 발표, 스크롤덱 | webgl |

## 선택 기준 / Selection

지형도처럼 정밀하고 유기적인 표면. 데이터 지형이나 추상 배경으로 읽힌다 / Reads as a precise, organic terrain map. It suits data landscapes and abstract technical backdrops.

- 제목 뒤의 정적인 배경에 정밀하고 기술적인 질감을 줄 때 / Give a static title background a precise, technical texture.
- 지형·밀도·분포 같은 주제의 도입 화면을 만들 때 / Open a section about terrain, density or distribution.

좋은 예 / Good: 어두운 남색 배경에 얇은 흰 등고선이 6초 주기로 천천히 부풀었다 가라앉고, 봉우리 쪽만 청록으로 물든다
나쁜 예 / Bad: 등고선이 굵고 진폭이 커서 물결치듯 출렁이거나, 선 색이 글자와 겹쳐 제목이 읽히지 않는다
주의 / Avoid: 등고선 불투명도 0.35 초과 금지(글자와 경쟁) · 변형 진폭 0.3 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 6s | 4~10s | 한 번 부풀었다 돌아오는 시간, 루프 |
| 등고선 간격 | 0.08 | 0.05~0.12 | 높이 값 기준 |
| 변형 진폭 | 0.2 | 0.1~0.3 | 높이 함수의 크기 |
| 선 두께 | 1.5px | 1~2px | fwidth로 화면 픽셀 고정 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: Math.PI * 2, duration: 6, ease: 'none', repeat: 0, onUpdate: draw }, 0);
// GLSL: h = fbm(uv*2.0 + vec2(cos(t), sin(t))*0.3) * amp;
// line = 1.0 - smoothstep(0.0, fwidth(h)*1.5, abs(fract(h/gap - 0.5) - 0.5)*gap);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면 배경에 등고선 표면 흐름을 넣어줘. 어두운 남색 바탕에 두께 1.5px 흰 선을 불투명도 0.3으로 그리고, 등고선 간격 0.08, 변형 진폭 0.2로 6초 주기 루프가 되게 해. 봉우리 쪽만 청록으로 물들고 제목이 놓일 중앙 영역은 대비를 유지해. 시간은 paused 타임라인의 위상 값 하나로 구동해.
```

### 한국어 · Codex
```text
<파일>의 배경 캔버스에 등고선 프래그먼트 셰이더를 추가해. 높이는 fbm(uv*2 + vec2(cos t, sin t)*0.3)*0.2, 등고선 간격 0.08, 선 두께는 fwidth 기준 1.5px, t는 6초에 0에서 2π로 선형 tween한다. 0초와 6초 프레임이 같은지, 3초 프레임에서 제목 영역 대비가 유지되는지 캡처로 확인해.
```

### English · Claude Code
```text
Add a topographic contour flow to the background of <target>. Draw 1.5 px white lines at 0.3 opacity on dark navy, contour gap 0.08, deformation amplitude 0.2, looping every 6 seconds. Tint only the peaks teal and keep contrast in the center where the title sits. Drive time with one phase value on a paused timeline.
```

### English · Codex
```text
Add a contour fragment shader to the background canvas in <file>. Height = fbm(uv*2 + vec2(cos t, sin t)*0.3)*0.2, gap 0.08, line width 1.5 px via fwidth, and tween t linearly from 0 to 2π over 6 s. Capture 0 s and 6 s to confirm they match, and 3 s to confirm the title area keeps contrast.
```

예시 / Example: 등고선 표면 흐름를 `.hero`에 적용해. / Apply Topographic contour flow to `.hero`.

## 적용 / Application

- HyperFrames: 시간을 원주 위상(cos t, sin t)으로 넘기면 루프가 이음매 없이 닫히고 seek에도 안전하다. 타임라인 길이를 주기에 맞춘다
- ReelForge: 씬 브리프에 배경 색 2개, 주기 6초, 간격 0.08, 진폭 0.2를 노출하고 제목 위치는 비워 둔다
- Scrolline Deck: 진행률 0~1을 위상 0~2π에 선형 매핑한다. 스크롤을 멈추면 표면도 멈추므로 홀드 구간을 감안해 진폭을 낮춘다

조합 / Pair with: [도메인 워핑 · Domain Warping](../domain-warping/) · [흐름장 · Flow Field](../flow-field/) · [메시 그라디언트 흐름 · Mesh Gradient Flow](../mesh-gradient-flow/) · [웨이브 워프 · Wave Warp](../wave-warp/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/js-three-shader-topography) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
