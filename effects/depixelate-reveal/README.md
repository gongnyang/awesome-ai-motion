# Nº 036 디픽셀 리빌 · Depixelate Reveal

> 클립 렌더 예정 / Clip rendering planned.

**큰 색 블록으로 가려진 이미지가 작은 블록으로 풀리며 선명해진다.**

Large pixel blocks resolve into a sharp image.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 고급 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | webgl |

다른 이름 / Also known as: 픽셀 블록에서 선명화

## 선택 기준 / Selection

모호한 대상이 실제 정보로 드러나는 과정을 보여준다. / Shows ambiguous imagery becoming concrete information.

- 이미지 생성 결과가 확정될 때 / Use when presenting depixelate reveal in a content reveal scene.
- 숨긴 사진을 단계적으로 공개할 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 32px 블록 사진이 1.2초 동안 원본으로 선명해진다.
나쁜 예 / Bad: 블러만 줄이고 픽셀 블록 효과라고 부른다.
주의 / Avoid: 블러만 줄이고 픽셀 블록 효과라고 부른다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.2s | 0.84~1.68s | 0초부터 시작하는 공개 구간 |
| 시작 블록 | 32px | 16~64px | 1920x1080 출력 픽셀 기준 |
| 최종 블록 | 1px | 1~2px | 원본 해상도로 복구 |
| 이징 | power2.out | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
// material.uniforms.blockPx controls UV quantization in the shader.
const block = material.uniforms.blockPx;
gsap.set(block, {value:32});
tl.to(block, {value:1, duration:1.2, ease:'power2.out'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 디픽셀 리빌을 적용해. 1.2초, 시작 블록 32px; 최종 블록 1px, 이징 power2.out로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 디픽셀 리빌을 적용해. 1.2초, 시작 블록 32px; 최종 블록 1px, power2.out를 사용하고 0초, 0.6초, 1.2초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Depixelate Reveal to <target> in <file>. Use a 1.2s segment with power2.out; implement these explicit settings: Initial block size: 32px, Final block size: 1px. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Depixelate Reveal to the <target> layer in <file> with Initial block size: 32px, Final block size: 1px, using the supplied core snippet and a 1.2s segment with power2.out. Capture at 0s, 0.6s, and 1.2s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 디픽셀 리빌를 `.hero`에 적용해. / Apply Depixelate Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.2초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 디픽셀 리빌, 1.2초, 시작 블록 32px; 최종 블록 1px, power2.out를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.2초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:media-use/references/media-treatments.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
