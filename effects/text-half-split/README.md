# Nº 216 텍스트 반쪽 분리 · Text Half Split

> 클립 렌더 예정 / Clip rendering planned.

**같은 글자의 위아래 반쪽이 반대 방향으로 벌어지고 새 문구가 모여 교체되는 효과**

The top and bottom halves of a phrase split apart and a new phrase closes in from the opposite sides.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 강조 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Split Text Half Separation

## 선택 기준 / Selection

문구가 갈라져 바뀐다는 것을 선명하게 보여준다. 교체의 순간이 또렷한 무대 전환 같은 리듬을 만든다 / Makes the swap moment crisp, giving replacement a clear stage-change rhythm.

- 헤드라인 문구를 다음 문구로 교체할 때 / Replace one headline phrase with the next.
- 호버·키워드 순환 제목에서 교체 순간을 강조할 때 / Emphasize the swap in a rotating keyword title.

좋은 예 / Good: 'SALE'이 중앙선에서 위아래로 100% 벌어져 500ms에 사라지고, 100ms 뒤 'NEW'의 반쪽들이 반대에서 모여 닫힌다
나쁜 예 / Bad: 두 복사본의 절반 경계가 어긋나 글자 중간에 가로 틈이 보인 채 멈춘다
주의 / Avoid: 클립 경계는 정확히 50%로 맞춘다(틈 방지) · 분리 거리 150% 초과 금지 · 교체 문구 길이가 크게 다르면 사용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 분리 시간 | 500ms | 300~700ms | 반쪽 이동 |
| 이동 거리 | 100% | 60~120% | 자기 높이 기준 |
| 교체 대기 | 100ms | 0~200ms | 새 문구가 모이기 전 |
| 이징 | power3.inOut | power2~power4.inOut | 경계가 또렷 |

## 구현 / Implementation (GSAP)

```js
/* .top{clip-path:inset(0 0 50% 0)} .bot{clip-path:inset(50% 0 0 0)} (같은 글자 복사본 2개) */
tl.to('.old.top', { yPercent: -100, duration: 0.5, ease: 'power3.inOut' }, 0)
  .to('.old.bot', { yPercent: 100, duration: 0.5, ease: 'power3.inOut' }, 0)
  .from('.new.top', { yPercent: 100, duration: 0.5, ease: 'power3.inOut' }, 0.6)
  .from('.new.bot', { yPercent: -100, duration: 0.5, ease: 'power3.inOut' }, 0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 문구 '<구 문구>'를 '<신 문구>'로 교체할 때 반쪽 분리를 써줘. 같은 글자 복사본 2개를 clip-path 50%로 위아래 나눠, 구 문구는 0.5초 동안 위아래로 100% 벌어져 사라지고 0.1초 뒤 신 문구 반쪽들이 반대 방향에서 0.5초에 모이게 해. 이징 power3.inOut, 한글은 자모가 아닌 글자 전체 기준으로 클립해.
```

### 한국어 · Codex
```text
<파일>의 문구 교체에 반쪽 분리를 적용해. 복사본 두 개에 clip-path inset(50%) 경계를 쓰고 yPercent ±100을 0.5초 tween. 0초와 신 문구 완성 후에 경계 틈이 없는지, 0.25초에 반쪽이 벌어진 상태인지 캡처로 확인해.
```

### English · Claude Code
```text
When replacing '<old text>' with '<new text>' in <target>, use a half split. Make two copies clipped at exactly 50% top and bottom; the old phrase splits 100% apart over 0.5 seconds and disappears, then 0.1 seconds later the new halves close in from the opposite directions in 0.5 seconds. Ease power3.inOut, and clip the whole glyph for Korean.
```

### English · Codex
```text
Apply a half split to the phrase swap in <file> using two copies with clip-path inset at 50% and yPercent +/-100 over 0.5s. Capture at 0.25s to see the gap and after the new phrase settles to confirm there is no seam.
```

예시 / Example: 텍스트 반쪽 분리를 `.hero`에 적용해. / Apply Text Half Split to `.hero`.

## 적용 / Application

- HyperFrames: 복사본 두 겹에 clip-path inset을 고정하고 yPercent만 tween한다. 서체 렌더가 두 복사본에서 같도록 같은 폰트를 preload한다
- ReelForge: 텍스트 교체 씬에 구 문구, 신 문구, 분리 방향(상하/좌우)을 파라미터로 전달한다
- Scrolline Deck: 교체 진행률 0..1 구간에서 분리는 0~0.5, 결합은 0.5~1로 나눈다. 정지가 중간이면 글자가 갈라진 채라 정지점은 0 또는 1에 스냅한다

조합 / Pair with: [글자 조각 어긋남 · Text Slice Offset](../text-slice-offset/) · [분할 플랩 문자판 · Split Flap Display](../split-flap/) · [스플릿 슬라이드 · Split Slide](../split-slide/)

출처 / Sources: [codrops/TextStylesHoverEffects](https://github.com/codrops/TextStylesHoverEffects) (unknown) · [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
