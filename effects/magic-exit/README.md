# Nº 047 매직 퇴장 · Magic Exit

> 클립 렌더 예정 / Clip rendering planned.

**요소가 한쪽으로 커지며 회전하고 화면 밖으로 사라진다.**

An element grows, rotates around an offset pivot, and leaves the frame.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 전환, 주목 끌기 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Magic Disappearance, 마술 회전 이탈

## 선택 기준 / Selection

극적인 제거와 장면 종료를 만든다. / Creates a dramatic removal or scene ending.

- 장난스러운 장면을 끝낼 때 / End a playful scene.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 마술 소품 카드가 우하단을 축으로 커지며 사라진다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 중요한 확인 메시지를 빠르게 제거하지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1000ms | 700~1400ms | 한 번의 동작 기준 |
| 회전 | 270deg | 180~270deg | 우하단 기준점 |
| 끝 축척 | 2 | 1.4~2 | 확대하며 퇴장 |
| 이동 거리 | 100% | 200px~100% | 요소 너비 기준 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
.effect { transform-origin: 100% 100%; }
@keyframes effect {
  from{transform:translateX(0) rotate(0) scale(1);opacity:1} to{transform:translateX(100%) rotate(270deg) scale(2);opacity:0}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 매직 퇴장을 적용해. 지속 1000ms, 회전 270deg, 끝 축척 2, 이동 거리 100%, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 매직 퇴장 키프레임을 추가해. 지속 1000ms, 회전 270deg, 끝 축척 2, 이동 거리 100%, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.5초·1초 시점을 캡처해 시작 상태, 중간 변화, 최종 퇴장를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Magic Exit to <target> in <file>. Implement the provided keyframes with 1000ms duration, rotation 270deg, final scale 2, travel distance 100%, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Magic Exit keyframes to the styles for <target> in <file> using 1000ms duration, rotation 270deg, final scale 2, travel distance 100%, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.5, and 1 seconds to verify the initial state, intermediate motion, and disappearance. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 매직 퇴장를 `.hero`에 적용해. / Apply Magic Exit to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 매직 퇴장의 지속 1000ms, 회전 270deg, 끝 축척 2, 이동 거리 100%, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [miniMAC/magic](https://github.com/miniMAC/magic) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
