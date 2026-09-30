# Nº 509 유성 · Shooting Stars

> 클립 렌더 예정 / Clip rendering planned.

**가는 빛 꼬리가 비스듬히 빠르게 스쳐 지나가고 사라지는 유성 효과**

Thin light trails streak diagonally and fade out like meteors.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 기본 | 분위기, 브랜딩 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Meteors and Shooting Stars, 유성과 별똥별, Meteors, shooting-stars-and-stars-background

## 선택 기준 / Selection

밤하늘과 우주 분위기, 순간적으로 스치는 에너지. 배경에 생기를 더한다 / Night sky and space atmosphere, a brief burst of energy that adds life to a background.

- 우주·밤·AI 같은 주제의 배경에 작은 움직임을 줄 때 / Add small motion to backgrounds themed on space, night or AI.
- 정지된 다크 배경이 심심할 때 드문드문 시선을 스치게 할 때 / Give a static dark backdrop an occasional glance-catching moment.

좋은 예 / Good: 어두운 배경에서 길이 100px 빛 꼬리가 1.4초 동안 -35도로 스치고 0.6초 간격으로 다음 유성이 지나간다
나쁜 예 / Bad: 유성이 한꺼번에 여러 개 지나가 배경이 산만해지거나, 꼬리가 굵고 밝아 본문 글자를 가린다
주의 / Avoid: 동시에 보이는 유성 3개 초과 금지 · 본문 글자 영역 위로는 지나가지 않게 경로를 짠다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.4s | 1~2s | 한 유성의 수명 |
| 꼬리 길이 | 100px | 60~160px | 1920px 기준 |
| 발사 간격 | 0.6s | 0.4~1.5s | 다음 유성 시작까지 |
| 속도 | 300px/s | 200~500px/s | 대각선 이동 |
| 각도 | -35deg | -20~-50deg | 고정, 난수 아님 |

이징 / Ease: `power1.in`

## 구현 / Implementation (GSAP)

```js
const stars = [[200, 80], [900, 40], [1500, 160]];
stars.forEach(([x, y], i) => {
  tl.fromTo(`.star${i}`, { x, y, opacity: 0 }, { x: x + 420, y: y + 300, duration: 1.4, ease: 'power1.in',
    keyframes: { opacity: [0, 1, 1, 0] } }, 0.2 + i * 0.6);
});
// .star: 100x2px linear-gradient(90deg, transparent, #fff); rotate(35deg)
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 어두운 배경에 유성 3개를 넣어줘. 각 유성은 길이 100px, 두께 2px 흰색 그라디언트 막대이고 -35도 방향으로 x 420px, y 300px 이동해. 지속 1.4초 power1.in, 시작은 0.2초부터 0.6초 간격으로, 불투명도는 0에서 1로 올랐다가 끝에서 0으로 사라져. 시작 좌표는 고정 배열로 쓰고 난수는 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 .bg에 .star0~.star2를 추가하고 GSAP fromTo로 x+420, y+300, duration 1.4, ease power1.in, 시작 0.2+i*0.6을 건다. 시작 좌표는 [[200,80],[900,40],[1500,160]]으로 고정. 0.7초·1.3초·2.2초 캡처로 동시에 3개 넘게 보이지 않는지, 제목 영역을 지나가지 않는지 확인해.
```

### English · Claude Code
```text
Add three shooting stars to the dark background of <target>. Each is a 100px by 2px white gradient bar traveling x 420px and y 300px at -35 degrees over 1.4 seconds with power1.in, starting at 0.2 seconds and 0.6 seconds apart, opacity rising to 1 then fading to 0. Use fixed start coordinates, no randomness.
```

### English · Codex
```text
Add .star0 to .star2 to .bg in <file> and animate with GSAP fromTo: x+420, y+300, duration 1.4, ease power1.in, start 0.2+i*0.6. Fixed start coordinates [[200,80],[900,40],[1500,160]]. Capture at 0.7 s, 1.3 s and 2.2 s to confirm no more than three are visible and none crosses the title area.
```

예시 / Example: 유성를 `.hero`에 적용해. / Apply Shooting Stars to `.hero`.

## 적용 / Application

- HyperFrames: 유성 위치를 배열에 고정하고 position 0.6초 간격으로 배치한다. 난수 대신 시드 배열을 쓰고 timeline.duration을 마지막 유성 종료에 맞춘다
- ReelForge: 씬 브리프에 유성 수, 간격, 각도, 금지 영역(제목 박스)을 지정한다
- Scrolline Deck: 유성 하나를 진행률 0.1 구간에 배정하고 ease는 선형 이동에 가깝게 쓴다. 스크롤 방향이 바뀌면 역재생된다

조합 / Pair with: [앰비언트 입자 유영 · Ambient Particle Drift](../ambient-particle-drift/) · [반딧불 점멸 · Firefly Twinkle](../firefly-twinkle/) · [스타필드 워프 · Starfield Warp](../starfield-warp/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/meteors) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/meteors) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
