# Nº 610 메시 그라디언트 흐름 · Mesh Gradient Flow

> 클립 렌더 예정 / Clip rendering planned.

**부드러운 여러 색 덩어리가 천천히 위치와 크기를 바꾸며 서로 섞인다.**

Colors blend as soft centers drift and change size.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 고급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | webgl |

다른 이름 / Also known as: Animated mesh gradient, Aurora gradient, Aurora Field, 오로라 배경

## 선택 기준 / Selection

차분한 생기와 유동적인 배경을 만든다. / Creates a calm, fluid background.

- 브랜드 팔레트를 배경에 펼칠 때 / Brand introductions need a restrained palette in motion.
- 긴 대기 화면에 느린 움직임을 넣을 때 / Long waiting screens need gentle background movement.

좋은 예 / Good: 브랜드 소개 제목 뒤에 낮은 대비의 네 색 중심을 천천히 섞는다.
나쁜 예 / Bad: 색 대비를 크게 올려 본문 획이 배경에 묻힌다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 8s | 4~16s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 색 개수 | 4 | 3~6 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 왜곡 | 0.4 | 0.1~0.6 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 중심 이동 | 0.15UV | 0.05~0.2UV | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { phase: 0 };
const tl = gsap.timeline({ paused: true });
tl.to(state, { phase: Math.PI * 2, duration: 8, ease: 'none',
  onUpdate: () => { uniforms.uPhase.value = state.phase; renderer.render(scene, camera); } });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 메시 그라디언트 흐름을 구현해. 주기 8s, 색 개수 4, 왜곡 0.4, 중심 이동 0.15UV, 이징 none을 적용해. WebGL에서 움직이는 색 중심의 거리 가중치와 워프 좌표로 색을 혼합한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 메시 그라디언트 흐름 장면 레이어에 적용해. 주기 8s, 색 개수 4, 왜곡 0.4, 중심 이동 0.15UV, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Mesh Gradient Flow on <target>. Use period 8s; color count 4; distortion 0.4; center travel 0.15UV; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Mesh Gradient Flow to the scene layer in <file>. Use period 8s; color count 4; distortion 0.4; center travel 0.15UV and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 메시 그라디언트 흐름를 `.hero`에 적용해. / Apply Mesh Gradient Flow to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 메시 그라디언트 흐름의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 8s, 색 개수 4, 왜곡 0.4, 중심 이동 0.15UV을 싣고 webgl 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 8s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [앰비언트 글로우 · Ambient Glow](../ambient-glow/) · [그라디언트 드리프트 · Gradient Drift](../gradient-drift/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/mesh-gradient) (Apache-2.0) · [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/shader-glsl/SKILL.md) (MIT) · [magicuidesign/magicui](https://github.com/magicuidesign/magicui) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/aurora-background) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
