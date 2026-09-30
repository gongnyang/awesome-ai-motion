# Nº 194 셰이더 와이프 · Shader Directional Warp Wipe

![셰이더 와이프 · Shader Directional Warp Wipe](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**휘어진 부드러운 대각 경계가 화면을 쓸고 지나가며, 경계 근처의 두 도판이 진행 방향으로 늘어나 번진다**

A soft, bent diagonal edge sweeps across the frame while both plates near the edge stretch and smear along the direction of travel.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기, 분위기 | 숏폼, 발표, 설명 영상, 스크롤덱 | webgl |

다른 이름 / Also known as: 방향 워프 와이프, Directional warp, Warp wipe, Smear wipe, 휘는 대각 와이프

## 선택 기준 / Selection

장면이 밀려 나가는 속도감과 물성. 딱딱한 직선 와이프보다 한 장면이 다른 장면으로 휩쓸려 바뀌는 느낌을 준다 / Speed and physical drag as one scene is swept into the next, unlike a hard straight wipe.

- 문장 도판에서 큰 숫자 도판으로 힘 있게 넘어갈 때 / Cut from a sentence plate to a large-number plate with force.
- 밝은 장면과 어두운 장면을 번갈아 이어 붙일 때 / Alternate light and dark scenes in sequence.
- 장 구분 전환에 속도감을 더하고 싶을 때 / Add speed to a chapter-break transition.

좋은 예 / Good: 종이색 문장 도판 위로 45도 대각 경계가 왼쪽 아래에서 휘며 올라오고, 경계 근처 글자가 대각 방향으로 늘어졌다가 먹색 939 도판으로 바뀐다
나쁜 예 / Bad: 번짐 세기를 0.3 이상 줘 전환 내내 화면 전체가 뭉개지거나, 경계를 직선·단단하게 둬 일반 와이프와 구분이 안 된다
주의 / Avoid: 번짐 샘플을 10개 아래로 두지 않는다(글자가 계단처럼 겹쳐 보임) · 경계 휨 진폭 0.15 초과 금지(물결처럼 흔들려 보임) · 셰이더 코드를 외부에서 복사하지 않는다(아이디어만 참고해 새로 작성)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 방향 | 45° (0.707, 0.707) | 20~60° | 화면 비율을 보정한 좌표에서 계산 |
| 경계 휨 | 0.08·sin + 0.03·sin | 0~0.15 | 경계선 방향 좌표의 사인 두 개 |
| 경계 부드러움 | ±0.035 | 0.01~0.06 | smoothstep 폭 |
| 번짐 세기 | 0.10, 28샘플 | 0.05~0.18 | 경계 가우시안 k로 가중, 진행 방향으로 늘림 |
| 전환 시간 | 2.0s | 0.8~2.2s | sine.inOut |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
float e = mix(-.16, 1.16, u_p) + .08*sin(t*2.2+1.3) + .03*sin(t*6.1+u_p*4.);
float x = s - e;
float m = smoothstep(-.035, .035, x);   // 부드러운 경계
float k = exp(-x*x/.012);              // 경계 근처 가중
vec4 a = smear(A, v - dir*k*.10, dir, k*.10);
vec4 b = smear(B, v + dir*k*.10, -dir, k*.10);
gl_FragColor = mix(b, a, m);
tl.to(pr, { p: 1, duration: 2.0, ease: 'sine.inOut', onUpdate: () => draw(pr.p) }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상> 도판을 다음 도판으로 넘기는 WebGL 방향 워프 와이프를 새로 작성해줘. 두 도판은 폰트 로드 뒤 2D 캔버스에 그려 텍스처로 쓰고, 경계는 45도 대각 좌표에서 u_p에 따라 -0.16에서 1.16까지 움직이며 사인 두 개(0.08, 0.03)로 휘게 해. 경계 폭 ±0.035 smoothstep으로 섞고, 경계 가우시안 가중 k로 두 도판을 진행 방향으로 0.10만큼 늘려 28샘플로 번지게 해. u_p는 GSAP 프록시 tween 2.0초 sine.inOut, 끝에 0.7초 홀드.
```

### 한국어 · Codex
```text
<파일>의 전환을 셰이더 와이프로 구현해. WebGL 컨텍스트는 preserveDrawingBuffer:true, 텍스처 두 장(UNPACK_FLIP_Y, CLAMP_TO_EDGE, LINEAR), 프래그먼트 셰이더에서 s=dot(q,(0.707,0.707)) 정규화, e=mix(-0.16,1.16,u_p)+휨, m=smoothstep(-0.035,0.035,s-e), k=exp(-(s-e)^2/0.012)로 A·B를 각각 반대 방향 28샘플 번짐 후 섞는다. 0.7초·1.2초·1.7초·2.8초를 캡처해 휘어진 경계와 번짐이 보이고 헤드리스 캡처가 빈 화면이 아닌지 확인해.
```

### English · Claude Code
```text
Write a new WebGL directional warp wipe in <file> that hands <target> off to the next plate. Draw both plates to 2D canvases after fonts load and use them as textures; move the edge along 45-degree diagonal coordinates from -0.16 to 1.16 with u_p and bend it with two sines (0.08 and 0.03). Blend across a ±0.035 smoothstep and, weighted by a Gaussian k around the edge, stretch both plates 0.10 along the travel direction with 28 smear samples. Drive u_p with a 2.0s sine.inOut GSAP proxy tween and hold 0.7s at the end.
```

### English · Codex
```text
Implement the transition in <file> as a shader wipe. Use a WebGL context with preserveDrawingBuffer:true and two textures (UNPACK_FLIP_Y, CLAMP_TO_EDGE, LINEAR); in the fragment shader normalize s=dot(q,(0.707,0.707)), set e=mix(-0.16,1.16,u_p)+bend, m=smoothstep(-0.035,0.035,s-e), k=exp(-(s-e)^2/0.012), smear A and B with 28 samples in opposite directions, then mix. Capture 0.7s, 1.2s, 1.7s and 2.8s to verify the bent edge and smear are visible and the headless capture is not blank.
```

예시 / Example: 셰이더 와이프를 `.hero`에 적용해. / Apply Shader Directional Warp Wipe to `.hero`.

## 적용 / Application

- HyperFrames: 두 도판을 폰트 로드 뒤 2D 캔버스에 그려 텍스처로 올리고, WebGL 캔버스(preserveDrawingBuffer:true)에 유니폼 u_p 하나만 프록시 tween으로 넘긴다
- ReelForge: 전환 비트에 방향(45°)·휨(0.08)·번짐(0.10)·시간(2.0s)을 노출하고, 앞뒤 장면은 프레임 스냅샷 텍스처로 받는다
- Scrolline Deck: u_p를 스크롤 진행률에 묶는다. 경계가 멈춰 있을 때도 번짐이 보이므로 진행률 0.95 이후는 u_p를 1로 고정해 홀드를 깨끗하게 둔다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [크로매틱 와이프 · Chromatic Wipe](../chromatic-wipe/) · [흐름맵 번짐 · Flowmap Smear](../flowmap-smear/) · [스미어 프레임 · Smear Frame](../smear-frame/)

출처 / Sources: [gl-transitions, directionalwarp (아이디어 참고)](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/directionalwarp.glsl) (MIT) · [MDN, WebGL tutorial: Using textures in WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) (CC-BY-SA 2.5)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
