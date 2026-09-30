# Nº 482 점진적 블러 · Progressive Blur

> 클립 렌더 예정 / Clip rendering planned.

**콘텐츠 가장자리로 갈수록 흐림이 점점 강해져 움직이는 내용이 자연스럽게 사라지는 블러**

Blur grows toward the content edge so moving content fades away smoothly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 강조, 피드백 | 웹 UI, 스크롤덱, 제품 시연 | css |

다른 이름 / Also known as: 가장자리 점진 흐림, GradualBlur, progressive-blur

## 선택 기준 / Selection

경계가 딱딱하게 잘리지 않고 스르르 녹는 느낌. 중심 정보에 시선을 모은다 / Edges melt away instead of being cut hard, focusing attention on the central information.

- 스크롤 목록이 헤더나 하단 바 뒤로 사라지는 가장자리를 다듬을 때 / Smooth the edge where a scrolling list slides behind a header or bottom bar.
- 중심 콘텐츠 주변을 흐리게 눌러 초점을 만들 때 / Blur the surroundings to create focus on the central content.

좋은 예 / Good: 카드 목록이 아래로 스크롤될 때 하단 120px 구간에서 blur가 0에서 12px로 점점 강해지며 자연스럽게 사라진다
나쁜 예 / Bad: 단일 blur 한 겹을 통째로 걸어 경계가 선으로 보이거나, 흐림이 24px을 넘어 화면이 지저분해진다
주의 / Avoid: blur 16px 초과 금지 · 층 하나로 처리하지 말고 4~6겹으로 나눠 경계를 숨긴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 블러 최대 | 12px | 8~16px | 가장자리 끝 |
| 경계 폭 | 120px | 80~200px | 흐림이 커지는 구간 |
| 겹 수 | 5 | 4~6 | backdrop 층 개수 |
| 등장 지속 | 600ms | 400~900ms | 가장자리 흐림이 켜지는 시간 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const layers = [...document.querySelectorAll('.pb-layer')]; // 5겹
layers.forEach((el, i) => {
  el.style.setProperty('--b', `${(i + 1) * 12 / 5}px`);
  el.style.maskImage = `linear-gradient(to top, #000 ${i * 20}%, #000 ${i * 20 + 20}%, transparent ${i * 20 + 40}%)`;
});
tl.fromTo('.pb', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0);
/* .pb-layer { backdrop-filter: blur(var(--b)); } */
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 스크롤 영역의 하단 가장자리에 점진적 블러를 넣어줘. 높이 120px 구간을 5겹 backdrop-filter로 나눠 blur가 0에서 12px까지 커지게 하고, 각 겹은 linear-gradient 마스크로 자연스럽게 이어 붙여. 덮개는 0.6초 power2.out으로 나타나게 하고, 스크롤되는 카드가 이 구간에서 부드럽게 흐려지며 사라지도록 해.
```

### 한국어 · Codex
```text
<파일>의 스크롤 컨테이너 하단에 .pb-layer 5개를 겹쳐. 각 층 blur = (i+1)*12/5 px, mask는 to top 그라디언트로 20% 간격 페이드. 전체 .pb는 0.6초 power2.out로 opacity 0→1. 캡처 1.0초에 하단 120px 구간에서 blur가 연속적으로 커지고 경계 선이 보이지 않는지, 중심부는 선명한지 확인해.
```

### English · Claude Code
```text
Add a progressive blur to the bottom edge of the scroll area in <target>. Split a 120px band into 5 backdrop-filter layers so blur grows from 0 to 12px, and join the layers with linear-gradient masks. The overlay appears over 0.6 seconds with power2.out and cards scrolling through it fade out smoothly.
```

### English · Codex
```text
Stack 5 .pb-layer elements at the bottom of the scroll container in <file>. Each blur = (i+1)*12/5 px with a to-top gradient mask fading at 20% steps. Fade the whole .pb in over 0.6 s power2.out. Capture at 1.0 s to confirm blur grows continuously across the 120px band with no visible seam and the center stays sharp.
```

예시 / Example: 점진적 블러를 `.hero`에 적용해. / Apply Progressive Blur to `.hero`.

## 적용 / Application

- HyperFrames: 겹마다 backdrop-filter와 mask 그라디언트를 고정하고 가장자리 덮개 전체의 opacity만 tween한다. 캡처 환경에서 backdrop-filter가 안 될 때를 대비해 사전 블러 이미지 폴백을 둔다
- ReelForge: 씬 브리프에 blur 최대 12px, 경계 폭 120px, 겹 수 5, 방향(하단/상단)을 싣는다
- Scrolline Deck: 스크롤로 이동하는 목록은 마스크가 고정이고 내용이 움직이므로 진행률과 무관하게 정적이다. 등장만 진행률 0~0.1에 건다

조합 / Pair with: [블러 해제 · Blur Resolve](../blur-resolve/) · [랙 포커스 · Rack Focus](../rack-focus/) · [스크롤 스크럽 · Scroll Scrubbing](../scroll-scrub/) · [스포트라이트 · Spotlight](../spotlight/)

출처 / Sources: [ibelick/motion-primitives](https://motion-primitives.com/docs/progressive-blur) (MIT) · [magicuidesign/magicui](https://magicui.design/docs/components/progressive-blur) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
