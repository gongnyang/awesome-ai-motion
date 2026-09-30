# Nº 466 불꽃 노이즈 루프 · Flame Noise Loop

> 클립 렌더 예정 / Clip rendering planned.

**홍채나 광원 주변의 불꽃 같은 노이즈가 일렁이고 중심 구멍이 시선을 따라 움직이는 루프**

Flame-like noise flickers around an iris or light source while the central hole tracks a gaze.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 주목 끌기, 분위기 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: Flame and Iris Loop, 불꽃과 홍채 루프, EvilEye

## 선택 기준 / Selection

강한 에너지를 품은 살아 있는 눈이나 코어. 정지 이미지에 생명을 불어넣는다 / A living eye or core full of energy. It breathes life into a still image.

- AI 눈·코어·에너지 구체가 살아 있는 상태임을 보여 줄 때 / Show that an AI eye, core or energy orb is alive.
- 로딩이나 대기 상태에서 중심에 시선을 잡아 둘 때 / Hold the gaze on the center during loading or waiting.

좋은 예 / Good: 주황색 고리 노이즈가 4초 루프로 일렁이고 중심의 검은 동공이 12px 범위에서 천천히 좌우로 시선을 옮긴다
나쁜 예 / Bad: 노이즈가 커서 고리 형태가 무너지거나 동공 이동이 빨라 두리번거리는 것처럼 산만해진다
주의 / Avoid: 노이즈 강도 0.3 초과 금지 · 시선 이동은 반경 16px, 속도는 0.4 이하로 제한

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 루프 | 4s | 3~6s | 노이즈 위상 한 바퀴 |
| 노이즈 강도 | 0.2 | 0.1~0.3 | 고리 가장자리 왜곡 |
| 시선 이동 | 12px | 8~16px | 동공 중심 오프셋 |
| 속도 | 0.3 | 0.2~0.4 | 노이즈 시간 배율 |
| 고리 색 | #ff7a1a to #ffd27a | 고정 | 안에서 바깥으로 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0, gx: 0, gy: 0 };
tl.to(u, { t: Math.PI * 2, duration: 4, ease: 'none', onUpdate: draw }, 0)
  .to(u, { gx: 12, duration: 1.4, ease: 'sine.inOut' }, 0.4)
  .to(u, { gx: -8, gy: 4, duration: 1.6, ease: 'sine.inOut' }, 2.0);
// GLSL: vec2 p = (uv - c - vec2(gx, gy)*0.5)*2.; float a = atan(p.y, p.x), r = length(p);
// float n = fbm(vec3(cos(a)*1.5, sin(a)*1.5, r*2. - cos(t)*0.3)) * 0.2;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 중심에 불꽃 노이즈 루프를 넣어줘. 반지름 200px 고리를 주황(#ff7a1a)에서 연한 노랑(#ffd27a)으로 매핑하고 극좌표 fbm 노이즈 강도 0.2로 가장자리를 일렁이게 해. 4초 주기로 이음매 없이 반복하고, 중심 검은 동공이 0.4초에 시작해 오른쪽 12px, 2초에 왼쪽 8px 이동하게 해(sine.inOut).
```

### 한국어 · Codex
```text
<파일>의 캔버스에 flame ring 셰이더를 추가해. 극좌표 fbm(cos a*1.5, sin a*1.5, r*2-cos t*0.3)*0.2, t는 4초에 0→2π 선형, 동공 오프셋 gx는 0.4초에 12px, 2초에 -8px로 sine.inOut. 0초와 4초 프레임이 같은지, 1초·2.5초에서 동공이 이동했는지 캡처로 확인해.
```

### English · Claude Code
```text
Add a flame noise loop at the center of <target>. Map a 200px-radius ring from orange (#ff7a1a) to pale yellow (#ffd27a) and ripple its edge with polar fbm noise at strength 0.2. Loop seamlessly every 4 seconds, and shift the black pupil 12px right at 0.4 seconds and 8px left at 2 seconds with sine.inOut.
```

### English · Codex
```text
Add a flame ring shader to the canvas in <file>. Polar fbm(cos a*1.5, sin a*1.5, r*2-cos t*0.3)*0.2; tween t 0 to 2π linearly over 4 s; pupil offset gx goes to 12px at 0.4 s and -8px at 2 s with sine.inOut. Capture 0 s and 4 s to confirm they match, and 1 s and 2.5 s to confirm the pupil moved.
```

예시 / Example: 불꽃 노이즈 루프를 `.hero`에 적용해. / Apply Flame Noise Loop to `.hero`.

## 적용 / Application

- HyperFrames: 극좌표 노이즈의 위상을 cos t로 돌려 4초에 루프를 닫고, 시선 이동은 별도 tween을 같은 paused 타임라인에 얹는다
- ReelForge: 씬 브리프에 루프 4초, 노이즈 0.2, 시선 이동 12px, 색 2개를 싣는다. 시선 경로는 키프레임으로 고정
- Scrolline Deck: 진행률로 t와 시선 위치를 함께 구동하고 시선 이동은 ease-out으로 짧게 끝낸다

조합 / Pair with: [에너지 오브 · Energy Orb](../energy-orb/) · [홀로그램 광택 · Holographic sheen](../holographic-sheen/) · [난류 왜곡 · Turbulent Displace](../turbulent-displace/) · [펄스 · Pulse](../pulse/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
