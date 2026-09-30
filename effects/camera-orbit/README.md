# Nº 226 카메라 오빗 · Camera Orbit

> 클립 렌더 예정 / Clip rendering planned.

**대상이 중앙에 머무는 동안 시점이 주변을 돌아 옆면과 배경 관계가 바뀐다. 구형 지도는 회전으로 목적지를 정면에 맞출 수 있다.**

Orbit a centered subject to reveal its shape and changing background relationships.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 고급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | webgl |

다른 이름 / Also known as: Turntable Orbit, 턴테이블 오빗, camera-orbit-turntable, 카메라 공전, Orbital camera, Globe destination rotation, 지구 목적지 회전

## 선택 기준 / Selection

같은 대상의 입체 형태와 공간상의 방향을 보여준다. / Conveys three-dimensional form and orientation.

- 제품의 앞면과 옆면을 이어 보여줄 때 / Reveal the front and side of a product.
- 구형 지도의 목적지를 정면에 맞출 때 / Bring a globe destination to the front.

좋은 예 / Good: 반경 600px를 유지하며 2.4초 동안 60도 돌아 제품 옆면을 보여준다.
나쁜 예 / Bad: 반경이 흔들려 공전 도중 제품 크기가 달라진다.
주의 / Avoid: 중심점과 반경을 먼저 고정한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 2400ms | 1600~3600ms | 측면을 읽을 시간 |
| 방위각 변화 | 60deg | 30~120deg | 중심 주위 이동 |
| 고도 | 20deg | 10~35deg | 위에서 보는 각도 |
| 반경 | 600px | 400~900px | 대상과 거리 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {a:0};
const r = 600, h = 20*Math.PI/180;
camera.fov = 45; camera.updateProjectionMatrix();
tl.to(s, {a:Math.PI/3, duration:2.4, ease:'power2.inOut', onUpdate:()=>{
  camera.position.set(r*Math.cos(h)*Math.sin(s.a),r*Math.sin(h),r*Math.cos(h)*Math.cos(s.a));
  camera.lookAt(0,0,0);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 카메라 오빗를 적용해. WebGL에서 구면 좌표로 카메라 위치를 계산해 대상을 바라보게 하거나 CSS 객체와 SVG 구면 투영을 반대로 회전한다. 지속 2400ms; 방위각 변화 60deg; 고도 20deg; 반경 600px. 이징은 power2.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 카메라 오빗를 적용해. WebGL에서 구면 좌표로 카메라 위치를 계산해 대상을 바라보게 하거나 CSS 객체와 SVG 구면 투영을 반대로 회전한다. 지속 2400ms; 방위각 변화 60deg; 고도 20deg; 반경 600px. 이징은 power2.inOut를 사용해. 0초·1.2초·2.4초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Camera Orbit to <target> in <file>. Orbit 60 degrees over 2400ms at a 600px radius and 20-degree elevation while looking at the fixed center. Use power2.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Camera Orbit to the target scene in <file>. Orbit 60 degrees over 2400ms at a 600px radius and 20-degree elevation while looking at the fixed center. Use power2.inOut. Capture at 0, 1.2, and 2.4 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 카메라 오빗를 `.hero`에 적용해. / Apply Camera Orbit to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 2.4초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 2400ms; 방위각 변화 60deg; 고도 20deg; 반경 600px를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 2.4초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [오브젝트 턴테이블 · Object Turntable](../object-turntable/) · [조명 애니메이션 · Animated Lighting](../animated-lighting/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#camera-orbit-turntable`) (Apache-2.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-layers/camera-layer/cameras-lights-points-interest.html) (unknown) · [processing/p5.js-website](https://p5js.org/examples/3D-Orbit-Control/) (MIT) · [Observable @d3](https://observablehq.com/@d3/world-tour) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
