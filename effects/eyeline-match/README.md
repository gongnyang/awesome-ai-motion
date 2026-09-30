# Nº 158 시선 연결 컷 · Eyeline Match

> 클립 렌더 예정 / Clip rendering planned.

**인물이 화면 밖을 보는 장면 다음에 그 시선 방향의 대상이 나타난다**

After a person looks off-screen, the object in that direction appears.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 설명, 순서·흐름 | 설명 영상, 숏폼, 제품 시연 | gsap |

다른 이름 / Also known as: Eyeline cut

## 선택 기준 / Selection

인물이 화면 밖을 본 다음, 그 시선 방향의 대상이 나온다. 누가 무엇을 보는지 알린다 / Lets viewers understand who is looking at what.

- 인물이 화면 밖을 보다가 그가 본 대상으로 이어질 때 / When a person looks off-screen and the shot moves to what they saw
- 사용자가 위를 올려다본 뒤 화면 위쪽의 알림이나 메뉴를 보여 줄 때 / When a user looks up and the alert or menu at the top of the screen is shown next

좋은 예 / Good: 인물이 화면 오른쪽 위를 1.0초 보고 0ms로 컷하면 같은 방향에 있는 대상이 나타나 1.0초 유지된다
나쁜 예 / Bad: 시선 방향과 대상 위치가 반대라 눈이 어색하거나, 시선이 머무는 시간이 너무 짧아 관계가 연결되지 않는다
주의 / Avoid: 시선 방향과 대상의 화면 위치를 같은 쪽으로 둔다 · 시선 유지는 0.8초 이상

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 고정 | 즉시 |
| 시선 유지 | 1000ms | 800~1500ms | 컷 전 |
| 대상 유지 | 1000ms | 800~1400ms | 컷 후 |
| 시선 방향 | 오른쪽 위 30도 | 15~45도 | 대상이 있는 쪽 |
| 대상 위치 | 화면 오른쪽 위 |  | 시선과 같은 방향 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.gaze', { x: 0 }, { x: 24, duration: 0.5, ease: 'power2.out' }, 0.2);  // 시선 이동
tl.set('.person', { autoAlpha: 0 }, 1.0);
tl.set('.target', { autoAlpha: 1 }, 1.0);
tl.from('.target', { scale: 1.06, duration: 0.6, ease: 'power2.out' }, 1.0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에 시선 연결 컷을 넣어줘. 0.2초에서 0.7초까지 인물의 시선을 오른쪽 위 방향으로 옮기고 1.0초에 tl.set으로 대상 장면 .target으로 컷해. 대상은 화면 오른쪽 위에 위치하고 scale 1.06에서 1로 0.6초 power2.out. 컷 뒤 1.0초 유지해.
```

### 한국어 · Codex
```text
<파일>에 시선 연결 컷을 구현해. .gaze x 0에서 24 (0.2~0.7초), 1.0초에 .person 숨김, .target 표시, .target scale 1.06에서 1로 0.6초 power2.out. 0.5초, 0.95초, 1.05초, 1.8초 시점을 캡처해 컷 전후로 시선 방향과 대상 위치가 같은 쪽인지 확인해.
```

### English · Claude Code
```text
Add an Eyeline Match to <target>. Move the character gaze toward the upper right from 0.2s to 0.7s, then cut to the target scene .target at 1.0s using tl.set. Place the target in the upper right of the frame and ease it from scale 1.06 to 1 over 0.6s with power2.out. Hold 1.0s after the cut.
```

### English · Codex
```text
Implement Eyeline Match in <file>. .gaze x 0 to 24 (0.2 to 0.7s); at 1.0s hide .person and show .target; .target scale 1.06 to 1 over 0.6s power2.out. Capture at 0.5s, 0.95s, 1.05s, and 1.8s to confirm that gaze direction and target position are on the same side across the cut.
```

예시 / Example: 시선 연결 컷를 `.hero`에 적용해. / Apply Eyeline Match to `.hero`.

## 적용 / Application

- HyperFrames: 시선 이동과 컷을 한 타임라인에 두고 컷 시각 1.0초에 tl.set으로 교체한다. 시선 벡터와 대상 위치를 같은 방향으로 배치한다
- ReelForge: 씬 워커 브리프에 시선 방향(오른쪽 위 30도), 유지 시간, 대상 위치를 싣는다
- Scrolline Deck: scrub에서는 시선 이동은 진행률 0~0.4, 컷은 0.5에서 즉시 교체. 대상에는 ease-out 확대만 넣는다

조합 / Pair with: [리액션 컷 · Reaction Cut](../reaction-cut/) · [숏 리버스 숏 · Shot Reverse Shot](../shot-reverse-shot/) · [강조점 순회 · Focus Handoff](../focus-handoff/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film.html) (unknown) · [Adobe](https://www.adobe.com/creativecloud/video/hub/ideas/what-is-continuity-editing-in-film.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
