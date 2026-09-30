# Nº 108 공간 키네틱 문장 · Spatial Word Composition

> 클립 렌더 예정 / Clip rendering planned.

**발화 순서대로 단어가 크기와 각도를 바꾸며 화면 공간을 채워 하나의 타이포 포스터가 되는 구성**

Words appear in spoken order, changing size and angle to fill the frame as one typographic composition.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 강조, 설명, 분위기 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: Spatial Kinetic Word Composition, 공간 키네틱 문장 구성

## 선택 기준 / Selection

문장의 강세와 의미 관계가 배치로 전달된다. 말하는 리듬이 그대로 그림이 된다 / Emphasis and meaning relations are carried by placement; speech rhythm becomes a picture.

- 내레이션 한 단락을 키워드 중심 타이포 포스터로 구성할 때 / Turning a narration paragraph into a keyword-led type poster
- 감성적인 문장을 크고 작은 글자 배치로 표현할 때 / Expressing an emotional sentence through big and small type

좋은 예 / Good: 단어가 250~600ms 간격으로 하나씩 놓이고 핵심어는 1.8배 크기로 최대 15도 기울어 화면 중앙에 자리 잡는다
나쁜 예 / Bad: 단어를 무작위로 흩뿌려 서로 겹치고 읽는 순서를 알 수 없다
주의 / Avoid: 모든 단어의 목표 좌표를 사전에 손으로 정하거나 격자로 계산한다. 런타임 난수 배치는 겹침을 낳는다 · 핵심어는 문장당 1~2개. 전부 크면 강조가 사라진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단어 간격 | 250~600ms | 200~700ms | 발화 속도에 맞춤 |
| 핵심어 크기 | 1.8배 | 1.5~2.2배 | 본문 대비 |
| 최대 회전 | 15도 | 5~15도 | 핵심어 위주 |
| 등장 | 0.3s | 0.2~0.4s | scale 0.9에서 1 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
// 단어 목표: {text, x, y, size, rot, t} 배열을 사전에 확정
words.forEach(w => {
  tl.fromTo(el(w), {opacity:0, scale:0.9, rotation:w.rot * 0.5}, {opacity:1, scale:1, rotation:w.rot, duration:0.3, ease:'power3.out'}, w.t);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문장을 공간 타이포 구성으로 배치해줘. 단어별 {시각, x, y, 크기, 회전} 배열을 격자 위에서 미리 정하고, 핵심어(<핵심어>)는 1.8배 크기, 최대 15도로 중앙에 놓아. 각 단어는 scale 0.9에서 1, opacity 0에서 1로 0.3초 power3.out. 발화 간격은 250~600ms.
```

### 한국어 · Codex
```text
<파일>에 spatial word composition을 적용해. 단어 목표 배열을 확정하고 각 단어 scale 0.9에서 1, rotation 절반에서 목표 각, opacity 0에서 1을 0.3초 power3.out으로 w.t에 배치. 완성 프레임 캡처 후 단어 bbox 겹침이 0건인지 검사하고 0.5초 시점에는 첫 단어만 보이는지 확인해.
```

### English · Claude Code
```text
Lay out the sentence in <target> as a spatial typographic composition. Predefine an array of {time, x, y, size, rotation} per word on a grid; the key words (<key words>) are 1.8x size and up to 15 degrees, near center. Each word scales 0.9 to 1 and fades in over 0.3s power3.out, with 250 to 600ms between words.
```

### English · Codex
```text
Apply spatial word composition in <file>. Fix a target array and animate each word scale 0.9 to 1, rotation half to target, opacity 0 to 1 over 0.3s power3.out at w.t. Capture the finished frame and check word bounding boxes overlap in 0 cases; at 0.5s only the first word should be visible.
```

예시 / Example: 공간 키네틱 문장를 `.hero`에 적용해. / Apply Spatial Word Composition to `.hero`.

## 적용 / Application

- HyperFrames: 좌표와 시각을 담은 데이터 배열에서 timeline을 만든다. 폰트 측정 뒤 겹침 검사를 스크립트로 돌려 통과시킨다
- ReelForge: 브리프에 단어별 시각, 크기, 좌표, 회전 배열과 핵심어 표시를 싣는다. 겹침 검사 스크립트를 함께 준다
- Scrolline Deck: 단어의 등장 시각을 진행률 위치로 환산한다. 되감으면 단어가 순서대로 사라진다

조합 / Pair with: [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [단어 강조 · Word Emphasis](../word-emphasis/) · [문장 밀어 쌓기 · Phrase Push Build](../phrase-push-build/)

출처 / Sources: [dcmcand/dynamic-typography-videos](https://github.com/dcmcand/dynamic-typography-videos) (Apache-2.0) · [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
