# Nº 534 점균 네트워크 · Physarum Trail Network

> 클립 렌더 예정 / Clip rendering planned.

**많은 점이 앞선 점이 남긴 흔적을 따라 모이며, 남은 길이 굵은 연결망으로 굳어 간다**

Many agents follow the trails left by earlier ones, and the paths that remain thicken into a connected network.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 설명 | 설명 영상, 발표, 숏폼 | webgl |

다른 이름 / Also known as: 점균 흔적 네트워크, Slime mold simulation, Physarum simulation

## 선택 기준 / Selection

분산된 탐색이 효율적인 길을 만든다는 느낌을 준다. 균사, 혈관, 도시 교통망 같은 연결 구조를 떠올리게 한다 / Suggests that distributed searching produces efficient paths and organic structure. It recalls mycelium, veins and transit maps.

- 네트워크가 스스로 조직되는 원리를 설명하거나 그 은유를 쓸 때 / Explain or allude to a network organizing itself.
- 생물 같은 연결망 배경을 만들 때 / Create a life-like network background.

좋은 예 / Good: 점 10000개가 센서 각 30도, 거리 8px로 흔적을 읽고 8초 동안 굵은 망으로 모인다. 흔적은 스텝마다 0.97배 감쇠한다
나쁜 예 / Bad: 점 수가 500개뿐이라 망이 형성되지 않고, 감쇠를 1.0으로 두어 화면이 전부 흰 얼룩이 된다
주의 / Avoid: 감쇠 0.99 초과 금지(흔적이 쌓여 화면이 포화됨) · 점 수는 WebGL 기준 20000개 이하로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점 수 | 10000개 | 5000~20000개 | 많을수록 망이 촘촘 |
| 센서 거리 / 각 | 8px / 30도 | 6~12px / 20~45도 | 방향 결정 요소 |
| 흔적 감쇠 | 0.97/스텝 | 0.94~0.98 | 클수록 오래 남음 |
| 고정 스텝 | 16.67ms | 고정 | seek는 체크포인트 사용 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 프레임 f = f회 고정 스텝. 점 위치와 흔적 맵을 f에서 복원
function step(s) { s.agents.forEach(a => { a.turn(sense(s.trail, a, 8, 30)); a.move(1.2); s.trail.add(a.x, a.y); }); s.trail.diffuse().decay(0.97); }
tl.to({}, { duration: 8, ease: 'none', onUpdate() { show(stateAt(Math.round(this.progress() * 480))); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 점균 네트워크 시뮬을 WebGL로 만들어줘. 점 10000개, 센서 거리 8px, 센서각 30도, 흔적 감쇠 0.97/스텝, 고정 스텝 16.67ms, 시드 고정, 8초. 흔적은 어두운 배경 위 청록에서 흰색으로 매핑해.
```

### 한국어 · Codex
```text
<파일>에 physarum 시뮬을 추가해. 점 10000, 센서 8px/30도, 감쇠 0.97, 8초(480스텝). 상태는 스텝 수로만 결정하고 60스텝마다 체크포인트 저장. 1초, 4초, 8초를 캡처해 초기 흩어짐에서 굵은 망으로 수렴하는지, 같은 시각 두 번 seek의 해시가 같은지 확인해.
```

### English · Claude Code
```text
Build a physarum network simulation behind <target> in WebGL. 10000 agents, sensor distance 8px, sensor angle 30 degrees, trail decay 0.97 per step, fixed step 16.67ms, fixed seed, 8 seconds. Map trails from teal to white on a dark background.
```

### English · Codex
```text
Add a physarum simulation to <file>: 10000 agents, sensors 8px and 30 degrees, decay 0.97, 8 seconds (480 steps). Define state by step count only and save a checkpoint every 60 steps. Capture at 1s, 4s and 8s and verify the scatter converges into a thick network and that seeking the same time twice yields the same hash.
```

예시 / Example: 점균 네트워크를 `.hero`에 적용해. / Apply Physarum Trail Network to `.hero`.

## 적용 / Application

- HyperFrames: WebGL 핑퐁 텍스처로 스텝을 돌리고 체크포인트를 프레임 텍스처로 캐시한다. 난수는 시드 해시로 고정한다
- ReelForge: 씬 워커 브리프에 점 수, 센서 거리와 각, 감쇠, 시드, 색 램프를 싣는다. 무거우면 프레임 시퀀스로 굽는다
- Scrolline Deck: 진행률을 스텝 수 0~480에 대응시킨다. 되감기는 체크포인트로 처리한다

조합 / Pair with: [입자 연결망 · Connected Particle Network](../particle-network/) · [보이드 군집 · Boid Flocking](../boid-flocking/) · [흐름장 · Flow Field](../flow-field/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#physarum) (unknown) · [Bewelge/Physarum-WebGL](https://github.com/Bewelge/Physarum-WebGL) (MIT) · [nicoptere/physarum](https://github.com/nicoptere/physarum) (Unlicense)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
