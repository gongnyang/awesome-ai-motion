# Nº 215 텍스트 구멍 줌 · Text Cutout Zoom

> 클립 렌더 예정 / Clip rendering planned.

**글자 모양 구멍으로 다음 장면이 보이다가 구멍이 커져 화면을 채우는 전환**

A scene shows through a letter-shaped hole, and the hole grows until it fills the frame.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 주목 끌기 | 설명 영상, 숏폼, 발표 | svg |

다른 이름 / Also known as: Text Cutout Scene Reveal, 텍스트 구멍 장면 드러내기

## 선택 기준 / Selection

제목에서 다음 장면으로 빨려 들어가는 느낌을 준다. 제목과 장면이 한 흐름으로 이어진다 / Feels like being pulled from the title into the next scene, joining title and scene into one flow.

- 타이틀 카드에서 본편 첫 장면으로 넘어갈 때 / Move from a title card to the first scene of the main piece.
- 챕터 제목이 다음 챕터 영상으로 열릴 때 / Open a chapter title into the next chapter footage.

좋은 예 / Good: 검은 화면 위 흰 'START' 모양 구멍으로 영상이 보이다가 1.2초 동안 scale 1에서 25로 커져 전체 화면이 영상으로 바뀐다
나쁜 예 / Bad: 구멍이 커지는 동안 뒤 영상까지 함께 확대돼 원근이 사라지고, 가는 글꼴이라 구멍이 작아 아무것도 안 보인다
주의 / Avoid: 가는 글꼴 금지(구멍이 너무 작음) · scale 종점이 화면을 다 덮지 못하면 안 된다(글자 크기 기준 계산) · 확대 중 마스크 가장자리 계단 현상 확인 필수

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 마스크 scale | 1→25 | 15→40 | 화면을 덮을 때까지 |
| 지속 | 1200ms | 900~1600ms | 전체 확대 |
| 이징 | power3.inOut | power2~power4.inOut | 시작 느리고 끝에 폭발 |
| 확대 중심 | 글자 중심 | 특정 글자 중심 | 단일 글자 관통 변형 |

## 구현 / Implementation (GSAP)

```js
/* <mask id="m"><rect fill="#fff" .../><text id="hole" fill="#000" .../></mask> */
tl.to('#hole', { scale: 25, transformOrigin: '50% 50%', duration: 1.2, ease: 'power3.inOut' }, 0.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에서 검은 배경에 흰 굵은 제목 '<문구>' 모양의 구멍을 SVG mask로 만들고 그 뒤에 <다음 장면>이 보이게 해줘. 0.5초 정지 후 1.2초 동안 구멍(글자)을 scale 1에서 25로 power3.inOut으로 키워 화면이 완전히 다음 장면으로 채워지게 해. paused 타임라인으로 seek 되게 해.
```

### 한국어 · Codex
```text
<파일>의 제목 전환을 mask 안 text의 scale tween(1→25, 1.2s, power3.inOut, delay 0.5s)으로 구현해. 0.3초, 1.0초, 1.7초, 2.2초를 캡처해 구멍 크기 진행과 2.2초에 검은 영역이 남지 않았는지 확인해.
```

### English · Claude Code
```text
In <target> make a hole shaped like the heavy title '<text>' in a black background with an SVG mask so <next scene> shows through. Hold 0.5 seconds, then scale the hole from 1 to 25 over 1.2 seconds with power3.inOut until the frame is completely filled with the next scene. Use a paused timeline so it can be seeked.
```

### English · Codex
```text
In <file> implement the title transition as a scale tween on the mask text (1 to 25, 1.2s, power3.inOut, delay 0.5s). Capture at 0.3s, 1.0s, 1.7s and 2.2s to verify the hole growth and that no black area remains at 2.2s.
```

예시 / Example: 텍스트 구멍 줌를 `.hero`에 적용해. / Apply Text Cutout Zoom to `.hero`.

## 적용 / Application

- HyperFrames: SVG mask 안의 text를 scale tween한다. mask 재계산 비용이 커서 1080p 이상은 미리 프레임 샘플 렌더로 확인한다
- ReelForge: 전환 씬 브리프에 문구, 굵기, scale 종점 25, 지속 1.2s를 싣는다. 다음 씬 영상을 배경 레이어로 지정한다
- Scrolline Deck: scale을 진행률에 지수 매핑(scale = 25^progress)해 확대 속도가 체감상 일정하게 한다. 멈춘 위치에서도 구멍 속 장면이 읽혀야 한다

조합 / Pair with: [줌 전환 · Zoom Through](../zoom-through/) · [마스크 리빌 · Mask Reveal](../mask-reveal/) · [글자 속 영상 · Text Window Fill](../text-window-fill/)

출처 / Sources: [codrops/TextClipScroll](https://github.com/codrops/TextClipScroll) (MIT) · [codrops/TextStylesHoverEffects](https://github.com/codrops/TextStylesHoverEffects) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
