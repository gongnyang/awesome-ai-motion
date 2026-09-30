# Nº 064 글자 회전 입장 · Letter Spin In

> 클립 렌더 예정 / Clip rendering planned.

**글자가 기울거나 회전한 상태에서 바른 방향으로 돌아와 정렬되는 등장**

Letters arrive tilted or spinning and rotate into their upright alignment.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 기본 | 주목 끌기, 분위기 | 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Letter Spin and Roll, 글자 회전과 굴림

## 선택 기준 / Selection

가볍고 장난스러운 제목 리듬. 글자마다 통통 튀는 생기가 있다 / A light, playful title rhythm with a little life in every character.

- 밝고 가벼운 톤의 제목이나 인트로 / Bright, light-toned titles and intros
- 유아·교육·커머스 숏폼의 타이틀 / Titles for kids, education or commerce shorts

좋은 예 / Good: "안녕하세요" 각 음절이 rotateZ 90도에서 0도로 0.7초 돌아 들어오고 시작 차는 0.035초다
나쁜 예 / Bad: 음절마다 여러 바퀴를 돌려 1.5초가 걸리고 마지막 글자가 도착하기 전에 처음 글자가 흔들린다
주의 / Avoid: 진지한 톤의 제목에는 쓰지 않는다 · 총 시간 1.2초를 넘지 않게 한다. 글자 수가 많으면 시작 차를 줄인다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 글자당 시간 | 0.7s | 0.5~0.9s | power3.out |
| 시작 차 | 0.035s | 0.02~0.06s | 왼쪽부터 |
| 시작 회전 | 90deg | 45~180deg | rotateZ |
| 시작 y 이동 | 24px | 0~40px | 아래에서 올라옴 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
tl.from('.ch', {rotation:90, y:24, opacity:0, transformOrigin:'50% 50%', duration:0.7, ease:'power3.out', stagger:0.035}, 0.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목의 각 음절이 rotation 90도, y 24px 아래에서 0.7초 power3.out으로 바르게 돌아와 정렬되게 해줘. 음절 시작 차는 0.035초, transform-origin은 중앙, display는 inline-block. 전체는 1.2초 안에 끝내.
```

### 한국어 · Codex
```text
<파일>의 제목에 letter spin in을 적용해. .ch inline-block, from rotation 90, y 24, opacity 0, duration 0.7, stagger 0.035, power3.out. 0.35초·0.7초·1.2초를 캡처해 회전각이 순서대로 줄어들고 마지막 프레임에서 rotation 0인지 확인해.
```

### English · Claude Code
```text
Make each syllable of the title in <target> rotate in from 90deg and 24px below, landing upright over 0.7s power3.out. Stagger syllables 0.035s, keep transform-origin at center and display inline-block. Finish within 1.2s.
```

### English · Codex
```text
Apply letter spin in to the title in <file>. .ch inline-block; from rotation 90, y 24, opacity 0; duration 0.7; stagger 0.035; power3.out. Capture at 0.35s, 0.7s and 1.2s and verify rotation decreases in order and reaches 0 in the last frame.
```

예시 / Example: 글자 회전 입장를 `.hero`에 적용해. / Apply Letter Spin In to `.hero`.

## 적용 / Application

- HyperFrames: transform-origin을 글자 중앙으로 고정하고 inline-block으로 만들어야 회전이 된다. 단일 timeline stagger로 충분하다
- ReelForge: 브리프에 시작 회전각, y 이동, 시작 차를 파라미터로 노출한다. 회전 방향을 글자마다 번갈아 하려면 홀짝 규칙으로 정한다
- Scrolline Deck: 진행률을 stagger에 매핑한다. 회전량이 큰 편이라 scrub에서는 회전각을 90도 이하로 제한한다

조합 / Pair with: [글자 뒤집기 등장 · Letter Flip Reveal](../letter-flip-3d/) · [글자별 스태거 · Per-character Rise](../char-stagger/) · [글자 웨이브 · Text Wave](../text-wave/)

출처 / Sources: [codrops/LetterEffects](https://github.com/codrops/LetterEffects) (unknown) · [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [jschr/textillate](https://github.com/jschr/textillate) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
