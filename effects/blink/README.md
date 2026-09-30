# Nº 074 점멸 · Blink

> 클립 렌더 예정 / Clip rendering planned.

**요소의 밝기나 투명도가 켜지고 꺼지며 반복된다**

An element's brightness or opacity switches on and off repeatedly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 주목 끌기, 피드백 | 웹 UI, 제품 시연, 숏폼 | css |

다른 이름 / Also known as: Flash and Blink, 점멸 강조, Visibility blink, 가시성 점멸

## 선택 기준 / Selection

경고, 신호 존재, 진행 중 상태를 알린다. 가장 단순한 주의 신호다 / Signals warning, presence or in-progress state. It is the simplest attention cue.

- 녹화 중, 라이브, 경고 표시가 필요한 작은 인디케이터에 쓸 때 / Use on small indicators such as recording, live or warnings.
- 커서나 입력 위치를 알릴 때 / Show a cursor or input position.

좋은 예 / Good: 1000ms 동안 opacity가 1에서 0으로 내려갔다 돌아오는 점멸을 2번 한다. 전환은 부드러운 steps 없이 sine
나쁜 예 / Bad: 초당 10회 이상 깜빡여 눈이 아프고 광과민성 우려가 있다. 본문 텍스트 전체를 깜빡인다
주의 / Avoid: 초당 3회 초과 금지 · 본문 텍스트에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 500ms | 400~800ms | 2Hz 이하 |
| 횟수 | 2회 | 2~3회 | 지속 1000ms |
| 최저 opacity | 0 | 0~0.3 | 0.3도 가능 |
| 이징 | sine.inOut | none~sine | 깜빡임이 뚝 끊기면 steps |

## 구현 / Implementation (GSAP)

```js
tl.to('.dot', { opacity: 0, duration: 0.25, ease: 'sine.inOut', yoyo: true, repeat: 3 }, 0.3); // 0.25s x 4 = 1.0s, 2회 점멸
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 상태 표시 점에 점멸을 넣어줘. 0.3초부터 opacity 1에서 0까지 0.25초, sine.inOut으로 yoyo, repeat 3으로 총 1초, 2번 깜빡이고 끝은 opacity 1이야. 초당 3회를 넘지 않게 해.
```

### 한국어 · Codex
```text
<파일>에 blink를 추가해. opacity 1→0, duration 0.25s, ease sine.inOut, yoyo, repeat 3, 시작 0.3초. 0.55초, 0.8초, 1.05초, 1.4초에 캡처해 opacity가 0, 1, 0, 1 순으로 나오는지 확인해.
```

### English · Claude Code
```text
Add a blink to the status dot in <target>. From 0.3 seconds animate opacity 1 to 0 over 0.25s with sine.inOut, yoyo and repeat 3, for 1 second and 2 blinks total, ending at opacity 1. Stay under 3 blinks per second.
```

### English · Codex
```text
Add blink to <file>: opacity 1 to 0, duration 0.25s, ease sine.inOut, yoyo, repeat 3, start 0.3s. Capture at 0.55s, 0.8s, 1.05s and 1.4s and verify opacity reads 0, 1, 0, 1 in that order.
```

예시 / Example: 점멸를 `.hero`에 적용해. / Apply Blink to `.hero`.

## 적용 / Application

- HyperFrames: repeat 횟수를 명시해 타임라인 길이를 유한하게 한다. 커서 깜빡임은 steps(1)로 하드 점멸을 만든다
- ReelForge: 브리프에 주기, 횟수, 최저 opacity, 대상 요소를 싣는다
- Scrolline Deck: 진행률의 지정 구간에서만 점멸하고 구간 밖에서는 opacity 1로 고정한다. scrub 방향에 상관없이 깜빡임은 무해하다

조합 / Pair with: [핫스팟 펄스 · Hotspot Pulse](../hotspot-pulse/) · [펄스 · Pulse](../pulse/) · [스트로브 플래시 · Strobe Flash](../strobe-flash/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py) (MIT) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
