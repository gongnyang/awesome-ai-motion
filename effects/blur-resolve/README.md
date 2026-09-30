# Nº 058 블러 해제 · Blur Resolve

> 클립 렌더 예정 / Clip rendering planned.

**흐릿한 대상이 블러 반경이 줄며 선명해져 시선을 모으는 등장**

A blurred target sharpens as its blur radius falls, pulling the eye.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 기본 | 주목 끌기, 전환 | 숏폼, 설명 영상, 웹 UI | gsap |

다른 이름 / Also known as: Blur / Focus resolve, 초점 흐림, Focus Text Reveal, 글자 초점 리빌, Text Blur Reveal, 텍스트 블러 리빌, Text Blur Resolve, 텍스트 초점 해소

## 선택 기준 / Selection

초점이 맞는 순간에 눈이 간다. 흐림에서 선명으로 가는 방향이 시선을 이끈다 / The eye goes to what comes into focus. The blur to sharp direction leads attention.

- 제목이나 제품 이미지가 초점 맞듯 나타날 때 / When a title or product shot arrives as if focusing
- 뒤 배경은 흐리게 두고 대상만 선명하게 밀어 올릴 때 / When the background stays soft and only the target sharpens

좋은 예 / Good: 제목이 blur 4px, opacity 0에서 250ms 동안 blur 0, opacity 1로 선명해진다
나쁜 예 / Bad: blur 20px 이상으로 시작해 오래 걸리거나, 글자 위에 항상 블러가 남는다
주의 / Avoid: blur 시작 3~8px · 길이 0.2~0.4초 · 종료 blur는 정확히 0(filter none)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시작 blur | 4px | 3~8px | 1920x1080 기준 |
| 길이 | 250ms | 200~400ms | 선명해지는 시간 |
| opacity | 0→1 | 0→1 | blur와 함께 상승 |
| 이징 | power2.out | power2~power3.out | 끝에서 감속 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.title', { filter: 'blur(4px)', opacity: 0 }, { filter: 'blur(0px)', opacity: 1, duration: 0.25, ease: 'power2.out', clearProps: 'filter' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 제목에 블러 해제를 넣어줘. 0.3초에 filter blur(4px), opacity 0에서 시작해 0.25초 동안 blur(0px), opacity 1로 power2.out. 종료 시 clearProps로 filter를 제거해 글자가 선명하게 남게 해. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 blur-resolve를 적용해. fromTo({filter blur(4px), opacity 0}, {blur(0px), opacity 1}, 0.25s, power2.out, position 0.3, clearProps filter). 0.3초·0.42초·0.8초를 캡처해 흐림 정도가 줄어드는지, 0.8초에 computed filter가 none인지 확인해.
```

### English · Claude Code
```text
Add a blur resolve to the <target> title with GSAP. At 0.3s start with filter blur(4px), opacity 0 and animate to blur(0px), opacity 1 over 0.25s with power2.out. Use clearProps to remove filter afterward so text stays sharp. Paused timeline.
```

### English · Codex
```text
Apply blur-resolve to <target> in <file>. fromTo({filter blur(4px), opacity 0}, {blur(0px), opacity 1}, 0.25s, power2.out, position 0.3, clearProps filter). Capture at 0.3s, 0.42s and 0.8s to check the blur shrinks and that computed filter is none at 0.8s.
```

예시 / Example: 블러 해제를 `.hero`에 적용해. / Apply Blur Resolve to `.hero`.

## 적용 / Application

- HyperFrames: filter blur는 seek에서 결정론이지만 큰 요소에서 렌더가 무겁다. 작은 범위에 걸고 clearProps로 종료 후 filter를 제거
- ReelForge: 브리프에 시작 blur·길이·대상 크기를 싣는다. 전체 화면 블러는 피한다
- Scrolline Deck: scrub에서는 blur를 진행률 0~0.4에 4→0으로 매핑한다. 진행률이 커진 뒤 filter none으로 고정

조합 / Pair with: [랙 포커스 · Rack Focus](../rack-focus/) · [페이드 · Fade](../fade/) · [블러 리빌 · Blur Reveal](../blur-reveal/)

출처 / Sources: motion dictionary 1-principles.md#8. 2D 속성 기본 동작 (own) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT) · [pixel-point/animate-text](https://github.com/pixel-point/animate-text) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
