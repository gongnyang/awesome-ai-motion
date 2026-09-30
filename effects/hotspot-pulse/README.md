# Nº 338 핫스팟 펄스 · Hotspot Pulse

> 클립 렌더 예정 / Clip rendering planned.

**다음 행동 위치에 점이나 고리가 반복해서 커졌다 작아지고 다음 단계에서 다른 위치로 바뀐다.**

A dot or ring pulses at the next action location and moves between steps.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | svg |

다른 이름 / Also known as: Guided hotspot pulse, 안내 핫스팟 맥동

## 선택 기준 / Selection

어디를 눌러야 하는지 즉시 안다. / Makes the next click target immediately clear.

- 핫스팟 펄스으로 어디를 눌러야 하는지 즉시 안다 때 / Use this effect when you need to communicate: Makes the next click target immediately clear.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 다음에 누를 버튼에 안내 고리가 한 주기 커지며 흐려진다
나쁜 예 / Bad: 화면의 모든 버튼에 고리가 동시에 반복된다
주의 / Avoid: 화면의 모든 버튼에 고리가 동시에 반복된다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 1.2s | 0.72~1.8s | 1920x1080 시연 기준의 한 동작 시간 |
| 고리 반경 | 8~20px | 6~24px | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.set('.ring', {transformOrigin:'50% 50%'});
tl.fromTo('.ring', {scale:1,opacity:1}, {scale:2.5,opacity:0,duration:1.2,ease:'power2.out',repeat:1}, 0);
tl.set('.ring', {x:240,y:80}, 2.4);
tl.fromTo('.ring', {scale:1,opacity:1}, {scale:2.5,opacity:0,duration:1.2,ease:'power2.out'}, 2.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 핫스팟 펄스을 적용해. 다음 행동 위치에 점이나 고리가 반복해서 커졌다 작아지고 다음 단계에서 다른 위치로 바뀐다. 기본 지속 1.2초, 고리 반경 8~20px, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 핫스팟 펄스을 적용해. 기본 지속 1.2초, 고리 반경 8~20px, 이징 power2.out를 사용해. 0초, 0.6초, 1.6초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Hotspot Pulse to <target> in <file>. A dot or ring pulses at the next action location and moves between steps. Use a 1.2-second duration, an 8px to 20px ring radius, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Hotspot Pulse to <target> in the demonstration scene in <file>. Use a 1.2-second duration, an 8px to 20px ring radius, and power2.out easing. Capture at 0, 0.6, and 1.6 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 핫스팟 펄스를 `.hero`에 적용해. / Apply Hotspot Pulse to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 핫스팟 펄스 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 1.2초, 고리 반경 8~20px, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 1.2초, 고리 반경 8~20px, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 다음에 누를 버튼에 안내 고리가 한 주기 커지며 흐려진다.
- Scrolline Deck: 진행률 0~1을 1.2초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [Arcade](https://docs.arcade.software/kb/build/interactive-demo/edit/hotspots-callouts-and-spotlights) (unknown) · [Supademo](https://docs.supademo.com/customize/hotspot) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
