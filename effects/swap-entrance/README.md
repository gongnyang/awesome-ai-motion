# Nº 055 스왑 등장 · Swap Entrance

> 클립 렌더 예정 / Clip rendering planned.

**큰 크기로 화면 밖에 있던 요소가 넓게 돌아 작아지며 제자리에 들어온다.**

An oversized off-screen element sweeps around and shrinks into position.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 큰 궤도 축소 진입

## 선택 기준 / Selection

과장된 교체와 깜짝 등장을 알린다. / Signals an exaggerated replacement or surprise arrival.

- 새 주인공 카드로 교체할 때 / Replace the hero card with a new one.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 큰 제품 카드가 넓게 돌아 들어와 작은 정규 카드로 정착한다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 겹치는 카드의 본문을 동시에 읽게 하지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1000ms | 700~1400ms | 한 번의 동작 기준 |
| 시작 축척 | 3 | 2~3 | 최종 1 |
| 가로 이동 | 700px | 400~900px | 중간 위치 180px,60px |
| 시작 회전 | -30deg | -45~-15deg | 우상단 기준점 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
.effect { transform-origin: 100% 0; }
@keyframes effect {
  0%{transform:translate(700px,-200px) rotate(-30deg) scale(3);opacity:0} 60%{transform:translate(180px,60px) rotate(-10deg) scale(1.4);opacity:1} 100%{transform:translate(0,0) rotate(0) scale(1);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 스왑 등장을 적용해. 지속 1000ms, 시작 축척 3, 가로 이동 700px, 시작 회전 -30deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 스왑 등장 키프레임을 추가해. 지속 1000ms, 시작 축척 3, 가로 이동 700px, 시작 회전 -30deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.5초·1초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Swap Entrance to <target> in <file>. Implement the provided keyframes with 1000ms duration, initial scale 3, horizontal travel 700px, initial rotation -30deg, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Swap Entrance keyframes to the styles for <target> in <file> using 1000ms duration, initial scale 3, horizontal travel 700px, initial rotation -30deg, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.5, and 1 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 스왑 등장를 `.hero`에 적용해. / Apply Swap Entrance to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 스왑 등장의 지속 1000ms, 시작 축척 3, 가로 이동 700px, 시작 회전 -30deg, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [miniMAC/magic](https://github.com/miniMAC/magic) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
