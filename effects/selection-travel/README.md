# Nº 082 선택 영역 이동 · Selection Travel

> 클립 렌더 예정 / Clip rendering planned.

**반투명 선택 띠가 한 범위에서 다음 범위로 이동하며 폭과 높이를 맞추는 강조**

A translucent selection band moves from one range to the next, resizing to fit.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 중급 | 설명, 강조 | 설명 영상, 발표, 데이터 스토리 | gsap |

다른 이름 / Also known as: Code selection travel, 코드 선택 영역 이동, Chart focus band sweep, 차트 구간 강조 띠

## 선택 기준 / Selection

설명하는 대상의 범위를 읽게 한다. 같은 띠가 이동해 연속성을 준다 / Reads the grammatical range of what is being explained. One band moving keeps continuity.

- 코드 줄이나 토큰을 차례로 짚으며 설명할 때 / When walking through code lines or tokens one by one
- 차트의 기간 구간을 한 구간씩 이동하며 강조할 때 / When a chart's period range is moved along section by section

좋은 예 / Good: 코드 3행에 있던 선택 띠가 0.4초 동안 7행으로 내려가며 높이가 1행에서 3행으로 늘어난다
나쁜 예 / Bad: 띠가 매번 새로 나타났다 사라져 연속성이 없거나, 불투명도가 높아 글자를 가린다
주의 / Avoid: 띠 opacity 0.15~0.3 · 띠는 대상 경계보다 2~4px 여유 · 이동 중에도 대상 글자가 읽히게

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 길이 | 0.4s | 0.3~0.6s | 범위 간 이동 |
| opacity | 0.25 | 0.15~0.3 | 글자를 가리지 않게 |
| 여백 | 2px | 2~4px | 대상 경계 바깥 |
| 이징 | power3.inOut | power2~power3.inOut | 도착이 정확 |

## 구현 / Implementation (GSAP)

```js
const spans = [{ y: 120, h: 36 }, { y: 300, h: 108 }, { y: 516, h: 36 }];
spans.forEach((s, i) => tl.to('.sel', { y: s.y, height: s.h, duration: 0.4, ease: 'power3.inOut' }, 0.3 + i * 1.2));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 코드에서 반투명 선택 띠를 이동시켜줘. 띠는 opacity 0.25 하나를 재사용하고 spans 배열 [{y:120,h:36},{y:300,h:108},{y:516,h:36}]로 0.3초부터 1.2초마다 y와 height를 0.4초 power3.inOut으로 옮겨. 범위마다 0.8초 유지. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 selection-travel을 적용해. .sel 하나를 spans.forEach로 y, height를 0.4s, power3.inOut, position 0.3+i*1.2에 tween. 각 범위 좌표는 getBoundingClientRect로 측정한 값이어야 한다. 0.5초·1.5초·2.7초를 캡처해 띠 경계가 대상 줄 경계와 2px 이내인지 확인해.
```

### English · Claude Code
```text
Move a translucent selection band over <target> code with GSAP. Reuse one band at opacity 0.25 and, from 0.3s every 1.2s, tween y and height to the next entry of spans [{y:120,h:36},{y:300,h:108},{y:516,h:36}] over 0.4s with power3.inOut. Hold 0.8s per range. One paused timeline.
```

### English · Codex
```text
Apply selection-travel to <target> in <file>. Tween one .sel over spans.forEach with y and height, 0.4s, power3.inOut, position 0.3 + i*1.2. Range coordinates must come from getBoundingClientRect. Capture at 0.5s, 1.5s and 2.7s and check the band edges are within 2px of the target line edges.
```

예시 / Example: 선택 영역 이동를 `.hero`에 적용해. / Apply Selection Travel to `.hero`.

## 적용 / Application

- HyperFrames: 띠 하나를 y와 height만 tween한다. 범위 좌표는 미리 측정해 배열로 고정하고 폰트 로딩 후 값을 얻는다
- ReelForge: 브리프에 범위 좌표 배열, 이동 길이, 각 범위 유지 시간(0.8초 기준)을 싣는다
- Scrolline Deck: scrub에서는 범위 i를 진행률 i/(n-1)에 매핑하고 사이는 ease-out 이동. 스프링 없음

조합 / Pair with: [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/) · [스포트라이트 · Spotlight](../spotlight/) · [확대 콜아웃 · Zoom Callout](../zoom-callout/)

출처 / Sources: [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code/) (MIT) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT) · [fnando/sparkline](https://github.com/fnando/sparkline) (MIT) · [Flourish](https://app.flourish.studio/@flourish/scatter) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
