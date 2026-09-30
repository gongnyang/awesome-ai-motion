# Nº 261 코로플레스 색상 전환 · Choropleth Transition

> 클립 렌더 예정 / Clip rendering planned.

**지도 구역의 색이 데이터 값에 따라 순서대로 채워지거나 시점별 색으로 바뀐다.**

Map regions transition to colors encoded from data values.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | svg |

다른 이름 / Also known as: Choropleth reveal, 단계구분도 공개, Choropleth time transition, 코로플레스 시간 전환

## 선택 기준 / Selection

지역별 수치와 분포의 차이를 보여준다. / Reveals geographic differences in a metric.

- 같은 범례로 시도별 실업률 색을 순차 공개한다. / Compare regional values and distributions.
- 지역별 수치와 분포의 차이를 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 같은 범례로 시도별 실업률 색을 순차 공개한다.
나쁜 예 / Bad: 지역별로 다른 색 범위를 써 비교를 왜곡한다.
주의 / Avoid: 결측 지역은 별도 색과 라벨로 표시한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지역 시작차 | 40ms | 0~80ms | 지역 순서 고정 |
| 색 전환 | 500ms | 300~900ms | 범례 범위 고정 |
| 범례 공개 | 800ms | 400~1000ms | 단위 함께 표시 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
regions.forEach((r,i)=>{
 tl.fromTo(r.element,{fill:'#e5e7eb'},{fill:r.color,duration:0.5,ease:'power1.inOut'},i*0.04);
});
tl.fromTo('.legend',{opacity:0},{opacity:1,duration:0.8},0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 코로플레스 색상 전환을 적용해. SVG 지역별 데이터 값을 색으로 매핑해 시간차 공개한다. 지역 시작차 40ms; 색 전환 500ms; 범례 공개 800ms을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 코로플레스 색상 전환을 적용해. SVG 지역별 데이터 값을 색으로 매핑해 시간차 공개한다. 지역 시작차 40ms; 색 전환 500ms; 범례 공개 800ms을 적용한다. 0초, 0.75초, 1.5초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Choropleth Transition on <target> in <file>. Stagger regions by 40ms, transition their fills over 500ms, and reveal the legend over 800ms. Keep the color domain fixed and mark missing values separately. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Choropleth Transition on <target> in <file>. Stagger regions by 40ms, transition their fills over 500ms, and reveal the legend over 800ms. Keep the color domain fixed and mark missing values separately. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.75s, and 1.5s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 코로플레스 색상 전환를 `.hero`에 적용해. / Apply Choropleth Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 코로플레스 색상 전환 상태를 넣고 seek 시 1.5초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지역 시작차 40ms; 색 전환 500ms; 범례 공개 800ms을 싣고 같은 범례로 시도별 실업률 색을 순차 공개한다.
- Scrolline Deck: 진행률 0~1을 1.5초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [데이터 색상 전환 · Color Encoding Transition](../color-encoding-transition/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spain-map/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/world-map/registry-item.json) (Apache-2.0) · [reuters-graphics/chart-module-global-rate-map](https://github.com/reuters-graphics/chart-module-global-rate-map) (unknown) · [d3/d3-interpolate](https://d3js.org/d3-interpolate) (ISC)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
