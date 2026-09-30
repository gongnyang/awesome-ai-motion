# Nº 421 힌지 개폐 · Hinged Oscillation

> 클립 렌더 예정 / Clip rendering planned.

**가위나 날개처럼 두 부품이 같은 축에서 서로 반대 각도로 열리고 닫히는 반복**

Two parts, like scissors or wings, open and close in opposite directions around the same pivot.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 기본 | 설명, 분위기 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: 맞물린 부품 왕복

## 선택 기준 / Selection

아이콘이 어떻게 작동하는지 구조로 이해하게 한다. 대칭 움직임이라 안정적이고 리듬이 있다 / Lets the viewer understand how the icon works by its structure. The symmetry feels stable and rhythmic.

- 가위, 집게, 날개 아이콘이 기능을 보여 줄 때 / A scissors, pliers or wing icon showing its function.
- 로딩이나 대기 상태를 조용히 표시할 때 / A quiet idle or waiting state.
- 도구의 동작 원리를 설명 장면에서 시연할 때 / Demonstrate how a tool operates in an explainer.

좋은 예 / Good: 가위 아이콘의 두 날이 같은 피벗에서 ±15도로 1.8초 주기로 두 번 열리고 닫힌다
나쁜 예 / Bad: 두 부품의 피벗이 달라 서로 겹쳐 어긋나거나, 각도가 커서 아이콘 형태가 무너진다
주의 / Avoid: 두 부품은 반드시 같은 피벗 좌표를 쓴다 · 각도는 ±25도 이하로 유지한다 · 반복은 2~3회 이내로 하고 마지막은 닫힌 상태로 끝낸다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 각도 | ±15deg | ±8~25deg | 서로 반대 부호 |
| 주기 | 1.8s | 1.2~2.6s | 열림과 닫힘 합산 |
| 반복 | 2회 | 2~3회 | 마지막은 닫힘 |
| 이징 | sine.inOut | sine 계열 | 부드러운 왕복 |

## 구현 / Implementation (GSAP)

```js
gsap.set(['.blade-a', '.blade-b'], { transformOrigin: '50% 60%' }); // 같은 피벗
tl.to('.blade-a', { rotation: -15, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: 3 }, 0.3)
  .to('.blade-b', { rotation: 15, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: 3 }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <SVG 아이콘>의 두 부품이 같은 피벗에서 반대 방향으로 열리고 닫히게 해줘. 한쪽은 -15도, 다른 쪽은 +15도로 0.9초 sine.inOut, yoyo로 총 2회 반복(주기 1.8초), 0.3초에 시작해. 두 부품은 동일한 transform-origin을 쓰고 마지막은 닫힌 상태로 끝나야 해.
```

### 한국어 · Codex
```text
<파일>의 아이콘에 hinged-oscillation을 적용해. .blade-a rotation -15, .blade-b rotation 15, duration 0.9, ease sine.inOut, yoyo true, repeat 3을 position 0.3에 건다. 두 부품 transformOrigin이 동일한지 확인하고 0.3초는 닫힘, 1.2초는 최대 개방, 3.9초는 닫힘 상태인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP so the two parts of <SVG icon> open and close in opposite directions around the same pivot. One part rotates -15 degrees, the other +15, each 0.9 seconds with sine.inOut and yoyo, twice in total (1.8 second period), starting at 0.3 seconds. Both use the same transform-origin and the icon ends closed.
```

### English · Codex
```text
Apply hinged-oscillation to the icon in <file>. Tween .blade-a rotation -15 and .blade-b rotation 15, duration 0.9, ease sine.inOut, yoyo true, repeat 3 at position 0.3. Verify identical transformOrigin, then capture 0.3s (closed), 1.2s (fully open) and 3.9s (closed).
```

예시 / Example: 힌지 개폐를 `.hero`에 적용해. / Apply Hinged Oscillation to `.hero`.

## 적용 / Application

- HyperFrames: yoyo repeat 횟수를 유한값으로 고정해 paused 타임라인 길이가 정해지게 한다. 무한 반복을 쓰면 seek 길이가 불확정이다
- ReelForge: 브리프에 SVG 부품 2개, 피벗 좌표, 각도 ±15, 주기 1.8s, 반복 2를 싣는다
- Scrolline Deck: 진행률 0~1을 열림 한 주기에 매핑한다. sine 이징이라 scrub에서도 자연스럽다

조합 / Pair with: [스윙 · Swing](../swing/) · [펄스 · Pulse](../pulse/) · [위글 · Wiggle](../wiggle/)

출처 / Sources: local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/svg-icon-enrichment.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
