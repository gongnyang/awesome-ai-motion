# Nº 323 카드 스택 셔플 · Card Stack Shuffle

> 클립 렌더 예정 / Clip rendering planned.

**뒤 카드가 위를 넘어 맨 앞으로 오고 나머지 카드는 눌렸다 재정렬된다.**

A rear card travels over the stack and settles at the front.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 순서·흐름 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: Stack shuffle, 카드 더미 섞기, Rotating Card Stack, 카드 스택 순환

## 선택 기준 / Selection

순서 변화와 카드의 질량을 보여준다. / Makes reordering and card weight perceptible.

- 겹친 카드의 순서를 바꿀 때 / Reorder overlapping cards.
- 추천 항목이 순환하는 모습을 보여줄 때 / Show cycling recommendations.

좋은 예 / Good: 뒤 카드가 위로 180px 나갔다가 앞에 오고 나머지 카드가 재정렬된다
나쁜 예 / Bad: 교차 순간 깊이 순서가 바뀌어 카드가 순간적으로 관통한다
주의 / Avoid: 깊이 교체는 카드가 겹치지 않는 구간에 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 카드 수 | 4 | 3~5 | 내용 식별 가능한 수 |
| 이동 | 900ms | 700~1200ms | 들기와 정착 포함 |
| 압축 | 5% | 2~6% | 나머지 스택 배율 |
| 들기 거리 | 180px | 120~240px | 겹침을 벗어나는 거리 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.rear-card',{y:-180,rotation:-8,duration:0.45,ease:'power2.out'},0);
tl.to('.stack-rest',{scale:0.95,duration:0.45},0);
tl.set('.rear-card',{zIndex:10},0.45);
tl.to('.rear-card',{y:0,rotation:0,duration:0.45,ease:'power2.inOut'},0.45);
tl.to('.stack-rest',{scale:1,y:24,duration:0.45},0.45);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 카드 스택 셔플을 적용한다. 카드 4개 중 뒤 카드를 180px 들어 올려 450ms에 깊이 순서를 바꾸고 나머지는 5% 압축 후 총 900ms에 정착시킨다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 카드 스택 셔플 장면에 적용한다. 카드 4개 중 뒤 카드를 180px 들어 올려 450ms에 깊이 순서를 바꾸고 나머지는 5% 압축 후 총 900ms에 정착시킨다. 0.23초·0.59초·1.10초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Card Stack Shuffle to <target> in <file>. Lift the rear of four cards by 180px, swap its depth at 450ms, compress the remaining stack by 5%, and settle everything by 900ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Card Stack Shuffle in the scene for <target> in <file>. Lift the rear of four cards by 180px, swap its depth at 450ms, compress the remaining stack by 5%, and settle everything by 900ms. Capture at 0.23s, 0.59s, 1.10s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 카드 스택 셔플를 `.hero`에 적용해. / Apply Card Stack Shuffle to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 카드 스택 셔플의 초기 상태와 종료 상태를 함께 기록하고 0.90초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 카드 스택 셔플 대상 선택자와 카드 수 4, 이동 900ms, 압축 5%를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.90초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [캐러셀 슬라이드 · Carousel Slide](../carousel-slide/) · [레이아웃 재배치 · Layout Reflow](../layout-reflow/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spring-stack-shuffle/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/keyframe-scrub-stack/registry-item.json) (Apache-2.0) · [ui.aceternity.com](https://ui.aceternity.com/components/card-stack) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
