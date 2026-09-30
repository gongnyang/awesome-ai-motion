# Nº 037 타원 궤도 등장 · Elliptic Entrance

> 클립 렌더 예정 / Clip rendering planned.

**요소가 3D로 기울고 찌그러진 상태에서 타원 곡선을 따라 정면으로 들어온다.**

A tilted scaled element follows an elliptical-style path into a front-facing position.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 고급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 타원 궤도 진입

## 선택 기준 / Selection

입체적인 이동 경로를 느끼게 한다. / Suggests a three-dimensional travel path.

- 카드가 곡선 경로로 도착할 때 / Bring a card in along a curved path.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 제품 카드가 위쪽에서 휘어 내려오며 정면을 향한다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 정밀한 궤도가 필요하면 위치 구간을 더 나눈다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 700ms | 489~979ms | 한 번의 동작 기준 |
| 가로 이동 | 500px | 250~700px | 중간 위치 120px,60px |
| 시작 회전 | 60deg | 30~60deg | 원근 거리 800px |
| 시작 축척 | 0.1 | 0.1~0.4 | 타원 궤도의 구간 근사 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 700ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  0%{transform:perspective(800px) translate(500px,-200px) rotateY(60deg) scale(.1);opacity:0} 60%{transform:perspective(800px) translate(120px,60px) rotateY(20deg) scale(.8);opacity:1} 100%{transform:perspective(800px) translate(0,0) rotateY(0) scale(1);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 타원 궤도 등장을 적용해. 지속 700ms, 가로 이동 500px, 시작 회전 60deg, 시작 축척 0.1, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 타원 궤도 등장 키프레임을 추가해. 지속 700ms, 가로 이동 500px, 시작 회전 60deg, 시작 축척 0.1, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.35초·0.7초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Elliptic Entrance to <target> in <file>. Implement the provided keyframes with 700ms duration, horizontal travel 500px, initial rotation 60deg, initial scale 0.1, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Elliptic Entrance keyframes to the styles for <target> in <file> using 700ms duration, horizontal travel 500px, initial rotation 60deg, initial scale 0.1, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.35, and 0.7 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 타원 궤도 등장를 `.hero`에 적용해. / Apply Elliptic Entrance to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.7초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 타원 궤도 등장의 지속 700ms, 가로 이동 500px, 시작 회전 60deg, 시작 축척 0.1, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.7초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
