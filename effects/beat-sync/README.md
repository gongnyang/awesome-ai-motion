# Nº 015 비트 싱크 · Beat Synchronization

> 클립 렌더 예정 / Clip rendering planned.

**요소의 도착, 크기 변화, 화면 컷이 음악의 특정 박자에 정확히 맞아떨어진다**

Arrivals, scale changes and cuts land exactly on specific beats of the music.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 순서·흐름, 주목 끌기 | 숏폼, 설명 영상, 제품 시연 | gsap |

다른 이름 / Also known as: Beat landing, 박자에 착지, Audio synchronized motion, 오디오 동기 모션

## 선택 기준 / Selection

음악과 화면의 사건이 하나로 일치해 리듬감과 완성도가 생긴다. 박자에서 어긋나면 바로 어색하게 느껴진다 / Screen events and sound become one, giving rhythm and polish. Any drift from the beat feels wrong immediately.

- 음악 위에 카드나 문구가 차례로 등장하는 영상을 만들 때 / Cards or lines appear in sequence over music.
- 컷 전환을 박자에 맞춰 리듬을 살릴 때 / Time cuts to the beat to strengthen rhythm.

좋은 예 / Good: 100BPM에서 박자 간격 600ms, 이동 400ms짜리 카드가 박 시각 0.6초, 1.2초, 1.8초에 정확히 도착한다. 도착 오차는 1프레임 이내다
나쁜 예 / Bad: 이동이 시작하는 시각을 박에 맞춰 도착이 박보다 400ms 늦거나, 박자를 눈으로 대충 맞춰 매번 오차가 다르다
주의 / Avoid: 시작이 아니라 도착을 박에 맞춘다 · BPM은 분석 도구로 실측한다(감으로 입력 금지)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| BPM | 100 | 80~140 | 박 간격 60/BPM초 |
| 박자 간격 | 600ms | 428~750ms | BPM에서 계산 |
| 이동 시간 | 400ms | 250~500ms | 박 간격보다 짧게 |
| 허용 오차 | 1프레임 | 30fps 기준 33ms | 이내 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
const beat = 60 / 100; // 0.6s
[1, 2, 3, 4].forEach((n, i) => {
  tl.from(`.card${i}`, { y: 60, opacity: 0, duration: 0.4, ease: 'power3.out' }, n * beat - 0.4); // 도착 = n*beat
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 카드 4장이 100BPM 음악의 박에 맞춰 도착하게 GSAP 타임라인을 짜줘. 박 간격은 0.6초이고 카드 i의 도착 시각은 (i+1)*0.6초야. 각 카드는 y 60px 아래에서 0.4초, power3.out으로 올라오게 하고, 시작 시각은 도착 시각에서 0.4초를 뺀 값으로 계산해줘.
```

### 한국어 · Codex
```text
<파일>의 등장 애니메이션을 비트 싱크로 고쳐줘. 100BPM, 박 간격 0.6초, 카드별 tween은 position = 도착 - 0.4, duration 0.4, ease power3.out. 0.6초, 1.2초, 1.8초 시점에 캡처해 각 카드가 정확히 최종 위치에 있는지, 그 직전 33ms 시점에는 아직 이동 중인지 확인해.
```

### English · Claude Code
```text
Build a GSAP timeline where 4 cards of <target> land on the beat of a 100 BPM track. The beat interval is 0.6 seconds and card i arrives at (i+1)*0.6s. Each card rises from 60px below over 0.4 seconds with power3.out, and its start time is arrival minus 0.4s.
```

### English · Codex
```text
Convert the entrance animation in <file> to beat sync: 100 BPM, 0.6s beat interval, per-card tween at position = arrival - 0.4, duration 0.4, ease power3.out. Capture at 0.6s, 1.2s and 1.8s to verify each card is exactly at its final position, and 33ms earlier to verify it is still moving.
```

예시 / Example: 비트 싱크를 `.hero`에 적용해. / Apply Beat Synchronization to `.hero`.

## 적용 / Application

- HyperFrames: beats 분석 결과의 박 시각을 배열로 두고 tween 시작 = 박 시각 - duration으로 계산한다. paused 타임라인이라 seek해도 위치가 같다
- ReelForge: 씬 워커 브리프에 BPM, 박 시각 배열, 도착 기준 요소를 싣는다. 컷 전환은 박 시각에 정확히 둔다
- Scrolline Deck: 음악 없이 스크롤이 진행되므로 박 대신 진행률 등분(0.25 간격)으로 도착 지점을 정한다

조합 / Pair with: [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [오디오 반응 펄스 · Audio Reactive Pulse](../audio-reactive-pulse/) · [스태거 · Stagger](../stagger/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown) · [theatre-js/theatre](https://www.theatrejs.com/docs/latest/manual/audio) (Apache-2.0 / AGPL-3.0 (구성요소별)) · motion dictionary 4-explainer-learning.md#C. 템포·리듬·편집과 비트 동기 (own) · [theatre-js/theatre](https://www.theatrejs.com/docs/latest/concepts) (Apache-2.0 / AGPL-3.0 (구성요소별))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
