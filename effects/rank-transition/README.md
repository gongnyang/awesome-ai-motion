# Nº 287 순위 재배치 · Rank Transition

> 클립 렌더 예정 / Clip rendering planned.

**길이와 색을 유지한 항목들이 서로 자리를 바꾸어 새 정렬 순서로 놓인다.**

Items move to new ranked positions while retaining their identity and encoding.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | svg |

다른 이름 / Also known as: Rank sorting transition, 순위 정렬 전환, Animated sorting

## 선택 기준 / Selection

누가 올라가고 내려갔는지 추적한다. / Lets viewers track which items rise or fall in rank.

- 지표 갱신 전후의 제품 순위를 비교할 때 / Compare ranked products before and after a metric update.
- 항목 정체성을 유지하며 순위표 정렬 기준을 바꿀 때 / Change a leaderboard sorting criterion while preserving item identities.

좋은 예 / Good: ID별 색과 라벨을 유지하고 행 전체를 0.75초에 새 순위로 옮긴다.
나쁜 예 / Bad: 순위마다 새 색을 부여해 같은 항목을 추적할 수 없게 한다.
주의 / Avoid: 정렬 중 라벨과 마크를 따로 이동하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 재배치 시간 | 750ms | 500~1100ms | 항목 ID로 목표 행을 찾는다. |
| 행 지연 | 25ms | 0~50ms | 움직임 시작만 조금 늦춘다. |
| 행 간격 | 28px | 28~64px | 라벨 높이를 고려한다. |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
const order=['c','a','d','b'];
document.querySelectorAll('.rank-row').forEach((row,i)=>{
  const rank=order.indexOf(row.dataset.id);
  if(rank>=0)tl.to(row,{y:rank*28,duration:0.75,ease:'power2.inOut'},i*0.025);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 순위 재배치를 구현해. 길이와 색을 유지한 항목들이 서로 자리를 바꾸어 새 정렬 순서로 놓인다. 재배치 시간 750ms, 행 지연 25ms, 행 간격 28px, 이징 power2.inOut를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 정렬 중 라벨과 마크를 따로 이동하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 순위 재배치를 적용해. 재배치 시간 750ms, 행 지연 25ms, 행 간격 28px, 이징 power2.inOut를 사용하고 다음 동작을 구현해: ID별 목표 행 좌표를 구하고 마크와 라벨을 함께 이동한다. 플러그인과 Math.random 없이 작성하고 0.23초·0.54초·0.9초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: ID별 색과 라벨을 유지하고 행 전체를 0.75초에 새 순위로 옮긴다.
```

### English · Claude Code
```text
Implement Rank Transition for <target> in <file>. Items move to new ranked positions while retaining their identity and encoding. Use reorder duration: 750ms; row stagger: 25ms; row spacing: 28px; easing: power2.inOut in a single paused GSAP core timeline that supports seeking. Move labels and marks together while preserving item IDs and colors.
```

### English · Codex
```text
Apply Rank Transition to the <target> scene in <file> using reorder duration: 750ms; row stagger: 25ms; row spacing: 28px; easing: power2.inOut. Items move to new ranked positions while retaining their identity and encoding. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.23, 0.54, 0.9 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Move labels and marks together while preserving item IDs and colors.
```

예시 / Example: 순위 재배치를 `.hero`에 적용해. / Apply Rank Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 순위 재배치 상태를 넣고 seek(t)로 0.9초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 재배치 시간 750ms, 행 지연 25ms, 행 간격 28px, 이징 power2.inOut를 싣고 입력 자료와 초기 도형 좌표를 고정한다. ID별 색과 라벨을 유지하고 행 전체를 0.75초에 새 순위로 옮긴다.
- Scrolline Deck: 진행률 0~1을 0.9초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [막대 차트 레이스 · Bar Chart Race](../bar-chart-race/) · [객체 유지 갱신 · Object-constant Update](../object-constant-update/)

출처 / Sources: [bost.ocks.org](https://bost.ocks.org/mike/constancy/) (unknown) · [Observable @d3](https://observablehq.com/@d3/bar-chart-transitions/2) (unknown) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · [The New York Times](https://www.nytimes.com/interactive/2022/02/02/upshot/tom-brady-career-stats.html) (unknown) · motion dictionary 3-type-data-ui.md#19. 순위 재배치 · Rank transition (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
