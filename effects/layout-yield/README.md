# Nº 344 레이아웃 자리 양보 · Layout Yield

> 클립 렌더 예정 / Clip rendering planned.

**영상이나 카드가 옆으로 비켜나고 비운 자리에 큰 숫자나 문장이 등장한다.**

An existing layer moves aside to make room for a new focal message.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 기본 | 강조 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: Layer yield pivot, 층 이동 초점 양도

## 선택 기준 / Selection

시연에서 근거 수치, 설명으로 관심을 넘긴다. / Transfers attention from a demonstration to its supporting explanation.

- 시연에서 성과 수치로 초점을 넘길 때 / Shift attention from a demo to a result metric.
- 카드 옆에 설명 공간을 만들 때 / Make room for an explanation beside a card.

좋은 예 / Good: 영상 카드가 왼쪽 560px로 이동하고 빈자리에 수치가 나온다
나쁜 예 / Bad: 새 문장이 기존 카드 위에 겹쳐 양쪽 정보가 모두 가려진다
주의 / Avoid: 이동 후에도 기존 대상의 식별 가능한 부분을 남긴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기존 층 이동 | 600ms | 450~800ms | 공간 확보 |
| 신규 등장 | 400ms | 250~600ms | 빈 공간 공개 |
| 이동 거리 | 560px | 360~720px | 공통 앵커 기준 |
| 등장 시작 | 300ms | 250~500ms | 기존 이동과 겹침 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.demo-card',{x:-560,duration:0.6,ease:'power3.inOut'},0);
tl.fromTo('.evidence',{x:32,opacity:0},{x:0,opacity:1,duration:0.4,ease:'power3.out'},0.3);
tl.to({}, {duration:1},0.7);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 레이아웃 자리 양보을 적용한다. 기존 카드를 600ms에 왼쪽 560px 옮기고 공통 앵커의 새 설명을 300ms부터 400ms 동안 공개한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 레이아웃 자리 양보 장면에 적용한다. 기존 카드를 600ms에 왼쪽 560px 옮기고 공통 앵커의 새 설명을 300ms부터 400ms 동안 공개한다. 0.17초·0.45초·0.90초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Layout Yield to <target> in <file>. Move the existing card 560px left over 600ms and reveal the new explanation at the shared anchor over 400ms starting at 300ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Layout Yield in the scene for <target> in <file>. Move the existing card 560px left over 600ms and reveal the new explanation at the shared anchor over 400ms starting at 300ms. Capture at 0.17s, 0.45s, 0.90s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 레이아웃 자리 양보를 `.hero`에 적용해. / Apply Layout Yield to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 레이아웃 자리 양보의 초기 상태와 종료 상태를 함께 기록하고 0.70초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 레이아웃 자리 양보 대상 선택자와 기존 층 이동 600ms, 신규 등장 400ms, 이동 거리 560px를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.70초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [카운트업 · Count-up](../count-up/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/video-text-pivot.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
