# Nº 321 활성 표시 이동 · Active Indicator Glide

> 클립 렌더 예정 / Clip rendering planned.

**활성 탭의 배경 캡슐이나 밑줄이 다음 탭 위치로 미끄러진다.**

The active underline or capsule glides to the newly selected tab.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 기본 | 피드백 | 설명 영상, 제품 시연, 웹 UI | css |

다른 이름 / Also known as: Tabs indicator, 탭 표시 이동, Sliding Active Indicator, 선택 표시 이동

## 선택 기준 / Selection

선택이 어느 구역으로 옮겨갔는지 알려준다. / Keeps the current selection spatially clear.

- 탭 사이 선택 이동을 보여줄 때 / Show selection moving between tabs.
- 메뉴의 현재 위치를 안내할 때 / Indicate the current menu location.

좋은 예 / Good: 밑줄이 다음 탭의 측정 위치 180px와 너비 140px로 이동한다
나쁜 예 / Bad: 밑줄이 잘못된 탭 아래에 멈춘다
주의 / Avoid: 탭 너비를 모두 같은 값으로 가정하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 | 300ms | 200~450ms | 탭 전환 |
| 목표 위치 | 180px | 0~600px | 탭 시작점 측정 |
| 목표 너비 | 140px | 80~240px | 탭 실제 너비 |
| 이징 | power3.out | power2.out~power3.out | 감속 이동 |

## 구현 / Implementation (GSAP)

```js
.indicator { transform-origin: left; transition: transform 300ms cubic-bezier(.215,.61,.355,1), width 300ms cubic-bezier(.215,.61,.355,1); }
.tabs[data-active='2'] .indicator { transform: translateX(180px); width: 140px; }
.tabs[data-active='1'] .indicator { transform: translateX(0); width: 120px; }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 활성 표시 이동을 적용한다. 다음 탭의 위치 180px와 너비 140px를 측정값으로 지정하고 표시를 300ms에 이동한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 활성 표시 이동 장면에 적용한다. 다음 탭의 위치 180px와 너비 140px를 측정값으로 지정하고 표시를 300ms에 이동한다. 0.07초·0.20초·0.50초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Active Indicator Glide to <target> in <file>. Measure the next tab at x 180px and width 140px, then glide the indicator there in 300ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Active Indicator Glide in the scene for <target> in <file>. Measure the next tab at x 180px and width 140px, then glide the indicator there in 300ms. Capture at 0.07s, 0.20s, 0.50s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 활성 표시 이동를 `.hero`에 적용해. / Apply Active Indicator Glide to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 활성 표시 이동의 초기 상태와 종료 상태를 함께 기록하고 0.30초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 활성 표시 이동 대상 선택자와 이동 300ms, 목표 위치 180px, 목표 너비 140px를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.30초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [크로스페이드 · Crossfade](../crossfade/) · [컨트롤 연동 · Control Target Sync](../control-target-sync/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tabs-slide-indicator/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/micro-transitions/registry-item.json) (Apache-2.0) · [motiondivision/motion](https://motion.dev/docs/react-layout-animations) (MIT) · [motion.dev examples](https://motion.dev/examples/react-tab-select) (unknown) · [motion.dev examples](https://motion.dev/examples/react-smooth-tabs) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
