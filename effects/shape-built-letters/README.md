# Nº 439 조각 글자 조립 · Shape Built Letters

> 클립 렌더 예정 / Clip rendering planned.

**선과 도형 조각이 움직여 글자의 획과 장식을 완성하는 효과**

Lines and geometric pieces slide together to complete the strokes and ornaments of letters.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 브랜딩, 주목 끌기 | 숏폼, 발표, 웹 UI | svg |

다른 이름 / Also known as: Decorative Letter Assembly, 장식 조각 글자 조립

## 선택 기준 / Selection

글꼴을 그래픽 소재로 다루는 창의성을 전한다. 조각이 맞물리는 순간의 만족감이 있다 / Treats type as graphic material; the moment the pieces lock together is satisfying and shows creativity.

- 브랜드명 한 단어를 도형으로 조립해 등장시킬 때 / Build a brand word out of shapes as its entrance.
- 타이포그래피 포스터 느낌의 인트로가 필요할 때 / Open with a typographic-poster feel.

좋은 예 / Good: 원, 막대, 반원 조각 8개가 각 800ms, 50ms 간격으로 날아와 'GAME' 네 글자를 완성하고 장식은 300ms에 사라진다
나쁜 예 / Bad: 조각이 30개 넘게 동시에 움직여 어느 글자가 만들어지는지 읽히지 않는다
주의 / Avoid: 글자당 조각 5개 초과 금지 · 탄성 과다(15% 초과) 금지 · 장식이 최종 글자 위에 남아 가독성을 해치면 안 된다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 조각당 지속 | 800ms | 600~1000ms | 이동 시간 |
| 조각 간 지연 | 50ms | 30~80ms | 순서가 읽히는 간격 |
| 탄성 | 10% | 0~15% | 도착 시 살짝 넘침 |
| 장식 소거 | 300ms | 200~500ms | 완성 뒤 장식 제거 |

이징 / Ease: `back.out(1.4)`

## 구현 / Implementation (GSAP)

```js
pieces.forEach((p, i) => {
  tl.from(p, { x: p.dataset.dx, y: p.dataset.dy, rotation: p.dataset.r, opacity: 0,
    duration: 0.8, ease: 'back.out(1.4)' }, i * 0.05);
});
tl.to('.deco', { opacity: 0, duration: 0.3 }, '>+0.4');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 단어 '<문구>'를 SVG 도형 조각(원, 막대, 반원) 글자당 3~5개로 만들고, 조각이 화면 밖 지정 위치에서 날아와 글자를 조립하게 해줘. 조각당 0.8초, 50ms 간격, back.out(1.4)이고 완성 0.4초 뒤 장식 조각은 0.3초에 사라지게 해. 시작 위치는 고정 수치로 쓰고 paused 타임라인에서 seek 되게 해.
```

### 한국어 · Codex
```text
<파일>의 글자를 SVG 조각으로 분해해 tl.from(i*0.05, 0.8s, back.out(1.4))으로 조립하고 장식은 0.3초 페이드아웃해. Math.random 금지. 0.5초에 조각이 이동 중이고 2.2초에 글자 형태가 완성되며 장식이 없는지 캡처로 확인해.
```

### English · Claude Code
```text
Build the word '<text>' in <target> from 3 to 5 SVG shapes per letter (circles, bars, half circles) that fly in from fixed off-screen positions and assemble the letters. 0.8 seconds per piece, 50ms apart, back.out(1.4); 0.4 seconds after completion remove decoration pieces over 0.3 seconds. Use fixed start values and one paused timeline that can be seeked.
```

### English · Codex
```text
In <file> decompose the letters into SVG pieces and assemble them with tl.from (i*0.05, 0.8s, back.out(1.4)); fade the decoration over 0.3s. No Math.random. Capture at 0.5s to see pieces in flight and at 2.2s to confirm the finished letterforms with no decoration left.
```

예시 / Example: 조각 글자 조립를 `.hero`에 적용해. / Apply Shape Built Letters to `.hero`.

## 적용 / Application

- HyperFrames: 조각의 시작 오프셋은 data 속성에 고정값으로 두고 tl.from으로 건다. SVG stroke 진행은 strokeDashoffset tween으로 구동한다
- ReelForge: 글자를 SVG 조각 세트로 미리 만들어 브리프에 조각 수와 순서를 명시한다. 글꼴 파일 대신 도형 데이터를 쓴다
- Scrolline Deck: 조각 조립을 진행률 0..1 구간에 나누어 배정한다. back 이징은 scrub에서 되감을 때 튀므로 power2.out으로 바꾼다

조합 / Pair with: [흩어진 글자 조립 · Text Scatter Assemble](../text-scatter-assemble/) · [선 그리기 · Line Draw](../line-draw/) · [바운스 착지 · Bounce Landing](../bounce-landing/)

출처 / Sources: [codrops/DecorativeLetterAnimations](https://github.com/codrops/DecorativeLetterAnimations) (unknown) · [codrops/FancyLetterAnimation](https://github.com/codrops/FancyLetterAnimation) (unknown) · [codrops/AnimatedLetters](https://github.com/codrops/AnimatedLetters) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
