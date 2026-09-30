# Nº 208 TV 트래킹 전환 · TV Tracking Transition

> 클립 렌더 예정 / Clip rendering planned.

**가로 주사선 일부가 옆으로 흔들리고 어두운 스캔선이 생기며 장면이 교차한다**

Some horizontal scan lines wobble sideways, dark scan bars appear, and the scenes cross over.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Lost TV tracking, TV 추적 신호 흔들림

## 선택 기준 / Selection

낡은 비디오테이프의 트래킹이 흔들리는 느낌. 불안정한 아날로그 화면이다 / Creates the instability of old analog video.

- 회상, 옛 기록 영상, 호러 톤의 장면에서 화면이 불안정하게 넘어갈 때 / When a scene slips unstably in flashbacks, archival footage, or horror tones
- VHS 룩 영상에서 컷 사이에 아날로그 결함을 넣을 때 / When inserting analog artifacts between cuts in a VHS-look video

좋은 예 / Good: 700ms 동안 주사선 120개 중 일부가 사인 변위로 최대 60px 흔들리고 어두운 스캔선이 지나가며 장면이 교차한다
나쁜 예 / Bad: 모든 줄이 같은 위상으로 흔들려 화면이 통째로 좌우로 움직이거나, 흔들림이 끝까지 지속돼 다음 장면이 안 정리된다
주의 / Avoid: 흔들림은 진행 중반에 정점, 끝에서 0으로 수렴 · 전체 화면을 항상 흔들지 않고 일부 줄만 움직인다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~1000ms | linear |
| 주사선 수 | 120 | 80~160 | 줄 높이 9px |
| 최대 변위 | 60px | 30~80px | 정점 진행 50% |
| 영향 줄 비율 | 35% | 25~50% | 일부만 |
| 스캔선 opacity | 0.35 | 0.2~0.5 | 어두운 가로줄 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const s = { p: 0 };
tl.to(s, { p: 1, duration: 0.7, ease: 'none', onUpdate: () => {
  const k = Math.sin(Math.PI * s.p);
  document.querySelectorAll('.line').forEach((el, i) => {
    const on = (i * 7) % 20 < 7;
    el.style.transform = `translateX(${on ? Math.sin(i + s.p * 12) * 60 * k : 0}px)`;
  });
} }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 TV 트래킹 전환을 넣어줘. 화면을 120개 가로 줄로 나눠 그중 약 35%만 translateX가 sin(i + p*12)*60*sin(pi*p) 픽셀로 흔들리게 하고, 0.7초 linear로 진행해. 진행 50%에 다음 장면으로 교체하고, 0.35 opacity 어두운 스캔선 줄이 위에서 아래로 한 번 지나가게 해. paused 타임라인 하나에서 p만 보간해 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 TV 트래킹 전환을 구현해. p 0에서 1, 0.7초 linear, 줄 120개 중 (i*7)%20<7인 줄만 translateX=sin(i+p*12)*60*sin(pi*p). 0.35초에 .next 표시. 0.1초, 0.35초, 0.6초, 0.7초 시점을 캡처해 정점에서 일부 줄만 어긋나는지, 0.7초에 모든 줄이 0px인지 확인해.
```

### English · Claude Code
```text
Add a TV Tracking Transition to <target>. Split the frame into 120 horizontal lines and shift about 35% of them with translateX = sin(i + p*12) * 60 * sin(pi*p) px, over 0.7s with linear ease. Swap to the next scene at 50% progress, and run a 0.35-opacity dark scan bar down the frame once. Interpolate only p on one paused timeline so it seeks deterministically.
```

### English · Codex
```text
Implement TV Tracking Transition in <file>. p 0 to 1 over 0.7s linear; only lines where (i*7)%20<7 get translateX=sin(i+p*12)*60*sin(pi*p). Show .next at 0.35s. Capture at 0.1s, 0.35s, 0.6s, and 0.7s to confirm only some lines are displaced at the peak and every line is at 0px at 0.7s.
```

예시 / Example: TV 트래킹 전환를 `.hero`에 적용해. / Apply TV Tracking Transition to `.hero`.

## 적용 / Application

- HyperFrames: 줄 요소마다 계산식 하나로 translateX를 넣고 k=sin(pi*p)로 정점을 잡는다. onUpdate 안에서 시간이 아닌 p만 쓰므로 seek 안전하다
- ReelForge: 씬 워커 브리프에 줄 수 120, 영향 줄 비율 35%, 최대 변위 60px, 지속 700ms를 싣는다
- Scrolline Deck: scrub에서는 p를 스크롤 진행률로 쓰고 위상 12를 6으로 낮춰 스크롤 속도에 흔들림이 튀지 않게 한다

조합 / Pair with: [TV 노이즈 전환 · TV Static Transition](../tv-static-transition/) · [VHS 트래킹 · VHS Tracking](../vhs-tracking/) · [글리치 전환 · Glitch Transition](../glitch-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/old_tv_lost_signal.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
