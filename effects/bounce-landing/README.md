# Nº 016 바운스 착지 · Bounce Landing

> 클립 렌더 예정 / Clip rendering planned.

**물체가 아래로 가속해 떨어진 뒤 점점 낮게 튀며 멈춘다**

An object accelerates down, then bounces lower each time until it rests.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 피드백, 주목 끌기 | 웹 UI, 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Bounce Drop, 낙하 바운스, bounce-drop-physics, drop-and-settle, Collision Bounce, 충돌 바운스, Ballistic bounce, Bounce, 튀기기, CustomBounce, 사용자 충돌

## 선택 기준 / Selection

중력과 충돌을 느끼게 한다. 물체의 무게와 바닥이라는 기준면이 생긴다 / Conveys gravity and impact, and gives the object weight and a ground plane.

- 아이콘이나 카드가 위에서 떨어져 자리를 잡을 때 / An icon or card drops from above and settles.
- 완료나 도착을 경쾌하게 알릴 때 / Announce arrival or completion with a lively touch.

좋은 예 / Good: 120px 높이에서 떨어져 1초 동안 반발계수 0.55로 3번 튀고 멈춘다. 착지 순간 그림자가 진해진다
나쁜 예 / Bad: 반발계수 0.9로 10번 넘게 튀어 멈추지 않고, 진지한 데이터 화면에서 장난스럽게 튄다
주의 / Avoid: 반동 4회 초과 금지 · 금융이나 오류 같은 진지한 맥락에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 낙하 높이 | 120px | 80~200px | 시작 y |
| 총 시간 | 1000ms | 700~1400ms | bounce.out |
| 반발계수 | 0.55 | 0.4~0.65 | 반동 높이 감쇠 |
| 반동 | 3회 | 2~4회 |  |

이징 / Ease: `bounce.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.ball', { y: -120 }, { y: 0, duration: 1, ease: 'bounce.out' }, 0.3);
tl.fromTo('.shadow', { scale: 0.6, opacity: 0.2 }, { scale: 1, opacity: 0.5, duration: 1, ease: 'bounce.out' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 아이콘이 120px 위에서 떨어져 1초 동안 bounce.out으로 3번 튀고 멈추게 해줘. 착지 그림자는 같은 시간에 scale 0.6에서 1, opacity 0.2에서 0.5로 함께 변하게 해. 시작은 0.3초.
```

### 한국어 · Codex
```text
<파일>의 등장 애니메이션을 바운스 착지로 바꿔줘. y -120에서 0, duration 1s, ease bounce.out, 그림자 scale 0.6에서 1. 0.5초, 0.8초, 1.3초 시점을 캡처해 바닥에 닿는 순간 그림자가 진해지는지, 반동 높이가 점점 낮아지는지 확인해.
```

### English · Claude Code
```text
Make the icon in <target> drop from 120px above and bounce three times over 1 second with bounce.out. Animate the contact shadow at the same time, scale 0.6 to 1 and opacity 0.2 to 0.5. Start at 0.3 seconds.
```

### English · Codex
```text
Change the entrance in <file> to a bounce landing: y -120 to 0, duration 1s, ease bounce.out, shadow scale 0.6 to 1. Capture at 0.5s, 0.8s and 1.3s and verify the shadow darkens at contact and each rebound is lower than the last.
```

예시 / Example: 바운스 착지를 `.hero`에 적용해. / Apply Bounce Landing to `.hero`.

## 적용 / Application

- HyperFrames: bounce.out을 단일 tween에 쓴다. 그림자는 같은 시간에 별도 tween으로 건다. paused 타임라인이라 seek 결정론
- ReelForge: 씬 브리프에 낙하 높이, 총 시간, 반발계수를 싣고 그림자 유무를 선택으로 둔다
- Scrolline Deck: scrub에서는 반동 3회가 손 움직임에 묻힌다. 진행률 0.15 구간에 몰아서 재생한다

조합 / Pair with: [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/) · [관성 퇴장 · Physical Exit](../physical-exit/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#bounce-drop-physics`) (Apache-2.0) · [greensock/GSAP](https://gsap.com/docs/v3/Eases/) (GSAP Standard License) · [motionscript.com](https://motionscript.com/articles/bounce-and-overshoot.html) (unknown) · motion dictionary 1-principles.md#4.1 곡선의 읽는 법 (own) · local/embedded-captions (`claude-skill:embedded-captions/references/motion-vocabulary.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
