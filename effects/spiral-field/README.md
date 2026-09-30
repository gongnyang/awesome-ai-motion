# Nº 511 나선 필드 · Spiral Field Rotation

> 클립 렌더 예정 / Clip rendering planned.

**중심에서 뻗는 나선 무늬가 일정하게 회전하며 안쪽으로 빨려 들거나 바깥으로 흘러나오는 것처럼 보인다**

A continuous spiral pattern radiates from the center and rotates so it seems to flow inward or outward.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 주목 끌기, 분위기 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: 나선장 회전

## 선택 기준 / Selection

시선이 중심으로 모이고 무언가에 끌려 들어가는 느낌을 준다. 최면, 몰입, 순환 같은 상태를 배경만으로 전한다 / Draws the eye to the center and suggests being pulled in. It conveys immersion, cycles or a hypnotic state through the background alone.

- 중심의 제목이나 로고로 시선을 모으고 싶을 때 / Gather attention on a central title or logo.
- 몰입, 순환, 빨려 드는 상태를 배경으로 표현할 때 / Express immersion or circulation in a background.

좋은 예 / Good: 나선 팔 4개가 25도/s로 5초 동안 돌고, 중앙의 제목에 시선이 모인다. 색은 두 가지로 제한한다
나쁜 예 / Bad: 팔 수를 20개 이상으로 늘리고 회전을 90도/s로 올려 눈이 어지럽고, 텍스트는 읽을 수 없다
주의 / Avoid: 회전 40도/s 초과 금지(멀미 유발) · 색은 두 가지 이하로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 나선 팔 | 4개 | 3~8개 | 팔이 많을수록 촘촘함 |
| 회전 속도 | 25도/s | 15~40도/s | linear 유지 |
| 반경 반복 | 8 | 6~12 | 반경 방향 띠 수 |
| 지속 | 5s | 4~6s | 125도 회전 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { a: 0 };
tl.to(u, { a: 125, duration: 5, ease: 'none',
  onUpdate: () => mat.uniforms.uAngle.value = u.a * Math.PI / 180 }, 0);
// GLSL: float ph = atan(p.y, p.x) * 4.0 + log(length(p)) * 8.0 - uAngle * 4.0; v = step(0.5, fract(ph / 6.2832));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 뒤에 나선 필드 배경을 WebGL로 만들어줘. 나선 팔 4개, 반경 반복 8, 25도/s로 5초 동안 linear로 회전, 색은 진남색과 청록 두 가지만 써. 각도는 GSAP 타임라인 tween 하나로 구동해.
```

### 한국어 · Codex
```text
<파일>에 spiral-field 셰이더를 넣어줘. 팔 4개, 반경 반복 8, 회전 25도/s, 5초, ease none, 색 2개. 각도는 timeline progress로만 갱신한다. 0초, 2.5초, 5초를 캡처해 회전각 차이가 약 62도씩인지, 중앙 제목이 가려지지 않는지 확인해.
```

### English · Claude Code
```text
Build a spiral field background behind <target> in WebGL. 4 arms, radial repeat 8, rotate at 25 deg/s for 5 seconds with linear timing, using only navy and teal. Drive the angle from a single GSAP timeline tween.
```

### English · Codex
```text
Add a spiral-field shader to <file>: 4 arms, radial repeat 8, rotation 25 deg/s, 5 seconds, ease none, 2 colors. Update the angle from timeline progress only. Capture at 0s, 2.5s and 5s and verify the rotation differs by about 62 degrees per step and the central title stays unobstructed.
```

예시 / Example: 나선 필드를 `.hero`에 적용해. / Apply Spiral Field Rotation to `.hero`.

## 적용 / Application

- HyperFrames: uAngle을 paused 타임라인 tween으로 올린다. 회전 방향을 뒤집으려면 부호만 바꾸고 계산식은 그대로 둔다
- ReelForge: 씬 워커 브리프에 팔 수 4, 반경 반복 8, 회전 25도/s, 색 두 가지를 싣는다. 제목은 중앙 고정
- Scrolline Deck: 진행률에 회전각을 선형으로 매핑한다. 스크롤 방향을 바꾸면 회전도 거꾸로 돌기 때문에 안팎 방향이 의미를 가진다면 미리 확인한다

조합 / Pair with: [스월 전환 · Swirl Transition](../swirl-transition/) · [입자 소용돌이 · Particle Vortex](../particle-vortex/) · [나선 조립 · Spiral Assembly](../spiral-assembly/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/spiral) (Apache-2.0) · [paper-design/shaders](https://shaders.paper.design/swirl) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
