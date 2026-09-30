# Nº 334 탄성 경계 복귀 · Elastic Boundary Return

> 클립 렌더 예정 / Clip rendering planned.

**끌린 물체가 영역을 잠깐 벗어나 늘어났다가 경계 안으로 돌아온다.**

A dragged object resists movement beyond a boundary and returns on release.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

## 선택 기준 / Selection

조작 가능한 범위와 탄성을 보여준다. / Shows the allowed range and elastic resistance.

- 탄성 경계 복귀으로 조작 가능한 범위와 탄성을 보여준다 때 / Use this effect when you need to communicate: Shows the allowed range and elastic resistance.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 카드가 오른쪽 경계를 40px 넘었다가 경계로 돌아온다
나쁜 예 / Bad: 경계 밖에 놓인 카드를 복귀시키지 않는다
주의 / Avoid: 경계 밖에 놓인 카드를 복귀시키지 않는다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.4s | 0.24~0.6s | 1920x1080 시연 기준의 한 동작 시간 |
| 경계 초과 이동률 | 0.5 | 0.2~0.6 | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const limit = 240, raw = 320;
const shown = limit+(raw-limit)*.5;
tl.to('.card', {x:shown,duration:.6,ease:'none'}, 0);
tl.to('.card', {x:limit,duration:.4,ease:'back.out(1.2)'}, .6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 탄성 경계 복귀을 적용해. 끌린 물체가 영역을 잠깐 벗어나 늘어났다가 경계 안으로 돌아온다. 기본 지속 0.4초, 경계 초과 이동률 0.5, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 탄성 경계 복귀을 적용해. 기본 지속 0.4초, 경계 초과 이동률 0.5, 이징 power2.out를 사용해. 0초, 0.2초, 0.8초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Elastic Boundary Return to <target> in <file>. A dragged object resists movement beyond a boundary and returns on release. Use a 0.4-second duration, a 0.5 overscroll factor, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Elastic Boundary Return to <target> in the demonstration scene in <file>. Use a 0.4-second duration, a 0.5 overscroll factor, and power2.out easing. Capture at 0, 0.2, and 0.8 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 탄성 경계 복귀를 `.hero`에 적용해. / Apply Elastic Boundary Return to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 탄성 경계 복귀 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.4초, 경계 초과 이동률 0.5, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.4초, 경계 초과 이동률 0.5, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 카드가 오른쪽 경계를 40px 넘었다가 경계로 돌아온다.
- Scrolline Deck: 진행률 0~1을 0.4초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [드래그 앤 드롭 · Drag and Drop](../drag-and-drop/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/Draggable/) (GSAP Standard License) · [motiondivision/motion](https://motion.dev/docs/react-drag) (MIT) · [motiondivision/motion](https://motion.dev/docs/react-transitions) (MIT) · [juliangarnier/anime](https://animejs.com/documentation/draggable) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
