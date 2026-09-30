# Nº 521 불꽃 기둥 · Fire Plume

> 클립 렌더 예정 / Clip rendering planned.

**밝은 입자가 위로 솟으며 흔들리고 가장자리에서 서서히 사라지는 불꽃 기둥**

Bright particles rise, sway and gradually fade at the edges like a column of fire.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 강조 | 숏폼, 설명 영상, 제품 시연 | canvas |

## 선택 기준 / Selection

열과 에너지, 위로 향하는 힘. 뜨거운 기운이 살아 있는 화면 / Heat, energy and upward force. A screen where hot air feels alive.

- 에너지·열정·경고 같은 뜨거운 주제의 시각 앵커를 만들 때 / Create a hot visual anchor for topics like energy, passion or warning.
- 로고나 아이콘 아래에서 불꽃이 타오르는 장면이 필요할 때 / Show fire burning beneath a logo or icon.

좋은 예 / Good: 바닥 한 점에서 초당 90개 입자가 초속 90px로 솟고 0.9초 동안 흰색에서 주황, 검정으로 색이 변하며 사라진다
나쁜 예 / Bad: 입자가 모두 흰색이라 전구처럼 보이거나 수명이 길어 연기처럼 번진다
주의 / Avoid: 수명 1.4초 초과 금지 · 가산 합성이 겹치는 중심부 밝기를 1.0 이하로 눌러야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 생성률 | 90개/s | 60~140 | 출생 고정 배열 |
| 상승 속도 | 90px/s | 60~140 | 위쪽 |
| 수명 | 900ms | 600~1200ms | 색과 크기 감쇠 |
| 횡 흔들림 | 18px | 10~30px | 사인 노이즈 |
| 색 | 흰 → 주황 → 검정 | 고정 | 나이 0~1 매핑 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 4, duration: 4, ease: 'none', onUpdate() {
  for (let i = 0; i < 360; i++) { const age = ((u.t - i / 90) % 4) ; if (age < 0 || age > 0.9) continue; const k = age / 0.9;
    const x = 960 + Math.sin(i * 1.7 + age * 9) * 18 * k, y = 900 - 90 * age * (1 + k), r = 22 * (1 - k * 0.7);
    dot(x, y, r, fireColor(k), 1 - k); } } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 아래에 불꽃 기둥을 넣어줘. 기준점 (960,900)에서 초당 90개 입자가 초속 90px로 솟고, 수명 0.9초 동안 색이 흰색→주황→검정으로 변하며 크기는 22px에서 30%로 줄고 투명해지게 해. 횡 흔들림은 최대 18px 사인식이고 합성은 lighter. 난수는 쓰지 말고 출생 시각으로 위치를 계산해.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 입자 360개를 만들어. age=(t-i/90)%4가 0~0.9일 때 k=age/0.9, x=960+sin(i*1.7+age*9)*18*k, y=900-90*age*(1+k), 반지름 22*(1-0.7k), 색 fireColor(k), 알파 1-k. lighter 합성. 0.5초·1.5초·3초 캡처로 기둥 아래가 흰색, 위가 주황, 끝이 어두운지 확인해.
```

### English · Claude Code
```text
Add a fire plume beneath <target>. From the anchor (960,900), 90 particles per second rise at 90px per second; over a 0.9-second life the color goes white to orange to black, size shrinks from 22px to 30%, and opacity fades. Lateral sway is a sine of up to 18px, composited with lighter. No randomness; compute position from birth time.
```

### English · Codex
```text
In the canvas of <file>, create 360 particles. With age=(t-i/90)%4 in 0 to 0.9, k=age/0.9, x=960+sin(i*1.7+age*9)*18*k, y=900-90*age*(1+k), radius 22*(1-0.7k), color fireColor(k), alpha 1-k. Use lighter compositing. Capture 0.5 s, 1.5 s and 3 s to confirm the base is white, the middle orange and the tip dark.
```

예시 / Example: 불꽃 기둥를 `.hero`에 적용해. / Apply Fire Plume to `.hero`.

## 적용 / Application

- HyperFrames: 입자 위치는 출생 시각과 t의 함수로 계산하고 횡 흔들림은 사인식이라 상태가 없다. 가산 합성은 globalCompositeOperation lighter
- ReelForge: 씬 브리프에 생성률 90/s, 수명 900ms, 상승 90, 색 팔레트 3점, 기준점 좌표를 싣는다
- Scrolline Deck: 진행률로 t를 움직이면 불이 진행률에 묶여 멈춘다. 정지 구간용 idle 위상을 더해 불이 계속 타게 한다

조합 / Pair with: [연기 확산 · Smoke Plume](../smoke-plume/) · [에너지 오브 · Energy Orb](../energy-orb/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/) · [불티 분사 · Spark Spray](../spark-spray/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/fire/README.md) (MIT) · [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_tsl_vfx_flames) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
