# Nº 233 무한 캔버스 팬 · Infinite Canvas Pan

![무한 캔버스 팬 · Infinite Canvas Pan](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**여섯 도판이 이어진 긴 지면을 가로 5400px 이동해 마지막 초점에 멈춘다**

A continuous 5,400px camera pan across six editorial plates settles on a scarlet focus.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 주목 끌기, 순서·흐름, 전환 | 설명 영상, 숏폼, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: 무한 지면 팬, Long canvas pan

## 선택 기준 / Selection

정보가 한 지면 위에서 이어지고 있다는 연속성과 넓은 범위 / Continuity and breadth across a single connected canvas.

- 여러 단계나 수치를 한 지면의 흐름으로 보여줄 때 / Connect several steps or statistics across one editorial canvas.
- 넓은 지도나 편집 지면을 따라 시선을 이동할 때 / Guide attention across a wide map or composition.

좋은 예 / Good: 6개 도판을 1080px 간격으로 놓고 4.3초 동안 5400px 팬한 뒤 마지막 주홍 원에 0.5초 정지한다
나쁜 예 / Bad: 도판마다 별도 컷을 넣거나 이동 거리가 짧아 일반 슬라이드처럼 보인다
주의 / Avoid: 도판 사이에 화면 전체가 비는 간격을 두지 않는다 · 중간 도판마다 멈추지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 월드 이동 | −5400px | 4000~6500px | 6개 도판의 마지막 위치에 정렬 |
| 도판 간격 | 1080px | 960~1168px | 인접 도판이 자연스럽게 연결 |
| 이동 시간 | 4.3s | 3.5~4.5s | 5초 중 마지막 0.5초 홀드 |
| 이징 | sine.inOut | sine.inOut | 한 번의 긴 이동 |

## 구현 / Implementation (GSAP)

```js
const tl = Motion.timeline();
tl.to('#world', {x:-5400, duration:4.3, ease:'sine.inOut'}, .2);
Motion.ready();
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 6개 도판을 1080px 간격으로 배치하고 월드 래퍼를 x 0에서 −5400px로 0.2초부터 4.3초간 sine.inOut 이동한다. 전체 5초이며 마지막 0.5초는 정지한다. 종이·먹·주홍 한 점과 큰 숫자·세리프 문장을 사용하고 타이머 없이 한 GSAP 타임라인으로 구현한다.
```

### 한국어 · Codex
```text
<파일>에 6개 도판을 1080px 간격으로 배치하고 월드 래퍼를 x 0에서 −5400px로 0.2초부터 4.3초간 sine.inOut 이동한다. 전체 5초이며 마지막 0.5초는 정지한다. 0.4초·2.1초·3.7초·4.8초를 캡처해 서로 다른 도판이 이어지고 마지막 주홍 원이 온전히 보이는지 확인한다.
```

### English · Claude Code
```text
Apply this effect to <대상>. Place six editorial plates 1,080px apart. Move the world wrapper from x 0 to −5,400px over 4.3 seconds with sine.inOut, starting at 0.2 seconds, then hold until 5 seconds. Use paper, ink, a single scarlet focus, large numerals and serif text in one seekable GSAP timeline.
```

### English · Codex
```text
Implement in <파일>. Place six editorial plates 1,080px apart. Move the world wrapper from x 0 to −5,400px over 4.3 seconds with sine.inOut, starting at 0.2 seconds, then hold until 5 seconds. Capture 0.4, 2.1, 3.7 and 4.8 seconds to verify continuous travel and an intact final scarlet focus.
```

예시 / Example: 무한 캔버스 팬를 `.hero`에 적용해. / Apply Infinite Canvas Pan to `.hero`.

## 적용 / Application

- HyperFrames: 6개 도판을 1080px 간격으로 배치하고 월드 래퍼를 x 0에서 −5400px로 0.2초부터 4.3초간 sine.inOut 이동한다. 전체 5초이며 마지막 0.5초는 정지한다 하나의 paused 타임라인에서 프록시와 월드 이동을 관리한다.
- ReelForge: 6개 도판을 1080px 간격으로 배치하고 월드 래퍼를 x 0에서 −5400px로 0.2초부터 4.3초간 sine.inOut 이동한다. 전체 5초이며 마지막 0.5초는 정지한다 효과 씬의 월드 이동과 단계 수를 파라미터로 노출한다.
- Scrolline Deck: 6개 도판을 1080px 간격으로 배치하고 월드 래퍼를 x 0에서 −5400px로 0.2초부터 4.3초간 sine.inOut 이동한다. 전체 5초이며 마지막 0.5초는 정지한다 재생 시간 대신 스크롤 진행률 0~1을 같은 진행 구간으로 매핑한다.

조합 / Pair with: [팬 · Pan](../pan/) · [패럴랙스 · Parallax](../parallax/) · [휩팬 · Whip Pan](../whip-pan/)

출처 / Sources: [GSAP Tween documentation](https://gsap.com/docs/v3/GSAP/Tween/) (공식 문서 개념 참조)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
