# Nº 068 젤로 · Jello

> 클립 렌더 예정 / Clip rendering planned.

**가로와 세로로 번갈아 비틀리며 감쇠하는 젤리 같은 진동**

A damped alternating shear that makes an element wobble like jelly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 분위기, 주목 끌기 | 숏폼, 웹 UI | css |

다른 이름 / Also known as: 젤리 전단 진동, Text Elastic Skew, 텍스트 탄성 비틀림

## 선택 기준 / Selection

부드럽고 말랑한 물성. 눌렀을 때 탄성 있게 반응한다는 느낌 / A soft, squishy material that responds elastically when touched.

- 젤리·말랑한 캐릭터·소프트 UI 카드를 눌렀을 때 / When a jelly-like character or soft UI card is pressed
- 브랜드 톤이 장난스러운 앱 소개 영상 / In app intro videos with a playful brand tone

좋은 예 / Good: 카드를 누르면 skewX 12deg, -6deg, 3deg, 0 순서로 0.9초 안에 감쇠하며 멈춘다
나쁜 예 / Bad: skew 25도 이상으로 글자가 찌그러지거나, 진동이 감쇠 없이 계속된다
주의 / Avoid: skew 15도 초과 금지 · 텍스트가 많은 카드에는 약하게(6도 이하) · 1초 안에 정지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| skew 진폭 | 12deg | 6~15deg | 첫 번째 최대 각 |
| 감쇠비 | 0.5배 | 0.4~0.6 | 매 왕복 진폭 곱 |
| 단계 수 | 5 | 4~6 | 마지막은 0 |
| 총 길이 | 0.9s | 0.6~1.1s | 감쇠 포함 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const k = [12, -6, 3, -1.5, 0];
k.forEach((a, i) => tl.to('.card', { skewX: a, skewY: -a / 2, duration: 0.18, ease: 'sine.inOut' }, 0.3 + i * 0.18));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 카드에 젤로 효과를 넣어줘. 0.3초부터 0.18초 간격으로 skewX가 12, -6, 3, -1.5, 0도가 되고 skewY는 그 값의 -0.5배야. 이징은 sine.inOut, 총 0.9초 안에 정지. 글자가 있으면 진폭을 6도로 낮춰. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 jello를 적용해. k=[12,-6,3,-1.5,0]를 순회해 skewX=a, skewY=-a/2, duration 0.18, position 0.3+i*0.18로 tween. 0.4초·0.7초·1.3초를 캡처해 비틀림 방향이 번갈아 바뀌고 1.3초에 skew 0인지 확인해.
```

### English · Claude Code
```text
Add a jello to the <target> card with GSAP. From 0.3s, every 0.18s set skewX to 12, -6, 3, -1.5, 0 degrees with skewY at -0.5x of that. Ease sine.inOut and stop within 0.9s. Drop the amplitude to 6 degrees if the card has text. One paused timeline.
```

### English · Codex
```text
Apply jello to <target> in <file>. Loop k=[12,-6,3,-1.5,0] with skewX=a, skewY=-a/2, duration 0.18, position 0.3 + i*0.18. Capture at 0.4s, 0.7s and 1.3s to check the shear alternates direction and skew is 0 at 1.3s.
```

예시 / Example: 젤로를 `.hero`에 적용해. / Apply Jello to `.hero`.

## 적용 / Application

- HyperFrames: skewX/skewY 값 배열을 절대 시각에 배치하고 마지막을 0으로 닫는다. transform-origin 50% 50% 고정
- ReelForge: 브리프에 진폭·감쇠비·단계 수를 넣고, 텍스트 카드는 진폭을 6도로 낮춘다
- Scrolline Deck: scrub에서는 진폭 배열을 진행률에 나눠 매핑하고 스프링 대신 sine.inOut으로 닫는다

조합 / Pair with: [워블 · Wobble](../wobble/) · [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
