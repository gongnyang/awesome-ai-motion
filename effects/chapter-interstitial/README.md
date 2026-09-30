# Nº 150 챕터 인터스티셜 · Chapter Interstitial

![챕터 인터스티셜 · Chapter Interstitial](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**장면 사이에 단계 제목 카드가 나타나 잠시 유지된 뒤 다음 장면으로 넘어간다**

A step-title card appears between scenes, holds briefly, then hands off to the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 순서·흐름, 설명 | 제품 시연, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: Demo chapter interstitial, 시연 챕터 전환 카드

## 선택 기준 / Selection

장면 사이에 단계 제목 카드가 잠깐 나와 긴 시연이나 설명의 경계를 분명히 한다 / Makes the boundaries of long demos or explanations clear.

- 긴 시연이나 튜토리얼을 단계 1, 단계 2처럼 나눌 때 / To split a long demo or tutorial into step 1, step 2, and so on
- 챕터가 바뀌는 지점에서 지금 어디인지 알릴 때 / At chapter changes to show where the viewer is

좋은 예 / Good: 제목 카드가 250ms 동안 y +24px에서 올라오며 나타나 1200ms 머물고, 250ms 동안 위로 빠지며 다음 장면으로 이어진다
나쁜 예 / Bad: 카드가 2초 이상 머물러 흐름이 끊기거나, 단계 번호가 없어 어디까지 왔는지 알 수 없다
주의 / Avoid: 카드 유지는 1.0~1.5초 · 단계 번호와 제목을 함께 넣는다(예: 02 설정하기)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 카드 유지 | 1200ms | 1000~1500ms | 읽는 시간 |
| 등장 | 250ms | 200~350ms | y +24에서 0, opacity |
| 퇴장 | 250ms | 200~350ms | y 0에서 -24 |
| 이징 | power2.out / power2.in |  | 등장 out, 퇴장 in |
| 번호 크기 | 제목의 1.6배 |  | 왼쪽 정렬 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.chapter', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }, 0);
tl.to('.chapter', { y: -24, opacity: 0, duration: 0.25, ease: 'power2.in' }, 1.45);
tl.set('.prev', { autoAlpha: 0 }, 0.25).set('.next', { autoAlpha: 1 }, 1.7);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상의 단계 경계에 챕터 인터스티셜을 넣어줘. .chapter(번호와 제목)가 y +24px, opacity 0에서 0.25초 power2.out으로 나타나 1.2초 머물고, 1.45초부터 0.25초 동안 y -24px, opacity 0으로 power2.in으로 빠지게 해. 카드가 사라진 뒤 1.7초에 다음 장면을 표시해. 제목은 변수로 받아줘.
```

### 한국어 · Codex
```text
<파일>에 챕터 인터스티셜을 구현해. .chapter y 24에서 0, opacity 0에서 1 (0.25초 power2.out), 1.45초부터 0.25초 y -24 opacity 0 (power2.in), 1.7초에 .next 표시. 0.15초, 0.8초, 1.55초, 1.8초 시점을 캡처해 0.8초에 번호와 제목이 잘 읽히는지, 1.8초에 카드가 없는지 확인해.
```

### English · Claude Code
```text
Add a Chapter Interstitial between steps in <target>. .chapter (number and title) enters from y +24px, opacity 0 over 0.25s with power2.out, holds 1.2s, then exits from 1.45s over 0.25s to y -24px, opacity 0 with power2.in. Show the next scene at 1.7s. Take the title as a variable.
```

### English · Codex
```text
Implement Chapter Interstitial in <file>. .chapter y 24 to 0 and opacity 0 to 1 (0.25s power2.out); from 1.45s, y 0 to -24 and opacity 1 to 0 (0.25s power2.in); show .next at 1.7s. Capture at 0.15s, 0.8s, 1.55s, and 1.8s to confirm the number and title are legible at 0.8s and the card is gone at 1.8s.
```

예시 / Example: 챕터 인터스티셜를 `.hero`에 적용해. / Apply Chapter Interstitial to `.hero`.

## 적용 / Application

- HyperFrames: 카드는 독립 레이어로 두고 등장, 유지, 퇴장을 절대 시각(0, 1.45)으로 얹는다. 제목은 데이터 변수로 받아 회차마다 바꾼다
- ReelForge: 씬 워커 브리프에 단계 번호, 제목 문구, 유지 1200ms, 카드 스타일(전체/작은 배지)을 싣는다
- Scrolline Deck: scrub에서는 카드를 진행률 구간(0.4~0.6)에서만 보이고 등장은 ease-out, 퇴장은 ease-in으로 처리한다

조합 / Pair with: [점진적 공개 · Progressive Disclosure](../progressive-disclosure/) · [단계와 패널 동기 진행 · Step-panel Walkthrough](../step-panel-walkthrough/) · [페이드 슬라이드 · Fade Slide](../fade-slide/)

출처 / Sources: [Supademo](https://supademo.com/features/demo-editor) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
