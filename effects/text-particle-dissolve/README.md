# Nº 501 텍스트 입자 디졸브 · Text Particle Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**입력된 문자가 작은 점으로 흩어져 사라지고 입력창이 비워진다.**

Text breaks into small particles and fades after submission.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | canvas |

다른 이름 / Also known as: Input Dissolve, 입력 글자 분해, 텍스트 입자 소멸

## 선택 기준 / Selection

입력 내용이 전송되거나 처리됨을 보여 준다. / Shows that input has been sent or processed.

- 텍스트 입자 디졸브으로 입력 내용이 전송되거나 처리됨을 보여 준다 때 / Use this effect when you need to communicate: Shows that input has been sent or processed.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 전송한 입력 글자의 점들이 40px 퍼지며 사라진다
나쁜 예 / Bad: 전송 확인 전에 입력 원문을 지운다
주의 / Avoid: 전송 확인 전에 입력 원문을 지운다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.9s | 0.54~1.35s | 1920x1080 시연 기준의 한 동작 시간 |
| 입자 수 | 200 | 80~300 | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const dots = gsap.utils.toArray('.dot');
tl.to('.input-text', {opacity:0,duration:.05}, 0);
dots.forEach((el,i)=>{
  const a = i*2.399963;
  tl.to(el,{x:40*Math.cos(a),y:40*Math.sin(a),opacity:0,duration:.9,ease:'power2.out'},0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 텍스트 입자 디졸브을 적용해. 입력된 문자가 작은 점으로 흩어져 사라지고 입력창이 비워진다. 기본 지속 0.9초, 입자 수 200, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해. canvas는 같은 진행값으로 매 프레임 다시 그리며 핵심 코드의 DOM 레이어는 합성 참조로 사용해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 텍스트 입자 디졸브을 적용해. 기본 지속 0.9초, 입자 수 200, 이징 power2.out를 사용해. 0초, 0.45초, 1.3초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Text Particle Dissolve to <target> in <file>. Text breaks into small particles and fades after submission. Use a 0.9-second duration, 200 particles, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state. Redraw the canvas from the same progress value on each frame; use the DOM layers in the core snippet as a compositing reference.
```

### English · Codex
```text
Apply Text Particle Dissolve to <target> in the demonstration scene in <file>. Use a 0.9-second duration, 200 particles, and power2.out easing. Capture at 0, 0.45, and 1.3 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 텍스트 입자 디졸브를 `.hero`에 적용해. / Apply Text Particle Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 텍스트 입자 디졸브 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.9초, 입자 수 200, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.9초, 입자 수 200, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 전송한 입력 글자의 점들이 40px 퍼지며 사라진다.
- Scrolline Deck: 진행률 0~1을 0.9초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [토큰 쪼개기 · Token Split](../token-split/) · [아이콘 플라이트 · Icon Flight](../icon-flight/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/placeholders-and-vanish-input) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops](https://github.com/WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
