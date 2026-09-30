# Nº 339 아이콘 플라이트 · Icon Flight

> 클립 렌더 예정 / Clip rendering planned.

**버튼 내부 아이콘이 위로 떠오르거나 아래로 떨어지며 사라진다.**

An icon lifts or drops out of a button as it fades.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | css |

다른 이름 / Also known as: 아이콘 날아가기

## 선택 기준 / Selection

전송과 실행 완료를 시각화한다. / Visualizes sending or completion.

- 아이콘 플라이트으로 전송과 실행 완료를 시각화한다 때 / Use this effect when you need to communicate: Visualizes sending or completion.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 전송 아이콘이 24px 위로 떠나고 완료 아이콘이 나타난다
나쁜 예 / Bad: 전송 실패에도 성공 아이콘을 표시한다
주의 / Avoid: 전송 실패에도 성공 아이콘을 표시한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.5s | 0.3~0.75s | 1920x1080 시연 기준의 한 동작 시간 |
| 이동 거리 | 24px | 16~40px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.icon { animation: flight 500ms ease-out both; }
@keyframes flight {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-24px); opacity: 0; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 아이콘 플라이트을 적용해. 버튼 내부 아이콘이 위로 떠오르거나 아래로 떨어지며 사라진다. 기본 지속 0.5초, 이동 거리 24px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해. CSS 애니메이션은 정지 상태와 음수 지연으로 seek를 구현해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 아이콘 플라이트을 적용해. 기본 지속 0.5초, 이동 거리 24px, 이징 power2.out를 사용해. 0초, 0.25초, 0.9초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Icon Flight to <target> in <file>. An icon lifts or drops out of a button as it fades. Use a 0.5-second duration, 24px travel, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state. For CSS animation, implement seeking with a paused play state and a negative delay.
```

### English · Codex
```text
Apply Icon Flight to <target> in the demonstration scene in <file>. Use a 0.5-second duration, 24px travel, and power2.out easing. Capture at 0, 0.25, and 0.9 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 아이콘 플라이트를 `.hero`에 적용해. / Apply Icon Flight to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 아이콘 플라이트 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.5초, 이동 거리 24px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.5초, 이동 거리 24px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 전송 아이콘이 24px 위로 떠나고 완료 아이콘이 나타난다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [길게 눌러 확정 · Hold to Confirm](../hold-to-confirm/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
