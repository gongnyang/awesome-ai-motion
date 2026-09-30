# Nº 390 평면 공간 변형 · Plane Transformation

> 클립 렌더 예정 / Clip rendering planned.

**평면의 격자와 도형이 같은 좌표 변환을 받아 회전하거나 휘어진다. 기준 격자와 기저 벡터를 함께 남겨 변형 전후를 비교할 수 있다.**

A grid and its shapes deform under one shared coordinate transformation.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 고급 | 설명, 비교 | 설명 영상, 발표, 스크롤덱 | canvas |

다른 이름 / Also known as: Complex-plane mapping, 복소 평면 변환, ComplexHomotopy, ApplyComplexFunction, Linear matrix deformation, 행렬 공간 변형, ApplyMatrix, Basis vector tracking, 기저 벡터 추적, Whole-plane transformation with reference, 기준 격자를 남긴 공간 변형

## 선택 기준 / Selection

함수나 행렬이 공간 전체에 미치는 작용을 보여준다. / Shows how a function or matrix acts on the entire plane.

- 행렬이 격자와 기저 벡터에 미치는 작용을 설명할 때 / Use when explaining plane transformation in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 행렬 선형 변환 장면에서 평면의 격자와 도형이 같은 좌표 변환을 받아 회전하거나 휘어진다. 기준 격자와 기저 벡터를 함께 남겨 변형 전후를 비교할 수 있다. 1.6s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 도형과 기저 벡터에 서로 다른 변환을 적용한다
주의 / Avoid: 도형과 기저 벡터에 서로 다른 변환을 적용한다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1.6s | 1.12~2.4s | 후보의 주요 이동 또는 유지 시간이다 |
| 격자 간격 | 40px | 24~64px | 좌표 변환 전후 동일 격자 표본을 쓴다 |
| 기준 격자 불투명도 | 0.2 | 0.1~0.3 | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {p: 0};
const tl = gsap.timeline({paused: true});
tl.to(state, {p: 1, duration: 1.6, ease: 'power2.inOut',
  onUpdate: () => drawTransformedGridAndBasis(state.p, 40, .2)}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 평면 공간 변형 효과를 적용해. Canvas에서 각 점의 원래 좌표와 변환 좌표를 보간하고 격자 곡선과 기저 벡터를 같은 변환으로 갱신한다. 기본 구간은 1.6초, 격자 간격은 40px, 기준 격자 불투명도은 0.2, 이징은 power2.inOut로 설정하고 모든 항목의 기준 좌표를 공유한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 평면 공간 변형 장면에 적용해. Canvas에서 각 점의 원래 좌표와 변환 좌표를 보간하고 격자 곡선과 기저 벡터를 같은 변환으로 갱신한다. 1.6초 구간과 power2.inOut, 격자 간격 40px, 기준 격자 불투명도 0.2를 적용하고 초기 상태를 명시해. 0초, 0.8초, 1.6초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Plane Transformation to <target>. A grid and its shapes deform under one shared coordinate transformation. Use a 1.6-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the grid spacing to 40px and the reference grid opacity to 0.2. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Plane Transformation in the relevant scene in <file>. A grid and its shapes deform under one shared coordinate transformation. Use a 1.6-second primary interval with power2.inOut easing and explicit initial states. Set the grid spacing to 40px and the reference grid opacity to 0.2. Capture at 0, 0.8, and 1.6 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 평면 공간 변형를 `.hero`에 적용해. / Apply Plane Transformation to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1.6초 구간, 격자 간격 40px, 기준 격자 불투명도 0.2와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [고정 위치 교대 표시 · Anchored Substitution](../anchored-substitution/) · [격자 그리기 · Grid Draw](../grid-draw/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/movement.py) (MIT) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) (MIT) · [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2016/eola/chapter3.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
