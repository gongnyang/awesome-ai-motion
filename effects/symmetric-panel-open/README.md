# Nº 027 대칭 패널 펼침 · Symmetric Panel Open

> 클립 렌더 예정 / Clip rendering planned.

**두 판이 양쪽에서 들어와 책을 펴듯 서로 반대 각도로 정면을 향한다.**

Two panels enter from opposite sides and rotate toward a shared frontal plane.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 비교, 전환 | 설명 영상, 스크롤덱, 웹 UI | gsap |

다른 이름 / Also known as: Split Compare, 대칭 비교 등장, split-tilt-cards

## 선택 기준 / Selection

두 항목을 같은 비중으로 비교한다. / Gives two subjects equal visual weight for comparison.

- 같은 크기의 카드로 두 제품을 비교할 때 / Compare two products with equally sized cards.
- 전후 화면을 같은 시각에 공개할 때 / Reveal a before-and-after pair with synchronized timing.

좋은 예 / Good: 두 요금제 카드가 좌우 240px에서 들어와 0.6초에 정면을 향하고 배지는 0.3초 뒤 나타난다.
나쁜 예 / Bad: 한쪽 카드만 크게 확대해 비교의 비중이 달라진다.
주의 / Avoid: 원근으로 카드 본문의 가독성을 낮추지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 진입 시간 | 600ms | 400~900ms | 두 판의 도착 시각을 맞춘다. |
| 진입 거리 | 240px | 120~360px | 좌우에 반대 부호를 적용한다. |
| Y 회전 | 15deg | 8~20deg | 정면 0도로 닫는다. |
| 배지 지연 | 300ms | 200~450ms | 판 도착 뒤의 지연이다. |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
['.left','.right'].forEach((s,i)=>{
  tl.fromTo(s,{x:i?240:-240,rotationY:i?-15:15},{x:0,rotationY:0,duration:0.6,ease:'power2.out'},0);
});
tl.fromTo('.badge',{scale:0,opacity:0},{scale:1,opacity:1,duration:0.2},0.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 대칭 패널 펼침를 구현해. 두 판이 양쪽에서 들어와 책을 펴듯 서로 반대 각도로 정면을 향한다. 진입 시간 600ms, 진입 거리 240px, Y 회전 15deg, 배지 지연 300ms, 이징 power2.out를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 원근으로 카드 본문의 가독성을 낮추지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 대칭 패널 펼침를 적용해. 진입 시간 600ms, 진입 거리 240px, Y 회전 15deg, 배지 지연 300ms, 이징 power2.out를 사용하고 다음 동작을 구현해: HTML 두 판의 x와 rotateY를 좌우 대칭으로 보간하고 안쪽 배지를 팝한다. 플러그인과 Math.random 없이 작성하고 0.15초·0.36초·0.6초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 두 요금제 카드가 좌우 240px에서 들어와 0.6초에 정면을 향하고 배지는 0.3초 뒤 나타난다.
```

### English · Claude Code
```text
Implement Symmetric Panel Open for <target> in <file>. Two panels enter from opposite sides and rotate toward a shared frontal plane. Use entrance duration: 600ms; entrance distance: 240px; Y rotation: 15deg; badge delay: 300ms; easing: power2.out in a single paused GSAP core timeline that supports seeking. Keep panel text readable through the perspective change.
```

### English · Codex
```text
Apply Symmetric Panel Open to the <target> scene in <file> using entrance duration: 600ms; entrance distance: 240px; Y rotation: 15deg; badge delay: 300ms; easing: power2.out. Two panels enter from opposite sides and rotate toward a shared frontal plane. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.15, 0.36, 0.6 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Keep panel text readable through the perspective change.
```

예시 / Example: 대칭 패널 펼침를 `.hero`에 적용해. / Apply Symmetric Panel Open to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 대칭 패널 펼침 상태를 넣고 seek(t)로 0.6초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 진입 시간 600ms, 진입 거리 240px, Y 회전 15deg, 배지 지연 300ms, 이징 power2.out를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 두 요금제 카드가 좌우 240px에서 들어와 0.6초에 정면을 향하고 배지는 0.3초 뒤 나타난다.
- Scrolline Deck: 진행률 0~1을 0.6초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [비교 분할 · Split Compare](../split-compare/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/split-tilt-cards.md`) (unknown) · local/hyperframes-animation (`claude-skill:hyperframes-animation/blueprints/comparison-split.md`) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:blocks/compare/block.html`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
