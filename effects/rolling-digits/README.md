# Nº 289 숫자 롤링 · Rolling Digits

> 클립 렌더 예정 / Clip rendering planned.

**각 자릿수가 세로 릴에서 돌아 다음 값에 멈춘다.**

Each digit rolls vertically inside a clipped number reel.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | css |

다른 이름 / Also known as: 롤링 숫자, Odometer, Number wheel, Odometer Reels, 오도미터 숫자, vertical-spring-ticker, slot-machine-reveal

## 선택 기준 / Selection

점수와 가격의 기계적 갱신을 보여준다. / Suggests a mechanical numeric update.

- 가격 129의 각 자릿수가 800ms 동안 돌아 정확한 숫자에 멈춘다. / Update scores or prices.
- 점수와 가격의 기계적 갱신을 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 가격 129의 각 자릿수가 800ms 동안 돌아 정확한 숫자에 멈춘다.
나쁜 예 / Bad: 통화 기호와 소수점까지 함께 굴린다.
주의 / Avoid: 릴 내부 숫자는 줄 높이 72px로 맞춘다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 500~1200ms | 최종 숫자에서 정지 |
| 자릿수 간격 | 60ms | 0~100ms | 왼쪽부터 시작 |
| 숫자 높이 | 72px | 48~96px | 마스크와 줄 높이 일치 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
reels.forEach((reel,i)=>{
 tl.fromTo(reel,{y:0},{y:-digits[i]*72,duration:0.8,ease:'power3.out'},i*0.06);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 숫자 롤링을 적용해. 자릿수별 마스크 내부 숫자 스트립의 y를 보간한다. 지속 800ms; 자릿수 간격 60ms; 숫자 높이 72px을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 숫자 롤링을 적용해. 자릿수별 마스크 내부 숫자 스트립의 y를 보간한다. 지속 800ms; 자릿수 간격 60ms; 숫자 높이 72px을 적용한다. 0초, 0.4초, 0.8초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Rolling Digits on <target> in <file>. Roll each digit for 800ms with 60ms stagger and 72px digit height; keep punctuation stationary. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Rolling Digits on <target> in <file>. Roll each digit for 800ms with 60ms stagger and 72px digit height; keep punctuation stationary. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.4s, and 0.8s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 숫자 롤링를 `.hero`에 적용해. / Apply Rolling Digits to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 숫자 롤링 상태를 넣고 seek 시 0.8초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 800ms; 자릿수 간격 60ms; 숫자 높이 72px을 싣고 가격 129의 각 자릿수가 800ms 동안 돌아 정확한 숫자에 멈춘다.
- Scrolline Deck: 진행률 0~1을 0.8초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [카운트업 · Count-up](../count-up/) · [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/number-wheel/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/slot-machine-roll/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/vertical-spring-ticker.md`) (unknown) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#odometer-stats`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/odometer-stats/scene.css`) (MIT) · [HubSpot/odometer](https://github.com/HubSpot/odometer) (MIT) · [pqina/flip](https://github.com/pqina/flip) (MIT) · [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
