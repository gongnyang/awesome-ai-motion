# Nº 328 컨트롤 연동 · Control Target Sync

> 클립 렌더 예정 / Clip rendering planned.

**슬라이더, 입력값, 선택 상태가 바뀌는 순간 연결된 대상도 함께 변한다.**

A control and its dependent result change on the same progress value.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 설명 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: 조작과 결과 동기화, Control Live Sync, 컨트롤과 결과 동기, control-target-sync

## 선택 기준 / Selection

조작의 결과와 인과 관계를 즉시 이해하게 한다. / Makes cause and effect immediately legible.

- 설정값과 결과의 관계를 보여줄 때 / Show how settings affect an output.
- 슬라이더로 그래프 변화를 설명할 때 / Explain chart changes through a slider.

좋은 예 / Good: 슬라이더가 이동하는 동안 대상 너비가 240px에서 480px로 함께 바뀐다
나쁜 예 / Bad: 손잡이가 멈춘 뒤 대상이 뒤늦게 변한다
주의 / Avoid: 컨트롤과 결과에 별도 진행값을 사용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 조작 | 1200ms | 800~2000ms | 값 변화 전체 시간 |
| 결과 지연 | 0ms | 0ms | 같은 프레임에 반영 |
| 너비 범위 | 240~480px | 120~720px | 결과 대상 크기 |
| 이징 | none | none | 값과 위치 선형 대응 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.slider-thumb',{x:0},{x:360,duration:1.2,ease:'none'},0);
tl.fromTo('.target',{width:240},{width:480,duration:1.2,ease:'none'},0);
tl.fromTo('.slider-fill',{scaleX:0,transformOrigin:'left'},{scaleX:1,duration:1.2,ease:'none'},0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 컨트롤 연동을 적용한다. 하나의 1200ms 진행값으로 슬라이더 360px 이동과 대상 너비 240px에서 480px 변화를 지연 없이 연결한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 컨트롤 연동 장면에 적용한다. 하나의 1200ms 진행값으로 슬라이더 360px 이동과 대상 너비 240px에서 480px 변화를 지연 없이 연결한다. 0.30초·0.78초·1.40초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Control Target Sync to <target> in <file>. Use one 1200ms progress interval to synchronize 360px of slider travel with a width change from 240px to 480px. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Control Target Sync in the scene for <target> in <file>. Use one 1200ms progress interval to synchronize 360px of slider travel with a width change from 240px to 480px. Capture at 0.30s, 0.78s, 1.40s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 컨트롤 연동를 `.hero`에 적용해. / Apply Control Target Sync to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 컨트롤 연동의 초기 상태와 종료 상태를 함께 기록하고 1.20초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 컨트롤 연동 대상 선택자와 조작 1200ms, 결과 지연 0ms, 너비 범위 240~480px를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.20초 구간에 매핑하고 선형 관계는 none으로 유지한다.

조합 / Pair with: [차트 스크럽 · Chart Scrub](../chart-scrub/) · [카운트업 · Count-up](../count-up/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/settings-toggle-flow/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/control-target-sync.md`) (unknown) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/panel-edit-live-sync.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
