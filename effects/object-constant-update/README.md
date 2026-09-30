# Nº 306 객체 유지 갱신 · Object-constant Update

> 클립 렌더 예정 / Clip rendering planned.

**같은 항목이 색과 이름을 유지한 채 이전 위치에서 새 위치로 움직이는 갱신**

The same items keep their color and name while position and size move from the old state to the new one.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 데이터 증명 | 데이터 스토리, 설명 영상, 발표 | svg |

다른 이름 / Also known as: 항목 정체성 유지 갱신, Object permanence, 대상 지속성, Object constancy / Keyed identity, 객체 대응, Object constancy / Persistent anchor, 객체 지속성·앵커 유지

## 선택 기준 / Selection

전후 화면에서 무엇이 같은 대상인지 알게 한다. 값이 바뀌어도 정체성이 이어진다 / Lets viewers see which item is the same across screens. Identity carries through value changes.

- 연도별 막대 값이 갱신되는 차트를 보여 줄 때 / When a bar chart updates its values across years
- 목록 순서가 바뀌어도 각 항목을 눈으로 추적하게 할 때 / When list order changes but each item must stay traceable
- 분류를 바꾼 산점도에서 같은 점을 따라가게 할 때 / When a scatter plot regroups but the same dots must be followed

좋은 예 / Good: 막대 A가 파란색과 라벨을 유지한 채 y 320→210, height 120→230으로 0.75초 동안 움직인다
나쁜 예 / Bad: 갱신 때 막대를 지우고 새로 그려 항목 대응이 끊기거나, 색이 바뀌어 다른 항목처럼 보인다
주의 / Avoid: 항목은 ID로 대응하고 색을 바꾸지 않는다 · 이동 중 라벨이 막대에서 떨어지지 않게 한다 · 길이 0.5s 미만으로 줄이지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 0.75s | 0.5~1.0s | 위치와 크기 동시 이동 |
| 대응 키 | ID | ID 고정 | 순서가 아닌 ID로 매칭 |
| 색 | 고정 | 고정 | 전후 동일 |
| 이징 | power2.inOut | power2~power3.inOut | 시작과 끝이 모두 보이게 |

## 구현 / Implementation (GSAP)

```js
data.forEach(d => {
  tl.to('#bar-' + d.id, { attr: { y: yScale(d.next), height: h(d.next) }, duration: 0.75, ease: 'power2.inOut' }, 0.4);
  tl.to('#lab-' + d.id, { attr: { y: yScale(d.next) - 8 }, duration: 0.75, ease: 'power2.inOut' }, 0.4);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 막대 차트를 새 데이터로 갱신해줘. 항목을 ID로 대응해 기존 요소를 재사용하고, 색과 라벨은 그대로 두며 y와 height, 라벨 y를 0.4초에 시작해 0.75초 동안 power2.inOut으로 옮겨. 요소를 지우고 다시 만들지 마. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상> 차트에 object-constant-update를 적용해. data.forEach로 #bar-id와 #lab-id의 attr(y, height)를 next 값으로 0.75s, power2.inOut, position 0.4에 tween. DOM 노드 수가 전후 동일한지 검사하고 0.3초·0.8초·1.3초를 캡처해 색과 라벨이 유지되는지 확인해.
```

### English · Claude Code
```text
Update the <target> bar chart to the new data with GSAP. Match items by ID and reuse the existing elements, keep colors and labels unchanged, and tween y, height and the label y starting at 0.4s over 0.75s with power2.inOut. Do not delete and rebuild elements. One paused timeline.
```

### English · Codex
```text
Apply object-constant-update to the <target> chart in <file>. With data.forEach, tween the attr (y, height) of #bar-id and #lab-id to the next values over 0.75s, power2.inOut, position 0.4. Assert the DOM node count is the same before and after, and capture at 0.3s, 0.8s and 1.3s to check colors and labels persist.
```

예시 / Example: 객체 유지 갱신를 `.hero`에 적용해. / Apply Object-constant Update to `.hero`.

## 적용 / Application

- HyperFrames: SVG attr를 paused 타임라인에서 tween한다. 대응 ID를 id 속성에 고정해 seek에서도 같은 요소를 움직이게 한다
- ReelForge: 브리프에 이전·다음 데이터, 대응 키, 길이를 JSON으로 싣는다. 라벨은 같은 시각에 함께 옮긴다
- Scrolline Deck: scrub에서는 진행률 0~1이 이전에서 다음 값으로의 보간 비율이 된다. 순방향과 역방향 모두 같은 항목이 따라온다

조합 / Pair with: [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/) · [그룹 이동 · Group Motion](../group-motion/) · [순위 재배치 · Rank Transition](../rank-transition/)

출처 / Sources: [bost.ocks.org](https://bost.ocks.org/mike/constancy/) (unknown) · motion dictionary 1-principles.md#7. 연속성·공간 모델·시선 유도 (own) · [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
