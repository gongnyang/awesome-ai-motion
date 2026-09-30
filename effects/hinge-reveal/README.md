# Nº 044 힌지 리빌 · Hinge Reveal

> 클립 렌더 예정 / Clip rendering planned.

**패널이 한쪽 변을 축으로 기울어진 상태에서 정면으로 열린다.**

A panel rotates from its edge into a front-facing position.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: Hinge Open, 경첩 열기, door-hinge-open, orbit-3d-entry, Swing Reveal, 문처럼 열리는 등장, Boing Reveal, 탄성 힌지 튀기

## 선택 기준 / Selection

닫혀 있던 정보가 열리는 느낌을 준다. / Makes concealed information feel like it is opening.

- 닫힌 정보 패널을 열 때 / Use when presenting hinge reveal in a content reveal scene.
- 카드가 문처럼 등장할 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 카드가 왼쪽 변을 축으로 90도에서 정면으로 열린다.
나쁜 예 / Bad: 원근 없이 회전해 패널이 폭만 줄어든다.
주의 / Avoid: 원근 없이 회전해 패널이 폭만 줄어든다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.65s | 0.455~0.91s | 0초부터 시작하는 공개 구간 |
| 시작 각도 | 90deg | 60~90deg | 왼쪽 경첩 기준 |
| 원근 거리 | 800px | 600~1200px | 부모에 설정 |
| 앵커 | 0% 50% | 좌우 또는 상하 변 | 회전축 고정 |
| 이징 | power3.out | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.panel-parent', {perspective:800});
gsap.set('.target', {transformOrigin:'0% 50%', backfaceVisibility:'hidden'});
tl.fromTo('.target', {rotationY:90}, {rotationY:0, duration:0.65, ease:'power3.out'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 힌지 리빌을 적용해. 0.65초, 시작 각도 90deg; 원근 거리 800px; 앵커 0% 50%, 이징 power3.out로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 힌지 리빌을 적용해. 0.65초, 시작 각도 90deg; 원근 거리 800px; 앵커 0% 50%, power3.out를 사용하고 0초, 0.325초, 0.65초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Hinge Reveal to <target> in <file>. Use a 0.65s segment with power3.out; implement these explicit settings: Initial angle: 90deg, Perspective: 800px, Transform origin: 0% 50%. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Hinge Reveal to the <target> layer in <file> with Initial angle: 90deg, Perspective: 800px, Transform origin: 0% 50%, using the supplied core snippet and a 0.65s segment with power3.out. Capture at 0s, 0.325s, and 0.65s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 힌지 리빌를 `.hero`에 적용해. / Apply Hinge Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.65초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 힌지 리빌, 0.65초, 시작 각도 90deg; 원근 거리 800px; 앵커 0% 50%, power3.out를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 0.65초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [foundation/motion-ui](https://github.com/foundation/motion-ui) (MIT) · [miniMAC/magic](https://github.com/miniMAC/magic) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#door-hinge-open`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
