# Nº 129 바운스 전환 · Bounce Transition

> 클립 렌더 예정 / Clip rendering planned.

**장면 경계가 아래로 떨어져 바닥에서 여러 번 튀고 그림자가 뒤따르며 새 장면을 보여준다**

The scene boundary drops, bounces off the floor several times with a trailing shadow, and reveals the new scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 분위기 | 숏폼, 설명 영상, 웹 UI | gsap |

다른 이름 / Also known as: Bounce reveal, 바운스 덮기

## 선택 기준 / Selection

장면이 무게 있는 물체처럼 떨어져 바닥에서 튄다. 가볍고 유쾌한 톤을 만든다 / Makes a scene feel like a physical object with weight. Light and cheerful.

- 캐주얼하고 밝은 톤의 설명 영상에서 장면을 툭 떨어뜨려 덮을 때 / When dropping a scene in to cover the old one in a casual, bright explainer
- 제품 소개 카드가 아래에서 튀어 들어와 다음 섹션을 열 때 / When a product card bounces in from below to open the next section

좋은 예 / Good: 새 장면이 위에서 0.9초 동안 떨어져 바닥에서 세 번 튀고, 경계 아래로 옅은 그림자가 함께 움직인다
나쁜 예 / Bad: 튐 횟수가 6번을 넘어 끝나기까지 오래 걸리거나, 그림자가 없어 종이가 흔들리는 것처럼 보인다
주의 / Avoid: 바운스 횟수는 3회 이하로 둔다 · 진지하고 격식 있는 발표에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 900ms | 700~1100ms | 마지막 정지까지 포함 |
| 튐 횟수 | 3 | 2~4 | bounce.out이 기본 3회 근사 |
| 그림자 높이 | 화면 높이 7.5% | 5~10% | 경계 아래 그라디언트 |
| 그림자 opacity | 0.6 | 0.4~0.7 | 검정 |
| 낙하 거리 | 화면 높이 100% | 100% | 위에서 시작 |

이징 / Ease: `bounce.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.next', { y: -1080 }, { y: 0, duration: 0.9, ease: 'bounce.out' }, 0);
tl.fromTo('.shadow', { y: -1080 }, { y: 0, duration: 0.9, ease: 'bounce.out' }, 0);
tl.to('.prev', { opacity: 0, duration: 0.01 }, 0.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 바운스 전환을 넣어줘. 다음 장면이 화면 위(-1080px)에서 0.9초 동안 bounce.out으로 떨어지고, 같은 이징의 그림자 레이어(높이 화면의 7.5%, 검정 opacity 0.6)가 경계 아래에서 함께 움직이게 해. 착지 뒤 0.4초 정지. GSAP 타임라인 하나로 seek 가능하게 해줘.
```

### 한국어 · Codex
```text
<파일>의 전환부에 바운스 전환을 구현해. .next를 y -1080에서 0으로 0.9초 bounce.out, .shadow는 같은 트윈, .prev는 0.9초 시점에 숨겨. 0.3초, 0.6초, 0.9초, 1.4초 시점을 캡처해 튐이 세 번 보이는지, 착지 후 그림자가 사라지는지, 마지막 프레임에 이전 장면이 안 보이는지 확인해.
```

### English · Claude Code
```text
Add a Bounce Transition to <target>. The next scene falls from y -1080px over 0.9s with bounce.out, while a shadow layer (7.5% of frame height, black at 0.6 opacity) moves with it using the same ease. Hold 0.4s after landing. Use a single seekable GSAP timeline.
```

### English · Codex
```text
Implement a bounce transition in <file>. Tween .next from y -1080 to 0 over 0.9s with bounce.out, tween .shadow identically, hide .prev at 0.9s. Capture at 0.3s, 0.6s, 0.9s, and 1.4s to confirm three visible bounces, that the shadow disappears after landing, and that the old scene is gone in the last frame.
```

예시 / Example: 바운스 전환를 `.hero`에 적용해. / Apply Bounce Transition to `.hero`.

## 적용 / Application

- HyperFrames: bounce.out은 seek해도 결정론이라 그대로 쓴다. 그림자 레이어를 next와 같은 이징으로 묶어 paused 타임라인 하나에 둔다
- ReelForge: 씬 워커 브리프에 지속 900ms, 튐 3회, 그림자 opacity 0.6을 파라미터로 싣고 그림자 레이어를 별도 요소로 요구한다
- Scrolline Deck: scrub에서는 바운스가 진행률에 따라 앞뒤로 튀어 어색하다. ease-out 한 번 착지로 바꾸고 튐은 홀드 구간의 짧은 재생으로 뺀다

조합 / Pair with: [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/) · [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/) · [푸시 전환 · Push](../push-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Bounce.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
