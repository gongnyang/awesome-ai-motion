# Nº 018 연속 이동 · Continuous Motion

> 클립 렌더 예정 / Clip rendering planned.

**여러 정거장이나 장면을 지나면서 요소가 중간에 멈추지 않고 같은 흐름을 이어 간다**

An element passes through several stops or scenes without pausing, keeping one flow.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 중급 | 순서·흐름, 전환 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: Continuous Tangent Motion, 접선 속도 승계, rolling-tension-chain, scene-boundary-tangent-handoff, Continue Motion, 속도 유지 연장, loopOut continue

## 선택 기준 / Selection

분리된 단계가 하나의 연속된 행동으로 읽힌다. 정지가 없으니 진행 방향에 대한 기대가 유지된다 / Separate steps read as one continuous action. Without stops, the expectation of direction holds.

- 단계 A, B, C를 지나는 마커가 매번 멈추지 않고 이어 달려야 할 때 / A marker passing stations A, B and C must run through without stopping.
- 장면 경계에서 속도를 이어 받게 할 때 / Hand off velocity across a scene boundary.

좋은 예 / Good: 마커가 600ms 구간 세 개를 지나며 경계에서 속도가 같아 멈추지 않고 이어진다. 홀드 0ms
나쁜 예 / Bad: 구간마다 power3.inOut을 걸어 매번 정지하고 출발해 끊긴다. 경계 속도가 달라 이어 붙인 자국이 보인다
주의 / Avoid: 구간별 ease-in-out 금지(경계에서 정지함) · 경계 속도를 계산해 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 구간 길이 | 600ms | 400~900ms | 동일 길이면 속도 계산이 쉽다 |
| 경계 속도 | 동일 | 없음 | 전 구간 끝 속도 = 다음 구간 시작 속도 |
| 정지 홀드 | 0ms | 0~150ms | 길수록 끊김 |
| 구간 수 | 3 | 2~5 |  |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 세 정거장 x = 300, 900, 1500 을 하나의 연속 경로로 잇는다
tl.to('.marker', { keyframes: [{ x: 300 }, { x: 900 }, { x: 1500 }], duration: 1.8, ease: 'none' }, 0.2);
// 필요하면 ease 'sine.inOut'을 전체 1.8s 에만 건다: 경계마다 멈추지 않음
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 마커가 정거장 세 곳(x 300, 900, 1500)을 정지 없이 지나가게 해줘. GSAP keyframes 하나로 전체 1.8초, ease none으로 잇고 전체 시작과 끝에만 짧은 감속(sine.inOut 0.3초)을 넣어. 구간별로 ease를 걸지 마.
```

### 한국어 · Codex
```text
<파일>의 마커 이동을 연속 이동으로 바꿔줘. keyframes x 300 → 900 → 1500, duration 1.8초, ease none. 0.8초와 1.4초(경계 근처) 시점의 x 변화량이 앞뒤 프레임에서 같은지 캡처와 값 비교로 확인해 정지 구간이 없음을 검증해.
```

### English · Claude Code
```text
Make the marker in <target> pass three stops (x 300, 900, 1500) without stopping. Use a single GSAP keyframes tween of 1.8 seconds with ease none, adding a short ease only at the very start and end (sine.inOut, 0.3s). Do not set an ease per segment.
```

### English · Codex
```text
Convert the marker movement in <file> to continuous motion: keyframes x 300, 900, 1500, duration 1.8s, ease none. Capture near the boundaries at 0.8s and 1.4s and verify by value comparison that the per-frame x delta is the same before and after, proving there is no stop.
```

예시 / Example: 연속 이동를 `.hero`에 적용해. / Apply Continuous Motion to `.hero`.

## 적용 / Application

- HyperFrames: keyframes 하나로 전 구간을 잇고 ease는 전체에만 건다. 구간별 tween을 쓸 때는 경계 속도를 손으로 맞춘다
- ReelForge: 씬 브리프에 정거장 좌표 목록과 전체 시간만 싣는다. 각 씬은 시작 속도를 받아 이어 받도록 한다
- Scrolline Deck: 진행률에 하나의 연속 경로를 매핑한다. scrub은 자연히 연속이므로 구간 경계 속도만 확인한다

조합 / Pair with: [이징 · Easing](../easing-curves/) · [스피드 램프 · Speed Ramp](../speed-ramp/) · [동작 연결 컷 · Match on Action](../match-on-action/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#rolling-tension-chain`) (Apache-2.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-language-reference/expression-language-reference.html) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#scene-boundary-tangent-handoff`) (Apache-2.0) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
