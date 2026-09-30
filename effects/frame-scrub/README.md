# Nº 231 프레임 스크럽 · Frame Scrub

> 클립 렌더 예정 / Clip rendering planned.

**스크롤이나 진행값에 맞춰 연속 이미지 또는 영상의 프레임이 앞뒤로 바뀐다.**

Map progress to an image or video frame, including reverse scrubbing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | canvas |

다른 이름 / Also known as: Scroll image sequence, 스크롤 이미지 시퀀스

## 선택 기준 / Selection

제품의 회전과 과정의 세부 단계를 원하는 속도로 읽게 한다. / Makes detailed stages and product views explorable.

- 제품 회전을 직접 탐색하게 할 때 / Let viewers explore a product rotation.
- 분해 과정의 중간 단계를 읽힐 때 / Inspect intermediate steps of an assembly breakdown.

좋은 예 / Good: 120장을 미리 로드하고 진행률 0.5에서 60번째 이미지를 그린다.
나쁜 예 / Bad: 이미지 로딩이 끝나기 전에 스크럽을 시작해 빈 프레임이 보인다.
주의 / Avoid: 이미지 크기와 로딩 완료를 확인한 뒤 시작한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 프레임 수 | 120 | 60~180 | 0부터 119까지 |
| 재현 지속 | 5000ms | 3000~8000ms | 영상 타임라인 기준 |
| 평활 지속 | 600ms | 200~800ms | 입력 변화 완화 |
| 스크롤 구간 | 2000px | 1200~3000px | 진행률 0~1 구간 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {p:0};
const draw = ()=>{
  const i = Math.round(Math.max(0,Math.min(1,s.p))*119);
  ctx.clearRect(0,0,1920,1080); ctx.drawImage(frames[i],0,0,1920,1080);
};
draw();
tl.to(s, {p:1, duration:5, ease:'none', onUpdate:draw});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 프레임 스크럽를 적용해. Canvas에 진행률을 정수 프레임 인덱스로 변환해 선택한 이미지를 그리며 역방향 진행도 같은 방식으로 처리한다. 프레임 수 120; 재현 지속 5000ms; 평활 지속 600ms; 스크롤 구간 2000px. 이징은 none로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 프레임 스크럽를 적용해. Canvas에 진행률을 정수 프레임 인덱스로 변환해 선택한 이미지를 그리며 역방향 진행도 같은 방식으로 처리한다. 프레임 수 120; 재현 지속 5000ms; 평활 지속 600ms; 스크롤 구간 2000px. 이징은 none를 사용해. 0초·2.5초·5초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Frame Scrub to <target> in <file>. Preload 120 frames and map clamped progress to round(progress*119). Use a 5000ms timeline or a 2000px scroll range with 600ms input smoothing. Use none and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Frame Scrub to the target scene in <file>. Preload 120 frames and map clamped progress to round(progress*119). Use a 5000ms timeline or a 2000px scroll range with 600ms input smoothing. Use none. Capture at 0, 2.5, and 5 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 프레임 스크럽를 `.hero`에 적용해. / Apply Frame Scrub to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 5초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 프레임 수 120; 재현 지속 5000ms; 평활 지속 600ms; 스크롤 구간 2000px를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 5초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [주석 등장 · Annotation Callout](../annotation-callout/) · [고정 장면 스크롤리텔링 · Pinned Scrollytelling](../pinned-scrollytelling/)

출처 / Sources: gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#frame-scrub-hero`) (MIT) · [greensock/GSAP](https://gsap.com/docs/v3/HelperFunctions/) (GSAP Standard License) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.css`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.html`) (MIT) · gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.js`) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
