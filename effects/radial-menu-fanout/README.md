# Nº 348 방사형 메뉴 펼치기 · Radial Menu Fanout

> 클립 렌더 예정 / Clip rendering planned.

**한 중심점에 모인 아이콘이 원호를 따라 각각의 자리로 벌어진다.**

Icons fan out from a shared center along an arc.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: 방사형 메뉴 펼침

## 선택 기준 / Selection

선택지가 하나의 도구에 속함을 보여준다. / Shows that several actions belong to one tool.

- 방사형 메뉴 펼치기으로 선택지가 하나의 도구에 속함을 보여준다 때 / Use this effect when you need to communicate: Shows that several actions belong to one tool.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 도구 버튼에서 아이콘 다섯 개가 반원으로 펼쳐진다
나쁜 예 / Bad: 반지름이 작아 메뉴끼리 겹친다
주의 / Avoid: 반지름이 작아 메뉴끼리 겹친다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.4s | 0.24~0.6s | 1920x1080 시연 기준의 한 동작 시간 |
| 반지름 | 100px | 60~160px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const items = gsap.utils.toArray('.item');
items.forEach((el, i) => {
  const a = Math.PI * i / Math.max(1, items.length - 1);
  tl.fromTo(el, {x:0,y:0,opacity:0}, {x:100*Math.cos(a),y:-100*Math.sin(a),opacity:1,duration:.4,ease:'power2.out'}, i*.04);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 방사형 메뉴 펼치기을 적용해. 한 중심점에 모인 아이콘이 원호를 따라 각각의 자리로 벌어진다. 기본 지속 0.4초, 반지름 100px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 방사형 메뉴 펼치기을 적용해. 기본 지속 0.4초, 반지름 100px, 이징 power2.out를 사용해. 0초, 0.2초, 0.8초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Radial Menu Fanout to <target> in <file>. Icons fan out from a shared center along an arc. Use a 0.4-second duration, a 100px radius, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Radial Menu Fanout to <target> in the demonstration scene in <file>. Use a 0.4-second duration, a 100px radius, and power2.out easing. Capture at 0, 0.2, and 0.8 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 방사형 메뉴 펼치기를 `.hero`에 적용해. / Apply Radial Menu Fanout to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 방사형 메뉴 펼치기 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.4초, 반지름 100px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.4초, 반지름 100px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 도구 버튼에서 아이콘 다섯 개가 반원으로 펼쳐진다.
- Scrolline Deck: 진행률 0~1을 0.4초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [아크 · Arcs](../arc-motion/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-radial-menu) (unknown) · [motion.dev examples](https://motion.dev/examples/react-floating-action-button) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
