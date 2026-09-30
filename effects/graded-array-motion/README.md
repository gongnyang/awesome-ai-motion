# Nº 420 그라데이션 배열 모션 · Graded Array Motion

> 클립 렌더 예정 / Clip rendering planned.

**요소마다 크기나 회전량이 조금씩 달라져 부채꼴이나 경사형 배열을 만드는 효과**

Elements get slightly different size or rotation values, forming a fan or gradient array.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 순서·흐름, 분위기, 브랜딩 | 설명 영상, 웹 UI, 스크롤덱 | gsap |

다른 이름 / Also known as: Value distribution, 값을 나누는 배열 모션

## 선택 기준 / Selection

규칙적인 리듬과 깊이를 주면서 단조로운 반복을 피한다. 구조적이고 세련된 인상을 준다 / Adds regular rhythm and depth while avoiding monotone repetition, giving a structured, refined impression.

- 카드나 아이콘 묶음이 부채꼴로 펼쳐지는 장면 / For card or icon groups that fan out
- 같은 도형 여러 개로 그래픽 패턴이나 배경을 만들 때 / To build graphic patterns or backgrounds from many copies of one shape

좋은 예 / Good: 요소 12개가 0.6초 동안 회전 0도에서 90도까지, 크기 0.7배에서 1.3배까지 인덱스에 따라 단계적으로 펼쳐진다
나쁜 예 / Bad: 단계 차이가 너무 커서 규칙이 안 보이거나, 모든 요소가 동시에 같은 값으로 움직여 변화가 없다
주의 / Avoid: 단계 값은 인덱스의 선형 함수로 정한다(불규칙 금지) · 요소 20개 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 400~1000ms | 펼침 시간 |
| 요소 수 | 12개 | 6~20개 | 동일 도형 |
| 회전 범위 | 0~90도 | 30~180도 | 인덱스 선형 |
| 크기 범위 | 0.7~1.3배 | 0.5~1.6배 | 인덱스 선형 |
| 시간차 | 30ms | 20~60ms | 인덱스순 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const els=gsap.utils.toArray('.item');
els.forEach((e,i)=>{const u=i/(els.length-1);
 tl.to(e,{rotation:u*90,scale:.7+u*.6,duration:.6,ease:'power2.out'},t+i*.03);});
// transform-origin은 부채 중심(예: '50% 100%')
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 요소 12개를 부채꼴로 펼쳐줘. 인덱스 정규화 값 u=i/11로 회전을 0도에서 90도, 크기를 0.7배에서 1.3배로 선형 매핑하고, 각 요소는 0.6초 power2.out에 0.03초씩 늦게 출발하게 해. transform-origin은 50% 100%. 불규칙 값은 쓰지 말고 paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>에 graded-array-motion을 구현해. 요소 12개, 회전 0~90도, 크기 0.7~1.3배, 600ms power2.out, 시간차 30ms. 0.2초, 0.4초, 0.9초를 캡처해 단계적으로 펼쳐지는지, 마지막 프레임에서 각도가 인덱스에 선형인지, 요소가 겹쳐 가려지지 않는지 확인해.
```

### English · Claude Code
```text
Fan out the 12 elements of <target>. Using normalized u=i/11, map rotation linearly from 0 to 90 degrees and scale from 0.7x to 1.3x, with each element animating for 0.6s with power2.out and starting 0.03s later than the previous. Set transform-origin to 50% 100%. No irregular values, drive from a paused timeline.
```

### English · Codex
```text
Implement graded-array-motion in <file>: 12 elements, rotation 0-90 degrees, scale 0.7-1.3x, 600ms power2.out, stagger 30ms. Capture at 0.2s, 0.4s, and 0.9s to verify stepwise fanning, that final angles are linear in index, and that elements do not overlap and hide one another.
```

예시 / Example: 그라데이션 배열 모션를 `.hero`에 적용해. / Apply Graded Array Motion to `.hero`.

## 적용 / Application

- HyperFrames: 인덱스 정규화 값 u를 계산해 rotation과 scale에 매핑하고 position 인자로 시간차를 준다. transform-origin을 부채 중심으로 지정한다
- ReelForge: 브리프에 itemCount, rotationRange, scaleRange, staggerMs를 싣는다. 요소는 같은 마크업 반복으로 만든다
- Scrolline Deck: 진행률에 u를 곱해 펼침 정도를 조절한다. 스크럽에서는 시간차 대신 진행률 오프셋으로 구현하고 ease-out을 쓴다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [그룹 이동 · Group Motion](../group-motion/) · [나선 조립 · Spiral Assembly](../spiral-assembly/) · [힌지 개폐 · Hinged Oscillation](../hinged-oscillation/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/GSAP/UtilityMethods/) (GSAP Standard License) · [juliangarnier/anime](https://animejs.com/documentation/utilities/stagger) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
