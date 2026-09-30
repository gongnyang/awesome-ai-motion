# Nº 229 돌리 줌 · Dolly Zoom

> 클립 렌더 예정 / Clip rendering planned.

**주대상의 화면 크기는 유지되지만 배경의 원근과 압축감이 크게 변한다.**

Keep the subject size fixed while camera distance and field of view change together.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 고급 | 주목 끌기, 분위기 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: dolly-zoom-vertigo, Dolly Zoom / Vertigo Effect

## 선택 기준 / Selection

불안이나 깨달음의 순간에 공간이 뒤틀리는 느낌을 준다. / Conveys unease or a sudden realization.

- 깨달음 순간의 공간 변화를 보여줄 때 / Show a spatial shift at a moment of realization.
- 인물 뒤 배경의 압축감을 바꿀 때 / Change background compression behind a subject.

좋은 예 / Good: 인물 크기를 유지하고 1.8초 동안 카메라 거리를 20% 늘려 배경 원근만 바꾼다.
나쁜 예 / Bad: 거리만 바꿔 인물까지 작아진다.
주의 / Avoid: 본문과 수치가 많은 장면에는 적용하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1800ms | 1200~2400ms | 원근 변화를 읽을 시간 |
| 거리 변화 | 20% | 10~30% | 초기 거리 대비 |
| 초기 FOV | 45deg | 35~60deg | 수직 화각 |
| 이징 | power2.inOut | power1.inOut~power3.inOut | 주대상 크기는 고정 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), state = {p:0};
const d0 = 600, k = d0 * Math.tan(Math.PI / 8);
tl.to(state, {p:1, duration:1.8, ease:'power2.inOut', onUpdate:()=>{
  const d = d0 * (1 + 0.2 * state.p);
  camera.position.z = d; camera.fov = 2 * Math.atan(k / d) * 180 / Math.PI;
  camera.updateProjectionMatrix();
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 돌리 줌를 적용해. WebGL 카메라 거리 d와 FOV를 함께 보간해 d 곱하기 tan(FOV/2)가 일정하도록 유지한다. 지속 1800ms; 거리 변화 20%; 초기 FOV 45deg; 이징 power2.inOut. 이징은 power2.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 돌리 줌를 적용해. WebGL 카메라 거리 d와 FOV를 함께 보간해 d 곱하기 tan(FOV/2)가 일정하도록 유지한다. 지속 1800ms; 거리 변화 20%; 초기 FOV 45deg; 이징 power2.inOut. 이징은 power2.inOut를 사용해. 0초·0.9초·1.8초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Dolly Zoom to <target> in <file>. Start at a 45-degree FOV and distance 600. Increase distance by 20% over 1800ms and recompute FOV so distance times tan(FOV/2) stays constant. Use power2.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Dolly Zoom to the target scene in <file>. Start at a 45-degree FOV and distance 600. Increase distance by 20% over 1800ms and recompute FOV so distance times tan(FOV/2) stays constant. Use power2.inOut. Capture at 0, 0.9, and 1.8 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 돌리 줌를 `.hero`에 적용해. / Apply Dolly Zoom to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 1.8초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 1800ms; 거리 변화 20%; 초기 FOV 45deg; 이징 power2.inOut를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 1.8초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [랙 포커스 · Rack Focus](../rack-focus/) · [비네트 펄스 · Vignette Pulse](../vignette-pulse/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/camera-dolly-zoom/registry-item.json) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#dolly-zoom-vertigo`) (Apache-2.0) · motion dictionary 2-transitions-camera.md#38. 돌리 줌 · Dolly Zoom / Vertigo Effect (own) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#dolly-zoom`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/dolly-zoom/scene.html`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
