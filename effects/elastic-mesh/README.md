# Nº 419 엘라스틱 메시 · Elastic Mesh

> 클립 렌더 예정 / Clip rendering planned.

**그물의 한 부분이 당겨지면 주변 점들이 뒤늦게 따라오다 스프링처럼 복원되는 격자**

Pulling one part of a net drags nearby points along late, then they spring back.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 설명, 피드백 | 설명 영상, 웹 UI, 제품 시연 | canvas |

다른 이름 / Also known as: 탄성 망 변형

## 선택 기준 / Selection

연결된 구조가 탄성을 가지고 서로 영향을 준다는 것을 보여 준다. 하나의 변화가 주변으로 전파되는 과정이 보인다 / Shows a connected structure with elasticity, where a change spreads to its neighbors.

- 네트워크나 조직의 한 노드 충격이 퍼지는 모습을 보일 때 / Show a shock to one node spreading across a network.
- 배경 격자가 커서에 반응하는 인터랙션을 만들 때 / A background grid that reacts to the cursor.
- 시스템의 연결과 전파를 비유적으로 시각화할 때 / A metaphor for connection and propagation in a system.

좋은 예 / Good: 20px 격자의 한 점이 40px 당겨지고 주변 점이 감쇠 0.9로 1초에 걸쳐 따라와 원위치로 복원된다
나쁜 예 / Bad: 감쇠가 없어 격자가 계속 진동하거나, 당김이 커서 선이 서로 겹쳐 엉킨다
주의 / Avoid: 감쇠 계수는 0.85~0.95로 한다 · 당김은 격자 간격의 3배 이하로 한다 · 점 수는 2000개를 넘기지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 1.0s | 0.7~1.6s | 당김+복원 |
| 격자 간격 | 20px | 16~32px | canvas |
| 당김 | 40px | 20~60px | 제어점 변위 |
| 감쇠 | 0.9 | 0.85~0.95 | 프레임당 곱 |
| 전파 지연 | 0.02s | 0.01~0.04s | 거리 비례 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
// 진행률 t의 순수 함수로 각 점 변위 계산 (프레임 누적 시뮬레이션 대신 폐쇄형)
const disp = (d, t) => 40 * Math.exp(-d / 60) * Math.exp(-4 * Math.max(0, t - d * 0.0008)) * Math.cos(9 * Math.max(0, t - d * 0.0008));
tl.to(s, { t: 1, duration: 1.0, ease: 'none', onUpdate: () => drawMesh(s.t) }, 0.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
Canvas와 GSAP으로 <대상> 배경에 탄성 그물을 만들어 줘. 20px 간격 격자에서 한 점을 40px 당기고, 주변 점은 거리에 비례한 지연으로 따라와 1초 안에 감쇠 진동하며 복원되게 해. 변위는 시간 t의 폐쇄형 감쇠 진동 수식으로 계산하고 프레임 누적 시뮬레이션은 쓰지 마. paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 elastic-mesh를 적용해. disp(d,t)=40*exp(-d/60)*exp(-4*(t-d*0.0008))*cos(9*(t-d*0.0008))로 각 점의 변위를 계산하고 tween 객체 {t}를 position 0.2, duration 1.0, ease none으로 0→1, onUpdate에서 drawMesh(t)를 호출한다. 0.2초는 격자 정지, 0.5초는 당김과 전파, 1.3초는 거의 복원된 상태인지 캡처로 확인해.
```

### English · Claude Code
```text
Use Canvas and GSAP to build an elastic mesh behind <target>. On a 20px grid pull one point 40px and let surrounding points follow with a delay proportional to distance, oscillating and restoring within 1 second. Compute displacement with a closed-form damped oscillation of time t rather than frame-accumulated simulation. Must be seekable on a paused timeline.
```

### English · Codex
```text
Apply elastic-mesh in <file>. Compute per-point displacement disp(d,t)=40*exp(-d/60)*exp(-4*(t-d*0.0008))*cos(9*(t-d*0.0008)); tween an object {t} 0 to 1 at position 0.2, duration 1.0, ease none and call drawMesh(t) in onUpdate. Capture 0.2s (grid still), 0.5s (pull and propagation) and 1.3s (nearly restored).
```

예시 / Example: 엘라스틱 메시를 `.hero`에 적용해. / Apply Elastic Mesh to `.hero`.

## 적용 / Application

- HyperFrames: 스프링을 프레임 누적으로 시뮬레이션하면 seek가 어긋난다. 감쇠 진동의 폐쇄형 수식으로 시간의 함수로 계산한다
- ReelForge: 브리프에 격자 간격 20, 당김 40, 감쇠, 당기는 점 좌표를 싣는다
- Scrolline Deck: 진행률을 t로 쓰는 폐쇄형이라 scrub과 잘 맞는다. 스프링 시뮬레이션은 쓰지 않는다

조합 / Pair with: [팔로스루 · Follow-through](../follow-through/) · [소프트 바디 흔들림 · Soft Body Jiggle](../soft-body-jiggle/) · [메시 워프 · Mesh Warp](../mesh-warp/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
