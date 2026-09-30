# Nº 438 지그재그 패스 · Zig Zag Path

> 클립 렌더 예정 / Clip rendering planned.

**매끈한 외곽에 반복되는 뾰족점이나 물결이 서서히 생기는 변형**

A smooth outline gains repeating sharp points or waves.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 강조, 분위기 | 숏폼, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: Zig Zag

## 선택 기준 / Selection

긴장감과 장식적 에너지를 만든다. 원이 톱니나 파도 테두리로 바뀌며 강한 인상을 준다 / Adds tension and decorative energy. A circle turns into a saw-toothed or wavy edge with strong impact.

- 배지나 스티커에 톱니 테두리를 만들 때 / Serrated edges for badges and stickers.
- 경고, 세일, 폭발 같은 강한 메시지의 윤곽을 만들 때 / Outlines for strong messages like warnings, sales or bursts.
- 부드러운 원을 물결 테두리로 바꿀 때 / Change a soft circle into a wavy border.

좋은 예 / Good: 원의 외곽이 700ms에 진폭 0에서 12px로 커지며 변마다 8개의 톱니가 생기고 마지막에 정지한다
나쁜 예 / Bad: 진폭이 커서 도형 본체가 무너지거나, 톱니 수가 많아 선이 떨리는 노이즈로 보인다
주의 / Avoid: 진폭은 도형 반지름의 15% 이하로 한다 · 톱니 수는 변 또는 둘레 기준 6~16개로 한다 · 각진 톱니와 물결은 한 도형에서 섞지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.7s | 0.4~1.0s | 진폭 성장 |
| 진폭 | 0→12px | 6~18px | 교대 법선 |
| 개수 | 8/변 | 6~16 | 일정 간격 |
| 타입 | 각진 | 각진/물결 | 선택 |
| 이징 | power2.out | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
const pts = 48, k = 8;
const path = (a) => Array.from({ length: pts }, (_, i) => {
  const t = (i / pts) * Math.PI * 2, r = 100 + (i % 2 ? a : -a);
  return `${i ? 'L' : 'M'}${(Math.cos(t) * r).toFixed(1)},${(Math.sin(t) * r).toFixed(1)}`;
}).join('') + 'Z';
const o = { a: 0 };
tl.to(o, { a: 12, duration: 0.7, ease: 'power2.out', onUpdate: () => el.setAttribute('d', path(o.a)) }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 SVG로 <원>의 외곽에 지그재그를 넣어줘. 둘레를 48점으로 샘플링해 점을 교대로 법선 방향 +a, -a로 이동한 path를 만들고, 0.3초부터 0.7초 동안 power2.out으로 a를 0에서 12px로 키워. 점 개수는 고정, 각진 톱니로 하고 마지막에 정지. 진폭은 반지름의 15% 이하, paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 도형에 zigzag-path를 적용해. path(a)는 48점을 교대 오프셋 ±a로 만든 문자열이고, tween 객체 a를 position 0.3, duration 0.7, ease power2.out으로 0→12, onUpdate에서 setAttribute('d', path(a)). 0.3초는 매끈한 원, 0.65초는 중간 진폭, 1.2초는 진폭 12의 톱니이며 본체가 무너지지 않았는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP and SVG to add a zigzag to the outline of <circle>. Sample the perimeter at 48 points, alternate them +a and -a along the normal, and grow a from 0 to 12px starting at 0.3 seconds over 0.7 seconds with power2.out. Fixed point count, angular teeth, then hold. Amplitude at most 15% of the radius, paused timeline.
```

### English · Codex
```text
Apply zigzag-path to the shape in <file>. path(a) builds a string from 48 points with alternating offsets +/-a; tween object a 0 to 12 at position 0.3, duration 0.7, ease power2.out and setAttribute('d', path(a)) in onUpdate. Capture 0.3s (smooth circle), 0.65s (mid amplitude) and 1.2s (amplitude 12, body intact).
```

예시 / Example: 지그재그 패스를 `.hero`에 적용해. / Apply Zig Zag Path to `.hero`.

## 적용 / Application

- HyperFrames: path 문자열을 진폭 a의 순수 함수로 만든다. 점 개수를 고정해 seek 시 형태가 안정적이다
- ReelForge: 브리프에 기본 도형, 진폭 12, 톱니 수, 타입(각진/물결)을 싣는다. 물결이면 사인 보간을 요청한다
- Scrolline Deck: 진행률 0~1을 진폭 0~12에 매핑한다. 스크럽으로 톱니가 자라는 과정을 볼 수 있다

조합 / Pair with: [퍼커 앤 블로트 · Pucker and Bloat](../pucker-bloat/) · [오프셋 패스 · Offset Path](../offset-path/) · [하드 섀도 팝 · Hard Shadow Pop](../hard-shadow-pop/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
