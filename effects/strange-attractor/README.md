# Nº 542 이상 끌개 · Strange Attractor Trails

> 클립 렌더 예정 / Clip rendering planned.

**많은 점이 복잡한 3D 궤도를 반복해서 돌며 고리와 겹친 띠를 만드는 이상 끌개**

Many points loop through complex 3D orbits, drawing rings and overlapping bands.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기 | 설명 영상, 데이터 스토리, 발표 | webgl |

다른 이름 / Also known as: 이상 끌개 궤적, Chaotic attractor

## 선택 기준 / Selection

질서와 혼돈이 함께 있는 동역학. 단순한 식에서 나온 복잡한 형태 / Dynamics where order and chaos coexist. Complex form born from a simple equation.

- 카오스, 수학, 복잡계 주제의 시각 앵커를 만들 때 / Build a visual anchor for chaos, math or complex systems.
- 기술 발표의 오프닝 배경으로 정교한 궤도 무늬를 쓸 때 / Use an intricate orbital pattern as the opener background for a technical talk.

좋은 예 / Good: 점 20000개가 로렌츠 끌개 궤도를 따라 6초 동안 적분되며 꼬리 감쇠 0.97로 두 날개 모양의 띠를 그린다
나쁜 예 / Bad: 적분 스텝이 커서 궤도가 발산하거나 점이 너무 밝아 흰 덩어리가 된다
주의 / Avoid: 적분 스텝 1/64 초과 금지(발산) · 점 불투명도 0.15 초과 금지(누적으로 하얘짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 6s | 4~10s | 재생 길이 |
| 점 수 | 20000 | 8000~40000 | 시드 초기 분포 |
| 적분 스텝 | 1/128 | 1/256~1/64 | 고정 dt |
| 꼬리 감쇠 | 0.97 | 0.94~0.985 | 프레임 잔상 |
| 회전 | 20deg/s | 0~40 | y축 카메라 회전 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 상태 없는 근사: 각 점의 궤도를 사전 적분해 표로 저장(로렌츠 σ10 ρ28 β8/3)
function traj(p0, n) { let [x, y, z] = p0; const out = []; for (let k = 0; k < n; k++) { const dt = 1/128;
  const dx = 10*(y-x), dy = x*(28-z)-y, dz = x*y-8/3*z; x += dx*dt; y += dy*dt; z += dz*dt; out.push([x, y, z]); } return out; }
const T = seeds.map(s => traj(s, 768)); // 6s * 128
tl.to(u = { k: 0 }, { k: 767, duration: 6, ease: 'none', onUpdate: () => draw(T, Math.round(u.k)) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 이상 끌개 궤적을 넣어줘. 로렌츠 방정식(σ10, ρ28, β8/3)을 고정 dt 1/128로 적분한 점 20000개를 시드 초기 분포에서 시작해 6초 동안 재생하고, 카메라는 y축으로 초당 20도 회전하게 해. 각 점은 최근 24스텝을 알파 0.15에서 0으로 줄여 꼬리로 그리고 색은 청록에서 자홍으로 속도에 따라 매핑해.
```

### 한국어 · Codex
```text
<파일>에 로렌츠 끌개 궤도 표를 만들어. 점 20000개, 시드 초기점, dt=1/128, 768스텝을 사전 적분해 저장하고 GSAP으로 k를 0→767, 6초 선형 tween하며 최근 24스텝을 알파 감쇠로 그려. 카메라 y축 회전 20deg/s. 1.5초·3초·6초 캡처로 두 날개 띠가 나타나고 발산 점이 없는지, 재실행 시 같은 프레임인지 확인해.
```

### English · Claude Code
```text
Add strange attractor trails to <target>. Integrate 20000 points of the Lorenz system (sigma 10, rho 28, beta 8/3) at a fixed dt of 1/128 from a seeded initial distribution, play for 6 seconds, and rotate the camera around the y axis at 20 degrees per second. Draw each point's last 24 steps as a tail from alpha 0.15 to 0, mapping color from teal to magenta by speed.
```

### English · Codex
```text
In <file>, build a Lorenz orbit table: 20000 points, seeded starts, dt=1/128, 768 steps precomputed. Tween k from 0 to 767 over 6 s linear with GSAP and draw the last 24 steps with alpha decay. Rotate the camera about y at 20 deg/s. Capture 1.5 s, 3 s and 6 s to confirm the two-wing band emerges with no diverged points and reruns match exactly.
```

예시 / Example: 이상 끌개를 `.hero`에 적용해. / Apply Strange Attractor Trails to `.hero`.

## 적용 / Application

- HyperFrames: 궤도는 시드 초기점에서 고정 dt로 사전 적분해 저장하고 타임라인은 인덱스만 넘긴다. GPU 합성은 꼬리 감쇠 대신 최근 24스텝을 알파로 그린다
- ReelForge: 씬 브리프에 끌개 종류(로렌츠), 점 수, dt 1/128, 카메라 회전 20deg/s, 색 팔레트를 싣는다
- Scrolline Deck: 진행률 0~1을 스텝 인덱스와 카메라 각에 함께 매핑한다. 잔상은 누적 대신 최근 스텝 창으로 그려 역스크롤에서도 맞다

조합 / Pair with: [입자 생명 · Particle Life Clusters](../particle-life/) · [흐름장 · Flow Field](../flow-field/) · [차등 회전 은하 · Differential galaxy](../differential-galaxy/) · [공전 루프 · Orbit Loop](../orbit-loop/)

출처 / Sources: [QC20/Colourful-Attraction](https://github.com/QC20/Colourful-Attraction) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_tsl_compute_attractors_particles) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
