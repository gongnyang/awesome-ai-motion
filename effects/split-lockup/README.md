# Nº 435 스플릿 로고 리빌 · Split Logo Reveal

> 클립 렌더 예정 / Clip rendering planned.

**하나의 마크가 좌우로 벌어져 사이의 문장을 보여 준 뒤 다시 닫히는 로고 연출**

A single mark splits apart, reveals a phrase between its halves, then closes again.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 브랜딩, 강조 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: Logo split lockup, 로고 벌림 잠금, Split Logo Lockup, 분할 로고 락업

## 선택 기준 / Selection

하나의 대상과 그 안에 담긴 메시지를 연결한다. 로고가 열렸다 닫히며 문구를 감싸는 인상이 남는다 / Ties one object to the message it carries. The logo opens and closes around the phrase.

- 로고 사이에 슬로건이나 제품명을 끼워 보여 줄 때 / Slip a slogan or product name between the halves of a logo.
- 음악 박자에 맞춰 마크를 열고 닫을 때 / Open and close a mark on the music beat.
- 아웃트로에서 콜투액션 문구를 공개할 때 / Reveal a call to action in an outro.

좋은 예 / Good: 로고가 400ms에 좌우 ±120px로 벌어지고 사이에 문구가 나타나 1초 머문 뒤 300ms에 닫힌다
나쁜 예 / Bad: 벌림 중 문구가 로고 조각 뒤로 겹쳐 잘리거나, 홀드가 짧아 문구를 읽지 못한 채 닫힌다
주의 / Avoid: 문구 홀드 0.8초 미만 금지 · 벌림 거리는 문구 폭의 절반 이상으로 잡는다 · 닫힌 뒤 로고는 처음과 같은 위치여야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 벌림 | 0.4s | 0.3~0.6s | 좌우 이동 |
| 이동 거리 | ±120px | ±80~180px | 문구 폭에 비례 |
| 메시지 홀드 | 1.0s | 0.8~1.6s | 읽는 시간 |
| 닫힘 | 0.3s | 0.2~0.5s | 빠르게 |
| 이징 | power3.out | power2~expo.out | 벌림은 out, 닫힘은 in |

## 구현 / Implementation (GSAP)

```js
tl.to('.mark-l', { x: -120, duration: 0.4, ease: 'power3.out' }, 0.5)
  .to('.mark-r', { x: 120, duration: 0.4, ease: 'power3.out' }, 0.5)
  .fromTo('.msg', { opacity: 0, scaleX: 0.6 }, { opacity: 1, scaleX: 1, duration: 0.3, ease: 'power2.out' }, 0.7)
  .to(['.mark-l', '.mark-r'], { x: 0, duration: 0.3, ease: 'power3.in' }, 1.9)
  .to('.msg', { opacity: 0, duration: 0.2 }, 1.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP 타임라인으로 <로고>를 좌우 두 조각으로 나눠 벌렸다 닫는 연출을 만들어 줘. 0.5초에 각각 ±120px로 0.4초 power3.out으로 벌리고, 0.7초에 사이에 <문구>를 0.3초 페이드 인해. 1.0초 홀드 후 1.9초에 0.3초 power3.in으로 닫으며 문구를 지워. 로고는 시작 위치로 정확히 돌아와야 해.
```

### 한국어 · Codex
```text
<파일>에 split-lockup을 적용해. .mark-l x -120, .mark-r x 120을 position 0.5, duration 0.4, ease power3.out으로 건다. .msg는 position 0.7에 0.3초 등장, 닫힘은 position 1.9, duration 0.3, ease power3.in. 0.6초는 벌어지는 중, 1.4초는 문구가 읽힘, 2.4초는 로고 좌표가 시작과 같은지 캡처로 확인해.
```

### English · Claude Code
```text
Use a GSAP timeline to split <logo> into left and right halves and open then close it. At 0.5 seconds move each half +/-120px over 0.4 seconds with power3.out, and at 0.7 seconds fade <phrase> in between over 0.3 seconds. Hold 1.0 second, then at 1.9 seconds close over 0.3 seconds with power3.in and fade the phrase out. The logo must return exactly to its start position.
```

### English · Codex
```text
Apply split-lockup in <file>. Tween .mark-l x -120 and .mark-r x 120 at position 0.5, duration 0.4, ease power3.out. .msg appears at 0.7 over 0.3s; closing at position 1.9, duration 0.3, ease power3.in. Capture 0.6s (opening), 1.4s (phrase readable) and 2.4s (mark coordinates equal to the start).
```

예시 / Example: 스플릿 로고 리빌를 `.hero`에 적용해. / Apply Split Logo Reveal to `.hero`.

## 적용 / Application

- HyperFrames: 음악 앵커 시각을 상수로 두고 벌림과 닫힘 position을 그 값에서 계산한다. paused 타임라인에서 seek해도 박자가 맞는다
- ReelForge: 브리프에 마크 SVG 좌우 분리본, 문구, 앵커 시각 0.5s와 1.9s를 싣는다
- Scrolline Deck: 진행률 0.2에서 열림, 0.6에서 닫힘이 되도록 구간을 나누고 홀드는 진행률 정지로 처리한다

조합 / Pair with: [조각 조립 · Piece Assembly](../piece-assembly/) · [마스크 리빌 · Mask Reveal](../mask-reveal/) · [비트 싱크 · Beat Synchronization](../beat-sync/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:music-to-video/references/template-catalog.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
