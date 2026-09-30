# Nº 368 고정 위치 교대 표시 · Anchored Substitution

> 클립 렌더 예정 / Clip rendering planned.

**동일 자리에 다음 항목이 나타나면 이전 항목은 사라진다.**

Each new item replaces the previous item at a shared anchor.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 비교 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: One-at-a-time substitution, 한 항목씩 교대 표시, ShowSubmobjectsOneByOne

## 선택 기준 / Selection

연속 상태를 한 위치에서 비교한다. / Compares successive states without moving the viewer’s focus.

- 같은 위치에서 연속 상태를 비교할 때 / Use when explaining anchored substitution in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 하드 교대 장면에서 동일 자리에 다음 항목이 나타나면 이전 항목은 사라진다. 0.6s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 항목마다 기준점이 달라 비교 대상이 흔들린다
주의 / Avoid: 항목마다 기준점이 달라 비교 대상이 흔들린다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 0.6s | 0.42~0.9s | 후보의 주요 이동 또는 유지 시간이다 |
| 전환 시간 | 120ms | 0~180ms | 하드 교대는 0ms로 둔다 |
| 앵커 이동 | 0px | 0px | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
tl.set(items, {opacity: 0}, 0);
items.forEach((item, i) => {
  tl.to(item, {opacity: 1, duration: .12, ease: 'none'}, i * .72);
  tl.to(item, {opacity: 0, duration: .12, ease: 'none'}, i * .72 + .72);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 고정 위치 교대 표시 효과를 적용해. 공통 앵커의 그룹 중 현재 항목만 표시한다. 기본 구간은 0.6초, 전환 시간은 120ms, 앵커 이동은 0px, 이징은 none로 설정하고 모든 항목의 기준 좌표를 공유한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 고정 위치 교대 표시 장면에 적용해. 공통 앵커의 그룹 중 현재 항목만 표시한다. 0.6초 구간과 none, 전환 시간 120ms, 앵커 이동 0px를 적용하고 초기 상태를 명시해. 0초, 0.3초, 0.6초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Anchored Substitution to <target>. Each new item replaces the previous item at a shared anchor. Use a 0.6-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the transition duration to 120ms and the anchor displacement to 0px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Anchored Substitution in the relevant scene in <file>. Each new item replaces the previous item at a shared anchor. Use a 0.6-second primary interval with none easing and explicit initial states. Set the transition duration to 120ms and the anchor displacement to 0px. Capture at 0, 0.3, and 0.6 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 고정 위치 교대 표시를 `.hero`에 적용해. / Apply Anchored Substitution to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 0.6초 구간, 전환 시간 120ms, 앵커 이동 0px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [격자 그리기 · Grid Draw](../grid-draw/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/creation.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
