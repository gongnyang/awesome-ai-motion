# Nº 541 불티 분사 · Spark Spray

> 클립 렌더 예정 / Clip rendering planned.

**작은 밝은 점이 빠르게 튀어 나가 짧은 꼬리를 남기고 꺼지는 불티**

Small bright dots fly outward, leave short tails and go out.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 강조, 분위기 | 숏폼, 설명 영상 | canvas |

## 선택 기준 / Selection

충돌, 마찰, 순간적인 충격. 짧은 에너지 방출 / Collision, friction and a brief release of energy.

- 두 물체가 충돌하는 순간을 강조할 때 / When emphasizing the moment two objects collide
- 용접·스위치·전기 접점 같은 불꽃 이미지가 필요할 때 / When a welding, switch or electric contact spark is needed

좋은 예 / Good: 충돌 지점에서 점 60개가 초기 속도 350px/s로 사방에 흩어져 450ms에 꺼진다
나쁜 예 / Bad: 입자를 수백 개 오래 유지해 화면이 지저분해지거나, 매 렌더가 다른 배치다
주의 / Avoid: 입자 수 100 이하 · 수명 0.6초 이하 · 시드 고정 난수만 사용

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 입자 수 | 60 | 30~100 | 캔버스 1920x1080 |
| 초기 속도 | 350px/s | 200~500px/s | 방사형 |
| 수명 | 450ms | 300~600ms | 점마다 ±15% |
| 합성 | lighter | lighter | 밝은 점이 겹칠 때 빛남 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
let s = 11; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
const P = Array.from({ length: 60 }, () => ({ a: r() * Math.PI * 2, v: 250 + r() * 200, l: 0.38 + r() * 0.14 }));
tl.to({ t: 0 }, { t: 1, duration: 0.8, ease: 'none', onUpdate() { draw(this.targets()[0].t * 0.8); } }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 canvas로 <대상> 충돌 지점에 불티 분사를 넣어줘. 시드 11 고정 난수로 입자 60개를 만들고 각 입자는 각도 랜덤, 초기 속도 250~450px/s, 수명 0.38~0.52초. draw(t)를 시각의 순수 함수로 짜서 위치는 v*t*(1-t/수명*0.5)로 계산하고 lighter 합성으로 그려. 0.4초 시작, paused 타임라인.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 spark-spray를 적용해. LCG seed 11로 60개 입자를 만들고 draw(t)를 순수 함수로 작성, globalCompositeOperation lighter. Math.random 금지. 0.5초·0.7초·1.0초를 캡처하고, 같은 시각을 두 번 렌더해 픽셀이 동일한지, 1.0초에 입자 수가 0인지 확인해.
```

### English · Claude Code
```text
Add a spark spray at the collision point of <target> with GSAP and canvas. Build 60 particles from a seed-11 random with random angle, initial speed 250 to 450px/s and life 0.38 to 0.52s. Write draw(t) as a pure function of time, computing position as v*t*(1 - t/life*0.5), and draw with lighter blending. Start at 0.4s on a paused timeline.
```

### English · Codex
```text
Apply spark-spray to <target> in <file>. Build 60 particles from an LCG seeded 11, write draw(t) as a pure function, globalCompositeOperation lighter. No Math.random. Capture at 0.5s, 0.7s and 1.0s, render the same time twice to confirm pixel equality, and check the particle count is 0 at 1.0s.
```

예시 / Example: 불티 분사를 `.hero`에 적용해. / Apply Spark Spray to `.hero`.

## 적용 / Application

- HyperFrames: draw(t)를 시각 t의 순수 함수로 만들어 seek와 렌더가 같은 프레임을 낸다. 입자 상태를 누적하지 말고 초기값에서 계산
- ReelForge: 브리프에 개수·속도·수명·시드·중심 좌표를 넣는다. 캔버스 크기는 1920x1080
- Scrolline Deck: scrub에서는 draw(진행률*0.8)로 계산한다. 순수 함수이므로 되감기도 정확하다

조합 / Pair with: [입자 버스트 · Particle Burst](../particle-burst/) · [불꽃놀이 · Firework Bloom](../firework/) · [스트로브 플래시 · Strobe Flash](../strobe-flash/)

출처 / Sources: [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
