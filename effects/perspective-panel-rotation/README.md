# Nº 572 원근 패널 회전 · Perspective Panel Rotation

> 클립 렌더 예정 / Clip rendering planned.

**서로 다른 색의 긴 패널이 중심축 주위에서 회전하며 비스듬히 펼쳐지고 가까운 면이 크게 보인다**

Long panels of different colors rotate around a central axis, fanning out at an angle with near faces appearing larger.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 분위기, 브랜딩 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: Perspective Color Panels, 원근 컬러 패널

## 선택 기준 / Selection

리듬과 구획의 변화로 배경에 구조와 깊이를 준다. 스튜디오 무대 같은 세련된 배경이 된다 / Adds structure and depth to a background through rhythm and division, like a polished stage.

- 제품 소개나 타이틀 뒤에 움직이는 색 패널 배경을 둘 때 / Put a moving color panel backdrop behind a product intro or title.
- 무대나 전시장 같은 공간감을 배경만으로 만들 때 / Create a sense of stage or exhibition space with the background alone.

좋은 예 / Good: 패널 7개가 사이각 25도, 기울기 15도로 18도/s에서 linear로 5초 동안 회전한다. 가까운 패널은 크고 밝다
나쁜 예 / Bad: 패널 수가 30개라 줄무늬 소음이 되고, 회전이 90도/s라 눈이 어지럽다
주의 / Avoid: 회전 40도/s 초과 금지 · 전경 텍스트가 있는 영역은 대비를 낮춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 패널 | 7개 | 5~10개 | 색을 교차 |
| 사이각 | 25도 | 15~35도 | 축 주위 간격 |
| 기울기 | 15도 | 10~25도 | 축의 기울기 |
| 회전 속도 | 18도/s | 10~30도/s | linear |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { a: 0 };
tl.to(u, { a: 90, duration: 5, ease: 'none', onUpdate: () => mat.uniforms.uRot.value = u.a * Math.PI / 180 }, 0);
// panels: for i<7: angle = i*25deg + uRot; pos = (sin(angle)*R, 0, cos(angle)*R); face tilted 15deg
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 뒤에 원근 패널 회전 배경을 WebGL로 만들어줘. 패널 7개를 중심축 주위 25도 간격, 기울기 15도로 두고 18도/s로 5초 동안 linear 회전. 색은 브랜드 색 두 가지를 번갈아, 가장자리에 옅은 빛을 줘.
```

### 한국어 · Codex
```text
<파일>에 perspective panel rotation을 구현해. 패널 7, 사이각 25도, 기울기 15도, 18도/s, 5s, ease none. 0초, 2.5초, 5초를 캡처해 가까운 패널이 더 크고 밝은지, 전경 텍스트 가독성이 유지되는지 확인해.
```

### English · Claude Code
```text
Build a perspective panel rotation backdrop behind <target> in WebGL. Place 7 panels around a central axis 25 degrees apart with a 15 degree tilt, rotating at 18 deg/s for 5 seconds with linear timing. Alternate two brand colors and add a faint edge light.
```

### English · Codex
```text
Implement perspective panel rotation in <file>: 7 panels, 25 degree spacing, 15 degree tilt, 18 deg/s, 5s, ease none. Capture at 0s, 2.5s and 5s and verify nearer panels are larger and brighter and foreground text remains legible.
```

예시 / Example: 원근 패널 회전를 `.hero`에 적용해. / Apply Perspective Panel Rotation to `.hero`.

## 적용 / Application

- HyperFrames: uRot을 paused 타임라인 tween으로 올린다. 패널은 Three.js 인스턴스로 두고 렌더는 onUpdate
- ReelForge: 씬 브리프에 패널 수, 사이각, 기울기, 회전 속도, 색 목록을 싣는다
- Scrolline Deck: 진행률을 회전각 0~90도에 선형으로 매핑한다. ease는 none으로 유지

조합 / Pair with: [나선 필드 · Spiral Field Rotation](../spiral-field/) · [만화경 · Kaleidoscope Motion](../kaleidoscope/) · [큐브 전환 · Cube Transition](../cube-transition/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/color-panels) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
