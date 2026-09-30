# Nº 508 입자 소용돌이 · Particle Vortex

> 클립 렌더 예정 / Clip rendering planned.

**입자들이 중심을 향해 또는 밖으로 나선을 그리며 흐르는 소용돌이**

Particles spiral toward or away from a center in a vortex.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 주목 끌기, 설명 | 설명 영상, 숏폼, 발표 | canvas |

다른 이름 / Also known as: Particle Tornado, 입자 토네이도

## 선택 기준 / Selection

빨려 들어가는 집중이나 퍼져 나가는 확산. 중심에 무언가 있다는 신호 / Focus being drawn in or spreading outward. A signal that something sits at the center.

- 여러 요소가 하나의 핵심으로 모이는 과정을 보여 줄 때 / Show many elements converging on one core.
- 로딩·변환의 중심 이미지로 입자 흐름을 쓸 때 / Use a particle flow as the central visual of a loading or transformation moment.

좋은 예 / Good: 입자 200개가 반경 200px에서 시작해 6초 동안 각속도 0.4rad/s로 돌며 중심으로 모여 로고가 나타난다
나쁜 예 / Bad: 입자 수천 개가 밝게 겹쳐 흰 덩어리가 되거나, 회전이 빨라 소용돌이가 아닌 원형 잔상처럼 보인다
주의 / Avoid: 입자 400개 초과 금지(형태가 뭉개짐) · 중심 근처 크기와 밝기를 줄이지 않으면 중심이 하얗게 탄다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 6s | 4~8s | 입자가 중심에 닿는 시간 |
| 입자 수 | 200 | 120~350 | 시드 배열로 고정 |
| 각속도 | 0.4rad/s | 0.25~0.7 | 안쪽일수록 빠르게 |
| 시작 반경 | 200px | 150~320px | 1920px 기준 |
| 입자 크기 | 2.5px | 1.5~4px | 중심 근처 60%로 축소 |

이징 / Ease: `power2.in`

## 구현 / Implementation (GSAP)

```js
const P = Array.from({ length: 200 }, (_, i) => ({ a: (i * 137.508) % 360 * Math.PI / 180, r: 60 + (i * 37 % 140) }));
const u = { k: 0 };
tl.to(u, { k: 1, duration: 6, ease: 'power2.in', onUpdate() {
  P.forEach(p => { const r = p.r * (1 - u.k), a = p.a + u.k * 0.4 * 6 * (1 + 60 / (r + 30)); draw(cx + Math.cos(a) * r, cy + Math.sin(a) * r); });
} }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 중앙에 입자 소용돌이를 넣어줘. 입자 200개를 황금각으로 배치하고 반경 200px 바깥에서 시작해 6초 동안 power2.in으로 중심에 모이게 해. 각속도는 0.4rad/s이고 안쪽일수록 빠르게 돌며, 입자 크기는 2.5px에서 중심 근처 1.5px로 줄여. 마지막 0.5초에 로고가 페이드인하게 해.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 입자 200개 배열을 만들어. 각도 a=(i*137.508)deg, 반경 r=60+(i*37%140), 진행값 k를 6초 power2.in으로 0에서 1로 tween하고 매 프레임 r*(1-k), a+k*0.4*6*(1+60/(r+30))에 그려. Math.random 금지. 1.5초·3초·5.5초를 캡처해 입자가 나선으로 모이고 중심이 하얗게 타지 않는지 확인해.
```

### English · Claude Code
```text
Add a particle vortex at the center of <target>. Place 200 particles by golden angle starting outside a 200px radius and gather them to the center over 6 seconds with power2.in. Angular speed 0.4 rad/s, faster near the center, particle size shrinking from 2.5px to 1.5px near the core. Fade the logo in during the last 0.5 seconds.
```

### English · Codex
```text
In the canvas of <file>, build 200 particles with angle a=(i*137.508) deg and radius r=60+(i*37%140). Tween a progress k from 0 to 1 over 6 s with power2.in and draw each at radius r*(1-k), angle a+k*0.4*6*(1+60/(r+30)). No Math.random. Capture 1.5 s, 3 s and 5.5 s to check particles spiral inward and the core does not blow out to white.
```

예시 / Example: 입자 소용돌이를 `.hero`에 적용해. / Apply Particle Vortex to `.hero`.

## 적용 / Application

- HyperFrames: 입자를 시드 없는 결정식(황금각)으로 배치하고 위치를 진행값 k의 함수로 그린다. 프레임 누적 없이 seek가 맞는다
- ReelForge: 씬 브리프에 입자 수 200, 각속도 0.4, 시작 반경 200px, 방향(안/밖)을 넣는다
- Scrolline Deck: 진행률 0~1을 k에 그대로 걸고 ease-in을 적용한다. 역스크롤하면 입자가 밖으로 되돌아간다

조합 / Pair with: [이상 끌개 · Strange Attractor Trails](../strange-attractor/) · [입자 힘장 · Particle Force Field](../particle-force-field/) · [스타필드 워프 · Starfield Warp](../starfield-warp/) · [보이드 군집 · Boid Flocking](../boid-flocking/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/vortex) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_tsl_vfx_tornado) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
