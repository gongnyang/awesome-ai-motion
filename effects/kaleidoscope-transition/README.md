# Nº 172 칼레이도스코프 전환 · Kaleidoscope Transition

> 클립 렌더 예정 / Clip rendering planned.

**영상이 대칭 조각으로 접히고 회전하며 다음 장면으로 섞인 뒤 원래 화면으로 돌아오는 전환**

The picture folds into symmetric fragments, rotates, blends into the next scene, and unfolds back to a normal frame.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: 만화경 전환

## 선택 기준 / Selection

다채롭고 환상적인 패턴 전환. 만화경을 돌리는 듯한 축제 분위기 / A colorful, fantastical pattern move, like turning a kaleidoscope.

- 뮤직 비주얼, 축제, 몽환적 톤의 영상에서 / Music visuals, festivals, or dreamy-toned videos.
- 시선을 확 끄는 장식적 전환이 필요할 때 / When an eye-catching decorative transition is needed.

좋은 예 / Good: 1초 동안 화면이 6분할 대칭으로 접히며 회전(각도 speed 1.0)하고, 정점에서 뒤 장면으로 바뀐 뒤 대칭이 풀린다
나쁜 예 / Bad: 조각 수가 너무 많아 원래 그림이 전혀 안 보이거나, 회전이 빨라 멀미가 난다
주의 / Avoid: 섹터 수 12 초과 금지 · 회전 총각 180도 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 1.0s | 0.7~1.5s | 정점 50% |
| 섹터 수 | 6 | 4~12 | 대칭 조각 |
| 회전 각도 | 90deg | 45~180deg | 총 회전량 |
| 접힘 강도 | 0→1→0 |  | 삼각파 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { k: 0 };
tl.to(u, { k: 1, duration: 0.5, ease: 'sine.in', onUpdate: () => kal.set({ sectors: 6, fold: u.k, angle: u.k * Math.PI / 2 }) })
  .set('.a', { display: 'none' })
  .to(u, { k: 0, duration: 0.5, ease: 'sine.out' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 칼레이도스코프 전환을 만들어줘. 6섹터 대칭 접기를 0.5초 동안 fold 0에서 1(sine.in), 회전각 0에서 90도로 올려 A를 접고, 그 정점에 B로 교체한 뒤 0.5초 동안 fold 1에서 0(sine.out)으로 풀어. 값은 GSAP 상태 객체에서 읽어 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 kaleidoscope 전환을 적용해. fold 0에서 1과 angle 0에서 90도 (0.5s sine.in), 0.5초에 A에서 B로 교체, fold 1에서 0 (0.5s sine.out). 6섹터 극각 접기. 0.25초, 0.5초, 0.75초 캡처로 대칭 패턴이 커졌다 풀리는지, 1.0초에 원본 프레임과 같은지 확인해.
```

### English · Claude Code
```text
Build a kaleidoscope transition from <targetA> to <targetB>. Fold A into 6 symmetric sectors by raising fold from 0 to 1 (sine.in) and rotation from 0 to 90 degrees over 0.5 seconds, swap to B at the peak, then unfold fold from 1 to 0 (sine.out) over 0.5 seconds. Read values from a GSAP state object in one paused timeline that seeks.
```

### English · Codex
```text
Apply a kaleidoscope transition in <file>. Tween fold 0 to 1 and angle 0 to 90 degrees (0.5s sine.in), swap A for B at 0.5 seconds, then fold 1 to 0 (0.5s sine.out), using a 6-sector polar fold. Capture at 0.25, 0.5, and 0.75 seconds to confirm the symmetric pattern grows and releases, and at 1.0 seconds to confirm it matches the source frame.
```

예시 / Example: 칼레이도스코프 전환를 `.hero`에 적용해. / Apply Kaleidoscope Transition to `.hero`.

## 적용 / Application

- HyperFrames: 극각 접기는 셰이더로 구현하고 fold, angle을 타임라인 값에서 받는다. CSS로는 conic mask 복제로 근사한다
- ReelForge: 씬 워커 브리프에 sectors, rotateDeg, durationMs를 싣고 교체 시각 0.5초를 고정한다
- Scrolline Deck: 진행률 삼각파로 fold를 0에서 1로, 다시 0으로 올린다. 스크롤 정지 시 대칭 상태로 남지 않게 정점 구간을 짧게 둔다

조합 / Pair with: [스월 전환 · Swirl Transition](../swirl-transition/) · [미러 전환 · Mirror Transition](../mirror-transition/) · [플라이 아이 전환 · Fly Eye Transition](../fly-eye-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/kaleidoscope.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/powerKaleido.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
