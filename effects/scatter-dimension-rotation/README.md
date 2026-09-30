# Nº 311 산점도 차원 회전 · Scatter Dimension Rotation

> 클립 렌더 예정 / Clip rendering planned.

**산점도의 점들이 깊이 방향으로 벌어진 뒤 회전해 새로운 변수 쌍의 평면으로 모인다**

Scatter points spread in depth, rotate, and regroup into the plane of a new variable pair.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 데이터 증명 | 데이터 스토리, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: Scatter depth expansion staging, 산점도 깊이 확장 단계화

## 선택 기준 / Selection

차원이 바뀌는 동안에도 각 점이 어디로 가는지 눈으로 추적하게 한다. 같은 데이터를 다른 관점으로 보는 것을 설명한다 / Lets viewers track each point while the dimensions change, explaining the same data from a different view.

- 산점도의 X-Y 축을 X-Z 축으로 바꿔 보여 줄 때 / Swap an X-Y scatter to X-Z axes.
- 차원 축소나 주성분 분석의 결과를 설명할 때 / Explain the result of dimensionality reduction or PCA.

좋은 예 / Good: 확장 400ms, 회전 600ms, 압축 400ms로 총 1400ms에 걸쳐 90도 회전한다. 직교 투영이라 점 크기가 일정하다
나쁜 예 / Bad: 점이 순간 이동해 새 축에 나타나 추적이 안 되거나, 원근 투영이라 앞쪽 점만 크고 뒤쪽이 사라진다
주의 / Avoid: 직교 투영 사용(점 크기 왜곡 방지) · 회전 중 점 색을 유지한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 확장 | 400ms | 300~500ms | z 방향으로 벌림 |
| 회전 | 600ms | 500~800ms | 90도 |
| 압축 | 400ms | 300~500ms | z를 0으로 |
| 회전 각 | 90도 |  | 새 변수 평면으로 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { z: 0, a: 0 };
tl.to(u, { z: 1, duration: 0.4, ease: 'power2.out', onUpdate: draw }, 0.3)
  .to(u, { a: Math.PI / 2, duration: 0.6, ease: 'power2.inOut', onUpdate: draw })
  .to(u, { z: 0, duration: 0.4, ease: 'power2.in', onUpdate: draw });
// draw: x' = x*cos(a) + z*sin(a); y' = y (직교 투영)
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 산점도가 X-Y 평면에서 X-Z 평면으로 바뀌게 해줘. 먼저 0.4초 동안 새 변수를 z 방향으로 확장하고, 0.6초 동안 90도 회전한 뒤, 0.4초 동안 새 평면에 압축해. 직교 투영을 쓰고 점 색은 유지해.
```

### 한국어 · Codex
```text
<파일>에 scatter dimension rotation을 구현해. 확장 0.4s power2.out, 회전 0.6s power2.inOut(90도), 압축 0.4s power2.in, 직교 투영. 0.5초, 1.0초, 1.6초에 캡처해 점 개수와 색이 유지되는지, 1.7초에 모든 점이 새 평면에 있는지 확인해.
```

### English · Claude Code
```text
Change the scatter plot in <target> from the X-Y plane to the X-Z plane. First expand the new variable along z for 0.4 seconds, rotate 90 degrees over 0.6 seconds, then compress onto the new plane in 0.4 seconds. Use orthographic projection and keep point colors.
```

### English · Codex
```text
Implement scatter dimension rotation in <file>: expand 0.4s power2.out, rotate 0.6s power2.inOut (90 degrees), compress 0.4s power2.in, orthographic projection. Capture at 0.5s, 1.0s and 1.6s and verify point count and colors are preserved and all points lie on the new plane at 1.7s.
```

예시 / Example: 산점도 차원 회전를 `.hero`에 적용해. / Apply Scatter Dimension Rotation to `.hero`.

## 적용 / Application

- HyperFrames: 세 tween을 순차 배치한 하나의 타임라인. draw는 u 값만으로 점 위치를 계산하므로 seek 결정론
- ReelForge: 씬 브리프에 점 데이터 배열, 이전/새 변수 이름, 세 단계 시간을 싣는다
- Scrolline Deck: 진행률 0~0.29 확장, 0.29~0.71 회전, 0.71~1 압축으로 나눈다. scrub은 이 세 구간을 순서대로 통과한다

조합 / Pair with: [축 범위 전환 · Axis Rescaling](../axis-rescale/) · [점 재배치 · Dot Regroup](../dot-regroup/) · [평면 공간 변형 · Plane Transformation](../plane-transformation/)

출처 / Sources: [NilsRodrigues/d3-scattertrans](https://github.com/NilsRodrigues/d3-scattertrans) (MIT) · [Rodrigues et al. 2024](https://arxiv.org/abs/2401.04692) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
