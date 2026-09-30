# Nº 360 스크롤 스크럽 · Scroll Scrubbing

> 클립 렌더 예정 / Clip rendering planned.

**스크롤 위치를 앞뒤로 움직이면 장면도 같은 비율로 진행하거나 되감긴다**

Moving the scroll position forward or backward advances or rewinds the scene at the same ratio.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 설명, 순서·흐름 | 스크롤덱, 웹 UI, 데이터 스토리 | gsap |

다른 이름 / Also known as: Scroll progress scrub, 스크롤 진행 스크럽, Scrub progress, 스크럽 진행도

## 선택 기준 / Selection

스크롤과 설명 진행이 직접 연결되어 보는 사람이 속도를 쥔다. 되감기가 자유롭다 / Scroll and explanation progress are tied directly, so the viewer holds the pace and can rewind freely.

- 단계별 설명을 스크롤 길이에 묶어 원하는 속도로 읽게 할 때 / Bind step-by-step explanation to scroll length so people read at their own speed.
- 제품 회전이나 도해를 스크롤로 되감아 보게 할 때 / Let viewers scrub a product rotation or diagram back and forth.

좋은 예 / Good: 스크롤 1200px 구간이 타임라인 progress 0~1에 대응하고 화면은 500ms 지연으로 부드럽게 따라온다
나쁜 예 / Bad: progress와 스크롤을 연결하지 않고 스크롤이 시작되면 자동 재생돼 되감기가 안 된다. 스크롤 구간이 300px라 너무 민감하다
주의 / Avoid: scrub 중에는 스프링 이징 금지(ease-out 또는 linear) · 자동 재생과 scrub을 한 요소에 섞지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 스크롤 구간 | 1200px | 800~2400px | progress 0~1 |
| 추종 지연 | 500ms | 200~800ms | scrub smoothing |
| 진행 범위 | 0~1 |  | 0에서 1까지 선형 |
| 이징 | none |  | 타임라인 안쪽에서 ease-out 허용 |

## 구현 / Implementation (GSAP)

```js
// ScrollTrigger 없이 코어만: 스크롤 값을 progress로 변환
let target = 0, cur = 0;
addEventListener('scroll', () => target = Math.min(1, scrollY / 1200));
gsap.ticker.add(() => { cur += (target - cur) * 0.12; tl.progress(cur); });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 타임라인을 스크롤로 스크럽하게 해줘. 스크롤 0~1200px를 progress 0~1에 대응시키고 GSAP ticker에서 cur += (target - cur) * 0.12로 부드럽게 따라가게 해. 타임라인은 paused이고 자동 재생은 없어야 해.
```

### 한국어 · Codex
```text
<파일>에 scroll scrub를 구현해. 스크롤 구간 1200px, 지연 계수 0.12, tl.progress(cur)만 호출한다. scrollY 0, 300, 600, 1200 시점에 캡처해 progress가 0, 0.25, 0.5, 1이고 되감을 때 같은 프레임이 나오는지 확인해.
```

### English · Claude Code
```text
Make the timeline in <target> scrub with scroll. Map scroll 0 to 1200px to progress 0 to 1, and follow smoothly in the GSAP ticker with cur += (target - cur) * 0.12. The timeline is paused with no autoplay.
```

### English · Codex
```text
Implement scroll scrub in <file>: 1200px scroll range, smoothing 0.12, only tl.progress(cur) is called. Capture at scrollY 0, 300, 600 and 1200 and verify progress is 0, 0.25, 0.5 and 1, and that rewinding yields identical frames.
```

예시 / Example: 스크롤 스크럽를 `.hero`에 적용해. / Apply Scroll Scrubbing to `.hero`.

## 적용 / Application

- HyperFrames: HyperFrames는 스크롤이 없으므로 progress를 시간축으로 고정해 렌더한다. scrub 로직은 웹 프리뷰용이고 렌더 결과는 같은 tl이다
- ReelForge: ReelForge는 시간 기반이므로 scrub을 쓰지 않는다. 대신 각 씬의 progress 구간 정의를 파라미터로 노출한다
- Scrolline Deck: Scrolline의 기본 방식이다. 스크롤 구간을 progress 0..1로 정규화하고 스프링 대신 ease-out과 500ms 지연을 쓴다

조합 / Pair with: [고정 장면 스크롤리텔링 · Pinned Scrollytelling](../pinned-scrollytelling/) · [스크롤 지연 추종 · Scroll Lag](../scroll-lag/) · [스크롤 프레임 스크럽 · Scroll Frame Scrubbing](../scroll-frame-scrub/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (GSAP Standard License) · motion dictionary 1-principles.md#5. 타이밍·간격·리듬 기본기 (own) · [motiondivision/motion](https://motion.dev/docs/react-scroll-animations) (MIT) · [juliangarnier/anime](https://animejs.com/documentation/events/onscroll) (MIT) · [CodePen GreenSock](https://codepen.io/GreenSock/pen/WNjaxKp) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
