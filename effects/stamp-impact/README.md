# Nº 635 도장 타격 · Stamp Impact

> 클립 렌더 예정 / Clip rendering planned.

**글자가 크게 떠 있다가 화면에 내려앉아 순간적으로 눌리고 멈추는 도장 임팩트**

Text hovers large, drops onto the screen, presses in for a beat, and stops.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 중급 | 강조, 주목 끌기, 피드백 | 숏폼, 설명 영상, 발표 | gsap |

## 선택 기준 / Selection

선언, 증거 확정, 강한 결론. 확정되었다는 무게가 있다 / Declaration and confirmation: the verdict has weight.

- "승인", "확정", "불합격" 같은 결과 판정 단어를 찍을 때 / Stamping a result word such as "Approved", "Confirmed" or "Rejected"
- 장면의 결론을 한 단어로 못 박을 때 / Nailing a scene's conclusion down in one word

좋은 예 / Good: "승인"이 scale 1.2에서 1로 180ms 안에 내려앉고 3프레임 동안 화면이 2px 흔들리며 2% 눌렸다 복원된다
나쁜 예 / Bad: 스케일을 2배로 시작해 0.5초 이상 걸리고 흔들림이 계속 남아 화면이 어지럽다
주의 / Avoid: 임팩트 후 반드시 정지한다. 흔들림은 3프레임(0.1초) 안에 끝낸다 · 같은 화면에서 2번 이상 찍지 않는다. 임팩트는 한 번이 가장 세다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 낙하 시간 | 180ms | 120~250ms | power4.in에 가까움 |
| 시작 scale | 1.2 | 1.1~1.4 | 1로 내려앉음 |
| 흔들림 | 2px, 3프레임 | 1~4px | x/y 짝수 프레임 반대 |
| 눌림 | 2% | 1~4% | scaleY 0.98 후 복원 |

이징 / Ease: `power4.in (낙하) / power2.out (복원)`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.stamp', {scale:1.2, opacity:0}, {scale:1, opacity:1, duration:0.18, ease:'power4.in'}, 0.3)
  .to('.stamp', {scaleY:0.98, duration:0.05, yoyo:true, repeat:1, ease:'power2.out'}, 0.48)
  .to('.stage', {x:2, y:-2, duration:0.033, repeat:2, yoyo:true, ease:'none'}, 0.48);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 단어를 도장 임팩트로 찍어줘. scale 1.2, opacity 0에서 1, 0.18초 power4.in으로 내려앉고, 내려앉은 직후 scaleY 0.98로 0.05초 눌렸다 복원, 컨테이너가 2px씩 3프레임 흔들리고 멈춰. 이후 1초 정지.
```

### 한국어 · Codex
```text
<파일>에 stamp impact를 적용해. .stamp scale 1.2에서 1을 0.3초에 0.18초 power4.in, 0.48초에 scaleY 0.98 yoyo 0.05초, .stage x 2 y -2 0.033초 repeat 2 yoyo. 0.4초·0.5초·1.0초를 캡처해 낙하 중, 임팩트 순간의 흔들림, 정지 상태(.stage 좌표 0)를 확인해.
```

### English · Claude Code
```text
Stamp the word in <target>. It goes scale 1.2 to 1 and opacity 0 to 1 over 0.18s power4.in, presses to scaleY 0.98 for 0.05s and restores, while the container shakes 2px for 3 frames and stops. Hold still for 1s afterwards.
```

### English · Codex
```text
Apply stamp impact in <file>. .stamp scale 1.2 to 1 at 0.3s over 0.18s power4.in; scaleY 0.98 yoyo 0.05s at 0.48s; .stage x 2, y -2, 0.033s, repeat 2, yoyo. Capture at 0.4s, 0.5s and 1.0s to verify mid-drop, the shake at impact, and the still state (.stage at 0,0).
```

예시 / Example: 도장 타격를 `.hero`에 적용해. / Apply Stamp Impact to `.hero`.

## 적용 / Application

- HyperFrames: 흔들림은 stage 컨테이너 x/y만 3프레임 진동한다. 30fps 기준 0.033초 단위로 맞춘다
- ReelForge: 브리프에 단어, 낙하 180ms, 시작 scale 1.2, 흔들림 2px/3프레임, 눌림 2%를 싣는다. 배경 종이 질감은 정적 이미지로 준다
- Scrolline Deck: 진행률 임계에서 한 번 발화하는 이벤트로 취급한다. 임팩트 구간은 짧아 scrub 속도에서는 발화 후 상태를 유지하고 되감으면 전체를 되돌린다

조합 / Pair with: [카메라 셰이크 · Camera Shake](../camera-shake/) · [화면 흔들림 · Screen Shake](../screen-shake/) · [자막 화면 점유 · Caption Takeover](../caption-takeover/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
