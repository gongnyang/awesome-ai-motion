# Nº 589 회전 루프 · Spin Loop

> 클립 렌더 예정 / Clip rendering planned.

**기어나 시계 바늘이나 로더가 중심 위치를 유지하며 계속 회전한다.**

A gear, pointer, or loader rotates around a fixed center.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: 제자리 회전, Ring Spinner, 회전 링 로더, Ambient globe rotation, 지구 지속 회전

## 선택 기준 / Selection

작동 중인 상태와 시간의 흐름을 느낀다. / Suggests ongoing operation and passing time.

- 기어의 작동 상태를 표시할 때 / Use when presenting spin loop in a waiting or ambient scene.
- 고정 원호 로더를 회전시킬 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 기어 중심은 고정되고 2.4초마다 한 바퀴 돈다.
나쁜 예 / Bad: SVG 중심이 어긋나 기어가 공전한다.
주의 / Avoid: SVG 중심이 어긋나 기어가 공전한다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2.4s | 1.68~3.36s | 유한 구간을 호스트 시간으로 반복 |
| 회전량 | 360deg | -360~360deg | 한 주기 정확히 한 바퀴 |
| 앵커 | 50% 50% | 대상 중심 | SVG transform-box 설정 |
| 이징 | none | none | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.rotor', {transformBox:'fill-box', transformOrigin:'50% 50%'});
tl.fromTo('.rotor', {rotation:0}, {rotation:360, duration:2.4, ease:'none'}, 0);
// Repeat this finite cycle using the host timeline's local time.
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 회전 루프을 적용해. 2.4초, 회전량 360deg; 앵커 50% 50%, 이징 none로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 회전 루프을 적용해. 2.4초, 회전량 360deg; 앵커 50% 50%, none를 사용하고 0초, 1.2초, 2.4초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Spin Loop to <target> in <file>. Use a 2.4s segment with none; implement these explicit settings: Rotation per cycle: 360deg, Transform origin: 50% 50%. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Spin Loop to the <target> layer in <file> with Rotation per cycle: 360deg, Transform origin: 50% 50%, using the supplied core snippet and a 2.4s segment with none. Capture at 0s, 1.2s, and 2.4s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 회전 루프를 `.hero`에 적용해. / Apply Spin Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 2.4초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 회전 루프, 2.4초, 회전량 360deg; 앵커 50% 50%, none를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 2.4초 구간에 매핑한다. scrub에서는 스프링 대신 선형 이동과 ease-out을 용도별로 나눈다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) (MIT) · [loadingio/css-spinner](https://github.com/loadingio/css-spinner) (CC0 loaders (README; root LICENSE absent)) · [css-loaders.com](https://css-loaders.com/) (unknown) · [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
