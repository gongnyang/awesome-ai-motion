# Nº 139 원근 카드 스왑 · Perspective Swap

> 클립 렌더 예정 / Clip rendering planned.

**두 장면이 원근을 가진 카드처럼 좌우와 앞뒤 자리를 바꾸고 반사가 따라간다**

Two scenes swap left-right and front-back like perspective cards, with reflections following.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 비교 | 설명 영상, 발표, 제품 시연 | webgl |

다른 이름 / Also known as: 원근 자리 교환

## 선택 기준 / Selection

두 장면이 앞뒤로 자리를 바꾼다. 주도권이 넘어가는 순간을 시각화한다 / Signals a change in who leads. Makes before-and-after or priority handoffs readable.

- 이전 버전과 새 버전처럼 두 화면의 주인공이 바뀌는 순간을 보여 줄 때 / When showing the moment two screens trade roles, such as old and new versions
- 두 카드가 앞뒤 자리를 교환하며 순위나 우선순위가 바뀐다고 알릴 때 / When two cards trade places to indicate a rank or priority change

좋은 예 / Good: 앞 카드가 오른쪽 뒤로 물러나며 작아지고 뒤 카드가 왼쪽에서 앞으로 나오며, 0.8초 동안 서로 스치지 않고 원을 그리듯 자리를 바꾼다
나쁜 예 / Bad: 두 카드가 같은 깊이에서 겹쳐 지나가 z 순서가 튀거나, 크기 변화 없이 좌우로만 바뀐다
주의 / Avoid: z 순서는 중간 지점(50%)에서 한 번만 바꾼다 · 카드가 3개 이상이면 스택 셔플을 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 600~1000ms | easeInOutCubic 근사 |
| 깊이 차이 | z 300px | 200~400px | 뒤로 물러나는 양 |
| 축소 | 0.82 | 0.75~0.9 | 뒤 카드 크기 |
| 좌우 이동 | ±420px | 300~500px | 1920px 기준 |
| z 순서 교체 | 진행 50% | 40~60% | 한 번만 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
gsap.set('.stage', { perspective: 1800 });
tl.to('.front', { x: 420, z: -300, scale: 0.82, duration: 0.8, ease: 'power3.inOut' }, 0);
tl.fromTo('.back', { x: -420, z: -300, scale: 0.82 }, { x: 0, z: 0, scale: 1, duration: 0.8, ease: 'power3.inOut' }, 0);
tl.set('.back', { zIndex: 2 }, 0.4).set('.front', { zIndex: 1 }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 두 카드(.front, .back)가 자리를 바꾸는 원근 스왑 전환을 넣어줘. 부모 perspective 1800px, 0.8초 power3.inOut. .front는 x +420, z -300, scale 0.82로 물러나고 .back은 x -420에서 0으로 앞으로 나와. zIndex는 0.4초에 한 번만 교체하고, 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 원근 스왑을 구현해. perspective 1800, .front를 x 420, z -300, scale 0.82로, .back을 x -420에서 0, z -300에서 0으로, duration 0.8, ease power3.inOut. zIndex는 0.4초에 set. 0.2초, 0.4초, 0.6초, 0.8초 시점을 캡처해 두 카드가 서로 관통하지 않는지, 0.4초 전후로 앞뒤가 바뀌는지 확인해.
```

### English · Claude Code
```text
Add a Perspective Swap between the cards in <target>. Set perspective 1800px on the stage, run 0.8s with power3.inOut. .front moves to x +420, z -300, scale 0.82; .back travels from x -420 to 0 and comes forward. Swap zIndex exactly once at 0.4s. Keep everything on one seekable GSAP timeline.
```

### English · Codex
```text
Implement Perspective Swap in <file>. perspective 1800; .front to x 420, z -300, scale 0.82; .back from x -420, z -300 to x 0, z 0; duration 0.8, ease power3.inOut; set zIndex at 0.4s. Capture at 0.2s, 0.4s, 0.6s, and 0.8s to confirm the cards never interpenetrate and that front and back swap around 0.4s.
```

예시 / Example: 원근 카드 스왑를 `.hero`에 적용해. / Apply Perspective Swap to `.hero`.

## 적용 / Application

- HyperFrames: x, z, scale만 쓰고 zIndex 교체는 set으로 0.4초에 한 번. paused 타임라인에서 seek해도 순서가 바르게 나온다
- ReelForge: 씬 워커 브리프에 좌우 이동 420px, 깊이 300px, 교체 시점 50%를 싣고 두 카드를 같은 stage에 넣도록 한다
- Scrolline Deck: scrub에서는 zIndex 교체 임계값을 진행률 0.5로 고정하고 스프링 대신 ease-out을 쓴다. 역방향 스크롤에서도 같은 값으로 돌아온다

조합 / Pair with: [큐브 전환 · Cube Transition](../cube-transition/) · [카드 스택 셔플 · Card Stack Shuffle](../card-stack-shuffle/) · [비교 분할 · Split Compare](../split-compare/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/swap.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/swap) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
