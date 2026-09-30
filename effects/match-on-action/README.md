# Nº 178 동작 연결 컷 · Match on Action

> 클립 렌더 예정 / Clip rendering planned.

**컷 앞뒤의 물체나 카메라가 같은 화면 방향과 속도 흐름으로 이어져, 다른 장면이 하나의 동작처럼 보인다**

Objects or camera before and after a cut move in the same screen direction and speed flow, so two scenes read as one action.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 순서·흐름 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Vector Continuity, 운동 방향 연속, motion-vector-inheritance, axis-of-action-pan-handoff

## 선택 기준 / Selection

컷이 눈에 띄지 않고 동작이 이어진다는 인상을 준다. 장면 전환이 자연스러운 흐름이 된다 / The cut goes unnoticed and the action carries through, making the transition feel like natural flow.

- 장면 A에서 오른쪽으로 던진 물체가 장면 B에서 오른쪽에서 들어오게 이을 때 / A thrown object in scene A enters scene B from the same side.
- 다른 화면 사이에 동작의 연속성을 만들 때 / Build continuity of action across different screens.

좋은 예 / Good: 장면 A의 카드가 400ms 동안 오른쪽 끝으로 나가고, 컷 뒤 장면 B의 카드가 같은 방향과 속도로 왼쪽에서 400ms 동안 들어온다
나쁜 예 / Bad: 컷 앞에서는 오른쪽으로 나가고 컷 뒤에서는 오른쪽에서 들어와 방향이 뒤집힌다. 속도가 달라 이어 붙인 자국이 보인다
주의 / Avoid: 화면 방향(좌우)을 컷 전후로 유지한다 · 경계 속도를 맞춘다(양쪽 ease가 같은 속도로 만나게)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 양쪽 지속 | 400ms | 300~500ms | 앞뒤 동일 |
| 이동 방향 | 오른쪽 | 좌우 유지 | 컷 전후 같은 벡터 |
| 경계 속도 | 동일 |  | 앞 끝 속도 = 뒤 시작 속도 |
| 컷 지점 | 화면 밖 | x ±1920 부근 | 가려진 순간에 컷 |

이징 / Ease: `power2.in / power2.out`

## 구현 / Implementation (GSAP)

```js
tl.to('.a', { x: 1300, duration: 0.4, ease: 'power2.in' }, 0.6)            // 장면 A 퇴장: 가속하며 나감
  .set('.a', { autoAlpha: 0 }, 1.0).set('.b', { autoAlpha: 1 }, 1.0)         // 컷 (화면 밖 순간)
  .fromTo('.b', { x: -1300 }, { x: 0, duration: 0.4, ease: 'power2.out' }, 1.0); // 장면 B 진입: 감속하며 들어옴
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 A의 카드가 오른쪽으로 400ms 동안 power2.in으로 나가고, 1.0초에 컷해서 장면 B의 카드가 왼쪽에서 400ms, power2.out으로 들어오게 짜줘. 방향과 속도가 이어지도록 이동량은 1300px로 같게 하고 컷은 화면 밖에서 일어나게 해.
```

### 한국어 · Codex
```text
<파일>에 match on action 컷을 만들어줘. A: x 0→1300, 0.4s, power2.in, 시작 0.6s. 컷 1.0s. B: x -1300→0, 0.4s, power2.out. 0.9초, 1.0초, 1.1초 시점을 캡처해 컷 순간 두 카드가 모두 화면 밖에 있는지, 방향이 같은지 확인해.
```

### English · Claude Code
```text
Build a match on action cut for <target>: the scene A card exits right over 400ms with power2.in, cut at 1.0 seconds, and the scene B card enters from the left over 400ms with power2.out. Use 1300px of travel for both so direction and speed continue, and make the cut happen off screen.
```

### English · Codex
```text
Create a match on action cut in <file>. A: x 0 to 1300, 0.4s, power2.in, start 0.6s. Cut at 1.0s. B: x -1300 to 0, 0.4s, power2.out. Capture at 0.9s, 1.0s and 1.1s and verify both cards are off screen at the cut and the direction matches.
```

예시 / Example: 동작 연결 컷를 `.hero`에 적용해. / Apply Match on Action to `.hero`.

## 적용 / Application

- HyperFrames: 컷 시각을 tl.set으로 명시하고 앞 ease의 끝 속도와 뒤 ease의 시작 속도가 비슷하도록 power2.in과 power2.out을 쓴다
- ReelForge: 두 씬 워커 브리프 양쪽에 이동 방향과 경계 속도를 공유 파라미터로 싣는다. 각 씬은 자기 절반만 그린다
- Scrolline Deck: 컷을 진행률 한 점에 두고 앞뒤 스크럽 구간을 같은 방향으로 매핑한다. ease-out을 앞뒤 모두 쓰면 속도가 끊기니 앞은 linear로 둔다

조합 / Pair with: [스매시 컷 · Smash Cut](../smash-cut/) · [휩팬 · Whip Pan](../whip-pan/) · [퇴장 후 등장 · Exit Before Enter](../exit-before-enter/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#motion-vector-inheritance`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#axis-of-action-pan-handoff`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
