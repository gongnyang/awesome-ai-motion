# Nº 513 보이드 군집 · Boid Flocking

> 클립 렌더 예정 / Clip rendering planned.

**작은 개체들이 거리를 유지하며 방향을 맞추고 한 무리로 함께 회전하는 군집 행동**

Small agents keep their distance, align heading and turn together as one flock.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기 | 설명 영상, 데이터 스토리, 숏폼 | canvas |

다른 이름 / Also known as: 보이드 군집 비행, Flocking simulation

## 선택 기준 / Selection

개별 규칙이 집단의 움직임을 만든다는 것. 지시 없는 협응 / Individual rules producing collective movement. Coordination with no one in charge.

- 자기조직, 창발, 멀티 에이전트 개념을 시각화할 때 / Visualize self-organization, emergence and multi-agent ideas.
- 에이전트들이 협력하는 인상을 주는 배경을 만들 때 / Create a backdrop that suggests agents cooperating.

좋은 예 / Good: 개체 120개가 이웃 반경 65px로 정렬하고 분리 반경 18px로 간격을 지키며 6초 동안 한 무리로 회전한다
나쁜 예 / Bad: 분리가 약해 한 점에 뭉치거나 최대 속도가 커서 무리가 흩어지고 개체가 화면 밖으로 나간다
주의 / Avoid: 최대 속도 120px/s 초과 금지 · 경계는 반발 조향으로 처리해 화면 안에 유지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 개체 수 | 120 | 60~200 | 시드 초기 분포 |
| 이웃 반경 | 65px | 50~90 | 정렬·응집 대상 |
| 분리 반경 | 18px | 12~26 | 밀어냄 |
| 최대 속도 | 80px/s | 60~120 | 고정 dt 1/60 |
| 가중치 | 정렬1.0 응집0.8 분리1.4 | 고정 | 조향력 배율 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const B = seedBoids(5, 120), frames = [];
for (let k = 0; k < 360; k++) { stepBoids(B, 1/60, { r: 65, sep: 18, vmax: 80, w: [1.0, 0.8, 1.4] }); frames.push(B.map(b => [b.x, b.y, Math.atan2(b.vy, b.vx)])); }
const u = { k: 0 };
tl.to(u, { k: 359, duration: 6, ease: 'none', onUpdate: () => draw(frames[Math.round(u.k)]) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 보이드 군집을 넣어줘. 개체 120개를 시드 5로 배치하고 이웃 반경 65px, 분리 반경 18px, 최대 속도 80px/s, 조향 가중치 정렬 1.0, 응집 0.8, 분리 1.4로 고정 dt 1/60에서 360스텝을 사전 계산해. 6초 동안 재생하고 개체는 길이 10px 삼각형으로 진행 방향을 보게 해. 경계 40px 안쪽에서는 반발 조향을 줘.
```

### 한국어 · Codex
```text
<파일>에 boids 시뮬레이션을 추가해. 개체 120(시드 5), 이웃 65px, 분리 18px, vmax 80, 가중치 [1.0,0.8,1.4], 경계 40px 반발, dt=1/60로 360프레임을 사전 계산해 frames[]에 저장. GSAP으로 k를 0→359, 6초 선형 tween. 1초·3초·6초 캡처로 무리가 정렬되어 함께 돌고 화면 밖 개체가 없는지 확인해.
```

### English · Claude Code
```text
Add boid flocking to <target>. Place 120 agents from seed 5 and precompute 360 steps at fixed dt 1/60 with neighbor radius 65px, separation radius 18px, max speed 80px per second, and steering weights alignment 1.0, cohesion 0.8, separation 1.4. Play 6 seconds, drawing each as a 10px triangle facing its heading, with a repulsion steer within 40px of the edges.
```

### English · Codex
```text
Add a boids simulation to <file>. 120 agents (seed 5), neighbor 65px, separation 18px, vmax 80, weights [1.0,0.8,1.4], 40px edge repulsion, dt=1/60, 360 frames precomputed into frames[]. Tween k 0 to 359 over 6 s linear with GSAP. Capture 1 s, 3 s and 6 s to confirm the flock aligns and turns together with no agents outside the frame.
```

예시 / Example: 보이드 군집를 `.hero`에 적용해. / Apply Boid Flocking to `.hero`.

## 적용 / Application

- HyperFrames: 시드 5로 360스텝을 사전 계산해 표로 저장하고 인덱스만 재생한다. 삼각형 개체는 heading으로 회전시켜 그린다
- ReelForge: 씬 브리프에 개체 120, 이웃 65px, 분리 18px, 최대 80px/s, 가중치 3종, 시드 5를 싣는다
- Scrolline Deck: 진행률을 프레임 인덱스에 매핑한다. 사전 계산이라 스크럽과 점프에 결과가 고정이다

조합 / Pair with: [다체 궤도 군집 · N-body Orbital Cluster](../nbody-cluster/) · [경로 위 행렬 · Path Convoy](../path-convoy/) · [랜덤 워크 · Random Walk](../random-walk/) · [입자 생명 · Particle Life Clusters](../particle-life/)

출처 / Sources: [processing/p5.js-website](https://p5js.org/examples/Classes-And-Objects-Flocking/) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgl_gpgpu_birds) (MIT) · [nature-of-code/noc-book-2](https://natureofcode.com/autonomous-agents/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
