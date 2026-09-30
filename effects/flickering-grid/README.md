# Nº 601 플리커 격자 · Flickering Grid

> 클립 렌더 예정 / Clip rendering planned.

**격자의 일부 칸이나 점이 독립적으로 밝아지고 사라진다.**

Selected grid cells fade in and out at staggered times.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | canvas |

다른 이름 / Also known as: 깜박이는 격자

## 선택 기준 / Selection

활성화된 단위와 디지털 환경을 보여 준다. / Suggests digital activity and independently active units.

- 디지털 배경에 활동감을 넣을 때 / Add subtle activity to a digital background.
- 단위별 활성 상태를 추상적으로 보여 줄 때 / Represent independently active units abstractly.

좋은 예 / Good: 서버 소개 배경에서 격자의 15%만 옅게 켠다.
나쁜 예 / Bad: 모든 칸을 강한 흰색으로 번갈아 켜 화면이 번쩍인다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 갱신 간격 | 100ms | 80~250ms | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 격자 간격 | 24px | 20~48px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 활성 비율 | 0.15 | 0.05~0.2 | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 페이드 | 500ms | 300~900ms | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const cells = gsap.utils.toArray('.cell');
const tl = gsap.timeline({ paused: true });
cells.forEach((cell, i) => {
  if ((i * 37 % 100) < 15) tl.fromTo(cell, { opacity: 0 },
    { opacity: 0.3, duration: 0.5, repeat: 1, yoyo: true, ease: 'sine.inOut' }, (i % 10) * 0.1);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 플리커 격자을 구현해. 갱신 간격 100ms, 격자 간격 24px, 활성 비율 0.15, 페이드 500ms, 이징 sine.inOut을 적용해. canvas 시드가 고정된 칸별 밝기를 시간에 따라 갱신한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 플리커 격자 장면 레이어에 적용해. 갱신 간격 100ms, 격자 간격 24px, 활성 비율 0.15, 페이드 500ms, 이징 sine.inOut을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Flickering Grid on <target>. Use update interval 100ms; grid spacing 24px; active fraction 0.15; fade duration 500ms; use sine.inOut easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Flickering Grid to the scene layer in <file>. Use update interval 100ms; grid spacing 24px; active fraction 0.15; fade duration 500ms and sine.inOut easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 플리커 격자를 `.hero`에 적용해. / Apply Flickering Grid to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 플리커 격자의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 갱신 간격 100ms, 격자 간격 24px, 활성 비율 0.15, 페이드 500ms을 싣고 canvas 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 100ms 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [격자 펄스 · Grid Pulse](../grid-pulse/) · [단위 격자 · Unit Grid Fill](../unit-grid/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/flickering-grid) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/dotted-glow-background) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
