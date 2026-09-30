# Nº 324 캐러셀 슬라이드 · Carousel Slide

> 클립 렌더 예정 / Clip rendering planned.

**카드 트랙이 한 방향으로 이동해 다음 항목을 중앙에 놓고 감속하며 멈춘다.**

A card rail decelerates into the next centered selection.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 기본 | 순서·흐름 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: Card rail throw, 카드 레일 던지기, Animated Carousel, 슬라이더 카드 교체

## 선택 기준 / Selection

빠른 탐색과 선택의 착지를 보여준다. / Communicates browsing direction and a settled choice.

- 제품 카드 사이를 탐색할 때 / Browse product cards.
- 선택한 항목을 중앙에 강조할 때 / Emphasize the selected item in the center.

좋은 예 / Good: 폭 360px와 간격 24px를 합친 384px만큼 레일이 이동한다
나쁜 예 / Bad: 레일이 멈춘 뒤 강조 카드가 바뀌어 선택이 어긋난다
주의 / Avoid: 자동 넘김 간격을 읽기 시간보다 짧게 잡지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 | 600ms | 400~800ms | 한 항목 전환 |
| 카드 폭 | 360px | 280~480px | 1920x1080 기준 |
| 간격 | 24px | 16~40px | 카드 사이 여백 |
| 중심 배율 | 1.1 | 1.04~1.12 | 선택 카드 확대 |
| 유지 | 1500ms | 1200~3000ms | 정착 후 읽기 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
tl.to('.rail',{x:-384,duration:0.6,ease:'power3.out'},0);
tl.to('.card-current',{scale:1,duration:0.6},0);
tl.to('.card-next',{scale:1.1,duration:0.6},0);
tl.to({}, {duration:1.5},0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 캐러셀 슬라이드을 적용한다. 폭 360px와 간격 24px의 레일을 600ms에 384px 옮기고 새 중심 카드를 1.1배로 확대해 1500ms 유지한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 캐러셀 슬라이드 장면에 적용한다. 폭 360px와 간격 24px의 레일을 600ms에 384px 옮기고 새 중심 카드를 1.1배로 확대해 1500ms 유지한다. 0.53초·1.37초·2.30초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Carousel Slide to <target> in <file>. Move a rail of 360px cards with 24px gaps by 384px in 600ms, scale the new centered card to 1.1, and hold for 1500ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Carousel Slide in the scene for <target> in <file>. Move a rail of 360px cards with 24px gaps by 384px in 600ms, scale the new centered card to 1.1, and hold for 1500ms. Capture at 0.53s, 1.37s, 2.30s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 캐러셀 슬라이드를 `.hero`에 적용해. / Apply Carousel Slide to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 캐러셀 슬라이드의 초기 상태와 종료 상태를 함께 기록하고 2.10초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 캐러셀 슬라이드 대상 선택자와 이동 600ms, 카드 폭 360px, 간격 24px를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 2.10초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [활성 표시 이동 · Active Indicator Glide](../active-indicator-glide/) · [스크롤 스냅 · Scroll Snap](../scroll-snap/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/velocity-throw-snap/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/screen-flow-carousel/registry-item.json) (Apache-2.0) · [motion.dev examples](https://motion.dev/examples/react-carousel) (unknown) · [pmndrs/react-spring](https://www.react-spring.dev/examples) (MIT) · [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
