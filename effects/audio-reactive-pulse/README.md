# Nº 073 오디오 반응 펄스 · Audio Reactive Pulse

> 클립 렌더 예정 / Clip rendering planned.

**소리의 저음이나 고음 세기에 맞춰 도형의 크기와 빛의 세기가 함께 변한다**

Shape size and glow intensity follow the low or high frequency strength of the sound.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 중급 | 강조, 분위기 | 숏폼, 설명 영상, 웹 UI | gsap |

다른 이름 / Also known as: Audio Reactive Shape Pulse, 오디오 반응 도형 맥박

## 선택 기준 / Selection

음악과 화면이 하나의 사건처럼 느껴진다. 소리를 눈으로 볼 수 있게 만든다 / Music and picture feel like one event, making sound visible.

- 뮤직 비디오나 로고 인트로에서 소리에 반응하는 요소가 필요할 때 / Need sound-reactive elements in a music video or logo intro.
- 배경 글로우가 음악과 함께 호흡하게 할 때 / Let a background glow breathe with the music.

좋은 예 / Good: 저음 밴드 값에 따라 로고가 최대 4%만 커지고 글로우가 30% 이하로 밝아진다. 30fps로 미리 뽑은 16밴드 배열을 사용한다
나쁜 예 / Bad: scale이 20% 이상 출렁여 로고가 튀고 글로우가 화면을 덮는다. 재생 중에 오디오를 실시간 분석해 seek가 안 된다
주의 / Avoid: scale 변화 6% 초과 금지 · 실시간 분석 금지(미리 뽑은 배열만)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 프레임율 | 30fps | 24~60fps | 배열 샘플 간격 33ms |
| 주파수 밴드 | 16 | 8~32 | 저음은 밴드 0~2 |
| scale 변화 | 4% 이하 | 2~6% | 1+amp*0.04 |
| glow 변화 | 30% 이하 | 15~40% | opacity로 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const amp = bassEnvelope; // [0..1] 배열, 30fps로 사전 추출
tl.to({}, { duration: amp.length / 30, ease: 'none', onUpdate() {
  const a = amp[Math.min(amp.length - 1, Math.floor(this.time() * 30))];
  gsap.set('.logo', { scale: 1 + a * 0.04 }); gsap.set('.glow', { opacity: 0.4 + a * 0.3 }); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 로고가 저음에 반응하도록 만들어줘. 30fps로 미리 뽑아 둔 bass.json 배열(0~1)을 읽어 scale을 1+amp*0.04, 글로우 opacity를 0.4+amp*0.3으로 매 프레임 설정해. 재생 중 오디오 분석은 쓰지 말고 타임라인 time()으로 배열을 인덱싱해줘.
```

### 한국어 · Codex
```text
<파일>에 audio reactive pulse를 구현해. 입력은 bass.json(30fps, 0~1). scale = 1+amp*0.04, glow opacity = 0.4+amp*0.3. onUpdate에서 index = floor(time*30). 킥이 있는 시점 두 곳과 무음 시점 한 곳을 캡처해 킥에서만 scale이 커지는지, 최대 scale이 1.04를 넘지 않는지 확인해.
```

### English · Claude Code
```text
Make the logo in <target> react to bass. Read a pre-extracted bass.json (30fps, values 0 to 1) and set scale to 1+amp*0.04 and glow opacity to 0.4+amp*0.3 every frame. Do not analyze audio at playback; index the array with timeline time().
```

### English · Codex
```text
Implement audio reactive pulse in <file>. Input is bass.json (30fps, 0 to 1). scale = 1+amp*0.04, glow opacity = 0.4+amp*0.3, index = floor(time*30) in onUpdate. Capture two kick moments and one silent moment to verify scale grows only on kicks and never exceeds 1.04.
```

예시 / Example: 오디오 반응 펄스를 `.hero`에 적용해. / Apply Audio Reactive Pulse to `.hero`.

## 적용 / Application

- HyperFrames: 음량 배열은 오프라인에서 ffmpeg 등으로 미리 뽑아 JSON으로 넣는다. onUpdate에서 time()으로 인덱싱하면 seek도 결정론적이다
- ReelForge: 씬 워커 브리프에 음악 파일, 배열 경로, 밴드 번호, scale 4%, glow 30%를 싣는다
- Scrolline Deck: 음악이 없으므로 amp 대신 스크롤 속도나 진행률의 사인파를 입력으로 쓰거나 이 효과는 생략한다

조합 / Pair with: [비트 싱크 · Beat Synchronization](../beat-sync/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/) · [브리딩 루프 · Breathing Loop](../breathing-loop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-accent/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/techniques.md) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-pulse-background/registry-item.json) (Apache-2.0) · [remotion-dev/skills](https://github.com/remotion-dev/skills/blob/HEAD/skills/remotion-best-practices/remotion-markup/audio-visualization.md) (unknown) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/techniques.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
