# Nº 042 풀리시 리빌 · Foolish Reveal

> 클립 렌더 예정 / Clip rendering planned.

**요소가 크기를 바꾸며 여러 모서리를 축으로 차례로 회전해 정착한다.**

An element scales in while rotating around successive corner pivots.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 고급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 모서리 순환 회전 등장

## 선택 기준 / Selection

장난스럽고 예측하기 어려운 진입을 만든다. / Creates a playful, unpredictable entrance.

- 익살스러운 캐릭터 소품을 넣을 때 / Introduce a comic character prop.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 작은 선물 상자가 네 모서리를 차례로 축 삼아 회전한다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 모서리 변경으로 생기는 위치 점프를 확인한다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1000ms | 700~1400ms | 한 번의 동작 기준 |
| 총 회전 | 360deg | 180~360deg | 네 구간 분할 |
| 기준점 | 모서리 4곳 | 2~4곳 | 마지막 중앙 복원 |
| 시작 축척 | 0 | 0~0.2 | 최종 1 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  0%{transform-origin:0 0;transform:rotate(-360deg) scale(0);opacity:0} 25%{transform-origin:100% 0;transform:rotate(-270deg) scale(.4);opacity:1} 50%{transform-origin:100% 100%;transform:rotate(-180deg) scale(.7)} 75%{transform-origin:0 100%;transform:rotate(-90deg) scale(.9)} 100%{transform-origin:50% 50%;transform:rotate(0) scale(1);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 풀리시 리빌을 적용해. 지속 1000ms, 총 회전 360deg, 기준점 모서리 4곳, 시작 축척 0, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 풀리시 리빌 키프레임을 추가해. 지속 1000ms, 총 회전 360deg, 기준점 모서리 4곳, 시작 축척 0, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.5초·1초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Foolish Reveal to <target> in <file>. Implement the provided keyframes with 1000ms duration, total rotation 360deg, pivot four corners, initial scale 0, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Foolish Reveal keyframes to the styles for <target> in <file> using 1000ms duration, total rotation 360deg, pivot four corners, initial scale 0, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.5, and 1 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 풀리시 리빌를 `.hero`에 적용해. / Apply Foolish Reveal to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 풀리시 리빌의 지속 1000ms, 총 회전 360deg, 기준점 모서리 4곳, 시작 축척 0, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [miniMAC/magic](https://github.com/miniMAC/magic) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
