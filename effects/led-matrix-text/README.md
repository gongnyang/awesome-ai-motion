# Nº 631 LED 문자 점등 · LED Matrix Text

> 클립 렌더 예정 / Clip rendering planned.

**점 행렬 글자가 열 단위로 왼쪽부터 켜지고 도착 깜빡임 뒤 고정되는 전광판 텍스트**

Dot-matrix letters light up column by column from the left, flicker briefly on arrival, then hold.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 고급 | 분위기, 피드백, 설명 | 숏폼, 웹 UI, 설명 영상 | canvas |

다른 이름 / Also known as: LED text wipe

## 선택 기준 / Selection

전광판·안내판에 정보가 도착하는 느낌. 디지털하고 기계적인 신뢰감을 준다 / Information arriving on a display board: digital, mechanical, dependable.

- 레트로 전광판, 지하철 안내, 디지털 시계 톤의 제목 / Retro signboard, transit display or digital clock style titles
- 짧은 상태 문구가 도착하는 장면 / A short status phrase arriving on screen

좋은 예 / Good: 점 격자에서 글자 형태의 점이 열별로 20ms 간격으로 켜지고 마지막에 2프레임 깜빡인 뒤 고정된다
나쁜 예 / Bad: 점 수가 너무 적어 글자가 뭉개지거나 켜지는 순서가 무작위라 읽는 방향과 무관하다
주의 / Avoid: 한 글자는 7x9 이상 점 격자를 쓴다. 한글은 11x11 이상이 필요하다 · 켜지는 방향은 읽는 방향(왼쪽에서 오른쪽)으로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 열 시작 차 | 20ms | 10~40ms | 왼쪽부터 |
| 총 시간 | 0.6s | 0.4~1.0s | 글자 수에 비례 |
| 도착 깜빡임 | 2프레임 | 1~3프레임 | 밝기 1.3배 |
| 점 반경 | 3px | 2~4px | 셀 8px |

이징 / Ease: `steps`

## 구현 / Implementation (GSAP)

```js
// 글자 비트맵을 캔버스에서 샘플링해 dots[{x,y,col}] 생성
function draw(t){
  ctx.clearRect(0, 0, W, H);
  dots.forEach(d => {
    const on = t >= 0.2 + d.col * 0.02;
    const flash = on && t < 0.2 + d.col * 0.02 + 0.067 ? 1.3 : 1;
    ctx.globalAlpha = on ? Math.min(1, 0.85 * flash) : 0.08;
    ctx.beginPath(); ctx.arc(d.x, d.y, 3, 0, 6.283); ctx.fill();
  });
}
tl.eventCallback('onUpdate', () => draw(tl.time()));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문구를 LED 점 행렬 텍스트로 만들어줘. 캔버스에서 굵은 폰트로 문구를 그려 8px 셀로 샘플링하고 반경 3px 점으로 표시, 꺼진 점은 불투명도 0.08. 열 번호 순으로 20ms 간격으로 켜고 마지막에 2프레임 밝기 1.3배 깜빡임 뒤 고정해.
```

### 한국어 · Codex
```text
<파일>에 led matrix text를 적용해. 굵은 폰트로 텍스트를 캔버스에 그려 8px 셀로 샘플링, 반경 3px 점, 꺼진 점 알파 0.08. 열 c는 t>=0.2+c*0.02에 켜지고 0.067초 동안 밝기 1.3배. 0.4초·0.8초·1.5초를 캡처해 왼쪽에서 오른쪽 스캔 진행과 최종 글자 판독 가능 여부를 확인해.
```

### English · Claude Code
```text
Render the phrase in <target> as LED dot-matrix text. Draw it in a bold font to canvas, sample on an 8px cell grid, show 3px-radius dots with off-dots at opacity 0.08. Light columns left to right 20ms apart, give a 2-frame 1.3x brightness flash on arrival, then hold.
```

### English · Codex
```text
Apply led matrix text in <file>. Sample bold-font canvas text on an 8px grid; 3px dots; off-dots alpha 0.08. Column c turns on at t>=0.2+c*0.02 with 1.3x brightness for 0.067s. Capture at 0.4s, 0.8s and 1.5s to confirm the left-to-right scan and that the final text is legible.
```

예시 / Example: LED 문자 점등를 `.hero`에 적용해. / Apply LED Matrix Text to `.hero`.

## 적용 / Application

- HyperFrames: 열 번호 기반 임계 시각으로 밝기를 계산한다. 캔버스에서 한글을 샘플링하면 굵은 폰트를 써야 점이 획을 이룬다
- ReelForge: 브리프에 문구, 격자 셀 8px, 점 반경 3px, 열 시작 차 20ms, 깜빡임 2프레임, 굵은 폰트 이름을 싣는다
- Scrolline Deck: 진행률에 열 번호를 비례시켜 스캔한다. 진행률을 되돌리면 켜진 점이 꺼진다. 꺼진 점은 알파 0.08로 남겨 격자 형태를 유지한다

조합 / Pair with: [입자 채움 글자 · Particle Filled Text](../particle-filled-text/) · [분할 플랩 문자판 · Split Flap Display](../split-flap/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
