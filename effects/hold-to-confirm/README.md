# Nº 337 길게 눌러 확정 · Hold to Confirm

> 클립 렌더 예정 / Clip rendering planned.

**누른 동안 버튼 내부가 채워지고 끝에서 완료 표시로 바뀐다.**

A button fills while held and switches to a completion mark.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: Hold progress confirmation, 누르기 진행 확인

## 선택 기준 / Selection

의도적인 대기와 확정을 시각화한다. / Makes deliberate waiting and confirmation visible.

- 길게 눌러 확정으로 의도적인 대기와 확정을 시각화한다 때 / Use this effect when you need to communicate: Makes deliberate waiting and confirmation visible.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 확정 버튼이 1.2초 채워진 뒤 체크 표시로 바뀐다
나쁜 예 / Bad: 누르기를 중단했는데도 완료로 표시한다
주의 / Avoid: 누르기를 중단했는데도 완료로 표시한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1.2s | 0.72~1.8s | 1920x1080 시연 기준의 한 동작 시간 |
| 완료 팝 시간 | 200ms | 150~300ms | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.fill', {scaleX:0,transformOrigin:'left'});
tl.to('.fill', {scaleX:1,duration:1.2,ease:'none'}, 0);
tl.fromTo('.check', {scale:.8,opacity:0}, {scale:1,opacity:1,duration:.2,ease:'power2.out'}, 1.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 길게 눌러 확정을 적용해. 누른 동안 버튼 내부가 채워지고 끝에서 완료 표시로 바뀐다. 기본 지속 1.2초, 완료 팝 시간 200ms, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 길게 눌러 확정을 적용해. 기본 지속 1.2초, 완료 팝 시간 200ms, 이징 power2.out를 사용해. 0초, 0.6초, 1.6초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Hold to Confirm to <target> in <file>. A button fills while held and switches to a completion mark. Use a 1.2-second duration, a 200ms completion pop, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Hold to Confirm to <target> in the demonstration scene in <file>. Use a 1.2-second duration, a 200ms completion pop, and power2.out easing. Capture at 0, 0.6, and 1.6 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 길게 눌러 확정를 `.hero`에 적용해. / Apply Hold to Confirm to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 길게 눌러 확정 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 1.2초, 완료 팝 시간 200ms, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 1.2초, 완료 팝 시간 200ms, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 확정 버튼이 1.2초 채워진 뒤 체크 표시로 바뀐다.
- Scrolline Deck: 진행률 0~1을 1.2초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [막대 성장 · Bar Grow](../bar-grow/) · [아이콘 플라이트 · Icon Flight](../icon-flight/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-hold-to-confirm) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
