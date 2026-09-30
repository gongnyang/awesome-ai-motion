# Nº 102 문장 속 이미지 확장 · Inline Image Expand

> 클립 렌더 예정 / Clip rendering planned.

**문장 속 작은 이미지가 커지며 앞뒤 문구를 밀어내는 효과**

A small inline image between words grows and pushes the surrounding text aside.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 강조, 전환 | 숏폼, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: Inline Image Typography Expansion

## 선택 기준 / Selection

글이 설명하던 대상이 화면의 주인공으로 바뀐다. 문장 안에서 자연스럽게 시각으로 넘어간다 / The subject the sentence described takes over the frame, moving naturally from text to picture inside the line.

- '우리는 [이미지]를 만듭니다'처럼 문장 속 대상을 크게 보여줄 때 / Enlarge the subject in a sentence like 'We make [image]'.
- 텍스트 장면에서 사진 장면으로 넘어갈 때 / Move from a text scene to a photo scene.

좋은 예 / Good: 문장 속 1em 크기 사진이 1.6초에 70vw까지 커지며 앞뒤 단어가 양옆으로 밀려 화면 밖으로 사라진다
나쁜 예 / Bad: 이미지만 커지고 문구는 그대로여서 글자와 겹치거나, 밀려나는 속도가 제각각이다
주의 / Avoid: 텍스트 이동은 이미지 폭 변화와 같은 이징·지속을 쓴다 · 이미지 비율 유지(object-fit cover로 왜곡 금지) · 한 문장에 확장 이미지 1개만

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이미지 폭 | 1em → 70vw | 50~85vw | 확장 폭 |
| 지속 | 1600ms | 1200~2000ms | 확장 시간 |
| 이징 | power2.inOut | power2~power3.inOut | 텍스트와 동일 |
| 문구 퇴장 | x ±40vw | ±30~±60vw | 양옆으로 밀림 |

## 구현 / Implementation (GSAP)

```js
tl.to('.img', { width: '70vw', height: '40vw', duration: 1.6, ease: 'power2.inOut' }, 0)
  .to('.left', { x: '-40vw', opacity: 0, duration: 1.6, ease: 'power2.inOut' }, 0)
  .to('.right', { x: '40vw', opacity: 0, duration: 1.6, ease: 'power2.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 문장 '<앞> [이미지] <뒤>'에서 단어 사이 1em 크기의 <이미지>가 1.6초 동안 70vw x 40vw로 커지게 해줘. 앞 문구는 왼쪽으로 -40vw, 뒤 문구는 오른쪽으로 +40vw 밀리며 사라지고, 셋 모두 power2.inOut. 이미지 비율은 object-fit: cover로 유지하고 홀드 1초.
```

### 한국어 · Codex
```text
<파일>의 인라인 이미지에 width/height tween(1em→70vw, 1.6s, power2.inOut)을 걸고 좌우 텍스트 x를 동시에 이동시켜. 0.8초 시점에 문구와 이미지가 겹치지 않는지, 2.6초에 이미지가 70vw인지 캡처와 bbox 값으로 확인해.
```

### English · Claude Code
```text
In the sentence '<before> [image] <after>' of <target>, grow the 1em inline <image> to 70vw by 40vw over 1.6 seconds. The leading text moves -40vw left and the trailing text +40vw right while fading out, all with power2.inOut. Keep the image ratio with object-fit: cover and hold for 1 second.
```

### English · Codex
```text
In <file> add a width/height tween (1em to 70vw, 1.6s, power2.inOut) on the inline image and move the side text on x simultaneously. Capture at 0.8s to confirm text and image do not overlap and at 2.6s to confirm the image bbox is 70vw wide.
```

예시 / Example: 문장 속 이미지 확장를 `.hero`에 적용해. / Apply Inline Image Expand to `.hero`.

## 적용 / Application

- HyperFrames: width/height tween은 레이아웃을 흔들 수 있어 flex 컨테이너 안에서 고정 중심으로 두고 좌우 텍스트를 x로 동시에 밀어 seek 결과를 안정시킨다
- ReelForge: 씬 브리프에 문장, 이미지 경로, 확장 목표 폭(70vw), 지속 1.6s를 싣는다. 이미지는 비율 지정 필수
- Scrolline Deck: 확장 폭을 진행률 0..1에 매핑하고 이미지가 화면을 채우는 지점을 홀드로 둔다. 스프링 대신 power2.out

조합 / Pair with: [스크롤 격자 확장 · Scroll Grid Expansion](../scroll-grid-expand/) · [좌표 줌 · Zoom to Detail](../zoom-to-detail/) · [텍스트 구멍 줌 · Text Cutout Zoom](../text-cutout-zoom/)

출처 / Sources: [codrops/ImageExpansionTypography](https://github.com/codrops/ImageExpansionTypography) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
