# Nº 559 코너 핀 · Corner Pin

> 클립 렌더 예정 / Clip rendering planned.

**평면의 네 모서리가 각각 움직이며 화면이 원근 형태로 기울어져 공간에 붙는다**

The four corners of a plane move, tilting the image into a perspective shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 설명, 전환 | 제품 시연, 설명 영상, 숏폼 | webgl |

다른 이름 / Also known as: 코너 핀 변형

## 선택 기준 / Selection

화면이나 간판이 실제 공간 속 면에 붙어 있다는 인상을 준다. 기기 화면이나 벽면 광고에 이미지를 끼워 넣을 때 쓴다 / Makes a screen or sign feel attached to a surface in space. Used to seat images in device mockups or wall ads.

- 기기 목업 안에 스크린샷을 원근에 맞춰 넣을 때 / Fit a screenshot into a device mockup with correct perspective.
- 포스터나 화면이 평면에서 원근으로 기울며 등장할 때 / Tilt a poster or screen from flat into perspective as it appears.

좋은 예 / Good: 평면 이미지의 네 모서리가 800ms 동안 각각 최대 40px 이동해 원근 사다리꼴이 된다. 이징 power2.inOut
나쁜 예 / Bad: 네 모서리를 다른 시간에 움직여 이미지가 찢어진 듯 보이거나, 모서리 이동을 200px 넘게 해 비틀린 종이처럼 보인다
주의 / Avoid: 모서리 이동 80px 초과 금지 · 네 점이 볼록 사각형을 유지하게 한다(교차 금지)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 600~1200ms |  |
| 모서리 이동 | 40px | 20~80px | 각 점 개별 값 |
| 이징 | power2.inOut | power2~power3 |  |
| 투영 | 호모그래피 |  | 네 점 기반 |

## 구현 / Implementation (GSAP)

```js
const c = { tl: [0,0], tr: [1920,0], br: [1920,1080], bl: [0,1080] };
const to = { tl: [40,30], tr: [1880,-20], br: [1900,1050], bl: [20,1080] };
const u = { p: 0 };
tl.to(u, { p: 1, duration: 0.8, ease: 'power2.inOut', onUpdate: () => draw(homography(c, to, u.p)) }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 코너 핀을 넣어줘. 네 모서리를 0.8초 동안 (0,0)에서 (40,30), (1920,0)에서 (1880,-20), (1920,1080)에서 (1900,1050), (0,1080)에서 (20,1080)으로 옮기고 power2.inOut으로 원근 사다리꼴로 기울게 해. matrix3d 호모그래피로 계산해줘.
```

### 한국어 · Codex
```text
<파일>에 corner pin을 구현해. 네 점 보간 p 0→1, 0.8s, power2.inOut, 호모그래피 matrix3d. 0.3초, 0.7초, 1.1초를 캡처해 각도가 점점 커지는지, 사각형이 뒤집히거나 교차하지 않는지 확인해.
```

### English · Claude Code
```text
Add a corner pin to the image in <target>. Over 0.8 seconds move the corners (0,0) to (40,30), (1920,0) to (1880,-20), (1920,1080) to (1900,1050), (0,1080) to (20,1080) with power2.inOut, forming a perspective trapezoid. Compute it as a matrix3d homography.
```

### English · Codex
```text
Implement corner pin in <file>: four-point interpolation p 0 to 1, 0.8s, power2.inOut, homography matrix3d. Capture at 0.3s, 0.7s and 1.1s and verify the tilt grows progressively and the quad never flips or self-intersects.
```

예시 / Example: 코너 핀를 `.hero`에 적용해. / Apply Corner Pin to `.hero`.

## 적용 / Application

- HyperFrames: 호모그래피를 셰이더나 CSS matrix3d로 계산하고 p만 tween한다. paused 타임라인에서 seek해도 같은 행렬이다
- ReelForge: 브리프에 네 점의 시작과 끝 좌표를 싣는다. 화면 삽입용이면 목업의 네 점을 측정한다
- Scrolline Deck: 진행률을 p에 선형으로 대응시킨다. 되감기가 자연스럽고 ease-out을 쓰면 스크럽이 끊기지 않는다

조합 / Pair with: [원근 평면화 · Perspective Flatten](../perspective-flatten/) · [메시 워프 · Mesh Warp](../mesh-warp/) · [스크린 이머전스 · Screen Emergence](../screen-emergence/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
