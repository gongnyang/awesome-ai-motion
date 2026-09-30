# Nº 213 줌 플래시 · Zoom Flash

> 클립 렌더 예정 / Clip rendering planned.

**화면이 빠르게 확대되다 밝은 섬광 순간에 다음 장면으로 이어지는 전환**

The frame zooms in fast and a bright flash carries it into the next scene at the peak.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 주목 끌기 | 숏폼, 제품 시연, 설명 영상 | gsap |

다른 이름 / Also known as: Hyperzoom Flash, 급가속 하이퍼줌, speed-ramp-blur-flash, Dreamy zoom flash, 몽환 줌 플래시, dreamy-zoom(), Punch flash cut, 확대 플래시 컷

## 선택 기준 / Selection

비트에 맞춘 급가속과 충격. 하이퍼줌의 속도감 / Sudden acceleration and impact locked to the beat: the speed of a hyperzoom.

- 강한 비트에 맞춰 장면을 넘길 때 / Change scenes on a strong beat.
- 제품이나 타이틀로 시선을 확 끌어당길 때 / Snap attention to a product or title.

좋은 예 / Good: 앞 장면이 0.18초 동안 scale 3.2까지 확대되며 4px 블러와 밝기 2.4가 걸리고, 섬광에서 교체된 뒤 뒤 장면이 0.3초에 안착한다
나쁜 예 / Bad: 확대가 0.5초 이상 늘어져 급가속감이 없거나, 섬광과 확대가 함께 여러 번 반복되어 눈이 피곤하다
주의 / Avoid: 최대 scale 4 초과 금지(픽셀이 깨진다) · 한 영상에서 2회 이하로 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 확대 | 0.18s | 0.12~0.25s | power3.in |
| 최대 scale | 3.2 | 2~4 | 약한 펀치는 1.04 |
| 복구 | 0.3s | 0.2~0.45s | power3.out |
| 섬광 opacity | 1 | 0.2~1 | 약한 변형은 0.2 |

이징 / Ease: `power3.in`

## 구현 / Implementation (GSAP)

```js
tl.to('.a', { scale: 3.2, filter: 'blur(4px) brightness(2.4)', duration: 0.18, ease: 'power3.in' })
  .to('.flash', { opacity: 1, duration: 0.06 }, 0.12)
  .set('.a', { display: 'none' }).set('.b', { display: 'block' })
  .fromTo('.b', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'power3.out' })
  .to('.flash', { opacity: 0, duration: 0.3, ease: 'power2.out' }, '<');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 줌 플래시 전환을 만들어줘. A가 0.18초 동안 scale 3.2, blur 4px, brightness 2.4까지 power3.in으로 확대되고, 0.12초 지점에 흰 섬광이 올라오며, 그 정점에서 B로 교체된 뒤 B가 scale 1.3에서 1로 0.3초 power3.out으로 안착하게 해. paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 zoom flash를 적용해. 앞 장면 scale 3.2와 filter blur(4px) brightness(2.4) (0.18s, power3.in), 0.12초부터 흰 오버레이 opacity 1 (0.06s), 정점에서 교체, 뒤 장면 scale 1.3에서 1 (0.3s, power3.out). 0.15초 캡처가 밝은 확대 화면인지, 0.3초에 뒤 장면인지, 0.6초에 섬광이 사라졌는지 확인해.
```

### English · Claude Code
```text
Build a zoom flash transition from <targetA> to <targetB>. A scales to 3.2 with blur 4px and brightness 2.4 over 0.18 seconds (power3.in), a white flash rises at 0.12 seconds, B is swapped in at the peak, and B settles from scale 1.3 to 1 over 0.3 seconds (power3.out). One paused timeline.
```

### English · Codex
```text
Apply a zoom flash in <file>. Outgoing scene scale 3.2 with filter blur(4px) brightness(2.4) (0.18s, power3.in), white overlay to opacity 1 from 0.12s (0.06s), swap at the peak, incoming scale 1.3 to 1 (0.3s, power3.out). Capture at 0.15 seconds to confirm a bright zoomed frame, at 0.3 seconds to confirm the new scene, and at 0.6 seconds to confirm the flash is gone.
```

예시 / Example: 줌 플래시를 `.hero`에 적용해. / Apply Zoom Flash to `.hero`.

## 적용 / Application

- HyperFrames: scale, filter, 섬광 opacity를 한 타임라인에 넣고 교체 시각을 set으로 고정한다. 큰 scale에서 이미지 해상도를 확인한다
- ReelForge: 씬 워커 브리프에 peakScale, zoomMs, flashOpacity, beatSec를 실어 비트에 맞춘다
- Scrolline Deck: 진행률 0.45~0.55 구간에서만 확대 정점과 섬광을 둔다. scrub은 ease-out만 쓴다

조합 / Pair with: [플래시 전환 · Flash Transition](../flash-transition/) · [줌 전환 · Zoom Through](../zoom-through/) · [스트로브 플래시 · Strobe Flash](../strobe-flash/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DreamyZoom.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/dreamy-zoom) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/push-cut) (Remotion License) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#speed-ramp-blur-flash`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
