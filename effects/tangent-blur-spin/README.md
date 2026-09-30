# Nº 146 회전 블러 전환 · Tangent Motion Blur Spin

> 클립 렌더 예정 / Clip rendering planned.

**장면이 모서리를 중심으로 회전하고 회전 궤도의 접선 방향으로 길게 흐려지며 교체된다**

The scene spins around a corner and smears along the tangent of its path as it is replaced.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: 접선 잔상 회전

## 선택 기준 / Selection

장면이 회전하며 진행 방향으로 길게 흐려진다. 속도와 관성이 강하게 느껴진다 / Conveys speed and inertia of rotation strongly.

- 에너지 넘치는 오프닝이나 하이라이트 컷에서 속도감을 줄 때 / For energetic openings or highlight cuts that need a sense of speed
- 장면이 휙 돌아 다음 장으로 넘어가는 트레일러형 전환 / For trailer-style transitions where the frame whips around into the next scene

좋은 예 / Good: 장면이 오른쪽 아래 모서리를 축으로 0.65초 동안 도는 동안 접선 방향으로 21샘플 블러가 걸리고, 끝에서 선명해지며 다음 장면이 자리 잡는다
나쁜 예 / Bad: 블러가 처음부터 끝까지 일정해 정지감이 없거나, 회전축이 화면 중앙이라 단순 스핀처럼 보인다
주의 / Avoid: 블러 세기는 회전 속도 정점(진행 40~60%)에서 최대로 둔다 · 정보 읽기가 필요한 장면 직전에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 650ms | 500~800ms | cubicBezier(0.68,0.01,0.17,0.98) |
| 회전각 | 75deg | 60~90deg | 모서리 축 |
| 블러 길이 | 최대 48px | 24~72px | 속도에 비례 |
| 샘플 수 | 21 | 12~24 | WebGL 다중 샘플 |
| 회전축 | 우하단 모서리 | 모서리 4곳 | 읽는 방향과 반대 |

이징 / Ease: `cubic-bezier(0.68,0.01,0.17,0.98)`

## 구현 / Implementation (GSAP)

```js
// CSS 근사: 회전과 blur를 속도 곡선에 연동
tl.fromTo('.prev', { rotation: 0, transformOrigin: '100% 100%' }, { rotation: -75, duration: 0.65, ease: 'power3.in' }, 0);
tl.fromTo('.next', { rotation: 75, transformOrigin: '100% 100%' }, { rotation: 0, duration: 0.65, ease: 'power3.out' }, 0);
tl.to(['.prev','.next'], { filter: 'blur(6px)', duration: 0.32, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 회전 블러 전환을 넣어줘. 이전 장면을 우하단 모서리 축으로 0에서 -75도, 다음 장면은 75도에서 0도로 0.65초 동안 돌리고, 전환 중간(0.32초)에 blur가 6px까지 올랐다 돌아오게 해. 이징은 cubic-bezier(0.68,0.01,0.17,0.98). 타임라인 하나로 seek 가능하게 해줘.
```

### 한국어 · Codex
```text
<파일>에 회전 블러 전환을 구현해. transformOrigin 100% 100%, .prev rotation 0에서 -75, .next 75에서 0, duration 0.65, blur 최대 6px(중간 0.32초 정점). 0.15초, 0.32초, 0.5초, 0.65초 시점을 캡처해 중간에 블러가 최대인지, 끝에서 다음 장면이 선명한지 확인해.
```

### English · Claude Code
```text
Add a Tangent Blur Spin to <target>. Rotate the previous scene 0 to -75deg around its bottom-right corner and the next scene 75deg to 0 over 0.65s, with blur peaking at 6px at the midpoint (0.32s) and returning to 0. Use cubic-bezier(0.68,0.01,0.17,0.98) and a single seekable GSAP timeline.
```

### English · Codex
```text
Implement Tangent Blur Spin in <file>. transformOrigin 100% 100%; .prev rotation 0 to -75, .next 75 to 0; duration 0.65; blur peaks at 6px at 0.32s. Capture at 0.15s, 0.32s, 0.5s, and 0.65s to confirm blur is maximal mid-transition and that the next scene is sharp at the end.
```

예시 / Example: 회전 블러 전환를 `.hero`에 적용해. / Apply Tangent Motion Blur Spin to `.hero`.

## 적용 / Application

- HyperFrames: WebGL이면 샘플 수를 고정(21)하고 이전 진행률과의 차이로 속도를 구해 접선 블러를 만든다. CSS 근사는 blur filter를 yoyo로 걸고 paused 타임라인에서 seek한다
- ReelForge: 씬 워커 브리프에 회전각, 축 위치, 블러 최대 길이, 지속 650ms를 싣는다. 무거우면 샘플 수를 12로 낮춘다
- Scrolline Deck: scrub에서는 블러 세기를 진행 속도가 아니라 진행률의 사인 곡선으로 고정해 스크롤 속도에 흔들리지 않게 한다

조합 / Pair with: [모션 블러 · Motion Blur](../motion-blur/) · [휩팬 · Whip Pan](../whip-pan/) · [글리치 전환 · Glitch Transition](../glitch-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/tangentMotionBlur.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
