# Nº 183 멀티플라이 디졸브 · Multiply Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**두 장면이 중간에서 곱셈 합성으로 어두워졌다가 다음 장면의 밝기로 돌아오는 전환**

The two scenes multiply into a darker midpoint, then the brightness of the next scene returns.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 분위기 | 설명 영상, 발표, 숏폼 | canvas |

다른 이름 / Also known as: Multiply midpoint dissolve, 곱셈 중간상 전환

## 선택 기준 / Selection

무게감 있는 교체. 필름의 이중 노출처럼 어둡고 짙게 겹친다 / A weighty swap, dark and dense like a double exposure.

- 진지하거나 무거운 톤의 이야기에서 장면을 바꿀 때 / Change scenes in a serious or heavy story.
- 화이트 플래시가 너무 가벼울 때 반대 방향의 어두운 교체가 필요할 때 / When a white flash feels too light, use a dark counterpart.

좋은 예 / Good: 0.7초 동안 뒤 장면이 multiply 합성으로 올라와 중간에 가장 어두워졌다가 앞 장면이 빠지며 뒤 장면의 밝기가 돌아온다
나쁜 예 / Bad: multiply 구간에 두 장면이 모두 어두워 아무것도 안 보이거나, 너무 길어 화면이 죽어 있다
주의 / Avoid: 가장 어두운 구간 0.1초 이내 · 두 장면이 모두 어두운 톤이면 사용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.0s | 선형 |
| 합성 모드 | multiply |  | 뒤 장면 레이어 |
| 최대 겹침 | 0.5 | 0.4~0.6 | 중간점 |
| 복구 | 0.35s | 0.25~0.5s | 앞 장면 opacity 감소 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
gsap.set('.b', { mixBlendMode: 'multiply', opacity: 0 });
tl.to('.b', { opacity: 1, duration: 0.35, ease: 'none' }, 0)
  .to('.a', { opacity: 0, duration: 0.35, ease: 'none' }, 0.35)
  .set('.b', { mixBlendMode: 'normal' }, 0.35);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 멀티플라이 디졸브를 만들어줘. B를 A 위에 mix-blend-mode multiply로 0.35초 동안 opacity 0에서 1로 올리고, 이어서 A를 0.35초 동안 opacity 0으로 뺀 뒤 B의 blend mode를 normal로 돌려. 이징 none, paused 타임라인 하나로 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 multiply dissolve를 적용해. .b mixBlendMode multiply와 opacity 0에서 1 (0.35s), 이어 .a opacity 1에서 0 (0.35s)에 mixBlendMode normal 복귀. 0.35초 캡처에서 화면이 가장 어둡고 두 장면이 겹쳐 보이는지, 0.7초에 B가 원래 밝기인지 확인해.
```

### English · Claude Code
```text
Build a multiply dissolve from <targetA> to <targetB>. Bring B over A with mix-blend-mode multiply, opacity 0 to 1 over 0.35 seconds, then fade A to opacity 0 over the next 0.35 seconds and return B's blend mode to normal. Use ease none in one paused timeline that seeks.
```

### English · Codex
```text
Apply a multiply dissolve to <file>. .b mixBlendMode multiply with opacity 0 to 1 (0.35s), then .a opacity 1 to 0 (0.35s) while mixBlendMode returns to normal. Capture at 0.35 seconds to confirm the darkest, overlapped frame, and at 0.7 seconds to confirm B is at original brightness.
```

예시 / Example: 멀티플라이 디졸브를 `.hero`에 적용해. / Apply Multiply Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: mix-blend-mode를 타임라인에서 set으로 바꾼다. seek에서 되돌아가도록 반드시 타임라인 위에 둔다
- ReelForge: 씬 워커 브리프에 blendMode, peakSec, durationMs를 싣는다
- Scrolline Deck: 진행률 0~0.5는 multiply로 뒤 장면 올리기, 0.5~1은 앞 장면 제거. 경계에서 blend 모드 전환이 보이지 않게 opacity가 1일 때 바꾼다

조합 / Pair with: [딥 투 컬러 · Dip to Color](../dip-to-color/) · [가산 디졸브 · Additive Dissolve](../additive-dissolve/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/multiply_blend.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
