# Nº 481 극좌표 말기 · Polar Coordinates Wrap

> 클립 렌더 예정 / Clip rendering planned.

**가로로 펼친 이미지가 원형 띠로 말려 들어가거나 반대로 펴지는 극좌표 변환**

A horizontally laid-out image rolls into a circular band, or unrolls back.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 설명, 전환 | 설명 영상, 발표, 데이터 스토리 | webgl |

다른 이름 / Also known as: 극좌표 래핑

## 선택 기준 / Selection

직선 구조와 원형 구조가 같은 정보라는 대응. 주기와 순환을 눈으로 이해시킨다 / The correspondence between a line and a circle as the same information. Makes cycles and periodicity visible.

- 시간 축 막대를 원형 차트로 바꾸는 변환을 보여 줄 때 / Show a time-axis bar transforming into a radial chart.
- 가로 띠를 방사형 구조로 바꾸며 주기성을 드러낼 때 / Turn a horizontal strip into a radial structure to reveal periodicity.

좋은 예 / Good: 가로 12칸 색 띠가 1초 동안 반지름 360px 원형 띠로 말려 시계 문자판이 된다
나쁜 예 / Bad: 변환 중간에 이음매가 보여 찢어지거나 이미지 방향이 뒤집혀 읽히지 않는다
주의 / Avoid: 중간값에서 이음매 각도가 찢어지지 않게 wrap 각도를 고정 · 정보 글자가 있는 이미지에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1s | 0.7~1.6s | 직선에서 원형까지 |
| 변환량 | 0 to 1 | 0~1 | 직교 UV와 극좌표 UV 혼합 |
| 안쪽 반지름 | 120px | 80~200 | 띠 안쪽 구멍 |
| 바깥 반지름 | 360px | 280~440 | 1920x1080 기준 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { m: 0 };
tl.to(u, { m: 1, duration: 1, ease: 'power2.inOut', onUpdate: draw }, 0.3);
// GLSL: vec2 pol = vec2(atan(p.y, p.x)/6.2832 + 0.5, (length(p) - r0)/(r1 - r0));
// vec2 src = mix(uv, pol, m); col = texture(tex, src);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 가로 띠 이미지에 극좌표 말기 변환을 넣어줘. 12칸 색 띠가 0.3초에 시작해 1초 동안 power2.inOut으로 안쪽 반지름 120px, 바깥 반지름 360px의 원형 띠로 말리게 해. 변환은 직교 UV와 극좌표 UV의 mix 값 하나로 처리하고 wrap 이음매는 12시 방향에 고정해.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 polar 셰이더를 추가해. pol=vec2(atan(p.y,p.x)/6.2832+0.5, (length(p)-120)/(360-120)), src=mix(uv,pol,m), m은 0.3초부터 1초 power2.inOut로 0→1. 0.5초·0.8초·1.5초 캡처로 띠가 서서히 말리고 이음매가 12시에 있으며 색 순서가 유지되는지 확인해.
```

### English · Claude Code
```text
Add a polar wrap to the horizontal strip in <target>. The 12-cell color strip starts at 0.3 seconds and rolls over 1 second with power2.inOut into a circular band with inner radius 120px and outer radius 360px. Handle it with one mix value between Cartesian and polar UVs and pin the wrap seam at 12 o'clock.
```

### English · Codex
```text
Add a polar shader to the image canvas in <file>. pol=vec2(atan(p.y,p.x)/6.2832+0.5, (length(p)-120)/(360-120)); src=mix(uv,pol,m); tween m 0 to 1 from 0.3 s over 1 s power2.inOut. Capture at 0.5 s, 0.8 s and 1.5 s to confirm the strip rolls gradually, the seam sits at 12 o'clock and color order is preserved.
```

예시 / Example: 극좌표 말기를 `.hero`에 적용해. / Apply Polar Coordinates Wrap to `.hero`.

## 적용 / Application

- HyperFrames: 변환량 m을 paused 타임라인에서 tween하고 onUpdate로 그린다. wrap 각도는 상수로 고정해 캡처 프레임이 일정하다
- ReelForge: 씬 브리프에 띠 이미지, 안·바깥 반지름, 변환 1초, 시작 방향(직선→원)을 싣는다
- Scrolline Deck: m을 진행률에 그대로 묶고 스크럽 시 ease는 power2.inOut 대신 ease-out을 쓴다. 홀드 구간에 완성 원을 유지한다

조합 / Pair with: [모프 전환 · Morph](../shape-morph/) · [구면화 · Spherize](../spherize/) · [차트 경로 모프 · Chart Path Morph](../chart-path-morph/) · [평면 공간 변형 · Plane Transformation](../plane-transformation/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
