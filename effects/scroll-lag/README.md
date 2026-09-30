# Nº 359 스크롤 지연 추종 · Scroll Lag

> 클립 렌더 예정 / Clip rendering planned.

**스크롤 위치가 바뀐 뒤 화면과 일부 레이어가 늦게 따라와 정착한다**

After the scroll position changes, the screen and some layers trail behind and then settle.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 분위기, 순서·흐름 | 스크롤덱, 웹 UI | gsap |

다른 이름 / Also known as: Smooth scroll lag

## 선택 기준 / Selection

움직임에 관성과 부드러움이 생긴다. 레이어마다 지연이 다르면 깊이감도 함께 생긴다 / Adds inertia and softness to motion, and different layer lags add a sense of depth.

- 스크롤할 때 배경과 전경이 다른 속도로 따라오게 해 깊이를 줄 때 / Let background and foreground follow scroll at different rates for depth.
- 거친 휠 입력을 부드럽게 다듬을 때 / Smooth rough wheel input.

좋은 예 / Good: 화면 추종 800ms, 배경 레이어는 300ms 더 지연해 스크롤이 멈춘 뒤에도 0.3초 더 흘러가다 정착한다
나쁜 예 / Bad: 지연이 2초라 화면이 반응하지 않는 것처럼 느껴지거나, 레이어 지연이 커서 텍스트가 읽히지 않고 헤맨다
주의 / Avoid: 추종 지연 1000ms 초과 금지 · 본문 텍스트 레이어는 지연시키지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 화면 추종 | 800ms | 400~1000ms | 저역 통과 |
| 레이어 지연 | 300ms | 150~500ms | 배경 레이어에 추가 |
| 이동 속도 | 1배 | 0.8~1.2배 | 스크롤 대비 |
| 이징 | expo.out | power3.out~expo.out | 정착이 부드럽게 |

## 구현 / Implementation (GSAP)

```js
let target = 0;
addEventListener('scroll', () => target = scrollY);
gsap.ticker.add(() => {
  gsap.to('.page', { y: -target, duration: 0.8, ease: 'expo.out', overwrite: true });
  gsap.to('.bg', { y: -target * 0.9, duration: 1.1, ease: 'expo.out', overwrite: true });
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 스크롤에 지연 추종을 넣어줘. 본문 .page는 800ms expo.out으로 따라오고 배경 .bg는 스크롤량의 0.9배로 1.1초 expo.out으로 300ms 더 늦게 따라오게 해. 텍스트 레이어에는 추가 지연을 주지 마.
```

### 한국어 · Codex
```text
<파일>에 scroll lag를 구현해. .page y: -scrollY duration 0.8 expo.out, .bg y: -scrollY*0.9 duration 1.1 expo.out, overwrite true. scrollY 800으로 점프한 직후 0.2초, 0.8초, 1.4초에 캡처해 .page가 .bg보다 먼저 정착하는지 확인해.
```

### English · Claude Code
```text
Add scroll lag in <target>. The main .page follows scroll with 800ms expo.out, while the .bg follows at 0.9 times the scroll amount with 1.1 seconds of expo.out, about 300ms later. Do not add extra delay to text layers.
```

### English · Codex
```text
Implement scroll lag in <file>: .page y: -scrollY duration 0.8 expo.out, .bg y: -scrollY*0.9 duration 1.1 expo.out, overwrite true. After jumping scrollY to 800, capture at 0.2s, 0.8s and 1.4s and verify .page settles before .bg.
```

예시 / Example: 스크롤 지연 추종를 `.hero`에 적용해. / Apply Scroll Lag to `.hero`.

## 적용 / Application

- HyperFrames: HyperFrames에서는 스크롤이 없어 지연을 tween 시작 오프셋으로 대신한다. 레이어별 offset을 0.3초 두면 같은 느낌이 나온다
- ReelForge: ReelForge에서는 레이어별 시작 지연을 씬 브리프 파라미터로 노출한다
- Scrolline Deck: Scrolline의 진행률 lerp와 같다. cur += (target - cur) * k에서 k를 레이어별로 다르게 둔다. 스프링 대신 ease-out

조합 / Pair with: [스크롤 스크럽 · Scroll Scrubbing](../scroll-scrub/) · [패럴랙스 · Parallax](../parallax/) · [관성 이동 · Inertial Glide](../inertial-glide/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollSmoother/) (GSAP Standard License) · [motiondivision/motion](https://motion.dev/docs/react-use-spring) (MIT) · [pmndrs/react-spring](https://www.react-spring.dev/docs/utilities/use-scroll) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
