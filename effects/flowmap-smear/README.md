# Nº 467 흐름맵 번짐 · Flowmap Smear

> 클립 렌더 예정 / Clip rendering planned.

**이동 방향으로 이미지가 휘거나 일그러졌다가 시간이 지나며 원래대로 복원되는 번짐**

The image bends or smears in the direction of motion, then recovers over time.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 피드백, 분위기 | 웹 UI, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Image Decay Distortion, 이미지 변형 잔류, Velocity-map distortion, DecayCard, GridDistortion, RippleDistortion, On-Scroll Image Distortion

## 선택 기준 / Selection

움직임의 속도와 관성이 화면 표면에 남는 느낌. 커서나 오브젝트가 지나간 자국 / The speed and inertia of a movement left as a mark on the surface, like a cursor trail.

- 커서·터치가 지나간 이미지 위에 잔상성 변형을 남길 때 / Leave a residual distortion on an image where a cursor or touch passed.
- 빠르게 움직인 오브젝트의 속도감을 표면 변형으로 보여 줄 때 / Show the speed of a fast-moving object as surface deformation.

좋은 예 / Good: 커서가 오른쪽으로 빠르게 지나가면 그 경로의 이미지가 최대 20px 밀려 늘어났다가 0.9초에 걸쳐 제자리로 돌아온다
나쁜 예 / Bad: 변위가 60px을 넘어 이미지가 찢기거나, 복원이 되지 않아 화면이 계속 일그러져 있다
주의 / Avoid: 변위 40px 초과 금지 · 복원 시간 0.5초 미만 금지(튀어 보임)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 복원 시간 | 0.9s | 0.5~1.5s | 변위가 0으로 돌아오는 시간 |
| 최대 변위 | 20px | 10~40px | 1920px 기준 |
| 감쇠 | 0.9 | 0.85~0.95 | 프레임당 유지율 |
| 브러시 반경 | 120px | 80~200px | 흐름 자국의 폭 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const s = { dx: 0, dy: 0 };   // 마지막 이동 벡터
function hit(vx, vy) { s.dx = vx; s.dy = vy;
  gsap.to(s, { dx: 0, dy: 0, duration: 0.9, ease: 'power2.out', overwrite: true, onUpdate: draw }); }
// GLSL: uv -= flow.rg * 0.02 * falloff(distance(uv, mouse)); // flow는 이동 방향과 크기
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 흐름맵 번짐을 넣어줘. 1초 동안 가상 커서가 (300,540)에서 (1500,540)으로 이동하고, 지나간 반경 120px 영역의 이미지가 이동 방향으로 최대 20px 밀려 늘어나게 해. 그 뒤 0.9초에 걸쳐 power2.out으로 제자리로 복원돼. 커서 경로는 타임라인 키프레임으로 정의하고 실시간 입력은 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 UV 변위 셰이더를 추가해. flow 벡터는 커서 이동량에 비례, 최대 변위 20px, 브러시 반경 120px, 이동 후 0.9초 power2.out 복원. 커서 경로 (300,540)→(1500,540) 1초를 키프레임으로 고정. 0.5초·1.2초·2.2초 캡처로 변형이 생겼다가 완전히 복원되는지 확인해.
```

### English · Claude Code
```text
Add a flowmap smear to the image in <target>. A virtual cursor moves from (300,540) to (1500,540) over 1 second; within a 120px radius along the path the image is pushed up to 20px in the direction of motion, then recovers to rest over 0.9 seconds with power2.out. Define the cursor path as timeline keyframes and do not use live input.
```

### English · Codex
```text
Add a UV displacement shader to the image canvas in <file>. Flow vector proportional to cursor delta, max displacement 20px, brush radius 120px, 0.9 s power2.out recovery. Fix the cursor path (300,540) to (1500,540) over 1 s as keyframes. Capture 0.5 s, 1.2 s and 2.2 s to confirm distortion appears and then fully recovers.
```

예시 / Example: 흐름맵 번짐를 `.hero`에 적용해. / Apply Flowmap Smear to `.hero`.

## 적용 / Application

- HyperFrames: 입력이 없는 렌더에서는 커서 경로를 타임라인 키프레임으로 정의하고 각 이동 직후 복원 tween을 걸어 paused 타임라인에서 재현한다
- ReelForge: 씬 브리프에 경로 시작·끝 좌표, 변위 20px, 복원 0.9초, 브러시 120px을 싣는다. 실시간 커서는 쓰지 않는다
- Scrolline Deck: 스크롤 속도를 이동 벡터로 삼고 진행률 변화량에 비례해 변위를 주며 복원은 ease-out으로 감쇠한다

조합 / Pair with: [속도 기반 스큐 · Velocity Skew](../velocity-skew/) · [마그네틱 왜곡 · Magnetic Distortion](../magnetic-distortion/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [커서 트레일 · Cursor Trail](../cursor-trail/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [tympanus.net/codrops](https://tympanus.net/Tutorials/ShaderOnScroll/) (unknown) · [martinlaxenaire/curtainsjs](https://www.curtainsjs.com/examples/ping-pong-shading-flowmap/) (MIT) · [oframe/ogl](https://oframe.github.io/ogl/examples/mouse-flowmap.html) (unknown) · [artcodev/three-fluid-fx](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/distortion/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
