# Nº 583 플로트 루프 · Float Loop

> 클립 렌더 예정 / Clip rendering planned.

**요소가 천천히 위아래로 움직이며 공중에 떠 있는 것처럼 보인다.**

An element gently bobs up and down.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | css |

다른 이름 / Also known as: Float and Bob, 떠오름과 부유, Arrow Nudge Loop, 화살표 유도 반복

## 선택 기준 / Selection

가벼움과 대기 상태를 표현한다. / Conveys lightness and an idle state.

- 가벼운 제품을 공중에 띄울 때 / Use when presenting float loop in a waiting or ambient scene.
- 스크롤 유도 화살표를 왕복시킬 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 제품 아이콘이 2.4초마다 12px 위로 떠올랐다 돌아온다.
나쁜 예 / Bad: 클릭할 버튼이 계속 움직여 선택이 어렵다.
주의 / Avoid: 클릭할 버튼이 계속 움직여 선택이 어렵다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2.4s | 1.68~3.36s | 유한 구간을 호스트 시간으로 반복 |
| 부유 높이 | 12px | 6~18px | 기준 위치 위로 이동 |
| 위상 시간차 | 0s | 0~0.6s | 여러 대상의 시작차 |
| 이징 | sine.inOut | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.target', {y:0});
tl.to('.target', {y:-12, duration:1.2, ease:'sine.inOut'}, 0);
tl.to('.target', {y:0, duration:1.2, ease:'sine.inOut'}, 1.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 플로트 루프을 적용해. 2.4초, 부유 높이 12px; 위상 시간차 0s, 이징 sine.inOut로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 플로트 루프을 적용해. 2.4초, 부유 높이 12px; 위상 시간차 0s, sine.inOut를 사용하고 0초, 1.2초, 2.4초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Float Loop to <target> in <file>. Use a 2.4s segment with sine.inOut; implement these explicit settings: Float height: 12px, Phase offset: 0s. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Float Loop to the <target> layer in <file> with Float height: 12px, Phase offset: 0s, using the supplied core snippet and a 2.4s segment with sine.inOut. Capture at 0s, 1.2s, and 2.4s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 플로트 루프를 `.hero`에 적용해. / Apply Float Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 2.4초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 플로트 루프, 2.4초, 부유 높이 12px; 위상 시간차 0s, sine.inOut를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 2.4초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · local/ig-carousel-hub (`local:ig-carousel-hub/03_templates/motion/slot-spec.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
