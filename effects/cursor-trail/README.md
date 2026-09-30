# Nº 330 커서 트레일 · Cursor Trail

> 클립 렌더 예정 / Clip rendering planned.

**커서가 지나간 자리에 점, 이미지 또는 경로선이 남았다가 점차 사라진다.**

A fading trail records the cursor path.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 순서·흐름 | 설명 영상, 제품 시연, 웹 UI | svg |

다른 이름 / Also known as: 커서 이동 흔적, 커서 잔상

## 선택 기준 / Selection

작업 순서와 이동 경로를 복기하게 한다. / Reveals movement direction and the order of operations.

- 조작 경로를 복기할 때 / Review an interaction path.
- 복잡한 화면의 이동 순서를 설명할 때 / Explain movement order in a complex interface.

좋은 예 / Good: 커서 뒤에 12px 간격의 점이 남고 500ms 안에 사라진다
나쁜 예 / Bad: 잔상이 본문 위에 쌓여 글자를 읽을 수 없다
주의 / Avoid: 흔적을 1초 이상 누적하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점 간격 | 12px | 8~24px | 경로 길이 기준 |
| 이동 | 800ms | 500~1200ms | 360px 경로 |
| 감쇠 | 500ms | 250~700ms | 점별 유지 시간 |
| 점 지름 | 6px | 4~10px | 본문을 가리지 않는 크기 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const dots = gsap.utils.toArray('.trail-dot');
gsap.set(dots, {opacity:0});
dots.forEach((dot,i) => {
  tl.set(dot,{opacity:0.6},i*0.8/Math.max(1,dots.length-1));
  tl.to(dot,{opacity:0,duration:0.5,ease:'none'},i*0.8/Math.max(1,dots.length-1));
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 커서 트레일을 적용한다. SVG 경로를 12px 간격으로 샘플링해 점을 미리 놓고 800ms 이동과 500ms 감쇠를 연결한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 커서 트레일 장면에 적용한다. SVG 경로를 12px 간격으로 샘플링해 점을 미리 놓고 800ms 이동과 500ms 감쇠를 연결한다. 0.33초·0.85초·1.50초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Cursor Trail to <target> in <file>. Preplace SVG dots at 12px path intervals and coordinate an 800ms cursor movement with a 500ms fade. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Cursor Trail in the scene for <target> in <file>. Preplace SVG dots at 12px path intervals and coordinate an 800ms cursor movement with a 500ms fade. Capture at 0.33s, 0.85s, 1.50s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 커서 트레일를 `.hero`에 적용해. / Apply Cursor Trail to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 커서 트레일의 초기 상태와 종료 상태를 함께 기록하고 1.30초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 커서 트레일 대상 선택자와 점 간격 12px, 이동 800ms, 감쇠 500ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.30초 구간에 매핑하고 선형 관계는 none으로 유지한다.

조합 / Pair with: [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/cursor-glyph-trail/registry-item.json) (Apache-2.0) · [demos.gsap.com](https://demos.gsap.com/demo/cursor-trail) (unknown) · [motion.dev examples](https://motion.dev/examples/react-cursor-trail) (unknown) · [motion.dev examples](https://motion.dev/examples/react-cursor-trail-velocity) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
