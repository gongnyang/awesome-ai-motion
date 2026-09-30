# Nº 105 인용 카드 등장 · Quote Card Build

> 클립 렌더 예정 / Clip rendering planned.

**인용 부호와 문장이 차례로 나타나고 마지막에 출처가 붙는 등장 효과**

The quotation mark and lines appear in order and the attribution attaches last.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 설명, 강조 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Quote Card Editorial Build, 인용 카드 편집 등장

## 선택 기준 / Selection

문장과 발언자의 관계를 분명히 하고 읽을 시간을 준다. 인용의 무게가 순서에서 나온다 / Makes the relation between statement and speaker clear and gives time to read; the weight of a quote comes from the order.

- 리뷰·인터뷰 한 문장을 카드로 보여줄 때 / Show a single review or interview line as a card.
- 슬라이드에서 강연자 발언을 인용할 때 / Quote a speaker on a slide.

좋은 예 / Good: 큰 따옴표가 300ms에 나타나고 문장 3줄이 줄당 500ms, 120ms 간격으로 올라오며 250ms 뒤 저자명이 붙고 4초 유지된다
나쁜 예 / Bad: 모든 요소가 동시에 튀어나와 읽는 순서가 없고 저자가 문장보다 먼저 보인다
주의 / Avoid: 저자는 항상 마지막에 등장 · 줄 수 4 초과 금지 · 유지 시간은 글자 수 x 0.12초 이상 확보

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 인용 부호 | 300ms | 200~400ms | scale 0.8→1, 페이드 |
| 줄당 지속 | 500ms | 400~700ms | 아래에서 24px 상승 |
| 줄 간 지연 | 120ms | 80~160ms | 읽는 순서 |
| 저자 지연 | 250ms | 150~400ms | 마지막 줄 뒤 |
| 유지 | 4s | 3~6s | 읽기 시간 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.from('.mark', { scale: 0.8, opacity: 0, duration: 0.3, ease: 'power2.out' }, 0)
  .from('.line', { y: 24, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, 0.3)
  .from('.author', { x: -16, opacity: 0, duration: 0.4, ease: 'power2.out' }, '>+0.25');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 인용 카드를 만들어줘. 큰 따옴표가 0.3초에 scale 0.8→1로 나타나고, 문장 <줄 수>줄이 0.3초부터 줄당 0.5초, 0.12초 간격으로 24px 위로 올라오며 나타나고, 마지막 줄 0.25초 뒤 저자 '<이름>'이 왼쪽에서 들어와. 이징 power2.out, 전체 4초 유지. 줄바꿈은 의미 단위로 나눠.
```

### 한국어 · Codex
```text
<파일>의 인용 카드를 tl 순서(부호 0s, 줄 0.3s stagger 0.12, 저자 마지막+0.25s)로 구성해. 0.2초에 부호만, 1.0초에 문장이 다 나타났고 저자는 아직 없는지, 2.2초에 저자가 보이는지 캡처로 확인해.
```

### English · Claude Code
```text
Build a quote card in <target>. The large quotation mark appears at 0.3 seconds with scale 0.8 to 1; <number> lines rise 24px and fade in from 0.3 seconds, 0.5 seconds per line and 0.12 seconds apart; 0.25 seconds after the last line the attribution '<name>' slides in from the left. Ease power2.out and hold for 4 seconds in total. Break lines at meaning units.
```

### English · Codex
```text
Build the quote card in <file> as a timeline in order (mark at 0s, lines at 0.3s with stagger 0.12, attribution at last + 0.25s). Capture at 0.2s to see only the mark, at 1.0s to see all lines but no attribution, and at 2.2s to confirm the attribution is visible.
```

예시 / Example: 인용 카드 등장를 `.hero`에 적용해. / Apply Quote Card Build to `.hero`.

## 적용 / Application

- HyperFrames: 한 paused 타임라인에 부호, 줄, 저자를 순서대로 놓고 마지막에 hold용 빈 tween을 둬 클립 길이를 맞춘다
- ReelForge: 인용 카드 씬에 인용문, 저자, 유지 4s를 파라미터로 싣고 줄바꿈은 한국어 의미 단위로 미리 나눈다
- Scrolline Deck: 등장은 진행률 0~0.4에 몰고 나머지는 홀드로 둔다. 스크롤이 멈춰도 저자까지 읽히도록 저자는 0.4 이전에 끝낸다

조합 / Pair with: [단어 떠오르기 · Word Rise Fade](../word-rise-fade/) · [타자기 · Typewriter](../typewriter/) · [페이드 슬라이드 · Fade Slide](../fade-slide/)

출처 / Sources: [jschr/textillate](https://github.com/jschr/textillate) (MIT) · [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
