# Nº 014 가산 모션 · Additive Motion

> 클립 렌더 예정 / Clip rendering planned.

**큰 경로를 따라 움직이는 대상에 작은 흔들림이나 회전이 동시에 더해진다**

A small wobble or rotation is layered on top of an element following a larger path.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 중급 | 분위기, 순서·흐름 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Group Rig Sway, 그룹 동반 흔들림, null-parent-rig, Additive layered motion, 가산 레이어 모션, Secondary Action, 보조 동작

## 선택 기준 / Selection

요소들이 하나의 그룹처럼 움직인다는 것을 알게 해 준다. 주 동작 위에 미세한 살아 있는 느낌이 얹힌다 / Makes elements read as one group and adds a subtle liveliness on top of the main motion.

- 아이콘이나 카드가 이동하면서 살짝 흔들리도록 해 무게를 줄 때 / Give an icon or card weight by letting it sway while it travels.
- 여러 요소를 하나의 부모 리그로 묶어 함께 움직이게 할 때 / Bind several elements to one parent rig so they move together.

좋은 예 / Good: 부모가 2초에 걸쳐 x 900px 이동하는 동안 자식이 주기 0.4초, 위치 진폭 6px, 회전 2도로 흔들린다
나쁜 예 / Bad: 이동과 흔들림을 하나의 tween에 섞어 값을 덮어쓰거나, 진폭을 30px로 키워 술 취한 것처럼 보인다
주의 / Avoid: 주 경로와 보조 흔들림을 다른 요소(부모와 자식)에 나눠 건다 · 보조 진폭은 주 이동 거리의 2% 이하

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주경로 시간 | 2s | 1.5~3s | 부모의 이동 |
| 보조 주기 | 0.4s | 0.3~0.6s | 자식 진동 |
| 위치 진폭 | 6px | 3~10px | y 방향 |
| 회전 | 2도 | 1~3도 | 사인 곡선 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.rig', { x: 900, duration: 2, ease: 'power2.inOut' }, 0.3);   // 부모: 주경로
tl.to('.item', { y: 6, rotation: 2, duration: 0.2, ease: 'sine.inOut', yoyo: true, repeat: 9 }, 0.3); // 자식: 0.4s 주기, 10 반주기
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 카드에 가산 모션을 넣어줘. 부모 .rig가 2초 동안 x 900px를 power2.inOut으로 이동하고, 자식 .item은 같은 구간에서 y 6px와 rotation 2도를 sine.inOut으로 0.2초 반주기 yoyo, 10회 왕복해. 둘은 별도 tween이라 서로 값을 덮어쓰지 않게 해.
```

### 한국어 · Codex
```text
<파일>에 additive motion을 구현해. .rig x 900 / 2s / power2.inOut, .item y 6 rotation 2 / 0.2s / sine.inOut / yoyo repeat 9. 0.5초, 1.3초, 2.3초를 캡처해 카드가 큰 경로를 따라가는 동안 흔들림이 유지되는지, 도착 후 흔들림이 0으로 돌아오는지 확인해.
```

### English · Claude Code
```text
Add additive motion to the card in <target>. The parent .rig moves x 900px over 2 seconds with power2.inOut, while the child .item adds y 6px and 2 degrees of rotation with sine.inOut, yoyo half-periods of 0.2s, 10 times. Use separate tweens so neither overwrites the other.
```

### English · Codex
```text
Implement additive motion in <file>: .rig x 900 / 2s / power2.inOut, .item y 6 and rotation 2 / 0.2s / sine.inOut / yoyo repeat 9. Capture at 0.5s, 1.3s and 2.3s and verify the wobble persists along the main path and returns to 0 after arrival.
```

예시 / Example: 가산 모션를 `.hero`에 적용해. / Apply Additive Motion to `.hero`.

## 적용 / Application

- HyperFrames: 부모와 자식을 다른 tween으로 나누고 repeat 횟수를 명시해 timeline 길이를 고정한다. repeat: -1은 쓰지 않는다
- ReelForge: 씬 워커 브리프에 부모 경로, 자식 진폭과 주기를 별도 파라미터 두 묶음으로 싣는다
- Scrolline Deck: 진행률에 주 경로를 연결하고, 흔들림은 진행률 0.05 폭 사인으로 만든다. 진폭은 픽셀 그대로 두고 주기만 조정한다

조합 / Pair with: [오버랩 · Overlapping Action](../overlapping-action/) · [팔로스루 · Follow-through](../follow-through/) · [그룹 이동 · Group Motion](../group-motion/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#null-parent-rig`) (Apache-2.0) · [juliangarnier/anime](https://animejs.com/documentation/animation/tween-parameters/composition) (MIT) · motion dictionary 1-principles.md#3. 디즈니 12원칙 전체 (own) · [greensock/GSAP](https://gsap.com/docs/v3/GSAP/Timeline/) (GSAP Standard License)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
