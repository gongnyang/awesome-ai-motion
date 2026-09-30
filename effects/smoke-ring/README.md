# Nº 510 연기 고리 · Smoke Ring Vortex

> 클립 렌더 예정 / Clip rendering planned.

**연무가 도넛 모양 고리 안에서 말려 돌고, 고리의 바깥 경계가 미세하게 흔들린다**

Smoke curls inside a doughnut-shaped ring while its outer edge wobbles slightly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 브랜딩 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: 연기 고리 소용돌이

## 선택 기준 / Selection

고리 안을 순환하는 힘과 신비로운 분위기를 만든다. 열림이나 주기를 조용히 암시하는 배경으로 쓴다 / Suggests a force circulating within the ring and a mysterious mood. It works as a quiet backdrop that hints at an opening or a cycle.

- 로고나 제목 주변을 은은히 감싸는 빛의 고리를 만들 때 / Wrap a soft ring of light around a logo or title.
- 신비롭거나 생성 중인 상태를 배경으로 표현할 때 / Show a mysterious or generating state through the background.

좋은 예 / Good: 반경 0.28UV, 두께 0.08UV의 고리 안에서 연기가 0.2/s로 천천히 말려 돈다. 외곽은 0.035UV만큼만 흔들려 원형이 유지된다
나쁜 예 / Bad: 노이즈 변위를 0.15UV 이상으로 키워 고리가 형태를 잃고 얼룩으로 번진다
주의 / Avoid: 노이즈 변위 0.06UV 초과 금지(고리 형태가 무너짐) · 고리 중앙에 긴 문장을 넣지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 고리 반경 | 0.28UV | 0.2~0.4UV | 화면 짧은 변 기준 |
| 두께 | 0.08UV | 0.05~0.12UV | 연무가 도는 폭 |
| 노이즈 변위 | 0.035UV | 0.02~0.06UV | 외곽 흔들림 |
| 속도 | 0.2/s | 0.1~0.3/s | 느리게 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 1.2, duration: 6, ease: 'none', onUpdate: () => mat.uniforms.uTime.value = u.t }, 0);
// GLSL: float d = abs(length(p) - 0.28 + noise(p * 3.0 + uTime) * 0.035); float m = smoothstep(0.08, 0.0, d);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 주변에 연기 고리 배경을 WebGL로 만들어줘. 고리 반경 0.28UV, 두께 0.08UV, 노이즈 변위 0.035UV, 속도 0.2/s, 6초. 연무 색은 은백색과 옅은 청색 두 톤으로 하고 uTime은 타임라인 tween으로 구동해.
```

### 한국어 · Codex
```text
<파일>에 smoke-ring 셰이더를 추가해. 반경 0.28UV, 두께 0.08UV, 변위 0.035UV, 속도 0.2/s, 6초. 0초, 3초, 6초를 캡처해 고리 폭이 일정한지, 바깥 경계가 미세하게만 흔들리는지, 중앙 로고가 가려지지 않는지 확인해.
```

### English · Claude Code
```text
Build a smoke ring background around <target> in WebGL. Ring radius 0.28 UV, thickness 0.08 UV, noise displacement 0.035 UV, speed 0.2/s, 6 seconds. Use two tones, silver white and pale blue, and drive uTime from a timeline tween.
```

### English · Codex
```text
Add a smoke-ring shader to <file>: radius 0.28 UV, thickness 0.08 UV, displacement 0.035 UV, speed 0.2/s, 6 seconds. Capture at 0s, 3s and 6s and verify the ring width is constant, the outer edge wobbles only slightly, and the center logo is unobstructed.
```

예시 / Example: 연기 고리를 `.hero`에 적용해. / Apply Smoke Ring Vortex to `.hero`.

## 적용 / Application

- HyperFrames: uTime을 paused 타임라인으로만 올리고, 노이즈는 시드 고정 해시 함수로 계산한다
- ReelForge: 씬 워커 브리프에 반경, 두께, 변위, 속도, 연무 색을 싣는다. 로고는 고리 중앙에 별도 레이어
- Scrolline Deck: 진행률로 uTime을 대응시킨다. 고리 반경 0.28에서 0.34로 커지는 변형은 progress에 연결하고 ease-out을 쓴다

조합 / Pair with: [윤곽 펄스 · Outline Pulse](../outline-pulse/) · [연기 확산 · Smoke Plume](../smoke-plume/) · [유체 잉크 · Fluid Ink Advection](../fluid-ink/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/smoke-ring) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
