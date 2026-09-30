# Nº 350 스크롤 격자 확장 · Scroll Grid Expansion

> 클립 렌더 예정 / Clip rendering planned.

**고정된 이미지 격자가 열별로 들어온 뒤 커져 공간을 열고 설명을 보여 준다.**

A pinned image grid enters by column, expands, and reveals supporting text.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 고급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: Sticky Grid Expansion, 고정 격자 확장

## 선택 기준 / Selection

자료 집합에서 주요 장면으로 시선을 옮긴다. / Moves attention from a collection toward a key scene.

- 스크롤 격자 확장으로 자료 집합에서 주요 장면으로 시선을 옮긴다 때 / Use this effect when you need to communicate: Moves attention from a collection toward a key scene.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 열별로 진입한 사진 격자가 확대되며 설명을 공개한다
나쁜 예 / Bad: 격자 확대가 텍스트까지 잘라낸다
주의 / Avoid: 격자 확대가 텍스트까지 잘라낸다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 2s | 1.2~3s | 1920x1080 시연 기준의 한 동작 시간 |
| 확대 배율 | 1.3 | 1.1~1.5 | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.from('.column', {y:120,opacity:0,duration:.6,stagger:.08,ease:'power2.out'}, 0);
tl.to('.grid', {scale:1.3,duration:1,ease:'power2.out'}, .8);
tl.from('.caption', {y:24,opacity:0,duration:.4,ease:'power2.out'}, 1.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 스크롤 격자 확장을 적용해. 고정된 이미지 격자가 열별로 들어온 뒤 커져 공간을 열고 설명을 보여 준다. 기본 지속 2초, 확대 배율 1.3, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 스크롤 격자 확장을 적용해. 기본 지속 2초, 확대 배율 1.3, 이징 power2.out를 사용해. 0초, 1초, 2.4초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Scroll Grid Expansion to <target> in <file>. A pinned image grid enters by column, expands, and reveals supporting text. Use a 2-second duration, a 1.3 scale factor, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Scroll Grid Expansion to <target> in the demonstration scene in <file>. Use a 2-second duration, a 1.3 scale factor, and power2.out easing. Capture at 0, 1, and 2.4 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 스크롤 격자 확장를 `.hero`에 적용해. / Apply Scroll Grid Expansion to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 스크롤 격자 확장 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 2초, 확대 배율 1.3, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 2초, 확대 배율 1.3, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 열별로 진입한 사진 격자가 확대되며 설명을 공개한다.
- Scrolline Deck: 진행률 0~1을 2초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [패럴랙스 · Parallax](../parallax/) · [마스크 리빌 · Mask Reveal](../mask-reveal/)

출처 / Sources: [tympanus.net/codrops](https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [codrops/ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
