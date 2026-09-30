# Nº 165 흑백 디졸브 · Grayscale Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**두 장면의 채도가 중간에 사라져 흑백으로 섞인 뒤 새 장면의 색이 돌아오는 전환**

Saturation drains from both scenes mid-transition, they blend in black and white, then color returns on the new scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 분위기 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 흑백 경유 전환

## 선택 기준 / Selection

회상과 기억, 분위기 변화. 색이 빠졌다 돌아오며 시간이 바뀐다 / Memory and recollection: color leaves and returns as time shifts.

- 과거 회상이나 시점 전환을 암시할 때 / Hint at a flashback or change of viewpoint.
- 두 컬러 장면의 색 차이가 커서 크로스페이드가 어색할 때 / Bridge two color scenes whose palettes clash in a crossfade.

좋은 예 / Good: 앞 장면 채도가 0.4초 동안 0으로 빠지며 흑백으로 뒤 장면과 교차하고, 뒤 장면의 색이 0.4초 동안 돌아온다
나쁜 예 / Bad: 흑백 구간이 길어 색이 죽은 채 머물거나, saturate 값만 바꾸고 opacity 교차가 없어 갑자기 컷처럼 보인다
주의 / Avoid: 흑백 유지 0.2초 이내 · 전체 1.2초 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.6~1.2s | 선형 교차 |
| 중간 채도 | 0 | 0~0.2 | 교차점 |
| 교차점 | 50% | 40~60% | opacity 기준 |
| 이징 | none | none~sine | linear가 자연스럽다 |

## 구현 / Implementation (GSAP)

```js
tl.to('.a', { filter: 'grayscale(1)', duration: 0.4, ease: 'none' }, 0)
  .to('.a', { opacity: 0, duration: 0.8, ease: 'none' }, 0)
  .fromTo('.b', { opacity: 0, filter: 'grayscale(1)' },
    { opacity: 1, duration: 0.8, ease: 'none' }, 0)
  .to('.b', { filter: 'grayscale(0)', duration: 0.4, ease: 'none' }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 그레이스케일 디졸브를 만들어줘. A는 0.4초 동안 grayscale 0에서 1이 되고 전체 0.8초 동안 opacity가 1에서 0으로 줄어. B는 grayscale 1, opacity 0에서 시작해 0.8초 동안 opacity 1이 되고 0.4초 시점부터 0.4초 동안 grayscale 0으로 색이 돌아오게 해. 이징 none, paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 grayscale dissolve를 넣어. .a filter grayscale(1) (0.4s), .a opacity 0 (0.8s), .b opacity 1 (0.8s), .b grayscale 1에서 0 (0.4초 시점부터 0.4s), ease none. 0.4초 캡처에서 두 장면이 모두 흑백인지, 0.8초에 뒤 장면 채도가 완전히 돌아왔는지 확인해.
```

### English · Claude Code
```text
Build a grayscale dissolve from <targetA> to <targetB>. A goes grayscale 0 to 1 over 0.4 seconds while its opacity falls 1 to 0 over 0.8 seconds. B starts at grayscale 1 and opacity 0, reaches opacity 1 over 0.8 seconds, and regains color (grayscale 0) over 0.4 seconds starting at 0.4 seconds. Use ease none in one paused timeline.
```

### English · Codex
```text
Add a grayscale dissolve to <file>. .a filter grayscale(1) (0.4s), .a opacity 0 (0.8s), .b opacity 1 (0.8s), .b grayscale 1 to 0 (0.4s starting at 0.4s), ease none. Capture at 0.4 seconds to confirm both scenes are gray and at 0.8 seconds to confirm the incoming scene has full color.
```

예시 / Example: 흑백 디졸브를 `.hero`에 적용해. / Apply Grayscale Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: filter grayscale과 opacity를 서로 다른 지속으로 한 타임라인에 겹쳐 쓴다. 퍼센트 값이 seek에서 문자열 보간으로 안정적인지 확인한다
- ReelForge: 씬 워커 브리프에 desatMs, durationMs, midSat를 싣는다
- Scrolline Deck: 진행률 0~0.5는 앞 장면 채도 빼기, 0.5~1은 뒤 장면 채도 복원. 두 값 모두 linear 진행률

조합 / Pair with: [크로스페이드 · Crossfade](../crossfade/) · [딥 투 컬러 · Dip to Color](../dip-to-color/) · [블러 디졸브 · Blur Dissolve](../blur-dissolve/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fadegrayscale.glsl) (MIT) · [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) (LGPL-2.1-or-later) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
