# Nº 180 몽타주 · Montage

> 클립 렌더 예정 / Clip rendering planned.

**여러 짧은 이미지가 연달아 바뀌며 긴 과정이나 주제를 압축한다**

Several short images cut in succession, compressing a long process or theme.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 순서·흐름, 분위기 | 숏폼, 설명 영상, 발표 | gsap |

## 선택 기준 / Selection

짧은 이미지들을 연달아 붙여 긴 과정이나 주제를 압축한다 / Conveys the passage of time, accumulation, or thematic connection.

- 제작 과정, 성장, 하루 일과처럼 긴 시간을 몇 초로 압축할 때 / To compress a long span such as a build, growth, or daily routine into seconds
- 서비스의 여러 장점을 짧은 컷 5개로 이어 보여 줄 때 / To show several benefits of a service in five short cuts

좋은 예 / Good: 샷 5개를 각 800ms로 컷으로 이어 붙이고 마지막 결과 샷을 1000ms 유지한다
나쁜 예 / Bad: 샷 길이가 모두 같아 단조롭거나, 마지막에 결과가 없어 끝이 흐지부지하다
주의 / Avoid: 샷은 4~6개로 제한한다(7개 이상은 정보 과다) · 마지막 결과 샷을 1초 이상 유지한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 샷 수 | 5 | 4~6 | 이야기 단위 |
| 샷 길이 | 800ms | 400~1200ms | 뒤로 갈수록 짧게 가능 |
| 컷 | 0ms | 고정 | 즉시 교체 |
| 마지막 홀드 | 1000ms | 800~1500ms | 결과 |
| 배경 음악 | 비트 정렬 |  | 컷을 비트에 맞춤 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const durs = [1.0, 0.9, 0.8, 0.7, 0.6];
let t = 0;
durs.forEach((d, i) => { tl.set(`.shot-${i}`, { autoAlpha: 1 }, t).set(`.shot-${i}`, { autoAlpha: 0 }, t + d); t += d; });
tl.set('.result', { autoAlpha: 1 }, t);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에 몽타주를 넣어줘. .shot-0부터 .shot-4까지 길이 [1.0, 0.9, 0.8, 0.7, 0.6]초로 컷으로 이어 붙이고, 마지막에 결과 샷 .result를 1.0초 유지해. 전환 효과는 넣지 말고 tl.set만 써. 배경 음악이 있으면 컷을 비트에 정렬해줘.
```

### 한국어 · Codex
```text
<파일>에 몽타주를 구현해. durs=[1.0,0.9,0.8,0.7,0.6] 누적 시각마다 .shot-i 표시와 이전 샷 숨김을 tl.set으로, 총 4.0초에 .result 표시 후 1.0초 유지. 0.5초, 1.5초, 2.7초, 3.7초, 4.5초 시점을 캡처해 샷 순서와 결과 샷 표시 시점을 확인해.
```

### English · Claude Code
```text
Add a Montage to <target>. Cut .shot-0 through .shot-4 with durations [1.0, 0.9, 0.8, 0.7, 0.6]s using tl.set only, then hold the final result shot .result for 1.0s. No transition effects. If music is present, align the cuts to the beat.
```

### English · Codex
```text
Implement Montage in <file>. With durs=[1.0,0.9,0.8,0.7,0.6], show each .shot-i and hide the previous via tl.set at cumulative times, then show .result at 4.0s and hold 1.0s. Capture at 0.5s, 1.5s, 2.7s, 3.7s, and 4.5s to confirm shot order and result timing.
```

예시 / Example: 몽타주를 `.hero`에 적용해. / Apply Montage to `.hero`.

## 적용 / Application

- HyperFrames: 샷 길이 배열의 누적 시각으로 tl.set 가시성 교체를 깐다. 배경 음악 BPM에 맞춰 길이 배열을 계산하면 비트 동기화가 쉽다
- ReelForge: 씬 워커 브리프에 샷 수 5, 길이 배열, 마지막 홀드 1000ms를 싣는다
- Scrolline Deck: scrub에서는 샷을 진행률 구간(0~0.2, 0.2~0.4 등)에 배정한다. 한 구간 안에서는 정지한다

조합 / Pair with: [점프 컷 · Jump Cut](../jump-cut/) · [교차 편집 · Cross Cutting](../cross-cutting/) · [비트 싱크 · Beat Synchronization](../beat-sync/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/discover/edit-a-video.html) (unknown) · motion dictionary 2-transitions-camera.md#33. 몽타주 · Montage (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
