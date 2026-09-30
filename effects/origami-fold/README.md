# Nº 185 종이 접기 전환 · Origami Fold Transition

> 클립 렌더 예정 / Clip rendering planned.

**장면이 여러 면으로 접혀 작아지고 새 장면이 접힌 면에서 펼쳐진다**

The scene folds into several panels and shrinks, and the new scene unfolds from the folded faces.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 설명 | 설명 영상, 제품 시연, 발표 | webgl |

## 선택 기준 / Selection

장면이 여러 면으로 접혀 작아지고 새 장면이 접힌 면에서 펼쳐진다. 구조를 접었다 펴는 입체감이다 / Gives a 3D sense of folding and revealing a complex structure.

- 구조가 복잡한 내용을 접어 정리하고 다음 내용을 펼쳐 보일 때 / To fold away complex content and unfold the next
- 종이접기, 패키지, 브로슈어 소재의 영상 / For videos about origami, packaging, or brochures

좋은 예 / Good: 장면이 4개 패널로 900ms 동안 지그재그로 접히고, 접힌 위치에서 새 장면이 순서대로 펼쳐진다
나쁜 예 / Bad: 패널 수가 2개뿐이라 단순 미러와 같고, 면마다 그림자가 없어 평면 회전으로 보인다
주의 / Avoid: 패널마다 접힘 면에 그림자를 넣는다(opacity 0.3) · 패널 수는 3~6개

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 700~1200ms | easeInOutCubic |
| 패널 수 | 4 | 3~6 | 480px 폭 |
| 접힘 각도 | ±90deg | 80~90deg | 지그재그 |
| 패널 시차 | 60ms | 40~100ms | 순차 |
| 그림자 opacity | 0.3 | 0.2~0.4 | 접힌 면 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
gsap.set('.stage', { perspective: 2000 });
for (let i = 0; i < 4; i++) {
  tl.to(`.panel-${i}`, { rotationY: i % 2 ? 90 : -90, transformOrigin: i % 2 ? '100% 50%' : '0% 50%', duration: 0.5, ease: 'power3.inOut' }, i * 0.06);
  tl.to(`.shade-${i}`, { opacity: 0.3, duration: 0.5, ease: 'none' }, i * 0.06);
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 종이 접기 전환을 넣어줘. 부모 perspective 2000px, 이전 장면을 폭 480px 패널 4개로 나눠 패널 i가 i*0.06초 늦게 rotationY 짝수 -90, 홀수 90도로 0.5초 power3.inOut으로 접히게 하고, 같은 시각 그림자 레이어 opacity를 0.3까지 올려. 접힌 뒤 새 장면이 펼쳐지게 하고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 종이 접기 전환을 구현해. perspective 2000, .panel-i rotationY 짝수 -90, 홀수 90, 0.5초 power3.inOut, position i*0.06, .shade-i opacity 0.3. 그 뒤 새 장면 패널들이 반대로 펼침. 0.2초, 0.4초, 0.6초, 0.9초 시점을 캡처해 접힘 면에 그림자가 있는지, 0.9초에 새 장면이 전체인지 확인해.
```

### English · Claude Code
```text
Add an Origami Fold to <target>. Set perspective 2000px and split the previous scene into 4 panels of 480px. Panel i starts i*0.06s later and rotates on Y to -90 (even) or 90 (odd) over 0.5s with power3.inOut, while a shade layer rises to opacity 0.3. Then unfold the new scene the same way in reverse. Paused, seekable timeline.
```

### English · Codex
```text
Implement Origami Fold in <file>. perspective 2000; .panel-i rotationY -90 (even) or 90 (odd), 0.5s power3.inOut, position i*0.06; .shade-i opacity 0.3. Then unfold the new scene panels in reverse. Capture at 0.2s, 0.4s, 0.6s, and 0.9s to confirm shading on folds and that the new scene is complete at 0.9s.
```

예시 / Example: 종이 접기 전환를 `.hero`에 적용해. / Apply Origami Fold Transition to `.hero`.

## 적용 / Application

- HyperFrames: 패널 4개를 rotationY와 transformOrigin으로 접는다. 그림자는 opacity로 덧씌운다. 모두 tl.to의 position을 i*0.06으로 깔아 seek 안전
- ReelForge: 씬 워커 브리프에 패널 수 4, 각도 90도, 시차 60ms, 그림자 0.3을 싣고 다음 장면을 패널로 분할하도록 한다
- Scrolline Deck: scrub에서는 패널을 진행률 구간 시차(0.06 간격)로 접고 되감으면 그대로 펼쳐진다. 스프링 금지

조합 / Pair with: [미러 전환 · Mirror Transition](../mirror-transition/) · [페이지 턴 · Page Turn](../page-turn/) · [팝업북 전개 · Pop-up Book](../popup-book/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
