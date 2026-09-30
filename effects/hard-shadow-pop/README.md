# Nº 565 하드 섀도 팝 · Hard Shadow Pop

> 클립 렌더 예정 / Clip rendering planned.

**요소가 대각선으로 조금 이동하며 계단 같은 단단한 그림자가 늘어나 튀어나오는 표현**

An element shifts a little diagonally while a stepped, hard-edged shadow grows behind it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 기본 | 강조, 주목 끌기 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 단단한 그림자 튀기

## 선택 기준 / Selection

인쇄물이나 만화처럼 두께와 입체감이 생긴다. 블러 없는 그림자가 단단한 결정 느낌을 준다 / Adds print-like thickness and depth. A blur-free shadow feels solid and graphic.

- 제목이나 버튼에 팝아트식 두께를 줄 때 / Give a headline or button a pop-art thickness.
- 스티커, 배지 같은 라벨을 강조할 때 / Emphasize a sticker or badge label.
- 캐주얼하고 경쾌한 톤의 숏폼 자막을 만들 때 / Casual, upbeat short-form captions.

좋은 예 / Good: 글자가 좌상단으로 8px 이동하고 그림자가 8단계로 우하단에 늘어나 400ms 안에 두꺼운 인쇄 글자가 된다
나쁜 예 / Bad: 그림자 색이 배경과 비슷해 두께가 안 보이거나, 단계가 12개를 넘어 지저분해진다
주의 / Avoid: 그림자는 블러 없이 단색으로 한다 · 단계 수는 4~10개로 한다 · 본문 글자에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.4s | 0.25~0.6s | 이동과 그림자 동시 |
| 이동 | 8px | 4~14px | 좌상단 |
| 그림자 단계 | 8 | 4~10 | 1px씩 |
| 그림자 색 | #111 | 배경과 대비 4:1 | 단색 |
| 이징 | power2.out | back.out(1.2) 포함 |  |

## 구현 / Implementation (GSAP)

```js
const shadow = (n) => Array.from({ length: n }, (_, i) => `${i + 1}px ${i + 1}px 0 #111`).join(',');
const s = { n: 0 };
tl.to(s, { n: 8, duration: 0.4, ease: 'power2.out', onUpdate: () => el.style.textShadow = shadow(Math.round(s.n)) }, 0.3)
  .to(el, { x: -8, y: -8, duration: 0.4, ease: 'power2.out' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <제목>에 하드 섀도 팝을 넣어줘. 0.3초부터 0.4초 동안 요소를 좌상단으로 8px 이동시키고, text-shadow를 1px 단위 단색 #111로 0에서 8단계까지 늘려 우하단으로 계단처럼 자라게 해. onUpdate에서 단계 수를 Math.round로 정수화하고 이징 power2.out, paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 제목에 hard-shadow-pop을 적용해. n 0→8을 position 0.3, duration 0.4, ease power2.out으로 tween하고 onUpdate에서 text-shadow를 'k px k px 0 #111' k=1..round(n)로 갱신, 요소는 x,y -8. 0.3초는 그림자 없음, 0.5초는 중간 단계, 1.0초는 8단계 그림자와 위치 -8/-8인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to add a hard shadow pop to <headline>. From 0.3 seconds over 0.4 seconds, move the element 8px to the upper left while growing a solid #111 text-shadow in 1px steps from 0 to 8 layers toward the lower right. Round the step count in onUpdate, ease power2.out, one paused timeline.
```

### English · Codex
```text
Apply hard-shadow-pop to the headline in <file>. Tween n from 0 to 8 at position 0.3, duration 0.4, ease power2.out, updating text-shadow to 'k px k px 0 #111' for k=1..round(n), and move the element x,y to -8. Capture 0.3s (no shadow), 0.5s (partial steps) and 1.0s (8 steps at -8/-8).
```

예시 / Example: 하드 섀도 팝를 `.hero`에 적용해. / Apply Hard Shadow Pop to `.hero`.

## 적용 / Application

- HyperFrames: 정수 단계 스냅은 seek에서도 결정적이다. onUpdate 값은 Math.round로 정수화한다
- ReelForge: 브리프에 대상, 이동 8px, 단계 8, 그림자 색을 싣는다. 만화체 톤이면 회전 -2도를 추가한다
- Scrolline Deck: 진행률 0~1을 단계 수 0~8과 이동 0~8px에 매핑한다. 단계 스냅이라 계단처럼 자란다

조합 / Pair with: [스케일 팝 · Scale Pop](../scale-pop/) · [위글 · Wiggle](../wiggle/) · [키네틱 비트 · Kinetic Beats](../kinetic-beats/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [magicuidesign/magicui](https://magicui.design/docs/components/line-shadow-text) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
