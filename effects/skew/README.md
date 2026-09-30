# Nº 433 스큐 · Skew

> 클립 렌더 예정 / Clip rendering planned.

**축 방향으로 형태를 비스듬히 변형해 힘의 방향과 속도감을 주는 동작**

Slants a shape along an axis to suggest force and speed.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 기본 | 강조, 분위기 | 숏폼, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: 기울임

## 선택 기준 / Selection

기울어진 형태로 힘과 속도의 방향을 보여 준다 / A tilted form shows the direction of force and speed.

- 빠르게 들어오는 타이틀·바에 속도감을 줄 때 / When giving speed to a title or bar entering fast
- 스크롤 속도에 따라 카드가 기울었다 돌아오는 효과 / When cards lean and return with scroll speed

좋은 예 / Good: 타이틀이 skewX -4도로 150ms 기울어 들어오고 200ms에 0도로 복귀한다
나쁜 예 / Bad: skew 15도 이상 지속해 글자가 찌그러지거나, 복귀 없이 기울어진 채 멈춘다
주의 / Avoid: skew 8도 초과 금지(글자 요소) · 반드시 0도로 복귀 · 이동 방향과 같은 부호

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 각도 | 4deg | 2~8deg | 이동 방향과 부호를 맞춤 |
| 변형 | 150ms | 100~250ms | 기울어지는 구간 |
| 복원 | 200ms | 150~350ms | 0도로 복귀 |
| 이징 | power2.out | power2~power3.out | 복원이 부드럽게 |

## 구현 / Implementation (GSAP)

```js
tl.from('.title', { x: -120, duration: 0.35, ease: 'power3.out' }, 0.3)
  .fromTo('.title', { skewX: -4 }, { skewX: 0, duration: 0.2, ease: 'power2.out' }, 0.45);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 타이틀에 스큐를 넣어줘. 0.3초부터 x -120px에서 0.35초 power3.out으로 들어오고, 0.45초에 skewX -4도에서 0도로 0.2초 power2.out으로 복귀시켜. 종료는 반드시 skew 0. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 skew를 적용해. from x -120(0.35s, power3.out, position 0.3)과 fromTo skewX -4→0(0.2s, power2.out, position 0.45). 0.35초·0.5초·1.0초를 캡처해 기울기 부호가 이동 방향과 맞는지, 1.0초에 skew 0인지 확인해.
```

### English · Claude Code
```text
Add a skew to the <target> title with GSAP. From 0.3s enter from x -120px over 0.35s with power3.out, and at 0.45s return skewX from -4 to 0 degrees over 0.2s with power2.out. It must end at skew 0. Paused timeline.
```

### English · Codex
```text
Apply skew to <target> in <file>. from x -120 (0.35s, power3.out, position 0.3) plus fromTo skewX -4 to 0 (0.2s, power2.out, position 0.45). Capture at 0.35s, 0.5s and 1.0s to check the tilt sign matches the direction of travel and skew is 0 at 1.0s.
```

예시 / Example: 스큐를 `.hero`에 적용해. / Apply Skew to `.hero`.

## 적용 / Application

- HyperFrames: skew는 이동과 같은 타임라인에서 시각을 맞춘다. fromTo로 시작 각을 고정하고 종료 0도를 명시
- ReelForge: 브리프에 각도·변형·복원 시간과 이동 방향을 싣는다
- Scrolline Deck: scrub에서는 스크롤 속도가 아닌 진행률 변화 방향으로 부호를 정하고 복원을 ease-out으로 닫는다

조합 / Pair with: [속도 기반 스큐 · Velocity Skew](../velocity-skew/) · [슬라이드 · Slide](../slide/) · [스미어 프레임 · Smear Frame](../smear-frame/)

출처 / Sources: motion dictionary 1-principles.md#8. 2D 속성 기본 동작 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
