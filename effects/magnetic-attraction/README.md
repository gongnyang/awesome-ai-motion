# Nº 345 마그네틱 모션 · Magnetic Attraction

> 클립 렌더 예정 / Clip rendering planned.

**요소가 포인터 쪽으로 조금 따라가고 멀어지면 탄성 있게 돌아온다.**

An element shifts slightly toward a nearby pointer and returns when it leaves.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: 자석 끌림

## 선택 기준 / Selection

반응 가능한 대상과 조작감을 보여 준다. / Communicates interactivity and tactile response.

- 마그네틱 모션으로 반응 가능한 대상과 조작감을 보여 준다 때 / Use this effect when you need to communicate: Communicates interactivity and tactile response.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 포인터가 버튼 오른쪽에 가까워지면 버튼이 16px 따라간다
나쁜 예 / Bad: 버튼이 커서에서 계속 달아나 클릭을 방해한다
주의 / Avoid: 버튼이 커서에서 계속 달아나 클릭을 방해한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.5s | 0.3~0.75s | 1920x1080 시연 기준의 한 동작 시간 |
| 최대 이동 | 16px | 8~24px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const dx = 60, dy = 20, radius = 120;
const weight = Math.max(0,1-Math.hypot(dx,dy)/radius);
tl.to('.button', {x:dx/radius*16*weight,y:dy/radius*16*weight,duration:.5,ease:'power2.out'}, 0);
tl.to('.button', {x:0,y:0,duration:.5,ease:'back.out(1.2)'}, .8);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 마그네틱 모션을 적용해. 요소가 포인터 쪽으로 조금 따라가고 멀어지면 탄성 있게 돌아온다. 기본 지속 0.5초, 최대 이동 16px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 마그네틱 모션을 적용해. 기본 지속 0.5초, 최대 이동 16px, 이징 power2.out를 사용해. 0초, 0.25초, 0.9초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Magnetic Attraction to <target> in <file>. An element shifts slightly toward a nearby pointer and returns when it leaves. Use a 0.5-second duration, 16px maximum displacement, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Magnetic Attraction to <target> in the demonstration scene in <file>. Use a 0.5-second duration, 16px maximum displacement, and power2.out easing. Capture at 0, 0.25, and 0.9 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 마그네틱 모션를 `.hero`에 적용해. / Apply Magnetic Attraction to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 마그네틱 모션 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.5초, 최대 이동 16px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.5초, 최대 이동 16px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 포인터가 버튼 오른쪽에 가까워지면 버튼이 16px 따라간다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [도크 확대 · Dock Magnification](../dock-magnification/) · [커서 추종 · Cursor Follow](../cursor-follow/)

출처 / Sources: [ibelick/motion-primitives](https://motion-primitives.com/docs/magnetic) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/magnetic-button) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
