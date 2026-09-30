# Nº 342 이미지 생성 스캔 · Image Generation Scan

> 클립 렌더 예정 / Clip rendering planned.

**스캔 띠와 픽셀 격자가 이미지를 훑으며 완성된 영역을 드러낸다.**

A scan band and pixel grid reveal completed portions of an image.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | canvas |

## 선택 기준 / Selection

이미지가 처리되거나 생성되고 있음을 보여 준다. / Signals that an image is being processed or generated.

- 이미지 생성 스캔으로 이미지가 처리되거나 생성되고 있음을 보여 준다 때 / Use this effect when you need to communicate: Signals that an image is being processed or generated.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 스캔 선이 내려가며 생성 이미지의 완성 영역을 공개한다
나쁜 예 / Bad: 실제 처리 진행과 다른 수치를 완료율로 표시한다
주의 / Avoid: 실제 처리 진행과 다른 수치를 완료율로 표시한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 3s | 1.8~4.5s | 1920x1080 시연 기준의 한 동작 시간 |
| 격자 간격 | 12px | 8~24px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | none | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.image', {clipPath:'inset(0 0 100% 0)'});
tl.to('.image', {clipPath:'inset(0 0 0% 0)',duration:3,ease:'none'}, 0);
tl.fromTo('.scan', {y:0}, {y:600,duration:3,ease:'none'}, 0);
tl.to('.scan', {opacity:0,duration:.15}, 3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 이미지 생성 스캔을 적용해. 스캔 띠와 픽셀 격자가 이미지를 훑으며 완성된 영역을 드러낸다. 기본 지속 3초, 격자 간격 12px, 이징 none를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해. canvas는 같은 진행값으로 매 프레임 다시 그리며 핵심 코드의 DOM 레이어는 합성 참조로 사용해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 이미지 생성 스캔을 적용해. 기본 지속 3초, 격자 간격 12px, 이징 none를 사용해. 0초, 1.5초, 3.4초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Image Generation Scan to <target> in <file>. A scan band and pixel grid reveal completed portions of an image. Use a 3-second duration, a 12px grid, and none easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state. Redraw the canvas from the same progress value on each frame; use the DOM layers in the core snippet as a compositing reference.
```

### English · Codex
```text
Apply Image Generation Scan to <target> in the demonstration scene in <file>. Use a 3-second duration, a 12px grid, and none easing. Capture at 0, 1.5, and 3.4 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 이미지 생성 스캔를 `.hero`에 적용해. / Apply Image Generation Scan to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 이미지 생성 스캔 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 3초, 격자 간격 12px, 이징 none를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 3초, 격자 간격 12px, 이징 none와 시작 상태, 완료 상태를 싣는다. 스캔 선이 내려가며 생성 이미지의 완성 영역을 공개한다.
- Scrolline Deck: 진행률 0~1을 3초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [마스크 리빌 · Mask Reveal](../mask-reveal/) · [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
