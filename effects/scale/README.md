# Nº 023 스케일 · Scale

> 클립 렌더 예정 / Clip rendering planned.

**기준점에서 크기를 비례로 바꿔 펼쳐지는 방향과 크기 변화를 보여 주는 기본 동작**

Changes size proportionally from an anchor so growth direction and amount read clearly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 강조, 전환 | 웹 UI, 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: Scale / Zoom, 크기 변화, ScaleX / ScaleY, 축별 크기

## 선택 기준 / Selection

크기가 커지거나 작아지는 변화와 어디서 펼쳐지는지를 함께 알린다 / Size change and where it unfolds from are told together.

- 카드·모달이 살짝 커지며 나타날 때 / When a card or modal grows slightly as it appears
- 버튼을 눌렀을 때 미세하게 줄었다 돌아올 때 / When a button dips and returns on press
- 가로나 세로 한 축으로만 늘어나는 막대·바를 그릴 때 / When drawing bars that grow along one axis

좋은 예 / Good: 모달이 scale 0.96에서 1로 300ms 동안 커지며 중앙에서 펼쳐진다
나쁜 예 / Bad: scale 0에서 시작해 글자가 깨져 보이거나 원점이 요소 밖이라 엉뚱한 방향으로 커진다
주의 / Avoid: scale 0.9 미만 시작은 글자 요소에 금지 · transform-origin을 의도에 맞게 지정 · opacity와 같이 써서 튐 방지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시작 배율 | 0.96 | 0.9~0.98 | 1에 가까울수록 고급스럽다 |
| 길이 | 300ms | 200~450ms | 이동 시간 |
| 원점 | 50% 50% | 방향에 따라 지정 | 막대는 50% 100% |
| 이징 | power3.out | power2~power4.out | 도착이 부드럽게 |

## 구현 / Implementation (GSAP)

```js
tl.from('.modal', { scale: 0.96, opacity: 0, transformOrigin: '50% 50%', duration: 0.3, ease: 'power3.out' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>에 스케일 등장을 넣어줘. 0.3초에 scale 0.96, opacity 0에서 시작해 0.3초 동안 scale 1, opacity 1로 power3.out으로 커져. transformOrigin은 50% 50%, 막대라면 50% 100%. 종료 scale은 정확히 1로 두고 paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 scale을 적용해. from({scale 0.96, opacity 0, transformOrigin '50% 50%'}, 0.3s, power3.out, position 0.3). 0.3초·0.45초·0.8초를 캡처해 시작 배율 0.96, 중간, 종료 1.0과 글자 선명도를 확인해.
```

### English · Claude Code
```text
Add a scale entrance to <target> with GSAP. At 0.3s start at scale 0.96, opacity 0 and grow to scale 1, opacity 1 over 0.3s with power3.out. transformOrigin 50% 50%, or 50% 100% for bars. End scale exactly 1 and use a paused timeline.
```

### English · Codex
```text
Apply scale to <target> in <file>. from({scale 0.96, opacity 0, transformOrigin '50% 50%'}, 0.3s, power3.out, position 0.3). Capture at 0.3s, 0.45s and 0.8s to check start scale 0.96, the midpoint, end scale 1.0 and text sharpness.
```

예시 / Example: 스케일를 `.hero`에 적용해. / Apply Scale to `.hero`.

## 적용 / Application

- HyperFrames: transformOrigin을 tween에 명시해 seek마다 같은 원점이 되게 한다. 글자 흐림을 막으려면 종료 scale을 정확히 1로 둔다
- ReelForge: 브리프에 시작 배율·원점·길이를 싣고 가로 또는 세로 확장은 scaleX/scaleY로 구분한다
- Scrolline Deck: scrub에서는 0.96→1을 진행률 0~0.5에 매핑하고 opacity를 함께 올린다. 스프링 없이 ease-out

조합 / Pair with: [페이드 · Fade](../fade/) · [슬라이드 · Slide](../slide/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: motion dictionary 1-principles.md#8. 2D 속성 기본 동작 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
