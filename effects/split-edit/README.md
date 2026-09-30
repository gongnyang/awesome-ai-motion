# Nº 200 J컷과 L컷 · J-cut and L-cut

> 클립 렌더 예정 / Clip rendering planned.

**장면 경계에서 소리가 먼저 바뀌고 화면이 뒤따르거나(J컷), 화면이 바뀐 뒤 이전 소리가 이어지는(L컷) 편집**

Sound changes before the picture (J-cut) or the old sound continues after the picture changes (L-cut).

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 순서·흐름 | 설명 영상, 발표, 숏폼 | gsap |

다른 이름 / Also known as: Sound bridge / J-cut / L-cut, 사운드 브리지·J컷·L컷

## 선택 기준 / Selection

다음 장면을 미리 알리거나 이전 장면의 여운을 유지한다. 컷이 부드럽게 이어진다 / Announces the next scene early or holds the echo of the last. The cut flows smoothly.

- 내레이션이 다음 장면 이야기를 먼저 시작할 때 / When narration starts the next scene's story before it appears
- 인터뷰 답변이 이어지는 동안 화면을 자료 컷으로 바꿀 때 / When an interview answer continues over cutaway footage

좋은 예 / Good: J컷은 내레이션이 3.0초에 바뀌고 화면은 3.4초에 바뀐다. L컷은 화면이 3.0초에 바뀌고 이전 소리가 3.4초까지 남는다
나쁜 예 / Bad: 소리 선행이 1초 이상이라 화면과 무관하게 들리거나, 두 소리가 겹쳐 내용이 섞인다
주의 / Avoid: 선행·잔류 0.2~0.6초 · 겹치는 소리는 한쪽을 -12dB 이하로 · 자막과 소리 시각을 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 화면 컷 | 0ms | 0 | 시각은 하드컷 |
| 소리 선행/잔류 | 400ms | 200~600ms | J는 선행, L은 잔류 |
| 소리 페이드 | 150ms | 100~250ms | 오버랩 구간 |
| 겹침 감쇠 | -12dB | -9~-18dB | 한쪽 소리를 낮춤 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// J-cut: audio B starts before picture B
audioB.play(0).volume(0);
tl.to(audioB, { volume: 1, duration: 0.15 }, 2.6)
  .set('.sceneA', { autoAlpha: 0 }, 3.0).set('.sceneB', { autoAlpha: 1 }, 3.0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 오디오 트랙으로 <대상> 장면 A→B에 J컷을 넣어줘. 화면은 3.0초 같은 프레임에 하드컷하고 B의 소리는 2.6초부터 0.15초 페이드 인해서 0.4초 먼저 들리게 해. 이전 소리는 2.6초부터 -12dB로 낮춰. 시각과 소리 시각을 라벨 cutPicture, cutAudio로 나눠 paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 split-edit(J컷)을 적용해. 화면은 tl.set으로 3.0초에 A→B, B 오디오는 2.6초에 시작(0.15s 페이드), A 오디오는 2.6초부터 -12dB. 라벨 cutPicture=3.0, cutAudio=2.6. 2.7초·3.0초·3.4초 프레임과 오디오 파형을 캡처해 소리가 화면보다 0.4초 먼저 바뀌는지 확인해.
```

### English · Claude Code
```text
Add a J-cut to the A to B scene in <target> with GSAP and an audio track. The picture hard-cuts at 3.0s in one frame, while B's audio fades in from 2.6s over 0.15s so it is heard 0.4s early. Lower the old audio by 12dB from 2.6s. Split into labels cutPicture and cutAudio on a paused timeline.
```

### English · Codex
```text
Apply split-edit (J-cut) to <target> in <file>. Picture uses tl.set at 3.0s for A to B, B audio starts at 2.6s with a 0.15s fade, A audio drops by 12dB from 2.6s. Labels cutPicture=3.0, cutAudio=2.6. Capture frames at 2.7s, 3.0s and 3.4s along with the waveform and confirm sound changes 0.4s before picture.
```

예시 / Example: J컷과 L컷를 `.hero`에 적용해. / Apply J-cut and L-cut to `.hero`.

## 적용 / Application

- HyperFrames: 오디오 트랙 시작·페이드는 클립 data 속성으로, 화면은 tl.set으로 분리한다. 두 시각을 다른 값으로 두는 것이 핵심이라 각각 라벨을 둔다
- ReelForge: ReelForge는 씬 브리프에 audioOffset(J는 -0.4s, L은 +0.4s)을 넣어 오디오 워커와 화면 워커가 서로 다른 경계를 쓰게 한다
- Scrolline Deck: 스크롤덱은 화면 전환 임계점과 오디오 트리거 임계점을 다르게 둔다. 진행률 0.5에 화면, J는 0.46에 소리

조합 / Pair with: [하드컷 · Hard Cut](../hard-cut/) · [오버레이 브리지 · Overlay Bridge](../overlay-bridge/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: motion dictionary 4-explainer-learning.md#C. 템포·리듬·편집과 비트 동기 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
