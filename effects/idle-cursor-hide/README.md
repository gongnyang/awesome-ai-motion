# Nº 340 정지 커서 숨김 · Idle Cursor Hide

> 클립 렌더 예정 / Clip rendering planned.

**움직이지 않는 커서가 일정 시간 뒤 작아지거나 흐려지고 다시 움직이면 나타난다.**

An idle cursor fades or shrinks and reappears when movement resumes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

## 선택 기준 / Selection

커서가 내용을 가리지 않으면서 행동 시작을 알린다. / Keeps content unobstructed and signals renewed interaction.

- 정지 커서 숨김으로 커서가 내용을 가리지 않으면서 행동 시작을 알린다 때 / Use this effect when you need to communicate: Keeps content unobstructed and signals renewed interaction.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 시연 커서가 1초 정지한 뒤 사라지고 조작 재개 때 나타난다
나쁜 예 / Bad: 커서가 사라져 클릭 시작 위치를 알 수 없다
주의 / Avoid: 커서가 사라져 클릭 시작 위치를 알 수 없다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.25s | 0.15~0.375s | 1920x1080 시연 기준의 한 동작 시간 |
| 정지 기준 | 1000ms | 700~1800ms | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.cursor', {opacity:1,scale:1});
tl.to('.cursor', {opacity:0,scale:.8,duration:.25,ease:'power2.out'}, 1);
tl.to('.cursor', {opacity:1,scale:1,duration:.15,ease:'power2.out'}, 1.8);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 정지 커서 숨김을 적용해. 움직이지 않는 커서가 일정 시간 뒤 작아지거나 흐려지고 다시 움직이면 나타난다. 기본 지속 0.25초, 정지 기준 1000ms, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 정지 커서 숨김을 적용해. 기본 지속 0.25초, 정지 기준 1000ms, 이징 power2.out를 사용해. 0초, 0.125초, 0.65초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Idle Cursor Hide to <target> in <file>. An idle cursor fades or shrinks and reappears when movement resumes. Use a 0.25-second duration, a 1000ms idle threshold, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Idle Cursor Hide to <target> in the demonstration scene in <file>. Use a 0.25-second duration, a 1000ms idle threshold, and power2.out easing. Capture at 0, 0.125, and 0.65 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 정지 커서 숨김를 `.hero`에 적용해. / Apply Idle Cursor Hide to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 정지 커서 숨김 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.25초, 정지 기준 1000ms, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.25초, 정지 기준 1000ms, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 시연 커서가 1초 정지한 뒤 사라지고 조작 재개 때 나타난다.
- Scrolline Deck: 진행률 0~1을 0.25초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [커서 추종 · Cursor Follow](../cursor-follow/) · [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/)

출처 / Sources: [Screen Studio](https://screen.studio/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
