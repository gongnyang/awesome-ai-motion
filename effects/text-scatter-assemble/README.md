# Nº 111 흩어진 글자 조립 · Text Scatter Assemble

> 클립 렌더 예정 / Clip rendering planned.

**사방에 흩어진 글자가 제자리로 모여 읽을 수 있는 문장이 되는 효과**

Letters scattered around the frame fly in and settle into a readable sentence.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 주목 끌기, 설명 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: Letter Scatter Assemble, 흩어진 글자 모으기, Scatter Title Assemble, netflix-title-converge, depth-scatter-assemble, Text scatter assembly, 문자 흩어짐과 조립

## 선택 기준 / Selection

흩어진 정보가 정리되어 의미를 갖는 순간을 보여준다. 도착 직전에 주목이 한곳으로 모인다 / Shows scattered information being organized into meaning, with attention converging just before arrival.

- 제목 등장에서 '정리된다, 하나로 모인다'는 메시지를 함께 전할 때 / Open a title while also conveying that pieces come together.
- 오프닝 타이틀을 시네마틱하게 열 때 / Start a cinematic opening title.

좋은 예 / Good: 12글자 제목이 x ±200%, y ±150% 위치에서 0.9초에 걸쳐 50ms 간격으로 모여 정확히 제자리에 멈춘다
나쁜 예 / Bad: 글자마다 회전과 크기를 무작위로 크게 줘 어수선하고, 도착 후에도 잔여 회전이 남는다
주의 / Avoid: 시작 위치를 Math.random으로 정하지 않는다(시드 난수 사용) · 도착 시점에 회전·투명도 잔여 금지 · 글자 수 20자 초과 문장에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시작 범위 | x ±200%, y ±150% | ±100~±250% | 글자 자기 크기 기준 |
| 글자 간 지연 | 50ms | 30~80ms | 도착 순서가 읽히는 간격 |
| 지속 | 900ms | 700~1200ms | 글자당 이동 시간 |
| 이징 | power3.out | power2.out~power4.out | 도착 직전 감속 |
| 난수 시드 | 9 | 임의 정수 | 재현 가능 |

## 구현 / Implementation (GSAP)

```js
let s = 9; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647 - 0.5;
chars.forEach((el, i) => {
  tl.from(el, { x: rnd() * 4 * el.offsetWidth, y: rnd() * 3 * el.offsetHeight,
    rotation: rnd() * 60, opacity: 0, duration: 0.9, ease: 'power3.out' }, i * 0.05);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목 '<문구>'를 글자(한글은 음절) 단위 span으로 나눠, 시드 9 난수로 정한 x ±200%, y ±150%, 회전 ±30도 위치에서 제자리로 모이게 해줘. 글자당 0.9초, 50ms 간격, power3.out이고 마지막 글자 도착 뒤 1초 정지. 자모 단위로 쪼개지 말고 paused 타임라인에서 seek 되게 만들어.
```

### 한국어 · Codex
```text
<파일>의 제목을 글자 span으로 분리하고 시드 난수(seed 9)로 시작 오프셋을 계산해 tl.from을 i*0.05 간격으로 건다. Math.random 금지. 0.3초에 글자가 분산돼 있고 1.8초에 원래 위치·회전 0으로 완전히 정렬됐는지 캡처로 확인하고, 한글은 음절이 깨지지 않았는지도 확인해.
```

### English · Claude Code
```text
Split the title '<text>' of <target> into per-character spans (per syllable for Korean, never per jamo). Using a seed-9 pseudo random generator, start each from x +/-200%, y +/-150%, rotation +/-30 degrees and converge to place: 0.9 seconds each, 50ms apart, power3.out, holding 1 second after the last one lands. Keep it on one paused timeline so it can be seeked.
```

### English · Codex
```text
In <file> split the title into character spans, compute start offsets from a seeded generator (seed 9), and add tl.from calls at i*0.05. No Math.random. Capture at 0.3s to confirm the letters are scattered and at 1.8s to confirm rotation and offset are exactly 0; for Korean also confirm no syllable was broken.
```

예시 / Example: 흩어진 글자 조립를 `.hero`에 적용해. / Apply Text Scatter Assemble to `.hero`.

## 적용 / Application

- HyperFrames: 글자를 span으로 미리 나눠 tl.from으로 걸고 난수는 시드 함수만 쓴다. paused 상태로 0.9초 뒤 상태가 최종 배치와 같은지 seek로 확인한다
- ReelForge: 텍스트 애니메이터 씬에 seed=9, 범위, 글자 지연을 파라미터로 전달한다. 글자 분리는 한글이면 음절 단위 span으로 한다
- Scrolline Deck: 모임 정도를 진행률 0..1에 매핑한다. scrub에서는 되감아도 같은 궤적이 나오도록 시드 고정과 ease-out을 쓴다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [글자 재배치 조립 · Letter Anagram Shift](../letter-anagram-shift/) · [텍스트 입자 디졸브 · Text Particle Dissolve](../text-particle-dissolve/) · [3D 조립 · Depth Assemble](../depth-assemble/)

출처 / Sources: [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) (MIT) · [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) (MIT) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#netflix-title-converge`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/netflix-converge.html`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
