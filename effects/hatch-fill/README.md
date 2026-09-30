# Nº 471 해칭 채움 · Hatch Fill

> 클립 렌더 예정 / Clip rendering planned.

**지그재그 낙서선이 도형 안을 왕복하며 손으로 칠하듯 채워지는 해칭**

A zigzag scribble travels back and forth inside a shape, filling it as if colored by hand.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 설명, 강조 | 설명 영상, 숏폼, 발표 | svg |

다른 이름 / Also known as: Scribble Fill, 스크리블 채움, Hatched fill construction, 해칭 채움 생성

## 선택 기준 / Selection

손으로 색칠하는 과정과 친근한 스케치 질감. 완벽하지 않아서 부담 없는 표현 / The process of coloring by hand and a friendly sketch texture. Imperfect, so approachable.

- 도형이나 영역을 손으로 칠하듯 강조할 때 / Emphasize a shape or region as if painting it by hand.
- 다이어그램에서 선택된 영역을 스케치 스타일로 채울 때 / Fill a selected area in a diagram in a sketch style.

좋은 예 / Good: 원 안쪽이 45도 지그재그 선으로 1.2초 동안 위에서 아래로 채워진다. 선 간격 6px, 두께 2px
나쁜 예 / Bad: 간격이 2px 이하로 촘촘해 꽉 찬 면처럼 보이거나, 선이 도형 밖으로 삐져나온다
주의 / Avoid: 간격 4px 미만 금지(해칭 느낌이 사라짐) · 도형 밖으로 나가는 선은 clipPath로 잘라낸다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.2s | 0.8~2s | 전체 채움 시간 |
| 간격 | 6px | 4~10px | 평행선 사이 |
| 선 두께 | 2px | 1.5~3px | stroke-width |
| 각도 | 45deg | 30~60 | 왕복선 기울기 |
| 색 | #e8590c | 고정 | 잉크색 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
// clipPath로 도형 안만 보이게 하고 지그재그 path를 stroke-dash로 공개
const len = zig.getTotalLength();
gsap.set(zig, { strokeDasharray: len, strokeDashoffset: len });
tl.to(zig, { strokeDashoffset: 0, duration: 1.2, ease: 'power1.inOut' }, 0.2);
// zig: 도형 bbox 위에 45도 왕복 path, spacing 6px, stroke-width 2px, clip-path: 도형
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 도형에 해칭 채움을 넣어줘. 도형 bbox 위에 45도 지그재그 path를 간격 6px, 두께 2px, 색 #e8590c로 그리고 clip-path로 도형 안쪽만 보이게 해. stroke-dashoffset을 전체 길이에서 0으로 1.2초 동안 power1.inOut으로 줄여 위에서 아래로 칠해지게 하고, 0.2초부터 시작해.
```

### 한국어 · Codex
```text
<파일>의 SVG에 도형 path를 <clipPath>로 정의하고 그 안에 45도 지그재그 path(간격 6, stroke-width 2)를 추가해. getTotalLength로 dasharray/dashoffset을 세팅하고 0.2초부터 1.2초 power1.inOut로 dashoffset→0. 0.5초·1.0초·1.6초 캡처로 선이 도형 안에서만 진행하고 밖으로 삐져나오지 않는지 확인해.
```

### English · Claude Code
```text
Add a hatch fill to the shape in <target>. Draw a 45 degree zigzag path over the shape's bounding box with 6px spacing, 2px stroke, color #e8590c, and clip it to the shape. Reduce stroke-dashoffset from full length to 0 over 1.2 seconds with power1.inOut, starting at 0.2 seconds, so it fills from top to bottom.
```

### English · Codex
```text
In the SVG of <file>, define the shape path as a <clipPath> and add a 45 degree zigzag path (spacing 6, stroke-width 2) inside it. Set dasharray/dashoffset from getTotalLength and tween dashoffset to 0 from 0.2 s for 1.2 s with power1.inOut. Capture at 0.5 s, 1.0 s and 1.6 s to confirm the stroke only advances inside the shape and never spills out.
```

예시 / Example: 해칭 채움를 `.hero`에 적용해. / Apply Hatch Fill to `.hero`.

## 적용 / Application

- HyperFrames: 지그재그 path는 미리 계산한 d 문자열로 넣고 stroke-dashoffset 하나만 tween한다. clipPath는 정적이라 seek에 안전하다
- ReelForge: 씬 브리프에 도형 path, 간격 6px, 각도 45도, 두께 2px, 색을 싣는다. 채움 순서(위→아래)도 명시
- Scrolline Deck: 진행률 0~1을 dashoffset에 그대로 매핑한다. ease는 power1.inOut이면 스크럽에서도 자연스럽다

조합 / Pair with: [선 그리기 · Line Draw](../line-draw/) · [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [스크리블 와이프 · Scribble Wipe](../scribble-wipe/) · [라인 보일 · Line Boil](../line-boil/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [rough-stuff/rough](https://github.com/rough-stuff/rough/blob/master/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
