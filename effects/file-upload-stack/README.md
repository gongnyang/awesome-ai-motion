# Nº 336 파일 업로드 스택 · File Upload Stack

> 클립 렌더 예정 / Clip rendering planned.

**작은 파일 면이 떠오르며 카드 목록으로 쌓이고 진행 표시가 붙는다.**

File cards lift into a stack with upload progress indicators.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | css |

다른 이름 / Also known as: 업로드 카드 쌓기

## 선택 기준 / Selection

선택한 파일과 업로드 진행을 보여 준다. / Shows selected files and upload status.

- 파일 업로드 스택으로 선택한 파일과 업로드 진행을 보여 준다 때 / Use this effect when you need to communicate: Shows selected files and upload status.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 선택한 파일 세 장이 24px 올라와 목록에 쌓인다
나쁜 예 / Bad: 업로드 완료 전에 진행 막대를 100%로 채운다
주의 / Avoid: 업로드 완료 전에 진행 막대를 100%로 채운다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.5s | 0.3~0.75s | 1920x1080 시연 기준의 한 동작 시간 |
| 항목 시간차 | 80ms | 40~120ms | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.file { animation: enter 500ms ease-out both; animation-delay: calc(var(--i) * 80ms); }
@keyframes enter {
  from { transform: translateY(24px) scale(.96); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 파일 업로드 스택을 적용해. 작은 파일 면이 떠오르며 카드 목록으로 쌓이고 진행 표시가 붙는다. 기본 지속 0.5초, 항목 시간차 80ms, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해. CSS 애니메이션은 정지 상태와 음수 지연으로 seek를 구현해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 파일 업로드 스택을 적용해. 기본 지속 0.5초, 항목 시간차 80ms, 이징 power2.out를 사용해. 0초, 0.25초, 0.9초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply File Upload Stack to <target> in <file>. File cards lift into a stack with upload progress indicators. Use a 0.5-second duration, an 80ms item stagger, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state. For CSS animation, implement seeking with a paused play state and a negative delay.
```

### English · Codex
```text
Apply File Upload Stack to <target> in the demonstration scene in <file>. Use a 0.5-second duration, an 80ms item stagger, and power2.out easing. Capture at 0, 0.25, and 0.9 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 파일 업로드 스택를 `.hero`에 적용해. / Apply File Upload Stack to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 파일 업로드 스택 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.5초, 항목 시간차 80ms, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.5초, 항목 시간차 80ms, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 선택한 파일 세 장이 24px 올라와 목록에 쌓인다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [스태거 · Stagger](../stagger/) · [막대 성장 · Bar Grow](../bar-grow/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/file-upload) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
