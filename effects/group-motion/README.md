# Nº 019 그룹 이동 · Group Motion

> 클립 렌더 예정 / Clip rendering planned.

**같은 그룹의 마크들이 같은 방향과 속도로 동시에 움직여 한 묶음으로 보이게 하는 표현**

Marks in one group move together in the same direction and speed so they read as a unit.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 설명, 비교 | 데이터 스토리, 설명 영상, 웹 UI | svg |

다른 이름 / Also known as: Common-fate grouping, 동시 운동 그룹화, Common fate / Group motion, 공통 운명

## 선택 기준 / Selection

떨어져 있는 항목도 함께 움직이면 같은 무리로 읽힌다. 공통 운명의 원리 / Items that are far apart still read as one set when they move together (common fate).

- 산점도에서 어떤 점들이 같은 군집인지 보여 줄 때 / When showing which points belong to the same cluster in a scatter plot
- 카드 여러 장을 하나의 카테고리로 묶어 옮길 때 / When moving several cards as one category
- 팀이나 세그먼트별로 점을 이동시킬 때 / When shifting dots by team or segment

좋은 예 / Good: 파란 점 12개가 서로 다른 위치에서 동시에 x +240px 이동하고, 회색 점은 그대로여서 파란 점이 한 무리로 보인다
나쁜 예 / Bad: 그룹 안에서 점마다 시작 시각이 다르거나 속도가 달라 한 묶음으로 읽히지 않는다
주의 / Avoid: 그룹 내 지연 0ms 유지 · 그룹 간 지연은 0.1~0.3초 · 동시에 움직이는 그룹은 3개 이하

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 0.7s | 0.5~1.0s | 그룹 전체 이동 시간 |
| 그룹 내 지연 | 0ms | 0~20ms | 같은 그룹은 동일 시작 |
| 그룹 간 지연 | 160ms | 100~300ms | 그룹 A 뒤에 그룹 B |
| 이징 | power2.inOut | power2~power3.inOut | 그룹 전체에 동일 적용 |

## 구현 / Implementation (GSAP)

```js
tl.to('.grp-a', { x: 240, duration: 0.7, ease: 'power2.inOut' }, 0.3)
  .to('.grp-b', { x: -180, duration: 0.7, ease: 'power2.inOut' }, 0.3 + 0.16);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 점 그룹을 묶어서 움직여줘. .grp-a 점 전체를 0.3초에 x +240px, 0.7초, power2.inOut으로 동시에 옮기고 .grp-b는 0.16초 뒤에 x -180px로 같은 방식으로 옮겨. 그룹 안에서는 stagger 없이 시작 시각을 똑같이 해. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 group-motion을 적용해. 셀렉터 .grp-a는 position 0.3, x 240, 0.7s, power2.inOut, .grp-b는 position 0.46, x -180. stagger는 쓰지 않는다. 0.5초와 1.0초를 캡처해 같은 그룹 점들의 x 변화량이 모두 동일한지 확인해.
```

### English · Claude Code
```text
Move the <target> dot groups as units with GSAP. Move all .grp-a dots x +240px at 0.3s over 0.7s with power2.inOut at the same moment, then .grp-b x -180px 0.16s later the same way. No stagger inside a group. One paused timeline.
```

### English · Codex
```text
Apply group-motion to <target> in <file>. Selector .grp-a at position 0.3, x 240, 0.7s, power2.inOut; .grp-b at position 0.46, x -180. No stagger. Capture at 0.5s and 1.0s and check every dot in the same group has an identical x delta.
```

예시 / Example: 그룹 이동를 `.hero`에 적용해. / Apply Group Motion to `.hero`.

## 적용 / Application

- HyperFrames: 그룹 클래스를 셀렉터로 한 번에 tween해 같은 시작·같은 이징을 보장한다. stagger 옵션은 넣지 않는다
- ReelForge: 브리프에 그룹 이름별 이동량·방향·그룹 간 지연을 표로 싣고, 그룹 색은 고정한다
- Scrolline Deck: scrub에서는 그룹 간 지연을 진행률 0.08 정도의 오프셋으로 바꾼다. 그룹 안은 동일 진행률

조합 / Pair with: [스태거 · Stagger](../stagger/) · [동작 중첩 · Temporal Overlap](../temporal-overlap/) · [객체 유지 갱신 · Object-constant Update](../object-constant-update/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown) · motion dictionary 1-principles.md#6. 모션 위계·코레오그래피 (own) · [d3/d3-transition](https://d3js.org/d3-transition) (ISC)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
