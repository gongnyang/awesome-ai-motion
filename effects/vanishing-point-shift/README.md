# Nº 239 소실점 이동 · Vanishing Point Shift

> 클립 렌더 예정 / Clip rendering planned.

**입체 요소의 소실점이 움직여 화면 중심이나 크기를 크게 바꾸지 않고도 바라보는 위치가 달라진다.**

Shift the vanishing point to change the viewpoint without moving the layout substantially.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | gsap |

다른 이름 / Also known as: perspective-origin-eye-shift

## 선택 기준 / Selection

올려다보기와 미세한 관찰 시점 변화를 전달한다. / Suggests a low-angle view or subtle observation shift.

- 입체 패널을 낮은 각도에서 관찰할 때 / Observe a three-dimensional panel from a low angle.
- 레이아웃을 유지하며 시점을 조금 바꿀 때 / Shift the viewpoint subtly while preserving the layout.

좋은 예 / Good: 소실점을 50% 50%에서 50% 70%로 옮겨 패널의 깊이만 달라지게 한다.
나쁜 예 / Bad: 깊이가 없는 평면에서 소실점만 바꿔 아무 변화가 없다.
주의 / Avoid: 자식 요소에 실제 Z 깊이나 회전을 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1600ms | 1000~2200ms | 미세한 시점 변화 |
| 원근 거리 | 1000px | 800~1600px | 공통 3D 부모 |
| 시작 소실점 | 50% 50% | 40%~60% 40%~60% | 화면 중앙 |
| 종료 소실점 | 50% 70% | 40%~60% 60%~75% | 세로 관찰 위치 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
gsap.set('.viewport', {perspective:1000, perspectiveOrigin:'50% 50%'});
gsap.set('.panel', {z:120, rotationY:15});
tl.to('.viewport', {perspectiveOrigin:'50% 70%', duration:1.6, ease:'power2.inOut'});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 소실점 이동를 적용해. CSS perspective-origin의 가로와 세로 비율을 GSAP 코어로 보간해 공통 3D 공간의 소실점을 옮긴다. 지속 1600ms; 원근 거리 1000px; 시작 소실점 50% 50%; 종료 소실점 50% 70%. 이징은 power2.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 소실점 이동를 적용해. CSS perspective-origin의 가로와 세로 비율을 GSAP 코어로 보간해 공통 3D 공간의 소실점을 옮긴다. 지속 1600ms; 원근 거리 1000px; 시작 소실점 50% 50%; 종료 소실점 50% 70%. 이징은 power2.inOut를 사용해. 0초·0.8초·1.6초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Vanishing Point Shift to <target> in <file>. Set perspective to 1000px and tween perspective-origin from 50% 50% to 50% 70% over 1600ms; give children real depth. Use power2.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Vanishing Point Shift to the target scene in <file>. Set perspective to 1000px and tween perspective-origin from 50% 50% to 50% 70% over 1600ms; give children real depth. Use power2.inOut. Capture at 0, 0.8, and 1.6 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 소실점 이동를 `.hero`에 적용해. / Apply Vanishing Point Shift to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 1.6초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 1600ms; 원근 거리 1000px; 시작 소실점 50% 50%; 종료 소실점 50% 70%를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 1.6초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [원근 격자 전진 · Perspective Grid Drift](../perspective-grid-drift/) · [3D 조립 · Depth Assemble](../depth-assemble/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#perspective-origin-eye-shift`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/eye-shift.html`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/eye-shift.meta.json`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
