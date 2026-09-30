# Nº 564 분해도 조립 · Exploded Assembly

> 클립 렌더 예정 / Clip rendering planned.

**제품의 부품들이 축을 따라 벌어져 내부 구조를 보여 준 뒤 한 몸체로 다시 모인다**

A product's parts separate along an axis to reveal its internal structure, then gather back into one body.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 설명, 순서·흐름 | 제품 시연, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: Exploded product assembly, 제품 분해와 조립

## 선택 기준 / Selection

외형 안의 구조와 부품 관계를 이해하게 한다. 무엇이 어디에 들어가는지 순서대로 알려 준다 / Helps viewers understand structure inside the exterior and how parts relate, and shows what goes where in order.

- 제품 내부의 부품 구성을 설명할 때 / Explain the component makeup inside a product.
- 조립 순서를 단계별로 안내할 때 / Guide an assembly order step by step.

좋은 예 / Good: 1800ms 동안 부품 5개가 축을 따라 80px 간격으로 벌어지고, 100ms 시차로 순서대로 다시 결합한다. easeInOut
나쁜 예 / Bad: 부품이 모두 동시에 같은 거리만 벌어져 구분이 안 되거나, 벌어진 축이 매번 달라 방향을 알 수 없다
주의 / Avoid: 벌어짐은 한 축으로만 · 부품 라벨은 벌어진 상태에서만 켠다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1800ms | 1400~2400ms | 벌림 900 + 결합 900 |
| 부품 간격 | 80px | 50~120px | 축 방향 |
| 시작 차이 | 100ms | 60~150ms | 부품별 stagger |
| 이징 | power2.inOut |  |  |

## 구현 / Implementation (GSAP)

```js
parts.forEach((p, i) => {
  tl.to(p.position, { y: (i - 2) * 80, duration: 0.9, ease: 'power2.inOut' }, 0.3 + i * 0.1);
  tl.to(p.position, { y: 0, duration: 0.9, ease: 'power2.inOut' }, 1.8 + (4 - i) * 0.1);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제품 모델의 부품 5개를 분해도로 보여줘. y축을 따라 중심 부품 기준 80px 간격으로 0.9초 동안 벌리고 부품마다 0.1초 시차를 둬. 벌어진 상태에서 라벨을 켜고, 1.8초부터 반대 순서로 0.9초 동안 결합. 이징 power2.inOut.
```

### 한국어 · Codex
```text
<파일>에 exploded assembly를 구현해. 부품 5개, y = (i-2)*80, 벌림 0.9s, 결합 0.9s, 시차 0.1s, ease power2.inOut. 0.3초, 1.2초, 1.8초, 2.9초를 캡처해 1.2초에 간격이 80px 단위인지, 2.9초에 모든 부품 y가 0인지 확인해.
```

### English · Claude Code
```text
Show the 5 parts of the product model in <target> as an exploded view. Spread them along the y axis with 80px spacing around the center part over 0.9 seconds with a 0.1s stagger between parts. Turn labels on while spread, and from 1.8 seconds reassemble in reverse order over 0.9 seconds with power2.inOut.
```

### English · Codex
```text
Implement exploded assembly in <file>: 5 parts, y = (i-2)*80, spread 0.9s, assemble 0.9s, stagger 0.1s, ease power2.inOut. Capture at 0.3s, 1.2s, 1.8s and 2.9s and verify spacing is in 80px units at 1.2s and every part y is 0 at 2.9s.
```

예시 / Example: 분해도 조립를 `.hero`에 적용해. / Apply Exploded Assembly to `.hero`.

## 적용 / Application

- HyperFrames: Three.js의 각 부품 position.y를 타임라인으로 tween한다. 렌더는 onUpdate에서 한 번씩만
- ReelForge: 씬 브리프에 부품 목록, 축, 간격, 라벨 문구, 벌림/결합 순서를 싣는다
- Scrolline Deck: 진행률 0~0.5에서 벌림, 0.5~1에서 결합. 정지 홀드 구간에서 라벨을 읽게 한다

조합 / Pair with: [레이어 분리와 재결합 · Layer Separation](../layer-separation/) · [3D 조립 · Depth Assemble](../depth-assemble/) · [조각 조립 · Piece Assembly](../piece-assembly/)

출처 / Sources: [Apple](https://www.apple.com/apple-events/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
