# Nº 430 모서리 라운딩 · Round Corners

> 클립 렌더 예정 / Clip rendering planned.

**각진 도형의 모서리가 점점 둥근 곡선으로 바뀌거나 다시 각지게 돌아가는 변화**

Sharp corners of a shape gradually round into curves, or return to sharp corners.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 기본 | 설명, 피드백 | 웹 UI, 설명 영상, 숏폼 | svg |

다른 이름 / Also known as: Rounded Corner Morph, 모서리 둥글어지기, 라운드 코너

## 선택 기준 / Selection

단단한 상태에서 부드러운 상태로 성격이 바뀌는 것을 보여 준다. 표면 상태와 유연함을 조용히 전달한다 / Shows a change from hard to soft, quietly conveying surface state and flexibility.

- 사각 카드가 버튼이나 원으로 변하는 순간을 만들 때 / A square card turning into a button or circle.
- 선택되면 각진 요소가 부드러워지는 상태 변화를 보일 때 / A selected element softening as a state change.
- 도형이 캐릭터로 바뀌는 과정의 첫 단계로 쓸 때 / The first step of a shape becoming a character.

좋은 예 / Good: 사각형이 500ms에 반경 0에서 24px로 부드럽게 둥글어졌다가 정지하고, 되돌릴 때 같은 경로로 각진다
나쁜 예 / Bad: 반경이 도형 짧은 변의 절반을 넘어 모양이 튀거나, 회전과 크기를 동시에 바꿔 무엇이 변했는지 안 보인다
주의 / Avoid: 반경은 짧은 변의 50% 이하로 한다 · 한 번에 한 속성만 강하게 변한다 · 여러 도형은 60ms씩 간격을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.5s | 0.3~0.8s | 반경 변화 |
| 반경 | 0→24px | 0~짧은 변의 50% | border-radius |
| 간격 | 60ms | 40~100ms | 여러 도형 |
| 이징 | power2.inOut | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.box', { borderRadius: 0 }, { borderRadius: 24, duration: 0.5, ease: 'power2.inOut', stagger: 0.06 }, 0.4);
// SVG 다각형은 각 꼭짓점을 접선 곡선으로 치환한 두 path를 준비해 attr d를 보간
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <도형>의 모서리를 둥글게 바꿔 줘. 0.4초부터 0.5초 동안 borderRadius를 0에서 24px로 power2.inOut으로 올리고, 도형이 여러 개면 60ms씩 시차를 둬. 반경은 짧은 변의 50%를 넘기지 말고 도형의 크기와 위치는 바꾸지 마. paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 도형에 round-corners를 적용해. tl.fromTo('.box',{borderRadius:0},{borderRadius:24,duration:0.5,ease:'power2.inOut',stagger:0.06},0.4)로 건다. 0.3초는 borderRadius 0, 0.65초는 중간값, 1.2초는 24px이며 크기가 그대로인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to round the corners of <shape>. From 0.4 seconds over 0.5 seconds, raise borderRadius from 0 to 24px with power2.inOut, staggering by 60ms if there are several shapes. Do not exceed 50% of the short side, and leave size and position unchanged. Paused timeline.
```

### English · Codex
```text
Apply round-corners in <file> with tl.fromTo('.box',{borderRadius:0},{borderRadius:24,duration:0.5,ease:'power2.inOut',stagger:0.06},0.4). Capture 0.3s (radius 0), 0.65s (intermediate) and 1.2s (24px, size unchanged).
```

예시 / Example: 모서리 라운딩를 `.hero`에 적용해. / Apply Round Corners to `.hero`.

## 적용 / Application

- HyperFrames: border-radius는 paused 타임라인에서 안정적으로 seek된다. SVG 다각형은 path 두 벌을 미리 만들어 d를 보간한다
- ReelForge: 브리프에 도형, 반경 0→24, 간격 60ms를 싣고 다각형이면 path 쌍을 함께 받는다
- Scrolline Deck: 진행률 0~1을 반경 0~24에 매핑한다. 스크럽 방향에 따라 각짐과 둥글림이 자연스럽게 오간다

조합 / Pair with: [모프 전환 · Morph](../shape-morph/) · [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
