# Nº 356 가림 영역 추적 · Tracked Redaction

> 클립 렌더 예정 / Clip rendering planned.

**민감한 필드를 덮는 가림 레이어가 대상의 이동과 크기 변화를 함께 따른다.**

A redaction layer follows the position and size of a sensitive field.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 설명, 피드백 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Sensitive-region animated blur, 화면 가림 영역 추적

## 선택 기준 / Selection

시연의 맥락을 유지하면서 공개할 수 없는 정보를 가린다. / Preserves the context of a demo while hiding information that cannot be shared.

- 계정 정보가 포함된 제품 화면을 이동하며 시연할 때 / Demonstrating moving product screens that contain account details.
- 민감한 입력 필드가 확대되거나 스크롤될 때 / Zooming or scrolling a sensitive input field.

좋은 예 / Good: 이메일 필드와 단색 가림을 같은 부모에 넣어 1초 동안 위로 240px 이동해도 내용이 드러나지 않는다.
나쁜 예 / Bad: 가림을 0.1초 늦게 따라오게 해 이동 중 이메일 일부가 노출된다.
주의 / Avoid: 민감한 원문을 DOM이나 녹화 소스에 남기지 않는다. · 실제 비밀 정보에는 블러 대신 불투명 가림을 쓴다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 추적 지연 | 0ms | 0ms | 대상과 같은 부모에서 즉시 함께 이동한다. |
| 블러 반경 | 12px | 8~24px | 비민감한 예시 데이터의 흐림 연출에만 쓴다. |
| 가림 불투명도 | 1 | 1 | 단색 가림은 완전히 불투명하게 유지한다. |
| 여유 폭 | 8px | 4~16px | 1920x1080 기준으로 필드 가장자리까지 덮는다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
.field { position: relative; }
.field .redaction {
  position: absolute; inset: -8px;
  background: #20242c; opacity: 1;
  pointer-events: none; z-index: 2;
}
.field .redaction.blur { background: transparent; backdrop-filter: blur(12px); }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>의 민감한 필드를 대체 문자열로 바꾸고 같은 부모 안에 단색 가림을 추가해. 가림은 inset -8px, opacity 1, 추적 지연 0ms로 두고 부모의 이동과 크기 변화를 함께 따르게 해. 블러 변형은 예시 데이터에만 12px로 적용해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 필드에 position relative와 자식 가림 레이어를 적용해. inset -8px, opacity 1, 지연 0ms로 설정하고 부모를 1초 동안 위로 240px 이동시켜. 0초, 0.5초, 1초 캡처에서 필드 가장자리가 모두 덮이고 원문이 노출되지 않는지 확인해.
```

### English · Claude Code
```text
In <file>, replace sensitive content in <target> with placeholder text and add an opaque redaction layer inside the same parent. Use inset -8px, opacity 1, and zero tracking delay so the layer follows all parent movement and resizing. Apply the 12px blur variant only to sample data.
```

### English · Codex
```text
In <file>, give the field in <target> relative positioning and add a child redaction layer. Set inset -8px, opacity 1, and zero delay, then move the parent upward by 240px over 1 second. Capture at 0, 0.5, and 1 second to verify full edge coverage and no exposed source text.
```

예시 / Example: 가림 영역 추적를 `.hero`에 적용해. / Apply Tracked Redaction to `.hero`.

## 적용 / Application

- HyperFrames: 가림을 대상의 자식으로 두고 부모 이동을 paused 타임라인에 기록한다. seek 시 가림과 필드가 같은 좌표로 복원되는지 확인한다.
- ReelForge: 씬 워커 브리프에 추적 지연 0ms, 여유 폭 8px, 불투명도 1을 싣고 필드와 가림의 부모를 공유하게 한다.
- Scrolline Deck: 진행률 0~1을 부모의 이동에만 매핑한다. 가림에는 지연이나 스프링을 넣지 않고 보조 이동은 ease-out을 쓴다.

조합 / Pair with: [화면 스크롤 · UI Scroll](../ui-scroll/) · [확대 콜아웃 · Zoom Callout](../zoom-callout/) · [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/)

출처 / Sources: [Supademo](https://supademo.com/features/demo-editor) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
