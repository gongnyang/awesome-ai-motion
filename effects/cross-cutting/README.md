# Nº 153 교차 편집 · Cross Cutting

> 클립 렌더 예정 / Clip rendering planned.

**두 장소나 두 행동의 장면을 번갈아 보여준다**

Scenes from two places or actions are shown alternately.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 비교, 순서·흐름 | 숏폼, 설명 영상, 발표 | gsap |

## 선택 기준 / Selection

두 장소의 사건을 번갈아 보여 동시 진행과 긴장 관계를 이해시킨다 / Helps viewers grasp simultaneous progress, comparison, or tension.

- 서로 다른 두 곳의 진행 상황(예: 개발과 마케팅)을 동시에 보여 줄 때 / When showing two parallel efforts at once, such as development and marketing
- 추격, 마감 카운트다운처럼 두 흐름이 만나는 순간으로 긴장을 쌓을 때 / When building tension toward a moment where two lines meet, like a chase or deadline countdown

좋은 예 / Good: A와 B를 1.5초씩 번갈아 보이다가 컷 간격을 1.5, 1.1, 0.8, 0.5초로 줄여 가며 두 흐름이 만나는 장면으로 모인다
나쁜 예 / Bad: 간격이 계속 같아 긴장이 오르지 않거나, 두 장면의 색과 구도가 같아 어느 쪽인지 구분이 안 된다
주의 / Avoid: A와 B는 색 온도나 구도로 구분한다 · 컷 수는 6~8개 안에 끝낸다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 고정 | 즉시 |
| 시작 간격 | 1500ms | 1200~1800ms | 초반 |
| 종료 간격 | 500ms | 400~700ms | 수렴 |
| 감소 단계 | 4 | 3~5 | 1.5, 1.1, 0.8, 0.5 |
| 공통 오디오 | 연속 음악 하나 |  | 컷과 별개로 이어짐 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const gaps = [1.5, 1.1, 0.8, 0.5, 0.5];
let t = 0;
gaps.forEach((g, i) => {
  tl.set(i % 2 ? '.b' : '.a', { autoAlpha: 1 }, t).set(i % 2 ? '.a' : '.b', { autoAlpha: 0 }, t);
  t += g;
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에 교차 편집을 넣어줘. .a와 .b를 간격 배열 [1.5, 1.1, 0.8, 0.5, 0.5]초로 번갈아 보이게 하고 tl.set으로 즉시 교체해. 두 장면의 내부 시간은 계속 흐르게 하고 색 온도로 구분해. 마지막 컷 뒤에는 두 흐름이 만나는 합류 장면을 표시해.
```

### 한국어 · Codex
```text
<파일>에 교차 편집을 구현해. gaps=[1.5,1.1,0.8,0.5,0.5]에서 누적 시각마다 .a와 .b 가시성을 tl.set으로 교대. 0.5초, 1.8초, 2.9초, 3.6초 시점을 캡처해 어느 시점에 A 또는 B인지 순서가 맞는지, 컷 간격이 점점 짧아지는지 확인해.
```

### English · Claude Code
```text
Add Cross Cutting to <target>. Alternate .a and .b using the gap array [1.5, 1.1, 0.8, 0.5, 0.5] seconds, swapping instantly with tl.set. Keep the internal time of both scenes running, distinguish them by color temperature, and show a merge scene after the last cut.
```

### English · Codex
```text
Implement Cross Cutting in <file>. With gaps=[1.5,1.1,0.8,0.5,0.5], toggle .a and .b visibility via tl.set at each cumulative time. Capture at 0.5s, 1.8s, 2.9s, and 3.6s to confirm the A and B order is correct and that the cut intervals shorten.
```

예시 / Example: 교차 편집를 `.hero`에 적용해. / Apply Cross Cutting to `.hero`.

## 적용 / Application

- HyperFrames: 간격 배열로 누적 시각을 계산해 tl.set을 깐다. 두 장면 내부 시계는 계속 진행되게 하고 가시성만 교체한다
- ReelForge: 씬 워커 브리프에 간격 배열 [1.5,1.1,0.8,0.5,0.5]과 A/B 구분 색을 싣는다
- Scrolline Deck: scrub에서는 컷 시각을 진행률 누적값(0, 0.3, 0.52, 0.68, 0.84)으로 바꿔 넣는다. 간격이 줄어드는 리듬은 그대로 유지한다

조합 / Pair with: [몽타주 · Montage](../montage/) · [비교 분할 · Split Compare](../split-compare/) · [숏 리버스 숏 · Shot Reverse Shot](../shot-reverse-shot/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/cross-cut.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
