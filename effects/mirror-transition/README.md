# Nº 179 미러 전환 · Mirror Transition

> 클립 렌더 예정 / Clip rendering planned.

**영상이 대칭 반사되거나 복제되어 중앙으로 접힌 뒤 다음 영상으로 풀린다**

The video is mirrored or duplicated, folded to the center, then unfolded into the next video.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 비교 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: 거울 전환

## 선택 기준 / Selection

영상이 대칭으로 접혔다가 다음 영상으로 풀린다. 공간이 접혀 다른 장면으로 이어지는 느낌이다 / Feels like space folds and connects to a different scene.

- 대칭 구도의 장면이나 전후 비교 영상에서 화면이 접히며 바뀔 때 / For symmetric compositions or before-and-after videos where the frame folds to change
- 분신, 대칭, 거울 소재의 도입부 / For intros themed around clones, symmetry, or mirrors

좋은 예 / Good: 화면이 가로 축을 기준으로 0.35초 동안 위쪽이 아래로 접혀 중심선에 모이고, 다음 0.35초에 새 장면이 위아래로 펼쳐진다
나쁜 예 / Bad: 접히는 축이 화면 중심이 아니라 어긋나거나, 접힘 중 좌우가 함께 바뀌어 방향을 알 수 없다
주의 / Avoid: 축은 화면 중앙(y 540px)으로 고정 · 접힘과 펼침에 같은 이징을 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~900ms | easeInOutCubic |
| 접힘 구간 | 0~350ms |  | 장면 A |
| 펼침 구간 | 350~700ms |  | 장면 B |
| 축 | 가로(y 540px) | 가로 또는 세로 |  |
| 접힘 각도 | 90deg | 80~90deg | rotationX |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
gsap.set('.stage', { perspective: 1600 });
tl.to('.prev-top', { rotationX: -90, transformOrigin: '50% 100%', duration: 0.35, ease: 'power3.in' }, 0);
tl.to('.prev-bot', { rotationX: 90, transformOrigin: '50% 0%', duration: 0.35, ease: 'power3.in' }, 0);
tl.from('.next-top', { rotationX: -90, transformOrigin: '50% 100%', duration: 0.35, ease: 'power3.out' }, 0.35);
tl.from('.next-bot', { rotationX: 90, transformOrigin: '50% 0%', duration: 0.35, ease: 'power3.out' }, 0.35);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 미러 전환을 넣어줘. 부모 perspective 1600px, 이전 장면을 위/아래 반쪽으로 나눠 0.35초 동안 rotationX -90와 90도로 중심선(y 540)까지 접고(power3.in), 이어서 0.35초 동안 새 장면 반쪽들이 반대로 펼쳐지게(power3.out) 해. 타임라인 하나로 seek 가능하게 해줘.
```

### 한국어 · Codex
```text
<파일>에 미러 전환을 구현해. perspective 1600, .prev-top rotationX 0에서 -90 (origin 50% 100%), .prev-bot 0에서 90 (origin 50% 0%), 0.35초 power3.in, 그리고 .next-top, .next-bot을 0.35초부터 반대로 펼침 power3.out. 0.17초, 0.35초, 0.52초, 0.7초 시점을 캡처해 0.35초에 중심선에서 접혀 얇은 선이 되는지, 0.7초에 새 장면이 전체인지 확인해.
```

### English · Claude Code
```text
Add a Mirror Transition to <target>. Set perspective 1600px. Split the previous scene into top and bottom halves and fold them to the center line (y 540) over 0.35s with rotationX -90 and 90 (power3.in). Then unfold the new scene halves in reverse over 0.35s (power3.out). One seekable GSAP timeline.
```

### English · Codex
```text
Implement Mirror Transition in <file>. perspective 1600; .prev-top rotationX 0 to -90 (origin 50% 100%), .prev-bot 0 to 90 (origin 50% 0%), 0.35s power3.in; then .next-top and .next-bot unfold from 0.35s with power3.out. Capture at 0.17s, 0.35s, 0.52s, and 0.7s to confirm the frame folds to a thin line at 0.35s and the new scene is complete at 0.7s.
```

예시 / Example: 미러 전환를 `.hero`에 적용해. / Apply Mirror Transition to `.hero`.

## 적용 / Application

- HyperFrames: 각 장면을 위/아래 반쪽 clip 복제 두 개로 만들고 rotationX만 조작한다. 중심 y 540에서 만나므로 paused 타임라인에서 seek해도 축이 고정된다
- ReelForge: 씬 워커 브리프에 축 위치, 접힘 각도 90도, 구간 350ms씩을 싣는다
- Scrolline Deck: scrub에서는 접힘을 진행률 0~0.5, 펼침을 0.5~1로 나누고 접힘은 ease-in, 펼침은 ease-out으로 둔다

조합 / Pair with: [종이 접기 전환 · Origami Fold Transition](../origami-fold/) · [큐브 전환 · Cube Transition](../cube-transition/) · [스플릿 슬라이드 · Split Slide](../split-slide/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
