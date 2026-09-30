# Nº 522 불꽃놀이 · Firework Bloom

> 클립 렌더 예정 / Clip rendering planned.

**상승한 빛이 공중에서 여러 갈래로 터지고 빛나는 꼬리가 서서히 사라지는 불꽃놀이**

A rising light bursts into many strands in the air, and glowing trails fade.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 강조, 분위기 | 숏폼, 설명 영상, 발표 | canvas |

다른 이름 / Also known as: 불꽃놀이 확산

## 선택 기준 / Selection

절정과 해방감. 성취나 축하의 순간을 크게 알리는 신호 / A climax and a feeling of release. A signal that announces an achievement or celebration loudly.

- 목표 달성, 출시, 행사 마무리의 절정 장면을 만들 때 / Build the climax for a goal reached, a launch or the end of an event.
- 전환 직전에 화면 전체에 축하의 기운을 줄 때 / Add a celebratory feel across the frame just before a transition.

좋은 예 / Good: 로켓이 0.7초 동안 솟아 y 320px에서 파편 80개로 터지고 초속 180px로 퍼지며 0.9초 동안 잔광을 남긴다
나쁜 예 / Bad: 파편이 하얗게 겹쳐 눈부시거나 여러 발을 한꺼번에 터뜨려 화면이 뒤덮이고, 터지는 시점과 소리가 어긋난다
주의 / Avoid: 한 화면 동시에 3발 초과 금지 · 잔광 1.2초 초과 금지(뿌옇게 남음)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 상승 | 700ms | 500~900ms | 로켓 이동 |
| 파편 수 | 80 | 48~120 | 고정 각도 배열 |
| 확산 속도 | 180px/s | 120~240 | 파편 초기 속도 |
| 잔광 | 900ms | 600~1200ms | 알파 감쇠 |
| 중력 | 120px/s2 | 80~200 | 파편 낙하 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const N = 80, bx = 960, by = 320;
tl.fromTo('.rocket', { x: bx, y: 1000 }, { y: by, duration: 0.7, ease: 'power2.out' }, 0);
for (let i = 0; i < N; i++) {
  const a = i / N * Math.PI * 2, s = 180 * (0.7 + 0.3 * ((i * 7) % 5) / 4), st = { t: 0 };
  tl.to(st, { t: 0.9, duration: 0.9, ease: 'none', onUpdate: () => place(i, bx + Math.cos(a) * s * st.t, by + Math.sin(a) * s * st.t + 60 * st.t * st.t, 1 - st.t / 0.9) }, 0.7);
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 불꽃놀이를 한 발 넣어줘. 로켓이 y 1000에서 y 320까지 0.7초 power2.out으로 솟은 뒤, 파편 80개가 원형으로 초속 180px(편차 70~100%)로 퍼지며 중력 120px/s2로 처지면서 0.9초에 걸쳐 불투명도 1에서 0으로 사라지게 해. 색은 금색과 흰색 두 가지, 합성은 screen. 난수는 쓰지 마.
```

### 한국어 · Codex
```text
<파일>에 .rocket과 파편 80개를 추가해. 로켓 y 1000→320 0.7초 power2.out. 파편 i는 0.7초에 시작, 각도 i/80*2π, 속도 180*(0.7+0.3*((i*7)%5)/4), 위치 = 중심 + 방향*속도*t + (0, 60*t^2), 0.9초 동안 alpha 1→0. 0.6초·1.0초·1.6초 캡처로 로켓이 정점에서 터지고 파편이 둥글게 퍼졌다 처지는지 확인해.
```

### English · Claude Code
```text
Add a single firework to <target>. A rocket rises from y 1000 to y 320 in 0.7 seconds with power2.out, then 80 fragments spread in a circle at 180px per second (70 to 100 percent variation), sag under 120px/s2 gravity, and fade from opacity 1 to 0 over 0.9 seconds. Gold and white only, screen blending. No randomness.
```

### English · Codex
```text
Add .rocket and 80 fragments in <file>. Rocket y 1000 to 320 over 0.7 s power2.out. Fragment i starts at 0.7 s, angle i/80*2π, speed 180*(0.7+0.3*((i*7)%5)/4), position = center + dir*speed*t + (0, 60*t^2), alpha 1 to 0 over 0.9 s. Capture 0.6 s, 1.0 s and 1.6 s to confirm the burst at apex and a round spread that then sags.
```

예시 / Example: 불꽃놀이를 `.hero`에 적용해. / Apply Firework Bloom to `.hero`.

## 적용 / Application

- HyperFrames: 로켓 tween이 끝나는 0.7초에 파편 tween을 같은 position으로 건다. 파편 속도 편차는 (i*7)%5 결정식이라 난수가 필요 없다. 가산 합성은 mix-blend-mode: screen
- ReelForge: 씬 브리프에 발수 1, 상승 700ms, 파편 80, 속도 180, 잔광 900ms, 색 2종을 싣는다
- Scrolline Deck: 진행률 0~0.35 상승, 0.35~1.0 확산으로 나눈다. 스크럽은 선형이라 파편 궤도가 진행률과 일치한다

조합 / Pair with: [입자 버스트 · Particle Burst](../particle-burst/) · [불티 분사 · Spark Spray](../spark-spray/) · [빛줄기 충돌 폭발 · Beam Collision Burst](../beam-collision-burst/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/fireworks/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
