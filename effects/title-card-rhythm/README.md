# Nº 217 제목 카드 컷 리듬 · Title Card Rhythm

> 클립 렌더 예정 / Clip rendering planned.

**이름이나 제목 카드가 일정한 박자로 나타나고 짧게 교체되는 타이틀 시퀀스**

Name or title cards appear on a steady beat and are quickly replaced.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 순서·흐름, 브랜딩, 전환 | 설명 영상, 발표, 숏폼 | gsap |

다른 이름 / Also known as: Credit Card Cut Rhythm, 크레디트 카드 컷 리듬

## 선택 기준 / Selection

정보의 위계와 작품의 리듬이 정해진다. 카드마다 무엇이 중요한지 순서로 전달된다 / It sets information hierarchy and the rhythm of the piece; order tells what matters.

- 영화 타이틀처럼 연출·제작·출연 이름을 차례로 보여 줄 때 / Showing directing, production and cast names in sequence like film titles
- 챕터 제목 카드를 일정한 박자로 이어 붙일 때 / Chaining chapter title cards on an even beat

좋은 예 / Good: 카드 1.8초 유지, 200ms 교체를 반복하고 핵심 타이틀 카드만 3.5초 머물러 위계가 드러난다
나쁜 예 / Bad: 모든 카드를 같은 길이로 두어 무엇이 핵심인지 구분되지 않는다
주의 / Avoid: 카드마다 길이가 달라야 한다. 핵심만 길게 두고 나머지는 같은 박자로 맞춘다 · 교체는 하드컷 또는 200ms 이하 페이드. 긴 전환은 리듬을 무너뜨린다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 일반 카드 | 1.8s | 1.5~2.2s | 이름·역할 |
| 핵심 카드 | 3.5s | 3~5s | 작품명 |
| 교체 | 0.2s | 0~0.3s | opacity 또는 컷 |
| 카드 수 | 5 | 3~8 | 그 이상은 크레딧 롤로 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const cards = [1.8, 1.8, 3.5, 1.8, 1.8];
let t = 0;
cards.forEach((d, i) => {
  tl.fromTo(card(i), {opacity:0}, {opacity:1, duration:0.2, ease:'none'}, t)
    .to(card(i), {opacity:0, duration:0.2, ease:'none'}, t + d - 0.2);
  t += d;
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 시퀀스에 타이틀 카드 리듬을 넣어줘. 카드 5장의 길이는 [1.8, 1.8, 3.5, 1.8, 1.8]초, 교체는 0.2초 opacity 페이드. 3번째 카드가 핵심 타이틀이라 가장 길게 유지해. 시작 시각은 길이를 누적해 계산해.
```

### 한국어 · Codex
```text
<파일>에 title card rhythm을 적용해. 카드 길이 배열을 누적해 시작 시각을 계산하고 각 카드는 opacity 0에서 1(0.2초), t+d-0.2에서 1에서 0(0.2초). 0.9초·5.0초·수치상 총 길이 지점을 캡처해 한 시점에 한 카드만 보이는지, 핵심 카드 유지가 3.5초인지 확인해.
```

### English · Claude Code
```text
Add a title-card rhythm to the sequence in <target>. Five cards last [1.8, 1.8, 3.5, 1.8, 1.8] seconds with 0.2s opacity fades between them. The third card is the key title and holds longest. Compute start times by accumulating lengths.
```

### English · Codex
```text
Apply title card rhythm in <file>. Accumulate the length array into start times; each card opacity 0 to 1 (0.2s) and 1 to 0 at t+d-0.2 (0.2s). Capture at 0.9s, 5.0s and the last frame to verify only one card shows at a time and the key card holds 3.5s.
```

예시 / Example: 제목 카드 컷 리듬를 `.hero`에 적용해. / Apply Title Card Rhythm to `.hero`.

## 적용 / Application

- HyperFrames: 카드 길이 배열에서 시작 시각을 누적해 결정론적으로 배치한다. 한 카드 요소당 opacity만 사용한다
- ReelForge: 브리프에 카드 배열(텍스트, 길이 초)과 교체 0.2초, 핵심 카드 표시를 싣는다. 전체 길이 합계를 씬 길이에 반영한다
- Scrolline Deck: 진행률을 카드 길이 비율로 나눠 카드를 교체한다. 홀드 구간이 카드 유지 시간에 해당한다

조합 / Pair with: [엔딩 크레디트 롤 · Credit Roll](../credit-roll/) · [하단 자막 바 · Lower Third Reveal](../lower-third-reveal/) · [키네틱 비트 · Kinetic Beats](../kinetic-beats/)

출처 / Sources: [Art of the Title](https://www.artofthetitle.com/title/se7en/) (unknown) · [Art of the Title](https://www.artofthetitle.com/title/catch-me-if-you-can/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
