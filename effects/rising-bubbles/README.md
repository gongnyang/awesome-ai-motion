# Nº 539 기포 상승 · Rising Bubbles

> 클립 렌더 예정 / Clip rendering planned.

**반투명 원이 아래에서 올라오며 좌우로 흔들리고 커지다가 터지듯 사라지는 기포**

Translucent circles rise from below, sway, grow and fade away.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 기본 | 분위기 | 숏폼, 설명 영상, 웹 UI | canvas |

## 선택 기준 / Selection

가벼움과 액체 속 부력. 청량하고 맑은 분위기 / Lightness and buoyancy in liquid. A fresh, clear mood.

- 물·음료·청정 주제의 배경을 가볍게 채울 때 / Lightly fill a background about water, drinks or cleanliness.
- 로딩이나 대기 화면에 부드러운 상승 움직임을 줄 때 / Give a loading or idle screen a soft upward motion.

좋은 예 / Good: 초당 8개 기포가 초속 35px로 오르며 반경 4px에서 18px로 커지고 3.5초 뒤 옅어지며 사라진다
나쁜 예 / Bad: 기포 크기가 모두 같고 직선으로만 올라 물방울 스티커처럼 보이거나, 테두리가 두꺼워 비눗방울 같지 않다
주의 / Avoid: 테두리 1.5px 초과 금지 · 동시에 보이는 기포 40개 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 생성률 | 8개/s | 4~14 | 출생 고정 배열 |
| 상승 속도 | 35px/s | 25~55 | 위쪽 |
| 반경 | 4 to 18px | 3~24 | 나이에 비례 |
| 좌우 흔들림 | 14px | 8~24 | 사인, 주기 1.8s |
| 수명 | 3500ms | 2500~4500ms | 마지막 0.5초에 페이드 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 5, duration: 5, ease: 'none', onUpdate() {
  for (let i = 0; i < 60; i++) { const age = u.t - i / 8; if (age < 0 || age > 3.5) continue; const k = age / 3.5;
    const x = 200 + (i * 211) % 1500 + Math.sin(age * 3.5 + i) * 14, y = 1100 - 35 * age * (1 + k * 0.5);
    ring(x, y, 4 + 14 * k, 0.6 * (1 - Math.max(0, (age - 3) / 0.5))); } } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 기포 상승을 넣어줘. 초당 8개의 반투명 원이 초속 35px 이상으로 오르고 3.5초 동안 반경이 4px에서 18px로 커지며 좌우로 최대 14px 사인 흔들림을 가져. 테두리는 1px 흰색 불투명도 0.6이고 마지막 0.5초에 옅어져 사라지게 해. x 위치는 (i*211)%1500 결정식이고 난수는 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 기포 60개를 만들어. age=t-i/8이 0~3.5일 때 x=200+(i*211)%1500+sin(age*3.5+i)*14, y=1100-35*age*(1+k*0.5), 반경 4+14k, 마지막 0.5초 알파 페이드. t는 5초 선형 tween. 1초·2.5초·4.5초 캡처로 기포가 커지며 올라가고 40개를 넘지 않는지 확인해.
```

### English · Claude Code
```text
Add rising bubbles to the background of <target>. Eight translucent circles per second rise at 35px per second or more, grow from radius 4px to 18px over 3.5 seconds, and sway up to 14px sideways as a sine. Use a 1px white stroke at 0.6 opacity and fade out over the last 0.5 seconds. x positions come from the formula (i*211)%1500; no randomness.
```

### English · Codex
```text
In the canvas of <file>, create 60 bubbles. With age=t-i/8 in 0 to 3.5: x=200+(i*211)%1500+sin(age*3.5+i)*14, y=1100-35*age*(1+k*0.5), radius 4+14k, alpha fade in the last 0.5 s. Tween t linearly over 5 s. Capture 1 s, 2.5 s and 4.5 s to confirm bubbles grow as they rise and never exceed 40 visible.
```

예시 / Example: 기포 상승를 `.hero`에 적용해. / Apply Rising Bubbles to `.hero`.

## 적용 / Application

- HyperFrames: 기포는 출생 시각으로 위치와 크기를 계산하고 x 기준은 (i*211)%1500 결정식이다. canvas stroke만 쓰니 가볍다
- ReelForge: 씬 브리프에 생성률 8/s, 상승 35, 반경 4~18, 흔들림 14px, 수명 3.5초를 싣는다
- Scrolline Deck: 진행률에 t를 선형으로 묶는다. 스크럽 방향이 바뀌면 기포가 내려가는데 이는 자연스러워 보이도록 흔들림 위상도 t에 묶는다

조합 / Pair with: [입자 분수 · Particle Fountain](../particle-fountain/) · [앰비언트 입자 유영 · Ambient Particle Drift](../ambient-particle-drift/) · [플로트 루프 · Float Loop](../float-loop/) · [연기 확산 · Smoke Plume](../smoke-plume/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/bubbles/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
