# Nº 636 인물 뒤 자막 · Subject Occluded Caption

> 클립 렌더 예정 / Clip rendering planned.

**큰 자막이 인물 뒤에 놓여 인물 몸이 글자를 일부 가리는 삽입형 자막**

Large caption sits behind the speaker so the body partly covers the letters.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 고급 | 주목 끌기, 강조, 분위기 | 숏폼, 설명 영상 | canvas |

다른 이름 / Also known as: Behind subject captions, Embedded Caption, 피사체 뒤 자막 임베드

## 선택 기준 / Selection

글자가 실제 공간 속에 있고 인물이 그 앞에 서 있는 것처럼 보인다. 영상에 깊이가 생긴다 / The words appear to live in real space with the person in front, giving the footage depth.

- 말하는 사람 한 명이 화면 중앙에 있는 영상에서 핵심어를 크게 띄울 때 / Blowing up a key word on a single centered speaker
- 하이라이트 문구를 인물 뒤 배경에 삽입하고 싶을 때 / Placing a highlight phrase into the scene behind the person

좋은 예 / Good: 핵심어가 인물 머리 뒤에 350ms에 걸쳐 나타나고 어깨와 머리 윤곽이 글자 일부를 가려 다음 단어로 같은 자리에서 교체된다
나쁜 예 / Bad: 인물 매트 가장자리가 거칠어 글자 가장자리와 함께 떨리거나 인물이 움직일 때 매트가 어긋난다
주의 / Avoid: 한 명의 정면 인물, 컷 없는 샷에만 쓴다. 다인원·컷 편집 영상에서는 매트가 깨진다 · 글자가 인물 얼굴 전체를 가리면 안 된다. 얼굴은 항상 앞이다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단어 등장 | 0.35s | 0.25~0.5s | opacity와 scale 0.96에서 1 |
| 글자 크기 | 화면 높이 22% | 15~30% | 1080p에서 약 240px |
| 교체 크로스 | 0.15s | 0.1~0.2s | 다음 단어와 겹침 |
| 매트 경계 페더 | 2px | 0~3px | 가장자리 부드럽게 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
// 레이어 순서: 1 배경 영상 / 2 큰 글자 / 3 인물 매트 영상(전경, 알파)
cues.forEach(c => {
  tl.fromTo(word(c.i), {opacity:0, scale:0.96}, {opacity:1, scale:1, duration:0.35, ease:'power2.out'}, c.start)
    .to(word(c.i), {opacity:0, duration:0.15}, c.end);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상 위에 인물 뒤 삽입 자막을 만들어줘. 레이어를 배경 영상, 큰 글자(화면 높이 22%), 인물 알파 매트 순으로 쌓고, 핵심어는 발화 시작에서 0.35초 동안 opacity 0에서 1, scale 0.96에서 1로 나타나 끝에서 0.15초로 다음 단어와 교체돼. 얼굴은 글자에 가려지지 않게 위치를 잡아.
```

### 한국어 · Codex
```text
<파일>에 subject occluded caption을 적용해. 배경 video, 글자 div, 매트 video(알파)를 같은 data-start·같은 currentTime으로 겹치고 글자는 중간 레이어. 핵심어 등장 0.35초 power2.out. 등장 직후, 인물이 움직이는 시점, 단어 교체 시점을 캡처해 매트가 글자와 어긋나지 않는지, 얼굴이 가려지지 않는지 확인해.
```

### English · Claude Code
```text
Build a behind-the-subject caption over the video in <target>. Stack background video, big text (22% of frame height), then the subject alpha matte on top. Each key word fades 0 to 1 and scales 0.96 to 1 over 0.35s at utterance start, crossfading to the next word over 0.15s. Position the text so the face is never covered.
```

### English · Codex
```text
Apply subject occluded caption in <file>. Layer background video, text div and matte video (alpha) with the same data-start and currentTime; text sits in the middle layer. Word entrance 0.35s power2.out. Capture right after entrance, at a moment of subject movement, and at a word swap to verify matte alignment and that the face stays uncovered.
```

예시 / Example: 인물 뒤 자막를 `.hero`에 적용해. / Apply Subject Occluded Caption to `.hero`.

## 적용 / Application

- HyperFrames: 원본 영상과 인물 알파 영상(webm/mov)을 같은 data-start로 두 트랙에 깔고 글자를 그 사이 레이어에 둔다. 매트는 사전에 생성해 프레임 정확도를 검증한다
- ReelForge: 브리프에 원본·매트 파일, 핵심어 배열, 글자 크기 22%, 등장 0.35초를 싣는다. 매트 생성은 별도 전처리 단계로 분리한다
- Scrolline Deck: 영상 프레임 스크럽 덱에서 쓴다. 진행률에 대응한 프레임과 매트 프레임을 함께 넘겨야 어긋나지 않으므로 두 시퀀스를 같은 인덱스로 로드한다

조합 / Pair with: [자막 화면 점유 · Caption Takeover](../caption-takeover/) · [카라오케 자막 · Karaoke Caption](../karaoke-caption/) · [장면 통합 타이틀 · Scene Integrated Title](../scene-integrated-title/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-parallax-layers/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:embedded-captions/references/composition-craft.md`) (unknown) · local/HyperFrames-skills (`claude-skill:hyperframes-creative/references/composition-patterns.md`) (unknown) · local/embedded-captions (`claude-skill:embedded-captions/references/typographic-moves.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
