# Nº 626 자막 화면 점유 · Caption Takeover

![자막 화면 점유 · Caption Takeover](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**평소 하단 자막이 한 순간 화면 전체를 채우는 큰 타이틀로 바뀌었다가 원래 자막으로 돌아오는 효과**

The usual caption line swaps for a huge full-frame title for one beat, then returns to the reading rail.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 중급 | 강조, 주목 끌기 | 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Ticker takeover, 티커에서 제목 승격

## 선택 기준 / Selection

발화의 절정을 한 번 크게 전달한다. 평소에 조용하다가 강조 순간에만 화면이 말한다 / The climax of a sentence lands once, big. The screen stays quiet, then speaks.

- 발화 중 가장 중요한 한 문장을 화면 전체로 보여 줄 때 / When the single most important sentence should fill the frame
- 평범한 자막 영상에 리듬의 정점을 만들고 싶을 때 / When a plain caption video needs a rhythmic peak

좋은 예 / Good: 평소 자막 줄이 절정 문장에서 0ms에 화면 중앙 전면 타이틀로 바뀌어 1.0초 유지되고 250ms에 원래 하단 자막으로 복귀한다
나쁜 예 / Bad: 한 영상에서 5번 이상 남발해 어느 것도 절정으로 읽히지 않고 복귀 후 자막 위치가 어긋난다
주의 / Avoid: 한 영상 1분당 최대 2회. 자주 쓰면 강조가 사라진다 · 복귀 후 하단 자막 위치와 크기가 이전과 정확히 같아야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 진입 | 0ms | 0~80ms | 하드 컷 또는 짧은 스냅 |
| 전면 유지 | 1.0s | 0.7~1.5s | 문장 길이에 비례 |
| 복귀 | 250ms | 200~350ms | power2.out |
| 전면 글자 크기 | 화면 높이 14% | 10~18% | 최대 2줄 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.set('.rail', {opacity:0}, T)
  .set('.full', {opacity:1, scale:1}, T)
  .to('.full', {opacity:0, scale:0.98, duration:0.25, ease:'power2.out'}, T + 1.0)
  .to('.rail', {opacity:1, duration:0.25}, T + 1.0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 자막 영상의 <절정 큐>에서 하단 자막을 숨기고 화면 중앙에 높이 14%의 큰 문장을 0ms에 띄워 1.0초 유지한 뒤 0.25초 power2.out으로 원래 하단 자막으로 복귀시켜줘. 영상 전체에서 2회 이하로만 써.
```

### 한국어 · Codex
```text
<파일>에 caption takeover를 적용해. 시각 T에 .rail opacity 0과 .full opacity 1을 set, T+1.0에 .full 페이드아웃과 .rail 페이드인을 0.25초. T-0.1초, T+0.1초, T+1.1초, T+1.4초를 캡처해 자막 전환, 전면 유지, 복귀 중, 복귀 완료를 확인하고 복귀 후 .rail 좌표가 처음과 같은지 비교해.
```

### English · Claude Code
```text
In the captioned video <target>, at <climax cue> hide the bottom caption and snap in a large sentence at 14% frame height at center with 0ms in, hold 1.0s, then return to the bottom caption over 0.25s power2.out. Use it at most twice in the whole video.
```

### English · Codex
```text
Apply caption takeover in <file>. At time T set .rail opacity 0 and .full opacity 1; at T+1.0 fade .full out and .rail in over 0.25s. Capture at T-0.1s, T+0.1s, T+1.1s and T+1.4s to verify the swap, the hold, the return in progress and completion, and that .rail coordinates equal the originals.
```

예시 / Example: 자막 화면 점유를 `.hero`에 적용해. / Apply Caption Takeover to `.hero`.

## 적용 / Application

- HyperFrames: set으로 즉시 교체하고 복귀만 tween한다. 두 상태 요소가 모두 DOM에 있어야 seek가 안전하다
- ReelForge: 브리프에 절정 큐의 시작 시각과 문장, 전면 유지 1.0초, 복귀 0.25초, 최대 횟수 2를 싣는다
- Scrolline Deck: 진행률 임계 지점에서 상태를 교체한다. 되감기 시에도 전면 상태가 유지되는 구간을 진행률로 정확히 정의한다

조합 / Pair with: [자막 페이지 교체 · Caption Page Swap](../caption-page-swap/) · [도장 타격 · Stamp Impact](../stamp-impact/) · [단어 강조 · Word Emphasis](../word-emphasis/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown) · local/HyperFrames-skills (`claude-skill:embedded-captions/themes/README.md`) (unknown) · local/HyperFrames-skills (`claude-skill:embedded-captions/modes/standard/_motion.md`) (unknown) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ticker-takeover/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/ticker-takeover.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
