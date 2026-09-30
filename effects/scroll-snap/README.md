# Nº 351 스크롤 스냅 · Scroll Snap

> 클립 렌더 예정 / Clip rendering planned.

**자유롭게 진행하던 화면이 가까운 장면 경계에 부드럽게 정렬된다.**

Scrolling settles smoothly at the nearest chapter boundary.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: Scroll snap chapters, 스크롤 장 스냅

## 선택 기준 / Selection

설명의 구간과 읽는 멈춤점을 만든다. / Creates clear sections and stable reading stops.

- 스크롤 스냅으로 설명의 구간과 읽는 멈춤점을 만든다 때 / Use this effect when you need to communicate: Creates clear sections and stable reading stops.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 두 번째 장 시작점에서 화면이 정렬되어 제목을 읽을 수 있다
나쁜 예 / Bad: 짧은 스크롤마다 강제로 다음 장으로 이동한다
주의 / Avoid: 짧은 스크롤마다 강제로 다음 장으로 이동한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.45s | 0.27~0.675s | 1920x1080 시연 기준의 한 동작 시간 |
| 장면 간격 | 1080px | 720~1080px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const state = {p:.42};
const stops = [0,.5,1];
const nearest = stops.reduce((a,b)=>Math.abs(b-state.p)<Math.abs(a-state.p)?b:a);
tl.to(state, {p:nearest,duration:.45,ease:'power2.out',onUpdate:()=>gsap.set('.track',{y:-state.p*2160})}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 스크롤 스냅을 적용해. 자유롭게 진행하던 화면이 가까운 장면 경계에 부드럽게 정렬된다. 기본 지속 0.45초, 장면 간격 1080px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 스크롤 스냅을 적용해. 기본 지속 0.45초, 장면 간격 1080px, 이징 power2.out를 사용해. 0초, 0.225초, 0.85초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Scroll Snap to <target> in <file>. Scrolling settles smoothly at the nearest chapter boundary. Use a 0.45-second duration, 1080px chapter spacing, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Scroll Snap to <target> in the demonstration scene in <file>. Use a 0.45-second duration, 1080px chapter spacing, and power2.out easing. Capture at 0, 0.225, and 0.85 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 스크롤 스냅를 `.hero`에 적용해. / Apply Scroll Snap to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 스크롤 스냅 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.45초, 장면 간격 1080px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.45초, 장면 간격 1080px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 두 번째 장 시작점에서 화면이 정렬되어 제목을 읽을 수 있다.
- Scrolline Deck: 진행률 0~1을 0.45초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [화면 스크롤 · UI Scroll](../ui-scroll/) · [스크롤 프레임 스크럽 · Scroll Frame Scrubbing](../scroll-frame-scrub/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (GSAP Standard License) · [greensock/GSAP](https://gsap.com/docs/v3/Plugins/InertiaPlugin/) (GSAP Standard License)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
