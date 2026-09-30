# Nº 411 마그네틱 왜곡 · Magnetic Distortion

> 클립 렌더 예정 / Clip rendering planned.

**움직이는 접점 주위의 픽셀이나 덩어리가 끌려갔다가 원래대로 돌아오는 왜곡**

Pixels or a soft blob around a moving touch point are pulled toward it, then spring back.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 강조, 주목 끌기 | 제품 시연, 숏폼, 웹 UI | webgl |

다른 이름 / Also known as: 자석 왜곡

## 선택 기준 / Selection

한 지점에 시선이 끌리고 화면이 젤리처럼 유연한 재질이라는 인상이 남는다 / Draws the eye to one spot and makes the surface feel like a flexible material.

- 커서나 손가락이 닿은 곳을 강조할 때 / Emphasize where a cursor or finger touches.
- 젤리 같은 로고나 블롭이 반응하는 인터랙션을 보일 때 / Show a jelly-like logo or blob reacting to input.
- 전환 직전 한 점으로 화면을 끌어당길 때 / Pull the whole frame to one point right before a transition.

좋은 예 / Good: 접점이 화면을 가로지르는 동안 반경 180px 안의 픽셀이 접점 쪽으로 끌리고 500ms에 걸쳐 원래 위치로 복구된다
나쁜 예 / Bad: 강도가 0.15를 넘어 이미지가 찢어져 보이거나, 복구가 없어 화면이 영구히 일그러진다
주의 / Avoid: 강도 0.1 초과 금지(이미지가 깨짐) · 가독성이 필요한 본문 글자 위에는 쓰지 않는다 · 접점 경로는 시드 곡선으로 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 반경 | 180px | 120~260px | 가우시안 영향 범위 |
| 강도 | 0.06 | 0.03~0.10 | UV 이동량 |
| 복구 시간 | 500ms | 300~800ms | 접점 이탈 후 |
| 접점 속도 | 900px/s | 500~1400px/s | 경로 이동 |
| 이징 | expo.out | power3~expo | 복구 |

## 구현 / Implementation (GSAP)

```js
// 셰이더 uniform을 GSAP로 구동
const u = { x: 300, y: 540, k: 0.06 };
tl.to(u, { x: 1600, y: 500, duration: 1.4, ease: 'sine.inOut', onUpdate: () => mat.uniforms.uPoint.value.set(u.x, u.y) }, 0);
tl.to(u, { k: 0, duration: 0.5, ease: 'expo.out', onUpdate: () => mat.uniforms.uK.value = u.k }, 1.4);
// frag: uv += normalize(p - uv) * uK * exp(-dot(d,d) / (r*r))
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
WebGL 셰이더로 <이미지>에 마그네틱 왜곡을 넣어줘. 접점이 (300,540)에서 (1600,500)으로 1.4초 sine.inOut으로 움직이고, 반경 180px 안의 UV가 접점 쪽으로 강도 0.06만큼 가우시안으로 끌리게 해. 1.4초에 접점이 멈추면 강도를 0.5초 expo.out으로 0으로 돌려 복구해. uniform은 GSAP 타임라인이 구동하고 paused, seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 셰이더에 uPoint, uK, uRadius(180) uniform을 두고 uv += normalize(p-uv)*uK*exp(-d²/r²)로 왜곡해. GSAP tween으로 접점 이동 1.4초, uK 0.06에서 0으로 복구 0.5초를 건다. 0.7초에는 접점 근처만 휘고, 1.4초에 최대, 2.0초에 원본과 픽셀 차이가 0인지 캡처 대조로 확인해.
```

### English · Claude Code
```text
Use a WebGL shader to add magnetic distortion to <image>. A touch point travels from (300,540) to (1600,500) over 1.4 seconds with sine.inOut; UVs within 180px are pulled toward it with a Gaussian falloff at strength 0.06. When it stops at 1.4 seconds, return strength to 0 over 0.5 seconds with expo.out. Drive uniforms from a paused, seekable GSAP timeline.
```

### English · Codex
```text
In the shader in <file>, add uniforms uPoint, uK and uRadius(180) and displace uv += normalize(p-uv)*uK*exp(-d^2/r^2). Tween the point over 1.4s and uK from 0.06 to 0 over 0.5s. Capture 0.7s (only the area near the point bends), 1.4s (maximum) and 2.0s (pixel diff against the source is 0).
```

예시 / Example: 마그네틱 왜곡를 `.hero`에 적용해. / Apply Magnetic Distortion to `.hero`.

## 적용 / Application

- HyperFrames: WebGL 렌더는 seek 시 uniform만 갱신하고 requestAnimationFrame에 의존하지 않는다. 캡처는 프레임 시각을 명시해 찍는다
- ReelForge: 브리프에 접점 경로 좌표, 반경 180, 강도 0.06, 복구 500ms를 실는다. 셰이더 텍스처는 정지 이미지로 받는다
- Scrolline Deck: 진행률 0~1을 접점 경로 위치에 매핑한다. 복구는 진행률이 멈출 때 ease-out으로 처리한다

조합 / Pair with: [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [볼록 렌즈 · Bulge Lens](../bulge-lens/) · [입자 힘장 · Particle Force Field](../particle-force-field/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-magnetic/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/soft-blob-touch/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
