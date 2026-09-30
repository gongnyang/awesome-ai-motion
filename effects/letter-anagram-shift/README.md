# Nº 103 글자 재배치 조립 · Letter Anagram Shift

> 클립 렌더 예정 / Clip rendering planned.

**한 단어의 글자들이 옮겨 가 새 단어나 목록의 머리글자가 되는 효과**

The letters of one word travel to become the initials of a new word or list.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 설명, 전환 | 설명 영상, 발표, 웹 UI | gsap |

다른 이름 / Also known as: Letter Shuffle Reassembly

## 선택 기준 / Selection

같은 재료가 새 구조로 이어진다는 관계를 보여준다. 글자가 사라지지 않고 이동해 연속성이 느껴진다 / Shows the same material reconnecting into a new structure; letters move instead of vanishing, which keeps continuity.

- 단어에서 항목 목록으로 넘어가며 각 글자가 항목의 머리글자가 될 때 / Move from a word to a list where each letter becomes an item initial.
- 메뉴 제목이 개별 항목 라벨로 분해될 때 / Break a menu title into individual item labels.

좋은 예 / Good: 'MOTION' 여섯 글자가 800ms에 걸쳐 세로 목록 여섯 줄의 첫 글자 위치로 이동하고 나머지 글자가 뒤따라 나타난다
나쁜 예 / Bad: 글자마다 도착 시각이 제각각이고 경로가 교차해 어느 글자가 어디로 가는지 알 수 없다
주의 / Avoid: 시작·도착 좌표는 실측하고 추정하지 않는다 · 이동 중 글자 크기 변화를 크게 두지 않는다(150% 초과 금지) · 같은 글자가 중복되면 순서 규칙을 미리 정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 800ms | 600~1000ms | 글자당 |
| 글자 간 지연 | 40ms | 20~60ms | 왼쪽부터 |
| 이징 | power3.inOut | power2~power4.inOut | 출발과 도착 모두 보임 |
| 도착 후 대기 | 500ms | 300~800ms | 나머지 글자 등장 전 |

## 구현 / Implementation (GSAP)

```js
const from = [...src].map(e => e.getBoundingClientRect());
const to = [...dst].map(e => e.getBoundingClientRect());
src.forEach((el, i) => {
  tl.fromTo(el, { x: 0, y: 0 }, { x: to[i].left - from[i].left, y: to[i].top - from[i].top,
    duration: 0.8, ease: 'power3.inOut' }, i * 0.04);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에서 단어 '<원문>'의 각 글자가 목록 '<항목들>'의 머리글자 자리로 이동하게 해줘. 글자는 span으로 나누고 시작·도착 좌표를 미리 측정해 tween에 넣어. 글자당 0.8초, 40ms 간격, power3.inOut, 도착 후 0.5초 대기하고 나머지 글자를 페이드인. 한글은 음절 단위로 나눠.
```

### 한국어 · Codex
```text
<파일>에서 원문 글자 span과 목록 머리글자 span을 짝지어 좌표 차이를 계산한 뒤 tl.fromTo로 이동시켜. 좌표 계산은 빌드 시 1회만 하고 렌더 중 재측정 금지. 0.4초에 글자가 이동 중이고 1.4초에 각 글자 bbox가 목표 bbox와 2px 이내로 일치하는지 캡처와 스크립트로 확인해.
```

### English · Claude Code
```text
In <target>, make each letter of the word '<source>' travel to the initial position of the items in '<items>'. Split into spans, pre-measure the start and end coordinates and bake them into the tweens. 0.8 seconds each, 40ms apart, power3.inOut, wait 0.5 seconds after arrival and then fade in the remaining letters. Split Korean by syllable.
```

### English · Codex
```text
In <file> pair each source-letter span with its target initial span, compute the offset, and animate with tl.fromTo. Measure once at build time and never re-measure during rendering. Capture at 0.4s (letters in flight) and 1.4s, and verify by script that each letter bbox is within 2px of its target.
```

예시 / Example: 글자 재배치 조립를 `.hero`에 적용해. / Apply Letter Anagram Shift to `.hero`.

## 적용 / Application

- HyperFrames: 레이아웃 측정은 타임라인 구성 시점 한 번만 하고 결과를 tween에 고정한다. 렌더 중 getBoundingClientRect를 다시 부르지 않는다
- ReelForge: 씬 워커 브리프에 출발 문구, 도착 목록, 대응표(글자 인덱스 쌍)를 명시한다. 대응표 없이는 임의 매칭이 생긴다
- Scrolline Deck: 이동량을 진행률 0..1에 매핑하고 도착 근처는 ease-out으로 눌러 스크롤이 멈춰도 글자가 겹치지 않게 한다

조합 / Pair with: [흩어진 글자 조립 · Text Scatter Assemble](../text-scatter-assemble/) · [스태거 · Stagger](../stagger/) · [분할 플랩 문자판 · Split Flap Display](../split-flap/)

출처 / Sources: [codrops/LetterShuffleMenu](https://github.com/codrops/LetterShuffleMenu) (MIT) · [codrops/LettersAnimationLayout](https://github.com/codrops/LettersAnimationLayout) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
