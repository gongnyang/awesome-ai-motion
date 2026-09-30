# Nº 071 타다 · Tada

> 클립 렌더 예정 / Clip rendering planned.

**움츠렸다 커지면서 좌우로 흔들리고 제자리로 돌아오는 축하 동작**

A celebratory shrink-then-grow with a small left-right shake before settling.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 주목 끌기, 강조 | 숏폼, 웹 UI, 설명 영상 | css |

다른 이름 / Also known as: 축소 뒤 환호 흔들기

## 선택 기준 / Selection

성과나 완료를 알리는 축하의 신호. 짧고 명랑하게 끝난다 / Announces an achievement or completion. It is short and cheerful and ends cleanly.

- 목표 달성·결제 완료·업로드 성공을 알릴 때 / When signalling a goal reached, a payment done or an upload finished
- 배지나 트로피 아이콘이 등장한 직후 한 번 더 강조할 때 / When stressing a badge or trophy icon right after it appears

좋은 예 / Good: 완료 배지가 scale 0.9로 움츠렸다가 1.1로 커지며 ±3도 네 번 흔들리고 1로 돌아온다
나쁜 예 / Bad: 회전 10도 이상으로 흔들리거나 여러 요소가 동시에 tada를 해서 화면이 소란스럽다
주의 / Avoid: 회전 ±5도 초과 금지 · 한 장면에 1회만 사용 · 오류·경고 상황에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 길이 | 1.0s | 0.7~1.2s | 준비와 흔들림 전체 |
| 준비 배율 | 0.9 | 0.88~0.95 | 움츠러드는 깊이 |
| 절정 배율 | 1.1 | 1.06~1.15 | 흔들리는 동안 유지 |
| 회전 진폭 | ±3deg | 2~5deg | 4회 왕복, 마지막은 0으로 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.to('.badge', { scale: 0.9, duration: 0.1, ease: 'power2.out' }, 0.3)
  .to('.badge', { scale: 1.1, rotation: 3, duration: 0.1 })
  .to('.badge', { rotation: -3, duration: 0.1 }).to('.badge', { rotation: 3, duration: 0.1 })
  .to('.badge', { rotation: -3, duration: 0.1 }).to('.badge', { scale: 1, rotation: 0, duration: 0.3, ease: 'power3.out' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 배지에 tada를 넣어줘. 0.3초에 scale 0.9로 0.1초 움츠렸다가 1.1로 커지며 rotation +3, -3, +3, -3도를 0.1초씩 오가고 마지막 0.3초에 scale 1, rotation 0으로 돌아와. 회전은 5도를 넘기지 마. paused 타임라인 하나에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 tada를 적용해. 0.3s scale 0.9(0.1s) → scale 1.1 + rotation ±3 네 번(각 0.1s) → scale 1, rotation 0(0.3s, power3.out). 시드 없는 난수 금지. 0.35초·0.8초·1.5초 시점을 캡처해 움츠림, 절정 기울기, 종료 후 정렬 상태를 확인해.
```

### English · Claude Code
```text
Add a tada to the <target> badge with GSAP. At 0.3s scale to 0.9 over 0.1s, then to 1.1 while rotating +3, -3, +3, -3 degrees at 0.1s each, and return to scale 1, rotation 0 over 0.3s. Never exceed 5 degrees. Use one paused timeline.
```

### English · Codex
```text
Apply tada to <target> in <file>. 0.3s scale 0.9 (0.1s), then scale 1.1 with rotation +/-3 four times (0.1s each), then scale 1 and rotation 0 (0.3s, power3.out). No random values. Capture at 0.35s, 0.8s and 1.5s to check the squash, the peak tilt and the final alignment.
```

예시 / Example: 타다를 `.hero`에 적용해. / Apply Tada to `.hero`.

## 적용 / Application

- HyperFrames: 체인 tween을 한 paused 타임라인에 이어 붙이고 마지막에 rotation 0, scale 1로 명시 복귀시킨다
- ReelForge: 씬 워커 브리프에 대상, 절정 배율, 진폭, 흔들림 횟수를 파라미터로 넣는다. 기본값에서 벗어나면 회전을 줄인다
- Scrolline Deck: scrub에서는 스프링 대신 진행률 0.4~0.6 구간의 짧은 ease-out 흔들림만 쓰고 앞뒤는 정지시킨다

조합 / Pair with: [스케일 팝 · Scale Pop](../scale-pop/) · [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/) · [통통 튀기 · Bounce Attention](../bounce-attention/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
