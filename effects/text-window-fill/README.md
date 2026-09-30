# Nº 113 글자 속 영상 · Text Window Fill

> 클립 렌더 예정 / Clip rendering planned.

**글자 외곽은 고정하고 그 안쪽에서만 영상이나 색 곡선이 움직이는 효과**

The letter outlines stay fixed while video or color flows only inside them.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 브랜딩, 분위기 | 숏폼, 발표, 웹 UI | svg |

다른 이름 / Also known as: Motion Inside Text, Text Image Fill Motion, 텍스트 내부 이미지 이동

## 선택 기준 / Selection

문구의 뜻과 화면의 소재가 한 덩어리로 묶여 읽힌다. 큰 제목 하나로 장면 분위기를 정한다 / Ties the words to the visual subject so a single large title sets the mood of the scene.

- 인트로 제목이 주제 영상(바다, 도시 등)을 품게 하고 싶을 때 / Let an intro title carry its own subject footage, such as sea or city.
- 로고나 한 단어 슬로건에 움직이는 질감을 줄 때 / Add a moving texture to a logo or a one-word slogan.

좋은 예 / Good: 굵은 고딕 'OCEAN' 안에서 파도 영상이 6초 동안 천천히 흐르고 글자 윤곽은 움직이지 않는다
나쁜 예 / Bad: 가는 글꼴에 복잡한 영상을 채워 글자 형태가 읽히지 않거나, 글자 자체까지 함께 흔들린다
주의 / Avoid: 획 굵기가 얇은 글꼴 금지(내부 영상이 보이지 않음) · 글자 수 6자 초과 금지(창이 좁아짐) · 채움 영상의 대비가 낮으면 배경과 섞이므로 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 채움 이동 거리 | 240px | 120~400px | 영상이 글자 안에서 천천히 팬 |
| 주기 | 6s | 4~10s | 한 번 흐르는 시간 |
| 글자 크기 | 320px | 240~420px | 굵은 고딕 기준 1920x1080 |
| 이징 | sine.inOut | linear~sine.inOut | 반복 시 끊김이 없어야 함 |

## 구현 / Implementation (GSAP)

```js
/* SVG: <clipPath id="t"><text .../></clipPath><g clip-path="url(#t)"><image id="fill" .../></g> */
tl.fromTo('#fill', { x: -120 }, { x: 120, duration: 6, ease: 'sine.inOut' }, 0);
tl.fromTo('#fill', { scale: 1.15 }, { scale: 1.3, duration: 6, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목 '<문구>'를 320px 굵은 고딕으로 크게 놓고, SVG clipPath에 글자를 넣어 그 안에서만 <영상 또는 이미지>가 보이게 해줘. 채움은 6초 동안 x를 -120px에서 120px로, scale을 1.15에서 1.3으로 sine.inOut으로 움직이고, 글자 윤곽은 고정해. paused 타임라인 하나로 seek 되게 만들어.
```

### 한국어 · Codex
```text
<파일>의 제목을 SVG clipPath text로 바꾸고 내부 image를 6초 tween(x -120→120, scale 1.15→1.3, sine.inOut)으로 구동해. 글자 위치는 절대 변하지 않아야 한다. 0초, 3초, 6초 시점을 캡처해 글자 윤곽 bbox가 동일하고 채움만 이동했는지 확인해.
```

### English · Claude Code
```text
Set the title '<text>' of <target> in 320px heavy sans and clip <image or video> inside the letters with an SVG clipPath. Over 6 seconds move the fill x from -120px to 120px and scale from 1.15 to 1.3 with sine.inOut, keeping the letter outline fixed. Use one paused timeline so it can be seeked.
```

### English · Codex
```text
In <file> convert the title to an SVG clipPath text and drive the inner image with a 6 second tween (x -120 to 120, scale 1.15 to 1.3, sine.inOut). The glyph positions must never change. Capture at 0s, 3s and 6s and verify the glyph bounding box is identical while only the fill has moved.
```

예시 / Example: 글자 속 영상를 `.hero`에 적용해. / Apply Text Window Fill to `.hero`.

## 적용 / Application

- HyperFrames: clipPath 안의 image 또는 video를 paused 타임라인에서 x/scale만 움직인다. 비디오는 currentTime을 seek 값에 맞춘다
- ReelForge: 타이포 씬 브리프에 문구, 채움 소스 경로, 주기 6s를 파라미터로 싣는다. 채움은 미리 렌더한 루프 클립을 권한다
- Scrolline Deck: 채움 이동을 진행률 0..1에 선형 매핑한다. 스크롤 멈춤 때 정지해도 글자는 읽혀야 하므로 밝기 대비를 높게 둔다

조합 / Pair with: [질감 채움 모션 · Animated Texture Fill](../texture-fill-motion/) · [텍스트 구멍 줌 · Text Cutout Zoom](../text-cutout-zoom/) · [마스크 리빌 · Mask Reveal](../mask-reveal/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/video-text) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/canvas-text) (unknown) · [codrops/TextStylesHoverEffects](https://github.com/codrops/TextStylesHoverEffects) (unknown) · [codrops/TextClipScroll](https://github.com/codrops/TextClipScroll) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
