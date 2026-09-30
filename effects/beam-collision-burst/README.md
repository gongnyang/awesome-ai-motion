# Nº 512 빛줄기 충돌 폭발 · Beam Collision Burst

> 클립 렌더 예정 / Clip rendering planned.

**떨어지는 빛줄기가 바닥이나 경계에 닿는 순간 작은 빛 조각으로 퍼지는 충돌**

A falling beam bursts into small light fragments the instant it hits the floor or a boundary.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 강조, 피드백 | 숏폼, 웹 UI, 설명 영상 | canvas |

다른 이름 / Also known as: Background Beams With Collision, background-beams-with-collision

## 선택 기준 / Selection

이동이 하나의 사건으로 끝나는 순간의 충격. 도착과 확정의 강조 / The impact of a movement ending as an event. Emphasizes arrival and confirmation.

- 데이터나 요청이 목표 지점에 도착했음을 폭발적으로 알릴 때 / Announce with a burst that data or a request has reached its target.
- 낙하하는 선이 바닥에 닿으며 다음 장면을 여는 전환점으로 쓸 때 / Use a falling line hitting the floor as the pivot that opens the next scene.

좋은 예 / Good: 빛줄기가 1.5초 동안 위에서 바닥선으로 떨어지고 닿는 순간 조각 12개가 0.6초 동안 중력 500px/s2로 퍼진다
나쁜 예 / Bad: 충돌 시점과 폭발 시작이 어긋나 빛줄기가 통과한 뒤 터지거나, 조각이 화면 밖까지 날아가 정리가 안 된다
주의 / Avoid: 폭발 지속 0.9초 초과 금지 · 조각 수 24개 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 낙하 | 1.5s | 1~2s | 빛줄기 이동 |
| 폭발 | 0.6s | 0.4~0.9s | 조각 수명 |
| 조각 수 | 12 | 8~24 | 고정 각도 배열 |
| 중력 | 500px/s2 | 300~700 | 조각에만 적용 |
| 초기 속도 | 220px/s | 160~300 | 위쪽 부채꼴 |

이징 / Ease: `power2.in`

## 구현 / Implementation (GSAP)

```js
const g = 500, N = 12, hitY = 900;
tl.fromTo('.beam', { y: -200 }, { y: hitY, duration: 1.5, ease: 'power2.in' }, 0);
for (let i = 0; i < N; i++) {
  const a = -Math.PI * (0.15 + 0.7 * i / (N - 1)), vx = Math.cos(a) * 220, vy = Math.sin(a) * 220;
  const st = { t: 0 };
  tl.to(st, { t: 0.6, duration: 0.6, ease: 'none', onUpdate: () => place(i, 960 + vx * st.t, hitY + vy * st.t + 0.5 * g * st.t * st.t) }, 1.5);
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 빛줄기 충돌 폭발을 넣어줘. 빛줄기가 y -200에서 바닥선 y 900까지 1.5초 power2.in으로 떨어지고, 닿는 순간 조각 12개가 위쪽 부채꼴로 초기 속도 220px/s로 퍼지며 중력 500px/s2로 0.6초 동안 떨어지다 사라지게 해. 각도는 균등 배열로 고정하고 난수는 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 .stage에 .beam과 조각 12개를 추가해. beam은 y -200→900, 1.5초 power2.in. 조각 i는 1.5초에 시작해 각도 -π*(0.15+0.7*i/11), 속도 220으로 x=960+vx*t, y=900+vy*t+250*t^2, 0.6초 동안 opacity 1→0. 1.4초·1.6초·2.0초 캡처로 충돌 순간에 조각이 시작되고 위로 퍼졌다 떨어지는지 확인해.
```

### English · Claude Code
```text
Add a beam collision burst to <target>. A beam falls from y -200 to a floor line at y 900 over 1.5 seconds with power2.in. On impact, 12 fragments fan upward at 220px/s, fall under 500px/s2 gravity for 0.6 seconds, and fade. Fix the angles as an even array and use no randomness.
```

### English · Codex
```text
Add .beam and 12 fragments to .stage in <file>. Beam y -200 to 900 over 1.5 s power2.in. Fragment i starts at 1.5 s with angle -π*(0.15+0.7*i/11), speed 220, x=960+vx*t, y=900+vy*t+250*t^2 for 0.6 s while opacity goes 1 to 0. Capture at 1.4 s, 1.6 s and 2.0 s to confirm fragments begin at impact and arc up then down.
```

예시 / Example: 빛줄기 충돌 폭발를 `.hero`에 적용해. / Apply Beam Collision Burst to `.hero`.

## 적용 / Application

- HyperFrames: 충돌 시각 1.5초를 상수로 잡고 빛줄기 tween과 조각 tween의 시작을 같은 값에 묶는다. 조각 각도는 균등 배열이라 난수가 필요 없다
- ReelForge: 씬 브리프에 낙하 1.5초, 폭발 0.6초, 조각 12, 중력 500, 바닥 y를 싣고 충돌 순간에 정지 프레임 0.05초를 허용한다
- Scrolline Deck: 진행률 0~0.6에 낙하, 0.6~1.0에 폭발을 배정한다. 폭발 구간의 ease는 선형+중력식이라 스크럽해도 궤도가 유지된다

조합 / Pair with: [입자 버스트 · Particle Burst](../particle-burst/) · [불티 분사 · Spark Spray](../spark-spray/) · [불꽃놀이 · Firework Bloom](../firework/) · [파편 분해 · Shatter](../shatter/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/background-beams-with-collision) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
