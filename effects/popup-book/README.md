# Nº 573 팝업북 전개 · Pop-up Book

> 클립 렌더 예정 / Clip rendering planned.

**책 페이지가 열리며 접힌 종이 구조가 솟아올라 하나의 장면을 만든다**

A book's pages open and folded paper structures rise up to form a scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 분위기, 전환 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Pop-up book deployment, 팝업북 펼침, Popup hinge

## 선택 기준 / Selection

설명 속의 세계가 눈앞에서 세워지는 느낌을 준다. 이야기의 시작이나 새 챕터의 문을 여는 데 어울린다 / Gives the feeling of a world being built before the viewer's eyes. Suits story openings and chapter starts.

- 챕터가 시작될 때 책이 열리며 장면이 세워지는 도입을 만들 때 / Open a chapter with a book opening and building its scene.
- 도시나 방 같은 공간을 종이 구조로 소개할 때 / Introduce a city or room as a paper structure.

좋은 예 / Good: 1800ms 동안 책 페이지가 110도 열리고, 종이 구조물이 0에서 80도로 세워진다. 이징 easeInOut
나쁜 예 / Bad: 페이지와 구조물이 동시에 같은 속도로 움직여 종이가 접힌다는 인상이 없다. 그림자가 없어 평면 스티커처럼 보인다
주의 / Avoid: 구조물은 페이지가 절반 이상 열린 뒤 세운다 · 각 종이 면에 그림자를 준다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1800ms | 1400~2400ms |  |
| 페이지 각도 | 110도 | 90~140도 | rotateX 또는 rotateY |
| 구조 각도 | 0→80도 | 60~90도 | 페이지가 열린 뒤 시작 |
| perspective | 1600px | 1200~2000px |  |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
gsap.set('.book', { perspective: 1600, transformStyle: 'preserve-3d' });
tl.to('.page-r', { rotateY: -110, transformOrigin: '0% 50%', duration: 1.0, ease: 'power2.inOut' }, 0.3)
  .to('.pop', { rotateX: -80, transformOrigin: '50% 100%', duration: 0.9, ease: 'back.out(1.2)', stagger: 0.12 }, 0.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 도입에 팝업북 전개를 넣어줘. 컨테이너 perspective 1600px, 오른쪽 페이지를 0.3초부터 1초 동안 rotateY -110도 power2.inOut으로 열고, 0.9초부터 종이 구조물 3개를 rotateX -80도로 0.12초 간격 stagger로 세워. 각 면에는 부드러운 그림자.
```

### 한국어 · Codex
```text
<파일>에 popup book을 구현해. perspective 1600, .page-r rotateY 0→-110 / 1s / power2.inOut / origin 왼쪽, .pop rotateX 0→-80 / 0.9s / stagger 0.12 / origin 아래. 0.8초, 1.4초, 2.1초를 캡처해 페이지가 먼저 열리고 구조물이 뒤이어 서는지, 최종 각도가 80도인지 확인해.
```

### English · Claude Code
```text
Add a pop-up book reveal to the intro of <target>. Set container perspective 1600px, open the right page from 0.3 seconds with rotateY -110 degrees over 1s using power2.inOut, and from 0.9 seconds raise 3 paper structures to rotateX -80 degrees with a 0.12s stagger. Give every face a soft shadow.
```

### English · Codex
```text
Implement a popup book in <file>: perspective 1600, .page-r rotateY 0 to -110 / 1s / power2.inOut / origin left, .pop rotateX 0 to -80 / 0.9s / stagger 0.12 / origin bottom. Capture at 0.8s, 1.4s and 2.1s and verify the page opens first, the structures rise after it, and the final angle is 80 degrees.
```

예시 / Example: 팝업북 전개를 `.hero`에 적용해. / Apply Pop-up Book to `.hero`.

## 적용 / Application

- HyperFrames: CSS 3D 변환을 GSAP로 tween한다. transformOrigin은 미리 set으로 지정하고 seek해도 같은 각도
- ReelForge: 씬 브리프에 페이지 각도, 구조물 목록과 세우는 순서, 종이 색을 싣는다
- Scrolline Deck: 진행률 0~0.55에 페이지, 0.5~1에 구조물을 걸어 겹치게 한다. back.out은 scrub에서 튀므로 power2.out 사용

조합 / Pair with: [페이지 턴 · Page Turn](../page-turn/) · [힌지 리빌 · Hinge Reveal](../hinge-reveal/) · [3D 조립 · Depth Assemble](../depth-assemble/)

출처 / Sources: [TED-Ed](https://ed.ted.com/lessons/making-a-ted-ed-lesson-bringing-a-pop-up-book-to-life) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
