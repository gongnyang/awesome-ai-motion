# Nº 431 셰이프 리피터 · Shape Repeater

> 클립 렌더 예정 / Clip rendering planned.

**같은 도형이 일정한 위치, 회전, 배율 차이로 복제되어 늘어나는 반복 구조**

The same shape multiplies with steady offsets in position, rotation and scale.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 순서·흐름, 분위기 | 설명 영상, 숏폼, 웹 UI | svg |

다른 이름 / Also known as: 도형 리피터, Repeater

## 선택 기준 / Selection

반복이 만드는 리듬과 패턴을 보여 준다. 하나의 규칙이 큰 구조를 만든다는 인상을 준다 / Shows the rhythm and pattern created by repetition, where one rule builds a large structure.

- 방사형 패턴이나 로고 주변 장식을 만들 때 / Radial patterns or logo decoration.
- 하나의 도형이 증식해 격자나 나선이 되는 것을 보일 때 / One shape multiplying into a grid or spiral.
- 규칙적 성장 개념을 시각으로 설명할 때 / Illustrate regular growth as a concept.

좋은 예 / Good: 원 하나가 24px 간격, 30도 회전, 배율 0.94씩 줄며 12개로 복제되어 800ms 안에 나선을 이룬다
나쁜 예 / Bad: 복제본 간격이 같아 단조롭거나, 개수가 30개를 넘어 하나하나가 구분되지 않는다
주의 / Avoid: 복제 수는 6~16개 범위로 한다 · 누적 배율은 0.9~0.97로 유지한다 · 시작은 첫 도형 하나만 보이고 나머지는 겹친 상태에서 펼친다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 0.8s | 0.5~1.4s | 펼침 |
| 개수 | 12 | 6~16 | 복제 |
| 간격 | 24px | 12~40px | 누적 x |
| 회전 | 30deg | 15~45deg | 누적 |
| 배율 | 0.94 | 0.9~0.97 | 누적 곱 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
copies.forEach((c, i) => {
  gsap.set(c, { x: 0, y: 0, rotation: 0, scale: 1 });
  tl.to(c, { x: i * 24, y: Math.sin(i * 0.5) * 12, rotation: i * 30, scale: Math.pow(0.94, i), duration: 0.8, ease: 'power3.out' }, 0.2 + i * 0.03);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <SVG 도형>을 12개 복제해 나선으로 펼쳐 줘. 모든 복제본은 겹친 상태로 시작해 0.2초부터 i*30ms 시차로 0.8초 동안 power3.out으로 x i*24px, rotation i*30도, scale 0.94의 i제곱이 되게 해. 복제는 로드 시 정적으로 만들고 Math.random은 쓰지 말고 paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>에 shape-repeater를 적용해. 복제본 i를 position 0.2+i*0.03, duration 0.8, ease power3.out으로 x=i*24, rotation=i*30, scale=0.94^i로 옮긴다. 0.2초는 한 덩어리로 겹침, 0.7초는 펼치는 중, 1.6초는 12개가 나선 위치에 있고 겹치지 않는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to unfurl 12 copies of <SVG shape> into a spiral. All copies start stacked; from 0.2 seconds, staggered by i*30ms, each moves over 0.8 seconds with power3.out to x i*24px, rotation i*30 degrees, scale 0.94^i. Create the copies statically at load, no Math.random, paused timeline.
```

### English · Codex
```text
Apply shape-repeater in <file>. Move copy i at position 0.2+i*0.03, duration 0.8, ease power3.out to x=i*24, rotation=i*30, scale=0.94^i. Capture 0.2s (stacked as one), 0.7s (unfurling) and 1.6s (12 copies on the spiral without overlap).
```

예시 / Example: 셰이프 리피터를 `.hero`에 적용해. / Apply Shape Repeater to `.hero`.

## 적용 / Application

- HyperFrames: 복제 12개를 로드 시 정적으로 생성하고 transform만 paused 타임라인에서 옮긴다. 개수 변화를 애니메이션하지 않는다
- ReelForge: 브리프에 기본 도형 SVG, 개수 12, 간격 24, 회전 30, 배율 0.94와 모드(방사·격자·나선)를 싣는다
- Scrolline Deck: 진행률 0~1을 복제본 i의 펼침 비율에 매핑한다. 인덱스가 커질수록 늦게 펼쳐지게 한다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [나선 조립 · Spiral Assembly](../spiral-assembly/) · [그라데이션 배열 모션 · Graded Array Motion](../graded-array-motion/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
