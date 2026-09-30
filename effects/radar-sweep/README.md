# Nº 615 레이더 스윕 · Radar Sweep

> 클립 렌더 예정 / Clip rendering planned.

**빛나는 선이나 부채꼴이 영역을 훑고 통과한 점이 잠깐 빛난다.**

A bright scan sweeps across an area and leaves brief highlights.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | css |

다른 이름 / Also known as: Radar and Scan Sweep, 레이더와 스캔 쓸기, Scanning Sweep

## 선택 기준 / Selection

탐색과 감지 활동을 알린다. / Communicates scanning and detection.

- 탐색 중임을 보여 줄 때 / Show an active search.
- 감지된 지점의 순서를 설명할 때 / Explain the order in which locations are detected.

좋은 예 / Good: 지도 위 스캔 부채꼴이 한 바퀴 돌며 감지점을 잠깐 밝힌다.
나쁜 예 / Bad: 검색이 끝나도 스캔을 계속 돌려 완료 여부를 숨긴다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 3s | 2~6s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 회전량 | 360deg | 360deg | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 잔광 지속 | 800ms | 400~1200ms | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 스캔 폭 | 60deg | 30~90deg | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
tl.to('.sweep', { rotation: 360, duration: 3, ease: 'none' }, 0);
[0.4, 1.2, 2.1].forEach((t, i) => {
  tl.fromTo(`.hit-${i}`, { opacity: 0 }, { opacity: 1, duration: 0.1 }, t)
    .to(`.hit-${i}`, { opacity: 0, duration: 0.8 }, t + 0.1);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 레이더 스윕을 구현해. 주기 3s, 회전량 360deg, 잔광 지속 800ms, 스캔 폭 60deg, 이징 none을 적용해. CSS conic-gradient를 회전하거나 canvas 스캔 거리로 점 밝기를 정한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 레이더 스윕 장면 레이어에 적용해. 주기 3s, 회전량 360deg, 잔광 지속 800ms, 스캔 폭 60deg, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Radar Sweep on <target>. Use period 3s; rotation 360deg; afterglow duration 800ms; scan angle 60deg; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Radar Sweep to the scene layer in <file>. Use period 3s; rotation 360deg; afterglow duration 800ms; scan angle 60deg and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 레이더 스윕를 `.hero`에 적용해. / Apply Radar Sweep to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 레이더 스윕의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 3s, 회전량 360deg, 잔광 지속 800ms, 스캔 폭 60deg을 싣고 css 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 3s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [핫스팟 펄스 · Hotspot Pulse](../hotspot-pulse/) · [이미지 생성 스캔 · Image Generation Scan](../image-generation-scan/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [ui.aceternity.com](https://ui.aceternity.com/components/image-generation-loader) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
