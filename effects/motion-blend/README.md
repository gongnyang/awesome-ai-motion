# Nº 011 모션 블렌드 · Motion Blending

> 클립 렌더 예정 / Clip rendering planned.

**두 동작을 가중치로 섞어 한 동작에서 다음 동작으로 끊김 없이 넘어가는 전환**

Two motions are mixed by weight so one action flows into the next.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 고급 | 설명, 순서·흐름 | 설명 영상, 숏폼, 웹 UI | gsap |

다른 이름 / Also known as: Rive Timeline Blend, 리브 타임라인 블렌드, Animation blend

## 선택 기준 / Selection

자세나 상태가 갑자기 튀지 않고 이어진다는 느낌 / Poses connect without a jump, so the change feels continuous.

- 캐릭터가 걷기에서 정지로 넘어갈 때 / When a character goes from walking to standing
- 두 포즈 사이에서 튀는 프레임 없이 연결해야 할 때 / When two poses must join without a popping frame

좋은 예 / Good: 걷는 포즈 A의 가중치 1→0, 정지 포즈 B의 가중치 0→1을 0.3초 동안 선형으로 교차시킨다
나쁜 예 / Bad: 블렌드 없이 프레임이 튀거나, 블렌드를 1초 이상 끌어 두 동작이 뭉개져 보인다
주의 / Avoid: 블렌드 길이는 0.2~0.5초 · 두 동작의 끝점(위치·각)이 크게 다르면 먼저 정렬한다 · 가중치 합이 1이 되게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 블렌드 길이 | 0.3s | 0.2~0.5s | 교차 구간 |
| 가중치 | 0→1 | 0~1 | A는 1→0, 합은 항상 1 |
| 이징 | none | none~power1.inOut | 선형이 기본 |
| 시작 시각 | 동작 A 종료 0.1s 전 | -0.2~0s | 겹침으로 이어 붙임 |

## 구현 / Implementation (GSAP)

```js
const w = { v: 0 };
tl.to(w, { v: 1, duration: 0.3, ease: 'none', onUpdate: () => {
  gsap.set('.figure', { x: 300 * (1 - w.v) + 0 * w.v, rotation: 8 * (1 - w.v) + 0 * w.v });
} }, 0.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>의 <동작 A>에서 <동작 B>로 모션 블렌드를 넣어줘. 0.9초부터 0.3초 동안 가중치 v를 0에서 1로 선형으로 올리고 각 속성을 A*(1-v)+B*v로 계산해. 이징은 none, 가중치 합은 항상 1. paused 타임라인에서 seek해도 같은 값이 나오게 해.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 motion-blend를 적용해. w={v:0}를 0.9s부터 0.3s 동안 v 1까지 ease none으로 tween하고 onUpdate에서 x, rotation을 A*(1-v)+B*v로 set. 0.9초·1.05초·1.2초에 캡처해 값이 A, 중간, B로 바뀌는지와 seek 후에도 같은 값인지 확인해.
```

### English · Claude Code
```text
Add a motion blend to <target> from <motion A> to <motion B> with GSAP. From 0.9s over 0.3s raise a weight v from 0 to 1 linearly and compute each property as A*(1-v)+B*v. Ease none, weights always sum to 1. Seeking on the paused timeline must give identical values.
```

### English · Codex
```text
Apply motion-blend to <target> in <file>. Tween w={v:0} to v 1 over 0.3s from 0.9s with ease none and in onUpdate set x and rotation to A*(1-v)+B*v. Capture at 0.9s, 1.05s and 1.2s to check the values move from A to the midpoint to B and stay identical after a seek.
```

예시 / Example: 모션 블렌드를 `.hero`에 적용해. / Apply Motion Blending to `.hero`.

## 적용 / Application

- HyperFrames: 가중치 객체를 tween하고 onUpdate에서 결정론으로 계산한다. onUpdate가 seek에서도 불리는지 캡처로 확인하고, 안 되면 속성을 직접 tween한다
- ReelForge: 브리프에 동작 A·B의 이름, 블렌드 길이, 가중치 곡선을 싣는다
- Scrolline Deck: scrub에서는 진행률 자체를 가중치로 쓴다. w = progress이면 역방향도 자동으로 맞는다

조합 / Pair with: [상태 보간 · State Tween](../state-tween/) · [팔로스루 · Follow-through](../follow-through/) · [타이밍과 간격 · Timing & Spacing](../timing-spacing/)

출처 / Sources: [rive.app](https://rive.app/docs/editor/state-machine/states) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [rive-app/rive-runtime](https://github.com/rive-app/rive-runtime) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
