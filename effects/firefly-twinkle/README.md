# Nº 600 반딧불 점멸 · Firefly Twinkle

> 클립 렌더 예정 / Clip rendering planned.

**떠다니는 작은 빛이 서로 다른 박자로 밝아졌다 어두워진다.**

Floating lights brighten and dim with independent rhythms.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | canvas |

## 선택 기준 / Selection

따뜻하고 살아 있는 야간 분위기를 만든다. / Creates a warm, living nighttime atmosphere.

- 따뜻한 야간 분위기를 만들 때 / Build a warm night scene.
- 작은 빛으로 공간을 채울 때 / Populate a space with small luminous accents.

좋은 예 / Good: 야간 장면의 작은 빛 45개가 각기 다른 위상으로 밝아진다.
나쁜 예 / Bad: 밝은 점을 동일 주기로 켜 자연스러운 분위기가 사라진다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 장면 지속 | 8s | 6~16s | 장면 길이. 8초마다 리셋하지 않고 절대 시간으로 점멸과 이동을 이어 간다. |
| 점 수 | 45 | 20~70 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 이동 속도 | 8px/s | 3~12px/s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 점멸 주기 | 1.7~3.6s | 1.5~4s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 글로 반경 | 8px | 4~12px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const state = { t: 0 };
const lights = gsap.utils.toArray('.firefly');
const tl = gsap.timeline({ paused: true });
tl.to(state, { t: 8, duration: 8, ease: 'none', onUpdate: () => {
  lights.forEach((el, i) => {
    const period = 1.7 + (i * 13 % 20) / 10;
    const phase = state.t * 2 * Math.PI / period + i * 2.4;
    gsap.set(el, { x: 8 * state.t, opacity: 0.1 + 0.7 * (1 + Math.sin(phase)) / 2 });
  });
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 반딧불 점멸을 구현해. 장면 지속 8s, 점 수 45, 이동 속도 8px/s, 점멸 주기 1.7~3.6s, 글로 반경 8px, 이징 sine.inOut을 적용해. canvas에서 시드별 위치와 밝기 위상으로 빛나는 점을 합성한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 반딧불 점멸 장면 레이어에 적용해. 장면 지속 8s, 점 수 45, 이동 속도 8px/s, 점멸 주기 1.7~3.6s, 글로 반경 8px, 이징 sine.inOut을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Firefly Twinkle on <target>. Use scene duration 8s; light count 45; drift speed 8px/s; twinkle period 1.7~3.6s; glow radius 8px; use sine.inOut easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Firefly Twinkle to the scene layer in <file>. Use scene duration 8s; light count 45; drift speed 8px/s; twinkle period 1.7~3.6s; glow radius 8px and sine.inOut easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 반딧불 점멸를 `.hero`에 적용해. / Apply Firefly Twinkle to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 반딧불 점멸의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 장면 지속 8s, 점 수 45, 이동 속도 8px/s, 점멸 주기 1.7~3.6s, 글로 반경 8px을 싣고 canvas 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 8s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [앰비언트 글로우 · Ambient Glow](../ambient-glow/) · [앰비언트 입자 유영 · Ambient Particle Drift](../ambient-particle-drift/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/firefly/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
