# Nº 135 딥 투 컬러 · Dip to Color

> 클립 렌더 예정 / Clip rendering planned.

**앞 장면이 단색으로 사라진 뒤 같은 색에서 다음 장면이 나타나는 전환**

The outgoing scene fades into a flat color, then the next scene rises out of that same color.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 설명 영상, 발표, 스크롤덱 | css |

다른 이름 / Also known as: Color dip, 색면 경유 전환, 색면 경유 페이드, Blur to solid color, 블러 색면 경유

## 선택 기준 / Selection

문단이나 장의 경계. 한 호흡 쉬고 다음 이야기로 넘어간다는 신호 / A section or chapter break: a pause before the next idea.

- 장이나 섹션이 바뀌는 지점을 분명히 나눌 때 / Mark clearly where a chapter or section changes.
- 서로 어울리지 않는 두 장면을 색면 하나로 끊어 이을 때 / Cut between two mismatched scenes through a single color field.

좋은 예 / Good: 장면이 0.25초에 걸쳐 검은색으로 잠기고 0.1초 머문 뒤 다음 장면이 0.35초 동안 올라온다
나쁜 예 / Bad: 색면 홀드를 0.5초 이상 두어 화면이 멈춘 것처럼 보이거나, 장면마다 다른 색을 써서 일관성이 없다
주의 / Avoid: 전환 전체 0.9초 초과 금지(리듬이 끊긴다) · 색은 영상 전체에서 1~2가지로 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 퇴장 | 0.25s | 0.15~0.4s | 앞 장면이 색으로 잠기는 시간 |
| 색면 홀드 | 0.1s | 0~0.2s | 색만 보이는 구간 |
| 등장 | 0.35s | 0.25~0.5s | 퇴장보다 약간 길게 |
| 색 | #000 | 브랜드 색 가능 | 저채도 어두운 색이 안전 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.to('.a', { opacity: 0, duration: 0.25, ease: 'power1.in' })
  .to('.dip', { opacity: 1, duration: 0.25, ease: 'power1.in' }, 0)
  .set('.a', { display: 'none' }, 0.35)
  .to('.dip', { opacity: 0, duration: 0.35, ease: 'power2.out' }, 0.35)
  .fromTo('.b', { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0.35);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 넘어갈 때 딥 투 컬러 전환을 GSAP로 넣어줘. A는 0.25초 동안 #000 색면 뒤로 사라지고, 색면이 0.1초 머문 뒤, B가 0.35초 동안 나타나게 해. 퇴장 이징 power1.in, 등장 이징 power2.out, paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 섹션 경계에 dip-to-color를 넣어. 전면 #000 오버레이 opacity를 0.25초 동안 0에서 1, 0.1초 홀드, 0.35초 동안 1에서 0으로 보간하고 오버레이가 가장 진할 때 장면을 교체한다. 0.3초 시점에 화면이 순수 검정인지, 0.45초에 뒤 장면이 올라오는 중인지 캡처로 확인해.
```

### English · Claude Code
```text
Add a dip-to-color transition from <targetA> to <targetB> in GSAP. A fades out behind a #000 color layer over 0.25 seconds, the color holds for 0.1 seconds, then B fades in over 0.35 seconds. Use power1.in for the exit and power2.out for the entrance, all in one paused timeline.
```

### English · Codex
```text
Add a dip-to-color at the section boundary in <file>. Tween a full-frame #000 overlay from opacity 0 to 1 over 0.25 seconds, hold 0.1 seconds, then back to 0 over 0.35 seconds, swapping the scenes at the darkest point. Capture at 0.3 seconds to confirm the frame is pure black and at 0.45 seconds to confirm the next scene is rising in.
```

예시 / Example: 딥 투 컬러를 `.hero`에 적용해. / Apply Dip to Color to `.hero`.

## 적용 / Application

- HyperFrames: 색면 div를 두 씬 위에 z-index로 두고 opacity만 보간한다. 앞 장면의 display 전환도 타임라인에 넣어 seek에서 남지 않게 한다
- ReelForge: 씬 경계 파라미터로 color, outMs, holdMs, inMs를 노출한다. 브랜드 색은 씬 토큰에서 받는다
- Scrolline Deck: 섹션 사이 구간을 진행률 0.4~0.6으로 잡고 가운데 0.1을 색 홀드로 쓴다. 스크롤을 멈추면 색 화면이 남으므로 홀드는 짧게 둔다

조합 / Pair with: [크로스페이드 · Crossfade](../crossfade/) · [플래시 전환 · Flash Transition](../flash-transition/) · [퇴장 후 등장 · Exit Before Enter](../exit-before-enter/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/fade-through/registry-item.json) (Apache-2.0) · [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/fade-through.json) (unknown) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fadecolor.glsl) (MIT) · [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) (LGPL-2.1-or-later) · [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-dissolve-transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
