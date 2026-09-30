# Nº 530 입자 힘장 · Particle Force Field

> 클립 렌더 예정 / Clip rendering planned.

**입자들이 끌림, 밀림, 회전의 힘을 받아 중심 주위로 휘며 흔적을 남기는 효과**

Particles feel attraction, repulsion, and rotation forces, curving around a center and leaving trails.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기, 브랜딩 | 설명 영상, 발표, 웹 UI | canvas |

다른 이름 / Also known as: Force Field Traces, 힘장 궤적, Particle Attraction and Repulsion, 입자 끌림과 밀림

## 선택 기준 / Selection

보이지 않는 힘의 작용을 시각화한다. 중력이나 자기장 같은 개념을 설명하고 생동감 있는 배경이 된다 / Visualizes unseen forces to explain gravity or magnetic fields, and works as a lively background.

- 중력, 자기력, 인력과 척력 개념을 설명할 때 / To explain gravity, magnetism, attraction, and repulsion
- 힘의 중심이 있는 인트로 배경을 만들 때 / For intro backgrounds with a force center

좋은 예 / Good: 입자 300개가 힘점 3개(끌림 2, 밀림 1) 주위로 6초 동안 감쇠 0.98로 휘며 궤적 자국이 남는다
나쁜 예 / Bad: 감쇠 없이 속도가 누적되어 입자가 화면 밖으로 튀어나가거나, 실시간 적분이라 seek 결과가 다르다
주의 / Avoid: 감쇠 0.96~0.995 범위 밖 금지 · 적분은 고정 dt로 사전 계산하고 저장한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 지속 | 6000ms | 4000~9000ms | 궤적 재생 |
| 입자 수 | 300개 | 150~600개 | 시드 고정 |
| 힘점 | 3개 | 1~4개 | 끌림/밀림/회전 |
| 감쇠 | 0.98 | 0.96~0.995 | 프레임당 속도 곱 |
| dt | 1/60 | 고정 | 사전 계산 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
const traj=P.map(()=>[]);
for(let s=0;s<360;s++)P.forEach((p,i)=>{let ax=0,ay=0;F.forEach(f=>{const dx=f.x-p.x,dy=f.y-p.y,d=Math.hypot(dx,dy)+30;const k=f.k/(d*d);ax+=dx*k+f.spin*-dy*k;ay+=dy*k+f.spin*dx*k;});
 p.vx=(p.vx+ax/60)*.98;p.vy=(p.vy+ay/60)*.98;p.x+=p.vx/60;p.y+=p.vy/60;traj[i].push([p.x,p.y]);});
// draw(k): traj[i].slice(0,k) 선으로
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<배경>에 입자 힘장을 만들어줘. 입자 300개(시드 고정)를 힘점 3개(끌림 2, 밀림 1, 하나는 회전 성분 포함)의 영향으로 고정 dt 1/60, 감쇠 0.98로 360스텝 사전 계산해 궤적을 저장하고, 6초 동안 linear로 재생하며 궤적 자국을 alpha 0.3으로 그려. progress 순수 함수로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 particle-force-field를 구현해. 입자 300개, 힘점 3개, 감쇠 0.98, 6000ms linear, 360스텝 사전 계산, seed 고정. 0초, 3초, 6초를 캡처해 입자가 힘점 주위로 휘는지, 화면 밖으로 튀지 않는지, 같은 시점 재렌더가 동일한지 확인해.
```

### English · Claude Code
```text
Build a particle force field for <target>. Precompute 360 steps at fixed dt 1/60 and damping 0.98 for 300 seeded particles under 3 force points (two attractors, one repeller, one with a rotation component), store the trajectories, and play them over 6s linear with trails at alpha 0.3. Draw as a pure function of progress so it is seekable.
```

### English · Codex
```text
Implement particle-force-field in <file>: 300 particles, 3 force points, damping 0.98, 6000ms linear, 360 precomputed steps, fixed seed. Capture at 0s, 3s, and 6s to verify particles curve around force points, none fly off-screen, and re-rendering the same time is identical.
```

예시 / Example: 입자 힘장를 `.hero`에 적용해. / Apply Particle Force Field to `.hero`.

## 적용 / Application

- HyperFrames: 360스텝을 사전 계산해 궤적을 저장하고 draw(k)로 그린다. 적분 상태를 실행 중에 이어가지 않아 seek가 정확하다
- ReelForge: 브리프에 particleCount, forces[], damping, durationMs, seed를 싣는다. 힘점 좌표를 텍스트 위치와 겹치지 않게 지정한다
- Scrolline Deck: 진행률을 궤적 스텝 인덱스에 선형 매핑한다. 스크롤을 되감으면 궤적이 줄어든다

조합 / Pair with: [흐름장 · Flow Field](../flow-field/) · [입자 소용돌이 · Particle Vortex](../particle-vortex/) · [마그네틱 모션 · Magnetic Attraction](../magnetic-attraction/) · [다체 궤도 군집 · N-body Orbital Cluster](../nbody-cluster/)

출처 / Sources: local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/SKILL.md`) (Apache-2.0) · [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) (MIT) · [nature-of-code/noc-book-2](https://natureofcode.com/particles/) (unknown) · [naughtyduk/particlesGL](https://github.com/naughtyduk/particlesGL) (custom personal-noncommercial/commercial-paid)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
