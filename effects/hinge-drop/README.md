# Nº 043 힌지 드롭 · Hinge Drop

> 클립 렌더 예정 / Clip rendering planned.

**요소가 모서리에 매달려 흔들리다가 아래로 떨어져 사라진다.**

An element swings from a corner, then drops out of view.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 전환, 주목 끌기 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 경첩 매달림 낙하, Text Hinge Drop, 텍스트 경첩 낙하

## 선택 기준 / Selection

실패나 제거를 익살스럽게 알린다. / Gives failure or removal a comic tone.

- 가벼운 게임 실패를 표현할 때 / Express a lighthearted game failure.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 게임 배지가 좌상단에 매달려 흔들린 뒤 아래로 떨어진다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 결제 실패 같은 중요한 오류에는 쓰지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1600ms | 1120~2240ms | 한 번의 동작 기준 |
| 최대 회전 | 70deg | 45~75deg | 좌상단 기준점 |
| 낙하 거리 | 700px | 500~1100px | 마지막 15%에 낙하 |
| 흔들림 | 3회 | 2~3회 | 고정 키프레임 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
.effect { transform-origin: 0 0; }
@keyframes effect {
  0%{transform:rotate(0)} 20%,50%,75%{transform:rotate(70deg)} 35%,65%,85%{transform:rotate(50deg);opacity:1} 100%{transform:translateY(700px) rotate(70deg);opacity:0}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 힌지 드롭을 적용해. 지속 1600ms, 최대 회전 70deg, 낙하 거리 700px, 흔들림 3회, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 힌지 드롭 키프레임을 추가해. 지속 1600ms, 최대 회전 70deg, 낙하 거리 700px, 흔들림 3회, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.8초·1.6초 시점을 캡처해 시작 상태, 중간 변화, 최종 퇴장를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Hinge Drop to <target> in <file>. Implement the provided keyframes with 1600ms duration, maximum rotation 70deg, drop distance 700px, swings 3, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Hinge Drop keyframes to the styles for <target> in <file> using 1600ms duration, maximum rotation 70deg, drop distance 700px, swings 3, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.8, and 1.6 seconds to verify the initial state, intermediate motion, and disappearance. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 힌지 드롭를 `.hero`에 적용해. / Apply Hinge Drop to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1.6초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 힌지 드롭의 지속 1600ms, 최대 회전 70deg, 낙하 거리 700px, 흔들림 3회, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.6초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [jschr/textillate](https://github.com/jschr/textillate) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
