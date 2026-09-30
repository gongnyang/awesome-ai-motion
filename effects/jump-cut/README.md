# Nº 171 점프 컷 · Jump Cut

> 클립 렌더 예정 / Clip rendering planned.

**같은 구도의 장면에서 인물 위치나 상태가 순간적으로 건너뛰어 바뀐다**

The person or state jumps instantly within the same framing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 순서·흐름, 주목 끌기 | 숏폼, 설명 영상, 제품 시연 | gsap |

다른 이름 / Also known as: 점프컷

## 선택 기준 / Selection

같은 구도에서 시간이 툭 건너뛴다. 군더더기를 빼고 속도를 높인다 / Compresses time and conveys deliberate discontinuity.

- 같은 자리의 화자나 작업 화면에서 말 사이 공백과 대기 시간을 덜어낼 때 / To remove pauses and dead time from a talking head or screen recording in a fixed position
- 제작 과정, 코딩 화면처럼 시간이 길어 압축해야 하는 장면 / For long processes like builds or coding that need compressing

좋은 예 / Good: 같은 구도에서 0ms 전환으로 화면을 바꾸고 컷 사이 간격은 500ms 안팎, 매번 인물 위치가 살짝 다르게 이어진다
나쁜 예 / Bad: 컷마다 배율을 거의 같게 써서 어긋남이 의도가 아닌 실수로 보이거나, 컷 간격이 너무 고르게 반복돼 기계적이다
주의 / Avoid: 앞뒤 컷의 구도 차이는 배율 5~10% 또는 위치 30px 이상으로 두어 의도가 읽히게 한다 · 정보 전달이 끊기는 지점에서는 컷을 자제한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 고정 | 즉시 교체 |
| 컷 간격 | 500ms | 350~900ms | 호흡에 맞춘다 |
| 배율 변화 | 1.0 / 1.08 교대 | 1.05~1.12 | 컷마다 미세 확대 |
| 위치 변화 | 40px | 20~60px | 시선 유지 |
| 오디오 | 연속 유지 |  | 영상만 끊는다 |

이징 / Ease: `none (steps)`

## 구현 / Implementation (GSAP)

```js
const cuts = [0, 0.5, 1.1, 1.6];
cuts.forEach((t, i) => {
  tl.set('.shot', { scale: i % 2 ? 1.08 : 1, x: i % 2 ? -40 : 0 }, t);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에 점프 컷을 넣어줘. 컷 시각을 0, 0.5, 1.1, 1.6초로 정하고 짝수 컷은 scale 1, x 0, 홀수 컷은 scale 1.08, x -40px로 tl.set으로 즉시 교체해. 전환 트윈은 넣지 말고 음성은 끊기지 않게 유지해. paused 타임라인에서 seek 가능하게 해줘.
```

### 한국어 · Codex
```text
<파일>에 점프 컷을 구현해. cuts=[0,0.5,1.1,1.6], 홀수 컷 scale 1.08 x -40, 짝수 컷 scale 1 x 0, 모두 tl.set. 0.25초, 0.75초, 1.3초 시점을 캡처해 각 시점의 scale이 기대 값인지, 컷 경계 프레임에 중간 상태가 없는지 확인해.
```

### English · Claude Code
```text
Add Jump Cuts to <target>. Set cut times to 0, 0.5, 1.1, and 1.6s; alternate between scale 1, x 0 and scale 1.08, x -40px using tl.set so changes are instant. No transition tweens, and keep the audio continuous. Make it seekable on a paused timeline.
```

### English · Codex
```text
Implement Jump Cut in <file>. cuts=[0,0.5,1.1,1.6]; odd cuts scale 1.08 x -40, even cuts scale 1 x 0, all via tl.set. Capture at 0.25s, 0.75s, and 1.3s to confirm scale matches the expected value at each point and that no in-between state appears on cut boundary frames.
```

예시 / Example: 점프 컷를 `.hero`에 적용해. / Apply Jump Cut to `.hero`.

## 적용 / Application

- HyperFrames: 컷 시각을 배열로 두고 tl.set으로 scale과 x를 즉시 바꾼다. 전환 트윈이 없어서 seek 시 어느 시점에서도 같은 상태가 나온다
- ReelForge: 씬 워커 브리프에 컷 시각 목록과 교대 배율(1.0/1.08)을 싣고, 음성은 끊지 말라고 명시한다
- Scrolline Deck: scrub에서는 컷을 진행률 임계값(0.25, 0.5, 0.75)에서 즉시 교체한다. 부드러운 보간을 넣지 않는다

조합 / Pair with: [스매시 컷 · Smash Cut](../smash-cut/) · [프리즈 컷 · Freeze Cut](../freeze-cut/) · [몽타주 · Montage](../montage/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/discover/jump-cut.html) (unknown) · motion dictionary 2-transitions-camera.md#3. 점프컷 · Jump Cut (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
