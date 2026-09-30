# Nº 585 로딩 도트 · Loading Dots

![로딩 도트 · Loading Dots](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**나란한 점들이 시간차로 커지거나 위로 뛰고 다시 돌아온다.**

Dots bounce or pulse with staggered phases.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | css |

다른 이름 / Also known as: Typing dots loader, 타이핑 점 로더, Staggered loading dots, 순차 로딩 점, Three Dot Flow, 세 점 흐름

## 선택 기준 / Selection

상대가 아직 답변을 준비하고 있음을 알려준다. / Signals that a reply is still being prepared.

- 채팅 답변을 기다릴 때 / Use when presenting loading dots in a waiting or ambient scene.
- 짧은 비동기 처리를 표시할 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 세 점이 0.15초 차이로 8px 뛰고 돌아온다.
나쁜 예 / Bad: 오류 상태에서도 점을 계속 돌려 응답을 기다리게 한다.
주의 / Avoid: 오류 상태에서도 점을 계속 돌려 응답을 기다리게 한다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1.2s | 0.84~1.68s | 유한 구간을 호스트 시간으로 반복 |
| 점 수 | 3 | 3~4 | 짧은 대기 표시 |
| 점 시간차 | 0.15s | 0.1~0.2s | 왼쪽부터 시작 |
| 점프 높이 | 8px | 4~12px | 기준 위치에서 위로 이동 |
| 이징 | sine.inOut | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
const dots = gsap.utils.toArray('.dot');
dots.forEach((dot, i) => {
  tl.to(dot, {y:-8, duration:0.45, ease:'sine.inOut'}, i*0.15);
  tl.to(dot, {y:0, duration:0.45, ease:'sine.inOut'}, i*0.15+0.45);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 로딩 도트을 적용해. 1.2초, 점 수 3; 점 시간차 0.15s; 점프 높이 8px, 이징 sine.inOut로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 로딩 도트을 적용해. 1.2초, 점 수 3; 점 시간차 0.15s; 점프 높이 8px, sine.inOut를 사용하고 0초, 0.6초, 1.2초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Loading Dots to <target> in <file>. Use a 1.2s segment with sine.inOut; implement these explicit settings: Dot count: 3, Dot delay: 0.15s, Jump height: 8px. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Loading Dots to the <target> layer in <file> with Dot count: 3, Dot delay: 0.15s, Jump height: 8px, using the supplied core snippet and a 1.2s segment with sine.inOut. Capture at 0s, 0.6s, and 1.2s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 로딩 도트를 `.hero`에 적용해. / Apply Loading Dots to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.2초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 로딩 도트, 1.2초, 점 수 3; 점 시간차 0.15s; 점프 높이 8px, sine.inOut를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.2초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typing-indicator/registry-item.json) (Apache-2.0) · [greensock/GSAP](https://gsap.com/resources/getting-started/Staggers/) (GSAP Standard License) · [motion.dev examples](https://motion.dev/examples/react-loading-jumping-dots) (unknown) · [motion.dev examples](https://motion.dev/examples/react-loading-three-dots-pulse) (unknown) · [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
