# Nº 428 피벗 릴레이 · Pivot Relay

> 클립 렌더 예정 / Clip rendering planned.

**요소가 한 모서리를 축으로 회전하다 다른 모서리로 축을 옮겨 이어서 움직이고 안착하는 동작**

An element rotates around one corner, then hands the pivot to another corner and settles.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 설명, 순서·흐름 | 설명 영상, 숏폼, 웹 UI | gsap |

다른 이름 / Also known as: Moving Pivot, 이동하는 회전축, anchor-itself-animated, 회전축 릴레이, anchor-relay-handoff

## 선택 기준 / Selection

힘과 무게 중심이 옮겨 가는 움직임이 보인다. 카드가 스스로 몸을 가누며 자리를 찾는 느낌을 준다 / Shows force and the center of mass shifting. The card seems to steady itself into place.

- 카드가 모서리로 튕겨 올라오며 자리에 눕는 등장을 만들 때 / Make a card entrance that flips up on a corner and settles.
- 도형이 굴러가듯 이동하는 연출이 필요할 때 / Move a shape as if it rolls.
- 무게 중심이 바뀌는 과정을 설명할 때 / Explain how a center of mass changes.

좋은 예 / Good: 카드가 좌상단 모서리 기준으로 8도 돌다가 축이 우하단으로 넘어가 -3도로 돌아 안착하는 데 1초가 걸린다
나쁜 예 / Bad: 축을 바꾸는 순간 요소가 순간이동하듯 튄다. 회전 각이 커서 카드가 화면 밖으로 나간다
주의 / Avoid: 축 교체 시 화면상 위치를 보정해 점프가 없게 한다 · 각도는 15도 이하로 유지한다 · 한 카드에 축 교체는 2회 이하로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 1.0s | 0.7~1.4s | 두 구간 합산 |
| 첫 회전 | 8deg | 5~14deg | 좌상단 축 |
| 다음 회전 | -3deg | -8~0deg | 우하단 축 |
| 축 위치 | 좌상 → 우하 | 코너 2개 | transform-origin |
| 이징 | power2.inOut | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
// 바깥 래퍼 A(좌상 축), 안쪽 래퍼 B(우하 축)의 중첩 구조
gsap.set('.pivot-a', { transformOrigin: '0% 0%' });
gsap.set('.pivot-b', { transformOrigin: '100% 100%' });
tl.to('.pivot-a', { rotation: 8, duration: 0.5, ease: 'power2.inOut' }, 0.3)
  .to('.pivot-b', { rotation: -3, duration: 0.5, ease: 'power2.inOut' }, 0.8);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <카드>에 피벗 릴레이를 넣어줘. 바깥 래퍼는 transform-origin 좌상단으로 0.3초부터 0.5초 동안 8도 회전하고, 안쪽 래퍼는 우하단 origin으로 0.8초부터 0.5초 동안 -3도 회전해. 이징 power2.inOut. 축이 바뀌는 순간 카드가 튀지 않게 하고 paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 카드에 pivot-relay를 적용해. .pivot-a origin 0% 0% rotation 8 (position 0.3, 0.5s), .pivot-b origin 100% 100% rotation -3 (position 0.8, 0.5s), ease power2.inOut. 0.79초와 0.81초를 캡처해 카드 모서리 좌표 차이가 2px 이하로 점프가 없는지, 1.5초에 정지 각도가 최종값인지 확인해.
```

### English · Claude Code
```text
Add a pivot relay to <card> with GSAP. The outer wrapper rotates 8 degrees around its top-left corner from 0.3 seconds for 0.5 seconds; the inner wrapper rotates -3 degrees around its bottom-right corner from 0.8 seconds for 0.5 seconds. Ease power2.inOut. No visible jump when the pivot changes. Paused timeline.
```

### English · Codex
```text
Apply pivot-relay to the card in <file>. .pivot-a origin 0% 0% rotation 8 (position 0.3, 0.5s), .pivot-b origin 100% 100% rotation -3 (position 0.8, 0.5s), ease power2.inOut. Capture 0.79s and 0.81s to confirm the card corner moves 2px or less across the handoff, and 1.5s to confirm the final angles.
```

예시 / Example: 피벗 릴레이를 `.hero`에 적용해. / Apply Pivot Relay to `.hero`.

## 적용 / Application

- HyperFrames: 중첩 래퍼 두 겹의 transformOrigin을 고정해 두고 rotation만 paused 타임라인에서 움직인다. 축을 바꾸는 시점의 위치는 프레임 캡처로 확인한다
- ReelForge: 브리프에 축 좌표 2개, 각도 8도와 -3도, 구간 길이 0.5s를 싣는다. 래퍼 구조는 워커가 고정한다
- Scrolline Deck: 진행률 0~0.5에 첫 회전, 0.5~1.0에 다음 회전을 매핑하고 스프링은 쓰지 않는다

조합 / Pair with: [아크 · Arcs](../arc-motion/) · [스윙 · Swing](../swing/) · [예비동작 · Anticipation](../anticipation/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#anchor-itself-animated`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#anchor-relay-handoff`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
