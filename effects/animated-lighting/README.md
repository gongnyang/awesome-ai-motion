# Nº 555 조명 애니메이션 · Animated Lighting

> 클립 렌더 예정 / Clip rendering planned.

**입체 물체를 비추는 빛의 색과 세기가 바뀌어 물체의 다른 부분이 드러나는 연출**

The color and intensity of light on a 3D object change, revealing different parts of it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 분위기, 강조 | 제품 시연, 설명 영상, 숏폼 | webgl |

다른 이름 / Also known as: Animated scene lighting, 장면 조명 변화

## 선택 기준 / Selection

형태와 분위기가 조명 하나로 바뀐다. 어둠 속에서 필요한 부분만 빛을 받아 주목 영역이 정해진다 / Form and mood shift with the lighting alone, and the lit areas decide where to look.

- 제품 모델의 윤곽을 빛으로 훑어 보여 줄 때 / Sweep light across a product model's contours.
- 차가운 색에서 따뜻한 색으로 분위기를 바꿀 때 / Change mood from cool to warm.
- 어둠에서 대상을 점등하듯 공개할 때 / Reveal a subject as if switching on a light in the dark.

좋은 예 / Good: 광원 세기가 0에서 3까지 1.6초 동안 올라가며 청색에서 주황으로 색이 바뀌고, 물체의 윗면 윤곽이 먼저 밝아진다
나쁜 예 / Bad: 세기가 갑자기 튀어 흰색으로 날아가거나, 색만 바뀌고 광원 위치가 그대로라 평평해 보인다
주의 / Avoid: intensity 3 초과 금지(하이라이트가 날아감) · 색 전환은 2색 이내로 한다 · 보간은 HSL이 아니라 RGB 선형으로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 1.6s | 1.0~2.4s | 세기와 색 동시 |
| intensity | 0→3 | 0~3 | 3 초과 금지 |
| 색 | #4aa3ff→#ff9a3c | 2색 | RGB 보간 |
| 광원 이동 | x -2→2 | -3~3 | 선택 |
| 이징 | power2.inOut | sine~power3 |  |

## 구현 / Implementation (GSAP)

```js
const c0 = new THREE.Color('#4aa3ff'), c1 = new THREE.Color('#ff9a3c');
const s = { t: 0, k: 0 };
tl.to(s, { t: 1, k: 3, duration: 1.6, ease: 'power2.inOut', onUpdate() {
  light.color.copy(c0).lerp(c1, s.t); light.intensity = s.k;
  light.position.x = -2 + 4 * s.t; } }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
Three.js와 GSAP으로 <모델>의 조명을 애니메이션해 줘. 0.3초부터 1.6초 동안 power2.inOut으로 광원 intensity를 0에서 3으로, 색을 #4aa3ff에서 #ff9a3c로 RGB 보간하고 광원 x를 -2에서 2로 옮겨. 세기는 3을 넘기지 않고 값은 객체 tween의 onUpdate로 갱신해 paused 타임라인에서 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 animated-lighting을 적용해. 값 객체 {t,k}를 position 0.3, duration 1.6, ease power2.inOut으로 t 0→1, k 0→3 tween하고 onUpdate에서 light.color, intensity, position.x를 갱신한다. 0.3초는 어두움, 1.1초는 중간 색과 세기, 2.0초는 주황 최대 밝기이며 흰색으로 날아가지 않는지 캡처로 확인해.
```

### English · Claude Code
```text
Use Three.js and GSAP to animate the lighting on <model>. From 0.3 seconds over 1.6 seconds with power2.inOut, raise light intensity from 0 to 3, lerp the color from #4aa3ff to #ff9a3c in RGB, and move the light x from -2 to 2. Keep intensity at or below 3, updating values in the onUpdate of an object tween on a paused, seekable timeline.
```

### English · Codex
```text
Apply animated-lighting in <file>. Tween a value object {t,k} at position 0.3, duration 1.6, ease power2.inOut with t 0 to 1 and k 0 to 3, and update light.color, intensity and position.x in onUpdate. Capture 0.3s (dark), 1.1s (mid color and intensity) and 2.0s (orange at maximum, not blown out to white).
```

예시 / Example: 조명 애니메이션를 `.hero`에 적용해. / Apply Animated Lighting to `.hero`.

## 적용 / Application

- HyperFrames: Three.js 조명 값을 GSAP 객체 tween의 onUpdate에서 갱신하고 렌더는 seek 시점 값만 그린다. 캡처 시각을 명시한다
- ReelForge: 브리프에 모델, 시작색과 끝색, intensity 0~3, 광원 이동 범위를 싣는다
- Scrolline Deck: 진행률 0~1을 t, k에 그대로 매핑한다. 역방향 스크럽에서도 색이 되돌아온다

조합 / Pair with: [오브젝트 턴테이블 · Object Turntable](../object-turntable/) · [이동 광원 · Moving Light](../moving-light/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/)

출처 / Sources: [theatre-js/theatre](https://www.theatrejs.com/docs/latest/manual/sequences) (Apache-2.0 / AGPL-3.0 (구성요소별)) · [theatre-js/theatre](https://www.theatrejs.com/docs/latest/getting-started/with-react-three-fiber) (Apache-2.0 / AGPL-3.0 (구성요소별))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
