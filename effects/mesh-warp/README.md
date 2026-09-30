# Nº 423 메시 워프 · Mesh Warp

> 클립 렌더 예정 / Clip rendering planned.

**격자 제어점이 움직여 평면 이미지 전체가 천처럼 휘고 출렁이는 변형**

Grid control points move so the whole flat image bends like cloth.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 설명, 분위기 | 제품 시연, 숏폼, 설명 영상 | webgl |

## 선택 기준 / Selection

넓은 표면이 유연하게 변형되는 느낌을 준다. 이미지가 딱딱한 사진이 아니라 천 같은 재질로 바뀐다 / Makes a large surface feel flexible, turning a rigid photo into a cloth-like material.

- 깃발이나 천처럼 출렁이는 이미지를 만들 때 / Make an image ripple like a flag or fabric.
- 얼굴이나 캐릭터의 표정을 과장해 변형할 때 / Exaggerate a face or character expression.
- 전환 직전 화면을 비틀어 다음 장면으로 넘어갈 때 / Warp the frame just before moving to the next scene.

좋은 예 / Good: 6x6 격자의 제어점이 최대 24px 변위로 900ms에 물결치듯 움직이며 텍스처가 함께 휜다
나쁜 예 / Bad: 변위가 커서 격자 셀이 뒤집히거나 텍스처가 찢어진다. 모든 제어점이 같은 위상이라 그냥 이동한 것처럼 보인다
주의 / Avoid: 변위는 셀 크기의 절반 이하로 한다 · 제어점마다 위상을 다르게 준다 · 최종 프레임은 원본 격자 위치로 정확히 복귀한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.9s | 0.6~1.4s | 왕복 |
| 격자 | 6x6 | 4x4~10x10 | 제어점 수 |
| 변위 | 24px | 12~40px | 최대 |
| 위상차 | 0.3rad | 0.2~0.6rad | 제어점별 |
| 이징 | sine.inOut | sine~power2 |  |

## 구현 / Implementation (GSAP)

```js
const o = { t: 0 }; // 0..1
const disp = (i, j, t) => ({ x: Math.sin(t * Math.PI * 2 + (i + j) * 0.3) * 24 * Math.sin(t * Math.PI), y: Math.cos(t * Math.PI * 2 + (i - j) * 0.3) * 24 * Math.sin(t * Math.PI) });
tl.to(o, { t: 1, duration: 0.9, ease: 'sine.inOut', onUpdate: () => applyGrid(disp, o.t) }, 0.3);
// sin(t*PI) 가중치로 시작과 끝에서 변위가 정확히 0
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
WebGL과 GSAP으로 <이미지>에 6x6 메시 워프를 넣어줘. 제어점마다 위상차 0.3rad로 x, y를 최대 24px 물결치게 움직이고 변위에 sin(t*PI) 가중치를 곱해 시작과 끝에서 정확히 0으로 돌아오게 해. 0.3초부터 0.9초 동안 sine.inOut으로 t를 0에서 1까지 tween하고 텍스처가 함께 휘게 해. paused 타임라인으로 seek 가능하게 만들어.
```

### 한국어 · Codex
```text
<파일>에 mesh-warp를 적용해. disp(i,j,t)=sin(2πt+(i+j)*0.3)*24*sin(πt)를 x에, cos 항을 y에 적용하고 tween 객체 t를 position 0.3, duration 0.9, ease sine.inOut으로 0→1, onUpdate에서 applyGrid를 호출한다. 0.3초는 원본과 동일, 0.75초는 최대 변위이며 셀이 뒤집히지 않는지, 1.3초는 원본과 픽셀 차이 0인지 캡처로 확인해.
```

### English · Claude Code
```text
Use WebGL and GSAP to add a 6x6 mesh warp to <image>. Move each control point in a wave with a 0.3 rad phase step, up to 24px in x and y, and multiply displacement by sin(t*PI) so it returns exactly to 0 at start and end. Tween t from 0 to 1 starting at 0.3 seconds over 0.9 seconds with sine.inOut, and warp the texture with it. Paused, seekable timeline.
```

### English · Codex
```text
Apply mesh-warp in <file>. Use disp(i,j,t)=sin(2*PI*t+(i+j)*0.3)*24*sin(PI*t) for x and a cos term for y; tween object t 0 to 1 at position 0.3, duration 0.9, ease sine.inOut and call applyGrid in onUpdate. Capture 0.3s (identical to the source), 0.75s (maximum displacement, no flipped cells) and 1.3s (zero pixel diff against the source).
```

예시 / Example: 메시 워프를 `.hero`에 적용해. / Apply Mesh Warp to `.hero`.

## 적용 / Application

- HyperFrames: 변위 함수를 t의 순수 함수로 두고 시작과 끝 가중치를 0으로 만든다. seek 시에도 정확히 원위치에 돌아온다
- ReelForge: 브리프에 이미지, 격자 6x6, 변위 24, 위상차, 0.9s를 싣는다
- Scrolline Deck: 진행률 0~1을 t에 그대로 매핑한다. 가중치 덕에 스크롤이 멈춰도 왜곡이 자연스럽게 잔존한다

조합 / Pair with: [벤드 · Bend](../bend/) · [엘라스틱 메시 · Elastic Mesh](../elastic-mesh/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
