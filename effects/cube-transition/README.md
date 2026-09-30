# Nº 134 큐브 전환 · Cube Transition

> 클립 렌더 예정 / Clip rendering planned.

**두 장면이 큐브의 이웃 면처럼 원근을 가지며 회전해 교체되고 바닥 반사가 보인다**

Two scenes rotate in perspective like neighboring faces of a cube, with a hint of floor reflection.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 설명 | 설명 영상, 발표, 제품 시연 | webgl |

다른 이름 / Also known as: Cube rotation, 큐브 회전

## 선택 기준 / Selection

두 장면이 같은 3D 물체의 이웃 면처럼 이어진다. 공간이 회전한다는 감각을 준다 / Makes both scenes feel attached to one 3D object. Suggests space rotating.

- 탭이나 섹션이 나란히 놓인 면이라는 구조를 보여 주며 다음 면으로 넘어갈 때 / When showing tabs or sections as adjacent faces and moving to the next one
- 제품 소개에서 기능 A 화면에서 기능 B 화면으로 회전해 넘어갈 때 / When going from a feature A screen to a feature B screen in a product tour

좋은 예 / Good: 현재 장면이 왼쪽으로 90도 돌아 나가고 다음 장면이 오른쪽 면에서 들어오며, 0.8초 동안 원근 0.7로 바닥 반사가 살짝 보인다
나쁜 예 / Bad: 원근이 너무 강해 화면이 찌그러지거나, 회전 축이 화면 중앙이 아니라 모서리로 어긋난다
주의 / Avoid: 회전은 90도 한 번으로 끝낸다(두 바퀴 이상은 어지러움) · 반사는 opacity 0.4 이하로 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 600~1000ms | easeInOutCubic 근사 |
| 원근 | 0.7 | 0.5~1.0 | perspective 1400~2000px |
| 회전각 | 90deg | 90deg 고정 | 이웃 면 |
| 축소 | 0.3 | 0.2~0.4 | 회전 중 살짝 물러남 |
| 반사 opacity | 0.4 | 0.2~0.4 | 바닥 반사 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
gsap.set('.stage', { perspective: 1600 });
tl.fromTo('.next', { rotationY: 90, transformOrigin: '0% 50%' }, { rotationY: 0, duration: 0.8, ease: 'power3.inOut' }, 0);
tl.to('.prev', { rotationY: -90, transformOrigin: '100% 50%', duration: 0.8, ease: 'power3.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 두 장면 사이에 큐브 전환을 넣어줘. 부모에 perspective 1600px, 이전 장면은 오른쪽 축(100% 50%)으로 0에서 -90도, 다음 장면은 왼쪽 축(0% 50%)으로 90도에서 0으로 0.8초 동안 power3.inOut으로 돌려. backface-visibility는 hidden. 회전 중 살짝 축소해 원근이 보이게 하고, GSAP 타임라인 하나로 seek 가능하게 만들어.
```

### 한국어 · Codex
```text
<파일>에 큐브 전환을 구현해. .stage perspective 1600, .prev rotationY 0에서 -90, .next 90에서 0, duration 0.8, ease power3.inOut, transformOrigin은 각각 100% 50%와 0% 50%. 0.2초, 0.4초, 0.6초, 0.8초 시점을 캡처해 두 면이 모서리에서 맞닿아 회전하는지, 틈이 벌어지지 않는지 확인해.
```

### English · Claude Code
```text
Add a Cube Transition between the two scenes in <target>. Set perspective 1600px on the parent. Rotate the previous scene from 0 to -90deg around its right edge (100% 50%) and the next scene from 90deg to 0 around its left edge (0% 50%), over 0.8s with power3.inOut. Use backface-visibility hidden, and keep it on a single seekable GSAP timeline.
```

### English · Codex
```text
Implement a cube transition in <file>. .stage perspective 1600; .prev rotationY 0 to -90, .next 90 to 0, duration 0.8, ease power3.inOut, transformOrigin 100% 50% and 0% 50%. Capture at 0.2s, 0.4s, 0.6s, and 0.8s to confirm the two faces meet at the edge while rotating and no gap opens between them.
```

예시 / Example: 큐브 전환를 `.hero`에 적용해. / Apply Cube Transition to `.hero`.

## 적용 / Application

- HyperFrames: CSS 3D는 rotationY와 perspective만 쓰므로 seek 안전하다. 두 장면을 같은 stage 안에 겹쳐 두고 paused 타임라인에서 동시에 돌린다
- ReelForge: 씬 워커 브리프에 회전각 90도, 원근 1600px, 지속 800ms를 넣고 두 장면 모두 backface-visibility를 hidden으로 요구한다
- Scrolline Deck: scrub에서 회전각을 진행률 0~1에 선형 매핑하고 easeInOut 대신 ease-out을 적용해 끝에서 멈추는 느낌을 확실히 한다

조합 / Pair with: [원근 카드 스왑 · Perspective Swap](../perspective-swap/) · [페이지 턴 · Page Turn](../page-turn/) · [푸시 전환 · Push](../push-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/cube.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/cube) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
