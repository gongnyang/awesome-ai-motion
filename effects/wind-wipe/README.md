# Nº 211 윈드 와이프 · Wind Wipe

> 클립 렌더 예정 / Clip rendering planned.

**경계가 줄마다 다른 길이로 뻗어 바람에 흩날리는 선처럼 새 장면을 드러내는 와이프**

The edge extends a different length on each line, like streaks blown by wind, to reveal the new scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 순서·흐름 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: Wind streak wipe, 바람 줄무늬 와이프

## 선택 기준 / Selection

속도감과 불규칙한 흐름. 줄무늬가 한 방향으로 쓸려 나간다 / Speed and irregular flow: stripes sweep off in one direction.

- 속도감이 필요한 장면 이동에서 / Scene moves that need speed.
- 단순 직선 와이프가 딱딱할 때 결을 더하고 싶을 때 / Add texture when a straight wipe feels stiff.

좋은 예 / Good: 화면이 세로 40개 줄로 나뉘어 각 줄이 시드 1로 고정된 시작 지연(0~0.2초)을 가지고 왼쪽에서 오른쪽으로 0.6초 동안 쓸려 새 장면을 드러낸다
나쁜 예 / Bad: 줄 높이가 커서 큰 계단처럼 보이거나, 지연 편차가 커 0.6초에 끝나지 않는다
주의 / Avoid: 줄 개수 24개 미만 금지(계단처럼 보인다) · 난수는 시드 고정. Math.random 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.6s | 0.4~1.0s | 선형 |
| 줄 개수 | 40 | 24~60 | 가로줄 |
| 최대 지연 | 0.2s | 0.1~0.3s | 시드 난수 |
| 방향 | 좌에서 우 | 4방향 | reversed 가능 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const seed = (i) => ((Math.sin(i * 127.1 + 1) * 43758.5453) % 1 + 1) % 1;
document.querySelectorAll('.strip').forEach((el, i) =>
  tl.fromTo(el, { xPercent: -100 }, { xPercent: 0, duration: 0.4, ease: 'none' }, seed(i) * 0.2));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 윈드 와이프를 만들어줘. B를 가로 줄 40개로 나눠 각 줄이 왼쪽에서 오른쪽으로 0.4초 동안 linear로 들어오되, 시작 지연은 시드 고정 값으로 0~0.2초에 분산해. 전체는 0.6초 안에 끝나고 Math.random은 쓰지 말고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>에 wind wipe를 적용해. .strip 40개를 xPercent -100에서 0으로 0.4s ease none, 시작 지연은 sin 해시로 계산한 0~0.2s. 0.2초에 줄마다 길이가 들쭉날쭉한지, 0.6초에 모든 줄이 도착했는지, 같은 시각을 두 번 캡처해 결과가 같은지 확인해.
```

### English · Claude Code
```text
Build a wind wipe from <targetA> to <targetB>. Split B into 40 horizontal strips; each slides in from the left over 0.4 seconds with a linear ease, with start delays spread across 0 to 0.2 seconds from fixed seeded values. Everything finishes within 0.6 seconds. No Math.random, one paused timeline.
```

### English · Codex
```text
Apply a wind wipe in <file>. Animate 40 .strip elements xPercent -100 to 0 over 0.4s with ease none, using start delays of 0 to 0.2s computed by a sin hash. Capture at 0.2 seconds to confirm ragged strip lengths, at 0.6 seconds to confirm all strips arrived, and capture the same time twice to confirm identical output.
```

예시 / Example: 윈드 와이프를 `.hero`에 적용해. / Apply Wind Wipe to `.hero`.

## 적용 / Application

- HyperFrames: 줄 지연은 시드 함수로 미리 계산해 고정한다(Math.random 금지). 줄별 clipPath 대신 xPercent 이동이 가볍다
- ReelForge: 씬 워커 브리프에 strips, maxDelayMs, seed, direction을 싣는다
- Scrolline Deck: 진행률 p에서 각 줄 진행 = clamp((p - delay_i)/0.67)로 계산한다. 이징은 none 또는 ease-out

조합 / Pair with: [와이프 · Wipe](../wipe/) · [푸시 전환 · Push](../push-transition/) · [지그재그 와이프 · Zigzag Wipe](../zigzag-wipe/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wind.glsl) (MIT) · [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) (LGPL-2.1-or-later) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
