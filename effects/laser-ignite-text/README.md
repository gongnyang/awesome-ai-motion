# Nº 630 레이저 점화 · Laser Ignite Text

> 클립 렌더 예정 / Clip rendering planned.

**두 광선이 단어 자리에 모이고 그 접점에서 글자가 켜지는 레이저 점화 효과**

Two beams converge on the word position and the letters ignite at the point of contact.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 고급 | 주목 끌기, 분위기, 브랜딩 | 숏폼, 제품 시연, 설명 영상 | svg |

다른 이름 / Also known as: Laser ignite

## 선택 기준 / Selection

빛으로 정보를 만들어 낸다는 무대감. 단어가 에너지로 태어나는 순간이 있다 / A stage-like sense of information being made from light: the word is born as energy.

- 제품명·슬로건을 극적으로 처음 공개하는 순간 / The dramatic first reveal of a product name or slogan
- 어두운 배경의 타이틀 오프닝 / Title openers on dark backgrounds

좋은 예 / Good: 두 광선이 화면 양쪽에서 2프레임 먼저 단어 중심에 도달하고 100ms 안에 글자가 켜진 뒤 300ms 동안 빛이 감쇠한다
나쁜 예 / Bad: 광선이 글자와 동시에 그려지거나 광선이 도착하기 전에 글자가 켜져 원인과 결과가 뒤바뀐다
주의 / Avoid: 광선이 글자보다 최소 2프레임(0.067초) 먼저 도착해야 한다 · 발광 감쇠 후에는 글자만 또렷이 남긴다. 번짐이 남으면 안 된다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 광선 이동 | 0.35s | 0.25~0.5s | 양쪽에서 중심으로 |
| 선행 | 2프레임 | 2~4 | 글자보다 먼저 도착 |
| 점화 | 100ms | 80~150ms | 글자 opacity와 glow |
| 빛 감쇠 | 300ms | 200~500ms | text-shadow 소멸 |

이징 / Ease: `power3.in (광선) / power2.out (감쇠)`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.beam.l', {x:-700, opacity:1}, {x:0, duration:0.35, ease:'power3.in'}, 0.2)
  .fromTo('.beam.r', {x:700, opacity:1}, {x:0, duration:0.35, ease:'power3.in'}, 0.2)
  .set('.word', {opacity:1}, 0.6)
  .fromTo('.word', {textShadow:'0 0 40px #7cf'}, {textShadow:'0 0 0px #7cf', duration:0.3, ease:'power2.out'}, 0.6)
  .to('.beam', {opacity:0, duration:0.1}, 0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 단어를 레이저로 점화해줘. 양쪽에서 광선 두 줄이 0.35초 power3.in으로 단어 중심에 도착하고, 그보다 2프레임 뒤에 글자가 켜지며 40px glow가 0.3초 동안 감쇠해. 광선은 도착 0.1초 후 사라지고 글자만 남아.
```

### 한국어 · Codex
```text
<파일>에 laser ignite text를 적용해. .beam.l/.r x ±700에서 0을 0.2초부터 0.35초 power3.in, .word를 0.6초에 set opacity 1, textShadow 40px에서 0을 0.3초 power2.out, 광선 소멸 0.6초에 0.1초. 0.5초·0.62초·1.2초를 캡처해 광선 도착 전 글자가 없음, 점화 직후 glow, 감쇠 후 선명한 글자를 확인해.
```

### English · Claude Code
```text
Ignite the word in <target> with lasers. Two beams reach the word center from both sides in 0.35s power3.in; 2 frames later the letters switch on with a 40px glow that decays over 0.3s. The beams disappear 0.1s after arrival, leaving only crisp text.
```

### English · Codex
```text
Apply laser ignite text in <file>. .beam.l/.r x +/-700 to 0 from 0.2s over 0.35s power3.in; set .word opacity 1 at 0.6s; textShadow 40px to 0 over 0.3s power2.out; beams fade at 0.6s over 0.1s. Capture at 0.5s, 0.62s and 1.2s: no text before arrival, glow at ignition, crisp text after decay.
```

예시 / Example: 레이저 점화를 `.hero`에 적용해. / Apply Laser Ignite Text to `.hero`.

## 적용 / Application

- HyperFrames: 광선은 얇은 그라데이션 div의 x 이동. 글자는 set으로 켜고 glow만 tween한다. 도착 시각을 상수로 두어 프레임 정확도를 확보한다
- ReelForge: 브리프에 단어, 광선 색, 이동 0.35초, 선행 2프레임, 점화 100ms, 감쇠 300ms를 싣는다
- Scrolline Deck: 진행률에서 광선 도착 임계와 점화 임계를 분리한다. 임계 사이에 2프레임 분량 간격을 둔다

조합 / Pair with: [홀로그램 부팅 · Hologram Text Boot](../hologram-text-boot/) · [조준선 자막 · Crosshair Caption](../crosshair-caption/) · [글자 광선 · Text Light Rays](../text-light-rays/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
