# Nº 322 반응형 헤더 모션 · Adaptive Header Motion

> 클립 렌더 예정 / Clip rendering planned.

**스크롤이 진행되면 헤더가 작아지거나 위로 숨고 반대 방향으로 움직이면 다시 나타난다.**

A header hides or shrinks during scrolling and returns when direction changes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: Direction aware header, 방향 반응 헤더, Adaptive Navigation, 내비게이션 축소와 노출

## 선택 기준 / Selection

내용 공간을 확보하면서 탐색 상태를 알린다. / Frees content space while preserving navigation context.

- 반응형 헤더 모션으로 내용 공간을 확보하면서 탐색 상태를 알린다 때 / Use this effect when you need to communicate: Frees content space while preserving navigation context.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 아래로 스크롤할 때 헤더가 숨고 위로 돌리면 다시 나타난다
나쁜 예 / Bad: 방향이 조금만 바뀌어도 헤더가 깜박인다
주의 / Avoid: 방향이 조금만 바뀌어도 헤더가 깜박인다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.3s | 0.18~0.45s | 1920x1080 시연 기준의 한 동작 시간 |
| 방향 감지 거리 | 8px | 6~20px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.header', {y:0});
tl.to('.header', {y:-96,duration:.3,ease:'power2.out'}, .4);
tl.to('.header', {y:0,duration:.3,ease:'power2.out'}, 1.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 반응형 헤더 모션을 적용해. 스크롤이 진행되면 헤더가 작아지거나 위로 숨고 반대 방향으로 움직이면 다시 나타난다. 기본 지속 0.3초, 방향 감지 거리 8px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 반응형 헤더 모션을 적용해. 기본 지속 0.3초, 방향 감지 거리 8px, 이징 power2.out를 사용해. 0초, 0.15초, 0.7초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Adaptive Header Motion to <target> in <file>. A header hides or shrinks during scrolling and returns when direction changes. Use a 0.3-second duration, an 8px direction threshold, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Adaptive Header Motion to <target> in the demonstration scene in <file>. Use a 0.3-second duration, an 8px direction threshold, and power2.out easing. Capture at 0, 0.15, and 0.7 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 반응형 헤더 모션를 `.hero`에 적용해. / Apply Adaptive Header Motion to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 반응형 헤더 모션 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.3초, 방향 감지 거리 8px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.3초, 방향 감지 거리 8px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 아래로 스크롤할 때 헤더가 숨고 위로 돌리면 다시 나타난다.
- Scrolline Deck: 진행률 0~1을 0.3초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [화면 스크롤 · UI Scroll](../ui-scroll/) · [활성 표시 이동 · Active Indicator Glide](../active-indicator-glide/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (GSAP Standard License) · [motion.dev examples](https://motion.dev/examples/react-scroll-hide-header) (unknown) · [ui.aceternity.com](https://ui.aceternity.com/components/notch) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [ibelick/motion-primitives](https://motion-primitives.com/docs/toolbar-dynamic) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
