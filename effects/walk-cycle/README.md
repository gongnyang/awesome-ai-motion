# Nº 580 걷기 사이클 · Walk Cycle

> 클립 렌더 예정 / Clip rendering planned.

**관절을 가진 캐릭터가 팔과 다리를 번갈아 움직이며 반복해서 걷는다.**

A rigged character alternates its arms and legs in a repeating walk.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 고급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | webgl |

다른 이름 / Also known as: Skeletal Walk Cycle, 스켈레탈 걷기 루프

## 선택 기준 / Selection

등장인물의 생동감과 이동을 표현한다. / Communicates character activity and locomotion.

- 캐릭터의 이동을 보여 줄 때 / Show a character traveling.
- 제자리 걷기로 활동 상태를 표현할 때 / Use an in-place walk to indicate activity.

좋은 예 / Good: 캐릭터가 1.2초 주기로 좌우 다리와 반대 팔을 교차해 걷는다.
나쁜 예 / Bad: 발이 지면에 닿는 동안 미끄러져 무게감이 사라진다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1.2s | 0.8~1.6s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 보폭 | 0.5단위 | 0.3~0.7단위 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 좌우 위상차 | 180deg | 180deg | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 관절 회전 진폭 | 25deg | 15~35deg | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { t: 0 };
const tl = gsap.timeline({ paused: true });
tl.to(state, { t: 1.2, duration: 1.2, ease: 'none', onUpdate: () => {
  mixer.setTime(state.t);
  renderer.render(scene, camera);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 걷기 사이클을 구현해. 주기 1.2s, 보폭 0.5단위, 좌우 위상차 180deg, 관절 회전 진폭 25deg, 이징 none을 적용해. WebGL에서 뼈의 위치와 회전 키프레임을 보간하고 스킨 가중치로 정점을 변형한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 걷기 사이클 장면 레이어에 적용해. 주기 1.2s, 보폭 0.5단위, 좌우 위상차 180deg, 관절 회전 진폭 25deg, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Walk Cycle on <target>. Use period 1.2s; stride 0.5 units; left-right phase offset 180deg; joint rotation amplitude 25deg; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Walk Cycle to the scene layer in <file>. Use period 1.2s; stride 0.5 units; left-right phase offset 180deg; joint rotation amplitude 25deg and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 걷기 사이클를 `.hero`에 적용해. / Apply Walk Cycle to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 걷기 사이클의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 1.2s, 보폭 0.5단위, 좌우 위상차 180deg, 관절 회전 진폭 25deg을 싣고 webgl 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.2s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [카메라 추적 · Camera Follow](../camera-follow/) · [오버랩 · Overlapping Action](../overlapping-action/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgl_animation_walk) (MIT) · [mrdoob/three.js](https://threejs.org/examples/#webgl_animation_skinning_blending) (MIT) · [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/adapters/lottie.md) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
