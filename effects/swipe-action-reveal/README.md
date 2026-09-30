# Nº 352 스와이프 액션 리빌 · Swipe Action Reveal

> 클립 렌더 예정 / Clip rendering planned.

**행이 옆으로 밀리면서 뒤에 숨은 실행 버튼이 드러난다.**

A row slides aside to reveal actions underneath.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: 스와이프 동작 공개

## 선택 기준 / Selection

숨은 작업과 실행 방향을 전달한다. / Communicates hidden actions and the direction of a gesture.

- 스와이프 액션 리빌으로 숨은 작업과 실행 방향을 전달한다 때 / Use this effect when you need to communicate: Communicates hidden actions and the direction of a gesture.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 메일 행이 왼쪽으로 밀려 보관 버튼을 보여 준다
나쁜 예 / Bad: 삭제 작업을 애니메이션만으로 실행한다
주의 / Avoid: 삭제 작업을 애니메이션만으로 실행한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.3s | 0.18~0.45s | 1920x1080 시연 기준의 한 동작 시간 |
| 이동 거리 | 100px | 60~140px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.action', {scale:.9,opacity:0});
tl.to('.row', {x:-100,duration:.3,ease:'power2.out'}, 0);
tl.to('.action', {scale:1,opacity:1,duration:.3}, 0);
tl.to('.row', {x:0,duration:.4,ease:'back.out(1.2)'}, .8);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 스와이프 액션 리빌을 적용해. 행이 옆으로 밀리면서 뒤에 숨은 실행 버튼이 드러난다. 기본 지속 0.3초, 이동 거리 100px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 스와이프 액션 리빌을 적용해. 기본 지속 0.3초, 이동 거리 100px, 이징 power2.out를 사용해. 0초, 0.15초, 0.7초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Swipe Action Reveal to <target> in <file>. A row slides aside to reveal actions underneath. Use a 0.3-second duration, 100px travel, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Swipe Action Reveal to <target> in the demonstration scene in <file>. Use a 0.3-second duration, 100px travel, and power2.out easing. Capture at 0, 0.15, and 0.7 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 스와이프 액션 리빌를 `.hero`에 적용해. / Apply Swipe Action Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 스와이프 액션 리빌 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.3초, 이동 거리 100px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.3초, 이동 거리 100px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 메일 행이 왼쪽으로 밀려 보관 버튼을 보여 준다.
- Scrolline Deck: 진행률 0~1을 0.3초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [드래그 앤 드롭 · Drag and Drop](../drag-and-drop/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-swipe-actions) (unknown) · [motiondivision/motion](https://motion.dev/docs/react-drag) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
