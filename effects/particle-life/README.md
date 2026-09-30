# Nº 532 입자 생명 · Particle Life Clusters

> 클립 렌더 예정 / Clip rendering planned.

**여러 색의 입자가 색별 인력과 반발 규칙에 따라 막을 두른 군집이나 서로 쫓는 덩어리를 만든다**

Particles of several colors attract and repel by color, forming membrane-wrapped clusters or chasing blobs.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기 | 설명 영상, 발표, 숏폼 | canvas |

다른 이름 / Also known as: 입자 생명 군집, Particle life

## 선택 기준 / Selection

서로 다른 관계 규칙이 복잡한 집단 행동을 만든다는 것을 보여 준다. 세포나 생태계를 연상시킨다 / Shows that different relationship rules create complex collective behavior, reminiscent of cells and ecosystems.

- 창발이나 자기조직화를 설명하는 도해 배경이 필요할 때 / Use as a diagram background to explain emergence or self-organization.
- 입자 시스템 자체를 주인공으로 보여 줄 때 / Feature the particle system itself as the subject.

좋은 예 / Good: 입자 600개, 색 4종, 반경 80px, 힘 행렬로 8초 동안 막을 두른 군집이 형성된다. 감쇠 0.9, 고정 스텝 16.67ms
나쁜 예 / Bad: 힘 행렬을 매 실행마다 무작위로 뽑아 결과가 바뀐다. 상호작용 반경이 너무 커서 모든 입자가 한 점으로 뭉친다
주의 / Avoid: 힘 행렬은 시드로 고정한다(-1~1) · 입자 1500개 초과 시 프레임 하락

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 입자 수 | 600개 | 400~1000개 | 색별 150개 |
| 색 유형 | 4개 | 3~5개 | 힘 행렬 4x4 |
| 상호작용 반경 | 80px | 60~120px | 이 안에서만 힘 작용 |
| 감쇠 | 0.9 | 0.85~0.95 | 속도 곱 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const F = [[ 0.8,-0.4, 0.2,-0.1],[ 0.5, 0.6,-0.3, 0.2],[-0.2, 0.4, 0.7,-0.5],[ 0.3,-0.1, 0.5, 0.6]]; // 시드 고정 행렬
function step(ps) { ps.forEach(p => { p.v.mul(0.9).add(force(p, ps, F, 80)); }); ps.forEach(p => p.pos.add(p.v)); }
tl.to({}, { duration: 8, ease: 'none', onUpdate() { draw(stateAt(Math.round(this.progress() * 480))); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 캔버스에 입자 생명 시뮬을 넣어줘. 입자 600개, 색 4종, 상호작용 반경 80px, 감쇠 0.9, 고정 스텝 16.67ms, 8초. 힘 행렬은 -1~1 범위로 시드 고정해 코드에 상수로 박아줘. 입자는 지름 4px 원으로 그려.
```

### 한국어 · Codex
```text
<파일>에 particle life를 구현해. 입자 600, 색 4, 반경 80px, 감쇠 0.9, 8초(480스텝). 힘 행렬은 상수, 초기 위치는 시드 난수. 1초, 4초, 8초를 캡처해 군집이 형성되는지 확인하고, 같은 시각을 두 번 seek해 입자 위치 해시가 같은지 검증해.
```

### English · Claude Code
```text
Add a particle life simulation to the <target> canvas. 600 particles, 4 colors, interaction radius 80px, damping 0.9, fixed step 16.67ms, 8 seconds. Hardcode a seeded force matrix in the range -1 to 1 as constants and draw each particle as a 4px circle.
```

### English · Codex
```text
Implement particle life in <file>: 600 particles, 4 colors, radius 80px, damping 0.9, 8 seconds (480 steps). Keep the force matrix constant and the initial positions seeded. Capture at 1s, 4s and 8s to verify clusters form, and seek the same time twice to verify identical position hashes.
```

예시 / Example: 입자 생명를 `.hero`에 적용해. / Apply Particle Life Clusters to `.hero`.

## 적용 / Application

- HyperFrames: 힘 행렬과 초기 위치를 시드로 고정하고 상태를 스텝 수의 함수로 정의한다. 체크포인트를 60스텝마다 캐시한다
- ReelForge: 씬 워커 브리프에 입자 수, 색 4종, 반경 80px, 힘 행렬 값을 그대로 싣는다
- Scrolline Deck: 진행률을 스텝 수 0~480에 대응시킨다. 시뮬은 되감기가 비싸므로 체크포인트 사용

조합 / Pair with: [보이드 군집 · Boid Flocking](../boid-flocking/) · [입자 힘장 · Particle Force Field](../particle-force-field/) · [셀룰러 오토마타 · Cellular Automaton Evolution](../cellular-automaton/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#particle-life) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
