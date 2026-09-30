# Nº 590 스트로크 체이스 · Stroke Chase

> 클립 렌더 예정 / Clip rendering planned.

**짧은 선분이나 밝은 점이 대상의 윤곽을 따라 반복해서 돈다.**

A short illuminated segment travels around an outline.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: Stroke loader, 선 그리기 로더, Traveling Stroke Segment, 이동 선분, Trim Paths chase, Vegas Running Lights, 윤곽 추적 조명, Vegas effect, Animated perimeter, 움직이는 컬러 둘레, AnimatedBoundary

## 선택 기준 / Selection

작업이 진행 중인 상태를 유지한다. / Maintains a visible working state.

- 패널 둘레에 처리 상태를 표시할 때 / Use when presenting stroke chase in a waiting or ambient scene.
- 로고 윤곽을 반복 추적할 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 밝은 선분이 1.8초에 버튼 둘레를 한 바퀴 돈다.
나쁜 예 / Bad: 정량 완료율을 추적선 길이로 오해하게 한다.
주의 / Avoid: 정량 완료율을 추적선 길이로 오해하게 한다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1.8s | 1.26~2.52s | 유한 구간을 호스트 시간으로 반복 |
| 표시 길이 | 18% | 10~25% | 전체 경로 대비 밝은 구간 |
| 선폭 | 3px | 2~5px | 윤곽 가독성 |
| 이징 | none | none | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
const path = document.querySelector('.chase');
const length = path.getTotalLength();
gsap.set(path, {strokeDasharray:`${length*0.18} ${length*0.82}`, strokeWidth:3});
tl.fromTo(path, {strokeDashoffset:0}, {strokeDashoffset:-length, duration:1.8, ease:'none'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 스트로크 체이스을 적용해. 1.8초, 표시 길이 18%; 선폭 3px, 이징 none로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 스트로크 체이스을 적용해. 1.8초, 표시 길이 18%; 선폭 3px, none를 사용하고 0초, 0.9초, 1.8초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Stroke Chase to <target> in <file>. Use a 1.8s segment with none; implement these explicit settings: Visible path segment: 18%, Stroke width: 3px. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Stroke Chase to the <target> layer in <file> with Visible path segment: 18%, Stroke width: 3px, using the supplied core snippet and a 1.8s segment with none. Capture at 0s, 0.9s, and 1.8s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 스트로크 체이스를 `.hero`에 적용해. / Apply Stroke Chase to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.8초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 스트로크 체이스, 1.8초, 표시 길이 18%; 선폭 3px, none를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.8초 구간에 매핑한다. scrub에서는 스프링 대신 선형 이동과 ease-out을 용도별로 나눈다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-line-draw-loader/registry-item.json) (Apache-2.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/changing.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
