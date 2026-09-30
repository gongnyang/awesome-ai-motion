# Nº 026 동작 중첩 · Temporal Overlap

> 클립 렌더 예정 / Clip rendering planned.

**첫 요소가 멈추기 전에 다음 요소의 움직임이 시작되어 동작이 물결처럼 이어지는 순서**

The next element starts moving before the first has stopped, so motion flows in a wave.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 순서·흐름, 분위기 | 설명 영상, 숏폼, 웹 UI | gsap |

다른 이름 / Also known as: Overlapping choreography, 겹치는 동작 순서, 시간 겹침

## 선택 기준 / Selection

서로 연결된 행동과 유려한 흐름. 딱딱한 순차 재생보다 자연스럽다 / Connected actions and fluid flow. Smoother than strict sequencing.

- 카드·아이콘 여러 개가 차례로 들어오되 끊기지 않게 하고 싶을 때 / When cards or icons enter in turn without a break
- 한 요소의 도착이 다음 요소의 출발을 이끄는 연쇄를 표현할 때 / When one element's arrival should trigger the next in a chain

좋은 예 / Good: 카드 3장이 각각 0.6초 동안 들어오되 다음 카드가 앞 카드 종료 0.15초 전에 출발한다
나쁜 예 / Bad: 겹침이 커서 전부 동시에 움직이는 것처럼 보이거나, 겹침이 없어 순차 재생과 차이가 없다
주의 / Avoid: 겹침은 개별 길이의 15~35% · 3개 이상 연쇄일 때는 겹침을 일정하게 · 읽어야 할 텍스트가 든 카드는 겹침을 줄인다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 개별 길이 | 0.6s | 0.4~0.9s | 한 요소의 tween |
| 겹침 | 0.15s | 0.1~0.25s | 앞 요소 종료 전 시작 시간 |
| 이동 거리 | 40px | 24~80px | 1920x1080 기준 |
| 이징 | power3.out | power2~power4.out | 도착이 부드럽게 |

## 구현 / Implementation (GSAP)

```js
['.c1', '.c2', '.c3'].forEach((s, i) => tl.from(s, { opacity: 0, y: 40, duration: 0.6, ease: 'power3.out' }, 0.3 + i * (0.6 - 0.15)));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 카드 .c1, .c2, .c3가 겹치는 순서로 들어오게 해줘. 각 카드는 opacity 0, y +40px에서 0.6초 power3.out으로 나타나고, 다음 카드는 앞 카드 종료 0.15초 전에 시작해. 시작은 0.3초. paused 타임라인 하나로 position 값을 계산해 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 temporal-overlap을 적용해. forEach에서 from({opacity 0, y 40}, 0.6s, power3.out)을 position 0.3+i*0.45에 건다. 0.5초·0.8초·1.4초를 캡처해 카드 i가 끝나기 전에 i+1이 움직이기 시작했는지 확인해.
```

### English · Claude Code
```text
Have cards .c1, .c2 and .c3 of <target> enter with overlap in GSAP. Each animates from opacity 0, y +40px over 0.6s with power3.out, and the next starts 0.15s before the previous ends. Start at 0.3s. Compute positions on one paused timeline.
```

### English · Codex
```text
Apply temporal-overlap to <target> in <file>. In forEach add from({opacity 0, y 40}, 0.6s, power3.out) at position 0.3 + i*0.45. Capture at 0.5s, 0.8s and 1.4s to check that item i+1 starts moving before item i has finished.
```

예시 / Example: 동작 중첩를 `.hero`에 적용해. / Apply Temporal Overlap to `.hero`.

## 적용 / Application

- HyperFrames: position 인자를 i*(길이-겹침)으로 계산해 한 paused 타임라인에 배치한다. 겹침 값 하나로 리듬을 바꿀 수 있다
- ReelForge: 브리프에 개별 길이·겹침·개수를 싣는다. 겹침을 0으로 두면 순차 재생과 같다
- Scrolline Deck: scrub에서는 각 요소 진행률 구간을 서로 겹치게 정한다(예: 0~0.5, 0.35~0.85). ease-out 사용

조합 / Pair with: [오버랩 · Overlapping Action](../overlapping-action/) · [순차 동작 · Action Sequence](../action-sequence/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/GSAP/Timeline/) (GSAP Standard License) · motion dictionary 1-principles.md#5. 타이밍·간격·리듬 기본기 (own) · [motiondivision/motion](https://motion.dev/docs/animate) (MIT) · [pmndrs/react-spring](https://www.react-spring.dev/docs/components/use-chain) (MIT) · [juliangarnier/anime](https://animejs.com/documentation/timeline) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
