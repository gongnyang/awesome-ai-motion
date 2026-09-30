# Nº 086 글자 색 와이프 · Text Color Wipe

> 클립 렌더 예정 / Clip rendering planned.

**옅은 글자 위로 밝은 글자가 한쪽에서부터 채워지는 효과**

Bright text fills over dim text from one side.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 순서·흐름, 강조 | 설명 영상, 스크롤덱, 웹 UI | css |

다른 이름 / Also known as: Progressive text fill, 진행률 텍스트 채움, Text Color Wipe Replacement, 텍스트 색 와이프 교체, Colorama soft wipe, 색 번짐 와이프

## 선택 기준 / Selection

읽는 위치와 진행 정도를 동시에 알린다. 문구가 곧 진행 표시가 된다 / Communicates reading position and progress at once; the phrase itself becomes the progress indicator.

- 로딩·진행률 문구를 글자 채움으로 보여줄 때 / Show a loading or progress phrase as a letter fill.
- 긴 문장을 스크롤에 맞춰 읽어 나갈 때 / Read a long sentence along with scrolling.

좋은 예 / Good: 옅은 회색 문장 위에 흰 문장이 왼쪽에서 2초 동안 0에서 100%로 채워지고 경계가 200ms로 부드럽다
나쁜 예 / Bad: 두 레이어의 글꼴·줄바꿈이 달라 채워지는 글자가 아래 글자와 어긋난다
주의 / Avoid: 두 레이어는 같은 글꼴·크기·줄바꿈을 쓴다 · 옅은 층 opacity 0.25 미만 금지(아직 안 읽은 글자가 보이지 않음) · 여러 줄은 줄 단위로 나눠 채운다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 채움 시간 | 2s | 1.2~3s | 0→100% |
| 경계 부드러움 | 200ms | 0~300ms | clip 가장자리 |
| 옅은 층 opacity | 0.3 | 0.2~0.4 | 읽히는 하한 |
| 방향 | 좌→우 | 좌우/상하 | 읽는 방향 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
/* .base(옅은 글자) 위에 .fill(밝은 글자, 같은 텍스트) */
tl.fromTo('.fill', { clipPath: 'inset(0 100% 0 0)' },
  { clipPath: 'inset(0 0% 0 0)', duration: 2, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문장을 색 와이프로 채워줘. 옅은 회색(opacity 0.3) 문장 위에 같은 글꼴·크기의 흰 문장을 겹치고, clip-path inset(0 100% 0 0)에서 inset(0 0% 0 0)까지 2초 동안 이징 none으로 채워. 경계는 200ms 정도로 부드럽게. 여러 줄이면 줄마다 순서대로 채워.
```

### 한국어 · Codex
```text
<파일>의 문장에 두 겹 텍스트를 만들고 상단층 clipPath를 2초 tween해. 0초, 1초, 2초 캡처로 채움이 0%, 50%, 100%이고 두 레이어 글자가 픽셀 단위로 겹치는지 확인해.
```

### English · Claude Code
```text
Fill the sentence in <target> with a color wipe. Overlay a white copy of the same font and size over a dim gray copy (opacity 0.3) and animate clip-path from inset(0 100% 0 0) to inset(0 0% 0 0) over 2 seconds with ease none, softening the edge by about 200ms. For multiple lines, fill line by line in order.
```

### English · Codex
```text
In <file> build the two-layer text and tween the top layer clipPath over 2s. Capture at 0s, 1s and 2s to confirm the fill is at 0%, 50% and 100%, and check that both layers overlap pixel for pixel.
```

예시 / Example: 글자 색 와이프를 `.hero`에 적용해. / Apply Text Color Wipe to `.hero`.

## 적용 / Application

- HyperFrames: clip-path inset을 tween한다. 두 레이어를 같은 컨테이너에 absolute로 겹치고 폰트를 preload한다
- ReelForge: 타이포 씬에 문구, 채움 방향, 진행률 소스(시간 또는 음성 타이밍)를 실어 보낸다
- Scrolline Deck: clip 값을 진행률 0..1에 선형 매핑하는 것이 이 효과의 정석이다. 스크롤 위치가 곧 읽은 위치가 된다

조합 / Pair with: [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/) · [카라오케 자막 · Karaoke Caption](../karaoke-caption/) · [클립 리빌 · Clip Reveal](../clip-reveal/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-loading-fill-text) (unknown) · [codrops/TextStylesHoverEffects](https://github.com/codrops/TextStylesHoverEffects) (unknown) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/colorama-wipe/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
