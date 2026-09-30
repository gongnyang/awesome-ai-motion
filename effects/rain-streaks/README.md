# Nº 535 빗줄기 · Rain Streaks

> 클립 렌더 예정 / Clip rendering planned.

**가는 선들이 같은 방향으로 빠르게 떨어지고 바닥에서 작은 흔적을 남기는 빗줄기**

Thin lines fall fast in one direction and leave small marks on the ground.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 기본 | 분위기 | 숏폼, 설명 영상, 웹 UI | canvas |

다른 이름 / Also known as: 빗줄기 낙하

## 선택 기준 / Selection

날씨, 속도, 긴장감. 조용한 비부터 폭우까지 밀도로 강도를 조절한다 / Weather, speed and tension. Intensity is controlled by density, from a quiet drizzle to a downpour.

- 우울하거나 긴장된 장면의 배경 분위기를 만들 때 / Build a gloomy or tense atmosphere behind a scene.
- 비 오는 도시 밤 같은 시네마틱 인트로를 만들 때 / Make a cinematic intro such as a rainy city at night.

좋은 예 / Good: 빗줄기 180개가 초속 500px로 12도 기울어 떨어지고 바닥 근처에서 반지름 8px 링으로 흩어진다
나쁜 예 / Bad: 줄기가 너무 밝고 길어 화면이 하얗게 줄무늬로 덮이거나, 줄기 사이 속도 차이가 없어 평면적이다
주의 / Avoid: 줄기 길이 40px 초과 금지 · 불투명도 0.5 초과 금지(본문 방해)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 줄기 수 | 180 | 80~300 | 고정 배열 |
| 속도 | 500px/s | 350~800 | 수직 성분 기준 |
| 길이 | 12~28px | 10~40 | 속도에 비례 |
| 기울기 | 12deg | 0~20 | 고정 방향 |
| 링 반경 | 8px | 5~12px | 바닥 충돌 흔적 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const D = Array.from({ length: 180 }, (_, i) => ({ x: (i * 97) % 1920, o: (i * 0.618) % 1, s: 350 + (i % 5) * 60, l: 12 + (i % 4) * 5 }));
const u = { t: 0 };
tl.to(u, { t: 4, duration: 4, ease: 'none', onUpdate() { D.forEach(d => {
  const y = ((d.o * 1200 + d.s * u.t) % 1200) - 100, x = d.x + y * Math.tan(12 * Math.PI / 180);
  drawLine(x, y, x - d.l * 0.2, y - d.l); }); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 빗줄기를 넣어줘. 줄기 180개가 초속 350~590px(5단계)로 12도 기울어 떨어지고 길이는 12~27px로 4단계, 색은 #bcd4ff 불투명도 0.35로 해. 위치는 (오프셋+속도*t) mod 1200으로 계산해 4초 루프가 이어지게 하고, 화면 아래 y 1020 근처에서 반지름 8px 링이 0.3초 퍼지게 해.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 줄기 180개 배열(x=(i*97)%1920, 오프셋 (i*0.618)%1, 속도 350+(i%5)*60, 길이 12+(i%4)*5)을 만들어. y=((o*1200+s*t)%1200)-100, 기울기 12도. t는 4초 선형 tween. 0초와 4초 프레임이 같은지, 1.5초 캡처에서 줄기 밀도가 균일하고 글자 영역을 방해하지 않는지 확인해.
```

### English · Claude Code
```text
Add rain streaks to the background of <target>. 180 streaks fall at 350 to 590px per second (5 speed steps) tilted 12 degrees, length 12 to 27px in 4 steps, color #bcd4ff at 0.35 opacity. Compute position as (offset + speed*t) mod 1200 so a 4-second loop closes, and let 8px-radius rings spread for 0.3 seconds near y 1020.
```

### English · Codex
```text
In the canvas of <file>, build 180 streaks (x=(i*97)%1920, offset (i*0.618)%1, speed 350+(i%5)*60, length 12+(i%4)*5). y=((o*1200+s*t)%1200)-100 with a 12 degree tilt. Tween t linearly over 4 s. Capture 0 s and 4 s to confirm they match, and 1.5 s to confirm density is even and text areas are not disturbed.
```

예시 / Example: 빗줄기를 `.hero`에 적용해. / Apply Rain Streaks to `.hero`.

## 적용 / Application

- HyperFrames: 줄기 위치를 (오프셋+속도*t) mod 화면 높이로 계산하니 상태가 없고 루프 길이가 정확하다. 줄기는 canvas 선 180개면 충분하다
- ReelForge: 씬 브리프에 줄기 180, 속도 500, 기울기 12도, 알파 0.35, 색을 싣는다. 밀도 파라미터로 강도를 조절
- Scrolline Deck: 진행률을 t에 매핑하되 총 스크롤 길이가 짧아도 밀도로 분위기가 유지되도록 속도를 진행률과 분리한 idle 위상을 추가한다

조합 / Pair with: [어텐션 선 · Attention Lines](../attention-lines/) · [방사 속도선 · Radial Speed Lines](../radial-speed-lines/) · [리플 링 · Ripple Rings](../ripple-rings/) · [앰비언트 입자 유영 · Ambient Particle Drift](../ambient-particle-drift/)

출처 / Sources: [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_compute_particles_rain) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
