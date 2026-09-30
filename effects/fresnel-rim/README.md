# Nº 442 프레넬 림 · Fresnel Rim Sweep

> 클립 렌더 예정 / Clip rendering planned.

**회전하는 물체의 가장자리가 시선과 비스듬해질수록 밝아지고, 광택 띠가 회전을 따라 표면 위를 지나간다**

An object rotates while its grazing edges brighten and a soft sheen travels across the surface.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 강조, 분위기 | 제품 시연, 설명 영상, 숏폼 | webgl |

다른 이름 / Also known as: 프레넬 테두리 광택

## 선택 기준 / Selection

윤곽과 재질이 또렷해지고 물체가 평면이 아니라 부피를 가진 것으로 읽힌다. 유리나 금속 같은 표면 성질도 함께 전해진다 / Outlines and material read clearly, and the object feels volumetric rather than flat. It also suggests glass or metal.

- 3D 제품이나 아이콘을 돌려 보이며 윤곽과 재질을 살리고 싶을 때 / Show a 3D product or icon turning to bring out its silhouette and material.
- 어두운 배경 위에서 물체의 실루엣을 한 번에 읽히게 하고 싶을 때 / Make a shape read instantly against a dark background.

좋은 예 / Good: 어두운 배경의 구체가 5초 동안 20도/s로 돌고, 가장자리에만 청백색 림이 밝게 걸려 윤곽이 또렷하다
나쁜 예 / Bad: 림 강도를 1.0 이상으로 올려 물체 전체가 흰 테두리로 번지거나, 회전 없이 정지해 빛이 죽어 보인다
주의 / Avoid: 광택 강도 0.9 초과 금지(윤곽이 번져 형태가 무너짐) · 텍스트나 표처럼 읽기가 우선인 요소에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 프레넬 지수 | 3 | 2~5 | 클수록 림이 가장자리에 좁게 붙음 |
| 광택 강도 | 0.7 | 0.4~0.9 | 림 최대 밝기 |
| 회전 속도 | 20도/s | 10~30도/s | 5초 동안 100도 |
| 지속 | 5s | 4~6s | 루프 없이 한 바퀴 미만 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { rot: 0 };
tl.to(u, { rot: Math.PI * 100 / 180, duration: 5, ease: 'none',
  onUpdate: () => mat.uniforms.uRot.value = u.rot }, 0);
// GLSL: float f = pow(1.0 - max(dot(N, V), 0.0), 3.0); color += rimColor * f * 0.7;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>(구체 또는 로고 메시)에 프레넬 림을 넣어줘. 5초 동안 20도/s로 회전시키고, 림은 dot(N,V) 기반 지수 3, 강도 0.7의 청백색으로 가장자리에만 걸리게 해. 배경은 어두운 단색으로 두고 uniform을 GSAP 타임라인 하나로 구동해 seek해도 같은 프레임이 나오게 만들어.
```

### 한국어 · Codex
```text
<파일>의 WebGL 물체 셰이더에 프레넬 림 항을 추가해. 지수 3, 강도 0.7, 회전은 20도/s, 5초, ease none. Math.random이나 Date.now는 쓰지 말고 timeline progress로만 uTime을 구동한다. 0초, 2.5초, 5초 시점을 캡처해 림이 가장자리에만 있고 중앙은 어두운지, 회전에 따라 밝은 위치가 이동하는지 확인해.
```

### English · Claude Code
```text
Add a Fresnel rim to <target> (a sphere or logo mesh). Rotate it at 20 deg/s for 5 seconds. Use a dot(N,V) rim with exponent 3 and intensity 0.7 in a cool white, hugging only the edges, over a dark flat background. Drive the uniforms from one GSAP timeline so seeking gives identical frames.
```

### English · Codex
```text
Add a Fresnel rim term to the WebGL object shader in <file>: exponent 3, intensity 0.7, rotation 20 deg/s over 5 seconds, ease none. No Math.random or Date.now; drive uTime only from timeline progress. Capture at 0s, 2.5s and 5s and verify the rim sits only on the edges, the center stays dark, and the bright region moves with the rotation.
```

예시 / Example: 프레넬 림를 `.hero`에 적용해. / Apply Fresnel Rim Sweep to `.hero`.

## 적용 / Application

- HyperFrames: uniform 값을 paused 타임라인의 tween으로 바꾸고 onUpdate에서 렌더한다. seek 때 같은 프레임이 나오도록 requestAnimationFrame 시계는 쓰지 않는다
- ReelForge: 씬 워커 브리프에 지수 3, 강도 0.7, 회전 20도/s, 림 색을 파라미터로 싣는다. 물체는 씬마다 하나만 둔다
- Scrolline Deck: 진행률 0..1을 회전각 0~100도에 선형으로 대응시킨다. scrub 중에도 방향이 뒤집히지 않도록 ease는 none으로 둔다

조합 / Pair with: [홀로그램 광택 · Holographic sheen](../holographic-sheen/) · [이동 광원 · Moving Light](../moving-light/) · [유리 굴절 · Glass Refraction](../glass-refraction/)

출처 / Sources: [oframe/ogl](https://oframe.github.io/ogl/examples/fresnel.html) (unknown) · [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
