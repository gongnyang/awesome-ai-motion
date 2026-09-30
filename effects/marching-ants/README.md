# Nº 609 행진 점선 · Marching Ants

> 클립 렌더 예정 / Clip rendering planned.

**점선의 간격과 위상이 바뀌어 윤곽을 따라 흐른다.**

Dashes travel along an outline as their phase advances.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: Animated Dashes, 움직이는 점선

## 선택 기준 / Selection

이동 방향이나 연결 흐름을 표시한다. / Indicates direction or a selected boundary.

- 연결 방향을 표시할 때 / Show the direction of a connection.
- 선택 영역의 경계를 유지할 때 / Keep a selection boundary visible.

좋은 예 / Good: 데이터 경로의 점선 위상이 14px 이동해 흐름 방향을 알린다.
나쁜 예 / Bad: 양방향 연결에 한쪽으로 흐르는 점선을 써 의미가 바뀐다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1.2s | 0.8~2s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 대시 길이 | 8px | 4~12px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 간격 | 6px | 4~10px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 선 두께 | 2px | 1~3px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
gsap.set('.ants', { strokeDasharray: '8 6', strokeWidth: 2 });
tl.fromTo('.ants', { strokeDashoffset: 0 },
  { strokeDashoffset: -14, duration: 1.2, ease: 'none' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 행진 점선을 구현해. 주기 1.2s, 대시 길이 8px, 간격 6px, 선 두께 2px, 이징 none을 적용해. SVG stroke-dasharray와 stroke-dashoffset을 갱신한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 행진 점선 장면 레이어에 적용해. 주기 1.2s, 대시 길이 8px, 간격 6px, 선 두께 2px, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Marching Ants on <target>. Use period 1.2s; dash length 8px; gap 6px; stroke width 2px; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Marching Ants to the scene layer in <file>. Use period 1.2s; dash length 8px; gap 6px; stroke width 2px and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 행진 점선를 `.hero`에 적용해. / Apply Marching Ants to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 행진 점선의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 1.2s, 대시 길이 8px, 간격 6px, 선 두께 2px을 싣고 svg 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.2s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [점선 흐름 · Dashed Flow](../dashed-flow/) · [패스 하이라이트 · Path Highlight](../path-highlight/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
