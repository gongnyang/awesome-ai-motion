# Nº 375 점선 흐름 · Dashed Flow

> 클립 렌더 예정 / Clip rendering planned.

**노드 사이 선이 그려진 뒤 점선 무늬가 한 방향으로 흐른다.**

A connector is revealed before its dash pattern moves in one direction.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | svg |

다른 이름 / Also known as: Connector Flow, 연결선 흐름, line-connector-draw, svg-icon-enrichment, SVG Dashed Flow, SVG 점선 흐름, Marching dashes

## 선택 기준 / Selection

데이터가 어디에서 어디로 전달되는지 파악한다. / Clarifies where information flows.

- 연결선을 600ms에 공개한 뒤 점선을 목적지 방향으로 흘린다. / Show the direction of data transfer.
- 데이터가 어디에서 어디로 전달되는지 파악한다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 연결선을 600ms에 공개한 뒤 점선을 목적지 방향으로 흘린다.
나쁜 예 / Bad: 점선이 왕복해 전달 방향을 알 수 없게 한다.
주의 / Avoid: 반복은 정수 패턴 길이만큼 이동해 연결한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 선 공개 | 600ms | 300~1000ms | 점선 흐름 전에 실행 |
| 점선 간격 | 8px/8px | 4px/4px~12px/12px | 한 패턴 16px |
| 흐름 주기 | 1200ms | 600~2000ms | 한 패턴 이동 기준 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}),L=reveal.getTotalLength();
gsap.set(reveal,{strokeDasharray:L,strokeDashoffset:L});
gsap.set(flow,{strokeDasharray:'8 8',opacity:0});
tl.to(reveal,{strokeDashoffset:0,duration:0.6,ease:'none'},0);
tl.set(reveal,{opacity:0},0.6).set(flow,{opacity:1},0.6);
tl.fromTo(flow,{strokeDashoffset:0},{strokeDashoffset:-16,duration:1.2,ease:'none'},0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 점선 흐름을 적용해. SVG path dashoffset을 선 공개와 점선 이동의 두 단계로 구동한다. 선 공개 600ms; 점선 간격 8px/8px; 흐름 주기 1200ms을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 점선 흐름을 적용해. SVG path dashoffset을 선 공개와 점선 이동의 두 단계로 구동한다. 선 공개 600ms; 점선 간격 8px/8px; 흐름 주기 1200ms을 적용한다. 0초, 0.9초, 1.8초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Dashed Flow on <target> in <file>. Reveal the connector over 600ms, then move an 8px dash and 8px gap pattern by exactly 16px over 1200ms. Use separate reveal and flow paths to preserve the dashed pattern. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Dashed Flow on <target> in <file>. Reveal the connector over 600ms, then move an 8px dash and 8px gap pattern by exactly 16px over 1200ms. Use separate reveal and flow paths to preserve the dashed pattern. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.9s, and 1.8s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 점선 흐름를 `.hero`에 적용해. / Apply Dashed Flow to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 점선 흐름 상태를 넣고 seek 시 1.8초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 선 공개 600ms; 점선 간격 8px/8px; 흐름 주기 1200ms을 싣고 연결선을 600ms에 공개한 뒤 점선을 목적지 방향으로 흘린다.
- Scrolline Deck: 진행률 0~1을 1.8초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [노드 연결망 구축 · Node-link Build](../graph-build/) · [경로 신호 빔 · Path Beam](../path-beam/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/06-shapes-strokes.md#line-connector-draw`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/connector-tree-cascade.html`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/connector-tree-cascade.meta.json`) (Apache-2.0) · local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/svg-icon-enrichment.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
