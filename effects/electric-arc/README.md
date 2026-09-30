# Nº 520 전기 아크 · Electric Arc

> 클립 렌더 예정 / Clip rendering planned.

**불규칙하게 갈라진 밝은 선이 지점이나 윤곽 사이에 번쩍이고 빠르게 사라지는 전기 방전 효과**

Irregular branching bright lines flash between points or outlines and vanish quickly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 주목 끌기, 강조, 피드백 | 숏폼, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: Lightning accent, 번개 강조, Electric Outline, 전기 윤곽선, Advanced Lightning, 번개 가지

## 선택 기준 / Selection

에너지, 충격, 연결의 순간을 강하게 알린다. 단어를 때리는 듯한 타격감을 준다 / Signals energy, impact, and connection strongly, and gives words a striking feel.

- 핵심 단어에 번개가 내리치듯 강조를 줄 때 / To emphasize a key word as if struck by lightning
- 두 노드 사이에 에너지 연결이 생기는 순간을 표시할 때 / To mark the moment an energy link forms between two nodes

좋은 예 / Good: 단어 위에서 번개 경로가 2프레임 동안 나타나고 글자가 2프레임 뒤 밝아졌다 300ms에 걸쳐 식는다
나쁜 예 / Bad: 번개를 1초 넘게 유지해 조명 깜빡임처럼 보이거나, 경로를 매 프레임 무작위로 바꿔 재렌더마다 다르다
주의 / Avoid: 번개 표시 3프레임 초과 금지 · 섬광 깜빡임은 초당 3회 미만(광과민 안전)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 번개 표시 | 2프레임 | 2~3프레임 | 24fps 기준 약 83ms |
| 글자 지연 | 2프레임 | 1~3프레임 | 번개 뒤 글자 점등 |
| 감쇠 | 300ms | 200~500ms | 글자 glow 식음 |
| 분기 수 | 3개 | 2~5개 | 시드 경로 |
| 선 굵기 | 3px | 2~5px | 흰색 코어와 청색 glow |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const path='M0 0 L30 -20 L55 8 L90 -14 L120 10 L160 -6'; // 시드 고정 경로
tl.set('.arc',{attr:{d:path},opacity:1},t)
 .set('.arc',{opacity:0},t+2/24)
 .fromTo('.word',{textShadow:'0 0 0 #7fb2ff'},{textShadow:'0 0 24px #7fb2ff',duration:.05},t+2/24)
 .to('.word',{textShadow:'0 0 0 #7fb2ff',duration:.3,ease:'power2.out'},t+3/24);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<단어>에 전기 아크 효과를 넣어줘. 시드 고정으로 만든 지그재그 번개 path 3개를 SVG로 그리고 흰색 코어 3px, 청색 glow로 2프레임(24fps)만 보여줘. 2프레임 뒤 글자에 text-shadow glow를 켰다가 300ms power2.out으로 식혀. 깜빡임은 초당 3회 미만. paused 타임라인에서 tl.set으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <단어>에 electric-arc를 구현해. 번개 2프레임, 글자 지연 2프레임, 감쇠 300ms, 분기 3개, 시드 경로. 0프레임, 3프레임, 0.3초, 0.6초를 캡처해 번개가 짧게 나타났다 사라지는지, glow가 식는지, 0.6초에 잔상이 없는지 확인해.
```

### English · Claude Code
```text
Add an electric arc to <word>. Draw three zigzag lightning paths from fixed-seed data as SVG with a 3px white core and blue glow, visible for just 2 frames at 24fps. Two frames later light the word with a text-shadow glow and cool it over 300ms with power2.out. Keep flashes under 3 per second. Use tl.set steps on a paused timeline.
```

### English · Codex
```text
Implement electric-arc on <word> in <file>: arc 2 frames, word delay 2 frames, decay 300ms, 3 branches, seeded paths. Capture at frame 0, frame 3, 0.3s, and 0.6s to verify the arc appears briefly and disappears, the glow cools, and no afterimage remains at 0.6s.
```

예시 / Example: 전기 아크를 `.hero`에 적용해. / Apply Electric Arc to `.hero`.

## 적용 / Application

- HyperFrames: 번개 path를 시드 고정 문자열 몇 개로 미리 만들어 tl.set으로 프레임 단위 교체한다. 글자 glow는 tween 하나면 충분하다
- ReelForge: 브리프에 arcFrames, wordDelayFrames, decayMs, pathSeed를 싣는다. path 생성은 워커가 시드 함수로 한 번 만든다
- Scrolline Deck: 진행률 구간의 짧은 창(전체의 4%)에서만 번개를 켠다. 나머지 구간은 glow 감쇠를 ease-out으로 준다

조합 / Pair with: [불티 분사 · Spark Spray](../spark-spray/) · [플래시 전환 · Flash Transition](../flash-transition/) · [윤곽 펄스 · Outline Pulse](../outline-pulse/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#electric-arc`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/electric-arc/scene.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/electric-arc/index.html`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
