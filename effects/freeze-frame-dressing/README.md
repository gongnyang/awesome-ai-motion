# Nº 162 프리즈 프레임 장식 · Freeze Frame Dressing

> 클립 렌더 예정 / Clip rendering planned.

**움직임이 박자에 멈추고 종이, 테이프, 라벨이 정지된 인물 주변에 붙는 연출**

Motion freezes on the beat and paper, tape, and labels stick around the frozen subject.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 강조, 브랜딩 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: 정지 화면 장식

## 선택 기준 / Selection

이 순간이 중요하다는 표시. 잡지 표지나 다큐 인트로의 소개 컷 / A marker that says this moment matters: a magazine cover or documentary intro shot.

- 인물이나 제품을 처음 소개하는 컷에서 / Introduce a person or product for the first time.
- 결정적 순간을 기억에 남기고 싶을 때 / Make a decisive moment memorable.

좋은 예 / Good: 박자에서 영상이 멈추고 80ms 간격으로 테이프, 종이 조각, 라벨이 붙어 1초 유지된 뒤 재생이 이어진다
나쁜 예 / Bad: 정지 시간이 3초 넘게 이어져 영상이 멈춘 것처럼 보이거나, 장식이 인물 얼굴을 가린다
주의 / Avoid: 정지 유지 1.5초 초과 금지 · 장식은 피사체 얼굴 영역을 침범하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 정지 시점 | 0ms | 비트에 맞춤 | 프레임 고정 |
| 유지 | 1000ms | 600~1500ms | 장식 완성 후 홀드 |
| 장식 시작차 | 80ms | 50~120ms | 순서대로 붙임 |
| 장식 진입 | 0.25s | 0.15~0.35s | 살짝 회전 -3~3도 |

이징 / Ease: `back.out(1.6)`

## 구현 / Implementation (GSAP)

```js
tl.set('.video', { display: 'none' }, 0).set('.still', { display: 'block' }, 0)
  .from('.deco', { scale: 0.6, rotation: -6, opacity: 0, y: -24,
    duration: 0.25, ease: 'back.out(1.6)', stagger: 0.08 }, 0.05);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<영상>의 <시각> 초에 프리즈 프레임 장식을 넣어줘. 그 프레임을 정지 이미지로 교체하고, 테이프, 종이, 라벨 3개 요소가 80ms 간격으로 scale 0.6에서 1, rotation -6도에서 0, y -24px에서 0으로 0.25초 동안 back.out(1.6)으로 붙게 해. 1초 홀드 뒤 재생 재개, paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <시각> 초에 freeze-frame dressing을 적용해. 그 프레임을 이미지로 고정하고 .deco 3개를 scale 0.6에서 1, rotation -6도에서 0, opacity 0에서 1로 0.25s back.out(1.6), stagger 0.08s로 등장시킨다. 0.05초, 0.5초, 1.2초 캡처로 정지 여부와 장식 순서, 얼굴 가림이 없는지 확인해.
```

### English · Claude Code
```text
Add freeze-frame dressing to <video> at <time> seconds. Swap that frame for a still image and stick three elements (tape, paper, label) on at 80ms intervals, each going scale 0.6 to 1, rotation -6deg to 0, y -24px to 0 over 0.25 seconds with back.out(1.6). Hold 1 second, then resume playback, all in one paused timeline.
```

### English · Codex
```text
Apply freeze-frame dressing at <time> seconds in <file>. Lock that frame as an image and animate three .deco elements from scale 0.6, rotation -6deg, opacity 0 to full over 0.25s with back.out(1.6) and a 0.08s stagger. Capture at 0.05, 0.5, and 1.2 seconds to confirm the freeze, the decoration order, and that no face is covered.
```

예시 / Example: 프리즈 프레임 장식를 `.hero`에 적용해. / Apply Freeze Frame Dressing to `.hero`.

## 적용 / Application

- HyperFrames: 정지 프레임은 이미지로 미리 뽑아 교체한다(비디오 seek 오차 회피). 장식은 transform과 opacity만 움직인다
- ReelForge: 씬 워커 브리프에 freezeSec, holdMs, decoStaggerMs, decoAssets를 싣는다
- Scrolline Deck: 진행률 구간 하나를 정지 구간으로 정하고 장식 진입을 그 안의 진행률 0.02 간격으로 둔다. scrub에서는 back 대신 power3.out 사용

조합 / Pair with: [스태거 · Stagger](../stagger/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/) · [스트로브 플래시 · Strobe Flash](../strobe-flash/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/freeze-frame-dressing/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/beat-freeze-cut/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
