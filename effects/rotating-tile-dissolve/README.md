# Nº 141 회전 타일 디졸브 · Rotating Tile Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**반복된 영상 타일이 원점 주변으로 회전하며 다음 장면으로 섞인다**

Tiled copies of the frame rotate around the origin while the next scene blends in.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Rotating tiled dissolve, 회전 반복 타일 전환

## 선택 기준 / Selection

반복 패턴이 원점을 중심으로 돌며 다음 화면에 섞인다. 리듬 있는 디지털 전환이다 / Adds rotation and a flowing pattern that crosses the frame edge.

- 패턴이나 타일이 반복되는 그래픽 톤의 영상에서 장면을 섞어 넘길 때 / When blending scenes in a pattern-driven, graphic-heavy video
- 음악 비트에 맞춰 화면이 돌며 바뀌는 숏폼 컷에 쓴다 / On beat-driven short-form cuts where the frame spins into the next shot

좋은 예 / Good: 화면이 8x8 타일로 반복되며 0.7초 동안 90도 회전하고, 절반쯤에서 다음 장면 타일이 교차한다
나쁜 예 / Bad: 타일이 너무 작아 노이즈로 보이거나, 회전 후 화면 가장자리가 비어 검은 틈이 보인다
주의 / Avoid: 타일 경계가 원본 콘텐츠 글자를 가로지르지 않게 정보 장면 위에는 쓰지 않는다 · 회전각은 90도의 배수로 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~900ms | linear |
| 회전각 | 90deg | 90 또는 180deg | 원점 기준 |
| 타일 반복 | 2x2 | 2~4 | UV 반복 |
| 교차 구간 | 진행 35~65% | 30~70% | 한 구간에서만 섞임 |
| 확대 | 1.25 | 1.2~1.5 | 빈틈 방지 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const s = { p: 0 };
tl.to(s, { p: 1, duration: 0.7, ease: 'none', onUpdate: () => {
  gsap.set('.tiles', { rotation: 90 * s.p, scale: 1 + 0.25 * Math.sin(Math.PI * s.p) });
  gsap.set('.next', { opacity: gsap.utils.clamp(0, 1, (s.p - 0.35) / 0.3) });
} }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 회전 타일 디졸브를 넣어줘. 화면을 2x2 반복 타일로 만들고 0.7초 동안 linear로 90도 회전시키면서 scale을 1에서 1.25까지 갔다 돌아오게 해. 진행 35%에서 65% 사이에 다음 장면 opacity를 0에서 1로 올려. 빈 가장자리가 보이지 않는지 확인하고, GSAP 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 회전 타일 디졸브를 구현해. p 0에서 1, 0.7초 linear, .tiles rotation 90*p, scale 1+0.25*sin(pi*p), .next opacity clamp((p-0.35)/0.3). 0.2초, 0.35초, 0.5초, 0.7초 시점을 캡처해 회전 중 가장자리에 빈 틈이 없는지, 0.7초에 다음 장면만 남는지 확인해.
```

### English · Claude Code
```text
Add a Rotating Tile Dissolve to <target>. Repeat the frame as 2x2 tiles, rotate it 90deg over 0.7s with linear ease while scale goes 1 to 1.25 and back. Fade the next scene in from 0 to 1 between 35% and 65% of progress. Make sure no empty edges show and keep it on one seekable GSAP timeline.
```

### English · Codex
```text
Implement Rotating Tile Dissolve in <file>. Progress p 0 to 1 over 0.7s linear; .tiles rotation 90*p, scale 1+0.25*sin(pi*p); .next opacity clamp((p-0.35)/0.3). Capture at 0.2s, 0.35s, 0.5s, and 0.7s to confirm there are no gaps at the edges during rotation and only the next scene remains at 0.7s.
```

예시 / Example: 회전 타일 디졸브를 `.hero`에 적용해. / Apply Rotating Tile Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: 타일 반복은 CSS background-repeat 또는 복제 요소로 만들고 회전과 scale만 timeline에서 보간한다. onUpdate 대신 타임라인 값에서 결정론적으로 계산한다
- ReelForge: 씬 워커 브리프에 회전각, 타일 반복 수, 교차 구간을 싣고 두 장면 모두 타일 소스로 쓸 수 있게 렌더하도록 한다
- Scrolline Deck: scrub에서는 회전각을 진행률에 선형으로 묶고 교차 구간(0.35~0.65)만 opacity로 처리한다. 스프링은 쓰지 않는다

조합 / Pair with: [줌 전환 · Zoom Through](../zoom-through/) · [칼레이도스코프 전환 · Kaleidoscope Transition](../kaleidoscope-transition/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/rotateTransition.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
