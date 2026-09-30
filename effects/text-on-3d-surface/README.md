# Nº 579 3D 표면 위 텍스트 · Text On 3D Surface

> 클립 렌더 예정 / Clip rendering planned.

**문구가 원통이나 링 표면에 둘러 배치되고 회전하며 앞면 문구가 바뀌는 효과**

Phrases wrap around a cylinder or ring and rotate so the front-facing phrase keeps changing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 분위기, 순서·흐름 | 숏폼, 웹 UI, 발표 | css |

다른 이름 / Also known as: Cylinder Text Rotation, 원통 텍스트 회전, Double Ring Text Counterrotation, 이중 링 텍스트 반대 회전, Twisted Text Ribbon, 뒤틀린 텍스트 리본, Text Texture Mesh Flow, 메시 표면 텍스트 흐름

## 선택 기준 / Selection

반복 정보를 입체적 연속 구조로 보여준다. 깊이감이 있는 회전으로 공간을 만든다 / Presents repeated information as a continuous 3D structure and builds space with depth-rich rotation.

- 목록형 문구를 한 번에 돌려 보여주고 싶을 때 / Cycle through a list of phrases in one rotation.
- 브랜드 인트로에 입체적인 타이포 배경이 필요할 때 / Give a brand intro a dimensional typographic backdrop.

좋은 예 / Good: 12면 원통에 문구가 반지름 180px로 둘러 있고 10초에 한 바퀴 돌며 앞쪽 문구만 선명하다
나쁜 예 / Bad: 뒷면 글자까지 같은 밝기로 보여 앞뒤가 섞이고 원근 없이 납작하다
주의 / Avoid: perspective 없는 3D 금지 · 뒷면 글자 숨김 처리(backface 또는 opacity) 없이 두지 않는다 · 면 수 16 초과 금지(글자가 너무 작아짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 면 수 | 12 | 8~16 | 각도 30도 |
| 반지름 | 180px | 140~260px | translateZ 값 |
| 한 바퀴 | 10s | 8~16s | 등속 |
| perspective | 1000px | 800~1400px | 깊이 강도 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
/* .stage{perspective:1000px} .cyl{transform-style:preserve-3d} */
items.forEach((el, i) => gsap.set(el, { rotationY: i * 30, z: 180 }));
tl.to('.cyl', { rotationY: -360, duration: 10, ease: 'none' }, 0);
items.forEach(el => el.style.backfaceVisibility = 'hidden');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문구 목록(<항목들>)을 12면 원통 표면에 배치해줘. 각 면은 rotationY i*30도, translateZ 180px, backface-visibility hidden이고 부모 perspective는 1000px. 부모를 10초에 rotationY -360도 등속으로 돌리고, 앞쪽 문구는 opacity 1, 뒤쪽은 0.25가 되게 해.
```

### 한국어 · Codex
```text
<파일>에 CSS 3D 원통 텍스트를 구현해. 자식 12개는 gsap.set(rotationY i*30, z 180), 부모는 tl.to(rotationY -360, 10s, none). 2.5초 시점에 앞면 문구가 90도 이동했는지, 뒷면 글자가 보이지 않는지 캡처로 확인해.
```

### English · Claude Code
```text
Arrange the phrases <items> of <target> on a 12-face cylinder. Each face gets rotationY i*30 degrees, translateZ 180px, backface-visibility hidden, with a parent perspective of 1000px. Rotate the parent to rotationY -360 over 10 seconds at constant speed, with front phrases at opacity 1 and back ones at 0.25.
```

### English · Codex
```text
Implement a CSS 3D cylinder text in <file>: 12 children via gsap.set(rotationY i*30, z 180) and the parent via tl.to(rotationY -360, 10s, none). Capture at 2.5s to confirm the front phrase has advanced by 90 degrees and that back-facing text is hidden.
```

예시 / Example: 3D 표면 위 텍스트를 `.hero`에 적용해. / Apply Text On 3D Surface to `.hero`.

## 적용 / Application

- HyperFrames: 부모 rotationY만 tween하고 자식 배치는 gsap.set으로 고정한다. CSS 3D는 seek해도 결정론적이라 안전하다
- ReelForge: 3D 타이포 씬 브리프에 면 수, 반지름, perspective를 명시한다. 문구 목록은 12개 이하로 제한한다
- Scrolline Deck: rotationY를 진행률에 선형 매핑해 스크롤로 원통을 돌린다. 정지 시 앞면 문구가 정면에 오도록 30도 단위로 스냅 구간을 둔다

조합 / Pair with: [원근 패널 회전 · Perspective Panel Rotation](../perspective-panel-rotation/) · [원형 글자 회전 · Circular Text Spin](../circular-text-spin/) · [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/)

출처 / Sources: [davidfaure/3d-text-animation-codrops](https://github.com/davidfaure/3d-text-animation-codrops) (MIT) · [davidfaure/3d-text-circle-animation-codrops](https://github.com/davidfaure/3d-text-circle-animation-codrops) (MIT) · [akella/twistedText](https://github.com/akella/twistedText) (unknown) · [marioecg/codrops-kinetic-typo](https://github.com/marioecg/codrops-kinetic-typo) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
