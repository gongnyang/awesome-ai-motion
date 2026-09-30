# Nº 145 스테레오 뷰어 전환 · Stereo Viewer Swap

> 클립 렌더 예정 / Clip rendering planned.

**장면이 둥근 모서리의 작은 창으로 축소되고 두 복제 창이 화면 밖 축을 따라 반대 방향으로 회전해 갈라진다. 검은 중간 구간 뒤 두 마스크가 새 장면을 드러내고 화면이 확대된다**

The scene shrinks into a rounded window, two copies rotate apart, and after a dark gap the new scene opens and zooms back up.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 브랜딩 | 제품 시연, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: 스테레오 뷰어 교체

## 선택 기준 / Selection

슬라이드 뷰어에서 필름을 넘기는 듯한 물리적 교체감을 준다 / Gives a physical swap feel, like slides in a viewer.

- 제품 소개 영상에서 화면 두 개를 뷰어 창처럼 넘기며 다음 기능으로 갈 때 / When flipping between two screens like a viewer window in a product tour
- 사진첩, 카탈로그처럼 한 장씩 넘겨 보는 소재의 영상 / For catalog or photo-album subjects where items are viewed one at a time

좋은 예 / Good: 장면이 zoom 0.88의 둥근 창으로 줄어든 뒤 복제 창 둘이 반대로 돌며 갈라지고, 검은 틈 뒤에서 새 장면이 열려 다시 확대된다(0.9초)
나쁜 예 / Bad: 검은 중간 구간이 0.3초를 넘어 화면이 죽은 것처럼 보이거나, 모서리 반경이 너무 작아 창 느낌이 없다
주의 / Avoid: 검은 중간 구간은 전체의 30% 이하로 둔다 · 내용 위주의 설명 장표 사이에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 700~1100ms | easeInOutCubic |
| 축소율 | 0.88 | 0.8~0.92 | 창으로 줄어듦 |
| 모서리 반경 | 화면 높이 22% | 15~25% | 창 느낌 |
| 검은 구간 | 진행 40~60% | 전체 30% 이하 | 짧게 |
| 복제 창 회전 | ±90deg | ±60~90deg | 반대 방향 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.prev', { scale: 0.88, borderRadius: 238, duration: 0.3, ease: 'power2.out' }, 0);
tl.to('.prev-l', { rotationY: -90, duration: 0.3, ease: 'power2.in' }, 0.3);
tl.to('.prev-r', { rotationY: 90, duration: 0.3, ease: 'power2.in' }, 0.3);
tl.fromTo('.next', { scale: 0.88, borderRadius: 238 }, { scale: 1, borderRadius: 0, duration: 0.3, ease: 'power2.out' }, 0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 스테레오 뷰어 전환을 넣어줘. 이전 장면을 0.3초에 scale 0.88, borderRadius 화면 높이의 22%로 줄이고, 복제 창 두 개가 다음 0.3초에 좌우 rotationY ±90도로 갈라지게 해. 마지막 0.3초에 새 장면이 scale 0.88에서 1로 확대돼. 검은 구간은 전체의 30% 이하, GSAP 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 스테레오 뷰어 전환을 구현해. 3구간 각 0.3초: 축소(scale 0.88, radius 238px), 갈라짐(.prev-l -90, .prev-r 90 rotationY), 확대(.next 0.88에서 1). 0.15초, 0.45초, 0.75초, 0.9초 시점을 캡처해 창 형태가 보이는지, 검은 구간이 길지 않은지, 마지막에 모서리 둥글기가 0인지 확인해.
```

### English · Claude Code
```text
Add a Stereo Viewer Swap to <target>. First 0.3s: shrink the previous scene to scale 0.88 with a corner radius of 22% of frame height. Next 0.3s: two copies rotateY to -90 and +90. Last 0.3s: the new scene scales from 0.88 to 1 and its radius returns to 0. Keep the dark gap under 30% of the total. One seekable GSAP timeline.
```

### English · Codex
```text
Implement Stereo Viewer Swap in <file>. Three 0.3s phases: shrink (scale 0.88, radius 238px), split (.prev-l rotationY -90, .prev-r 90), expand (.next 0.88 to 1). Capture at 0.15s, 0.45s, 0.75s, and 0.9s to confirm the window shape is visible, the dark gap is short, and the corner radius is 0 at the end.
```

예시 / Example: 스테레오 뷰어 전환를 `.hero`에 적용해. / Apply Stereo Viewer Swap to `.hero`.

## 적용 / Application

- HyperFrames: 3구간(축소, 갈라짐, 확대)을 한 paused 타임라인에 0.3초씩 붙인다. 복제 창은 clip 복제로 만들고 rotationY만 쓴다
- ReelForge: 씬 워커 브리프에 축소율 0.88, 반경 22%, 검은 구간 길이를 넣는다. 복제 창 요소를 워커에 별도로 요구한다
- Scrolline Deck: scrub에서는 3구간을 진행률 0~0.33, 0.33~0.66, 0.66~1로 나누고 각 구간에 ease-out을 쓴다. 되감으면 그대로 역재생된다

조합 / Pair with: [큐브 전환 · Cube Transition](../cube-transition/) · [마스크 전환 · Shape Mask Transition](../iris-mask/) · [딥 투 컬러 · Dip to Color](../dip-to-color/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StereoViewer.glsl) (BSD-2-Clause) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
