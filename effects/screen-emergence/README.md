# Nº 574 스크린 이머전스 · Screen Emergence

> 클립 렌더 예정 / Clip rendering planned.

**기울어진 기기 화면이 정면으로 펴진 뒤 화면 속 콘텐츠가 바깥으로 확대되어 나오는 연출**

A tilted device screen flattens to face front, then the content inside scales up beyond the frame.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 주목 끌기, 설명 | 제품 시연, 스크롤덱, 설명 영상 | css |

다른 이름 / Also known as: Laptop Screen Emergence, 노트북 화면 솟아 나오기

## 선택 기준 / Selection

기기라는 껍데기에서 화면 속 콘텐츠가 주인공으로 바뀐다. 무엇이 진짜 보여 주고 싶은 것인지가 분명해진다 / Shifts the star from the device shell to the content inside, making clear what is really being shown.

- 노트북이나 폰 목업에서 앱 화면으로 시점을 넘길 때 / Move focus from a laptop or phone mockup to the app screen.
- 스크롤 진행과 함께 기기 속 내용을 크게 공개할 때 / Reveal what is inside a device as the page scrolls.
- 제품 소개에서 하드웨어 컷 후 소프트웨어 컷으로 이어질 때 / Cut from hardware to software in a product intro.

좋은 예 / Good: 기기 화면이 1.8초 동안 rotateX 80도에서 0도로 열리고 scale 0.8에서 1.5로 커지며 콘텐츠가 프레임 밖까지 확대된다
나쁜 예 / Bad: 기기가 열리는 동시에 확대가 시작돼 무엇이 열렸는지 알 수 없다. 확대가 과해 콘텐츠가 잘려 읽을 수 없다
주의 / Avoid: 열림이 80%를 넘기 전에 확대를 시작하지 않는다 · 최종 scale 1.6 초과 금지 · 콘텐츠 핵심 정보는 중앙 60% 안에 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 1.8s | 1.2~2.6s | 열림 1.0s + 확대 0.8s |
| 회전 | 80→0deg | 60~85deg | rotateX |
| scale | 0.8→1.5 | 1.2~1.6 | 콘텐츠 |
| perspective | 1400px | 1000~1800px | 부모 |
| 이징 | power3.inOut | power2~power4 |  |

## 구현 / Implementation (GSAP)

```js
gsap.set('.stage', { perspective: 1400 });
tl.fromTo('.lid', { rotationX: 80, transformOrigin: '50% 100%' }, { rotationX: 0, duration: 1.0, ease: 'power3.inOut' }, 0.3)
  .fromTo('.content', { scale: 0.8 }, { scale: 1.5, duration: 0.8, ease: 'power2.inOut' }, 1.1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <기기 목업>이 열리고 <콘텐츠>가 커지는 연출을 만들어 줘. 부모 perspective 1400px, 0.3초부터 1.0초 동안 화면 덮개를 rotationX 80에서 0으로(power3.inOut), 1.1초부터 0.8초 동안 콘텐츠를 scale 0.8에서 1.5로 키워(power2.inOut). 열림이 끝나기 전에 확대가 시작되면 안 되고 paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>에 screen-emergence를 적용해. .stage perspective 1400, .lid rotationX 80→0 (position 0.3, 1.0s, power3.inOut), .content scale 0.8→1.5 (position 1.1, 0.8s, power2.inOut). 0.8초는 열리는 중, 1.3초는 열림 완료와 확대 시작, 2.2초는 scale 1.5이며 핵심 정보가 잘리지 않는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to open <device mockup> and enlarge <content>. Parent perspective 1400px; from 0.3 seconds over 1.0 second rotate the lid rotationX 80 to 0 (power3.inOut), and from 1.1 seconds over 0.8 seconds scale the content 0.8 to 1.5 (power2.inOut). The scale must not start before the opening finishes. Paused timeline.
```

### English · Codex
```text
Apply screen-emergence in <file>. .stage perspective 1400; .lid rotationX 80 to 0 (position 0.3, 1.0s, power3.inOut); .content scale 0.8 to 1.5 (position 1.1, 0.8s, power2.inOut). Capture 0.8s (opening), 1.3s (open, scale starting) and 2.2s (scale 1.5 with key information not clipped).
```

예시 / Example: 스크린 이머전스를 `.hero`에 적용해. / Apply Screen Emergence to `.hero`.

## 적용 / Application

- HyperFrames: 열림과 확대를 서로 다른 position에 두고 겹침을 0.2초로 제한한다. 캡처는 열림 종료 직후와 확대 종료 시점을 명시한다
- ReelForge: 브리프에 기기 목업 레이어, 콘텐츠 이미지, 열림 1.0s, 확대 0.8s를 싣는다
- Scrolline Deck: 진행률 0~0.55에 열림, 0.5~1.0에 확대를 매핑하고 스프링 대신 ease-out을 쓴다

조합 / Pair with: [원근 평면화 · Perspective Flatten](../perspective-flatten/) · [좌표 줌 · Zoom to Detail](../zoom-to-detail/) · [오브젝트 턴테이블 · Object Turntable](../object-turntable/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/macbook-scroll) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
