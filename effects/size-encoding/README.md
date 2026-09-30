# Nº 292 데이터 면적 변화 · Animated Size Encoding

> 클립 렌더 예정 / Clip rendering planned.

**중심 위치가 고정된 원이나 도형의 면적이 데이터 값에 비례해 커지거나 작아진다.**

Shapes change area in proportion to their data values.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | svg |

다른 이름 / Also known as: Bubble map, 버블 지도, 면적 인코딩 전환

## 선택 기준 / Selection

위치 관계를 유지하며 데이터 규모의 차이를 보여준다. / Shows relative scale without moving geographic or chart positions.

- 인구 4배인 지역의 원 반지름을 2배로 표시한다. / Compare magnitudes while keeping positions fixed.
- 위치 관계를 유지하며 데이터 규모의 차이를 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 인구 4배인 지역의 원 반지름을 2배로 표시한다.
나쁜 예 / Bad: 값이 4배라고 반지름도 4배로 늘린다.
주의 / Avoid: 음수 값은 면적에 넣지 않고 별도 인코딩한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 750ms | 400~1200ms | 중심 고정 |
| 최소 반지름 | 2px | 0~4px | 0값은 숨김 처리 |
| 최대 반지름 | 80px | 40~120px | 면적을 값에 비례시킨다 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
bubbles.forEach(b=>{
 const r=b.value===0?0:Math.max(2,80*Math.sqrt(b.value/maxValue));
 tl.fromTo(b.element,{attr:{r:0}},{attr:{r},duration:0.75,ease:'power2.out'},0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 데이터 면적 변화을 적용해. SVG 도형의 중심을 유지한 채 표시 면적을 보간하고 원 반지름은 제곱근으로 환산한다. 지속 750ms; 최소 반지름 2px; 최대 반지름 80px을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 데이터 면적 변화을 적용해. SVG 도형의 중심을 유지한 채 표시 면적을 보간하고 원 반지름은 제곱근으로 환산한다. 지속 750ms; 최소 반지름 2px; 최대 반지름 80px을 적용한다. 0초, 0.375초, 0.75초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Animated Size Encoding on <target> in <file>. Animate area over 750ms with a maximum radius of 80px and a minimum visible radius of 2px. Use the square root of normalized value for radius; hide zero values and keep centers fixed. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Animated Size Encoding on <target> in <file>. Animate area over 750ms with a maximum radius of 80px and a minimum visible radius of 2px. Use the square root of normalized value for radius; hide zero values and keep centers fixed. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.375s, and 0.75s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 데이터 면적 변화를 `.hero`에 적용해. / Apply Animated Size Encoding to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 데이터 면적 변화 상태를 넣고 seek 시 0.75초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 750ms; 최소 반지름 2px; 최대 반지름 80px을 싣고 인구 4배인 지역의 원 반지름을 2배로 표시한다.
- Scrolline Deck: 진행률 0~1을 0.75초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [코로플레스 색상 전환 · Choropleth Transition](../choropleth-transition/) · [카운트업 · Count-up](../count-up/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-bubble/registry-item.json) (Apache-2.0) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [Flourish](https://app.flourish.studio/@flourish/scatter) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
