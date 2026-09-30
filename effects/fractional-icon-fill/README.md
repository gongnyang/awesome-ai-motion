# Nº 268 부분 아이콘 채우기 · Fractional Icon Fill

> 클립 렌더 예정 / Clip rendering planned.

**아이콘 내부의 채움 경계가 이동해 수량이나 비율을 나타낸다. 마지막 아이콘은 소수 비율만큼만 채워진다.**

A clipping boundary fills icons to the exact fractional value.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | css |

다른 이름 / Also known as: Fractional star fill, 소수 별점 채우기, Fractional Rating, 부분 별점 채움, stat-bars-and-fills, Fractional pictogram fill, 부분 아이콘 비율 채움

## 선택 기준 / Selection

평점의 정수와 소수값을 정확히 전달한다. / Communicates whole and fractional quantities.

- 4.5점은 별 4개와 다섯 번째 별의 절반을 채운다. / Show a fractional rating.
- 평점의 정수와 소수값을 정확히 전달한다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 4.5점은 별 4개와 다섯 번째 별의 절반을 채운다.
나쁜 예 / Bad: 4.5점을 별 5개 전체로 표시한다.
주의 / Avoid: 아이콘 간격은 채움 비율 계산에서 제외한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1000ms | 600~1500ms | 값은 고정하고 경계만 이동 |
| 평점 | 4.5/5 | 0~5 | 실제 측정값 사용 |
| 채움 폭 | 90% | 0~100% | 평점 나누기 최댓값 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.fromTo('.rating-fill',{clipPath:'inset(0 100% 0 0)'},
 {clipPath:'inset(0 10% 0 0)',duration:1,ease:'power2.out'});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 부분 아이콘 채우기을 적용해. 비어 있는 별 위 색 별 레이어의 클리핑 폭을 보간한다. 지속 1000ms; 평점 4.5/5; 채움 폭 90%을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 부분 아이콘 채우기을 적용해. 비어 있는 별 위 색 별 레이어의 클리핑 폭을 보간한다. 지속 1000ms; 평점 4.5/5; 채움 폭 90%을 적용한다. 0초, 0.5초, 1초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Fractional Icon Fill on <target> in <file>. Animate for 1000ms to a rating of 4.5 out of 5, filling exactly 90% of the icon area while excluding gaps. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Fractional Icon Fill on <target> in <file>. Animate for 1000ms to a rating of 4.5 out of 5, filling exactly 90% of the icon area while excluding gaps. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.5s, and 1s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 부분 아이콘 채우기를 `.hero`에 적용해. / Apply Fractional Icon Fill to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 부분 아이콘 채우기 상태를 넣고 seek 시 1초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 1000ms; 평점 4.5/5; 채움 폭 90%을 싣고 4.5점은 별 4개와 다섯 번째 별의 절반을 채운다.
- Scrolline Deck: 진행률 0~1을 1초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [카운트업 · Count-up](../count-up/) · [원형 진행 게이지 · Progress Ring](../progress-ring/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/star-rating-fill/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/stat-bars-and-fills.md`) (unknown) · [Flourish](https://flourish.studio/visualisations/pictogram-charts/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
