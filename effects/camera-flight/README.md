# Nº 224 카메라 비행 · Camera Fly-through

> 클립 렌더 예정 / Clip rendering planned.

**카메라가 여러 위치와 바라보는 방향을 이어 공간 안을 이동한다. 물체나 터널 사이를 지나 다음 대상 앞에 안착한다.**

Move the camera through connected positions while directing its gaze toward the destination.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 고급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | webgl |

다른 이름 / Also known as: 3D camera flight, 3D 카메라 비행, Camera Journey, 다구간 카메라 여정, multi-phase-camera, viewport-change, 3d-camera-flight, Sequenced camera travel, 키프레임 카메라 이동, Spline Tunnel Flight, 스플라인 터널 비행, Infinite tubes, Tunnel fly-through

## 선택 기준 / Selection

떨어진 정보와 장면을 하나의 공간 여행으로 연결한다. / Connects separate scenes into a spatial journey.

- 떨어진 정보 카드를 공간으로 연결할 때 / Connect separated information cards through space.
- 터널을 지나 다음 장면에 도착할 때 / Travel through a tunnel to the next scene.

좋은 예 / Good: 세 지점을 1.5초씩 이동하고 마지막 카드 앞에서 1초 멈춘다.
나쁜 예 / Bad: 지나가는 카드의 본문을 이동 중에 읽게 한다.
주의 / Avoid: 경로가 물체를 관통하지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 구간 수 | 3 | 2~4 | 관찰 지점 수 |
| 구간 지속 | 1500ms | 1000~2000ms | 구간별 이동 시간 |
| FOV | 60deg | 45~70deg | 공간 시야 |
| 도착 홀드 | 1000ms | 600~1500ms | 목적지 읽기 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {x:0,y:0,z:600};
camera.fov = 60; camera.updateProjectionMatrix();
const stops = [{x:300,y:100,z:400},{x:600,y:0,z:200},{x:900,y:0,z:600}];
stops.forEach((v,i)=>tl.to(s, {...v, duration:1.5, ease:'power2.inOut', onUpdate:()=>{
  camera.position.set(s.x,s.y,s.z); camera.lookAt(900,0,0);
}}, i*1.5));
tl.to({}, {duration:1});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 카메라 비행를 적용해. WebGL에서 위치 경로와 lookAt 목표를 함께 보간하거나 CSS preserve-3d 월드에 역카메라 이동과 회전을 적용한다. 구간 수 3; 구간 지속 1500ms; FOV 60deg; 도착 홀드 1000ms. 이징은 power2.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 카메라 비행를 적용해. WebGL에서 위치 경로와 lookAt 목표를 함께 보간하거나 CSS preserve-3d 월드에 역카메라 이동과 회전을 적용한다. 구간 수 3; 구간 지속 1500ms; FOV 60deg; 도착 홀드 1000ms. 이징은 power2.inOut를 사용해. 0초·2.25초·4.5초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Camera Fly-through to <target> in <file>. Animate camera position through three segments of 1500ms each with a 60-degree FOV, update lookAt toward the destination, and hold for 1000ms. Use power2.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Camera Fly-through to the target scene in <file>. Animate camera position through three segments of 1500ms each with a 60-degree FOV, update lookAt toward the destination, and hold for 1000ms. Use power2.inOut. Capture at 0, 2.25, and 4.5 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 카메라 비행를 `.hero`에 적용해. / Apply Camera Fly-through to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 4.5초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 구간 수 3; 구간 지속 1500ms; FOV 60deg; 도착 홀드 1000ms를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 4.5초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [뎁스 카드 플라이바이 · Depth Card Flyby](../depth-card-flyby/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-camera-flight.md) (Apache-2.0) · [theatre-js/theatre](https://www.theatrejs.com/docs/latest/getting-started/with-react-three-fiber) (Apache-2.0 / AGPL-3.0 (구성요소별)) · [codrops/InfiniteTubes](https://github.com/codrops/InfiniteTubes) (unknown) · local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/multi-phase-camera.md`) (unknown) · [theatre-js/theatre](https://www.theatrejs.com/docs/latest/manual/sequences) (Apache-2.0 / AGPL-3.0 (구성요소별))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
