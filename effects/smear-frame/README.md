# Nº 012 스미어 프레임 · Smear Frame

> 클립 렌더 예정 / Clip rendering planned.

**빠른 이동 중 대상이 이동 방향으로 길게 늘어나거나 여러 윤곽으로 퍼졌다 돌아오는 표현**

During a fast move, the object stretches along its direction of travel and snaps back.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 고급 | 강조, 설명 | 숏폼, 설명 영상 | svg |

다른 이름 / Also known as: Smear Frame Motion, 스미어 프레임 운동

## 선택 기준 / Selection

속도와 타격의 강도. 프레임 사이가 비지 않고 이어져 보인다 / Speed and impact. Frames read as connected rather than as a jump.

- 빠른 스와이프·휘두름·튀어나옴을 한두 프레임으로 강조할 때 / When a swipe, swing or pop-out should hit in one or two frames
- 공이나 아이콘이 화면을 가로지르는 순간을 힘 있게 보여 줄 때 / When a ball or icon crosses the screen with force

좋은 예 / Good: 공이 x 900px을 0.12초에 지나갈 때 scaleX 1.8로 늘어났다가 도착 직후 1로 복귀한다
나쁜 예 / Bad: 늘어난 상태로 0.3초 이상 머물러 왜곡으로 보이거나, 느린 이동에도 스미어를 건다
주의 / Avoid: 스미어는 50~100ms 안에 끝낸다 · 느린 이동(0.5초 이상)에는 쓰지 않는다 · 늘림은 이동 방향 축으로만

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 스미어 길이 | 50~100ms | 40~120ms | 가장 빠른 구간 |
| 신장 배율 | 1.8 | 1.4~2.2 | 이동 방향 축 scale |
| 이동 거리 | 900px | 400~1200px | 1920x1080 기준 |
| 이징 | power4.in | power3~power4.in | 가속 뒤 즉시 정지 |

## 구현 / Implementation (GSAP)

```js
tl.to('.ball', { x: 900, duration: 0.12, ease: 'power4.in' }, 0.4)
  .to('.ball', { scaleX: 1.8, transformOrigin: '100% 50%', duration: 0.06 }, 0.4)
  .to('.ball', { scaleX: 1, duration: 0.1, ease: 'power2.out' }, 0.52);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>이 x 900px을 0.12초에 지나갈 때 스미어를 넣어줘. 0.4초에 power4.in으로 이동시키고, 같은 시각에 scaleX를 1.8까지 0.06초에 늘려(transformOrigin 100% 50%) 0.52초부터 0.1초 동안 1로 되돌려. 이동 방향 축만 늘려. paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 smear-frame을 적용해. x 900 이동(0.12s, power4.in, position 0.4)과 scaleX 1.8(0.06s), 복귀 scaleX 1(0.1s, position 0.52). 0.44초·0.5초·0.7초를 캡처해 늘어난 프레임에서 폭이 1.8배 안팎인지, 0.7초에 원래 비율인지 확인해.
```

### English · Claude Code
```text
Add a smear frame to <target> as it moves 900px in x over 0.12s. At 0.4s move with power4.in, and in the same moment stretch scaleX to 1.8 over 0.06s with transformOrigin 100% 50%, then return to 1 over 0.1s from 0.52s. Stretch only along the travel axis. One paused timeline.
```

### English · Codex
```text
Apply smear-frame to <target> in <file>. Tween x 900 (0.12s, power4.in, position 0.4), scaleX 1.8 (0.06s), and restore scaleX 1 (0.1s, position 0.52). Capture at 0.44s, 0.5s and 0.7s to check width is about 1.8x on the stretched frame and back to normal at 0.7s.
```

예시 / Example: 스미어 프레임를 `.hero`에 적용해. / Apply Smear Frame to `.hero`.

## 적용 / Application

- HyperFrames: 프레임 30fps에서 0.12초는 약 4프레임이다. 스미어 tween을 그 프레임 안에 넣고 seek 캡처로 늘어난 프레임을 확인한다
- ReelForge: 브리프에 이동 거리·신장 배율·스미어 길이를 넣고 추가로 방향 축(x/y)을 지정한다
- Scrolline Deck: scrub에서는 속도가 0에 가까워 스미어가 안 보인다. 진행률 변화량 비례로 scaleX를 걸거나 생략한다

조합 / Pair with: [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/) · [모션 블러 · Motion Blur](../motion-blur/) · [데이터 이동 잔상 · Motion Trails](../motion-trails/)

출처 / Sources: [schoolofmotion.com](https://schoolofmotion.com/courses/animation-bootcamp) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
