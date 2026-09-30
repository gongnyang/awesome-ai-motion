# Nº 112 글자 웨이브 · Text Wave

> 클립 렌더 예정 / Clip rendering planned.

**좁은 파동이 문장을 훑으며 걸린 글자만 잠깐 올라갔다 돌아오는 효과**

A narrow wave sweeps a sentence and lifts only the glyphs it passes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 분위기, 순서·흐름 | 숏폼, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: offset-cascade-wave, 텍스트 파동, Text Wave Selector, 텍스트 파동 셀렉터, Wiggly selector, Expression selector, Text Baseline Wave

## 선택 기준 / Selection

읽는 방향과 리듬을 따라 시선이 이동한다. 문장이 살아 숨 쉬는 느낌을 준다 / The eye follows reading direction and rhythm, and the sentence seems to breathe.

- 대기 화면이나 로딩 문구를 가볍게 움직이게 할 때 / Lightly animating a loading or idle line
- 음악·리듬이 있는 영상에서 제목을 박자에 맞춰 흔들 때 / Bouncing a title on the beat in music-driven video

좋은 예 / Good: "Loading your story" 위를 폭 3글자, 진폭 16px의 파동이 1.2초마다 한 번 지나간다
나쁜 예 / Bad: 진폭을 60px까지 키우고 모든 글자가 동시에 출렁여 문장이 읽히지 않는다
주의 / Avoid: 진폭은 글자 크기의 30% 이하로 둔다 · 파동은 한 번에 3~4글자만 걸리게 한다. 전체가 함께 움직이면 파동이 아니다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 진폭 | 16px | 8~24px | y 이동 |
| 파동 폭 | 3글자 | 2~5글자 | 한 번에 걸리는 글자 |
| 주기 | 1.2s | 0.8~2.0s | 문장 끝까지 한 번 |
| 이징 | sine.inOut | sine | 올라갔다 내려오는 곡선 |

## 구현 / Implementation (GSAP)

```js
const o = {p:0}, W = 3;
tl.to(o, {p:1, duration:1.2, ease:'none', onUpdate(){
  chars.forEach((_, i) => {
    const d = (i - o.p * (N + W) + W / 2) / (W / 2);
    const y = Math.abs(d) < 1 ? -16 * Math.cos(d * Math.PI / 2) : 0;
    node(i).style.transform = `translateY(${y}px)`;
  });
}}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문장에 텍스트 웨이브를 넣어줘. 폭 3글자, 진폭 16px의 파동이 1.2초에 문장을 왼쪽에서 오른쪽으로 한 번 훑고, 걸린 글자만 cos 곡선으로 올라갔다 내려와. 무한 repeat 대신 총 길이만큼 타임라인에 배치해.
```

### 한국어 · Codex
```text
<파일>에 text wave를 적용해. 음절 span에 대해 onUpdate에서 d=(i-p*(N+3)+1.5)/1.5, |d|<1이면 y=-16*cos(d*PI/2), 주기 1.2초. 0.3초·0.6초·0.9초를 캡처해 상승한 글자의 위치가 왼쪽에서 오른쪽으로 이동하고 동시에 3글자 이하만 올라가 있는지 확인해.
```

### English · Claude Code
```text
Add a text wave to the sentence in <target>. A wave 3 glyphs wide with 16px amplitude sweeps the sentence left to right once every 1.2s; only glyphs in the wave rise and fall on a cosine curve. Lay out repetitions on the timeline instead of infinite repeat.
```

### English · Codex
```text
Apply text wave in <file>. Per syllable span, in onUpdate compute d=(i-p*(N+3)+1.5)/1.5 and y=-16*cos(d*PI/2) when |d|<1; period 1.2s. Capture at 0.3s, 0.6s and 0.9s and verify the raised glyphs move left to right with at most 3 raised at once.
```

예시 / Example: 글자 웨이브를 `.hero`에 적용해. / Apply Text Wave to `.hero`.

## 적용 / Application

- HyperFrames: 파동 위치 p를 t의 함수로 두고 글자별 y를 onUpdate에서 계산한다. repeat를 쓰지 않고 필요한 만큼 타임라인에 배치해 seek를 유지한다
- ReelForge: 브리프에 문장, 진폭 16px, 파동 폭 3글자, 주기 1.2초, 반복 횟수를 싣는다. 반복 횟수는 총 길이에 맞게 정해 무한 반복은 피한다
- Scrolline Deck: 진행률 p를 파동 위치로 그대로 쓴다. 스크롤에 따라 파동이 전진하고 멈추면 문장이 평평하게 돌아온다

조합 / Pair with: [가변 글꼴 두께 파동 · Variable Font Weight Wave](../variable-font-weight-wave/) · [글자 회전 입장 · Letter Spin In](../letter-spin-in/) · [스태거 · Stagger](../stagger/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#offset-cascade-wave`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/cascade-wave.html`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/cascade-wave.meta.json`) (Apache-2.0) · [motion.dev examples](https://motion.dev/examples/react-split-text-wavy) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
