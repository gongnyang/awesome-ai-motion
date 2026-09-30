# Nº 198 솔라리제이션 디졸브 · Solarized Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**색과 밝기의 일부가 반전된 고대비 상태를 지나 다음 장면으로 바뀐다**

The scene passes through a high-contrast state with part of the colors and brightness inverted, then changes to the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

## 선택 기준 / Selection

색과 밝기가 일부 반전된 고대비 상태를 지나 다음 장면으로 바뀐다. 인화 실험 같은 낯선 도약이다 / Creates an intense print-like effect and a strange jump between scenes.

- 꿈, 환각, 시간 도약 같은 초현실 장면 전환 / For surreal scene changes such as dreams, hallucination, or time jumps
- 사진 인화나 실험 영화 톤의 뮤직 영상 컷 / For photographic print or experimental film-style music video cuts

좋은 예 / Good: 600ms 동안 밝기 임계 0.5 이상 색이 반전된 고대비 상태로 들어갔다가, 중간에 다음 장면으로 바뀌고 반전이 풀린다
나쁜 예 / Bad: 반전 세기가 최대인 채 오래 유지돼 눈이 피로하거나, 임계값이 낮아 화면 전체가 네거티브가 된다
주의 / Avoid: 반전 유지 구간은 전체의 40% 이하 · 텍스트가 있는 장면에는 반전 시 대비가 유지되는지 확인한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 450~800ms | linear |
| 임계값 | 0.5 | 0.4~0.6 | 밝기 |
| 반전 세기 최대 | 진행 50% | 40~60% | sin 곡선 |
| 대비 | 1.4 | 1.2~1.6 | 고대비 |
| 채도 | 1.2 | 1~1.4 |  |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const s = { p: 0 };
tl.to(s, { p: 1, duration: 0.6, ease: 'none', onUpdate: () => {
  const k = Math.sin(Math.PI * s.p);
  gsap.set(['.prev', '.next'], { filter: `invert(${k * 0.85}) contrast(${1 + 0.4 * k}) saturate(${1 + 0.2 * k})` });
} }, 0);
tl.set('.prev', { autoAlpha: 0 }, 0.3).set('.next', { autoAlpha: 1 }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 솔라리제이션 디졸브를 넣어줘. p 0에서 1을 0.6초 linear로 진행하고 k=sin(pi*p)에 맞춰 두 장면에 filter invert(k*0.85) contrast(1+0.4k) saturate(1+0.2k)를 걸어줘. 0.3초에 .prev를 숨기고 .next를 표시. p만 보간해 paused 타임라인에서 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 솔라리제이션 디졸브를 구현해. p 0에서 1, 0.6초 none, filter invert(0.85k) contrast(1+0.4k) saturate(1+0.2k), k=sin(pi*p), 0.3초 장면 교체. 0.15초, 0.3초, 0.45초, 0.6초 시점을 캡처해 정점(0.3초)에서 반전이 최대인지, 0.6초에 필터가 초기값인지 확인해.
```

### English · Claude Code
```text
Add a Solarized Dissolve to <target>. Run p from 0 to 1 over 0.6s with linear ease and apply filter invert(0.85k) contrast(1+0.4k) saturate(1+0.2k) to both scenes with k = sin(pi*p). Swap .prev for .next at 0.3s. Only p is interpolated, so a paused timeline seeks exactly.
```

### English · Codex
```text
Implement Solarized Dissolve in <file>. p 0 to 1 over 0.6s ease none; filter invert(0.85k) contrast(1+0.4k) saturate(1+0.2k) with k=sin(pi*p); swap scenes at 0.3s. Capture at 0.15s, 0.3s, 0.45s, and 0.6s to confirm inversion peaks at 0.3s and filters are back to defaults at 0.6s.
```

예시 / Example: 솔라리제이션 디졸브를 `.hero`에 적용해. / Apply Solarized Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: CSS filter invert, contrast를 p에서 계산해 준다. 정확한 임계 반전은 WebGL이 필요하고 CSS는 근사이다. p만 쓰면 seek 안전하다
- ReelForge: 씬 워커 브리프에 임계값 0.5, 반전 최대 0.85, 지속 600ms를 싣는다. 근사 사용 시 명시한다
- Scrolline Deck: scrub에서는 반전 세기를 진행률 sin 곡선으로 고정하고 스프링은 쓰지 않는다

조합 / Pair with: [네거티브 스페이스 반전 · Negative Space Inversion](../negative-space-invert/) · [흑백 디졸브 · Grayscale Dissolve](../grayscale-dissolve/) · [HSV 디졸브 · HSV Dissolve](../hsv-dissolve/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
