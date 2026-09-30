# Nº 147 가산 디졸브 · Additive Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**두 장면의 밝은 색이 더해져 중간이 밝아졌다가 다음 장면 밝기로 돌아온다**

The bright colors of two scenes add together, brightening the middle before settling to the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 설명 영상, 숏폼, 제품 시연 | webgl |

## 선택 기준 / Selection

두 장면의 밝은 색이 더해져 중간이 환해졌다가 다음 장면 밝기로 돌아온다 / Adds light and liveliness to a scene change.

- 밝고 가벼운 분위기의 회상, 꿈, 도입부에서 장면을 부드럽게 넘길 때 / To ease a light, airy scene change such as a memory, dream, or intro
- 제품 소개 영상에서 화면을 빛이 번지듯 이어 갈 때 / To carry a product video from one screen to the next like spreading light

좋은 예 / Good: 600ms 동안 두 장면이 mix-blend-mode screen 또는 plus-lighter로 겹쳐 중간에 밝아지고, 밝기 상한 1을 넘지 않게 눌러 준다
나쁜 예 / Bad: 중간이 하얗게 날아가 디테일이 사라지거나, 어두운 장면끼리 써서 차이가 보이지 않는다
주의 / Avoid: 중간 밝기가 클리핑되지 않도록 한 장면에 brightness 0.85를 곱한다 · 어두운 화면 위주 장면에는 효과가 약하다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 400~900ms | linear |
| 혼합 모드 | plus-lighter 또는 screen |  | 가산 |
| 중간 밝기 제한 | 1.0 | 0.9~1.1 | 클리핑 방지 |
| 앞 장면 opacity | 1에서 0 |  | 선형 |
| 뒤 장면 opacity | 0에서 1 |  | 선형 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
gsap.set('.next', { mixBlendMode: 'plus-lighter' });
tl.fromTo('.next', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'none' }, 0);
tl.to('.prev', { opacity: 0, duration: 0.6, ease: 'none' }, 0);
tl.to(['.prev','.next'], { filter: 'brightness(0.85)', duration: 0.3, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 가산 디졸브를 넣어줘. .next에 mix-blend-mode plus-lighter를 걸고, .prev opacity 1에서 0, .next opacity 0에서 1로 0.6초 linear로 진행해. 중간이 클리핑되지 않게 두 장면에 brightness 0.85를 0.3초 yoyo로 걸어줘. paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 가산 디졸브를 구현해. .next mixBlendMode plus-lighter, opacity 0에서 1, .prev 1에서 0, 0.6초 none, brightness 0.85 yoyo. 0.15초, 0.3초, 0.45초, 0.6초 시점을 캡처해 중간이 밝아지되 흰색으로 날아가지 않는지, 0.6초에 다음 장면 밝기로 돌아오는지 확인해.
```

### English · Claude Code
```text
Add an Additive Dissolve to <target>. Give .next mix-blend-mode plus-lighter, then tween .prev opacity 1 to 0 and .next 0 to 1 over 0.6s with linear ease. Apply brightness 0.85 with a 0.3s yoyo so the middle does not clip. Keep it on a paused, seekable timeline.
```

### English · Codex
```text
Implement Additive Dissolve in <file>. .next mixBlendMode plus-lighter, opacity 0 to 1; .prev 1 to 0; 0.6s ease none; brightness 0.85 yoyo. Capture at 0.15s, 0.3s, 0.45s, and 0.6s to confirm the middle brightens without blowing out to white and that the brightness returns to the next scene by 0.6s.
```

예시 / Example: 가산 디졸브를 `.hero`에 적용해. / Apply Additive Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: CSS mix-blend-mode를 쓰면 렌더 엔진에서 결정론적이다. 두 opacity를 같은 duration으로 묶어 paused 타임라인에서 seek한다
- ReelForge: 씬 워커 브리프에 혼합 모드, 지속 600ms, brightness 0.85를 싣는다
- Scrolline Deck: scrub에서 opacity를 진행률에 선형 매핑한다. 스프링을 쓰지 않으면 스크롤 속도와 무관하게 안정적이다

조합 / Pair with: [크로스페이드 · Crossfade](../crossfade/) · [블러 디졸브 · Blur Dissolve](../blur-dissolve/) · [라이트 리크 전환 · Light Leak Transition](../light-leak-transition/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-dissolve-transitions.html) (unknown) · [Blackmagic Design](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Advanced-Editing.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
