# Nº 527 다체 궤도 군집 · N-body Orbital Cluster

> 클립 렌더 예정 / Clip rendering planned.

**여러 점이 서로 끌어당기며 작은 무리와 회전 궤도를 만드는 다체 중력 시뮬레이션**

Many points attract one another and form small clusters and orbiting groups.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기 | 설명 영상, 데이터 스토리, 발표 | canvas |

## 선택 기준 / Selection

상호 작용과 중력이 만드는 구조. 흩어진 것들이 스스로 뭉쳐 짜임새가 생긴다 / Structure created by interaction and gravity. Scattered things gather themselves into an arrangement.

- 별, 은하, 군집, 자기조직 개념을 설명할 때 / Explain stars, galaxies, clustering and self-organization.
- 흩어진 점이 서로 끌려 모이는 클러스터링 개념을 비유할 때 / Use as a metaphor for scattered points pulling together into clusters.

좋은 예 / Good: 점 250개가 중력 상수 0.8로 서로 당기며 5초 동안 작은 무리 2~3개와 소용돌이 궤도로 모인다
나쁜 예 / Bad: 완화 반경이 없어 근접한 점이 튕겨 나가며 화면 밖으로 사라지거나 스텝이 커서 에너지가 폭주한다
주의 / Avoid: 완화 반경 8px 미만 금지(폭주) · 점 400개 초과 금지(계산 지연)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점 수 | 250 | 120~400 | 시드 초기 분포 |
| 중력 상수 | 0.8 | 0.4~1.2 | 거리 제곱 반비례 |
| 완화 반경 | 12px | 8~20px | 근접 폭주 방지 |
| 스텝 | 8.33ms | 4~16ms | 고정 dt 120Hz |
| 지속 | 5s | 3~8s | 사전 계산 600스텝 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
let s = seedBodies(3, 250); const frames = [];
for (let k = 0; k < 600; k++) { for (let sub = 0; sub < 1; sub++) step(s, 1/120, 0.8, 12); frames.push(s.map(b => [b.x, b.y])); }
const u = { k: 0 };
tl.to(u, { k: 599, duration: 5, ease: 'none', onUpdate: () => draw(frames[Math.round(u.k)]) }, 0);
// step: a_i = sum G*(rj-ri)/(|d|^2+eps^2)^(3/2), 세미 임플리시트 오일러
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 다체 궤도 군집을 넣어줘. 점 250개를 시드 3으로 원반 분포에 두고, 중력 상수 0.8, 완화 반경 12px, 고정 dt 1/120로 600스텝을 사전 계산해 표로 저장해. 5초 동안 인덱스만 선형 재생하고, 점은 반경 2px 흰색 불투명도 0.8, 속도가 빠를수록 청록으로 물들게 해.
```

### 한국어 · Codex
```text
<파일>에 N-body 시뮬레이션을 추가해. 점 250개(시드 3), a_i=Σ0.8*(rj-ri)/(|d|²+12²)^1.5, 세미 임플리시트 오일러 dt=1/120로 600프레임을 사전 계산해 frames[]에 저장. GSAP으로 k를 0→599, 5초 선형 tween. 0.5초·2.5초·5초 캡처로 점이 무리로 모이고 화면 밖으로 탈출한 점이 10% 미만인지 확인해.
```

### English · Claude Code
```text
Add an N-body orbital cluster to <target>. Place 250 points in a disc distribution from seed 3 and precompute 600 steps into a table with gravity constant 0.8, softening radius 12px and fixed dt of 1/120. Play the index linearly over 5 seconds, drawing points as 2px white at 0.8 opacity, tinting teal as speed increases.
```

### English · Codex
```text
Add an N-body simulation to <file>. 250 points (seed 3), a_i = sum 0.8*(rj-ri)/(|d|^2+12^2)^1.5, semi-implicit Euler at dt=1/120, 600 frames precomputed into frames[]. Tween k 0 to 599 over 5 s linear with GSAP. Capture 0.5 s, 2.5 s and 5 s to confirm points gather into clusters and fewer than 10 percent escape the frame.
```

예시 / Example: 다체 궤도 군집를 `.hero`에 적용해. / Apply N-body Orbital Cluster to `.hero`.

## 적용 / Application

- HyperFrames: 600스텝을 시드 3으로 사전 계산해 표로 저장하고 타임라인은 인덱스만 재생한다. 250점의 O(n2)는 사전 계산에서만 돈다
- ReelForge: 씬 브리프에 점 250, G 0.8, 완화 12px, dt 8.33ms, 시드 3과 초기 분포(원반)를 싣는다
- Scrolline Deck: 진행률을 프레임 인덱스에 매핑한다. 사전 계산이라 역스크롤과 점프에도 결과가 고정이다

조합 / Pair with: [보이드 군집 · Boid Flocking](../boid-flocking/) · [입자 힘장 · Particle Force Field](../particle-force-field/) · [이상 끌개 · Strange Attractor Trails](../strange-attractor/) · [포스 레이아웃 정착 · Force-directed Layout Settling](../force-layout-settling/)

출처 / Sources: [nature-of-code/noc-book-2](https://natureofcode.com/forces/) (unknown) · [mrdoob/three.js](https://threejs.org/examples/#webgl_gpgpu_protoplanet) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
