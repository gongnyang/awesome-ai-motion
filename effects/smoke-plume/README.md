# Nº 540 연기 확산 · Smoke Plume

> 클립 렌더 예정 / Clip rendering planned.

**부드러운 덩어리가 위로 올라가며 커지고 서로 겹쳐 옅어지는 연기**

Soft blobs rise, grow, overlap and thin out into smoke.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 전환 | 숏폼, 설명 영상, 제품 시연 | canvas |

## 선택 기준 / Selection

증발, 소멸, 대기의 움직임. 무언가 사라지거나 정리되는 여운 / Evaporation, disappearance and atmospheric drift. A lingering feeling of something vanishing or being cleared away.

- 사물이 사라지거나 태워지는 장면의 여운을 줄 때 / Add an afterglow when something disappears or is burned away.
- 불이나 열 표현 위에 연기를 얹어 깊이를 만들 때 / Layer smoke over heat or fire to add depth.

좋은 예 / Good: 초당 20개 회색 원이 초속 25px로 오르며 12px에서 70px로 커지고 2.6초 동안 불투명도 0.25에서 0으로 옅어진다
나쁜 예 / Bad: 입자 수가 많고 불투명해 검은 덩어리가 되거나 크기 변화가 없어 점이 떠오르는 것처럼 보인다
주의 / Avoid: 입자 불투명도 0.3 초과 금지 · 크기 증가 없이 쓰지 않는다(연기로 읽히지 않음)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 생성률 | 20개/s | 12~35 | 출생 고정 배열 |
| 상승 속도 | 25px/s | 15~40 | 위쪽 |
| 크기 | 12 to 70px | 8~90px | 나이에 비례 |
| 수명 | 2600ms | 1800~3500ms | 불투명도 감쇠 |
| 바람 | 14px/s | 0~30 | 옆으로 흘림 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 5, duration: 5, ease: 'none', onUpdate() {
  for (let i = 0; i < 100; i++) { const age = u.t - i / 20; if (age < 0 || age > 2.6) continue; const k = age / 2.6;
    puff(960 + 14 * age + Math.sin(i * 2.3) * 10, 900 - 25 * age, 12 + 58 * k, 0.25 * (1 - k) * Math.min(1, age * 4)); } } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 위에 연기 확산을 넣어줘. 기준점 (960,900)에서 초당 20개의 회색(#9aa3b2) 원이 초속 25px로 오르고 옆으로 초속 14px 흘러. 크기는 12px에서 70px으로 커지고 불투명도는 0.25에서 0으로 2.6초 동안 옅어지며 시작 0.25초에 서서히 나타나게 해. 5초 재생이고 워밍업으로 2초 진행된 상태에서 시작해.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 입자 100개를 만들어. age=t-i/20이 0~2.6일 때 x=960+14*age+sin(i*2.3)*10, y=900-25*age, 반지름 12+58k, 알파 0.25*(1-k)*min(1,age*4). 방사형 그라디언트 스프라이트를 재사용. 0.5초·2초·4.5초 캡처로 위로 갈수록 커지고 옅어지며 검은 덩어리가 없는지 확인해.
```

### English · Claude Code
```text
Add a smoke plume above <target>. From the anchor (960,900), 20 gray (#9aa3b2) circles per second rise at 25px per second and drift sideways at 14px per second. Size grows from 12px to 70px and opacity fades from 0.25 to 0 over 2.6 seconds, fading in over the first 0.25 seconds. Play 5 seconds, starting 2 seconds pre-warmed.
```

### English · Codex
```text
In the canvas of <file>, create 100 particles. With age=t-i/20 in 0 to 2.6: x=960+14*age+sin(i*2.3)*10, y=900-25*age, radius 12+58k, alpha 0.25*(1-k)*min(1,age*4). Reuse one radial-gradient sprite. Capture 0.5 s, 2 s and 4.5 s to confirm puffs grow and thin as they rise and never clump into a black mass.
```

예시 / Example: 연기 확산를 `.hero`에 적용해. / Apply Smoke Plume to `.hero`.

## 적용 / Application

- HyperFrames: 출생 시각과 t로 위치·크기·알파를 계산하고 스프라이트는 미리 그려 둔 방사형 그라디언트 하나를 재사용한다
- ReelForge: 씬 브리프에 생성률 20/s, 상승 25, 크기 12~70, 수명 2.6초, 바람 14를 싣고 연기 색 #9aa3b2를 지정
- Scrolline Deck: 진행률에 t를 묶는다. 총 길이가 짧으면 초기 정상 상태 워밍업(t 시작을 2초로)을 준다

조합 / Pair with: [불꽃 기둥 · Fire Plume](../fire-plume/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/) · [블러 디졸브 · Blur Dissolve](../blur-dissolve/) · [퍼프 리빌 · Puff Reveal](../puff-reveal/)

출처 / Sources: [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Smoke-Particle-System/) (MIT) · [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_volume_cloud) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
