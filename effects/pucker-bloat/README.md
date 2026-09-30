# Nº 429 퍼커 앤 블로트 · Pucker and Bloat

> 클립 렌더 예정 / Clip rendering planned.

**꼭짓점과 곡선이 서로 반대 방향으로 당겨져 도형이 별이나 꽃처럼 바뀌는 변형**

Vertices and curves are pulled in opposite directions, turning a shape into a star or flower.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 강조, 분위기 | 숏폼, 설명 영상, 웹 UI | svg |

## 선택 기준 / Selection

도형의 성격이 날카롭게 또는 유연하게 바뀐다. 하나의 규칙으로 별과 꽃 사이를 오갈 수 있다 / Shifts a shape's character between sharp and soft. One rule moves between star and flower.

- 원이 별로 변하며 반짝임을 표현할 때 / A circle sharpening into a star to suggest a sparkle.
- 꽃잎처럼 부풀어 오르는 아이콘 등장을 만들 때 / A petal-like swelling icon entrance.
- 상태가 활성화되면 도형이 날카로워지는 UI 표현을 할 때 / A UI cue where an activated shape becomes sharper.

좋은 예 / Good: 원이 700ms에 amount 0에서 -35%로 당겨져 뾰족한 별이 되고, 반대로 +35%면 부푼 꽃이 된다
나쁜 예 / Bad: amount가 50%를 넘어 도형이 자기 자신과 교차하거나, 점 수가 적어 각진 다각형처럼 보인다
주의 / Avoid: amount 절댓값 40% 이하로 한다 · 꼭짓점 수는 5~12개로 한다 · 퍼커와 블로트를 한 번에 섞지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.7s | 0.4~1.0s | 변형 |
| amount | 0→-35% | -40~+40% | 음수 퍼커, 양수 블로트 |
| 꼭짓점 | 8 | 5~12 | 별의 가지 |
| 회전 | 15deg | 0~30deg | 선택 |
| 이징 | power2.inOut | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
const n = 8, R = 100;
const path = (a) => Array.from({ length: n * 2 }, (_, i) => {
  const t = (i / (n * 2)) * Math.PI * 2, r = R * (i % 2 ? 1 + a : 1 - a);
  return `${i ? 'L' : 'M'}${(Math.cos(t) * r).toFixed(1)},${(Math.sin(t) * r).toFixed(1)}`;
}).join('') + 'Z';
const o = { a: 0 };
tl.to(o, { a: 0.35, duration: 0.7, ease: 'power2.inOut', onUpdate: () => el.setAttribute('d', path(o.a)) }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 SVG로 <원>을 퍼커 앤 블로트로 별이 되게 만들어 줘. 반지름 100의 16점 원에서 짝수 점은 바깥으로, 홀수 점은 안쪽으로 amount만큼 이동한 path를 만들고, 0.3초부터 0.7초 동안 power2.inOut으로 amount를 0에서 0.35까지 키워 뾰족한 별로 만들어. 점 수 고정, 교차 금지, paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 도형에 pucker-bloat를 적용해. path(a)는 16점을 반지름 100*(1±a)로 교대 배치하고, tween 객체 a를 position 0.3, duration 0.7, ease power2.inOut으로 0→0.35, onUpdate에서 setAttribute('d', path(a)). 0.3초는 원, 0.65초는 중간, 1.2초는 8각 별이며 경로 자기교차가 없는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP and SVG to pucker <circle> into a star. On a 100 radius circle with 16 points, move even points outward and odd points inward by amount, and grow amount from 0 to 0.35 starting at 0.3 seconds over 0.7 seconds with power2.inOut into a pointed star. Fixed point count, no self intersection, paused timeline.
```

### English · Codex
```text
Apply pucker-bloat to the shape in <file>. path(a) alternates 16 points at radius 100*(1+/-a); tween object a 0 to 0.35 at position 0.3, duration 0.7, ease power2.inOut and setAttribute('d', path(a)) in onUpdate. Capture 0.3s (circle), 0.65s (midway) and 1.2s (8-point star with no self-intersection).
```

예시 / Example: 퍼커 앤 블로트를 `.hero`에 적용해. / Apply Pucker and Bloat to `.hero`.

## 적용 / Application

- HyperFrames: 꼭짓점 수를 고정한 순수 함수로 path를 만든다. 별과 꽃 전환은 amount 부호만 바꾼다
- ReelForge: 브리프에 도형, 꼭짓점 8, amount ±35%, 회전을 싣는다
- Scrolline Deck: 진행률 0~1을 amount 0~0.35에 매핑한다. 부호가 바뀌는 구간은 0에서 통과하게 한다

조합 / Pair with: [모프 전환 · Morph](../shape-morph/) · [지그재그 패스 · Zig Zag Path](../zigzag-path/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
