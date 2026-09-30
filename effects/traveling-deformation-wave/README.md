# Nº 437 변형 파동 전달 · Traveling Deformation Wave

> 클립 렌더 예정 / Clip rendering planned.

**대상의 한쪽에서 시작한 굴곡이 반대쪽으로 이동하고 원래 형태로 돌아온다**

A bend that starts on one side of an object travels to the other side and returns it to its original shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 피드백, 설명 | 웹 UI, 설명 영상, 숏폼 | svg |

다른 이름 / Also known as: 전파되는 변형 파동, ApplyWave

## 선택 기준 / Selection

교란이나 반응이 전달되는 것을 보여 준다. 접촉이나 신호가 물체를 따라 퍼진다는 느낌을 준다 / Shows a disturbance or reaction being transmitted. It feels like a touch or signal spreading along the object.

- 선이나 리본에 신호가 지나가는 모습을 보여 줄 때 / Show a signal passing along a line or ribbon.
- 버튼을 누르면 옆으로 파동이 전달되는 반응을 줄 때 / Give a button press a wave that passes to its neighbors.

좋은 예 / Good: 1000ms 동안 폭의 60% 파장, 진폭 12px의 사인 굴곡이 왼쪽에서 오른쪽으로 지나가고 끝나면 완전히 평평해진다
나쁜 예 / Bad: 진폭 60px에 파장이 짧아 선이 꼬이고, 굴곡이 지나간 뒤 형태가 원래대로 돌아오지 않는다
주의 / Avoid: 진폭 24px 초과 금지 · 끝 상태는 원형과 정확히 같아야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1000ms | 700~1400ms |  |
| 진폭 | 12px | 6~24px | 최대 변위 |
| 파장 | 대상 폭의 60% | 40~80% |  |
| 이징 | sine | none~sine | 파동 형태 사인 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const pts = 40, u = { p: 0 };
tl.to(u, { p: 1, duration: 1, ease: 'none', onUpdate() {
  for (let i = 0; i < pts; i++) { const x = i / (pts - 1), d = (x - u.p * 1.6 + 0.3) / 0.6;
    const y = Math.abs(d) < 0.5 ? Math.sin(d * 2 * Math.PI) * 12 * Math.cos(d * Math.PI) : 0; path.setY(i, y); } } }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 선에 변형 파동 전달을 넣어줘. 점 40개의 y를 사인으로 변위시켜 진폭 12px, 파장 폭의 60%의 굴곡이 1초 동안 왼쪽에서 오른쪽으로 지나가게 하고 양 끝에서는 코사인 포락선으로 변위 0이 되게 해. 끝나면 완전히 직선.
```

### 한국어 · Codex
```text
<파일>에 traveling deformation wave를 구현해. 점 40개, 진폭 12px, 파장 폭 60%, 1s, ease none, 시작 0.3초. 0.5초, 0.8초, 1.3초를 캡처해 굴곡이 왼쪽에서 오른쪽으로 이동하는지, 1.3초에 모든 점의 y가 0인지 확인해.
```

### English · Claude Code
```text
Add a traveling deformation wave to the line in <target>. Displace 40 points in y with a sine of amplitude 12px and wavelength 60% of the width, traveling left to right over 1 second, with a cosine envelope so both ends have zero displacement. It must end perfectly straight.
```

### English · Codex
```text
Implement a traveling deformation wave in <file>: 40 points, amplitude 12px, wavelength 60% of width, 1s, ease none, start 0.3s. Capture at 0.5s, 0.8s and 1.3s and verify the bend moves left to right and every point y is 0 at 1.3s.
```

예시 / Example: 변형 파동 전달를 `.hero`에 적용해. / Apply Traveling Deformation Wave to `.hero`.

## 적용 / Application

- HyperFrames: 점의 y 변위를 위치와 시간의 사인으로 계산해 path에 반영한다. paused 타임라인에서 p로만 결정
- ReelForge: 브리프에 진폭, 파장, 속도, 대상 폭을 싣는다. 포락선으로 양 끝 변위를 0으로 만든다
- Scrolline Deck: 진행률 p에 파동 위치를 대응시킨다. scrub으로 파동이 앞뒤로 이동하고 양 끝은 항상 평평하다

조합 / Pair with: [웨이브 워프 · Wave Warp](../wave-warp/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [시간 흔들림 · Temporal Wiggle](../temporal-wiggle/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
