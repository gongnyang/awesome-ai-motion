# Nº 410 충돌 밀어내기 · Collision Displacement

> 클립 렌더 예정 / Clip rendering planned.

**들어오는 요소가 기존 요소에 닿는 순간 그 요소를 같은 방향으로 밀어내는 움직임**

An incoming element hits an existing one and pushes it along with the same force.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 설명, 피드백 | 설명 영상, 숏폼, 웹 UI | gsap |

다른 이름 / Also known as: 충돌 밀림, Collision Displace, reactive-displacement

## 선택 기준 / Selection

두 움직임이 원인과 결과로 읽힌다. 새 정보가 기존 정보를 밀어내는 교체를 물리적 사건으로 보여 준다 / Makes two motions read as cause and effect. A new piece of information physically displaces the old one.

- 새 뉴스 티커가 기존 문구를 밀어낼 때 / A new ticker headline pushing out the old line.
- 카드 하나가 들어오며 옆 카드를 자리에서 밀 때 / One card entering and shoving its neighbor aside.
- 새 항목이 목록에 끼어드는 순간을 설명할 때 / Explaining a new item being inserted into a list.

좋은 예 / Good: 새 카드가 900ms 동안 들어오다 40% 지점에서 기존 카드에 닿고, 기존 카드가 80px 밀려나며 살짝 튕겨 자리를 잡는다
나쁜 예 / Bad: 접촉 전에 상대가 미리 움직이거나, 밀림 거리가 커서 카드가 화면 밖으로 사라진다
주의 / Avoid: 접촉 시점 이전에는 상대가 움직이면 안 된다 · 밀림 거리는 들어오는 요소 폭의 절반 이내로 한다 · back.out 값 2 초과는 과하게 튄다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 0.9s | 0.6~1.3s | 진입과 밀림 합산 |
| 접촉 시점 | 40% | 30~55% | 진입 진행률 기준 |
| 밀림 거리 | 80px | 40~140px | 상대 요소 x |
| 이징 | back.out(1.5) | back.out(1)~(2) | 밀린 뒤 살짝 되돌림 |

## 구현 / Implementation (GSAP)

```js
const hit = 0.9 * 0.4; // 접촉 시각 0.36s
tl.fromTo('.incoming', { x: -700 }, { x: 0, duration: 0.9, ease: 'power2.in' }, 0);
tl.to('.target', { x: 80, duration: 0.5, ease: 'back.out(1.5)' }, hit);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP 타임라인으로 <대상>이 왼쪽에서 들어와 기존 요소 <대상2>를 밀어내게 해줘. 진입은 0.9초 power2.in으로 x -700에서 0까지, 접촉은 진입의 40%인 0.36초 시점. 그 시점부터 대상2가 x 80px 밀려나고 0.5초 back.out(1.5)로 자리를 잡게 해. 접촉 전에는 대상2가 움직이지 않고 paused 타임라인 하나로 작성해.
```

### 한국어 · Codex
```text
<파일>에 collision-displacement를 적용해. 접촉 시각 hit=0.36을 상수로 두고 .incoming은 position 0, duration 0.9, ease power2.in, .target은 position hit, x 80, duration 0.5, ease back.out(1.5). 0.30초에는 .target이 x 0인지, 0.45초에는 밀리는 중인지, 1.6초에는 x 80에 안착했는지 캡처로 확인해.
```

### English · Claude Code
```text
Use a GSAP timeline so <target> slides in from the left and pushes <target2>. Entry takes 0.9 seconds with power2.in from x -700 to 0; contact happens at 40% of it, 0.36 seconds. From then target2 moves 80px over 0.5 seconds with back.out(1.5). Target2 must not move before contact. One paused timeline.
```

### English · Codex
```text
Apply collision-displacement in <file>. Keep contact time hit=0.36 as a constant; .incoming at position 0, duration 0.9, ease power2.in; .target at position hit, x 80, duration 0.5, ease back.out(1.5). Capture 0.30s (target still at x 0), 0.45s (being pushed) and 1.6s (settled at x 80).
```

예시 / Example: 충돌 밀어내기를 `.hero`에 적용해. / Apply Collision Displacement to `.hero`.

## 적용 / Application

- HyperFrames: 접촉 시각을 상수 하나로 두고 두 트윈의 position을 그 값에서 파생한다. seek해도 접촉 프레임이 어긋나지 않는다
- ReelForge: 씬 브리프에 진입 요소, 대상 요소, 접촉 비율 0.4, 밀림 80px를 넘긴다. 접촉 프레임에 효과음 큐를 붙일 수 있다
- Scrolline Deck: 진행률 0.4에서 접촉하도록 두 트윈을 진행률 구간으로 나눈다. back.out 대신 ease-out으로 대체해도 읽힌다

조합 / Pair with: [팔로스루 · Follow-through](../follow-through/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/) · [푸시 전환 · Push](../push-transition/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/reactive-displacement.md`) (unknown) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/ticker-takeover.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
