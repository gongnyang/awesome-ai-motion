# Nº 627 조준선 자막 · Crosshair Caption

> 클립 렌더 예정 / Clip rendering planned.

**가는 수평선과 수직선이 단어의 중심으로 모인 뒤 글자가 순간적으로 나타나는 조준형 자막**

Two thin lines converge on the center of a word, then the letters appear instantly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 중급 | 주목 끌기, 강조 | 숏폼, 설명 영상, 제품 시연 | svg |

다른 이름 / Also known as: 크로스헤어 자막, crosshair

## 선택 기준 / Selection

검증, 조사, 조준의 날카로운 주목. 그 단어가 포착된 대상이라는 인상을 준다 / Sharp attention like verification or targeting; the word feels captured.

- 수사·분석·감시 톤의 영상에서 핵심 단어를 포착하는 순간 / Locking onto a key word in an investigative or analytical tone
- 제품 시연에서 특정 지표나 이름에 시선을 고정시킬 때 / Fixing the viewer's eye on a metric or name in a product demo

좋은 예 / Good: 두 선이 150ms linear로 단어 중심에 모이고 글자가 50ms expo.out으로 나타난 뒤 선이 100ms 페이드아웃된다
나쁜 예 / Bad: 선 두께가 4px 이상이고 색이 글자와 같아 글자와 선이 뭉쳐 읽히지 않는다
주의 / Avoid: 선은 1~2px로 가늘게. 글자보다 눈에 띄면 안 된다 · 글자 등장 전에 선이 반드시 먼저 도달한다. 순서가 뒤집히면 조준이 아니게 된다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 선 이동 | 150ms | 100~200ms | linear |
| 글자 등장 | 50ms | 40~80ms | expo.out |
| 선 두께 | 1.5px | 1~2px | 대비색 |
| 선 소멸 | 100ms | 80~150ms | 글자 이후 |

이징 / Ease: `linear (선) / expo.out (글자)`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.h', {scaleX:0}, {scaleX:1, duration:0.15, ease:'none'}, 0.2)
  .fromTo('.v', {scaleY:0}, {scaleY:1, duration:0.15, ease:'none'}, 0.2)
  .fromTo('.word', {opacity:0, scale:1.08}, {opacity:1, scale:1, duration:0.05, ease:'expo.out'}, 0.35)
  .to(['.h', '.v'], {opacity:0, duration:0.1}, 0.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 단어에 조준형 자막을 넣어줘. 두께 1.5px의 수평선과 수직선이 단어 중심으로 0.15초 linear로 모이고, 도착 직후 글자가 0.05초 expo.out으로 나타나며 0.1초 뒤 선이 사라지게 해. 선이 글자보다 먼저 도착해야 해.
```

### 한국어 · Codex
```text
<파일>에 crosshair caption을 적용해. .h scaleX와 .v scaleY 0에서 1을 0.2초부터 0.15초 linear, .word opacity 0에서 1을 0.35초에 0.05초 expo.out, 선 소멸 0.5초에 0.1초. 0.3초·0.36초·0.6초를 캡처해 선만 보이는 상태, 글자 등장, 선 소멸 후 글자만 남는 상태를 확인해.
```

### English · Claude Code
```text
Add a crosshair caption to the word in <target>. A horizontal and a vertical 1.5px line converge on the word center over 0.15s linear; right after, the text appears in 0.05s expo.out, and the lines fade out 0.1s later. The lines must arrive before the text.
```

### English · Codex
```text
Apply crosshair caption in <file>. .h scaleX and .v scaleY 0 to 1 from 0.2s over 0.15s linear; .word opacity 0 to 1 at 0.35s over 0.05s expo.out; lines fade at 0.5s over 0.1s. Capture at 0.3s, 0.36s and 0.6s: lines only, text arrival, then text only.
```

예시 / Example: 조준선 자막를 `.hero`에 적용해. / Apply Crosshair Caption to `.hero`.

## 적용 / Application

- HyperFrames: 선은 SVG line 또는 얇은 div의 scale로 만든다. 프레임 단위 정확도가 필요해 30fps 기준 5프레임과 2프레임으로 시간을 잡는다
- ReelForge: 브리프에 대상 단어, 중심 좌표, 선 150ms, 글자 50ms, 선 두께 1.5px를 싣는다
- Scrolline Deck: 진행률 0.4에서 조준 완료, 0.45에서 글자 등장으로 좁게 매핑한다. scrub에서는 글자가 반쯤 보이지 않게 진행률 스냅을 둔다

조합 / Pair with: [주석 등장 · Annotation Callout](../annotation-callout/) · [레이저 점화 · Laser Ignite Text](../laser-ignite-text/) · [확대 콜아웃 · Zoom Callout](../zoom-callout/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/references/motion-vocabulary.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
