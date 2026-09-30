# Nº 174 라이트 리크 전환 · Light Leak Transition

> 클립 렌더 예정 / Clip rendering planned.

**넓고 불규칙한 유색 빛 얼룩이 화면에 번져 컷을 가리고 사라지는 전환**

A wide, irregular patch of colored light blooms across the frame, hides the cut, and fades.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: Film burn, 필름 번, film-burn(), Light leak bridge, 빛샘 브리지, 라이트 리크

## 선택 기준 / Selection

아날로그 필름의 열과 노광 흔적. 따뜻하고 꿈결 같은 이음새 / The heat and exposure marks of analog film: a warm, dreamy seam.

- 필름 감성이나 회상, 여행 브이로그 톤의 장면 이동에서 / Move between scenes in a film-like, memory, or travel-vlog tone.
- 컷을 자연스럽게 가리는 따뜻한 오버레이가 필요할 때 / When a warm overlay is needed to mask a cut.

좋은 예 / Good: 주황과 흰색 그라디언트 얼룩이 0.7초 동안 opacity 0에서 0.3까지 올라 50ms 유지되는 사이 컷이 일어나고 부드럽게 빠진다
나쁜 예 / Bad: 얼룩이 균일한 원형 그라디언트라 인위적이거나, opacity가 0.6을 넘어 화면이 하얗게 날아간다
주의 / Avoid: 최대 opacity 0.4 초과 금지 · screen 합성을 쓰고 add나 lighten은 피한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.2s | 상승 0.3 유지 0.05 하강 0.35 |
| 최대 opacity | 0.3 | 0.2~0.4 | screen 합성 |
| 색 | #ff8a3d / #fff | 주황~분홍 | 그라디언트 2색 |
| 이동 | x -300→300 |  | 얼룩이 흐른다 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.leak', { opacity: 0, x: -300 }, { opacity: 0.3, x: 0, duration: 0.3, ease: 'sine.out' })
  .set('.a', { display: 'none' }).set('.b', { display: 'block' })
  .to('.leak', { opacity: 0, x: 300, duration: 0.35, ease: 'sine.in' }, '+=0.05');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 라이트 리크 전환을 넣어줘. 주황(#ff8a3d)과 흰색 radial-gradient 얼룩 레이어(mix-blend-mode screen)가 0.3초 동안 opacity 0에서 0.3, x -300px에서 0으로 올라오고, 50ms 유지하는 사이 A를 B로 교체한 뒤 0.35초 동안 opacity 0, x 300px로 빠지게 해. paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 light leak transition을 넣어. .leak opacity 0에서 0.3과 x -300에서 0 (0.3s sine.out), 정점에서 장면 교체, 이후 opacity 0과 x 300 (0.35s sine.in, 50ms 뒤). 0.3초 캡처에서 얼룩이 화면을 덮는지, 0.35초에 뒤 장면이 이미 보이는지, 0.7초에 얼룩이 없는지 확인해.
```

### English · Claude Code
```text
Add a light leak transition from <targetA> to <targetB>. An orange (#ff8a3d) and white radial-gradient patch layer (mix-blend-mode screen) rises over 0.3 seconds from opacity 0 to 0.3 and x -300px to 0. During a 50ms hold, swap A for B, then exit over 0.35 seconds to opacity 0 and x 300px. One paused timeline.
```

### English · Codex
```text
Add a light leak transition in <file>. .leak opacity 0 to 0.3 and x -300 to 0 (0.3s sine.out), swap scenes at the peak, then opacity 0 and x 300 (0.35s sine.in, after 50ms). Capture at 0.3 seconds to confirm the glow covers the frame, at 0.35 seconds to confirm the new scene is already visible, and at 0.7 seconds to confirm the leak is gone.
```

예시 / Example: 라이트 리크 전환를 `.hero`에 적용해. / Apply Light Leak Transition to `.hero`.

## 적용 / Application

- HyperFrames: 빛 얼룩은 radial-gradient 2겹의 PNG나 CSS 배경으로 두고 x, opacity만 움직인다. mix-blend-mode screen 필수
- ReelForge: 씬 워커 브리프에 leakColor, peakOpacity, holdMs, leakAsset을 싣는다. 컷은 정점에서만 일어나게 한다
- Scrolline Deck: 진행률 p에서 정점이 0.5. leak x는 -300에서 300으로 선형 이동, opacity는 삼각파

조합 / Pair with: [빛샘 · Light Leak](../light-leak/) · [플래시 전환 · Flash Transition](../flash-transition/) · [필름 그레인 · Film Grain](../film-grain/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/FilmBurn.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/film-burn) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown) · motion dictionary 2-transitions-camera.md#18. 라이트 리크 · Light Leak Transition (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
