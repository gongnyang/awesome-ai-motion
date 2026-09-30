# Nº 357 벡터 펜 시연 · Vector Pen Demo

> 클립 렌더 예정 / Clip rendering planned.

**점이 찍히고 곡선과 핸들이 차례로 나타나 선택 상자가 완성된다.**

Anchors, a Bézier curve, handles, and a selection frame appear in sequence.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 설명 | 설명 영상, 제품 시연, 웹 UI | svg |

## 선택 기준 / Selection

곡선을 설계하는 도구와 조작 원리를 보여준다. / Explains how vector drawing tools construct a curve.

- 벡터 편집기 기능을 소개할 때 / Introduce a vector editor.
- 베지어 곡선의 제어점을 설명할 때 / Explain Bézier control points.

좋은 예 / Good: 500ms 간격으로 앵커가 찍히고 곡선과 핸들, 선택 상자가 순서대로 나온다
나쁜 예 / Bad: 핸들이 곡선과 연결되지 않아 제어 관계를 알 수 없다
주의 / Avoid: SVG 좌표계와 커서 좌표계를 혼용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점 간격 | 500ms | 350~800ms | 앵커 3개 |
| 선 공개 | 700ms | 500~1000ms | 경로 전체 |
| 핸들 공개 | 250ms | 180~400ms | 제어 관계 |
| 앵커 지름 | 12px | 8~16px | 1920x1080 기준 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const path = document.querySelector('.curve');
const length = path.getTotalLength();
gsap.set(path,{strokeDasharray:length,strokeDashoffset:length});
tl.fromTo('.anchor',{opacity:0},{opacity:1,duration:0.1,stagger:0.5},0);
tl.to(path,{strokeDashoffset:0,duration:0.7,ease:'none'},1.1);
tl.fromTo('.handle',{opacity:0},{opacity:1,duration:0.25},1.8);
tl.fromTo('.selection',{opacity:0},{opacity:1,duration:0.2},2.05);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 벡터 펜 시연을 적용한다. SVG 앵커 3개를 500ms 간격으로 공개한 뒤 선 700ms, 핸들 250ms, 선택 상자 200ms를 차례로 보여준다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 벡터 펜 시연 장면에 적용한다. SVG 앵커 3개를 500ms 간격으로 공개한 뒤 선 700ms, 핸들 250ms, 선택 상자 200ms를 차례로 보여준다. 0.56초·1.46초·2.45초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Vector Pen Demo to <target> in <file>. Reveal three SVG anchors at 500ms intervals, then draw the curve over 700ms, reveal handles over 250ms, and reveal the selection frame over 200ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Vector Pen Demo in the scene for <target> in <file>. Reveal three SVG anchors at 500ms intervals, then draw the curve over 700ms, reveal handles over 250ms, and reveal the selection frame over 200ms. Capture at 0.56s, 1.46s, 2.45s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 벡터 펜 시연를 `.hero`에 적용해. / Apply Vector Pen Demo to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 벡터 펜 시연의 초기 상태와 종료 상태를 함께 기록하고 2.25초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 벡터 펜 시연 대상 선택자와 점 간격 500ms, 선 공개 700ms, 핸들 공개 250ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 2.25초 구간에 매핑하고 선형 관계는 none으로 유지한다.

조합 / Pair with: [선 그리기 · Line Draw](../line-draw/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/vector-editor-rig/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
