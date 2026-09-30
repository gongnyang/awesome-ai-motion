# Nº 599 에너지 오브 · Energy Orb

> 클립 렌더 예정 / Clip rendering planned.

**빛나는 구체의 가장자리가 부드럽게 변형되고 내부 빛이 순환한다.**

A luminous orb gently deforms while light circulates inside.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 고급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | webgl |

다른 이름 / Also known as: Breathing Energy Orb, 에너지 구체

## 선택 기준 / Selection

집중된 에너지와 대기 상태를 보여 준다. / Suggests focused energy and an idle listening state.

- 음성 입력 대기 상태를 보여 줄 때 / Show an idle voice-input state.
- 집중할 중심 오브젝트가 필요할 때 / Give a composition a single visual focal point.

좋은 예 / Good: 음성 입력 대기 화면 중앙에 반경 120px 오브를 둔다.
나쁜 예 / Bad: 응답 완료 뒤에도 오브를 크게 진동시켜 처리 상태를 혼동시킨다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 5s | 3~8s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 반경 | 120px | 80~180px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 변형 폭 | 10% | 4~12% | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 흐름 속도 | 0.25 | 0.1~0.4 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { phase: 0 };
const tl = gsap.timeline({ paused: true });
tl.to(state, { phase: Math.PI * 2, duration: 5, ease: 'none',
  onUpdate: () => { uniforms.uPhase.value = state.phase; renderer.render(scene, camera); } });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 에너지 오브을 구현해. 주기 5s, 반경 120px, 변형 폭 10%, 흐름 속도 0.25, 이징 none을 적용해. WebGL 원형 거리장에 시간 노이즈와 색 흐름을 합성한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 에너지 오브 장면 레이어에 적용해. 주기 5s, 반경 120px, 변형 폭 10%, 흐름 속도 0.25, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Energy Orb on <target>. Use period 5s; radius 120px; deformation 10%; flow speed 0.25; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Energy Orb to the scene layer in <file>. Use period 5s; radius 120px; deformation 10%; flow speed 0.25 and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 에너지 오브를 `.hero`에 적용해. / Apply Energy Orb to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 에너지 오브의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 5s, 반경 120px, 변형 폭 10%, 흐름 속도 0.25을 싣고 webgl 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 5s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [브리딩 루프 · Breathing Loop](../breathing-loop/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
