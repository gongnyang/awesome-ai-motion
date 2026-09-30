# Nº 491 트월 · Twirl Distortion

> 클립 렌더 예정 / Clip rendering planned.

**중심 주변의 영상이 소용돌이처럼 돌아 말리는 트월 왜곡**

Footage around a center twists and curls like a whirlpool.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 전환, 주목 끌기 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: 소용돌이 왜곡

## 선택 기준 / Selection

회전 에너지와 공간의 뒤틀림. 장면이 빨려 들어가거나 기억이 흐려지는 느낌 / Rotational energy and warped space. A feeling of being pulled in or of memory blurring.

- 장면을 소용돌이로 말아 다음 장면으로 넘길 때 / Curl a scene into a spiral to hand off to the next.
- 회상이나 꿈 전환에 뒤틀린 공간감을 줄 때 / Give flashbacks or dream transitions a twisted sense of space.

좋은 예 / Good: 이미지 중심에서 반경 160px 범위가 1초 동안 180도까지 회전하며 말렸다가 0.6초에 풀린다
나쁜 예 / Bad: 회전각이 720도를 넘어 이미지가 알아볼 수 없이 갈리거나 반경이 화면 전체라 왜곡이 무겁다
주의 / Avoid: 각도 360도 초과 금지 · 반경 320px 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1s | 0.6~1.4s | 말리는 시간 |
| 회전각 | 180deg | 90~360 | 중심 최대 회전 |
| 반경 | 160px | 120~320 | 왜곡 영향 범위 |
| 복원 | 0.6s | 0.4~1s | 원래대로 |
| 중심 | (960,540) | 고정 | 화면 중앙 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { a: 0 };
tl.to(u, { a: Math.PI, duration: 1, ease: 'power2.inOut', onUpdate: draw }, 0.2)
  .to(u, { a: 0, duration: 0.6, ease: 'power2.out', onUpdate: draw }, 1.4);
// GLSL: float d = distance(uv, c); float k = smoothstep(r, 0.0, d);
// float ang = a * k * k; uv = c + rot(ang) * (uv - c);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 트월 왜곡을 넣어줘. 화면 중앙(960,540)을 중심으로 반경 160px 안쪽을 0.2초에 시작해 1초 동안 power2.inOut으로 최대 180도까지 회전시키고, 중심일수록 많이 돌게 해(k=smoothstep^2). 1.4초부터 0.6초에 걸쳐 power2.out으로 원래대로 풀어줘.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 twirl 셰이더를 추가해. d=distance(uv,c), k=smoothstep(r,0,d), 각도=a*k*k, r=160px 환산. a는 0.2초부터 1초 power2.inOut로 0→π, 1.4초부터 0.6초 power2.out으로 π→0. 0.7초·1.2초·2.2초 캡처로 중심이 가장 많이 돌고 마지막에 원본과 같아지는지 확인해.
```

### English · Claude Code
```text
Add a twirl distortion to the image in <target>. Centered on (960,540) with radius 160px, rotate up to 180 degrees over 1 second with power2.inOut starting at 0.2 seconds, more at the center (k = smoothstep squared). From 1.4 seconds unwind back over 0.6 seconds with power2.out.
```

### English · Codex
```text
Add a twirl shader to the image canvas in <file>. d=distance(uv,c), k=smoothstep(r,0,d), angle=a*k*k, r=160px converted. Tween a 0 to π from 0.2 s over 1 s power2.inOut, then π to 0 from 1.4 s over 0.6 s power2.out. Capture 0.7 s, 1.2 s and 2.2 s to check the center rotates most and the final frame equals the source.
```

예시 / Example: 트월를 `.hero`에 적용해. / Apply Twirl Distortion to `.hero`.

## 적용 / Application

- HyperFrames: 각도 a를 paused 타임라인에서 tween하고 셰이더는 a만 받는다. 말림과 복원을 한 타임라인 두 tween으로 잇는다
- ReelForge: 씬 브리프에 중심 좌표, 반경 160px, 최대 각도 180도, 말림 1초, 복원 0.6초를 싣는다
- Scrolline Deck: a를 진행률에 매핑하고 복원은 ease-out. 전환으로 쓸 때는 각도 정점에서 다음 장면과 크로스페이드

조합 / Pair with: [스월 전환 · Swirl Transition](../swirl-transition/) · [구면화 · Spherize](../spherize/) · [칼레이도스코프 전환 · Kaleidoscope Transition](../kaleidoscope-transition/) · [극좌표 말기 · Polar Coordinates Wrap](../polar-wrap/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
