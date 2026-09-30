# Nº 563 동적 반사 · Dynamic Reflection

> 클립 렌더 예정 / Clip rendering planned.

**주변 물체나 조명이 움직이면 거울 같은 표면 안의 반사도 함께 이동한다**

When surrounding objects or lights move, the reflection inside a mirror-like surface moves with them.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 강조, 분위기 | 제품 시연, 설명 영상, 숏폼 | webgl |

## 선택 기준 / Selection

반사면과 주변 공간의 위치 관계를 보여 준다. 물체가 실제 공간 안에 있다는 신뢰감을 만든다 / Shows the spatial relationship between the reflective surface and its surroundings, building trust that the object sits in real space.

- 금속이나 유리 제품이 주변 조명 아래 돌아가는 장면을 만들 때 / Show a metal or glass product turning under surrounding lights.
- 반사면에 다른 오브젝트의 움직임이 비치게 할 때 / Let another object's movement appear in a reflective surface.

좋은 예 / Good: 반사 해상도 256px, 거칠기 0.1의 구체가 30도/s로 5초 동안 회전하고 주변의 밝은 패널이 그 안에서 이동한다
나쁜 예 / Bad: 반사 해상도가 32px라 뭉개져 보이거나, 반사가 고정된 환경맵이라 주변이 움직여도 반사는 그대로다
주의 / Avoid: 반사 해상도 128px 이상 · 거칠기 0.3 초과 시 거울 느낌이 사라짐

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 반사 해상도 | 256px | 128~512px | 큐브맵 또는 반사 카메라 |
| 거칠기 | 0.1 | 0~0.3 | 낮을수록 거울 |
| 대상 회전 | 30도/s | 15~45도/s |  |
| 길이 | 5s | 4~6s |  |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { a: 0 };
tl.to(u, { a: 150, duration: 5, ease: 'none', onUpdate: () => { orb.rotation.y = u.a * Math.PI / 180; panel.position.x = Math.sin(u.a * Math.PI / 180) * 3; cubeCam.update(renderer, scene); render(); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 구체에 동적 반사를 넣어줘. 큐브맵 반사 해상도 256px, 거칠기 0.1로 두고 구체를 30도/s로 5초 동안 회전시키면서 주변의 밝은 패널이 x축으로 움직이게 해. 매 프레임 큐브 카메라를 갱신해서 반사 안의 패널이 함께 움직이게 해.
```

### 한국어 · Codex
```text
<파일>에 dynamic reflection을 구현해. CubeCamera 256px, 거칠기 0.1, 구체 회전 30도/s, 패널 x = sin(a)*3, 5s, ease none. 큐브 카메라는 onUpdate에서 명시 갱신. 0초, 2.5초, 5초를 캡처해 구체 안의 패널 반사가 위치를 바꾸는지, 두 번 seek해도 같은 프레임인지 확인해.
```

### English · Claude Code
```text
Add dynamic reflection to the sphere in <target>. Use a cubemap reflection at 256px with roughness 0.1, rotate the sphere at 30 deg/s for 5 seconds while a bright panel moves along the x axis around it. Update the cube camera every frame so the panel moves inside the reflection.
```

### English · Codex
```text
Implement dynamic reflection in <file>: CubeCamera 256px, roughness 0.1, sphere rotation 30 deg/s, panel x = sin(a)*3, 5s, ease none. Update the cube camera explicitly in onUpdate. Capture at 0s, 2.5s and 5s and verify the panel reflection changes position and seeking twice gives identical frames.
```

예시 / Example: 동적 반사를 `.hero`에 적용해. / Apply Dynamic Reflection to `.hero`.

## 적용 / Application

- HyperFrames: 큐브 카메라 업데이트를 onUpdate에서 명시적으로 호출한다. 자동 갱신에 의존하지 않아야 seek가 정확하다
- ReelForge: 씬 브리프에 반사 해상도, 거칠기, 회전 속도, 반사될 오브젝트 목록을 싣는다
- Scrolline Deck: 진행률을 회전각 0~150도에 매핑한다. 반사 갱신은 진행률이 바뀔 때만 한다

조합 / Pair with: [프레넬 림 · Fresnel Rim Sweep](../fresnel-rim/) · [홀로그램 광택 · Holographic sheen](../holographic-sheen/) · [유리 굴절 · Glass Refraction](../glass-refraction/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgl_materials_cubemap_dynamic) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_mirror) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
