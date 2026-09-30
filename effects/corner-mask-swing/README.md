# Nº 033 코너 매트 스윙 · Corner Mask Swing

> 클립 렌더 예정 / Clip rendering planned.

**가리는 판이 모서리를 축으로 회전하며 뒤의 내용을 연다.**

An opaque cover rotates around a corner to reveal content.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: corner-swing-mask

## 선택 기준 / Selection

문이나 덮개를 젖히는 공개를 느낀다. / Suggests lifting a lid or swinging a door aside.

- 덮개를 젖혀 제품을 공개할 때 / Use when presenting corner mask swing in a content reveal scene.
- 모서리 방향을 강조하는 전환에 쓸 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 불투명 덮개가 좌상단 축으로 돌아 사진을 연다.
나쁜 예 / Bad: 판 크기가 작아 시작부터 사진 일부가 노출된다.
주의 / Avoid: 판 크기가 작아 시작부터 사진 일부가 노출된다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.6s | 0.42~0.84s | 0초부터 시작하는 공개 구간 |
| 회전 | 90deg | 80~110deg | 가림판을 프레임 밖으로 회전 |
| 앵커 | 0% 0% | 네 모서리 | 판 크기는 프레임 덮음 |
| 이징 | power3.out | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.frame', {overflow:'hidden'});
gsap.set('.cover', {transformOrigin:'0% 0%', rotation:0});
tl.to('.cover', {rotation:90, duration:0.6, ease:'power3.out'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 코너 매트 스윙을 적용해. 0.6초, 회전 90deg; 앵커 0% 0%, 이징 power3.out로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 코너 매트 스윙을 적용해. 0.6초, 회전 90deg; 앵커 0% 0%, power3.out를 사용하고 0초, 0.3초, 0.6초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Corner Mask Swing to <target> in <file>. Use a 0.6s segment with power3.out; implement these explicit settings: Rotation: 90deg, Transform origin: 0% 0%. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Corner Mask Swing to the <target> layer in <file> with Rotation: 90deg, Transform origin: 0% 0%, using the supplied core snippet and a 0.6s segment with power3.out. Capture at 0s, 0.3s, and 0.6s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 코너 매트 스윙를 `.hero`에 적용해. / Apply Corner Mask Swing to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.6초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 코너 매트 스윙, 0.6초, 회전 90deg; 앵커 0% 0%, power3.out를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 0.6초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#corner-swing-mask`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
