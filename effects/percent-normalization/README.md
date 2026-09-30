# Nº 282 백분율 정규화 전환 · Percent Normalization

> 클립 렌더 예정 / Clip rendering planned.

**크기가 달랐던 누적 막대가 같은 전체 길이가 되고 내부 조각의 비율이 유지된다.**

Stacks with different totals become equal-length bars while preserving their internal proportions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | svg |

## 선택 기준 / Selection

절대 규모 비교에서 구성비 비교로 관점을 바꾼다. / Shifts the comparison from absolute size to composition.

- 전체 규모가 다른 집단의 구성비를 비교할 때 / Compare the composition of groups with different totals.
- 절대값 누적 차트를 100% 보기로 전환할 때 / Switch an absolute stacked chart to a 100 percent view.

좋은 예 / Good: 각 조각을 집단 합계로 나눠 0.9초에 900px 전체 폭으로 정규화한다.
나쁜 예 / Bad: 합계가 0인 집단을 100%로 늘려 자료가 있는 것처럼 표시한다.
주의 / Avoid: 합계 0인 집단은 비율 미정으로 구분한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 시간 | 900ms | 650~1300ms | 폭과 시작점을 함께 보간한다. |
| 목표 합계 | 100% | 100% 고정 | 집단별 합계로 나눈다. |
| 축 전환 | 600ms | 400~800ms | 절대값 축을 비율 축으로 바꾼다. |
| 목표 폭 | 900px | 700~1200px | 모든 집단의 전체 폭을 맞춘다. |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
document.querySelectorAll('.segment').forEach(el=>{
  const d=el.dataset,total=+d.total;
  if(total>0)tl.to(el,{attr:{x:200+900*(+d.cumulative)/total,width:900*(+d.value)/total},duration:0.9,ease:'power2.inOut'},0);
});
tl.to('.absolute-axis',{opacity:0,duration:0.6},0);
tl.fromTo('.percent-axis',{opacity:0},{opacity:1,duration:0.6},0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 백분율 정규화 전환를 구현해. 크기가 달랐던 누적 막대가 같은 전체 길이가 되고 내부 조각의 비율이 유지된다. 전환 시간 900ms, 목표 합계 100%, 축 전환 600ms, 목표 폭 900px, 이징 power2.inOut를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 합계 0인 집단은 비율 미정으로 구분한다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 백분율 정규화 전환를 적용해. 전환 시간 900ms, 목표 합계 100%, 축 전환 600ms, 목표 폭 900px, 이징 power2.inOut를 사용하고 다음 동작을 구현해: 항목별 합계로 나눈 길이와 공통 기준선 좌표를 보간한다. 플러그인과 Math.random 없이 작성하고 0.23초·0.54초·0.9초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 각 조각을 집단 합계로 나눠 0.9초에 900px 전체 폭으로 정규화한다.
```

### English · Claude Code
```text
Implement Percent Normalization for <target> in <file>. Stacks with different totals become equal-length bars while preserving their internal proportions. Use transition duration: 900ms; target total: 100%; axis transition duration: 600ms; target width: 900px; easing: power2.inOut in a single paused GSAP core timeline that supports seeking. Treat zero-total groups as undefined proportions.
```

### English · Codex
```text
Apply Percent Normalization to the <target> scene in <file> using transition duration: 900ms; target total: 100%; axis transition duration: 600ms; target width: 900px; easing: power2.inOut. Stacks with different totals become equal-length bars while preserving their internal proportions. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.23, 0.54, 0.9 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Treat zero-total groups as undefined proportions.
```

예시 / Example: 백분율 정규화 전환를 `.hero`에 적용해. / Apply Percent Normalization to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 백분율 정규화 전환 상태를 넣고 seek(t)로 0.9초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 전환 시간 900ms, 목표 합계 100%, 축 전환 600ms, 목표 폭 900px, 이징 power2.inOut를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 각 조각을 집단 합계로 나눠 0.9초에 900px 전체 폭으로 정규화한다.
- Scrolline Deck: 진행률 0~1을 0.9초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [축 범위 전환 · Axis Rescaling](../axis-rescale/) · [누적 막대와 그룹 막대 전환 · Stacked-to-grouped Transition](../stacked-grouped-transition/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
