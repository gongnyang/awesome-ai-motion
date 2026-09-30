# Nº 496 네온 글자 점멸 · Neon Sign Flicker

> 클립 렌더 예정 / Clip rendering planned.

**발광 글자의 밝기와 외곽 빛이 불규칙하게 꺼졌다 켜지는 효과**

A glowing sign's brightness and halo cut in and out irregularly.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 주목 끌기 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Neon Text Flicker

## 선택 기준 / Selection

야간 간판과 전기의 분위기를 준다. 불안정하게 켜지는 순간이 등장의 긴장을 만든다 / Evokes night signage and electricity; the unstable switch-on builds tension in the entrance.

- 밤 도시, 바, 사이버 분위기 장면의 타이틀일 때 / Title a night-city, bar, or cyber-mood scene.
- 제목이 '켜지는' 등장을 원할 때 / Give a title a 'switching on' entrance.

좋은 예 / Good: 네온 제목이 2초 동안 8번 점멸한 뒤 glow 16px로 안정되고, 마지막에는 꺼짐 없이 유지된다
나쁜 예 / Bad: 점멸이 20회 넘게 이어져 눈이 아프고, 안정된 뒤에도 미세하게 계속 깜빡인다
주의 / Avoid: 점멸 횟수 10회 초과 금지 · 점멸 패턴은 고정 배열로(랜덤 금지) · 안정 후 깜빡임 유지 금지(접근성)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점멸 횟수 | 8 | 5~10 | 2초 안 |
| 총 시간 | 2s | 1.2~3s | 켜짐 안정까지 |
| glow 반경 | 16px | 10~28px | text-shadow |
| 이징 | steps(1) | steps(1) | 계단식 명암 |

## 구현 / Implementation (GSAP)

```js
const seq = [0, 1, 0, 0.6, 0, 1, 0.3, 1, 0.5, 1];
seq.forEach((v, i) => {
  tl.set('.neon', { opacity: v || 0.05, textShadow: `0 0 ${v * 16}px #ff2d95, 0 0 ${v * 40}px #ff2d95` }, i * 0.2);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목 '<문구>'를 네온 사인처럼 켜지게 해줘. 2초 동안 고정 배열 [0,1,0,0.6,0,1,0.3,1,0.5,1] 밝기로 0.2초 간격 점멸하고, 밝기에 비례해 text-shadow glow(16px, 40px 두 겹)를 켜. 마지막에는 밝기 1로 안정되고 이후 깜빡이지 않아. 난수는 쓰지 마.
```

### 한국어 · Codex
```text
<파일>에 고정 밝기 배열로 tl.set 점멸을 구성해(0.2초 간격 10단계). 0.1초에 꺼짐, 1.9초 이후 밝기 1이고 text-shadow가 유지되는지 캡처로 확인하고, 2.5초와 4초 프레임이 동일한지도 비교해.
```

### English · Claude Code
```text
Make the title '<text>' in <target> light up like a neon sign. Over 2 seconds flicker through the fixed brightness array [0,1,0,0.6,0,1,0.3,1,0.5,1] at 0.2 second steps, with a two-layer text-shadow glow (16px, 40px) proportional to brightness. It settles at brightness 1 and never flickers again. No random values.
```

### English · Codex
```text
In <file> build the flicker with tl.set on a fixed brightness array (10 steps, 0.2s apart). Capture at 0.1s (off), after 1.9s (brightness 1 with the text-shadow present), and confirm the frames at 2.5s and 4s are identical.
```

예시 / Example: 네온 글자 점멸를 `.hero`에 적용해. / Apply Neon Sign Flicker to `.hero`.

## 적용 / Application

- HyperFrames: 고정 배열로 tl.set을 놓는다. setInterval이나 Math.random을 쓰면 seek 결과가 달라지므로 금지
- ReelForge: 타이포 씬에 색, glow 반경, 점멸 배열을 파라미터로 싣고 점멸 패턴 프리셋 이름을 받는다
- Scrolline Deck: 점멸 배열 인덱스를 진행률에 매핑한다. 스크롤이 멈추면 마지막 안정 상태로 스냅되도록 진행률 0.8 이후는 값 1로 고정한다

조합 / Pair with: [플리커 리빌 · Flicker Reveal](../flicker-reveal/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [글자 광선 · Text Light Rays](../text-light-rays/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [magicuidesign/magicui](https://github.com/magicuidesign/magicui) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
