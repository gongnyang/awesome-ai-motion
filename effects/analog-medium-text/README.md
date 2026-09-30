# Nº 624 분필과 붓 글자 · Analog Medium Text

> 클립 렌더 예정 / Clip rendering planned.

**분필로 글자가 그려진 뒤 지우개 띠가 지나가며 흐린 흔적을 남기는 칠판 효과**

Chalk letters are written, then an eraser band passes over leaving a faint smudge.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 고급 | 설명, 순서·흐름, 분위기 | 설명 영상, 발표, 숏폼 | canvas |

다른 이름 / Also known as: Chalk erase, 분필 지우기, Graffiti spray, 그래피티 분사, Brush wipe, 붓질 공개

## 선택 기준 / Selection

칠판에서 설명을 쓰고 지우는 행위. 수업의 아날로그 감성과 진행 순서가 있다 / The act of writing and erasing on a blackboard; analog warmth with a clear sequence.

- 교육 콘텐츠에서 핵심 개념을 쓰고 지우며 다음으로 넘어갈 때 / Teaching content that writes a key concept and wipes it before the next
- 수업 톤의 영상 오프닝 / Class-toned video openers

좋은 예 / Good: 글자가 0.6초 동안 steps(4)의 거친 마스크로 쓰이고 1초 뒤 0.5초에 걸쳐 지우개 띠가 지나가며 불투명도 0.12의 흔적만 남는다
나쁜 예 / Bad: 지우개가 글자를 한 번에 사라지게 하고 흔적이 없어 지웠다는 사실이 없다
주의 / Avoid: 쓰기는 거칠게(steps), 지우기는 띠 이동으로 표현한다. 둘 다 부드러우면 아날로그 느낌이 사라진다 · 흔적은 opacity 0.15 이하. 다음 글자를 가리면 안 된다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 쓰기 | 0.6s | 0.4~1.0s | steps(4) 마스크 전진 |
| 정지 | 1.0s | 0.8~2.0s | 읽는 시간 |
| 지우기 | 0.5s | 0.4~0.8s | 띠 이동 |
| 잔흔 opacity | 0.12 | 0.08~0.15 | 분필 가루 |

이징 / Ease: `steps(4) (쓰기) / power1.inOut (지우기)`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.chalk', {clipPath:'inset(0 100% 0 0)'}, {clipPath:'inset(0 0% 0 0)', duration:0.6, ease:'steps(4)'}, 0.2)
  .fromTo('.eraser', {x:-200}, {x:1200, duration:0.5, ease:'power1.inOut'}, 1.8)
  .to('.chalk', {clipPath:'inset(0 0 0 100%)', duration:0.5, ease:'power1.inOut'}, 1.8)
  .to('.ghost', {opacity:0.12, duration:0.2}, 1.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문구를 칠판 분필 효과로 만들어줘. 분필 글자는 clip-path가 0.6초 steps(4)로 왼쪽에서 오른쪽으로 쓰이고, 1초 정지 뒤 지우개 띠가 0.5초 동안 왼쪽에서 오른쪽으로 지나가며 글자를 지우되 불투명도 0.12의 잔흔을 남겨.
```

### 한국어 · Codex
```text
<파일>에 analog medium text를 적용해. .chalk clipPath inset(0 100% 0 0)에서 inset(0)을 0.2초부터 0.6초 steps(4), .eraser x -200에서 1200을 1.8초부터 0.5초, .chalk 지우기 clipPath 동기, .ghost opacity 0.12. 0.5초·1.5초·2.0초·2.6초를 캡처해 쓰는 중, 완성, 지우는 중, 잔흔 상태를 확인해.
```

### English · Claude Code
```text
Make the phrase in <target> a chalkboard effect. The chalk text is written left to right by clip-path in 0.6s steps(4), held 1s, then an eraser band sweeps across in 0.5s erasing it and leaving a 0.12-opacity ghost.
```

### English · Codex
```text
Apply analog medium text in <file>. .chalk clipPath inset(0 100% 0 0) to inset(0) from 0.2s over 0.6s steps(4); .eraser x -200 to 1200 from 1.8s over 0.5s; erase .chalk in sync; .ghost opacity 0.12. Capture at 0.5s, 1.5s, 2.0s and 2.6s: writing, complete, erasing, ghost.
```

예시 / Example: 분필과 붓 글자를 `.hero`에 적용해. / Apply Analog Medium Text to `.hero`.

## 적용 / Application

- HyperFrames: 쓰기 마스크와 지우기 마스크를 같은 진행 시간으로 잡고, 지우개 div의 x와 clip-path를 함께 움직인다. 텍스처는 정적 이미지로 준다
- ReelForge: 브리프에 문구, 쓰기 0.6초, 정지 1.0초, 지우기 0.5초, 잔흔 0.12, 분필 색을 싣는다
- Scrolline Deck: 진행률을 쓰기·정지·지우기 세 구간으로 나눠 매핑한다. 홀드 구간을 넉넉히 두어 스크롤을 멈춰도 글자가 읽힌다

조합 / Pair with: [손글씨 쓰기 · Handwriting Write On](../handwriting-write-on/) · [스크리블 와이프 · Scribble Wipe](../scribble-wipe/) · [타자기 · Typewriter](../typewriter/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
