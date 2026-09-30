# Nº 048 모자이크 리빌 · Mosaic Reveal

> 클립 렌더 예정 / Clip rendering planned.

**작은 타일 창이 차례로 열려 한 장의 이미지나 포스터를 완성한다.**

Small tile windows reveal one complete image in sequence.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: mosaic-matte-collage, tile-mosaic

## 선택 기준 / Selection

부분의 축적이 전체가 되는 것을 읽는다. / Shows accumulated parts forming a whole.

- 여러 조각이 포스터를 완성할 때 / Use when presenting mosaic reveal in a content reveal scene.
- 콜라주 이미지를 단계적으로 보여줄 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 6x4 타일이 행 순서로 열려 1.6초에 포스터를 완성한다.
나쁜 예 / Bad: 매 실행마다 순서를 바꿔 캡처 결과가 달라진다.
주의 / Avoid: 매 실행마다 순서를 바꿔 캡처 결과가 달라진다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.6s | 1.12~2.24s | 0초부터 시작하는 공개 구간 |
| 타일 격자 | 6x4 | 4x3~8x6 | 원본 이미지 좌표 공유 |
| 타일 시간차 | 0.04s | 0.02~0.06s | 고정된 행 우선 순서 |
| 타일 지속 | 0.68s | 0.4~0.8s | 24개 마지막 시작 0.92초 |
| 이징 | power2.out | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
const tiles = gsap.utils.toArray('.tile');
gsap.set(tiles, {opacity:0});
tl.to(tiles, {opacity:1, duration:0.68, stagger:0.04, ease:'power2.out'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 모자이크 리빌을 적용해. 1.6초, 타일 격자 6x4; 타일 시간차 0.04s; 타일 지속 0.68s, 이징 power2.out로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 모자이크 리빌을 적용해. 1.6초, 타일 격자 6x4; 타일 시간차 0.04s; 타일 지속 0.68s, power2.out를 사용하고 0초, 0.8초, 1.6초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Mosaic Reveal to <target> in <file>. Use a 1.6s segment with power2.out; implement these explicit settings: Tile grid: 6x4, Tile delay: 0.04s, Tile duration: 0.68s. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Mosaic Reveal to the <target> layer in <file> with Tile grid: 6x4, Tile delay: 0.04s, Tile duration: 0.68s, using the supplied core snippet and a 1.6s segment with power2.out. Capture at 0s, 0.8s, and 1.6s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 모자이크 리빌를 `.hero`에 적용해. / Apply Mosaic Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.6초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 모자이크 리빌, 1.6초, 타일 격자 6x4; 타일 시간차 0.04s; 타일 지속 0.68s, power2.out를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.6초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#mosaic-matte-collage`) (Apache-2.0) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#tile-mosaic`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/tile-mosaic/scene.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/tile-mosaic/index.html`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
