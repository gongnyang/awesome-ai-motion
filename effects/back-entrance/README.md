# Nº 028 백 등장 · Back Entrance

> 클립 렌더 예정 / Clip rendering planned.

**작고 흐린 요소가 멀리서 이동한 뒤 마지막에 원래 크기와 불투명도로 정착한다.**

A small translucent element travels in, then settles at full size and opacity.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Back Entrance and Exit, 뒤에서 밀려오는 등장

## 선택 기준 / Selection

큰 이동 뒤의 정착을 강조한다. / Emphasizes arrival after a long movement.

- 주인공 카드가 먼 곳에서 도착할 때 / Bring a hero card in from a distance.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 작은 제품 카드가 이동을 끝낸 뒤 원래 크기로 정착한다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 본문 전체를 먼 거리로 이동시키지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1000ms | 700~1400ms | 한 번의 동작 기준 |
| 이동 거리 | 1200px | 600~1400px | 1920x1080 기준 |
| 시작 축척 | 0.7 | 0.6~0.85 | 이동 후 크기 복원 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  0%{transform:translateX(-1200px) scale(.7);opacity:.7} 70%{transform:translateX(0) scale(.7);opacity:.7} 100%{transform:translateX(0) scale(1);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 백 등장을 적용해. 지속 1000ms, 이동 거리 1200px, 시작 축척 0.7, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 백 등장 키프레임을 추가해. 지속 1000ms, 이동 거리 1200px, 시작 축척 0.7, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.5초·1초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Back Entrance to <target> in <file>. Implement the provided keyframes with 1000ms duration, travel distance 1200px, initial scale 0.7, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Back Entrance keyframes to the styles for <target> in <file> using 1000ms duration, travel distance 1200px, initial scale 0.7, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.5, and 1 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 백 등장를 `.hero`에 적용해. / Apply Back Entrance to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 백 등장의 지속 1000ms, 이동 거리 1200px, 시작 축척 0.7, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [miniMAC/magic](https://github.com/miniMAC/magic) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
