# Nº 144 스퀴즈 전환 · Squeeze Transition

> 클립 렌더 예정 / Clip rendering planned.

**앞 장면의 한 축이 눌려 사라지고 다음 장면이 같은 축으로 펼쳐지는 전환**

The outgoing scene is squashed along one axis while the next scene unfolds from the same edge.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 강조 | 숏폼, 제품 시연, 웹 UI | css |

다른 이름 / Also known as: 압축 전환, 압착 전환, Accordion fold, 맞접기 전환

## 선택 기준 / Selection

자리가 압축과 확장으로 교체된다는 감각. 문이 닫혔다 열리는 듯한 리듬 / Space is exchanged by compression and expansion, like a door closing and reopening.

- 화면 상태가 좌우 혹은 상하로 크게 바뀌는 순간을 강조할 때 / Emphasize a big left-right or up-down state change.
- 카드나 패널을 다른 콘텐츠로 교체할 때 / Swap one card or panel for different content.

좋은 예 / Good: 앞 장면이 0.3초 동안 scaleX 1에서 0으로 눌려 왼쪽 가장자리로 접히고, 뒤 장면이 같은 가장자리에서 0.35초 동안 펼쳐진다
나쁜 예 / Bad: 두 장면이 동시에 눌려 화면이 비는 구간이 길거나, 글자가 늘어나 찌그러지는 채로 보인다
주의 / Avoid: 글자가 많은 장면은 scale이 아니라 clipPath로 바꾼다(글자 왜곡 방지) · 눌림 정점에서 빈 화면이 0.05초 넘게 남지 않게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.65s | 0.45~0.9s | 퇴장과 등장이 절반씩 |
| 축 | X | X/Y/중앙 | 원점은 맞닿는 가장자리 |
| 최소 scale | 0 | 0~0.02 | 0으로 하면 1프레임 정지 |
| 이징 | power2.inOut | power2~3 | 퇴장은 in, 등장은 out |

## 구현 / Implementation (GSAP)

```js
tl.set('.b', { scaleX: 0, transformOrigin: '0% 50%' })
  .to('.a', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.3, ease: 'power2.in' })
  .to('.b', { scaleX: 1, duration: 0.35, ease: 'power2.out' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 스퀴즈 전환을 만들어줘. A는 transformOrigin을 0% 50%로 두고 0.3초 동안 scaleX 1에서 0으로 power2.in, B는 같은 원점에서 scaleX 0에서 1로 0.35초 power2.out으로 펼쳐지게 해. 전체 타임라인은 paused 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>에 squeeze 전환을 넣어. 앞 요소 scaleX 1에서 0 (0.3s, power2.in), 뒤 요소 scaleX 0에서 1 (0.3초 시점부터 0.35s, power2.out), 둘 다 transformOrigin 0% 50%. 0.3초에 앞 요소가 보이지 않는지, 0.65초에 뒤 요소가 원래 크기인지 캡처로 확인하고 글자 왜곡 여부도 봐.
```

### English · Claude Code
```text
Build a squeeze transition from <targetA> to <targetB>. Set transformOrigin to 0% 50%. A goes scaleX 1 to 0 over 0.3 seconds with power2.in, then B goes scaleX 0 to 1 over 0.35 seconds with power2.out from the same origin. Use one paused timeline.
```

### English · Codex
```text
Add a squeeze transition in <file>. Outgoing element scaleX 1 to 0 (0.3s, power2.in), incoming element scaleX 0 to 1 (starting at 0.3s, 0.35s, power2.out), both with transformOrigin 0% 50%. Capture at 0.3 seconds to confirm the outgoing element is gone, at 0.65 seconds to confirm the incoming one is full size, and check text for distortion.
```

예시 / Example: 스퀴즈 전환를 `.hero`에 적용해. / Apply Squeeze Transition to `.hero`.

## 적용 / Application

- HyperFrames: transformOrigin을 시작 상태에서 고정하고 scaleX만 보간한다. 자식 글자는 역스케일하지 않고 clipPath 폴백을 준비한다
- ReelForge: 씬 워커 브리프에 axis, originPct, durationMs를 싣고 두 씬 컨테이너에만 적용한다
- Scrolline Deck: 진행률 0~0.5는 앞 장면 눌림, 0.5~1은 뒤 장면 펼침으로 나눈다. scrub 역방향에서도 원점이 튀지 않게 origin을 고정한다

조합 / Pair with: [푸시 전환 · Push](../push-transition/) · [스케일 스왑 · Scale Swap](../scale-swap/) · [와이프 · Wipe](../wipe/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/squeeze.glsl) (MIT) · [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) (LGPL-2.1-or-later) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Fold.glsl) (MIT) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-push.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
