# Nº 331 도크 확대 · Dock Magnification

> 클립 렌더 예정 / Clip rendering planned.

**이동하는 포인터 근처의 아이콘이 커지고 먼 아이콘은 작아진다.**

Icons grow in proportion to their proximity to a pointer.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: Proximity magnification, 근접 확대 도크, 독 아이콘 확대

## 선택 기준 / Selection

현재 관심 영역과 선택 후보를 보여준다. / Highlights the current area of interest and likely selection.

- 도크 확대으로 현재 관심 영역과 선택 후보를 보여준다 때 / Use this effect when you need to communicate: Highlights the current area of interest and likely selection.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 시연 포인터가 도크를 지나가면 가까운 아이콘만 1.6배 커진다
나쁜 예 / Bad: 확대로 이웃 아이콘의 클릭 영역이 가려진다
주의 / Avoid: 확대로 이웃 아이콘의 클릭 영역이 가려진다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.2s | 0.12~0.3s | 1920x1080 시연 기준의 한 동작 시간 |
| 영향 반경 | 140px | 90~200px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const icons = gsap.utils.toArray('.icon');
const centers = icons.map((_, i) => 300+i*80);
const pointer = {x:160};
tl.to(pointer, {x:900,duration:2,ease:'none',onUpdate:()=>{
  icons.forEach((el,i)=>gsap.set(el,{scale:1+.6*Math.max(0,1-Math.abs(pointer.x-centers[i])/140)}));
}}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 도크 확대을 적용해. 이동하는 포인터 근처의 아이콘이 커지고 먼 아이콘은 작아진다. 기본 지속 0.2초, 영향 반경 140px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 도크 확대을 적용해. 기본 지속 0.2초, 영향 반경 140px, 이징 power2.out를 사용해. 0초, 0.1초, 0.6초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Dock Magnification to <target> in <file>. Icons grow in proportion to their proximity to a pointer. Use a 0.2-second duration, a 140px influence radius, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Dock Magnification to <target> in the demonstration scene in <file>. Use a 0.2-second duration, a 140px influence radius, and power2.out easing. Capture at 0, 0.1, and 0.6 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 도크 확대를 `.hero`에 적용해. / Apply Dock Magnification to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 도크 확대 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.2초, 영향 반경 140px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.2초, 영향 반경 140px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 시연 포인터가 도크를 지나가면 가까운 아이콘만 1.6배 커진다.
- Scrolline Deck: 진행률 0~1을 0.2초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [마그네틱 모션 · Magnetic Attraction](../magnetic-attraction/) · [커서 추종 · Cursor Follow](../cursor-follow/)

출처 / Sources: [demos.gsap.com](https://demos.gsap.com/demo/macos-dock-effect) (unknown) · [pmndrs/react-spring](https://www.react-spring.dev/examples) (MIT) · [demos.gsap.com](https://demos.gsap.com/demo/proximity-scale-grid) (unknown) · [magicuidesign/magicui](https://magicui.design/docs/components/dock) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/floating-dock) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
