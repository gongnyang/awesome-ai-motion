# Nº 407 단계별 설명 모션 · Segmented Explanation

> 클립 렌더 예정 / Clip rendering planned.

**긴 과정을 짧은 동작 묶음으로 나누고 묶음 끝마다 화면을 잠시 유지하는 구성**

A long process is split into short bursts of motion, each followed by a still hold.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Segmented explanation with stable holds, 분할 설명과 안정된 휴지

## 선택 기준 / Selection

한 번에 처리할 정보를 줄인다. 휴지에서 이해가 자리 잡는다 / Reduces information at once. Understanding settles during the holds.

- 4단계 이상의 긴 과정을 설명하는 영상 / When explaining a process of 4 or more steps in video
- 스크롤 덱에서 단계마다 멈추는 설명 / When a scroll deck should stop at each step

좋은 예 / Good: 동작 3초 다음 1.2초 정지를 4번 반복하고, 정지 동안 다음 단계 제목이 작게 예고된다
나쁜 예 / Bad: 휴지 없이 15초 동안 계속 움직여 시청자가 단계를 놓친다
주의 / Avoid: 묶음당 동작 4초 이하 · 휴지 0.8~1.5초 · 한 묶음에 새 개념 1개

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 동작 묶음 | 3.0s | 2~4s | 한 단계의 움직임 |
| 휴지 | 1.2s | 0.8~1.5s | 화면 정지 |
| 단계 수 | 4 | 3~6 | 한 영상 기준 |
| 이징 | power2.inOut | power1~power3.inOut | 단계 안 동작 |

## 구현 / Implementation (GSAP)

```js
const seg = 3.0, hold = 1.2;
['.step1', '.step2', '.step3', '.step4'].forEach((s, i) => {
  tl.from(s, { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, i * (seg + hold));
  tl.to(s + ' .hi', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, i * (seg + hold) + 1.0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 설명을 4단계로 나눠줘. 각 단계는 동작 3.0초 뒤 1.2초 정지를 두고, 동작 안에서 제목이 opacity 0, y +30px에서 0.8초 power2.out으로 나타나며 1.0초 지점에 강조선이 1.2초 동안 그려져. 단계 시작은 i*4.2초. 라벨 step1..step4를 붙이고 paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 segmented-explanation을 적용해. seg 3.0, hold 1.2로 i*(seg+hold) 위치에 단계를 배치하고 addLabel('step'+i). 1.5초·3.6초(휴지)·5.7초를 캡처해 휴지 구간(3.0~4.2초) 동안 화면이 정지해 있는지 프레임 차분으로 확인해.
```

### English · Claude Code
```text
Split the <target> explanation into 4 steps with GSAP. Each step has 3.0s of motion then a 1.2s still hold; inside the motion the title animates from opacity 0, y +30px over 0.8s with power2.out and an emphasis line draws over 1.2s starting at 1.0s. Step starts at i*4.2s. Add labels step1..step4 on a paused timeline.
```

### English · Codex
```text
Apply segmented-explanation to <target> in <file>. Place steps at i*(seg+hold) with seg 3.0, hold 1.2, and addLabel('step'+i). Capture at 1.5s, 3.6s (hold) and 5.7s, and use a frame diff to confirm the screen is still during the hold from 3.0s to 4.2s.
```

예시 / Example: 단계별 설명 모션를 `.hero`에 적용해. / Apply Segmented Explanation to `.hero`.

## 적용 / Application

- HyperFrames: 휴지는 빈 구간으로 두거나 tl.addLabel로 표시해 편집자가 찾기 쉽게 한다. 총 길이 = n*(seg+hold)
- ReelForge: 브리프에 단계 수·동작 길이·휴지 길이와 단계 제목 목록을 싣는다
- Scrolline Deck: scrub에서는 단계를 스냅 지점으로 두고 휴지 구간은 진행률 변화에도 화면이 정지하도록 매핑한다(스크롤 홀드)

조합 / Pair with: [단계와 패널 동기 진행 · Step-panel Walkthrough](../step-panel-walkthrough/) · [순차 동작 · Action Sequence](../action-sequence/) · [점진적 공개 · Progressive Disclosure](../progressive-disclosure/)

출처 / Sources: [Cambridge University Press](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258) (unknown) · [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
