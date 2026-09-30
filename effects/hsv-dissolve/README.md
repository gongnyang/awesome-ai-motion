# Nº 169 HSV 디졸브 · HSV Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**장면을 섞는 동안 색상이 색상환을 따라 변하고 채도와 밝기가 함께 바뀌는 전환**

Hue travels along the color wheel while scenes mix, with saturation and brightness shifting together.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 숏폼, 설명 영상 | canvas |

다른 이름 / Also known as: 색상환 경유 페이드

## 선택 기준 / Selection

현실적인 혼합보다 색의 변화가 먼저 느껴진다. 무지개처럼 색이 도는 장면 이동 / Color change is felt before realistic blending: a rainbow-tinted move between scenes.

- 색 자체가 이야기의 핵심인 브랜드 영상이나 뮤직 비주얼에서 / Brand videos or music visuals where color itself is the story.
- 픽셀 단위로 섞이는 화려한 교차가 필요할 때 / When you want a showy pixel-level cross blend.

좋은 예 / Good: 0.7초 동안 두 장면의 색상 각도가 색상환을 따라 보간되며 중간에는 채도가 오른 무지개 색조가 스친다
나쁜 예 / Bad: 색상 회전이 360도를 넘어 눈이 어지럽거나, 사람 피부가 초록으로 물들어 불쾌하다
주의 / Avoid: 색상환 이동은 최대 120도까지 · 인물 클로즈업에서는 사용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.0s | 선형 |
| 색상 이동 | 60deg | 30~120deg | hue-rotate |
| 채도 부스트 | +30% | 0~50% | 중간에서 최대 |
| 혼합 | linear |  | opacity 교차 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.to('.a', { filter: 'hue-rotate(60deg) saturate(1.3)', opacity: 0, duration: 0.7, ease: 'none' }, 0)
  .fromTo('.b', { filter: 'hue-rotate(-60deg) saturate(1.3)', opacity: 0 },
    { filter: 'hue-rotate(0deg) saturate(1)', opacity: 1, duration: 0.7, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 HSV 디졸브 느낌의 전환을 만들어줘. A는 0.7초 동안 hue-rotate 0에서 60deg, saturate 1에서 1.3, opacity 1에서 0으로, B는 hue-rotate -60deg에서 0, saturate 1.3에서 1, opacity 0에서 1로 동시에 보간해. 이징 none, paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 HSV 스타일 dissolve를 넣어. .a filter hue-rotate(60deg) saturate(1.3)와 opacity 0, .b filter hue-rotate(-60deg) saturate(1.3)에서 0deg와 1로 opacity 1, 0.7s ease none. 0.35초에 두 장면이 반씩 섞이고 색조가 이동해 있는지, 0.7초에 B가 원색인지 캡처로 확인해.
```

### English · Claude Code
```text
Build an HSV-style dissolve from <targetA> to <targetB>. A goes hue-rotate 0 to 60deg, saturate 1 to 1.3, opacity 1 to 0 over 0.7 seconds while B goes hue-rotate -60deg to 0, saturate 1.3 to 1, opacity 0 to 1 at the same time. Use ease none in one paused timeline.
```

### English · Codex
```text
Add an HSV-style dissolve to <file>. .a filter hue-rotate(60deg) saturate(1.3) and opacity 0; .b filter from hue-rotate(-60deg) saturate(1.3) to 0deg and 1 with opacity 1; 0.7s ease none. Capture at 0.35 seconds to confirm the scenes are half mixed with a shifted hue, and at 0.7 seconds to confirm B is in original color.
```

예시 / Example: HSV 디졸브를 `.hero`에 적용해. / Apply HSV Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: CSS filter hue-rotate로 근사하면 seek에 안전하다. 정확한 HSV 보간은 canvas 픽셀 루프이므로 프레임 시간이 길어져 미리 확인한다
- ReelForge: 씬 워커 브리프에 hueShiftDeg, satBoost, durationMs를 실어 canvas 없이 CSS 근사를 기본으로 한다
- Scrolline Deck: 진행률 p를 hue = 60p로 직결한다. 이징은 linear

조합 / Pair with: [색 전환 · Color Transition](../color-transition/) · [크로스페이드 · Crossfade](../crossfade/) · [색 채널 순차 디졸브 · Channel Phase Dissolve](../channel-phase-dissolve/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/HSVfade.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
