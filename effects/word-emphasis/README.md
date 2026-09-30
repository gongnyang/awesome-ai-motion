# Nº 095 단어 강조 · Word Emphasis

![단어 강조 · Word Emphasis](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**정지한 문장에서 한 구절만 색과 크기를 바꾸고 주변 글을 옅게 만드는 효과**

A phrase changes color and scale within a stationary sentence while surrounding text fades.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 강조, 설명 | 설명 영상, 숏폼, 웹 UI | gsap |

다른 이름 / Also known as: 키워드 강조, Keyword focus, 발화 단어 강조, selective-emphasis-pop, asr-keyword-glow, Word stagger emphasis, 단어 순차 강조

## 선택 기준 / Selection

읽어야 할 핵심 구절과 정보의 우선순위 / Communicates the key phrase to read and the priority of information.

- 한 문장의 핵심 구절로 주의를 모을 때 / Focus attention on a key phrase within a sentence.
- 내레이션의 강조 시점에 시각적 초점을 맞출 때 / Align visual focus with an emphasized moment in narration.

좋은 예 / Good: 다음 말만 주홍과 1.06배 크기로 강조되고 AI는과 을 고른다는 옅어진다
나쁜 예 / Bad: 여러 단어를 동시에 주홍으로 바꾸어 초점이 분산된다
주의 / Avoid: 주홍 초점을 여러 곳에 두지 않는다 · 크기 변화로 인접 글자를 겹치게 하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 강조 배율 | 1.06 | 1.03~1.10 | 강조 구절 중심을 기준으로 확대한다 |
| 주변 불투명도 | 0.32 | 0.25~0.50 | 문장은 계속 읽을 수 있어야 한다 |
| 강조 지속 | 0.65s | 0.40~0.90s | 색과 크기를 함께 바꾼다 |
| 강조 시작 | 0.65s | 0.40~0.90s | 먼저 온전한 문장을 보여준다 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const verm = getComputedStyle(document.documentElement).getPropertyValue('--verm').trim();
tl.to('#focus', {color:verm, scale:1.06, duration:.65, ease:'power2.inOut'}, .65);
tl.to('.rest', {opacity:.32, duration:.65, ease:'power2.inOut'}, .65);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 이 효과를 적용하라. AI는 다음 말을 고른다를 먼저 온전한 문장으로 보여주고 다음 말만 별도 span으로 감싸라. 0.65초에 다음 말을 주홍 토큰 색과 scale 1.06으로 0.65초 동안 power2.inOut으로 바꾸며 나머지 문장은 opacity 0.32로 낮춰라. 3초 타임라인 안에서 마지막 0.6초는 완성 상태로 정지하라.
```

### 한국어 · Codex
```text
<파일>의 텍스트 장면에 적용하라. AI는 다음 말을 고른다를 먼저 온전한 문장으로 보여주고 다음 말만 별도 span으로 감싸라. 0.65초에 다음 말을 주홍 토큰 색과 scale 1.06으로 0.65초 동안 power2.inOut으로 바꾸며 나머지 문장은 opacity 0.32로 낮춰라. 0.23초에 문장 전체가 먹색인지, 1.0초에 강조가 진행되는지, 2.7초에 다음 말만 주홍이고 주변과 겹치지 않는지 확인하라.
```

### English · Claude Code
```text
Apply this effect to <target>. First show "AI picks the next word" as a complete sentence, wrapping only "next word" in a separate span. At 0.65 seconds, animate "next word" to the vermilion color token and scale 1.06 over 0.65 seconds with power2.inOut, while lowering the rest of the sentence to opacity 0.32. Within a 3-second timeline, hold the completed state for the final 0.6 seconds.
```

### English · Codex
```text
Apply this to the text scene in <file>. First show "AI picks the next word" as a complete sentence, wrapping only "next word" in a separate span. At 0.65 seconds, animate "next word" to the vermilion color token and scale 1.06 over 0.65 seconds with power2.inOut, while lowering the rest of the sentence to opacity 0.32. Verify that the whole sentence is ink-black at 0.23 seconds, emphasis is in progress at 1.0 seconds, and only "next word" is vermilion without overlapping surrounding text at 2.7 seconds.
```

예시 / Example: 단어 강조를 `.hero`에 적용해. / Apply Word Emphasis to `.hero`.

## 적용 / Application

- HyperFrames: 단일 paused GSAP 타임라인으로 구현하고 프레임 시각에서 seek한다. 폰트 로딩 후 고정한 글자 배치를 사용한다.
- ReelForge: 텍스트 씬 안의 span에 이 효과의 시간과 간격을 적용하고 마지막 완성 상태를 0.6초 이상 유지한다.
- Scrolline Deck: 스크롤 진행률을 0~3초 타임라인 시각으로 매핑하고 역방향 seek에서도 같은 문자와 상태를 복원한다.

조합 / Pair with: [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/) · [밑줄 드로우 · Underline Draw](../underline-draw/) · [모션 위계 · Motion Hierarchy](../motion-hierarchy/)

출처 / Sources: [GSAP Timeline 공식 문서](https://gsap.com/docs/v3/GSAP/Timeline/) (공식 문서 개념 참조) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-callout-highlight/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-editorial-emphasis/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-neon-accent/registry-item.json) (Apache-2.0) · [Cambridge University Press](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258) (unknown) · [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
