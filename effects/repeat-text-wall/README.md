# Nº 106 반복 텍스트 벽 · Repeated Text Wall

> 클립 렌더 예정 / Clip rendering planned.

**한 문구가 여러 행으로 복제되어 화면을 채우는 효과**

One phrase is duplicated into many rows that fill the screen.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 주목 끌기, 분위기 | 숏폼, 발표, 웹 UI | gsap |

다른 이름 / Also known as: Repeated Text Wall Build, 반복 텍스트 벽 생성, Repeated Text Fragment Fan, 반복 텍스트 조각 펼침

## 선택 기준 / Selection

문구의 존재감과 반복이 주는 압도감을 만든다. 리듬이 있는 화면 질감이 된다 / Builds presence and the overwhelming feel of repetition into a rhythmic screen texture.

- 브랜드명이나 캠페인 문구를 배경 패턴으로 확장할 때 / Extend a brand name or campaign line into a background pattern.
- 타이틀 끝에서 화면을 문구로 가득 채워 강한 인상을 남길 때 / End a title by flooding the frame with the phrase.

좋은 예 / Good: 'MOVE' 한 줄이 7행으로 늘어나며 행 지연 80ms, 글자 지연 20ms로 위아래에서 퍼져 가운데 행만 선명하다
나쁜 예 / Bad: 모든 행이 같은 밝기로 채워져 어느 행이 주 문구인지 알 수 없다
주의 / Avoid: 가운데 행 외에는 opacity 0.15~0.5로 낮춘다 · 행 수 9 초과 금지 · 반복 문구가 긴 문장이면 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 행 수 | 7 | 5~9 | 화면을 채우는 수 |
| 행 지연 | 80ms | 50~120ms | 가운데에서 바깥으로 |
| 글자 지연 | 20ms | 10~40ms | 행 내부 |
| 지속 | 700ms | 500~900ms | 행당 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
const mid = Math.floor(rows.length / 2);
rows.forEach((row, i) => {
  const d = Math.abs(i - mid);
  tl.from(row, { yPercent: (i - mid) * -40, opacity: 0, duration: 0.7, ease: 'power3.out' }, d * 0.08);
  gsap.set(row, { opacity: d === 0 ? 1 : Math.max(0.15, 0.6 - d * 0.15) });
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 문구 '<문구>'를 7행으로 복제해 화면을 채워줘. 가운데 행이 먼저 나타나고 위아래로 80ms씩 늦게 퍼지며, 행당 0.7초 power3.out, 행 내부 글자는 20ms 간격. 가운데 행만 opacity 1이고 바깥은 0.15~0.5로 낮춰. 한글은 음절 단위 분리.
```

### 한국어 · Codex
```text
<파일>에 문구 7행 복제 레이어를 만들고 tl.from(yPercent, opacity)을 |i-mid|*0.08 위치에 건다. 0.3초, 0.8초, 2초 캡처로 가운데 행이 가장 선명하고 바깥 행 opacity가 0.5 이하인지 확인해.
```

### English · Claude Code
```text
Duplicate '<text>' into 7 rows filling <target>. The center row appears first and the rows spread up and down 80ms apart, 0.7 seconds per row with power3.out and 20ms between letters within a row. Only the center row is at opacity 1; the outer rows sit between 0.15 and 0.5. Split Korean by syllable.
```

### English · Codex
```text
In <file> build a 7-row duplicate layer and add tl.from (yPercent, opacity) at |i-mid|*0.08. Capture at 0.3s, 0.8s and 2s and verify the center row is the sharpest and outer rows are at opacity 0.5 or lower.
```

예시 / Example: 반복 텍스트 벽를 `.hero`에 적용해. / Apply Repeated Text Wall to `.hero`.

## 적용 / Application

- HyperFrames: 행 복제는 빌드 시 DOM으로 만들고 tween은 yPercent/opacity만 쓴다. 행 수가 많아도 transform이라 렌더 비용이 낮다
- ReelForge: 타이포 씬 브리프에 문구, 행 수 7, 가운데 행 강조 규칙을 명시한다
- Scrolline Deck: 행 확장을 진행률에 매핑하고 스크롤이 진행되면 바깥 행이 더 늦게 열리게 지연을 진행률 비율로 둔다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [마키 · Marquee](../marquee/) · [키네틱 비트 · Kinetic Beats](../kinetic-beats/)

출처 / Sources: [codrops/RepetitiveTypography](https://github.com/codrops/RepetitiveTypography) (MIT) · [codrops/TextRepetitionEffect](https://github.com/codrops/TextRepetitionEffect) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
