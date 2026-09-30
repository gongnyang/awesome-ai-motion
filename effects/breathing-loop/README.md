# Nº 582 브리딩 루프 · Breathing Loop

> 클립 렌더 예정 / Clip rendering planned.

**멈춘 요소가 아주 작은 크기와 위치 변화를 반복한다.**

A resting element repeats subtle scale and position changes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: Ambient breath, 미세 호흡과 부유, Idle Breathe, 미세 브리딩, offset-origin-idle-breathe, sine-wave-loop, svg-icon-enrichment, breathing-hold, Yoyo ambient loop, 왕복 앰비언트 루프, Ping Pong Loop, 핑퐁 루프, loopOut pingpong

## 선택 기준 / Selection

정지 상태의 생명감과 분위기를 유지한다. / Keeps an idle scene feeling alive.

- 대기 중인 캐릭터를 유지할 때 / Use when presenting breathing loop in a waiting or ambient scene.
- 히어로 아이콘에 미세한 생동감을 줄 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 마스코트가 2.4초마다 1.2% 커졌다 돌아온다.
나쁜 예 / Bad: 표의 숫자가 계속 커졌다 작아져 비교하기 어렵다.
주의 / Avoid: 표의 숫자가 계속 커졌다 작아져 비교하기 어렵다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2.4s | 1.68~3.36s | 유한 구간을 호스트 시간으로 반복 |
| 크기 진폭 | 0.012 | 0.004~0.02 | 기본 크기 1에 더함 |
| 상하 진폭 | 2px | 0~4px | 본문은 고정 |
| 이징 | sine.inOut | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.target', {scale:1, y:0});
tl.to('.target', {scale:1.012, y:-2, duration:1.2, ease:'sine.inOut'}, 0);
tl.to('.target', {scale:1, y:0, duration:1.2, ease:'sine.inOut'}, 1.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 브리딩 루프을 적용해. 2.4초, 크기 진폭 0.012; 상하 진폭 2px, 이징 sine.inOut로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 브리딩 루프을 적용해. 2.4초, 크기 진폭 0.012; 상하 진폭 2px, sine.inOut를 사용하고 0초, 1.2초, 2.4초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Breathing Loop to <target> in <file>. Use a 2.4s segment with sine.inOut; implement these explicit settings: Scale amplitude: 0.012, Vertical amplitude: 2px. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Breathing Loop to the <target> layer in <file> with Scale amplitude: 0.012, Vertical amplitude: 2px, using the supplied core snippet and a 2.4s segment with sine.inOut. Capture at 0s, 1.2s, and 2.4s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 브리딩 루프를 `.hero`에 적용해. / Apply Breathing Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 2.4초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 브리딩 루프, 2.4초, 크기 진폭 0.012; 상하 진폭 2px, sine.inOut를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 2.4초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/drift-hold/registry-item.json) (Apache-2.0) · [greensock/GSAP](https://gsap.com/docs/v3/GSAP/Tween/) (GSAP Standard License) · [greensock/GSAP](https://gsap.com/docs/v3/GSAP/UtilityMethods/) (GSAP Standard License) · [motiondivision/motion](https://motion.dev/docs/react-transitions) (MIT) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-examples/expression-examples.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
