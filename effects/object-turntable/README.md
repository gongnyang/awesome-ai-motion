# Nº 550 오브젝트 턴테이블 · Object Turntable

> 클립 렌더 예정 / Clip rendering planned.

**제품이나 입체 물체가 고정된 중심축을 돌며 앞면, 옆면, 뒷면을 차례로 보여 주는 회전**

A product or 3D object turns on a fixed axis to show its front, sides and back in turn.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 설명, 브랜딩 | 제품 시연, 설명 영상, 숏폼 | webgl |

다른 이름 / Also known as: Device turntable, 기기 턴테이블, Orbiting 3D object, 3D 물체 연속 회전, 3D Object Turntable, 입체 물체 회전 시연, Product hero turntable, 제품 히어로 회전, Product Turntable, 제품 턴테이블, Object spin

## 선택 기준 / Selection

물체의 전체 형태와 표면 재질을 이해하게 한다. 한 방향의 카메라로는 알 수 없는 뒷면 정보를 채운다 / Lets the viewer understand the full form and surface materials, filling in the back that a single camera angle hides.

- 제품 히어로 컷에서 전체 형태를 보여 줄 때 / Show the whole shape in a product hero shot.
- 기기 화면 텍스처를 붙여 앱을 소개할 때 / Present an app by mapping its screen onto a device.
- 카탈로그에서 물체 하나를 자세히 볼 때 / Look closely at one object in a catalog.

좋은 예 / Good: 기기가 6초 동안 y축 360도 일정하게 돌고, 카메라는 고도 15도로 고정되며 마지막에 정면에서 감속해 멈춘다
나쁜 예 / Bad: 회전 속도가 일정하지 않아 덜컹거리거나, 카메라까지 같이 돌아 배경이 함께 움직인다
주의 / Avoid: 회전은 linear를 기본으로 하고 감속 정지는 마지막 0.8초에만 쓴다 · 한 바퀴를 4초 미만으로 돌리지 않는다 · 카메라 고도는 30도 이하로 유지한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 한 바퀴 | 6s | 4~10s | 360도 기준 |
| 회전축 | y | y 또는 y+x 소량 | 단일축 기본 |
| 카메라 고도 | 15deg | 5~30deg | 고정 |
| 정지 감속 | 0.8s | 0.5~1.2s | 정면에서 멈춤 |
| 이징 | linear | linear + power3.out | 마지막만 감속 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.to(model.rotation, { y: Math.PI * 2 * 0.9, duration: 5.2, ease: 'none' }, 0);
tl.to(model.rotation, { y: Math.PI * 2, duration: 0.8, ease: 'power3.out' }, 5.2);
// camera.position.set(0, 1.2, 6); camera.lookAt(0, 0, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
Three.js로 <모델>이 y축으로 6초 동안 한 바퀴 도는 턴테이블을 만들어 줘. 카메라는 고도 15도로 고정, 마지막 0.8초는 power3.out으로 감속해 정면에서 멈추게 해. 앞 5.2초는 ease none으로 일정하게 돌리고 회전각은 GSAP 타임라인으로 구동해 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 모델에 object-turntable을 적용해. model.rotation.y를 0에서 2π*0.9까지 5.2초 ease none, 이어 2π까지 0.8초 power3.out으로 건다. 카메라는 고정. 0초와 6초 프레임이 동일한 정면인지, 3초에 뒷면이 보이는지, 5.2~6초 회전 속도가 감소하는지 캡처로 확인해.
```

### English · Claude Code
```text
Use Three.js to make <model> turn a full revolution around the y axis in 6 seconds. Keep the camera fixed at 15 degrees elevation. Rotate at constant speed with ease none for the first 5.2 seconds, then decelerate with power3.out for the last 0.8 seconds to stop facing front. Drive rotation from a GSAP timeline so it is seekable.
```

### English · Codex
```text
Apply object-turntable to the model in <file>. Tween model.rotation.y from 0 to 2*PI*0.9 over 5.2s with ease none, then to 2*PI over 0.8s with power3.out. Camera stays fixed. Capture 0s and 6s (identical front view), 3s (back visible) and confirm rotation speed drops between 5.2 and 6s.
```

예시 / Example: 오브젝트 턴테이블를 `.hero`에 적용해. / Apply Object Turntable to `.hero`.

## 적용 / Application

- HyperFrames: Three.js 회전각을 GSAP tween으로 구동하고 렌더 루프는 seek 시점의 상태만 그린다. 캡처는 프레임 시각을 명시해 찍는다
- ReelForge: 브리프에 모델 또는 이미지 텍스처, 한 바퀴 6s, 카메라 고도 15도, 정지 각도를 싣는다
- Scrolline Deck: 진행률 0~1을 360도에 매핑하고 마지막 10% 구간만 ease-out으로 정지시킨다

조합 / Pair with: [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/) · [스크린 이머전스 · Screen Emergence](../screen-emergence/) · [카메라 오빗 · Camera Orbit](../camera-orbit/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-iphone-device/registry-item.json) (Apache-2.0) · [motion.dev examples](https://motion.dev/examples/react-use-animation-frame) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [Apple](https://www.apple.com/apple-events/) (unknown) · [mrdoob/three.js](https://threejs.org/examples/#webgl_geometry_teapot) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
