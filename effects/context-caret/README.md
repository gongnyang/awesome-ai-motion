# Nº 097 문맥 반응 커서 · Context Caret

> 클립 렌더 예정 / Clip rendering planned.

**입력 중인 구간의 성격에 따라 커서의 색이 바뀌고 깜빡임이 이어지는 텍스트 커서**

A text caret that changes color with the kind of text being typed, then keeps blinking.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 설명, 피드백 | 제품 시연, 웹 UI, 설명 영상 | css |

다른 이름 / Also known as: 문맥 커서, context-sensitive-cursor

## 선택 기준 / Selection

지금 어디를 쓰고 있는지가 커서 색만으로 읽힌다. 입력이 살아 있는 화면처럼 느껴진다 / The caret alone tells the viewer which segment is active, so the input feels alive.

- 입력창에 브랜드어나 검증 결과처럼 구간별 의미가 다른 글을 타이핑할 때 / When typing text whose segments carry different meaning, such as a brand word or a verification result
- AI가 답을 쓰는 화면에서 현재 초점 구간을 조용히 알려 줄 때 / When an AI answer streams and you want to quietly mark the active segment

좋은 예 / Good: "승인" 두 글자를 칠 때 커서가 초록으로 바뀌고 입력이 멈추면 0.2초 뒤 다시 흰색으로 깜빡인다
나쁜 예 / Bad: 구간마다 색을 6가지 이상 쓰거나 깜빡임을 0.3초 이하로 줄여 글자보다 커서가 더 눈에 띈다
주의 / Avoid: 색 전환은 즉시(0ms)로 한다. 부드럽게 바꾸면 이전 구간 색이 잔상처럼 남는다 · 타이핑 중에는 깜빡임을 멈추고 고정 점등한다. 깜빡이는 커서는 읽기를 방해한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 깜빡임 주기 | 0.9s | 0.6~1.2s | 켜짐 50%, 꺼짐 50% |
| 입력 유예 | 0.2s | 0.1~0.4s | 마지막 글자 후 이 시간이 지나야 깜빡임 재개 |
| 색 전환 | 0ms | 0ms 고정 | 구간 경계에서 즉시 교체 |
| 커서 두께 | 3px | 2~4px | 1920x1080, 글자 크기 48px 기준 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
const caret = document.querySelector('.caret');
const seg = t => t < 1.2 ? '#fff' : t < 2.0 ? '#3ddc84' : '#fff';
function render(t){
  const typing = (t % 0.15) < 0.15 && t < 2.6;
  const blink = Math.floor((t - 2.6) / 0.45) % 2 === 0;
  caret.style.background = seg(t);
  caret.style.opacity = typing || blink ? 1 : 0;
}
tl.eventCallback('onUpdate', () => render(tl.time()));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 입력창에 문맥 반응 커서를 넣어줘. 커서 두께 3px, 깜빡임 0.9초 주기(켜짐 50%), 타이핑 중에는 고정 점등, 마지막 글자 뒤 0.2초에 깜빡임 재개. 구간 경계에서 색은 0ms로 즉시 바꾸고, 시간 t의 함수로만 그려 seek해도 같은 결과가 나오게 해.
```

### 한국어 · Codex
```text
<파일>의 타이핑 장면에 문맥 반응 커서를 적용해. 커서 색은 t<1.2s 흰색, 1.2~2.0s 초록, 이후 흰색으로 하고 깜빡임은 0.9초 주기, 유예 0.2초로 계산한다. Math.random 없이 t의 함수만 쓰고, 0.6초·1.5초·3.0초 시점을 캡처해 색이 흰색, 초록, 깜빡임 상태로 나오는지 확인해.
```

### English · Claude Code
```text
Add a context-reactive caret to <target>. Use these settings: caret width 3px; blink period 0.9s at 50% duty; solid while typing; blinking resumes 0.2s after the last character. Switch color at segment boundaries in 0ms. Draw it as a pure function of time t so seeking gives identical results.
```

### English · Codex
```text
Apply a context caret to the typing scene in <file>. Caret color: white for t<1.2s, green from 1.2 to 2.0s, white afterwards; blink period 0.9s with a 0.2s idle delay. No Math.random, only functions of t. Capture at 0.6s, 1.5s and 3.0s and confirm white, green, and blinking states.
```

예시 / Example: 문맥 반응 커서를 `.hero`에 적용해. / Apply Context Caret to `.hero`.

## 적용 / Application

- HyperFrames: 시간 t 하나에서 커서 색과 점멸을 계산하는 순수 함수로 만든다. paused 타임라인의 onUpdate에서 호출하면 seek 시점마다 같은 상태가 나온다
- ReelForge: 씬 브리프에 구간별 색표와 유예 0.2초, 깜빡임 0.9초를 파라미터로 싣는다. 입력 문자열은 브리프 텍스트를 그대로 쓴다
- Scrolline Deck: 진행률 0~1을 글자 수로 환산해 입력 위치를 정한다. 스크롤을 멈추면 커서만 깜빡이므로 점멸은 CSS steps 애니메이션으로 분리한다

조합 / Pair with: [타자기 · Typewriter](../typewriter/) · [스크램블 · Text Scramble](../text-scramble/) · [타이핑 입력 · Typing Input](../typing-input/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/context-sensitive-cursor.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
