# Nº 562 뎁스 카드 플라이바이 · Depth Card Flyby

> 클립 렌더 예정 / Clip rendering planned.

**앞뒤로 쌓인 카드가 차례로 앞으로 구르고 지난 카드는 카메라 쪽으로 넘어가는 순환**

Stacked cards roll forward one by one while the passed card tumbles toward the camera.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 순서·흐름, 주목 끌기 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: 깊이 카드 플라이바이

## 선택 기준 / Selection

항목이 빠르게 교대하며 긴장이 올라가는 리듬을 만든다. 카메라 앞을 스쳐 가는 깊이감이 있다 / Creates a quickening rhythm as items swap, with depth as cards sweep past the lens.

- 카드 5장을 비트에 맞춰 연속으로 소개할 때 / Introduce five cards in a row on the beat.
- 기능 목록을 스피디하게 훑는 숏폼을 만들 때 / A fast feature sweep for short-form video.
- 클라이맥스로 향하며 컷 간격이 좁아지는 구성을 할 때 / Tighten cut spacing toward a climax.

좋은 예 / Good: 카드 5장이 총 5초 동안 하나씩 앞으로 올라오고 지나간 카드는 카메라 쪽으로 회전하며 사라지며 착지 간격은 점점 줄어든다
나쁜 예 / Bad: 카드마다 같은 간격이라 단조롭거나, 지나간 카드가 화면에 남아 뒤 카드를 가린다
주의 / Avoid: 착지 간격은 마지막 카드일수록 20~30%씩 짧게 한다 · 지난 카드는 opacity 0으로 정리한다 · 카드는 6장을 넘기지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 카드 수 | 5 | 4~6 | 한 장면 |
| 총 시간 | 5s | 3~7s | 마지막 착지 기준 |
| 착지 간격 | 1.4→0.7s | 점점 축소 | 가속 리듬 |
| perspective | 1000px | 800~1400px | 카메라 거리 |
| 이징 | power3.out | power2~power4 | 착지 |

## 구현 / Implementation (GSAP)

```js
const beats = [0, 1.4, 2.6, 3.6, 4.3]; // 점점 줄어드는 간격
cards.forEach((c, i) => {
  gsap.set(c, { z: -i * 260, y: i * 20, opacity: 1 - i * 0.12 });
  tl.to(c, { z: 600, rotationY: 40, opacity: 0, duration: 0.9, ease: 'power3.in' }, beats[i]);
  cards.slice(i + 1).forEach((n, k) => tl.to(n, { z: -(k) * 260, y: k * 20, opacity: 1 - k * 0.12, duration: 0.6, ease: 'power3.out' }, beats[i]));
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <카드 5장>이 앞뒤로 쌓여 하나씩 카메라 쪽으로 지나가는 장면을 만들어 줘. 부모 perspective 1000px, 카드는 z를 260px씩 뒤로 쌓고, 맨 앞 카드부터 시작 시각 0, 1.4, 2.6, 3.6, 4.3초에 0.9초 동안 z 600, rotationY 40, opacity 0으로 power3.in 하며 지나가게 해. 뒤 카드는 그동안 z 0으로 나와 자리를 잡아. paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>에 depth-card-flyby를 적용해. 카드 5장에 z=-i*260을 주고 비트 배열 [0,1.4,2.6,3.6,4.3]에 맞춰 앞 카드를 z 600, rotationY 40, opacity 0으로 0.9초 power3.in 처리하고 뒤 카드는 한 칸씩 전진시켜. 0.5초, 2.0초, 4.8초를 캡처해 지난 카드가 화면에 남지 않고 간격이 좁아지는지 확인해.
```

### English · Claude Code
```text
Use GSAP to make <5 cards> sit stacked in depth and pass toward the camera one by one. Parent perspective 1000px, cards spaced 260px apart in z. Starting at 0, 1.4, 2.6, 3.6 and 4.3 seconds, the front card flies to z 600, rotationY 40, opacity 0 over 0.9 seconds with power3.in while the rest advance one slot. One paused timeline.
```

### English · Codex
```text
Apply depth-card-flyby in <file>. Place 5 cards at z=-i*260 and on beats [0,1.4,2.6,3.6,4.3] send the front card to z 600, rotationY 40, opacity 0 over 0.9s with power3.in, advancing the others one slot. Capture 0.5s, 2.0s and 4.8s: no passed card lingers and the spacing tightens.
```

예시 / Example: 뎁스 카드 플라이바이를 `.hero`에 적용해. / Apply Depth Card Flyby to `.hero`.

## 적용 / Application

- HyperFrames: 착지 시각 배열을 상수로 두고 paused 타임라인에서 z, rotationY, opacity를 그 시각에 건다. 비트 그리드가 있으면 배열을 비트로 바꾼다
- ReelForge: 브리프에 카드 5장 내용, 착지 시각 배열, perspective 1000을 싣는다. 음악이 있으면 비트 시각을 그대로 사용한다
- Scrolline Deck: 진행률을 카드 인덱스 구간으로 나눠 매핑한다. 간격 가속은 구간 길이를 줄여 표현한다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [커버플로우 · Coverflow](../coverflow/) · [비트 싱크 · Beat Synchronization](../beat-sync/)

출처 / Sources: local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#card-flyby`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
