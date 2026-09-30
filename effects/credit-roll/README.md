# Nº 623 엔딩 크레디트 롤 · Credit Roll

> 클립 렌더 예정 / Clip rendering planned.

**이름과 역할 목록이 일정한 속도로 아래에서 위로 올라가는 엔딩 크레딧**

A list of names and roles scrolls upward at a constant speed.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 순서·흐름, 브랜딩 | 설명 영상, 발표, 숏폼 | css |

## 선택 기준 / Selection

제작에 참여한 사람들이 순서와 위계에 맞게 전달된다. 이야기의 끝이라는 신호이다 / People are credited in order and hierarchy. It signals the end of the story.

- 영상 끝에 참여자·출처·감사 인사를 정리할 때 / Crediting contributors, sources and thanks at the end of a video
- 발표 마지막 슬라이드에 이름 목록을 흘려 보낼 때 / Sending a name list scrolling at the end of a presentation

좋은 예 / Good: 역할 라벨과 이름이 1.5em 줄 간격으로 45px/s 등속으로 올라가고 마지막 줄이 화면 상단을 벗어난 뒤 0.5초 후 종료한다
나쁜 예 / Bad: 속도가 계속 변하거나 이징이 걸려 읽는 도중 멈칫거린다
주의 / Avoid: 이징 없이 linear 등속으로만 움직인다 · 속도는 45px/s 안팎. 100px/s 이상이면 읽을 수 없다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 속도 | 45px/s | 30~60px/s | 1920x1080 기준 |
| 줄 간격 | 1.5em | 1.3~1.8em | 역할과 이름 그룹은 더 넓게 |
| 역할과 이름 간격 | 0.75em | 0.5~1em | 라벨과 이름 |
| 여백 | 화면 높이 100% | 고정 | 시작은 화면 아래 바깥 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const H = block.offsetHeight, dist = H + 1080;
tl.fromTo('.credits', {y:1080}, {y:-H, duration:dist / 45, ease:'none'}, 0);
// 총 길이 = (H + 1080) / 45s
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상 끝에 엔딩 크레딧을 넣어줘. 역할 라벨과 이름 목록을 한 블록으로 만들어 화면 아래에서 위로 45px/s 등속(linear)으로 올리고, 줄 간격 1.5em, 라벨과 이름 사이 0.75em. duration은 (블록 높이+1080)/45초로 계산해.
```

### 한국어 · Codex
```text
<파일>에 credit roll을 적용해. .credits y 1080에서 -H를 duration=(H+1080)/45로 linear. H는 fonts.ready 뒤 offsetHeight. 시작·중간·끝 시점을 캡처해 첫 줄 진입, 중간 등속 위치, 마지막 줄 퇴장을 확인하고 두 프레임 사이 y 변화가 45px/s와 일치하는지 검사해.
```

### English · Claude Code
```text
Add end credits to the video in <target>. Put role labels and names in one block and scroll it from below the frame to above at a constant 45px/s (linear), with 1.5em line spacing and 0.75em between label and name. Set duration to (block height + 1080)/45 seconds.
```

### English · Codex
```text
Apply credit roll in <file>. .credits y 1080 to -H, duration=(H+1080)/45, linear; H measured via offsetHeight after fonts.ready. Capture at start, middle and end to verify first-line entry, constant motion, and last-line exit, and check the y delta between two frames equals 45px/s.
```

예시 / Example: 엔딩 크레디트 롤를 `.hero`에 적용해. / Apply Credit Roll to `.hero`.

## 적용 / Application

- HyperFrames: duration을 (총 높이 + 화면 높이)/속도로 계산해 등속 linear tween 하나로 만든다. 폰트 로드 뒤 높이를 측정해 고정한다
- ReelForge: 브리프에 크레딧 데이터 배열, 속도 45px/s, 줄 간격 1.5em을 싣는다. 총 길이는 계산 결과를 출력해 씬 길이에 반영한다
- Scrolline Deck: 진행률 0~1을 y 이동 전체에 선형 매핑한다. 스크롤 덱의 크레딧 장면이면 핀 길이를 총 이동 거리에 비례시킨다

조합 / Pair with: [제목 카드 컷 리듬 · Title Card Rhythm](../title-card-rhythm/) · [하단 자막 바 · Lower Third Reveal](../lower-third-reveal/) · [스크롤 스크럽 시네마 · Scroll-scrub Cinema Scene](../scroll-scrub-cinema/)

출처 / Sources: [Art of the Title](https://www.artofthetitle.com/title/catch-me-if-you-can/) (unknown) · [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
