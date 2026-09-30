# Nº 101 손글씨 쓰기 · Handwriting Write On

> 클립 렌더 예정 / Clip rendering planned.

**펜 끝이 글자의 실제 획 순서대로 움직이며 필체가 드러나는 손글씨 쓰기**

A pen tip travels along the real stroke order so the handwriting is revealed.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 분위기, 브랜딩, 설명 | 설명 영상, 숏폼, 발표 | svg |

다른 이름 / Also known as: Handwritten stroke, Handwritten write and erase, 손글씨 쓰기와 지우기, Write, Unwrite, SVG Stroke Text Draw, SVG 획 텍스트 그리기, Stitched text

## 선택 기준 / Selection

글을 직접 쓰는 사람의 손길과 속도. 개인적이고 정성스러운 인상을 준다 / The hand and pace of a person writing: personal and careful.

- 서명·인사말·손글씨 제목이 쓰이는 장면 / Signatures, greetings and handwritten titles
- 작은 단어를 감성적으로 강조할 때 / Emotionally emphasizing a small word

좋은 예 / Good: "고맙습니다"가 획마다 300~600ms, 획 사이 80ms로 곡선에서 감속하며 필기 순서대로 그려진다
나쁜 예 / Bad: 글자 폴리곤을 왼쪽에서 오른쪽으로 마스크 와이프해 획 순서와 무관하게 드러난다
주의 / Avoid: 획 경로는 폰트 외곽선이 아니라 중심선을 쓴다. 외곽선 dash는 두 겹 테두리가 생긴다 · 작은 크기 글자에는 쓰지 않는다. 획이 보여야 손글씨로 읽힌다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 획 시간 | 0.4s | 0.3~0.6s | 길이에 비례 |
| 획 사이 | 80ms | 60~120ms | 펜 이동 |
| 곡선 감속 | power2.inOut | power1~power3 | 곡선부에서 느려짐 |
| 선 굵기 | 8px | 4~12px | stroke-linecap round |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
// SVG path의 중심선, pathLength=1로 정규화
strokes.forEach((p, i) => {
  p.style.strokeDasharray = 1; p.style.strokeDashoffset = 1;
  tl.to(p, {strokeDashoffset:0, duration:0.4, ease:'power2.inOut'}, 0.2 + i * 0.48);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문구를 손글씨로 쓰이게 해줘. 중심선 SVG 획들을 pathLength 1로 정규화하고 stroke-dashoffset을 획 순서대로 1에서 0으로 애니메이션해. 획당 0.4초 power2.inOut, 획 사이 80ms, 선 굵기 8px round cap. 획 순서는 배열 순서로 고정해.
```

### 한국어 · Codex
```text
<파일>에 handwriting write-on을 적용해. 각 path의 pathLength=1, strokeDasharray 1, strokeDashoffset 1에서 0을 0.4초 power2.inOut, 시작 0.2+i*0.48. 0.5초·1.0초·끝을 캡처해 획이 순서대로 진행하는지, 완료 시 dashoffset 0으로 모든 획이 이어지는지 확인해.
```

### English · Claude Code
```text
Make the phrase in <target> write itself by hand. Normalize centerline SVG strokes with pathLength 1 and animate stroke-dashoffset 1 to 0 in stroke order: 0.4s power2.inOut per stroke, 80ms between strokes, 8px round caps. Fix the order by array order.
```

### English · Codex
```text
Apply handwriting write-on in <file>. For each path set pathLength=1, strokeDasharray 1, strokeDashoffset 1 to 0 over 0.4s power2.inOut, start 0.2+i*0.48. Capture at 0.5s, 1.0s and the end to verify strokes progress in order and dashoffset reaches 0 for all.
```

예시 / Example: 손글씨 쓰기를 `.hero`에 적용해. / Apply Handwriting Write On to `.hero`.

## 적용 / Application

- HyperFrames: pathLength=1 속성으로 dash를 정규화하면 획 길이와 무관하게 같은 코드가 된다. 획 순서는 배열 순서로 고정한다
- ReelForge: 브리프에 SVG 획 경로 배열(순서 포함), 획 0.4초, 획 사이 80ms, 굵기 8px를 싣는다. 획 SVG는 사전 준비 자산으로 받는다
- Scrolline Deck: 진행률을 전체 획 길이에 비례해 나눠 각 획의 dashoffset에 매핑한다. 획 사이 정지는 진행률 구간에 그대로 포함한다

조합 / Pair with: [패스 위 텍스트 · Text On Path](../text-on-path/) · [타자기 · Typewriter](../typewriter/) · [분필과 붓 글자 · Analog Medium Text](../analog-medium-text/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-write-title/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-path-text/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-title/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/creation.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
