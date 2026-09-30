# Nº 117 단어 릴레이 · Word Relay

> 클립 렌더 예정 / Clip rendering planned.

**큰 단어 하나가 오른쪽에서 들어와 중앙에서 멈췄다가 왼쪽으로 나가고 다음 단어가 이어받는 릴레이**

One big word enters from the right, pauses at center, exits left, and the next word takes over.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 순서·흐름, 주목 끌기, 강조 | 스크롤덱, 숏폼, 발표 | gsap |

## 선택 기준 / Selection

핵심 메시지가 한 단어씩 바통처럼 전달되는 리듬. 마지막 단어는 남아 결론이 된다 / The message is passed along word by word like a baton, and the last word stays as the conclusion.

- 2~5단어로 된 슬로건을 한 단어씩 크게 보여 줄 때 / When showing a 2 to 5 word slogan one huge word at a time
- 스크롤 한 구간에서 핵심 키워드를 차례로 전달할 때 / When delivering keywords in sequence within one scroll section

좋은 예 / Good: "기획 / 제작 / 배포" 세 단어가 각각 0.4초 진입, 0.6초 정지, 0.3초 퇴장으로 이어지고 "배포"는 남는다
나쁜 예 / Bad: 단어가 퇴장하는 동안 다음 단어가 이미 중앙에 있어 두 단어가 겹쳐 읽힌다
주의 / Avoid: 단어당 정지 0.5초 이하로 줄이지 않는다. 읽히기 전에 나가 버린다 · 단어는 2~5개. 6개 이상이면 릴레이가 지루해진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 진입 | 0.4s | 0.3~0.5s | x +900px에서 0 |
| 정지 | 0.6s | 0.5~1.0s | 중앙 홀드 |
| 퇴장 | 0.3s | 0.25~0.4s | x -900px |
| 마지막 단어 | 유지 | 유지 또는 퇴장 | 결론 단어는 남긴다 |

이징 / Ease: `power3.out (진입) / power2.in (퇴장)`

## 구현 / Implementation (GSAP)

```js
const ws = ['기획','제작','배포'];
ws.forEach((w, i) => {
  const t = i * 1.3;
  tl.fromTo(el(i), {x:900, opacity:0}, {x:0, opacity:1, duration:0.4, ease:'power3.out'}, t);
  if (i < ws.length - 1) tl.to(el(i), {x:-900, opacity:0, duration:0.3, ease:'power2.in'}, t + 1.0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 word relay를 만들어줘. 큰 단어 <단어들>이 오른쪽 900px에서 0.4초 power3.out으로 들어와 중앙에서 0.6초 멈추고 0.3초 power2.in으로 왼쪽 900px로 나가며 다음 단어가 이어받아. 마지막 단어는 남겨. 한 타임라인 하나로 seek 가능하게.
```

### 한국어 · Codex
```text
<파일>에 word relay를 적용해. 단어 span을 absolute로 겹치고 단어 i의 시작 t=i*1.3, 진입 0.4, 퇴장은 t+1.0에 0.3초. 마지막은 퇴장 없음. 각 단어의 중앙 정지 구간(0.6초, 1.9초, 3.2초)을 캡처해 한 시점에 한 단어만 보이는지 확인해.
```

### English · Claude Code
```text
Build a word relay in <target>. Big words <words> enter from 900px right in 0.4s power3.out, hold at center for 0.6s, and exit 900px left in 0.3s power2.in as the next takes over. Keep the last word. Use a single seekable timeline.
```

### English · Codex
```text
Apply word relay in <file>. Stack word spans absolutely; word i starts at t=i*1.3, enters in 0.4s, exits at t+1.0 over 0.3s; the last word does not exit. Capture inside each center hold (0.6s, 1.9s, 3.2s) and verify only one word is visible per frame.
```

예시 / Example: 단어 릴레이를 `.hero`에 적용해. / Apply Word Relay to `.hero`.

## 적용 / Application

- HyperFrames: 단어마다 absolute로 겹쳐 두고 x만 보간한다. 진입/정지/퇴장 세 구간을 고정 위치에 배치해 seek 정확도를 확보한다
- ReelForge: 브리프에 단어 배열, 진입 0.4초, 정지 0.6초, 퇴장 0.3초, 마지막 단어 유지 여부를 싣는다
- Scrolline Deck: 정본 형태다. 진행률 0~0.7을 단어 수로 나누고 구간마다 진입·정지·퇴장을 배분한다. 핀 길이는 약 220vh, scrub에서는 ease-out만 쓴다

조합 / Pair with: [문장 밀어 쌓기 · Phrase Push Build](../phrase-push-build/) · [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [고정 장면 스크롤리텔링 · Pinned Scrollytelling](../pinned-scrollytelling/)

출처 / Sources: gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#word-relay`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.css`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.html`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.js`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/template.json`) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
