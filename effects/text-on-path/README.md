# Nº 440 패스 위 텍스트 · Text On Path

> 클립 렌더 예정 / Clip rendering planned.

**글자가 곡선 경로를 따라 배열되고 그 위를 이동하는 효과**

Characters sit along a curved path and travel over it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 순서·흐름, 분위기 | 설명 영상, 숏폼, 웹 UI | svg |

다른 이름 / Also known as: Animated Text Path Shape, 텍스트 경로 형태 변형

## 선택 기준 / Selection

곡선의 흐름과 공간감을 문장 자체로 보여준다. 경로가 시선을 끝점으로 안내한다 / Shows the flow of a curve through the sentence itself, with the path guiding the eye to its end point.

- 지도나 궤적을 따라 이동하는 설명 문구가 필요할 때 / Move a caption along a route or trajectory on a map.
- 곡선 로고형 타이틀을 흘려 보낼 때 / Flow a title along a curved logo-like line.

좋은 예 / Good: 'FROM SEOUL TO BUSAN'이 완만한 S곡선을 따라 2초 동안 offset 0에서 100%로 흘러 들어온다
나쁜 예 / Bad: 급한 곡률에서 글자가 겹치고 뒤집혀 읽히지 않는다
주의 / Avoid: 곡률 반경이 글자 크기의 2배 미만인 경로 금지 · 글자가 뒤집히는 구간 금지 · 작은 본문에는 쓰지 않는다(28px 미만)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 2s | 1.2~3s | offset 0→100% |
| 글자 크기 | 56px | 40~96px | 경로 대비 충분히 작게 |
| 경로 곡률 반경 | 글자 크기의 4배 이상 | 3~8배 | 겹침 방지 |
| 이징 | none | none~sine.inOut | 선형이 궤적 느낌 |

## 구현 / Implementation (GSAP)

```js
/* <path id="p" d="M100 700 C500 300 1000 1000 1800 400"/><text><textPath href="#p" id="tp">FROM SEOUL TO BUSAN</textPath></text> */
tl.fromTo('#tp', { attr: { startOffset: '-60%' } },
  { attr: { startOffset: '5%' }, duration: 2, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 SVG 곡선 경로(완만한 S자)를 만들고, 문구 '<문구>'를 textPath로 올려 2초 동안 startOffset이 -60%에서 5%로 흘러 들어오게 해줘. 글자 크기 56px, 이징 none, 도착 뒤 1.5초 정지. 경로 곡률 반경은 글자 크기의 4배 이상으로 잡고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>에서 textPath의 startOffset을 attr tween(-60%→5%, 2s, none)으로 구동해. 0.5초, 1.2초, 2.5초 시점을 캡처해 글자가 겹치거나 뒤집히지 않는지, 2.5초에 문장 전체가 경로 안에 들어와 있는지 확인해.
```

### English · Claude Code
```text
In <target> draw a gentle S-shaped SVG path and place '<text>' on it as a textPath so startOffset runs from -60% to 5% over 2 seconds. Font size 56px, ease none, hold 1.5 seconds after arrival. Keep the curve radius at least 4 times the font size and use one paused timeline.
```

### English · Codex
```text
In <file> drive the textPath startOffset with an attr tween (-60% to 5%, 2s, none). Capture at 0.5s, 1.2s and 2.5s and verify letters never overlap or flip and that the whole sentence sits inside the path at 2.5s.
```

예시 / Example: 패스 위 텍스트를 `.hero`에 적용해. / Apply Text On Path to `.hero`.

## 적용 / Application

- HyperFrames: textPath의 startOffset을 attr tween으로 구동한다. paused 타임라인이면 seek마다 값이 결정된다
- ReelForge: 경로 d 값, 문구, 이동 시간 2s를 브리프에 실어 SVG 씬으로 만든다. 한글도 textPath가 음절 단위로 배치해 자모 깨짐이 없다
- Scrolline Deck: startOffset을 진행률 0..1에 선형 매핑한다. 멈췄을 때 문장이 잘리지 않도록 끝 offset을 5% 안에 둔다

조합 / Pair with: [원형 글자 회전 · Circular Text Spin](../circular-text-spin/) · [패스 하이라이트 · Path Highlight](../path-highlight/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [codrops/CircularTextEffect](https://github.com/codrops/CircularTextEffect) (MIT) · [codrops/AnimateSVGTextPath](https://github.com/codrops/AnimateSVGTextPath) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
