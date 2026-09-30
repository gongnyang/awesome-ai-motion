# Nº 196 숏 리버스 숏 · Shot Reverse Shot

> 클립 렌더 예정 / Clip rendering planned.

**대화하는 두 사람의 반대 방향 시점이 발언과 반응에 맞춰 번갈아 나타난다**

Opposite viewpoints of two speaking people alternate with speech and reaction.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 순서·흐름, 설명 | 설명 영상, 숏폼, 발표 | gsap |

## 선택 기준 / Selection

대화하는 두 사람의 시점을 번갈아 보여 관계와 공간의 연속성을 이해시킨다 / Makes the relationship and spatial continuity of a conversation clear.

- 인터뷰나 대화 시연에서 화자가 바뀔 때 화면을 바꾸어 줄 때 / When switching the frame as the speaker changes in an interview or demo dialogue
- 두 캐릭터가 질문과 답을 주고받는 스토리형 영상 / In story-style videos where two characters trade questions and answers

좋은 예 / Good: 화자 A 시점에서 발언 말미에 0ms로 B 시점으로 컷하고, 두 인물은 같은 축의 좌우 반대 방향에 앉아 있다
나쁜 예 / Bad: 두 인물이 같은 쪽을 보고 있어 대화하는 것처럼 보이지 않거나, 컷이 발언 중간에 들어가 말이 끊긴다
주의 / Avoid: 축을 넘지 않는다(A는 항상 오른쪽을 B는 왼쪽을 본다) · 발언 말미에 컷한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 고정 | 즉시 |
| 컷 위치 | 발언 종료 -0.1s | -0.2~0s | 말미 |
| A 시선 | 오른쪽 | 고정 | 축 유지 |
| B 시선 | 왼쪽 | 고정 | 축 유지 |
| 컷 사이 간격 | 2.0s | 1.2~3s | 대화 속도 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const turns = [0, 2.0, 3.8, 5.4];   // 발언 말미 컷 시각
turns.forEach((t, i) => {
  tl.set('.shot-a', { autoAlpha: i % 2 ? 0 : 1 }, t);
  tl.set('.shot-b', { autoAlpha: i % 2 ? 1 : 0 }, t);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 대화 장면에 숏 리버스 숏을 넣어줘. .shot-a는 오른쪽, .shot-b는 왼쪽을 보는 구도를 유지하고, 컷 시각 [0, 2.0, 3.8, 5.4]초에 tl.set으로 번갈아 교체해. 컷은 각 발언 종료 0.1초 전에 넣고, 오디오 트랙은 하나로 이어 줘.
```

### 한국어 · Codex
```text
<파일>에 숏 리버스 숏을 구현해. turns=[0,2.0,3.8,5.4]에서 홀수 인덱스는 .shot-b, 짝수는 .shot-a를 tl.set으로 표시. 0.5초, 2.5초, 4.0초, 5.6초 시점을 캡처해 화자에 맞는 시점으로 바뀌는지, A가 항상 오른쪽을 보는지 확인해.
```

### English · Claude Code
```text
Add Shot Reverse Shot to the dialogue in <target>. Keep .shot-a facing right and .shot-b facing left. Alternate them with tl.set at [0, 2.0, 3.8, 5.4]s, cutting 0.1s before each line ends. Keep one continuous audio track.
```

### English · Codex
```text
Implement Shot Reverse Shot in <file>. With turns=[0,2.0,3.8,5.4], show .shot-b on odd indices and .shot-a on even via tl.set. Capture at 0.5s, 2.5s, 4.0s, and 5.6s to confirm the view matches the speaker and that A always faces right.
```

예시 / Example: 숏 리버스 숏를 `.hero`에 적용해. / Apply Shot Reverse Shot to `.hero`.

## 적용 / Application

- HyperFrames: 컷 시각 배열을 대사 타임코드에서 가져와 tl.set을 깐다. 두 시점 모두 같은 오디오 트랙 하나를 공유해 seek해도 소리와 화면이 맞는다
- ReelForge: 씬 워커 브리프에 A/B 시선 방향 고정(오른쪽/왼쪽)과 컷 시각 배열을 싣는다
- Scrolline Deck: scrub에서는 대사 구간 경계를 진행률 임계값으로 환산해 즉시 교체한다. 보간은 넣지 않는다

조합 / Pair with: [리액션 컷 · Reaction Cut](../reaction-cut/) · [시선 연결 컷 · Eyeline Match](../eyeline-match/) · [교차 편집 · Cross Cutting](../cross-cutting/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film.html) (unknown) · [Adobe](https://www.adobe.com/creativecloud/video/production/cinematography/camera-shots-and-angles.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
