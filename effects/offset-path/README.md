# Nº 424 오프셋 패스 · Offset Path

> 클립 렌더 예정 / Clip rendering planned.

**도형의 외곽이 일정 거리만큼 부풀거나 줄어드는 확장과 수축**

A shape's outline grows or shrinks outward by a fixed distance.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 강조, 피드백 | 설명 영상, 숏폼, 웹 UI | svg |

다른 이름 / Also known as: Offset Paths, Outline Ripple

## 선택 기준 / Selection

팽창과 수축이 형태를 유지한 채 진행되어 영향 범위가 넓어지거나 좁아지는 것이 명확하다 / Expansion and contraction keep the form intact, so widening or narrowing the area of influence reads clearly.

- 선택 영역이나 경계를 넓혀 강조할 때 / Widen a selection area or boundary for emphasis.
- 동심 윤곽으로 확산되는 파동을 만들 때 / Concentric outlines spreading like a wave.
- 도형이 커진다기보다 껍질이 두꺼워지는 표현이 필요할 때 / Thicken a shell rather than scaling the shape.

좋은 예 / Good: 도형 외곽이 600ms에 0에서 24px까지 균일하게 부풀고 모서리는 조인 형태를 유지한다
나쁜 예 / Bad: scale로 키워 선 굵기와 모서리가 함께 커져 형태가 왜곡된다. 오프셋이 커서 안쪽 오목한 부분이 겹친다
주의 / Avoid: scale로 대체하지 않는다(선 굵기가 변함) · 오프셋은 오목한 곡률 반경보다 작게 한다 · 동심 윤곽은 3~5개로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.6s | 0.4~1.0s | 팽창 |
| 오프셋 | 0→24px | 0~40px | 법선 방향 |
| 윤곽 수 | 1 | 1~5 | 동심 시 간격 12px |
| 조인 | round | round/miter | 모서리 형태 |
| 이징 | power2.inOut | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
// 각 오프셋 값에 대한 외곽을 사전 계산한 path d 배열로 두고 보간
const d = [d0, d8, d16, d24]; // 0, 8, 16, 24px 오프셋 경로
const o = { t: 0 };
tl.to(o, { t: 3, duration: 0.6, ease: 'power2.inOut', onUpdate: () => el.setAttribute('d', d[Math.round(o.t)]) }, 0.3);
// 단순 원형은 r 만 tween: tl.to('circle', { attr: { r: '+=24' } })
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 SVG로 <도형>의 외곽 오프셋 애니메이션을 만들어 줘. 오프셋 0, 8, 16, 24px의 path d를 미리 계산해 두고, 0.3초부터 0.6초 동안 power2.inOut으로 단계 보간해 균일하게 부풀게 해. scale로 키우지 말고 선 굵기와 모서리 형태를 유지해. 원이면 r만 24px 늘려도 좋아. paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 도형에 offset-path를 적용해. 오프셋 경로 d 배열 [d0,d8,d16,d24]를 정적으로 두고 tween 객체 t를 position 0.3, duration 0.6, ease power2.inOut으로 0→3, onUpdate에서 setAttribute('d', d[Math.round(t)]). 0.3초는 원본, 0.6초는 중간 오프셋, 1.2초는 24px 오프셋이며 stroke 폭이 변하지 않았는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP and SVG to animate an outline offset on <shape>. Precompute the path d at offsets 0, 8, 16 and 24px, and step through them from 0.3 seconds over 0.6 seconds with power2.inOut so it swells evenly. Do not scale; keep stroke width and corner shape. For a circle, tweening r by 24px is fine. Paused timeline.
```

### English · Codex
```text
Apply offset-path to the shape in <file>. Keep static d array [d0,d8,d16,d24]; tween object t 0 to 3 at position 0.3, duration 0.6, ease power2.inOut, and setAttribute('d', d[Math.round(t)]) in onUpdate. Capture 0.3s (original), 0.6s (mid offset) and 1.2s (24px offset with unchanged stroke width).
```

예시 / Example: 오프셋 패스를 `.hero`에 적용해. / Apply Offset Path to `.hero`.

## 적용 / Application

- HyperFrames: 오프셋 경로는 도구에서 미리 계산해 정적 d 배열로 두고 단계 보간한다. 브라우저에서 즉석 계산하면 seek가 불안정하다
- ReelForge: 브리프에 원본 path, 오프셋 값 배열 0/8/16/24, 조인 종류를 싣는다
- Scrolline Deck: 진행률 0~1을 오프셋 단계에 매핑한다. 윤곽 개수는 진행률에 따라 순차 노출한다

조합 / Pair with: [리플 링 · Ripple Rings](../ripple-rings/) · [모프 전환 · Morph](../shape-morph/) · [윤곽 펄스 · Outline Pulse](../outline-pulse/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
