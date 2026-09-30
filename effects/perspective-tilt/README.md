# Nº 236 3D 원근 틸트 리빌 · Perspective Tilt Reveal

![3D 원근 틸트 리빌 · Perspective Tilt Reveal](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**편집 지면을 55도로 눕혀 전체 격자를 드러내고 한 도판으로 돌아오는 카메라 이동**

An editorial page tilts back by 55 degrees to reveal its grid before returning to one frontal figure.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 고급 | 주목 끌기, 설명, 전환 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: 3D tilt and depth, 3D 기울기와 깊이, Perspective Card Tilt, 카드 입체 기울기, 3D Card Tilt and Float, 3D 카드 기울임과 부유

## 선택 기준 / Selection

부분과 전체의 관계 및 지면의 공간 구조 / The relationship between a detail and the full editorial structure.

- 한 도판에서 전체 구조를 보여줄 때 / Reveal the full structure around a single figure.
- 정보 지도에서 핵심 도판으로 돌아올 때 / Return from an information atlas to its key figure.

좋은 예 / Good: 01 도판에서 9개 격자로 멀어졌다가 05 도판으로 들어간다
나쁜 예 / Bad: 각도를 80도 이상 눕혀 전체 격자를 알아볼 수 없다
주의 / Avoid: 원근을 900px 미만으로 줄이지 않는다 · 도판이 멀어진 구간에 긴 본문을 읽게 하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 원근 | 1400px | 1000~1600px | 카메라 래퍼 |
| 기울기 | 55° | 40~60° | 전체 지면의 rotateX |
| 확대비 | 2.02 → 0.69 → 2.02 | 0.6~2.2 | 중앙 도판을 기준으로 줌 |
| 지면 크기 | 1500×990px | 1200~1800px 폭 | 3×3 도판 격자 |

이징 / Ease: `power2.inOut / sine.inOut / power3.inOut`

## 구현 / Implementation (GSAP)

```js
tl.set('.world',{scale:2.02,rotationX:0,z:0,x:1010,y:666,clipPath:'inset(0% 66.666% 66.666% 0%)'},0);
tl.to('.world',{clipPath:'inset(0% 0% 0% 0%)',duration:.6,ease:'sine.inOut'},.3);
tl.to('.world',{rotationX:55,scale:.69,z:-180,x:0,y:-15,duration:1.45,ease:'power2.inOut'},.3);
tl.to('.world',{rotationX:55,scale:.73,z:-150,y:0,duration:.5,ease:'sine.inOut'},1.75);
tl.to('.world',{rotationX:0,scale:2.02,z:0,y:0,duration:1.05,ease:'power3.inOut'},2.25);
tl.to('.world',{clipPath:'inset(33.333% 33.333% 33.333% 33.333%)',duration:.8,ease:'power2.inOut'},2.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 1500×990px 지면에 3×3 도판을 배치하고 원근 1400px를 적용한다. 0.3초부터 1.45초 동안 rotateX 55도, scale 0.69, z -180px로 멀어지고 2.25초부터 1.05초 동안 rotateX 0도, scale 2.02, z 0으로 중앙 도판에 들어간다. 마지막 0.7초 홀드. 종이·먹·주홍 한 곳으로 구성하고 한 paused GSAP 타임라인을 쓴다. 시작은 x 1010px, y 666px로 01 도판을 보고, 마지막은 inset 33.333% 마스크로 05 도판만 남긴다.
```

### 한국어 · Codex
```text
<파일>에 1500×990px 지면에 3×3 도판을 배치하고 원근 1400px를 적용한다. 0.3초부터 1.45초 동안 rotateX 55도, scale 0.69, z -180px로 멀어지고 2.25초부터 1.05초 동안 rotateX 0도, scale 2.02, z 0으로 중앙 도판에 들어간다. 마지막 0.7초 홀드. 0.33초, 1.67초, 2.33초, 3.87초 캡처로 깊이 변화, 잘림, 마지막 정지를 확인한다. 시작은 x 1010px, y 666px로 01 도판을 보고, 마지막은 inset 33.333% 마스크로 05 도판만 남긴다.
```

### English · Claude Code
```text
Apply this effect to <대상>. Build a 1500×990px editorial page with a 3×3 figure grid and perspective 1400px. Starting at 0.3s, tilt to rotateX 55deg, scale 0.69 and z -180px over 1.45s. At 2.25s return to the center figure with rotateX 0deg, scale 2.02 and z 0 over 1.05s, then hold for 0.7s. Use paper, ink and one vermilion focus with a single paused GSAP timeline. Start with x 1010px and y 666px on figure 01; finish with an inset 33.333% mask isolating figure 05.
```

### English · Codex
```text
Implement in <파일>. Build a 1500×990px editorial page with a 3×3 figure grid and perspective 1400px. Starting at 0.3s, tilt to rotateX 55deg, scale 0.69 and z -180px over 1.45s. At 2.25s return to the center figure with rotateX 0deg, scale 2.02 and z 0 over 1.05s, then hold for 0.7s. Capture at 0.33s, 1.67s, 2.33s and 3.87s to verify depth, clipping and the final hold. Start with x 1010px and y 666px on figure 01; finish with an inset 33.333% mask isolating figure 05.
```

예시 / Example: 3D 원근 틸트 리빌를 `.hero`에 적용해. / Apply Perspective Tilt Reveal to `.hero`.

## 적용 / Application

- HyperFrames: 1500×990px 지면에 3×3 도판을 배치하고 원근 1400px를 적용한다. 0.3초부터 1.45초 동안 rotateX 55도, scale 0.69, z -180px로 멀어지고 2.25초부터 1.05초 동안 rotateX 0도, scale 2.02, z 0으로 중앙 도판에 들어간다. 마지막 0.7초 홀드. 한 paused 타임라인으로 seek한다. 시작은 x 1010px, y 666px로 01 도판을 보고, 마지막은 inset 33.333% 마스크로 05 도판만 남긴다.
- ReelForge: 1500×990px 지면에 3×3 도판을 배치하고 원근 1400px를 적용한다. 0.3초부터 1.45초 동안 rotateX 55도, scale 0.69, z -180px로 멀어지고 2.25초부터 1.05초 동안 rotateX 0도, scale 2.02, z 0으로 중앙 도판에 들어간다. 마지막 0.7초 홀드. 장면의 월드 래퍼 안에 배치한다. 시작은 x 1010px, y 666px로 01 도판을 보고, 마지막은 inset 33.333% 마스크로 05 도판만 남긴다.
- Scrolline Deck: 1500×990px 지면에 3×3 도판을 배치하고 원근 1400px를 적용한다. 0.3초부터 1.45초 동안 rotateX 55도, scale 0.69, z -180px로 멀어지고 2.25초부터 1.05초 동안 rotateX 0도, scale 2.02, z 0으로 중앙 도판에 들어간다. 마지막 0.7초 홀드. 4초 타임라인을 스크롤 진행률 0~1에 대응한다. 시작은 x 1010px, y 666px로 01 도판을 보고, 마지막은 inset 33.333% 마스크로 05 도판만 남긴다.

조합 / Pair with: [좌표 줌 · Zoom to Detail](../zoom-to-detail/) · [푸시인 · Push-in](../push-in/) · [깊은 다층 패럴랙스 · Deep Multi-layer Parallax](../deep-parallax/)

출처 / Sources: [GSAP CSSPlugin 3D transforms](https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/) (공식 문서 개념 참고) · [motion.dev examples](https://motion.dev/examples/react-tilt-card) (unknown) · [ui.aceternity.com](https://ui.aceternity.com/components/3d-card-effect) (unknown) · [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/split-tilt-cards.md) (Apache-2.0) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
