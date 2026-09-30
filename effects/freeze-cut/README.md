# Nº 161 프리즈 컷 · Freeze Cut

> 클립 렌더 예정 / Clip rendering planned.

**동작의 한 순간이 멈춰 짧게 유지된 뒤 다른 장면으로 바뀐다**

A moment of action freezes and holds briefly before the scene changes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 강조, 전환 | 숏폼, 설명 영상, 제품 시연 | canvas |

다른 이름 / Also known as: Freeze punctuated cut, 정지 프레임 구두점 컷

## 선택 기준 / Selection

동작의 한 순간이 멈춘 뒤 다른 장면으로 바뀐다. 핵심 순간과 문단 끝을 강조한다 / Emphasizes a key moment or the end of a paragraph.

- 결과 순간(골, 완료, 성공)에서 화면을 멈추고 자막이나 설명을 붙일 때 / To freeze on a result moment (a goal, completion, success) and add a caption
- 섹션의 마지막 장면을 정지 프레임으로 끝내 문단이 끝났다고 알릴 때 / To end a section on a freeze frame that signals the paragraph is done

좋은 예 / Good: 동작 중 2.0초 프레임을 정지해 400ms 유지한 뒤 0ms 컷으로 다음 장면으로 넘어간다. 정지 순간에 살짝 확대가 들어간다
나쁜 예 / Bad: 정지 프레임이 1초를 넘어 재생이 고장난 것처럼 보이거나, 정지 프레임이 흐릿해 핵심 순간이 아니다
주의 / Avoid: 정지는 300~600ms로 한다 · 정지 프레임은 동작 정점(가장 읽기 좋은 자세)에서 뽑는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 정지 유지 | 400ms | 300~600ms | 컷 전 |
| 컷 | 0ms | 고정 | 즉시 |
| 확대 | 1.0에서 1.04 | 1.02~1.06 | 정지 동안 미세 확대 |
| 정지 시각 | 동작 정점 |  | 읽기 좋은 프레임 |
| 흑백 처리 | saturation 0.6 | 0.4~1 | 선택 사항 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.call(() => drawFrameTo('.freeze', 2.0), null, 2.0);   // canvas에 2.0초 프레임 복사
tl.set('.freeze', { autoAlpha: 1 }, 2.0).fromTo('.freeze', { scale: 1 }, { scale: 1.04, duration: 0.4, ease: 'none' }, 2.0);
tl.set('.freeze', { autoAlpha: 0 }, 2.4).set('.next', { autoAlpha: 1 }, 2.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상 2.0초에 프리즈 컷을 넣어줘. 그 시각의 프레임을 canvas(.freeze)에 복사해 0.4초 동안 표시하면서 scale 1에서 1.04로 ease none으로 서서히 확대하고, 2.4초에 .next로 즉시 컷해. 프레임 복사는 seek 후 시각 기준으로 그려 결정론을 유지해.
```

### 한국어 · Codex
```text
<파일>에 프리즈 컷을 구현해. 2.0초에 drawFrameTo(.freeze, 2.0), .freeze scale 1에서 1.04를 0.4초 none, 2.4초에 .freeze 숨김 및 .next 표시. 1.95초, 2.2초, 2.4초, 2.6초 시점을 캡처해 정지 동안 영상이 움직이지 않는지, 2.4초에 컷 전환이 즉시인지 확인해.
```

### English · Claude Code
```text
Add a Freeze Cut to <target> at 2.0s. Copy the frame at that time to a canvas (.freeze), show it for 0.4s while slowly scaling from 1 to 1.04 with ease none, and cut to .next at 2.4s. Draw the frame from the seeked time so it stays deterministic.
```

### English · Codex
```text
Implement Freeze Cut in <file>. At 2.0s call drawFrameTo(.freeze, 2.0); .freeze scale 1 to 1.04 over 0.4s ease none; at 2.4s hide .freeze and show .next. Capture at 1.95s, 2.2s, 2.4s, and 2.6s to confirm nothing moves during the freeze and that the cut at 2.4s is instant.
```

예시 / Example: 프리즈 컷를 `.hero`에 적용해. / Apply Freeze Cut to `.hero`.

## 적용 / Application

- HyperFrames: 프레임 복사는 seek 후 정확한 시각의 프레임을 canvas에 그리도록 구현한다. 영상 재생 중이 아니라 시각 기준으로 그려야 결정론적이다
- ReelForge: 씬 워커 브리프에 정지 시각 2.0초, 유지 400ms, 확대 4%를 싣는다
- Scrolline Deck: scrub에서는 진행률 임계값 이전 프레임을 정지 프레임으로 고정하고 그 구간 진행률을 소비한다

조합 / Pair with: [스매시 컷 · Smash Cut](../smash-cut/) · [스피드 램프 · Speed Ramp](../speed-ramp/) · [점프 컷 · Jump Cut](../jump-cut/)

출처 / Sources: [remotion-dev/remotion](https://www.remotion.dev/docs/freeze) (Remotion License)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
