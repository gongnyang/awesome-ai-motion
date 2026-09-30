# Nº 085 비네트 펄스 · Vignette Pulse

> 클립 렌더 예정 / Clip rendering planned.

**화면 가장자리의 어둠이 순간 안쪽으로 조여졌다가 풀린다**

The dark edge of the frame tightens inward for an instant and then releases.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 강조, 분위기 | 숏폼, 설명 영상, 제품 시연 | gsap |

다른 이름 / Also known as: 비네트 압력 펄스, vignette-impact-pulse

## 선택 기준 / Selection

충돌이나 결정 순간의 압력을 느끼게 한다. 중앙에 시선을 모으는 짧은 긴장을 만든다 / Conveys the pressure of impact or a decisive moment, with a brief tension that focuses the eye on the center.

- 충격이나 중요한 발표 순간에 시선을 중앙으로 모을 때 / Focus attention on the center at an impact or key announcement.
- 카운트다운이 끝나는 순간의 긴장을 표현할 때 / Express tension at the end of a countdown.

좋은 예 / Good: 비네트가 opacity 0.4, scale 0.9까지 100ms에 조여졌다 120ms에 풀려 총 220ms에 끝난다
나쁜 예 / Bad: opacity 0.9로 화면이 검게 가려지거나 1초 이상 길게 유지되어 화면이 어둡게 눌린다
주의 / Avoid: opacity 0.6 초과 금지 · 한 컷에 한 번만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| opacity | 0.4 | 0.25~0.55 | 최대 어둠 |
| scale | 0.9 | 0.85~0.95 | 조이는 정도 |
| 총 시간 | 220ms | 150~300ms | 조임 100 풀림 120 |
| 색 | #000 |  | 브랜드 어두운 색도 가능 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.vignette', { opacity: 0, scale: 1.15 }, { opacity: 0.4, scale: 0.9, duration: 0.1, ease: 'power2.out' }, 1.2)
  .to('.vignette', { opacity: 0, scale: 1.15, duration: 0.12, ease: 'power2.in' });
// .vignette: radial-gradient(transparent 55%, #000 100%) 전면 오버레이
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면에 비네트 펄스를 넣어줘. 전면 오버레이에 radial-gradient(transparent 55%, #000 100%)를 두고 1.2초에 opacity 0.4, scale 0.9로 0.1초 조였다가 0.12초에 풀어 0으로 돌아오게 해.
```

### 한국어 · Codex
```text
<파일>에 vignette pulse를 추가해. 오버레이 opacity 0에서 0.4, scale 1.15에서 0.9로 0.1초, 이어서 0.12초에 원상 복귀, 시작 1.2초. 1.2초, 1.3초, 1.5초를 캡처해 1.3초에 가장자리가 가장 어둡고 1.5초에는 완전히 사라지는지 확인해.
```

### English · Claude Code
```text
Add a vignette pulse to the scene in <target>. Put a full overlay with radial-gradient(transparent 55%, #000 100%) and at 1.2 seconds tighten it to opacity 0.4 and scale 0.9 over 0.1 seconds, then release over 0.12 seconds back to 0.
```

### English · Codex
```text
Add a vignette pulse to <file>: overlay opacity 0 to 0.4 and scale 1.15 to 0.9 over 0.1s, then back over 0.12s, starting at 1.2s. Capture at 1.2s, 1.3s and 1.5s and verify the edges are darkest at 1.3s and fully gone at 1.5s.
```

예시 / Example: 비네트 펄스를 `.hero`에 적용해. / Apply Vignette Pulse to `.hero`.

## 적용 / Application

- HyperFrames: 오버레이 div 하나에 radial-gradient를 두고 opacity와 scale만 tween한다. 220ms는 6.6프레임이므로 30fps에서 7프레임으로 잡는다
- ReelForge: 브리프에 비네트 색, opacity, scale, 시작 시각을 싣는다
- Scrolline Deck: 진행률의 2~3% 구간에 걸쳐 재생한다. scrub 방향이 뒤집혀도 0으로 돌아와 잔상이 없다

조합 / Pair with: [방사 속도선 · Radial Speed Lines](../radial-speed-lines/) · [화면 흔들림 · Screen Shake](../screen-shake/) · [줌 플래시 · Zoom Flash](../zoom-flash/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#vignette-impact-pulse`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
