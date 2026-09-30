# Nº 487 시간 흔들림 · Temporal Wiggle

> 클립 렌더 예정 / Clip rendering planned.

**동작의 재생 시간에 노이즈를 더해 속도가 불규칙하게 앞뒤로 흔들리는 시간 왜곡**

Noise is added to a motion's playback time so its speed wobbles back and forth irregularly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 피드백 | 숏폼, 설명 영상 | canvas |

다른 이름 / Also known as: 시간 위글

## 선택 기준 / Selection

기계적으로 일정한 움직임이 사람 손처럼 불안정하고 유기적으로 바뀐다. 아날로그 영상의 흔들림 / Mechanically even motion becomes unstable and organic, like hand-driven or analog footage.

- 너무 매끈한 반복 동작에 손맛과 불안정함을 줄 때 / Add a hand-made feel to overly smooth repeating motion.
- 스톱모션이나 저프레임 촬영 같은 거친 속도감을 낼 때 / Create a rough stop-motion or low-frame-rate rhythm.

좋은 예 / Good: 2초 이동 동작의 평가 시간에 80ms 진폭 노이즈를 2Hz로 더해, 등속 이동이 미세하게 멈칫하다 따라잡는다
나쁜 예 / Bad: 진폭이 200ms를 넘어 동작이 뒤로 되감기듯 튀거나, 모든 요소에 걸어 화면 전체가 떨린다
주의 / Avoid: 시간 진폭 150ms 초과 금지 · 주 정보인 텍스트에는 걸지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 진폭 | 80ms | 40~150ms | 평가 시간에 더하는 노이즈 크기 |
| 주파수 | 2Hz | 1~4Hz | 노이즈 변화 속도 |
| 동작 길이 | 2s | 1~4s | 흔들릴 대상 tween |
| 시드 | 11 | 고정 | 노이즈 위상 오프셋 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const move = gsap.to('.dot', { x: 1200, duration: 2, ease: 'none', paused: true });
const w = (t) => 0.08 * (Math.sin(t * 2 * Math.PI * 2 + 11) * 0.6 + Math.sin(t * 2 * Math.PI * 3.3 + 4) * 0.4);
const u = { t: 0 };
tl.to(u, { t: 2, duration: 2, ease: 'none', onUpdate: () => move.time(Math.min(2, Math.max(0, u.t + w(u.t)))) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 이동 동작에 시간 흔들림을 넣어줘. 2초 등속 이동 tween을 paused로 두고, 평가 시간 t에 진폭 80ms의 두 사인파 합(2Hz와 3.3Hz, 위상 11과 4)을 더해 time(t+w(t))로 재생해. 결과적으로 이동이 미세하게 멈칫하다 따라잡게 하고, 시간이 0~2초 범위를 벗어나지 않게 clamp해.
```

### 한국어 · Codex
```text
<파일>의 .dot 이동 tween(x 0→1200, 2초, ease none)을 paused로 바꾸고, 상위 타임라인 onUpdate에서 move.time(clamp(t+w(t),0,2))를 호출해. w(t)=0.08*(0.6*sin(4πt+11)+0.4*sin(6.6πt+4)). Math.random 금지. 0.5초·1.0초·1.5초 캡처의 x좌표가 등속선에서 최대 약 15px 어긋났다 돌아오는지 수치로 확인해.
```

### English · Claude Code
```text
Add a temporal wiggle to the motion of <target>. Keep the 2-second constant-speed move as a paused tween and play it with time(t + w(t)), where w is a sum of two sine waves (2 Hz and 3.3 Hz, phases 11 and 4) with 80 ms amplitude. The move should hitch slightly and catch up. Clamp time to 0 to 2 seconds.
```

### English · Codex
```text
In <file>, make the .dot move tween (x 0 to 1200, 2 s, ease none) paused, and call move.time(clamp(t+w(t),0,2)) from the parent timeline onUpdate. w(t)=0.08*(0.6*sin(4πt+11)+0.4*sin(6.6πt+4)). No Math.random. Capture at 0.5 s, 1.0 s and 1.5 s and verify numerically that x deviates from the linear path by up to about 15px and returns.
```

예시 / Example: 시간 흔들림를 `.hero`에 적용해. / Apply Temporal Wiggle to `.hero`.

## 적용 / Application

- HyperFrames: 대상 tween을 paused로 두고 상위 타임라인 onUpdate에서 time(t + w(t))로 평가 시간을 흔든다. w는 t만의 함수라 seek해도 같다
- ReelForge: 씬 브리프에 시간 진폭 80ms, 주파수 2Hz, 시드 11을 노출한다. 대상 동작은 그대로 두고 시간축만 바꾼다고 명시
- Scrolline Deck: 진행률을 t로 삼고 w를 더해 대상 타임라인 progress를 갱신한다. 스크럽 방향이 바뀌어도 w는 결정적이다

조합 / Pair with: [가산 모션 · Additive Motion](../additive-motion/) · [계단식 모션 · Stepped Motion](../stepped-motion/) · [위글 · Wiggle](../wiggle/) · [시간 압축 · Time Compression](../time-compression/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-language-reference/expression-language-reference.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
