# Nº 099 글꼴 셔플 · Font Shuffle

> 클립 렌더 예정 / Clip rendering planned.

**문장은 고정하고 핵심 단어의 글꼴만 박자마다 바뀌는 효과**

The sentence stays put while a key word changes typeface on every beat.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 분위기, 주목 끌기 | 숏폼, 발표 | css |

다른 이름 / Also known as: Typeface Shuffle, 키워드 글꼴 셔플

## 선택 기준 / Selection

같은 말이 여러 성격을 가진다는 것과 음악의 박자를 함께 보여준다. 글꼴 변화가 리듬 악기가 된다 / Shows one word taking on different personalities in time with the music; the font change acts as a rhythm instrument.

- 음악 영상에서 키워드가 박자마다 다른 표정을 가질 때 / Give a keyword a different face on each beat in a music video.
- 브랜드 가치 단어를 다양한 서체로 훑을 때 / Sweep a brand-value word through several typefaces.

좋은 예 / Good: 'FREE'가 박자 250ms마다 4가지 글꼴로 바뀌고 1초 뒤 최종 글꼴에서 멈추며 문장의 나머지는 움직이지 않는다
나쁜 예 / Bad: 글꼴마다 글자 폭이 달라 문장 전체가 좌우로 출렁인다
주의 / Avoid: 슬롯 폭을 가장 넓은 글꼴 기준으로 고정한다 · 글꼴 4종 초과 금지 · 최종 정지 글꼴은 가독성이 가장 높은 것으로

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 박자 간격 | 250ms | 150~400ms | 글꼴 교체 간격 |
| 글꼴 수 | 4 | 3~5 | 교체 후보 |
| 최종 정지 | 1000ms | 600~1500ms | 마지막 글꼴 유지 |
| 슬롯 폭 | 최대 글꼴 폭 | - | 레이아웃 고정 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
const fonts = ['Playfair Display', 'Bebas Neue', 'Space Mono', 'Pretendard'];
fonts.forEach((f, i) => {
  tl.set('.kw', { fontFamily: f }, i * 0.25);
});
/* .kw는 min-width로 슬롯 폭을 고정 */
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문장에서 핵심 단어 '<단어>'만 글꼴이 바뀌게 해줘. 0.25초마다 Playfair Display, Bebas Neue, Space Mono, Pretendard 순으로 교체하고 마지막 글꼴에서 1초 정지. 단어 슬롯 폭은 가장 넓은 글꼴 기준 min-width로 고정해 나머지 문장이 흔들리지 않게 하고, 글꼴은 preload해.
```

### 한국어 · Codex
```text
<파일>에 .kw의 fontFamily를 tl.set으로 0, 0.25, 0.5, 0.75초에 교체하고 min-width를 고정해. 각 시점을 캡처해 글꼴이 실제로 바뀌었는지, 주변 문장 x 좌표가 동일한지 확인해.
```

### English · Claude Code
```text
In the sentence of <target> change only the key word '<word>' typeface: every 0.25 seconds cycle Playfair Display, Bebas Neue, Space Mono, Pretendard and hold the last one for 1 second. Fix the word slot to a min-width based on the widest face so the rest of the sentence never shifts, and preload the fonts.
```

### English · Codex
```text
In <file> switch .kw fontFamily with tl.set at 0, 0.25, 0.5 and 0.75s and fix min-width. Capture each moment to confirm the face actually changed and that the x position of the surrounding text is identical.
```

예시 / Example: 글꼴 셔플를 `.hero`에 적용해. / Apply Font Shuffle to `.hero`.

## 적용 / Application

- HyperFrames: 모든 글꼴을 preload하고 tl.set으로 교체한다. 로드 전 대체 글꼴이 렌더되지 않도록 document.fonts.ready 이후에 캡처한다
- ReelForge: 타이포 씬 브리프에 글꼴 4종 이름과 박자 배열(초)을 명시한다. beat 분석 결과를 그대로 쓴다
- Scrolline Deck: 글꼴 인덱스를 진행률 구간 4등분으로 정한다. scrub에서도 계단식 교체라 되감기에 안전하다

조합 / Pair with: [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [고정 슬롯 단어 순환 · Word Slot Cycle](../word-slot-cycle/) · [스크램블 · Text Scramble](../text-scramble/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:music-to-video/references/template-catalog.md`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#typewriter-phrase-keyword-shuffle`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
