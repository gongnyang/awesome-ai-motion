# Nº 538 강체 충돌 · Rigid Body Cascade

> 클립 렌더 예정 / Clip rendering planned.

**여러 공이나 상자가 중력으로 떨어져 서로 부딪히고 튕기며 바닥에 쌓이는 물리 낙하**

Many balls or boxes fall under gravity, collide, bounce and pile up on the floor.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 설명 | 숏폼, 설명 영상, 웹 UI | canvas |

다른 이름 / Also known as: Bouncing Ball Pit, 공 무리 충돌, 강체 충돌 연쇄

## 선택 기준 / Selection

물체에 실제 무게와 부딪힘이 있다는 느낌. 많은 개체가 만드는 우연하지만 자연스러운 쌓임 / Real weight and impact. Chance yet natural stacking from many bodies.

- 많은 항목이 한꺼번에 쏟아져 쌓이는 장면(재고·알림·데이터 조각)을 보여 줄 때 / Show many items pouring in and piling up, such as stock, alerts or data fragments.
- 전환 후 바닥에 쌓인 조각을 로고나 제목으로 이어 갈 때 / Lead pieces resting on the floor into a logo or title after a transition.

좋은 예 / Good: 반경 12px 공 30개가 4초 동안 위에서 쏟아져 바닥에서 반발 0.6으로 튀고 서로 밀치며 아래에 쌓인다
나쁜 예 / Bad: 공이 서로 통과하거나 바닥에서 계속 떨려 멈추지 않고, 난수를 매번 바꿔 캡처마다 배치가 달라진다
주의 / Avoid: 반발 0.8 초과 금지(끝없이 튐) · 실시간 난수 금지, 시드 배열로 초기 위치를 고정

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 4s | 3~6s | 낙하부터 정지까지 |
| 개수 | 30 | 15~60 | 시드로 고정 |
| 반경 | 12px | 8~20px | 1920px 기준 |
| 중력 | 600px/s2 | 400~900 | 아래 방향 |
| 반발계수 | 0.6 | 0.4~0.75 | 바닥·벽·서로 |

이징 / Ease: `none (물리)`

## 구현 / Implementation (GSAP)

```js
// 고정 스텝 시뮬레이션을 미리 계산해 프레임 표로 저장한다
function sim(seed) { const dt = 1/60, b = init(seed); const frames = [];
  for (let f = 0; f < 240; f++) { step(b, dt, 600, 0.6); frames.push(b.map(o => [o.x, o.y])); } return frames; }
const F = sim(7), u = { f: 0 };
tl.to(u, { f: 239, duration: 4, ease: 'none', onUpdate: () => draw(F[Math.round(u.f)]) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 강체 낙하 효과를 넣어줘. 반경 12px 원 30개를 시드 7로 고정한 위치에서 위쪽 화면 밖에 두고, 중력 600px/s2, 반발계수 0.6으로 4초 동안 떨어져 바닥과 서로 부딪히게 해. 고정 스텝 1/60초로 미리 계산해 프레임 표로 저장하고 타임라인이 인덱스만 재생하게 해. Math.random은 시드 난수로 대체해.
```

### 한국어 · Codex
```text
<파일>에 원 충돌 시뮬레이션을 추가해. 고정 dt=1/60, 240프레임을 시드 7 난수로 사전 계산해 F[]에 저장하고 GSAP은 f를 0→239로 4초 선형 tween한다. 0.5초·2초·3.8초 캡처로 공이 겹치지 않고 마지막 프레임에서 정지해 있는지 확인해. 두 번 실행해 같은 프레임이 나오는지도 비교해.
```

### English · Claude Code
```text
Add a rigid-body cascade to <target>. Place 30 circles of radius 12px above the frame from fixed seed 7 and let them fall for 4 seconds with gravity 600px/s2 and restitution 0.6, colliding with the floor and each other. Precompute at a fixed 1/60 s step into a frame table and let the timeline only play back the index. Replace Math.random with a seeded PRNG.
```

### English · Codex
```text
Add a circle collision simulation to <file>. Precompute 240 frames at fixed dt=1/60 with a seed-7 PRNG into F[], then tween f from 0 to 239 over 4 s linear with GSAP. Capture 0.5 s, 2 s and 3.8 s to check no circles overlap and the last frame is at rest. Run twice and confirm identical frames.
```

예시 / Example: 강체 충돌를 `.hero`에 적용해. / Apply Rigid Body Cascade to `.hero`.

## 적용 / Application

- HyperFrames: 시뮬레이션은 고정 dt 1/60로 240프레임을 미리 계산해 표로 저장하고, 타임라인은 프레임 인덱스만 tween한다. 이러면 seek가 정확하다
- ReelForge: 씬 브리프에 개수 30, 반경 12px, 중력 600, 반발 0.6, 시드 7과 바닥 y좌표를 싣는다
- Scrolline Deck: 진행률 0~1을 프레임 인덱스 0~239에 선형 매핑한다. 역스크롤도 표를 거꾸로 읽으면 되므로 안전하다

조합 / Pair with: [바운스 착지 · Bounce Landing](../bounce-landing/) · [충돌 밀어내기 · Collision Displacement](../collision-displacement/) · [입자 힘장 · Particle Force Field](../particle-force-field/) · [소프트 바디 흔들림 · Soft Body Jiggle](../soft-body-jiggle/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [mrdoob/three.js](https://threejs.org/examples/#physics_rapier_instancing) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_instancing) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
