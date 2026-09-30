# Nº 228 크레인 틸트 · Crane Tilt

> 클립 렌더 예정 / Clip rendering planned.

**시점이 위아래로 이동하는 동시에 보는 각도가 바뀌어 높은 전경과 대상의 눈높이를 이어 준다.**

Move the viewpoint vertically while changing its viewing angle.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | gsap |

다른 이름 / Also known as: 크레인과 틸트, crane-pedestal-tilt

## 선택 기준 / Selection

대상의 높이와 주변 공간의 규모를 전달한다. / Conveys height and spatial scale.

- 높은 구조물에서 눈높이로 내려올 때 / Descend from a tall structure to eye level.
- 공간 규모를 보여주며 대상을 드러낼 때 / Reveal a subject while showing the scale of its surroundings.

좋은 예 / Good: 월드를 120px 이동하고 12도 기울여 높은 전경에서 눈높이로 이어 준다.
나쁜 예 / Bad: 평면 텍스트를 크게 기울여 읽을 수 없게 한다.
주의 / Avoid: 정보 텍스트는 마지막 눈높이에서 보여준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1600ms | 1000~2200ms | 수직 이동과 회전을 동기화 |
| 수직 이동 | 120px | 60~200px | 월드 역이동 |
| 틸트 | 12deg | 6~18deg | 회전 X |
| 원근 거리 | 1000px | 800~1400px | 부모 perspective |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
gsap.set('.viewport', {perspective:1000});
gsap.set('.world', {transformStyle:'preserve-3d', y:-120, rotationX:12});
tl.to('.world', {y:0, rotationX:0, duration:1.6, ease:'power2.inOut'});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 크레인 틸트를 적용해. CSS perspective 아래 HTML 월드의 translateY와 rotateX를 GSAP 코어로 함께 보간한다. 지속 1600ms; 수직 이동 120px; 틸트 12deg; 원근 거리 1000px. 이징은 power2.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 크레인 틸트를 적용해. CSS perspective 아래 HTML 월드의 translateY와 rotateX를 GSAP 코어로 함께 보간한다. 지속 1600ms; 수직 이동 120px; 틸트 12deg; 원근 거리 1000px. 이징은 power2.inOut를 사용해. 0초·0.8초·1.6초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Crane Tilt to <target> in <file>. Under a 1000px perspective parent, animate world translation from -120px to 0 and rotationX from 12 degrees to 0 over 1600ms. Use power2.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Crane Tilt to the target scene in <file>. Under a 1000px perspective parent, animate world translation from -120px to 0 and rotationX from 12 degrees to 0 over 1600ms. Use power2.inOut. Capture at 0, 0.8, and 1.6 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 크레인 틸트를 `.hero`에 적용해. / Apply Crane Tilt to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 1.6초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 1600ms; 수직 이동 120px; 틸트 12deg; 원근 거리 1000px를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 1.6초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/) · [3D 조립 · Depth Assemble](../depth-assemble/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#crane-pedestal-tilt`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
