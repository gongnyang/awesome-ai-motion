# Nº 544 보로노이 모션 · Animated Voronoi

> 클립 렌더 예정 / Clip rendering planned.

**불규칙한 셀과 균열 무늬가 크기와 모양을 바꾸며 흐르는 보로노이 패턴**

Irregular cells and crack patterns flow while changing size and shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 설명 | 설명 영상, 발표, 스크롤덱 | webgl |

다른 이름 / Also known as: Cell Pattern Evolution, 셀 패턴 진화, Cell Pattern, 움직이는 보로노이 셀

## 선택 기준 / Selection

세포, 결정, 거품 같은 유기적 조직. 추상 표면이 살아 움직이는 인상 / Organic tissue like cells, crystals or foam. An abstract surface that feels alive.

- 생물·소재·네트워크 주제의 추상 배경을 만들 때 / Build abstract backgrounds for biology, materials or network topics.
- 셀 경계선을 이용해 구획이 나뉘고 합쳐지는 개념을 보여 줄 때 / Use cell borders to show regions splitting and merging.

좋은 예 / Good: 셀 크기 48px의 보로노이 경계선이 4초 주기로 천천히 이동하며 셀 중심 점들이 0.3Hz로 흔들린다
나쁜 예 / Bad: 셀이 너무 잘아 노이즈처럼 보이거나, 경계선이 굵고 밝아 위에 놓인 글자와 경쟁한다
주의 / Avoid: 셀 크기 24px 미만 금지 · 선 불투명도 0.35 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 4s | 3~8s | 시드 점 이동 루프 |
| 셀 크기 | 48px | 32~96px | 평균 셀 지름 |
| 변화 주파수 | 0.3Hz | 0.15~0.5 | 점이 도는 속도 |
| 선 두께 | 1.5px | 1~2.5px | F2-F1 경계 |
| 선 불투명도 | 0.3 | 0.15~0.35 | 텍스트 대비 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: Math.PI * 2, duration: 4, ease: 'none', onUpdate: draw }, 0);
// GLSL: 격자 셀마다 hash(id)로 점을 두고 0.5 + 0.35*sin(t + hash*6.28)로 이동
// float e = F2 - F1; float line = 1.0 - smoothstep(0.0, 0.04, e);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 보로노이 모션을 넣어줘. 평균 셀 지름 48px 격자에서 셀마다 해시로 시드 점을 정하고, 점이 위상 t에 따라 0.35셀 반경으로 도는 4초 루프를 만들어. 셀 경계는 F2-F1로 1.5px 흰 선, 불투명도 0.3으로 그리고 셀 내부는 어두운 남색에서 약하게 밝아지게 해.
```

### 한국어 · Codex
```text
<파일>의 배경 캔버스에 voronoi 셰이더를 추가해. 셀 크기 48px, 점 위치 = 0.5+0.35*sin(t+hash(id)*6.28), 경계 = 1-smoothstep(0,0.04,F2-F1), 불투명도 0.3. t는 4초에 0→2π 선형. 0초와 4초 프레임이 같은지, 2초 프레임에서 셀이 이동하는지 캡처로 확인해.
```

### English · Claude Code
```text
Add an animated Voronoi to the background of <target>. On a grid with an average cell diameter of 48px, hash a seed point per cell and orbit it at 0.35 cell radius by phase t in a 4-second loop. Draw borders as F2-F1 white 1.5px lines at 0.3 opacity, with cell interiors shading softly from dark navy.
```

### English · Codex
```text
Add a voronoi shader to the background canvas in <file>. Cell size 48px, point = 0.5+0.35*sin(t+hash(id)*6.28), border = 1-smoothstep(0,0.04,F2-F1), opacity 0.3. Tween t 0 to 2π linearly over 4 s. Capture 0 s and 4 s to confirm they match, and 2 s to confirm cells moved.
```

예시 / Example: 보로노이 모션를 `.hero`에 적용해. / Apply Animated Voronoi to `.hero`.

## 적용 / Application

- HyperFrames: 격자 셀 해시로 점 위치를 정하고 위상 t로만 움직이니 난수 상태가 없다. t를 0~2π로 4초 tween해 루프를 닫는다
- ReelForge: 씬 브리프에 셀 48px, 주기 4초, 선 색과 배경색, 선 불투명도 0.3을 싣는다
- Scrolline Deck: 진행률을 위상에 선형 매핑한다. 경계선이 가늘어 스크럽 중 깜빡이므로 선 두께를 2px로 올린다

조합 / Pair with: [셀룰러 오토마타 · Cellular Automaton Evolution](../cellular-automaton/) · [등고선 표면 흐름 · Topographic contour flow](../topographic-flow/) · [도메인 워핑 · Domain Warping](../domain-warping/) · [디더링 모션 · Animated Dithering](../animated-dither/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown) · [paper-design/shaders](https://shaders.paper.design/voronoi) (Apache-2.0) · [anthropics/skills](https://github.com/anthropics/skills/blob/HEAD/skills/algorithmic-art/SKILL.md) (Apache-2.0) · [fand/vfx-js](https://github.com/fand/vfx-js/tree/main/packages/effects#effects) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
