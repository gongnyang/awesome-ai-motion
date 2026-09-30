# Nº 441 디지털 문자비 · Digital Rain

> 클립 렌더 예정 / Clip rendering planned.

**문자 열이 위에서 아래로 떨어지고, 밝은 머리 뒤로 점점 흐려지는 꼬리가 남는다**

Columns of characters fall from the top, each led by a bright head with a fading tail behind it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 브랜딩 | 숏폼, 설명 영상, 웹 UI | canvas |

다른 이름 / Also known as: Matrix rain

## 선택 기준 / Selection

코드와 데이터가 끊임없이 흐르는 화면의 질감을 만든다. 정보량이 많다는 인상을 주되 특정 내용을 읽게 하지는 않는다 / Gives the screen the texture of code and data constantly flowing. It suggests a high volume of information without asking the viewer to read any of it.

- AI, 해킹, 데이터 처리 같은 주제의 도입 배경을 만들 때 / Build an opening background for AI, hacking or data-processing topics.
- 텍스트 배경에 정보가 흐르는 느낌을 깔고 싶을 때 / Lay a sense of flowing information behind foreground text.

좋은 예 / Good: 16px 간격의 열이 60~180px/s로 떨어지고, 머리는 흰색, 꼬리 12문자는 초록에서 투명으로 사라진다. 문자는 80ms마다 바뀐다
나쁜 예 / Bad: 모든 열이 같은 속도로 동시에 떨어져 격자 애니메이션처럼 보이거나, 문자 밝기가 전부 같아 머리가 구분되지 않는다
주의 / Avoid: 전경 텍스트 뒤에 둘 때 밝기 0.35 이하로 낮출 것 · 실제 읽어야 하는 코드에는 쓰지 않는다(문자가 무작위로 바뀜)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 열 간격 | 16px | 12~24px | 1920 기준 120열 |
| 낙하 속도 | 60~180px/s | 열마다 시드로 고정 | 열별 속도 차이가 깊이감을 만듦 |
| 꼬리 길이 | 12문자 | 8~20문자 | 길수록 잔상이 길어짐 |
| 문자 갱신 | 80ms | 60~120ms | 머리에서 먼 문자일수록 느리게 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const cols = Array.from({length: 120}, (_, i) => ({ x: i * 16, v: 60 + rng(i) * 120, y0: rng(i + 500) * -800 }));
const u = { t: 0 };
tl.to(u, { t: 6, duration: 6, ease: 'none', onUpdate: draw }, 0);
function draw() { cols.forEach(c => { const head = c.y0 + c.v * u.t; /* 머리 y, 꼬리는 head - k*16 */ }); }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영역 뒤에 디지털 문자비 배경을 canvas로 만들어줘. 열 간격 16px, 낙하 속도는 열마다 60~180px/s, 머리는 흰색과 꼬리 12문자는 초록에서 투명으로 사라지게, 문자는 80ms마다 바뀌게 해. 총 6초이고 시드 난수를 써서 seek해도 같은 그림이 나오게 해줘.
```

### 한국어 · Codex
```text
<파일>에 digital-rain canvas 레이어를 추가해. 열 120개, 속도 60~180px/s, 꼬리 12, 갱신 80ms, 전체 밝기 0.35, 6초. Math.random 대신 mulberry32 시드를 쓰고 프레임 상태를 t로만 계산한다. 1초, 3초, 5.5초를 캡처해 열마다 머리 위치가 다르고 꼬리가 투명으로 사라지는지, 같은 t를 두 번 seek해도 픽셀이 같은지 확인해.
```

### English · Claude Code
```text
Build a digital rain background behind <target> on a canvas. Use a 16px column pitch, a per-column fall speed of 60 to 180px/s, a white head, a 12-character tail fading from green to transparent, and characters that change every 80ms. Run 6 seconds total and use seeded randomness so seeking gives identical frames.
```

### English · Codex
```text
Add a digital-rain canvas layer to <file>: 120 columns, 60 to 180px/s, tail 12, refresh 80ms, overall brightness 0.35, 6 seconds. Use a mulberry32 seed instead of Math.random and compute every frame from t alone. Capture at 1s, 3s and 5.5s and verify head positions differ per column, tails fade to transparent, and seeking the same t twice gives identical pixels.
```

예시 / Example: 디지털 문자비를 `.hero`에 적용해. / Apply Digital Rain to `.hero`.

## 적용 / Application

- HyperFrames: canvas 그리기를 paused 타임라인 onUpdate에서 t 값으로만 계산한다. 열별 속도와 문자는 시드 난수로 미리 뽑아 seek에도 같은 그림이 나오게 한다
- ReelForge: 씬 워커 브리프에 열 간격, 낙하 속도 범위, 꼬리 길이, 문자 집합, 색을 싣는다. 전경 텍스트는 별도 레이어로 둔다
- Scrolline Deck: 낙하 위치를 진행률 0..1에서 t=progress*6으로 계산하면 스크롤 방향에 따라 문자가 거꾸로 올라간다. 되감기에서 올라가도 되는지 미리 정한다

조합 / Pair with: [ASCII 모션 · ASCII Motion](../ascii-motion/) · [CRT 주사선 · CRT Scanlines](../crt-scanlines/) · [스크램블 · Text Scramble](../text-scramble/)

출처 / Sources: [fand/vfx-js](https://github.com/fand/vfx-js/tree/main/packages/effects#effects) (MIT) · [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/matrix/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
