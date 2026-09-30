# Nº 417 곡선 따라 휘기 · Curve Guided Deformation

> 클립 렌더 예정 / Clip rendering planned.

**긴 물체가 구부러진 경로를 따라 미끄러지면서 경로에 맞춰 함께 휜다**

A long object slides along a bent path while bending to match it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: 곡선 안내 변형

## 선택 기준 / Selection

유연한 전달 경로와 물체의 연속 이동을 보여 준다. 파이프를 따라 흐르는 것이나 리본이 감기는 모습을 자연스럽게 만든다 / Shows a flexible transmission path and continuous movement, such as flow along a pipe or a ribbon coiling.

- 리본이나 케이블이 곡선 경로를 따라 이동하는 장면을 만들 때 / Move a ribbon or cable along a curved path.
- 글자나 띠가 곡선을 타고 흐르게 할 때 / Have text or a band flow along a curve.

좋은 예 / Good: 경로 길이 6단위를 1.5단위/s로 4초 동안 linear로 이동한다. 단면 12점이 경로의 접선에 맞춰 휜다
나쁜 예 / Bad: 경로와 무관하게 직선으로 이동하며 회전만 하거나, 곡률이 급한 곳에서 단면이 접혀 찢어진다
주의 / Avoid: 곡률 반경은 물체 두께의 3배 이상 · 속도는 linear로 일정하게

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 경로 길이 | 6단위 | 4~8 | 곡선 전체 |
| 속도 | 1.5단위/s | 1~2단위/s | linear |
| 단면 점 | 12 | 8~24 | 휘어짐 해상도 |
| 길이 | 4s | 3~5s |  |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { s: 0 };
tl.to(u, { s: 6, duration: 4, ease: 'none', onUpdate: () => mat.uniforms.uOffset.value = u.s }, 0);
// vertex: float d = position.x + uOffset; vec3 P = curve.pointAt(d/6.); vec3 T = curve.tangentAt(d/6.); pos = P + frame(T) * position.yz;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 리본이 곡선 경로를 따라 미끄러지며 휘게 해줘. 경로 길이 6단위를 1.5단위/s, linear로 4초 동안 이동하고 단면 12점을 경로 접선 프레임에 맞춰 정점 셰이더에서 변형해. uOffset은 타임라인 tween으로만 올려.
```

### 한국어 · Codex
```text
<파일>에 curve guided deformation을 구현해. uOffset 0→6 / 4s / ease none, 단면 12점, 경로 접선 프레임으로 정점 변형. 0초, 2초, 4초를 캡처해 리본이 경로 곡률에 맞춰 휘는지, 곡률이 큰 곳에서 단면이 접히지 않는지 확인해.
```

### English · Claude Code
```text
Make the ribbon in <target> slide and bend along a curved path. Move 6 units of path length at 1.5 units/s with linear timing over 4 seconds, deforming 12 cross-section points to the path tangent frame in the vertex shader. Drive uOffset only from a timeline tween.
```

### English · Codex
```text
Implement curve guided deformation in <file>: uOffset 0 to 6 / 4s / ease none, 12 cross-section points, vertex deformation on the path tangent frame. Capture at 0s, 2s and 4s and verify the ribbon follows the path curvature and the cross-section does not fold at high curvature.
```

예시 / Example: 곡선 따라 휘기를 `.hero`에 적용해. / Apply Curve Guided Deformation to `.hero`.

## 적용 / Application

- HyperFrames: uOffset을 paused 타임라인 tween으로 올린다. 곡선 조회는 결정론적 함수로 두고 곡선 점 배열은 미리 샘플링한다
- ReelForge: 씬 브리프에 경로 좌표, 물체 길이, 속도, 단면 점 수를 싣는다
- Scrolline Deck: 진행률을 경로 위 오프셋 0~6에 선형으로 대응시킨다. 되감기하면 경로를 거꾸로 이동한다

조합 / Pair with: [경로 컨베이어 · Path Conveyor](../path-conveyor/) · [오프셋 패스 · Offset Path](../offset-path/) · [벤드 · Bend](../bend/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgl_modifier_curve_instanced) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_modifier_curve) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
