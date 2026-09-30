# Nº 387 경로 신호 빔 · Path Beam

> 클립 렌더 예정 / Clip rendering planned.

**빛나는 짧은 선이 연결 경로를 따라 지나가며 각 대상이 차례로 밝아진다.**

A short luminous segment travels along a connector toward an active node.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | svg |

다른 이름 / Also known as: Tracing beam, 경로 추적 광선, Animated Path Beam, 경로 빛 이동, Animated Beam, 움직이는 빔, Beam effect

## 선택 기준 / Selection

처리 경로와 활성 단계를 보여준다. / Shows signal direction and the currently active stage.

- 요청 신호가 API 연결선을 따라 지나간 뒤 응답 노드를 켠다. / Highlight a processing path.
- 처리 경로와 활성 단계를 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 요청 신호가 API 연결선을 따라 지나간 뒤 응답 노드를 켠다.
나쁜 예 / Bad: 모든 경로에 동시에 빔을 반복해 현재 경로를 가린다.
주의 / Avoid: 선택 경로 한 개부터 보여준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 지속 | 1500ms | 900~2400ms | 경로 길이 기준 |
| 빔 길이 | 80px | 40~140px | 전체 경로보다 짧게 |
| 도착 강조 | 300ms | 150~500ms | 처리 완료와 동기화 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}),L=beam.getTotalLength();
gsap.set(beam,{strokeDasharray:`80 ${L+80}`,strokeDashoffset:80});
tl.to(beam,{strokeDashoffset:-L,duration:1.5,ease:'none'},0);
tl.to('.destination',{opacity:1,duration:0.3},1.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 경로 신호 빔을 적용해. SVG dash의 위치를 진행시키고 도착 시점에 대상 색을 강조한다. 이동 지속 1500ms; 빔 길이 80px; 도착 강조 300ms을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 경로 신호 빔을 적용해. SVG dash의 위치를 진행시키고 도착 시점에 대상 색을 강조한다. 이동 지속 1500ms; 빔 길이 80px; 도착 강조 300ms을 적용한다. 0초, 0.75초, 1.5초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Path Beam on <target> in <file>. Move an 80px beam along the path over 1500ms, then brighten the destination over 300ms. Hide the beam outside the path endpoints. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Path Beam on <target> in <file>. Move an 80px beam along the path over 1500ms, then brighten the destination over 300ms. Hide the beam outside the path endpoints. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.75s, and 1.5s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 경로 신호 빔를 `.hero`에 적용해. / Apply Path Beam to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 경로 신호 빔 상태를 넣고 seek 시 1.5초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 이동 지속 1500ms; 빔 길이 80px; 도착 강조 300ms을 싣고 요청 신호가 API 연결선을 따라 지나간 뒤 응답 노드를 켠다.
- Scrolline Deck: 진행률 0~1을 1.5초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [노드 연결망 구축 · Node-link Build](../graph-build/) · [상태 전이 순회 · State Transition Walk](../state-transition-walk/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tracing-beam/registry-item.json) (Apache-2.0) · [magicuidesign/magicui](https://magicui.design/docs/components/animated-beam) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/background-beams) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
