# Nº 566 이미지 언롤 · Image Unroll

> 클립 렌더 예정 / Clip rendering planned.

**말려 있던 이미지 면이 펼쳐지며 평평한 사진으로 정착하는 움직임**

A rolled-up image surface unfurls and settles as a flat picture.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 설명, 전환 | 제품 시연, 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: 이미지 말림 펴기

## 선택 기준 / Selection

숨겨져 있던 면이 열리며 드러나는 물성을 준다. 종이나 포스터가 펼쳐지는 기대감이 있다 / Gives a hidden surface a sense of material as it opens, like unrolling a poster or scroll.

- 포스터, 지도, 사진을 펼쳐 공개할 때 / Unfurl a poster, map or photo.
- 이미지 갤러리의 첫 사진을 극적으로 열 때 / Open an image gallery's first picture dramatically.
- 문서나 두루마리 같은 소재를 소개할 때 / Introduce documents or scrolls.

좋은 예 / Good: 이미지가 말림 반경 80px에서 0으로 1.4초 동안 펴지며 오른쪽 끝부터 평평해지고 마지막에 그림자가 사라진다
나쁜 예 / Bad: 말림이 균일해 원통이 회전만 하는 것처럼 보이거나, 펴진 뒤에도 미세한 곡면이 남아 이미지가 휘어 있다
주의 / Avoid: 최종 프레임 말림 반경은 정확히 0으로 끝낸다 · 말림 반경은 이미지 폭의 8% 이하에서 시작한다 · 말리는 부분에도 이미지 텍스처 늘어남을 만들지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 1.4s | 1.0~2.0s | 펼침 |
| 말림 반경 | 80→0px | 50~120px | 곡률 |
| 진행 방향 | 오른쪽 → 왼쪽 | 한 방향 | 고정 |
| 그림자 | 0.3→0 | 0~0.4 | 말림에 비례 |
| 이징 | power2.out | power1~power3 | 끝에서 감속 |

## 구현 / Implementation (GSAP)

```js
const u = { r: 80, x: 1 }; // r: 곡률 반경, x: 펼침 경계 0~1
tl.to(u, { r: 0, x: 0, duration: 1.4, ease: 'power2.out', onUpdate: () => { mat.uniforms.uR.value = u.r; mat.uniforms.uEdge.value = u.x; } }, 0.3);
// vertex: x > uEdge 인 정점을 반경 uR 원통에 감음
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
WebGL과 GSAP으로 <이미지>가 말려 있다 펼쳐지는 연출을 만들어 줘. 평면 메시를 60분할해 경계 오른쪽 정점을 반경 80px 원통에 감고, 0.3초부터 1.4초 동안 power2.out으로 반경 80→0, 경계 1→0으로 tween해. 끝나면 곡률이 정확히 0이고 그림자도 0이어야 해. uniform은 paused 타임라인에서 seek 가능하게 갱신해.
```

### 한국어 · Codex
```text
<파일>에 image-unroll을 적용해. uniform {r:80, x:1}을 position 0.3, duration 1.4, ease power2.out으로 {r:0, x:0}으로 tween하고 onUpdate에서 uR, uEdge를 갱신한다. 0.3초는 말린 상태, 1.0초는 절반, 1.9초는 완전히 평평하고 곡률이 0이며 텍스처 늘어남이 없는지 캡처로 확인해.
```

### English · Claude Code
```text
Use WebGL and GSAP to unroll <image>. Split a plane into 60 segments and wrap the vertices right of an edge around a cylinder of radius 80px. From 0.3 seconds over 1.4 seconds with power2.out, tween radius 80 to 0 and edge 1 to 0. At the end curvature and shadow are exactly 0. Update uniforms so the paused timeline can seek.
```

### English · Codex
```text
Apply image-unroll in <file>. Tween uniform {r:80, x:1} to {r:0, x:0} at position 0.3, duration 1.4, ease power2.out, updating uR and uEdge in onUpdate. Capture 0.3s (rolled), 1.0s (half) and 1.9s (fully flat, zero curvature, no texture stretching).
```

예시 / Example: 이미지 언롤를 `.hero`에 적용해. / Apply Image Unroll to `.hero`.

## 적용 / Application

- HyperFrames: 셰이더 uniform을 GSAP tween으로 구동하고 seek 시 값만 갱신한다. 캡처 시각을 명시해 곡면이 남지 않는지 마지막 프레임을 확인한다
- ReelForge: 브리프에 이미지, 말림 반경 80, 방향, 1.4s를 싣는다. 메시 분할 수 60x1 이상을 지정한다
- Scrolline Deck: 진행률 0~1을 경계 위치에 매핑한다. 진행률 멈추는 지점에서 곡면이 남지 않도록 끝 구간 ease-out을 쓴다

조합 / Pair with: [모서리 말림 · Corner Peel](../corner-peel/) · [페이지 턴 · Page Turn](../page-turn/) · [힌지 리빌 · Hinge Reveal](../hinge-reveal/)

출처 / Sources: [tympanus.net/codrops](https://tympanus.net/codrops/2024/02/07/on-scroll-revealing-webgl-image-explorations/) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
