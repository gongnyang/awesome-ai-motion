# Nº 197 스매시 컷 · Smash Cut

> 클립 렌더 예정 / Clip rendering planned.

**강하게 대비되는 밝기와 장소 또는 상황의 장면이 예고 없이 즉시 맞바뀐다**

Two strongly contrasting scenes swap instantly without warning.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 주목 끌기 | 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Gilligan cut

## 선택 기준 / Selection

예고 없이 정반대 상황으로 꽂히는 컷. 충격과 반전, 웃음의 결정타를 만든다 / Delivers shock, reversal, or a comic punchline.

- 계획이 거창하게 나온 직후 엉망인 결과를 바로 보여 줘 반전을 만들 때 / To reveal a messy outcome right after a grand plan and land the reversal
- 조용한 장면에서 갑자기 큰 소리와 밝은 장면으로 전환해 충격을 줄 때 / To jump from a quiet scene to a loud bright one for shock

좋은 예 / Good: 조용한 어두운 장면의 마지막 프레임 다음 프레임에 밝고 시끄러운 장면이 0ms로 들어오고, 소리도 같은 프레임에서 바뀐다
나쁜 예 / Bad: 컷 앞에 여운이 길어 예고가 되거나, 소리가 한 프레임 늦어 컷이 무뎌진다
주의 / Avoid: 컷 직전 장면은 대비를 위해 조용하게 끝내고 0.3초 이상 이어 붙이지 않는다 · 한 영상에 한두 번만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 고정 | 즉시 |
| 앞 장면 끝 정지 | 300ms | 200~500ms | 조용하게 |
| 대비 밝기 차 | 0.5 이상 | 0.4~0.7 | 명도 차이 |
| 오디오 정렬 | 같은 프레임 | 1프레임 이내 | 컷과 함께 |
| 뒤 장면 홀드 | 1000ms | 600~1500ms | 반응 시간 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.set('.a', { autoAlpha: 0 }, 1.0);
tl.set('.b', { autoAlpha: 1 }, 1.0);
tl.fromTo('.b', { scale: 1.05 }, { scale: 1, duration: 0.18, ease: 'power3.out' }, 1.0); // 충격 1회
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에서 1.0초에 스매시 컷을 넣어줘. .a(어두운 조용한 장면)를 1.0초에 tl.set으로 숨기고 .b(밝은 장면)를 같은 시각에 즉시 표시해. .b는 scale 1.05에서 1로 0.18초 power3.out로 한 번만 가라앉게 해. 오디오 전환도 1.0초에 맞춰 줘.
```

### 한국어 · Codex
```text
<파일>에 스매시 컷을 구현해. 1.0초에 .a 숨김, .b 표시를 tl.set으로 처리하고 .b scale 1.05에서 1로 0.18초 power3.out. 0.96초, 1.0초, 1.04초, 1.3초 시점을 캡처해 1.0초 프레임 전후로 중간 상태(반투명)가 없는지, 오디오 시작이 같은 프레임인지 확인해.
```

### English · Claude Code
```text
Add a Smash Cut at 1.0s in <target>. Hide .a (dark, quiet scene) with tl.set at 1.0s and show .b (bright scene) at the same time. Let .b settle from scale 1.05 to 1 over 0.18s with power3.out, once. Align the audio change to 1.0s.
```

### English · Codex
```text
Implement Smash Cut in <file>. At 1.0s tl.set hides .a and shows .b; .b scale 1.05 to 1 over 0.18s with power3.out. Capture at 0.96s, 1.0s, 1.04s, and 1.3s to confirm no semi-transparent in-between state around 1.0s and that the audio starts on the same frame.
```

예시 / Example: 스매시 컷를 `.hero`에 적용해. / Apply Smash Cut to `.hero`.

## 적용 / Application

- HyperFrames: 컷 시각 1.0초에 tl.set으로 즉시 교체하고 소리 트랙 시작 시각도 같은 값에 둔다. 프레임 정렬이 핵심이라 fps에 맞춰 시각을 계산한다
- ReelForge: 씬 워커 브리프에 컷 시각, 앞 장면 정지 300ms, 오디오 정렬을 싣는다
- Scrolline Deck: scrub에서는 진행률 임계값 하나에서 즉시 교체하고 보간을 넣지 않는다. 임계값 앞은 어둡고 조용하게 유지한다

조합 / Pair with: [점프 컷 · Jump Cut](../jump-cut/) · [화면 흔들림 · Screen Shake](../screen-shake/) · [플래시 전환 · Flash Transition](../flash-transition/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/smash-cut.html) (unknown) · motion dictionary 2-transitions-camera.md#9. 스매시 컷 · Smash Cut (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
