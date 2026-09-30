# Nº 434 소프트 바디 흔들림 · Soft Body Jiggle

> 클립 렌더 예정 / Clip rendering planned.

**부드러운 덩어리가 이동과 충돌에 따라 찌그러지고 떨리며 원형으로 돌아온다**

A soft mass squashes and jiggles with movement and impact, then returns to a round shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 분위기, 피드백 | 숏폼, 웹 UI, 설명 영상 | canvas |

## 선택 기준 / Selection

탄성 있는 물질과 힘의 영향을 보여 준다. 젤리나 물방울 같은 귀여운 질감이 생긴다 / Shows elastic material and the effect of force, giving a cute jelly-like texture.

- 마스코트나 아이콘이 젤리처럼 통통 움직이게 할 때 / Make a mascot or icon move like jelly.
- 충돌 뒤에 잠시 출렁이는 반응을 줄 때 / Add a brief wobble after a collision.

좋은 예 / Good: 경계점 18개가 강성 120/s², 감쇠 15/s로 이동 120px 뒤 2500ms 동안 흔들리다 원형으로 돌아온다
나쁜 예 / Bad: 강성이 너무 낮아 모양이 무너지거나 감쇠가 없어 무한히 출렁인다. 실시간 dt를 써서 프레임마다 다르다
주의 / Avoid: 고정 스텝으로 적분한다(dt 16.67ms) · 감쇠 없는 스프링 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 경계점 | 18개 | 12~28개 | 원형 배열 |
| 강성 | 120/s² | 80~200/s² | 복원력 |
| 감쇠 | 15/s | 10~25/s | 클수록 빨리 멈춤 |
| 이동 | 120px | 60~200px | 중심 이동 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 고정 스텝 스프링: f = -k*(p - rest) - c*v, dt = 1/60
function step(pts) { pts.forEach(p => { const f = p.rest.clone().add(center).sub(p.pos).mul(120).sub(p.v.clone().mul(15)); p.v.add(f.mul(1/60)); }); pts.forEach(p => p.pos.add(p.v.clone().mul(1/60))); }
tl.to({}, { duration: 2.5, ease: 'none', onUpdate() { draw(stateAt(Math.round(this.progress() * 150))); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 덩어리에 소프트 바디 흔들림을 canvas로 넣어줘. 경계점 18개, 강성 120/s², 감쇠 15/s, 고정 스텝 1/60초로 적분하고, 중심이 0.3초에 x 120px 이동한 뒤 2.5초 동안 출렁이다 원형으로 돌아오게 해. 닫힌 곡선으로 그려.
```

### 한국어 · Codex
```text
<파일>에 soft body jiggle을 구현해. 18점, k=120, c=15, dt=1/60, 2.5초(150스텝). 상태는 스텝 수로만 결정하고 30스텝마다 체크포인트 저장. 0.4초, 0.8초, 2.5초를 캡처해 찌그러짐이 시간에 따라 줄어드는지, 2.5초에 원형 반경 오차가 2% 이내인지 확인해.
```

### English · Claude Code
```text
Add soft body jiggle to the blob in <target> on a canvas. 18 boundary points, stiffness 120/s^2, damping 15/s, integrated at a fixed 1/60 second step. The center moves 120px in x at 0.3 seconds, then wobbles for 2.5 seconds and returns to a circle. Draw it as a closed curve.
```

### English · Codex
```text
Implement soft body jiggle in <file>: 18 points, k=120, c=15, dt=1/60, 2.5 seconds (150 steps). Define state by step count only and save a checkpoint every 30 steps. Capture at 0.4s, 0.8s and 2.5s and verify the squash decays over time and the radius error at 2.5s is within 2 percent of a circle.
```

예시 / Example: 소프트 바디 흔들림를 `.hero`에 적용해. / Apply Soft Body Jiggle to `.hero`.

## 적용 / Application

- HyperFrames: 프레임 f의 상태를 f회 고정 스텝의 결과로 정의하고 체크포인트를 캐시한다. 중심 이동은 GSAP 위치로 별도 구동
- ReelForge: 씬 워커 브리프에 경계점 수, 강성, 감쇠, 중심 이동 경로를 싣는다
- Scrolline Deck: 진행률을 스텝 수 0~150에 대응시킨다. 스프링 대신 체크포인트를 읽는 방식이라 되감기 안전

조합 / Pair with: [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/) · [팔로스루 · Follow-through](../follow-through/) · [엘라스틱 메시 · Elastic Mesh](../elastic-mesh/)

출처 / Sources: [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Soft-Body/) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_volume) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
