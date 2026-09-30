# Nº 333 드로어 슬라이드 · Drawer Slide

> 클립 렌더 예정 / Clip rendering planned.

**화면 가장자리에서 패널이 들어오고 뒤 화면이 어두워지거나 작아지며 보조 작업 영역이 열린다.**

An edge panel slides in while the underlying screen recedes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 기본 | 전환 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: Spring sheet, 스프링 바닥 시트, Drawer and Sheet, 서랍 패널 등장

## 선택 기준 / Selection

추가 행동 선택이 같은 화면 안에서 열림을 보여준다. / Establishes a secondary workspace within the current screen.

- 공유 옵션 패널을 열 때 / Open sharing options.
- 보조 설정 영역을 소개할 때 / Introduce a secondary settings area.

좋은 예 / Good: 하단 패널이 높이 480px만큼 올라오며 배경이 0.96배로 줄어든다
나쁜 예 / Bad: 패널은 들어왔는데 배경 버튼도 같은 강조를 유지한다
주의 / Avoid: 패널 내용을 화면 안전 영역 밖으로 밀지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 등장 | 450ms | 300~650ms | 패널 정착 |
| 패널 높이 | 480px | 320~640px | 진입 거리 |
| 배경 배율 | 0.96 | 0.94~1 | 깊이 구분 |
| 오버슛 | 8% | 0~8% | 필요 시 낮게 적용 |

이징 / Ease: `back.out(1.4)`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.drawer',{y:480},{y:0,duration:0.45,ease:'back.out(1.4)'},0);
tl.to('.screen',{scale:0.96,duration:0.45,ease:'power3.out'},0);
tl.fromTo('.backdrop',{opacity:0},{opacity:0.35,duration:0.25},0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 드로어 슬라이드을 적용한다. 480px 높이 패널을 450ms에 올리고 배경은 0.96배, 암전은 opacity 0.35로 맞춘다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 드로어 슬라이드 장면에 적용한다. 480px 높이 패널을 450ms에 올리고 배경은 0.96배, 암전은 opacity 0.35로 맞춘다. 0.11초·0.29초·0.65초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Drawer Slide to <target> in <file>. Lift a 480px panel in 450ms, scale the background to 0.96, and fade the backdrop to 0.35 opacity. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Drawer Slide in the scene for <target> in <file>. Lift a 480px panel in 450ms, scale the background to 0.96, and fade the backdrop to 0.35 opacity. Capture at 0.11s, 0.29s, 0.65s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 드로어 슬라이드를 `.hero`에 적용해. / Apply Drawer Slide to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 드로어 슬라이드의 초기 상태와 종료 상태를 함께 기록하고 0.45초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 드로어 슬라이드 대상 선택자와 등장 450ms, 패널 높이 480px, 배경 배율 0.96를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.45초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [모달 등장 · Modal Lift](../modal-lift/) · [점진적 공개 · Progressive Disclosure](../progressive-disclosure/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/sheet-spring-up/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/share-sheet-carousel/registry-item.json) (Apache-2.0) · [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (MIT) · [emilkowalski/vaul](https://github.com/emilkowalski/vaul) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/sidebar) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
