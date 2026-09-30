# Nº 329 커서 추종 · Cursor Follow

> 클립 렌더 예정 / Clip rendering planned.

**보조 원이나 라벨이 커서보다 조금 늦게 이동하고 방향 전환 뒤 따라잡는다.**

A secondary circle or label follows a pointer with a slight delay.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: Spring cursor follow, 스프링 커서 추종, Spring trail follow, 스프링 꼬리 추종, Smooth Pointer Follow, 부드러운 포인터 추종

## 선택 기준 / Selection

포인터 위치와 이동의 관성을 강조한다. / Emphasizes pointer position and movement inertia.

- 커서 추종으로 포인터 위치와 이동의 관성을 강조한다 때 / Use this effect when you need to communicate: Emphasizes pointer position and movement inertia.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 커서가 이동한 뒤 보조 원이 0.15초 늦게 같은 경로를 지난다
나쁜 예 / Bad: 보조 원이 본문을 가리며 계속 흔들린다
주의 / Avoid: 보조 원이 본문을 가리며 계속 흔들린다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.15s | 0.09~0.225s | 1920x1080 시연 기준의 한 동작 시간 |
| 보조 원 지름 | 16px | 12~24px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.follower', {x:200,y:300});
tl.to('.pointer', {x:700,y:400,duration:.6,ease:'power2.out'}, 0);
tl.to('.follower', {x:700,y:400,duration:.6,ease:'power2.out'}, .15);
tl.to('.pointer', {x:500,y:600,duration:.6,ease:'power2.out'}, .8);
tl.to('.follower', {x:500,y:600,duration:.6,ease:'power2.out'}, .95);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 커서 추종을 적용해. 보조 원이나 라벨이 커서보다 조금 늦게 이동하고 방향 전환 뒤 따라잡는다. 기본 지속 0.15초, 보조 원 지름 16px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 커서 추종을 적용해. 기본 지속 0.15초, 보조 원 지름 16px, 이징 power2.out를 사용해. 0초, 0.075초, 0.55초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Cursor Follow to <target> in <file>. A secondary circle or label follows a pointer with a slight delay. Use a 0.15-second duration, a 16px follower circle, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Cursor Follow to <target> in the demonstration scene in <file>. Use a 0.15-second duration, a 16px follower circle, and power2.out easing. Capture at 0, 0.075, and 0.55 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 커서 추종를 `.hero`에 적용해. / Apply Cursor Follow to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 커서 추종 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.15초, 보조 원 지름 16px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.15초, 보조 원 지름 16px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 커서가 이동한 뒤 보조 원이 0.15초 늦게 같은 경로를 지난다.
- Scrolline Deck: 진행률 0~1을 0.15초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [커서 트레일 · Cursor Trail](../cursor-trail/) · [정지 커서 숨김 · Idle Cursor Hide](../idle-cursor-hide/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-follow-pointer-with-spring) (unknown) · [motion.dev examples](https://motion.dev/examples/react-cursor-follow) (unknown) · [pmndrs/react-spring](https://www.react-spring.dev/docs/components/use-trail) (MIT) · [pmndrs/react-spring](https://www.react-spring.dev/examples) (MIT) · [motion.dev examples](https://motion.dev/examples/react-multifollow-pointer-with-spring) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
