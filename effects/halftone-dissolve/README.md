# Nº 137 하프톤 디졸브 · Halftone Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**격자의 원형 구멍이 커지고 이어져 다음 장면을 드러내는 전환**

Circular holes on a grid grow and merge to reveal the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상, 발표 | canvas |

다른 이름 / Also known as: 하프톤 전환, Polka dot curtain, 물방울 점 커튼

## 선택 기준 / Selection

인쇄물과 점묘의 질감. 레트로하고 그래픽적인 교체 / A print and stipple texture: a retro, graphic swap.

- 레트로, 인쇄, 팝아트 톤의 영상에서 장면을 바꿀 때 / Change scenes in a retro, print, or pop-art styled video.
- 시작점에서 방사형으로 퍼지는 공개가 필요할 때 / Reveal radially from a starting point.

좋은 예 / Good: 16px 격자의 점이 시작점에서 가까운 것부터 셀당 15ms씩 늦게 커져 반경이 0에서 12px가 되고 0.9초 안에 화면을 채운다
나쁜 예 / Bad: 격자가 32px 이상으로 커서 점이 도트 패턴이 아니라 큰 원처럼 보이거나, 점이 모두 동시에 커져 물결 없이 균일하다
주의 / Avoid: 격자는 8~24px로 유지한다 · 최대 반경은 격자 대각선의 절반(약 0.71배)까지 키워야 빈틈이 메워진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.9s | 0.6~1.4s | 마지막 셀 완료 기준 |
| 격자 | 16px | 8~24px | 셀 한 변 |
| 최대 반경 | 12px | 격자의 0.6~0.75배 | 0.71배 이상이면 완전 채움 |
| 셀 지연 | 15ms | 5~30ms | 시작점 거리 순 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const cells = gsap.utils.toArray('.dot');
cells.forEach((c, i) => {
  const d = Math.hypot(c.dataset.x - 960, c.dataset.y - 540) / 1102;
  tl.fromTo(c, { attr: { r: 0 } }, { attr: { r: 12 }, duration: 0.5, ease: 'power2.inOut' }, d * 0.4);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 하프톤 디졸브를 만들어줘. 16px 격자로 원 마스크를 깔고 시작점(50% 50%)에서 가까운 셀부터 반경이 0에서 12px로 커지게 해. 셀 사이 지연은 15ms, 셀당 지속 0.5초, 전체 0.9초 안에 끝나게 하고 이징은 power2.inOut. 원 위치는 코드로 결정론적으로 계산하고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>에 halftone dissolve를 넣어. 16px 격자 circle 마스크의 r을 0에서 12px로 0.5s power2.inOut으로 키우고 시작 시각은 중심 거리 순으로 0~0.4s 사이에 분산한다. 0.3초, 0.6초, 0.9초를 캡처해 점이 커지며 이어지는지, 0.9초에 뒤 장면 전체가 채워졌는지 확인해.
```

### English · Claude Code
```text
Build a halftone dissolve from <targetA> to <targetB>. Lay a 16px grid of circle masks and grow each radius from 0 to 12px, starting with the cells nearest the origin (50% 50%). Use a 15ms delay per cell, 0.5 seconds per cell, 0.9 seconds total, and power2.inOut. Compute circle positions deterministically in code and use one paused timeline.
```

### English · Codex
```text
Add a halftone dissolve to <file>. Grow the r of a 16px grid of circle masks from 0 to 12px over 0.5s with power2.inOut, spreading start times across 0 to 0.4s by distance from the center. Capture at 0.3, 0.6, and 0.9 seconds to confirm dots grow and merge, and that the new scene is fully filled at 0.9 seconds.
```

예시 / Example: 하프톤 디졸브를 `.hero`에 적용해. / Apply Halftone Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: SVG 마스크 안에 circle을 격자로 만들고 r만 타임라인에서 보간한다. 셀 수가 많으면 canvas가 가볍다
- ReelForge: 씬 워커 브리프에 cellPx, maxRadius, originXY, delayMs를 싣는다
- Scrolline Deck: 진행률 p를 셀 거리 순서 임계값에 매핑해 각 셀 반경 = clamp((p - d)/0.5)*12로 계산한다. 이징은 ease-out

조합 / Pair with: [모자이크 리빌 · Mosaic Reveal](../mosaic-reveal/) · [노이즈 디졸브 전환 · Noise Dissolve Transition](../noise-dissolve/) · [디픽셀 리빌 · Depixelate Reveal](../depixelate-reveal/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/halftone-dissolve/registry-item.json) (Apache-2.0) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/PolkaDotsCurtain.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
