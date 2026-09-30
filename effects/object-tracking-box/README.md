# Nº 386 대상 추적 박스 · Object Tracking Box

> 클립 렌더 예정 / Clip rendering planned.

**모서리 표시 상자가 대상의 움직임을 따라가고 크기와 신뢰도 수치가 조금 변한다.**

A bounding box follows the position and size of a subject.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | svg |

다른 이름 / Also known as: AI tracking box, AI 추적 상자, AI 추적 박스

## 선택 기준 / Selection

기계가 대상을 인식하고 추적함을 보여준다. / Shows that a system recognizes and tracks an object.

- 움직이는 제품과 추적 박스가 동일 좌표로 이동한다. / Explain object detection and tracking.
- 기계가 대상을 인식하고 추적함을 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 움직이는 제품과 추적 박스가 동일 좌표로 이동한다.
나쁜 예 / Bad: 박스가 대상보다 늦게 움직이며 추적에 성공했다고 표시한다.
주의 / Avoid: 예시 신뢰도는 측정값처럼 제시하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 박스 크기 | 300px | 180~400px | 대상 경계 기준 |
| 이동 진폭 | 100px | 40~160px | 대상과 좌표 공유 |
| 주기 | 3000ms | 2000~5000ms | 역탐색 가능 |
| 신뢰도 | 97% | 0~100% | 실제 값 또는 예시 표기 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.to(['.subject','.tracking-box'],{x:100,duration:1.5,ease:'sine.inOut'},0);
tl.to(['.subject','.tracking-box'],{x:0,duration:1.5,ease:'sine.inOut'},1.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 대상 추적 박스을 적용해. 고정 시간 함수로 대상과 상자 좌표, 크기와 라벨을 함께 계산한다. 박스 크기 300px; 이동 진폭 100px; 주기 3000ms; 신뢰도 97%을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 대상 추적 박스을 적용해. 고정 시간 함수로 대상과 상자 좌표, 크기와 라벨을 함께 계산한다. 박스 크기 300px; 이동 진폭 100px; 주기 3000ms; 신뢰도 97%을 적용한다. 0초, 1.5초, 3초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Object Tracking Box on <target> in <file>. Use a 300px tracking box, 100px motion amplitude, and a 3000ms cycle. Move the subject and box together and label the 97% confidence as an example unless measured. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Object Tracking Box on <target> in <file>. Use a 300px tracking box, 100px motion amplitude, and a 3000ms cycle. Move the subject and box together and label the 97% confidence as an example unless measured. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 1.5s, and 3s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 대상 추적 박스를 `.hero`에 적용해. / Apply Object Tracking Box to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 대상 추적 박스 상태를 넣고 seek 시 3초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 박스 크기 300px; 이동 진폭 100px; 주기 3000ms; 신뢰도 97%을 싣고 움직이는 제품과 추적 박스가 동일 좌표로 이동한다.
- Scrolline Deck: 진행률 0~1을 3초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [주석 위치 추적 · Annotation Tracking](../annotation-tracking/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-scan-gate/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/ai-tracking-box.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
