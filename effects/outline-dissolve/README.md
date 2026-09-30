# Nº 186 윤곽 디졸브 · Outline Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**장면의 면 색이 사라져 밝은 윤곽만 남았다가 새 장면의 면 색이 다시 채워진다**

The scene loses its fill colors, leaving only bright outlines, then the new scene fills back in with color.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 설명 영상, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Edge outline dissolve, 윤곽선 경유 전환

## 선택 기준 / Selection

면 색이 빠지고 윤곽만 남았다가 새 장면 색으로 다시 채워진다. 형태를 통해 두 화면을 잇는다 / Abstracts form so that two screens are bridged by shape.

- 도해, 청사진, 아이콘 톤의 영상에서 형태를 유지한 채 화면 내용을 바꿀 때 / When changing content while keeping shape in diagram, blueprint, or icon-style videos
- 제품 사진이 선화로 바뀌었다가 다른 제품으로 채워질 때 / When a product photo turns into a line drawing and refills as another product

좋은 예 / Good: 700ms 동안 이전 장면의 면 색이 빠져 밝은 윤곽만 남고(0.35초), 새 장면의 윤곽이 같은 자리에서 색으로 채워진다
나쁜 예 / Bad: 윤곽선이 너무 얇아 사라져 보이거나, 두 장면의 형태가 전혀 달라 윤곽이 겹치며 지저분해진다
주의 / Avoid: 윤곽 밝기는 배경 대비를 확보한다(어두운 배경 위 흰 선) · 두 장면의 주요 형태 위치를 미리 맞춰 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~900ms | linear |
| 윤곽 두께 | 2px | 1~3px | 1920px 기준 |
| 윤곽 밝기 | 8.0(강조) | 4~10 | HDR 아닌 경우 흰색 100% |
| 윤곽 정점 | 진행 50% | 40~60% | 면 색 opacity 0 |
| 배경 어둡게 | 0.6 | 0.4~0.7 | 윤곽이 잘 보이도록 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.to('.prev-fill', { opacity: 0, duration: 0.35, ease: 'none' }, 0);
tl.to('.prev-line', { opacity: 1, duration: 0.2 }, 0.1).to('.prev-line', { opacity: 0, duration: 0.2 }, 0.35);
tl.fromTo('.next-line', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.3).to('.next-line', { opacity: 0, duration: 0.2 }, 0.5);
tl.fromTo('.next-fill', { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'none' }, 0.35);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 윤곽 디졸브를 넣어줘. 이전 장면은 0.35초 동안 면 색(.prev-fill)을 opacity 0으로 빼서 선화(.prev-line, 2px 흰색)만 남기고, 0.3초부터 새 장면 선화가 같은 자리에서 나타난 뒤 0.35초부터 색(.next-fill)이 0.35초 동안 채워지게 해. 전체 0.7초, 이징 none, paused 타임라인.
```

### 한국어 · Codex
```text
<파일>에 윤곽 디졸브를 구현해. .prev-fill opacity 1에서 0 (0~0.35초), 선화 두 레이어 교차 (0.1~0.55초), .next-fill 0에서 1 (0.35~0.7초), 모두 ease none. 0.2초, 0.35초, 0.5초, 0.7초 시점을 캡처해 정점(0.35초)에 선화만 보이는지, 0.7초에 선화가 남지 않았는지 확인해.
```

### English · Claude Code
```text
Add an Outline Dissolve to <target>. Fade .prev-fill to opacity 0 over the first 0.35s, leaving a 2px white line layer (.prev-line). From 0.3s show the new scene lines in the same position, then fill .next-fill from 0 to 1 over 0.35s starting at 0.35s. Total 0.7s, ease none, on a paused timeline.
```

### English · Codex
```text
Implement Outline Dissolve in <file>. .prev-fill opacity 1 to 0 (0 to 0.35s), line layers cross (0.1 to 0.55s), .next-fill 0 to 1 (0.35 to 0.7s), all ease none. Capture at 0.2s, 0.35s, 0.5s, and 0.7s to confirm only outlines are visible at 0.35s and none remain at 0.7s.
```

예시 / Example: 윤곽 디졸브를 `.hero`에 적용해. / Apply Outline Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: 에지는 미리 만든 선화 레이어(SVG 또는 PNG)를 두 장 준비해 opacity만 타임라인에서 조절한다. 런타임 필터 없이 seek 안전하다
- ReelForge: 씬 워커 브리프에 선화 레이어를 두 장면 각각 별도로 요구하고 지속 700ms, 정점 50%를 싣는다
- Scrolline Deck: scrub에서는 opacity 4개를 진행률 구간(0~0.5, 0.5~1)으로 나눠 선형 매핑하고 스프링은 쓰지 않는다

조합 / Pair with: [윤곽 추출 스타일 전환 · Edge Trace Stylization](../edge-trace-transition/) · [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/EdgeTransition.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
