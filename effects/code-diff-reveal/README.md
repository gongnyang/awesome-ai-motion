# Nº 372 코드 변경 전개 · Code Diff Reveal

> 클립 렌더 예정 / Clip rendering planned.

**삭제된 줄이 붉게 줄어 사라지고 추가된 줄이 초록색으로 펼쳐진다.**

Removed lines collapse and added lines expand with distinct markings.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | gsap |

다른 이름 / Also known as: Code diff, 코드 차이 전개, Code edit insertion and removal, 코드 삽입과 삭제, Code Token Replace and Reflow, 코드 토큰 교체와 재배치

## 선택 기준 / Selection

변경 전후의 추가와 삭제를 구별한다. / Distinguishes what changed between code versions.

- 삭제 줄에는 마이너스, 추가 줄에는 플러스 표식을 붙여 공개한다. / Explain additions and deletions in code.
- 변경 전후의 추가와 삭제를 구별한다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 삭제 줄에는 마이너스, 추가 줄에는 플러스 표식을 붙여 공개한다.
나쁜 예 / Bad: 색만 바꾸고 삭제와 추가의 구분 표식을 생략한다.
주의 / Avoid: 코드 읽기 시간을 최소 2초 확보한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 장면 지속 | 6000ms | 4000~8000ms | 읽기 정지 포함 |
| 줄 간격 | 100ms | 60~180ms | 줄 순서 유지 |
| 줄 교체 | 400ms | 250~600ms | 삭제 후 추가 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.to('.removed',{opacity:0,height:0,duration:0.4,stagger:0.1,ease:'power2.out'},1);
tl.fromTo('.added',{opacity:0,height:0},{opacity:1,height:32,duration:0.4,stagger:0.1,ease:'power2.out'},2);
tl.to({}, {duration:3},3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 코드 변경 전개을 적용해. 원본과 결과 줄을 비교한 고정 상태표로 줄 마스크와 위치를 보간한다. 장면 지속 6000ms; 줄 간격 100ms; 줄 교체 400ms을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 코드 변경 전개을 적용해. 원본과 결과 줄을 비교한 고정 상태표로 줄 마스크와 위치를 보간한다. 장면 지속 6000ms; 줄 간격 100ms; 줄 교체 400ms을 적용한다. 0초, 3초, 6초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Code Diff Reveal on <target> in <file>. Use a 6000ms scene with 100ms line stagger and 400ms line replacements. Mark removals with minus signs and additions with plus signs and leave at least 2s to read. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Code Diff Reveal on <target> in <file>. Use a 6000ms scene with 100ms line stagger and 400ms line replacements. Mark removals with minus signs and additions with plus signs and leave at least 2s to read. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 3s, and 6s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 코드 변경 전개를 `.hero`에 적용해. / Apply Code Diff Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 코드 변경 전개 상태를 넣고 seek 시 6초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 장면 지속 6000ms; 줄 간격 100ms; 줄 교체 400ms을 싣고 삭제 줄에는 마이너스, 추가 줄에는 플러스 표식을 붙여 공개한다.
- Scrolline Deck: 진행률 0~1을 6초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [대응 기호 이동 · Matching Token Transform](../matching-token-transform/) · [비교 분할 · Split Compare](../split-compare/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-diff/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:pr-to-video/references/code-vocabulary.md`) (unknown) · [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code/) (MIT) · [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code) (MIT) · [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
