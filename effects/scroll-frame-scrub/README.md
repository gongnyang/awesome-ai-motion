# Nº 349 스크롤 프레임 스크럽 · Scroll Frame Scrubbing

> 클립 렌더 예정 / Clip rendering planned.

**스크롤 진행률에 따라 이미지 시퀀스가 앞으로 재생되거나 되감긴다.**

Scroll progress scrubs an image sequence forward and backward.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 고급 | 설명, 순서·흐름 | 스크롤덱, 제품 시연, 웹 UI | canvas |

다른 이름 / Also known as: Scroll Scrubbed Image Sequence, 스크롤 영상 프레임 스크럽, Frame-by-frame scrollytelling

## 선택 기준 / Selection

사용자가 진행 속도와 방향을 조절하며 제품의 구조 변화를 탐색한다. / Lets viewers control the pace and direction as they explore changes in a product’s structure.

- 제품 회전이나 분해 과정을 스크롤로 탐색하게 할 때 / Letting viewers explore a product rotation or exploded view by scrolling.
- 설명의 단계와 영상 프레임을 같은 진행률로 맞출 때 / Synchronizing explanation stages and video frames to the same progress value.

좋은 예 / Good: 2400px 스크롤 구간에서 120프레임 제품 분해도를 표시하고 역스크롤하면 같은 프레임을 역순으로 보여준다.
나쁜 예 / Bad: 프레임을 불러오기 전에 스크롤을 시작해 빈 화면이 나오거나 매번 다른 프레임을 선택한다.
주의 / Avoid: 프레임을 준비하기 전에 스크럽을 활성화하지 않는다. · 프레임마다 canvas 크기를 바꿔 화면을 흔들지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 원본 영상 길이 | 4000ms | 2000~6000ms | 프레임 시퀀스의 원본 시간 길이다. |
| 프레임 수 | 120 | 60~180 | 120개는 4초 영상의 30fps에 대응한다. |
| 스크롤 거리 | 2400px | 1600~3600px | 시작 지점부터 끝 프레임까지의 거리다. |
| 진행률 | 0~1 | 0~1 | 범위 밖 값은 양 끝으로 제한한다. |
| 이징 | none (linear) | none | 프레임 탐색은 진행률과 직접 대응한다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { progress: 0 };
const ctx = canvas.getContext('2d');
const draw = () => {
  const i = Math.round(Math.max(0, Math.min(1, state.progress)) * 119);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(frames[i], 0, 0, canvas.width, canvas.height);
};
const tl = gsap.timeline({ paused: true });
tl.to(state, { progress: 1, duration: 4, ease: 'none', onUpdate: draw });
tl.seek(0); draw();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 120프레임 이미지 시퀀스를 canvas로 표시해. 모든 프레임을 미리 로드하고 2400px 스크롤 구간을 진행률 0~1로 매핑해 round(progress*119) 프레임을 그려. 원본 길이는 4초이며 이징은 linear로 두고 역스크롤에서도 같은 인덱스 규칙을 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> canvas 장면에 4초 paused GSAP 타임라인과 120프레임 시퀀스를 연결해. 스크롤 2400px를 진행률 0~1로 제한하고 round(progress*119)를 사용해. 0초, 2초, 4초를 캡처해 인덱스 0, 60, 119가 보이는지 확인하고 2초로 다시 seek해 같은 프레임이 복원되는지 검증해.
```

### English · Claude Code
```text
In <file>, render a 120-frame image sequence for <target> on a canvas. Preload every frame and map a 2400px scroll interval to progress from 0 to 1, drawing frame round(progress*119). Use a 4-second source duration and linear mapping, keeping the same index rule when scrolling backward.
```

### English · Codex
```text
In <file>, connect the canvas scene for <target> to a paused 4-second GSAP timeline and a 120-frame sequence. Clamp progress from a 2400px scroll interval to 0 through 1 and use round(progress*119). Capture at 0, 2, and 4 seconds to verify indices 0, 60, and 119, then seek back to 2 seconds to verify the same frame is restored.
```

예시 / Example: 스크롤 프레임 스크럽를 `.hero`에 적용해. / Apply Scroll Frame Scrubbing to `.hero`.

## 적용 / Application

- HyperFrames: 120개 프레임을 먼저 로드한 뒤 paused 4초 타임라인의 진행률로 canvas를 그린다. seek 직후에도 같은 인덱스의 프레임을 표시한다.
- ReelForge: 씬 워커 브리프에 4초, 120프레임, 2400px 스크롤과 반올림 인덱스 규칙을 싣고 프레임 에셋 목록을 전달한다.
- Scrolline Deck: 스크롤 거리 2400px를 진행률 0~1로 제한하고 round(progress*119)로 프레임을 선택한다. 프레임은 linear로 두고 보조 주석의 scrub에는 스프링 대신 ease-out을 쓴다.

조합 / Pair with: [패럴랙스 · Parallax](../parallax/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [점진적 공개 · Progressive Disclosure](../progressive-disclosure/)

출처 / Sources: [danhnm1203/scrollytelling](https://github.com/danhnm1203/scrollytelling) (MIT) · [basementstudio/scrollytelling](https://github.com/basementstudio/scrollytelling) (MIT) · [vaitko/awesome-immersive-storytelling](https://github.com/vaitko/awesome-immersive-storytelling) (CC0-1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
