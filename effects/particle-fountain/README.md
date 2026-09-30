# Nº 531 입자 분수 · Particle Fountain

> 클립 렌더 예정 / Clip rendering planned.

**바닥의 좁은 출구에서 입자가 위로 솟아 포물선을 그리며 떨어지는 분수**

Particles shoot up from a narrow floor outlet and fall in parabolic arcs.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 설명 | 숏폼, 설명 영상, 웹 UI | canvas |

## 선택 기준 / Selection

지속적인 공급과 분출. 끊이지 않고 흘러나오는 자원이나 활동 / Continuous supply and jetting. Resources or activity that keep flowing out.

- 데이터·트래픽·토큰이 계속 흘러나오는 개념을 보여 줄 때 / Show data, traffic or tokens flowing out continuously.
- 바닥 한 점에서 에너지가 솟는 인트로 장면을 만들 때 / Build an intro where energy rises from a single point on the floor.

좋은 예 / Good: 바닥 중앙 출구에서 초당 50개 입자가 초속 240px, 좌우 24도 안으로 솟았다 중력 400px/s2로 포물선을 그리며 떨어진다
나쁜 예 / Bad: 분출각이 넓어 사방으로 퍼져 분수가 아닌 폭발로 보이거나, 입자가 바닥에서 사라지지 않고 쌓인다
주의 / Avoid: 분출각 폭 40도 초과 금지 · 입자 수명을 두어 화면 밖으로 나가면 제거한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 생성률 | 50개/s | 30~90 | 출생 시각 고정 배열 |
| 초기 속도 | 240px/s | 180~320 | 위쪽 방향 |
| 분출각 폭 | 24deg | 12~36 | 좌우 총합 |
| 중력 | 400px/s2 | 300~600 | 아래 |
| 지속 | 5s | 3~8s | 재생 길이 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 입자 i의 출생 시각 b=i/50, 각도는 균등 스윕. 위치를 탄도식으로 직접 계산
const u = { t: 0 };
tl.to(u, { t: 5, duration: 5, ease: 'none', onUpdate() {
  for (let i = 0; i < 250; i++) { const a = -Math.PI / 2 + ((i * 0.618) % 1 - 0.5) * 24 * Math.PI / 180, age = u.t - i / 50;
    if (age < 0 || age > 2.4) continue; place(i, 960 + Math.cos(a) * 240 * age, 1000 + Math.sin(a) * 240 * age + 200 * age * age); } } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면 바닥 중앙(960,1000)에 입자 분수를 넣어줘. 초당 50개씩 태어나는 입자가 초속 240px로 위로 솟되 좌우 24도 안에서 황금비 스윕으로 각도를 나누고, 중력 400px/s2로 포물선을 그리며 2.4초 뒤 사라지게 해. 총 5초 재생하고 위치는 t와 출생 시각으로 직접 계산해.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 입자 250개를 만들어. 출생 b=i/50, 각도 a=-π/2+((i*0.618)%1-0.5)*24°, age=t-b일 때 x=960+cos a*240*age, y=1000+sin a*240*age+200*age^2, age가 0~2.4초일 때만 그려. 1초·2.5초·4.5초 캡처로 분수 모양이 유지되고 입자가 바닥에 쌓이지 않는지 확인해.
```

### English · Claude Code
```text
Add a particle fountain at the bottom center (960,1000) of <target>. Particles are born 50 per second and shoot upward at 240px per second within 24 degrees, spreading angles by a golden-ratio sweep, arc under 400px/s2 gravity, and vanish after 2.4 seconds. Play 5 seconds and compute positions directly from t and birth time.
```

### English · Codex
```text
In the canvas of <file>, create 250 particles. Birth b=i/50, angle a=-π/2+((i*0.618)%1-0.5)*24°, age=t-b; x=960+cos a*240*age, y=1000+sin a*240*age+200*age^2, drawn only when age is 0 to 2.4 s. Capture 1 s, 2.5 s and 4.5 s to confirm the fountain shape persists and nothing piles up on the floor.
```

예시 / Example: 입자 분수를 `.hero`에 적용해. / Apply Particle Fountain to `.hero`.

## 적용 / Application

- HyperFrames: 입자 상태를 저장하지 않고 t와 출생 시각으로 위치를 계산한다. 황금비 스윕이 난수를 대신하고 seek해도 같은 프레임이 나온다
- ReelForge: 씬 브리프에 생성률 50/s, 초속 240px, 분출각 24도, 중력 400, 출구 좌표(960,1000)를 싣는다
- Scrolline Deck: 진행률로 t를 움직이면 역스크롤에서 입자가 출구로 빨려 들어간다. 정지 구간에 자연스럽게 정상 상태를 유지한다

조합 / Pair with: [불티 분사 · Spark Spray](../spark-spray/) · [입자 힘장 · Particle Force Field](../particle-force-field/) · [기포 상승 · Rising Bubbles](../rising-bubbles/) · [빛줄기 충돌 폭발 · Beam Collision Burst](../beam-collision-burst/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/fountain/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
