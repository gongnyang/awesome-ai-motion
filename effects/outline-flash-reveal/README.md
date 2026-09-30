# Nº 061 윤곽 섬광 등장 · Outline Flash Reveal

> 클립 렌더 예정 / Clip rendering planned.

**밝은 윤곽선이 대상을 훑는 동안 내부 대상이 점점 선명해진다.**

A bright outline traces the subject while its interior fades into clarity.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 설명, 강조 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: Flashing-outline entrance, 윤곽 섬광 동반 등장, FlashyFadeIn

## 선택 기준 / Selection

등장과 주의 신호를 같은 순간에 만든다. / Combines an entrance with a focused attention cue.

- 아이콘 등장에 주의를 모을 때 / Draw attention to an entering icon.
- 윤곽과 내부의 순서를 보여 줄 때 / Explain the relationship between outline and fill.

좋은 예 / Good: 제품 아이콘 윤곽이 먼저 훑고 0.12초 뒤 내부가 선명해진다.
나쁜 예 / Bad: 굵은 흰색 윤곽을 여러 번 번쩍여 작은 아이콘이 뭉개진다.
주의 / Avoid: 같은 장면의 여러 대상에 동시에 적용하지 않는다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 600~1200ms | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 윤곽 두께 | 2px | 1~3px | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 내부 지연 | 120ms | 80~200ms | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 내부 최종 불투명도 | 1 | 1 | 1920x1080 기준. 장면 시작을 0초로 둔다. |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const path = document.querySelector('.outline');
const length = path.getTotalLength();
const tl = gsap.timeline({ paused: true });
tl.set(path, { strokeDasharray: length, strokeDashoffset: length, strokeWidth: 2 });
tl.to(path, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' }, 0);
tl.fromTo('.fill', { opacity: 0 }, { opacity: 1, duration: 0.78, ease: 'power2.out' }, 0.12);
tl.to(path, { opacity: 0, duration: 0.3 }, 0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 윤곽 섬광 등장을 구현해. 지속 900ms, 윤곽 두께 2px, 내부 지연 120ms, 내부 최종 불투명도 1, 이징 power2.out을 적용해. SVG 윤곽의 이동 dash와 내부 fill-opacity를 같은 타임라인에서 보간한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 윤곽 섬광 등장 장면 레이어에 적용해. 지속 900ms, 윤곽 두께 2px, 내부 지연 120ms, 내부 최종 불투명도 1, 이징 power2.out을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Outline Flash Reveal on <target>. Use duration 900ms; stroke width 2px; fill delay 120ms; final fill opacity 1; use power2.out easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Outline Flash Reveal to the scene layer in <file>. Use duration 900ms; stroke width 2px; fill delay 120ms; final fill opacity 1 and power2.out easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 윤곽 섬광 등장를 `.hero`에 적용해. / Apply Outline Flash Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 윤곽 섬광 등장의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 지속 900ms, 윤곽 두께 2px, 내부 지연 120ms, 내부 최종 불투명도 1을 싣고 svg 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 900ms 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [3b1b/manim](https://github.com/3b1b/manim/blob/master/manimlib/animation/indication.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
