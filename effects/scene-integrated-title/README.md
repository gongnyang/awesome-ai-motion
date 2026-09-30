# Nº 107 장면 통합 타이틀 · Scene Integrated Title

> 클립 렌더 예정 / Clip rendering planned.

**제목 글자가 장면의 선이나 인물 동선과 맞물려 드러나고 가려지는 효과**

The title is revealed and hidden in step with lines or character paths inside the scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 브랜딩, 분위기 | 설명 영상, 숏폼 | svg |

다른 이름 / Also known as: Integrated Diegetic Title, 장면에 통합된 타이틀

## 선택 기준 / Selection

제목이 이야기 세계 안에 놓여 있다는 느낌을 준다. 자막이 아니라 장면의 일부로 읽힌다 / Places the title inside the story world so it reads as part of the scene rather than a caption.

- 영상 오프닝에서 제목이 사물 뒤로 지나가게 할 때 / Let a title pass behind an object in an opening.
- 건물·기둥 같은 선과 글자를 정렬해 등장시킬 때 / Align letters with lines such as columns or buildings as they appear.

좋은 예 / Good: 제목이 건물 실루엣 뒤에 있다가 인물이 지나가는 2초 동안 같은 속도로 마스크가 열려 글자가 드러난다
나쁜 예 / Bad: 마스크 이동이 장면 오브젝트와 다른 속도여서 글자가 배경과 따로 노는 것처럼 뜬다
주의 / Avoid: 마스크 시간표를 장면 오브젝트와 반드시 같은 값으로 맞춘다 · 전경 마스크 없이 글자만 얹지 않는다 · 장면이 복잡하면 글자 대비를 확보한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 장면 연동 시간 | 2s | 1.5~3s | 오브젝트 이동과 동일 |
| 마스크 이동 | 오브젝트와 동일 px | - | 같은 tween에서 구동 |
| 글자 불투명도 | 1 | 0.9~1 | 깊이감을 위해 살짝 낮출 수 있음 |
| 이징 | 오브젝트와 동일 | none~power2.inOut | 동기 필수 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
/* 전경 마스크 이미지(.fg, 알파 있음)가 제목(.title) 위에 겹침 */
tl.to('.actor', { x: 900, duration: 2, ease: 'power1.inOut' }, 0)
  .to('.fg-mask', { x: 900, duration: 2, ease: 'power1.inOut' }, 0)
  .fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면에서 제목 '<문구>'가 전경 오브젝트(<오브젝트>) 뒤에 놓이게 레이어를 나눠줘. 오브젝트와 전경 마스크가 2초 동안 x 900px을 power1.inOut으로 함께 움직이고, 그 사이 제목이 0.9초부터 0.6초 동안 나타나게 해. 오브젝트와 마스크의 tween 값은 항상 동일해야 해.
```

### 한국어 · Codex
```text
<파일>에서 .actor와 .fg-mask를 동일한 x, duration, ease의 tween으로 구동하고 제목은 그 뒤 레이어에 둬. 0.5초에 제목이 가려져 있고 1.5초에 일부만 드러나 있으며 2.5초에 완전히 읽히는지 캡처로 확인해. 마스크와 오브젝트 x 값이 각 시점에 같은지 스크립트로 검사해.
```

### English · Claude Code
```text
In the <target> scene put the title '<text>' behind the foreground object (<object>) by splitting layers. The object and the foreground mask move x 900px together over 2 seconds with power1.inOut, while the title fades in from 0.9 seconds over 0.6 seconds. The object and mask tween values must always be identical.
```

### English · Codex
```text
In <file> drive .actor and .fg-mask with the same x, duration and ease, and put the title on a layer behind. Capture at 0.5s (title hidden), 1.5s (partly revealed) and 2.5s (fully readable), and check by script that the mask and object x values match at each time.
```

예시 / Example: 장면 통합 타이틀를 `.hero`에 적용해. / Apply Scene Integrated Title to `.hero`.

## 적용 / Application

- HyperFrames: 오브젝트와 마스크를 같은 tween 객체나 같은 position 값으로 묶는다. 마스크 알파 PNG를 미리 준비해 레이어 순서 title, fg-mask 순으로 쌓는다
- ReelForge: 장면 생성 후 전경 알파 컷아웃을 별도 자산으로 요청하도록 브리프에 명시한다. 없으면 이 효과는 쓰지 않는다
- Scrolline Deck: 오브젝트 이동과 마스크 이동을 같은 진행률 값으로 함께 매핑한다. 정지해도 제목이 가려진 상태가 어색하지 않게 홀드 지점을 마스크가 열린 위치에 둔다

조합 / Pair with: [역방향 매트 · Counter Moving Matte](../counter-moving-matte/) · [마스크 리빌 · Mask Reveal](../mask-reveal/) · [패럴랙스 · Parallax](../parallax/)

출처 / Sources: [Art of the Title](https://www.artofthetitle.com/title/catch-me-if-you-can/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
