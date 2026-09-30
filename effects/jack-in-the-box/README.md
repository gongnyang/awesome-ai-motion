# Nº 045 잭 인 더 박스 · Jack in the Box

> 클립 렌더 예정 / Clip rendering planned.

**요소가 작고 기울어진 상태에서 갑자기 커진 뒤 좌우 회전하며 안정된다.**

An element pops up from a tiny tilted state and settles through alternating rotations.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 상자에서 튀어나오기

## 선택 기준 / Selection

새 대상의 탄생과 놀라움을 준다. / Suggests a new arrival and surprise.

- 보상 아이콘을 공개할 때 / Reveal a reward icon.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 획득한 선물이 작게 시작해 커지고 좌우로 정착한다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 모든 목록 항목에 반복하지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1000ms | 700~1400ms | 한 번의 동작 기준 |
| 시작 축척 | 0.1 | 0.1~0.3 | 하단 중앙 기준점 |
| 시작 회전 | 30deg | 15~30deg | 반동 -10deg와 5deg |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
.effect { transform-origin: 50% 100%; }
@keyframes effect {
  0%{transform:scale(.1) rotate(30deg);opacity:0} 55%{transform:scale(1) rotate(-10deg);opacity:1} 75%{transform:rotate(5deg)} 100%{transform:rotate(0)}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 잭 인 더 박스을 적용해. 지속 1000ms, 시작 축척 0.1, 시작 회전 30deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 잭 인 더 박스 키프레임을 추가해. 지속 1000ms, 시작 축척 0.1, 시작 회전 30deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.5초·1초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Jack in the Box to <target> in <file>. Implement the provided keyframes with 1000ms duration, initial scale 0.1, initial rotation 30deg, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Jack in the Box keyframes to the styles for <target> in <file> using 1000ms duration, initial scale 0.1, initial rotation 30deg, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.5, and 1 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 잭 인 더 박스를 `.hero`에 적용해. / Apply Jack in the Box to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 잭 인 더 박스의 지속 1000ms, 시작 축척 0.1, 시작 회전 30deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
