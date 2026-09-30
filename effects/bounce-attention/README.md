# Nº 075 통통 튀기 · Bounce Attention

> 클립 렌더 예정 / Clip rendering planned.

**요소가 제자리에서 위아래로 튀다가 원래 위치로 돌아온다**

An element bounces up and down in place, then returns to its original position.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 주목 끌기, 피드백 | 웹 UI, 숏폼, 제품 시연 | css |

## 선택 기준 / Selection

활기와 선택 대상에 대한 주의를 만든다. 클릭해 달라는 신호로도 쓴다 / Creates liveliness and draws attention to a selectable target. It also works as a cue to click.

- 버튼이나 알림 아이콘을 눌러 보라고 유도할 때 / Nudge people to press a button or notification icon.
- 목록에서 새로 추가된 항목을 알릴 때 / Announce a newly added list item.

좋은 예 / Good: 900ms 동안 높이 24px로 3번 튀며 진폭이 줄고 원위치에 정확히 돌아온다. 3초 뒤 한 번 반복한다
나쁜 예 / Bad: 1초 간격으로 무한 반복해 산만하고, 모든 버튼이 함께 튄다
주의 / Avoid: 동시에 튀는 요소는 하나만 · 무한 반복 금지(3회 이하)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 700~1100ms |  |
| 높이 | 24px | 16~32px | 첫 진폭 |
| 튕김 | 3회 | 2~4회 | 진폭은 매번 0.55배 |
| 이징 | ease-out | power2.out | 상승은 out, 하강은 in |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
[24, 13, 7, 0].forEach((h, i) => {
  tl.to('.btn', { y: -h, duration: 0.12, ease: 'power2.out' }, 0.3 + i * 0.24)
    .to('.btn', { y: 0, duration: 0.12, ease: 'power2.in' }, 0.42 + i * 0.24);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 버튼에 주의를 끄는 통통 튀기를 넣어줘. 0.3초부터 높이 24px, 13px, 7px 순으로 3번 튀고, 각 상승은 0.12초 power2.out, 하강은 0.12초 power2.in으로 하고 마지막은 y 0에 정확히 멈추게 해.
```

### 한국어 · Codex
```text
<파일>에 bounce attention을 구현해. 높이 [24, 13, 7], 상승 0.12s power2.out, 하강 0.12s power2.in, 시작 0.3초. 0.42초, 0.66초, 0.9초, 1.2초를 캡처해 높이가 감소하는지, 1.2초에 y가 0인지 확인해.
```

### English · Claude Code
```text
Add an attention bounce to the button in <target>. From 0.3 seconds bounce three times with heights 24px, 13px and 7px, each rise 0.12s power2.out and each fall 0.12s power2.in, ending exactly at y 0.
```

### English · Codex
```text
Implement bounce attention in <file>: heights [24, 13, 7], rise 0.12s power2.out, fall 0.12s power2.in, start 0.3s. Capture at 0.42s, 0.66s, 0.9s and 1.2s and verify the heights decrease and y is 0 at 1.2s.
```

예시 / Example: 통통 튀기를 `.hero`에 적용해. / Apply Bounce Attention to `.hero`.

## 적용 / Application

- HyperFrames: 상승/하강 tween을 쌍으로 쌓는다. repeat -1은 쓰지 않고 횟수를 명시한다
- ReelForge: 브리프에 높이, 튕김 횟수, 대상 요소, 반복 시각을 싣는다
- Scrolline Deck: 진행률의 한 구간에서만 재생하고 구간 밖에서는 y 0으로 고정한다. scrub 중 하강 시 ease-in이 어색하니 linear를 허용한다

조합 / Pair with: [핫스팟 펄스 · Hotspot Pulse](../hotspot-pulse/) · [워블 · Wobble](../wobble/) · [타다 · Tada](../tada/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
