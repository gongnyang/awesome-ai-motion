# Nº 568 노이즈 블롭 · Noise Blob

> 클립 렌더 예정 / Clip rendering planned.

**구의 표면이 울퉁불퉁 솟거나 비틀리며 계속 형태를 바꾼다**

A sphere's surface bulges and twists unevenly, continually changing shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 분위기, 브랜딩 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: Noise Blob Deformation, 노이즈 블롭 변형, Twisted sphere, WebGL blob

## 선택 기준 / Selection

유기적인 생명감과 추상적인 재질을 표현한다. AI나 생명체 같은 실체 없는 존재의 이미지로 어울린다 / Expresses organic life and an abstract material. Suits intangible presences such as AI or creatures.

- AI 어시스턴트나 음성 인터페이스를 추상적인 존재로 표현할 때 / Represent an AI assistant or voice interface as an abstract presence.
- 표지 배경에 천천히 형태가 변하는 3D 오브젝트를 둘 때 / Place a slowly morphing 3D object behind a cover.

좋은 예 / Good: 구 표면이 변위 0.18반지름, 노이즈 주파수 2.5로 0.3/s 속도로 천천히 변하고 비틀림 20도가 더해진다
나쁜 예 / Bad: 변위를 0.6반지름으로 키워 구가 찢어진 덩어리가 되고, 속도가 2/s라 끓는 것처럼 보인다
주의 / Avoid: 변위 0.3반지름 초과 금지 · 속도 0.6/s 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 변위 | 0.18반지름 | 0.1~0.3 | 노이즈 진폭 |
| 노이즈 주파수 | 2.5 | 1.5~4 | 클수록 잔주름 |
| 비틀림 | 20도 | 10~35도 | 축 방향 |
| 속도 | 0.3/s | 0.15~0.6/s | 시간 스케일 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 1.5, duration: 5, ease: 'none', onUpdate: () => { mat.uniforms.uTime.value = u.t; render(); } }, 0);
// vertex: pos += normal * noise3(pos * 2.5 + uTime) * 0.18; pos.xz = rot(pos.y * 20deg) * pos.xz;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 구 오브젝트를 노이즈 블롭으로 만들어줘. WebGL 정점 셰이더에서 법선 방향 노이즈 변위 0.18반지름, 주파수 2.5, y축 기준 비틀림 20도를 주고 uTime을 5초 동안 0에서 1.5로 ease none으로 올려. 재질은 은은한 그라데이션 색.
```

### 한국어 · Codex
```text
<파일>에 noise blob 정점 셰이더를 추가해. 변위 0.18, 주파수 2.5, 비틀림 20도, uTime 0→1.5 / 5s / ease none. 0초, 2.5초, 5초를 캡처해 표면이 찢어지지 않고 부드럽게 변하는지, 같은 시각을 두 번 seek해도 같은 프레임인지 확인해.
```

### English · Claude Code
```text
Turn the sphere object in <target> into a noise blob. In the WebGL vertex shader apply normal-direction noise displacement of 0.18 radius at frequency 2.5 and a 20 degree twist about the y axis, driving uTime from 0 to 1.5 over 5 seconds with ease none. Use a soft gradient material.
```

### English · Codex
```text
Add a noise blob vertex shader to <file>: displacement 0.18, frequency 2.5, twist 20 degrees, uTime 0 to 1.5 / 5s / ease none. Capture at 0s, 2.5s and 5s and verify the surface changes smoothly without tearing and that seeking the same time twice gives identical frames.
```

예시 / Example: 노이즈 블롭를 `.hero`에 적용해. / Apply Noise Blob to `.hero`.

## 적용 / Application

- HyperFrames: uTime을 paused 타임라인 tween으로 구동한다. 노이즈 함수는 순수 해시 기반이라 seek 결정론
- ReelForge: 씬 브리프에 변위, 주파수, 비틀림, 속도, 재질 색을 싣는다
- Scrolline Deck: 진행률에 uTime을 선형 매핑한다. 스크롤이 멈추면 형태도 멈추므로 홀드가 길면 아주 느린 별도 루프를 더한다

조합 / Pair with: [난류 왜곡 · Turbulent Displace](../turbulent-displace/) · [액체 금속 · Liquid Metal](../liquid-metal/) · [메타볼 · Metaball](../metaball/)

출처 / Sources: [codrops/WebGLBlobs](https://github.com/codrops/WebGLBlobs) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgl_morphtargets_sphere) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
