# Nº 204 시간 압축 · Time Compression

> 클립 렌더 예정 / Clip rendering planned.

**긴 대기나 반복 동작을 빠르게 진행하거나 중간 구간을 잘라 결과로 넘어가고 배속이나 생략 표식을 함께 띄우는 표현**

A long wait or repeated action is sped up or cut out so the piece jumps to the result, with a speed or ellipsis marker.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 숏폼 | gsap |

다른 이름 / Also known as: Time compression / Ellipsis, 시간 압축·생략 표시

## 선택 기준 / Selection

과정의 선후는 지키면서 불필요한 대기를 줄인다. 시간이 압축됐음을 시청자가 안다 / Keeps the order of events while trimming dead time. Viewers know time has been compressed.

- 설치·빌드·업로드 진행 화면의 대기를 줄일 때 / When shortening waits on install, build or upload screens
- 반복 입력 과정을 4배속으로 지나갈 때 / When passing repeated input at 4x speed
- 중간 과정을 생략하고 결과 화면으로 넘어갈 때 / When skipping the middle and jumping to the result screen

좋은 예 / Good: 진행 화면이 4배속으로 재생되는 동안 4x 표식이 150ms에 등장해 1.5초 유지되고 결과 화면으로 컷된다
나쁜 예 / Bad: 배속 표식 없이 빨라져 시청자가 오류로 오해하거나, 압축 구간이 길어 지루하다
주의 / Avoid: 배속 표식 필수 · 압축 구간은 전체의 25% 이하 · 결과 화면은 1.5초 이상 유지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 배속 | 4x | 2~8x | 클립 재생 속도 |
| 표식 등장 | 150ms | 100~250ms | 4x 배지 |
| 표식 유지 | 1.5s | 1.0~2.0s | 압축 구간 동안 |
| 생략 컷 | 0ms | 0 | 중간 구간 잘라내기 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.to(video, { currentTime: 40, duration: 10, ease: 'none' }, 1.0)
  .from('.badge-4x', { opacity: 0, scale: 0.9, duration: 0.15, ease: 'power2.out' }, 1.0)
  .to('.badge-4x', { opacity: 0, duration: 0.15 }, 2.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 진행 영상의 대기를 4배속으로 압축해줘. 1.0초부터 10초 동안 영상 currentTime을 0에서 40까지 linear로 올리고, 같은 시각에 4x 배지가 opacity 0, scale 0.9에서 0.15초로 나타나 1.5초 유지 후 0.15초로 사라지게 해. 뒤에 결과 화면을 1.5초 이상 유지해. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 time-compression을 적용해. video currentTime 0→40, 10s, ease none, position 1.0. 배지 .badge-4x는 from {opacity 0, scale 0.9}(0.15s, position 1.0)와 fade out(position 2.5). 1.0초·1.3초·6.0초·11.5초를 캡처해 배지 표시, 영상 진행 시각(4배), 결과 화면이 보이는지 확인해.
```

### English · Claude Code
```text
Compress the wait in the <target> progress video to 4x with GSAP. From 1.0s over 10s raise the video currentTime from 0 to 40 linearly, and at the same time show a 4x badge from opacity 0, scale 0.9 over 0.15s, hold 1.5s and fade over 0.15s. Then hold the result screen at least 1.5s. Paused timeline.
```

### English · Codex
```text
Apply time-compression to <target> in <file>. Tween video currentTime 0 to 40 over 10s, ease none, position 1.0. Badge .badge-4x from {opacity 0, scale 0.9} (0.15s, position 1.0) and fade out at 2.5. Capture at 1.0s, 1.3s, 6.0s and 11.5s and check the badge shows, the video time advances at 4x and the result screen is visible.
```

예시 / Example: 시간 압축를 `.hero`에 적용해. / Apply Time Compression to `.hero`.

## 적용 / Application

- HyperFrames: 영상 재생 시간을 currentTime tween으로 직접 제어하면 seek가 결정론이다. 표식은 압축 구간 시작에 맞춰 등장시킨다
- ReelForge: 브리프에 원본 구간(초), 배속, 표식 문구, 생략 여부를 싣는다. 40초 구간을 4배속이면 10초 결과
- Scrolline Deck: scrub에서는 진행률 구간을 압축 영상 시간으로 매핑한다. 배속 표식은 구간 안에서만 보이게 한다

조합 / Pair with: [스피드 램프 · Speed Ramp](../speed-ramp/) · [프리즈 프레임 장식 · Freeze Frame Dressing](../freeze-frame-dressing/) · [순차 동작 · Action Sequence](../action-sequence/)

출처 / Sources: motion dictionary 4-explainer-learning.md#C. 템포·리듬·편집과 비트 동기 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
