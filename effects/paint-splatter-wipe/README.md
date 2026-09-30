# Nº 188 페인트 스플래터 와이프 · Paint Splatter Wipe

> 클립 렌더 예정 / Clip rendering planned.

**불규칙한 페인트 얼룩과 점이 번져 다음 장면을 드러낸다**

Irregular paint blobs and dots spread and reveal the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상 | svg |

다른 이름 / Also known as: 페인트 튐 와이프

## 선택 기준 / Selection

손으로 뿌린 듯한 페인트 얼룩이 번지며 다음 장면을 드러낸다. 활기와 수작업 느낌이다 / Adds a lively hand-splashed feel.

- 예술, 요리, 캐주얼 브랜드 톤에서 화면을 활기차게 넘길 때 / To switch screens energetically in art, food, or casual brand tones
- 창작 도구나 디자인 서비스 소개에서 색이 튀는 전환을 쓸 때 / In creative tool or design service intros where color splashes are on-message

좋은 예 / Good: SVG 얼룩 마스크의 scale이 0.7초 동안 0에서 1.6으로 커지며 큰 얼룩 하나와 작은 점 12개가 번져 다음 장면 전체를 드러낸다
나쁜 예 / Bad: 얼룩이 원형에 가까워 iris와 구분되지 않거나, 얼룩이 화면 구석을 덮지 못해 이전 장면이 조각으로 남는다
주의 / Avoid: 최종 scale에서 화면을 완전히 덮는지 캡처로 확인한다 · 얼룩 모양은 시드 고정 SVG 자산을 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~900ms | easeOutCubic |
| 마스크 scale | 0에서 1.6 | 1.4~1.8 | 화면 완전 덮음 |
| 작은 점 수 | 12 | 8~20 | 큰 얼룩 주변 |
| 점 지연 | 0~120ms | 0~150ms | 시드 고정 |
| 시드 | 1 | 고정 정수 | 얼룩 모양 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('#splat', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1.6, duration: 0.7, ease: 'power3.out' }, 0);
tl.fromTo('.dot', { scale: 0 }, { scale: 1, duration: 0.4, ease: 'back.out(1.4)', stagger: 0.01 }, 0.05);
// .next 는 mask: url(#splat-mask) 로 공개
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 페인트 스플래터 와이프를 넣어줘. 얼룩 SVG(#splat)를 mask로 쓰고 scale을 0에서 1.6으로 0.7초 power3.out으로 키워 다음 장면을 공개해. 주변 점 12개는 0.01초 stagger로 scale 0에서 1. 최종 프레임에서 이전 장면이 남지 않게 확인하고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 페인트 스플래터 와이프를 구현해. #splat scale 0에서 1.6, 0.7초 power3.out, .dot 12개 scale 0에서 1 (0.4초, stagger 0.01, 시작 0.05). 0.2초, 0.4초, 0.7초 시점을 캡처해 얼룩이 커지는지, 0.7초에 이전 장면 픽셀이 없는지 확인해.
```

### English · Claude Code
```text
Add a Paint Splatter Wipe to <target>. Use the SVG blob #splat as a mask, growing its scale from 0 to 1.6 over 0.7s with power3.out to reveal the next scene. 12 surrounding dots scale 0 to 1 with a 0.01s stagger. Verify no pixels of the previous scene remain in the final frame, on a paused, seekable timeline.
```

### English · Codex
```text
Implement Paint Splatter Wipe in <file>. #splat scale 0 to 1.6 over 0.7s power3.out; 12 .dot elements scale 0 to 1 (0.4s, stagger 0.01, start 0.05). Capture at 0.2s, 0.4s, and 0.7s to confirm the blob grows and that no old-scene pixels are left at 0.7s.
```

예시 / Example: 페인트 스플래터 와이프를 `.hero`에 적용해. / Apply Paint Splatter Wipe to `.hero`.

## 적용 / Application

- HyperFrames: SVG mask 안의 얼룩 path를 scale로 키운다. 얼룩 자산은 사전에 만든 SVG를 쓰고 난수는 쓰지 않아 seek가 결정론적이다
- ReelForge: 씬 워커 브리프에 얼룩 SVG 자산, 최종 scale 1.6, 점 12개, 시드 1을 싣는다
- Scrolline Deck: scrub에서는 scale을 진행률 0~1에 ease-out으로 매핑해 되감기가 깔끔하다. back.out 오버슈트는 피한다

조합 / Pair with: [잉크 번짐 · Ink Bleed](../ink-bleed/) · [스크리블 와이프 · Scribble Wipe](../scribble-wipe/) · [리플 디졸브 · Ripple Dissolve](../ripple-dissolve/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
