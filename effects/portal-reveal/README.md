# Nº 551 포털 리빌 · Portal Reveal

> 클립 렌더 예정 / Clip rendering planned.

**빛나는 구멍이 열리고 대상이 그 경계를 통과해 앞으로 나오는 움직임**

A glowing opening appears and the subject passes through its edge toward the viewer.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 전환, 주목 끌기 | 숏폼, 제품 시연, 설명 영상 | webgl |

다른 이름 / Also known as: 포털 공개

## 선택 기준 / Selection

다른 세계나 기능 안으로 들어가는 경험을 준다. 대상이 어디서 왔는지가 화면 안에서 설명된다 / Creates the sense of entering another world or feature. It explains where the subject came from inside the frame.

- 새 기능이나 캐릭터를 등장시키는 순간을 극적으로 만들 때 / A dramatic entrance for a new feature or character.
- 장면 전환에서 문 하나를 통해 다른 공간으로 넘어갈 때 / Move to another space through a single doorway.
- 히어로 로고를 어둠 속에서 꺼내 보일 때 / Bring a hero logo out of darkness.

좋은 예 / Good: 반경 0에서 300px까지 1.2초 동안 열린 포털의 경계에서 빛이 번지고, 대상이 z -300에서 0으로 나오며 경계를 통과한 부분만 보인다
나쁜 예 / Bad: 포털이 열리기 전에 대상이 보이거나, 빛 번짐이 너무 커서 대상 윤곽을 가린다
주의 / Avoid: 대상은 포털 경계 안쪽에서만 보이게 마스크한다 · bloom 강도 1.5 초과 금지 · 포털이 다 열린 뒤 대상이 나오기 시작한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 1.2s | 0.9~1.8s | 열림과 통과 합산 |
| 포털 반경 | 0→300px | 220~420px | 원형 마스크 |
| 대상 z | -300→0 | -500~0 | 앞으로 나오는 거리 |
| 경계 빛 | bloom 1.0 | 0.6~1.5 | 경계 링 발광 |
| 이징 | power3.out | power2~expo | 열림 |

## 구현 / Implementation (GSAP)

```js
const p = { r: 0 };
tl.to(p, { r: 300, duration: 0.7, ease: 'power3.out', onUpdate: () => portal.style.clipPath = `circle(${p.r}px at 50% 50%)` }, 0);
tl.fromTo('.subject', { z: -300, scale: 0.6 }, { z: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, 0.3);
tl.fromTo('.rim', { opacity: 0 }, { opacity: 1, duration: 0.4, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0.1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>이 포털에서 나오는 장면을 만들어 줘. 0초에 원형 clip-path 반경을 0에서 300px까지 0.7초 power3.out으로 열고, 0.3초부터 대상이 z -300, scale 0.6에서 z 0, scale 1로 0.9초 동안 나와. 경계 링은 0.1초부터 opacity 0에서 1로 올렸다 0.4초 뒤 낮춰 줘. paused 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 portal-reveal을 적용해. .portal의 clip-path circle 반경을 0→300px(0.7s, power3.out), .subject를 z -300→0, scale 0.6→1(position 0.3, 0.9s), .rim 발광은 position 0.1에 opacity 왕복. 0.05초는 포털이 거의 닫힘, 0.5초는 대상 일부만 보임, 1.5초는 대상이 완전히 앞에 있는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to make <target> emerge from a portal. At 0 seconds open a circular clip-path from radius 0 to 300px over 0.7 seconds with power3.out. From 0.3 seconds bring the subject from z -300, scale 0.6 to z 0, scale 1 over 0.9 seconds. Fade the rim glow up from 0.1 seconds and back down over 0.4 seconds. One paused, seekable timeline.
```

### English · Codex
```text
Apply portal-reveal in <file>. Tween .portal clip-path circle radius 0 to 300px (0.7s, power3.out), .subject z -300 to 0 and scale 0.6 to 1 (position 0.3, 0.9s), and .rim opacity up and back from position 0.1. Capture 0.05s (portal nearly closed), 0.5s (subject partly visible) and 1.5s (subject fully in front).
```

예시 / Example: 포털 리빌를 `.hero`에 적용해. / Apply Portal Reveal to `.hero`.

## 적용 / Application

- HyperFrames: clip-path 반경과 대상 z를 같은 타임라인의 서로 다른 구간에 놓고, WebGL이면 반경 uniform을 seek로 갱신한다
- ReelForge: 브리프에 포털 중심 좌표, 최대 반경 300, 대상 이미지, 경계 색을 싣는다. 뒤 배경은 별도 슬롯이다
- Scrolline Deck: 진행률 0~0.6에 포털 열림, 0.3~1.0에 대상 통과를 겹쳐 매핑하고 ease-out을 쓴다

조합 / Pair with: [마스크 전환 · Shape Mask Transition](../iris-mask/) · [줌 전환 · Zoom Through](../zoom-through/) · [3D 조립 · Depth Assemble](../depth-assemble/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-portal/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/wireframe-portal-title/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
