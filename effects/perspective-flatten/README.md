# Nº 570 원근 평면화 · Perspective Flatten

> 클립 렌더 예정 / Clip rendering planned.

**비스듬히 기울어 작게 보이던 화면이 진행에 따라 정면으로 펴지며 커지는 소개**

A screen that starts tilted and small rotates flat to face the viewer and grows.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 중급 | 설명, 주목 끌기 | 스크롤덱, 제품 시연, 설명 영상 | css |

다른 이름 / Also known as: Scroll Perspective Flatten, 스크롤 입체 펴기

## 선택 기준 / Selection

화면을 입체 오브젝트에서 읽을 수 있는 정보면으로 바꾼다. 기울기가 풀리는 만큼 초점이 화면 내용으로 옮겨 간다 / Turns a 3D-looking object into a readable information surface, moving focus to its content as the tilt resolves.

- 앱 화면을 기울어진 상태에서 정면으로 소개할 때 / Introduce an app screen from a tilted pose to front-on.
- 스크롤하며 미리보기 카드가 본 화면으로 펴질 때 / A preview card flattening into the main view as you scroll.
- 제품 캡처를 히어로 크기로 확대 공개할 때 / Enlarge a product capture into a hero reveal.

좋은 예 / Good: 화면이 rotateX 30도, scale 0.85에서 1.5초 동안 정면 0도, scale 1로 펴지며 글자가 읽히기 시작한다
나쁜 예 / Bad: 기울기가 60도 이상이라 처음부터 읽지 못하거나, scale만 키우고 기울기는 그대로 남는다
주의 / Avoid: 시작 기울기는 45도 이하로 한다 · 펴지는 동안 가장 빠른 구간이 중간에 오도록 inOut을 쓴다 · 최종 프레임은 회전 0으로 정확히 끝난다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 1.5s | 1.0~2.2s | 펴짐 |
| 회전 | 30→0deg | 20~45deg | rotateX |
| scale | 0.85→1 | 0.75~0.9 → 1 | 동시 |
| perspective | 1200px | 900~1600px | 부모 |
| 이징 | power2.inOut | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
gsap.set('.stage', { perspective: 1200 });
tl.fromTo('.screen', { rotationX: 30, scale: 0.85, transformOrigin: '50% 100%' },
  { rotationX: 0, scale: 1, duration: 1.5, ease: 'power2.inOut' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <화면 이미지>를 원근으로 펴지는 소개 연출로 만들어 줘. 부모 perspective 1200px, 시작은 rotationX 30도, scale 0.85, transformOrigin 하단 중앙, 0.3초부터 1.5초 동안 power2.inOut으로 rotationX 0, scale 1이 되게 해. 최종 프레임은 회전 0으로 정확히 끝나고 paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 화면에 perspective-flatten을 적용해. .stage perspective 1200, .screen fromTo rotationX 30→0, scale 0.85→1, transformOrigin '50% 100%', position 0.3, duration 1.5, ease power2.inOut. 0.3초는 기울어짐, 1.05초는 중간, 2.0초는 matrix가 identity에 가까운지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to flatten <screen image> into view. Parent perspective 1200px; start at rotationX 30 degrees, scale 0.85, transformOrigin bottom center, and from 0.3 seconds over 1.5 seconds go to rotationX 0, scale 1 with power2.inOut. The final frame ends exactly at zero rotation. Paused timeline.
```

### English · Codex
```text
Apply perspective-flatten to the screen in <file>. .stage perspective 1200; .screen fromTo rotationX 30 to 0, scale 0.85 to 1, transformOrigin '50% 100%', position 0.3, duration 1.5, ease power2.inOut. Capture 0.3s (tilted), 1.05s (midway) and 2.0s (matrix near identity).
```

예시 / Example: 원근 평면화를 `.hero`에 적용해. / Apply Perspective Flatten to `.hero`.

## 적용 / Application

- HyperFrames: fromTo로 시작값을 명시해 seek 시 튐이 없게 한다. transformOrigin은 하단 중앙으로 두면 바닥이 고정된 채 펴진다
- ReelForge: 브리프에 화면 이미지, 회전 30→0, scale 0.85→1, 1.5s를 싣는다
- Scrolline Deck: 진행률 0~1을 rotationX 30~0과 scale 0.85~1에 직접 매핑한다. 스크롤 덱에서 가장 잘 맞는 기법이다

조합 / Pair with: [스크린 이머전스 · Screen Emergence](../screen-emergence/) · [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/) · [푸시인 · Push-in](../push-in/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/container-scroll-animation) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
