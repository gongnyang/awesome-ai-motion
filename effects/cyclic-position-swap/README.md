# Nº 418 순환 자리 교환 · Cyclic Position Swap

> 클립 렌더 예정 / Clip rendering planned.

**둘 이상의 대상이 원호를 따라 서로의 자리로 이동한다**

Two or more objects move along arcs into each other's positions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 설명, 비교 | 설명 영상, 발표, 데이터 스토리 | gsap |

다른 이름 / Also known as: CyclicReplace, Swap

## 선택 기준 / Selection

순서가 바뀌었다는 사실과 누가 어디로 갔는지를 함께 보여 준다. 치환과 회전의 관계를 추적하게 한다 / Shows that the order changed and who went where, letting viewers trace the permutation and rotation.

- 두 카드나 항목의 위치를 바꾸는 장면을 명확하게 보여 줄 때 / Swap two cards or items clearly.
- 세 항목 이상이 한 칸씩 돌아가는 순환을 설명할 때 / Explain a cycle where three or more items shift by one slot.

좋은 예 / Good: 두 카드가 900ms 동안 90도 원호를 그리며 서로의 자리로 이동한다. 한쪽은 위로, 다른 쪽은 아래로 돌아가 겹치지 않는다
나쁜 예 / Bad: 직선으로 교차해 서로를 통과하며 겹치거나, 도착 시각이 달라 한 카드가 먼저 서 있다
주의 / Avoid: 두 카드가 원호 반대편으로 지나가게 한다 · 동시에 출발해 동시에 도착한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 700~1200ms |  |
| 원호 | 90도 | 60~180도 | 중심에서 반원 |
| 반경 | 두 위치 사이 거리의 절반 |  | 교환 시 지름 |
| 이징 | power2.inOut |  |  |

## 구현 / Implementation (GSAP)

```js
// A(x=400) ↔ B(x=1200): 중심 800, 반경 400, 각도 180도 회전
const u = { a: 0 };
tl.to(u, { a: Math.PI, duration: 0.9, ease: 'power2.inOut', onUpdate() {
  gsap.set('.A', { x: 800 - 400 * Math.cos(u.a), y: -160 * Math.sin(u.a) });
  gsap.set('.B', { x: 800 + 400 * Math.cos(u.a), y: 160 * Math.sin(u.a) }); } }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 두 카드 A와 B의 자리를 바꿔줘. A는 x 400, B는 x 1200에서 시작해 0.9초 동안 중심 x 800을 기준으로 반원을 그리며 서로의 자리로 이동하게 해. A는 위쪽 160px 반원, B는 아래쪽 반원으로 지나가 겹치지 않게 하고 이징은 power2.inOut.
```

### 한국어 · Codex
```text
<파일>에 cyclic position swap을 구현해. 각도 a 0→π, 0.9s, power2.inOut, A는 y -160*sin(a), B는 +160*sin(a), 중심 x 800, 반경 400. 0.5초, 0.75초, 1.2초를 캡처해 두 카드가 반대편으로 지나가고 1.2초에 자리가 정확히 바뀌었는지 확인해.
```

### English · Claude Code
```text
Swap cards A and B in <target>. A starts at x 400 and B at x 1200, and over 0.9 seconds they move into each other's places along semicircles around center x 800. A arcs 160px above and B below so they never overlap, with power2.inOut.
```

### English · Codex
```text
Implement cyclic position swap in <file>: angle a 0 to pi, 0.9s, power2.inOut, A y -160*sin(a), B +160*sin(a), center x 800, radius 400. Capture at 0.5s, 0.75s and 1.2s and verify the cards pass on opposite sides and their places are exactly swapped at 1.2s.
```

예시 / Example: 순환 자리 교환를 `.hero`에 적용해. / Apply Cyclic Position Swap to `.hero`.

## 적용 / Application

- HyperFrames: 각도 a 하나만 tween하고 위치는 onUpdate에서 계산한다. 두 대상이 항상 대칭이라 겹침이 없다
- ReelForge: 씬 브리프에 두 대상의 시작 x, 반경 높이, 지속을 싣는다
- Scrolline Deck: 진행률을 각도 0~π에 대응시킨다. 되감기해도 같은 원호를 거꾸로 돈다

조합 / Pair with: [아크 · Arcs](../arc-motion/) · [순위 재배치 · Rank Transition](../rank-transition/) · [선택 영역 이동 · Selection Travel](../selection-travel/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
