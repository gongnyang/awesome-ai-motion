# Nº 119 고정 슬롯 단어 순환 · Word Slot Cycle

> 클립 렌더 예정 / Clip rendering planned.

**문장의 고정 부분은 그대로 두고 한 단어 자리만 다른 단어로 순환해 바뀌는 효과**

The fixed part of a sentence stays put while one word slot cycles through alternatives.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 설명, 브랜딩, 주목 끌기 | 숏폼, 설명 영상, 웹 UI | gsap |

다른 이름 / Also known as: Fixed slot word cycle, Line swap, 줄 교체, Rotating Word Loop, 단어 순환 교체, Headline Slot Ticker, 헤드라인 슬롯 티커, Shared Axis Text Swap

## 선택 기준 / Selection

하나의 문장 틀에 여러 선택지가 들어간다. 다양성과 범용성이 전달된다 / One sentence frame carries many options, signalling range and variety.

- "AI로 ___를 만든다"처럼 한 틀에 여러 용도를 보여 줄 때 / When showing many uses in one frame, such as "Build ___ with AI"
- 제품 헤드라인에서 대상 고객이나 기능을 돌아가며 보여 줄 때 / When a product headline rotates through audiences or features

좋은 예 / Good: "당신의 ___ 팀을 위한" 문장에서 슬롯이 0.5초 멈추고 0.25초에 위로 밀려 다음 단어로 바뀐다. 슬롯 폭은 가장 긴 단어에 맞춰 고정이다
나쁜 예 / Bad: 단어가 바뀔 때마다 문장 전체가 좌우로 밀려 눈이 따라다녀야 한다
주의 / Avoid: 슬롯 폭을 가장 넓은 단어 기준으로 고정하고 나머지 문장은 움직이지 않게 한다 · 한 단어 노출이 0.5초 미만이면 읽지 못한다. 단어는 4~6개 이내로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단어 정지 | 0.6s | 0.5~1.0s | 읽을 시간 |
| 교체 시간 | 0.25s | 0.2~0.35s | 나가는 단어와 들어오는 단어가 겹침 |
| 이동 거리 | 0.6em | 0.4~0.8em | 위로 나가고 아래에서 들어옴 |
| 블러 나감 | 4px | 0~6px | 나가는 단어만 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const words = ['디자인','영업','교육','연구'];
words.forEach((w, i) => {
  const t = 0.4 + i * 0.85;
  if (i) tl.to(cur(i-1), {yPercent:-60, opacity:0, duration:0.25, ease:'power2.in'}, t - 0.25)
           .fromTo(cur(i), {yPercent:60, opacity:0}, {yPercent:0, opacity:1, duration:0.25, ease:'power2.out'}, t - 0.25);
});
// 슬롯 span은 position:absolute, 부모 width는 가장 긴 단어 폭으로 고정
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 고정 슬롯 단어 순환을 만들어줘. 문장 틀은 고정하고 빈 자리에 단어 4개(<단어들>)를 0.6초 정지, 0.25초 교체(위로 나가며 opacity 0, 아래에서 들어옴)로 돌려. 슬롯 폭은 가장 긴 단어에 맞춰 고정해 문장이 밀리지 않게 하고, 조사는 슬롯 밖에 둬.
```

### 한국어 · Codex
```text
<파일>의 헤드라인에 word slot cycle을 적용해. 슬롯 span은 absolute로 겹치고 부모 폭은 가장 긴 단어 offsetWidth로 고정. 단어당 주기 0.85초(정지 0.6, 교체 0.25), yPercent ±60. 0.5초·1.2초 시점을 캡처해 문장 나머지 부분의 x 좌표가 두 프레임에서 동일한지 확인해.
```

### English · Claude Code
```text
Build a fixed-slot word cycle in <target>. Keep the sentence frame static and cycle 4 words (<words>) in the blank: hold 0.6s, swap over 0.25s (outgoing rises and fades, incoming enters from below). Fix the slot width to the widest word so nothing reflows; keep Korean postpositions outside the slot.
```

### English · Codex
```text
Apply word slot cycle to the headline in <file>. Absolutely stack slot spans; fix the parent width to the widest word offsetWidth. Period 0.85s per word (0.6 hold, 0.25 swap), yPercent +/-60. Capture at 0.5s and 1.2s and verify the x position of the rest of the sentence is identical in both frames.
```

예시 / Example: 고정 슬롯 단어 순환를 `.hero`에 적용해. / Apply Word Slot Cycle to `.hero`.

## 적용 / Application

- HyperFrames: 슬롯 안 단어들을 겹쳐 놓고 opacity와 yPercent만 보간한다. 폭은 document.fonts.ready 이후 offsetWidth로 측정해 고정한다
- ReelForge: 브리프에 단어 배열, 정지 0.6초, 교체 0.25초, 고정 문구를 싣는다. 한국어는 조사가 붙으면 폭이 변하므로 조사를 슬롯 밖에 둔다
- Scrolline Deck: 단어 수 N으로 진행률을 N등분해 구간마다 교체한다. 구간 사이에는 홀드를 둬서 스크롤을 멈춘 상태에서도 단어가 읽힌다

조합 / Pair with: [스크램블 · Text Scramble](../text-scramble/) · [대형 키네틱 타이포 스윕 · Kinetic Type Sweep](../kinetic-type-sweep/) · [단어 강조 · Word Emphasis](../word-emphasis/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/kinetic-type-swap/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/fixed-anchor-cycle.md`) (unknown) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/line-swap/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shared-axis-y/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/blur-out-up/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
