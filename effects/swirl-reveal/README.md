# Nº 056 스월 리빌 · Swirl Reveal

> 클립 렌더 예정 / Clip rendering planned.

**요소가 여러 바퀴 회전하며 축소 또는 확대되어 나타난다.**

An element spins through multiple turns while scaling into view.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 강조 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 소용돌이 리빌, Hole Disappearance, 구멍으로 말려 들어가기, Spin grow entrance, 회전하며 커지는 등장, SpinInFromNothing

## 선택 기준 / Selection

회오리 같은 강한 진입을 만든다. / Creates a forceful, vortex-like entrance.

- 마법 효과 아이콘을 등장시킬 때 / Introduce a magic-effect icon.
- 장면의 주인공 한 요소에 시선을 모을 때 / Focus attention on one main element in a scene.

좋은 예 / Good: 작은 별 아이콘이 한 바퀴 반 돌며 제 크기가 된다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 읽을 위치와 시선을 계속 바꾸게 만든다.
주의 / Avoid: 읽어야 하는 문장에는 쓰지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 700ms | 489~979ms | 한 번의 동작 기준 |
| 시작 회전 | -540deg | -540~-180deg | 중앙 기준 |
| 시작 축척 | 0 | 0~0.3 | 회전과 동시 확대 |

이징 / Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

## 구현 / Implementation (GSAP)

```js
.effect { animation: effect 700ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes effect {
  from{transform:rotate(-540deg) scale(0);opacity:0} to{transform:rotate(0) scale(1);opacity:1}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 스월 리빌을 적용해. 지속 700ms, 시작 회전 -540deg, 시작 축척 0, 이징 cubic-bezier(0.22, 1, 0.36, 1)으로 위 키프레임을 구현하고 최종 상태를 유지해. 동작 줄이기 설정에서는 최종 상태를 바로 보여 줘.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 스월 리빌 키프레임을 추가해. 지속 700ms, 시작 회전 -540deg, 시작 축척 0, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 적용하고 0초·0.35초·0.7초 시점을 캡처해 시작 상태, 중간 변화, 최종 정착를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Swirl Reveal to <target> in <file>. Implement the provided keyframes with 700ms duration, initial rotation -540deg, initial scale 0, easing cubic-bezier(0.22, 1, 0.36, 1). Preserve the final state and show it immediately when reduced motion is enabled.
```

### English · Codex
```text
Add Swirl Reveal keyframes to the styles for <target> in <file> using 700ms duration, initial rotation -540deg, initial scale 0, easing cubic-bezier(0.22, 1, 0.36, 1). Capture at 0, 0.35, and 0.7 seconds to verify the initial state, intermediate motion, and settled state. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 스월 리빌를 `.hero`에 적용해. / Apply Swirl Reveal to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 0.7초 구간을 seek한다. 시작과 종료 상태를 명시한다.
- ReelForge: 씬 워커 브리프에 스월 리빌의 지속 700ms, 시작 회전 -540deg, 시작 축척 0, 이징 cubic-bezier(0.22, 1, 0.36, 1)을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.7초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [miniMAC/magic](https://github.com/miniMAC/magic) (MIT) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/growing.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
