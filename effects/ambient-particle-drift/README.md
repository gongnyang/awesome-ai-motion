# Nº 593 앰비언트 입자 유영 · Ambient Particle Drift

> 클립 렌더 예정 / Clip rendering planned.

**작고 옅은 입자가 서로 다른 속도로 떠다닌다.**

Small, faint particles drift at different speeds.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | canvas |

## 선택 기준 / Selection

공간에 생기를 주면서 본문보다 낮은 시각적 무게를 유지한다. / Adds life and depth without competing with text.

- 빈 공간에 잔잔한 생기를 넣을 때 / Bring quiet life to empty space.
- 배경의 깊이를 암시할 때 / Suggest depth in a background.

좋은 예 / Good: 설명 영상 여백에 작은 입자 70개를 옅게 유영시킨다.
나쁜 예 / Bad: 큰 입자를 본문 위에 겹쳐 문장 대비를 낮춘다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 8s | 6~16s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 입자 수 | 70 | 30~100 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 크기 | 1~4px | 1~6px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 속도 | 5~18px/s | 3~20px/s | 궤도 최대 속도. 8초 주기의 닫힌 유영 궤도로 경계를 잇는다. |
| 불투명도 | 0.25 | 0.1~0.3 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { t: 0 };
const tl = gsap.timeline({ paused: true });
const particles = gsap.utils.toArray('.particle');
tl.to(state, { t: 8, duration: 8, ease: 'none', onUpdate: () => {
  particles.forEach((el, i) => {
    const a = 2 * Math.PI * (state.t / 8 + (i * 37 % 70) / 70);
    gsap.set(el, { x: 8 * Math.cos(a), y: (5 + i * 17 % 14) * 8 / (2 * Math.PI) * Math.sin(a), opacity: 0.25 });
  });
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 앰비언트 입자 유영을 구현해. 주기 8s, 입자 수 70, 크기 1~4px, 속도 5~18px/s, 불투명도 0.25, 이징 none을 적용해. canvas에서 시드별 속도와 위상으로 입자 위치를 계산하고 경계를 순환한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 앰비언트 입자 유영 장면 레이어에 적용해. 주기 8s, 입자 수 70, 크기 1~4px, 속도 5~18px/s, 불투명도 0.25, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Ambient Particle Drift on <target>. Use period 8s; particle count 70; size 1~4px; speed 5~18px/s; opacity 0.25; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Ambient Particle Drift to the scene layer in <file>. Use period 8s; particle count 70; size 1~4px; speed 5~18px/s; opacity 0.25 and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 앰비언트 입자 유영를 `.hero`에 적용해. / Apply Ambient Particle Drift to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 앰비언트 입자 유영의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 8s, 입자 수 70, 크기 1~4px, 속도 5~18px/s, 불투명도 0.25을 싣고 canvas 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 8s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [대기 원근 · Atmospheric Depth](../atmospheric-depth/) · [플로트 루프 · Float Loop](../float-loop/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/ambient/README.md) (MIT) · [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/stars/README.md) (MIT) · [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/bigCircles/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
