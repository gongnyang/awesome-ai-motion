# Nº 192 링 줌 · Ring Zoom

> 클립 렌더 예정 / Clip rendering planned.

**동심원 띠마다 서로 다른 확대율로 영상이 보이며 중심에서 장면이 교체되는 전환**

Concentric rings show the footage at different magnifications, and the scene is replaced from the center.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 제품 시연 | webgl |

다른 이름 / Also known as: 동심원 줌

## 선택 기준 / Selection

터널처럼 층진 집중과 깊이감. 시선이 안쪽으로 빨려 든다 / Tunnel-like layered focus and depth: the eye is pulled inward.

- 시선을 중심 피사체로 강하게 모을 때 / Strongly gather attention on a central subject.
- 터널이나 워프 톤의 SF 연출에서 / SF-style tunnel or warp looks.

좋은 예 / Good: 0.8초 동안 링 3개가 각각 1.0, 1.4, 2.0배의 서로 다른 확대율로 앞 장면을 샘플링하고 중심 링부터 뒤 장면으로 교체된다
나쁜 예 / Bad: 링 개수가 많아 화면이 줄무늬처럼 어지럽거나, 링 경계가 톱니처럼 거칠다
주의 / Avoid: 링 5개 초과 금지 · 링 경계에 1~2px 페더를 준다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.6~1.2s | 선형 |
| 링 수 | 3 | 2~5 | 동심 |
| 확대율 | 1.0/1.4/2.0 | 1.0~3.0 | 안쪽일수록 큼 |
| 교체 순서 | 안에서 밖으로 |  | 링마다 0.1s 차이 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
gsap.utils.toArray('.ring').forEach((r, i) => {
  const s = [1.0, 1.4, 2.0][i];
  tl.to(r, { scale: s, duration: 0.8, ease: 'none' }, 0)
    .to(r.querySelector('.b'), { opacity: 1, duration: 0.2, ease: 'none' }, 0.6 - i * 0.2);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 링 줌 전환을 만들어줘. 화면 중심에 지름이 다른 동심원 링 3개를 만들고 각 링 안의 A가 0.8초 동안 scale 1.0, 1.4, 2.0까지 linear로 확대되게 해. 중심 링부터 0.2초 간격으로 B로 교체하고 링 경계에 2px 페더를 줘. paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 ring zoom을 적용해. .ring 3개의 내부 scale을 1.0, 1.4, 2.0으로 0.8s ease none 확대하고 .b opacity 1을 안쪽 링부터 0.6, 0.4, 0.2초 시점에 0.2s로 올린다. 0.3초 캡처에서 링마다 확대율이 다른지, 0.8초에 전 링이 B인지 확인해.
```

### English · Claude Code
```text
Build a ring zoom from <targetA> to <targetB>. Create three concentric rings at the frame center and scale A inside each to 1.0, 1.4, and 2.0 linearly over 0.8 seconds. Swap to B starting with the center ring at 0.2-second intervals and feather the ring edges by 2px. One paused timeline.
```

### English · Codex
```text
Apply a ring zoom in <file>. Scale the inner content of 3 .ring elements to 1.0, 1.4, and 2.0 over 0.8s with ease none, and fade .b to opacity 1 (0.2s) starting from the inner ring at 0.6, 0.4, and 0.2 seconds. Capture at 0.3 seconds to confirm each ring has a different magnification, and at 0.8 seconds to confirm all rings show B.
```

예시 / Example: 링 줌를 `.hero`에 적용해. / Apply Ring Zoom to `.hero`.

## 적용 / Application

- HyperFrames: 링마다 clipPath: circle() 컨테이너를 두고 안쪽 콘텐츠 scale을 다르게 한다. 컨테이너 수를 링 수로 제한한다
- ReelForge: 씬 워커 브리프에 rings, scales, swapOrder, durationMs를 싣는다
- Scrolline Deck: 진행률 p로 링별 scale = 1 + (s - 1) * p 계산. 교체는 안쪽 링부터 진행률 0.2 간격

조합 / Pair with: [줌 전환 · Zoom Through](../zoom-through/) · [줌 플래시 · Zoom Flash](../zoom-flash/) · [마스크 전환 · Shape Mask Transition](../iris-mask/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomInCircles.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
