# Nº 622 원형 글자 회전 · Circular Text Spin

> 클립 렌더 예정 / Clip rendering planned.

**원 둘레에 놓인 문장이 중심을 축으로 계속 회전하는 효과**

A sentence set around a circle rotates continuously about its center.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 브랜딩, 분위기 | 웹 UI, 숏폼, 발표 | svg |

다른 이름 / Also known as: Spinning Circular Text, Circular Text Orbit, 원형 텍스트 회전

## 선택 기준 / Selection

순환과 지속의 느낌을 준다. 배지나 스티커에 살아 있는 표정을 더한다 / Suggests cycling and continuity and gives badges or stickers a living expression.

- 'SCROLL DOWN' 같은 원형 배지에 회전을 줄 때 / Spin a circular 'SCROLL DOWN' badge.
- 반복 슬로건을 인장처럼 돌릴 때 / Rotate a repeated slogan like a seal.

좋은 예 / Good: 반지름 60px 링에 'DESIGN * MOTION * ' 문구가 12초에 한 바퀴, 등속으로 시계 방향 회전한다
나쁜 예 / Bad: 회전이 너무 빨라(3초 이하) 읽을 수 없고 가속·감속이 걸려 덜컹거린다
주의 / Avoid: 한 바퀴 6초 미만 금지 · 문구 끝과 처음이 이어지는 구분 기호 없이 두지 않는다 · 중요한 정보는 회전 글자에만 두지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 한 바퀴 | 12s | 8~20s | 읽을 수 있는 속도 |
| 반지름 | 60px | 48~120px | 배지 크기 |
| 방향 | 시계 | 시계/반시계 | 동심원이면 서로 반대 |
| 이징 | none | none | 등속 필수 |

## 구현 / Implementation (GSAP)

```js
/* <svg><path id="c" d="M0,-60 a60,60 0 1,1 0,120 a60,60 0 1,1 0,-120"/><text><textPath href="#c">DESIGN * MOTION * </textPath></text></svg> */
tl.to('.ring', { rotation: 360, transformOrigin: '50% 50%', duration: 12, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배지에 문구 '<문구>'를 반지름 60px 원 경로의 textPath로 두르고, 링 전체가 12초에 360도 시계 방향으로 등속 회전하게 해줘. 문구 끝에 구분 기호를 넣어 이음새가 이어지게 하고, 이징은 none. 한글은 음절 간격이 고르게 보이도록 letter-spacing 0.08em을 줘.
```

### 한국어 · Codex
```text
<파일>의 원형 텍스트 링에 tl.to(rotation 360, 12s, none)을 건다. 0초와 12초 프레임이 동일한지, 3초 시점에 90도 회전했는지 캡처와 transform 값으로 확인하고 글자 겹침이 없는지도 봐.
```

### English · Claude Code
```text
On the badge in <target> wrap '<text>' around a 60px radius circular path as a textPath and rotate the whole ring 360 degrees clockwise at constant speed over 12 seconds, ease none. End the phrase with a separator so the seam reads continuously, and add 0.08em letter-spacing.
```

### English · Codex
```text
In <file> add tl.to on the circular text ring (rotation 360, 12s, none). Verify the frames at 0s and 12s are identical and that at 3s it has rotated exactly 90 degrees, using captures and the transform value; also check no glyphs overlap.
```

예시 / Example: 원형 글자 회전를 `.hero`에 적용해. / Apply Circular Text Spin to `.hero`.

## 적용 / Application

- HyperFrames: ring 전체를 rotation으로 돌린다. 영상 길이가 12초의 정수분이 아니면 rotation 종점을 길이에 맞춰 잘라 루프 이음새를 확인한다
- ReelForge: 루프 씬으로 만들고 한 바퀴 시간을 씬 길이의 약수로 정한다. 배지 문구는 브리프 파라미터
- Scrolline Deck: 회전각을 스크롤 진행률에 선형 매핑(1구간에 90도 등)한다. 시간 기반 무한 회전은 쓰지 않는다

조합 / Pair with: [패스 위 텍스트 · Text On Path](../text-on-path/) · [공전 루프 · Orbit Loop](../orbit-loop/) · [마키 · Marquee](../marquee/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/spinning-text) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [ibelick/motion-primitives](https://motion-primitives.com/docs/spinning-text) (MIT) · [codrops/CircularTextEffect](https://github.com/codrops/CircularTextEffect) (MIT) · [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/textPath) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
