# Nº 633 가사 줄 초점 · Lyric Line Focus

> 클립 렌더 예정 / Clip rendering planned.

**새 가사 줄이 중앙으로 올라오고 지난 줄은 위로 밀려 어두워지는 효과**

Each new lyric line rises to center while the previous line is pushed up and dimmed.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 중급 | 순서·흐름, 분위기 | 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Lyric Line Lift and Focus, 가사 줄 상승과 초점, Lyric Glow Accent, 가사 빛 강조

## 선택 기준 / Selection

노래의 흐름 안에서 지금 부르는 구절에 시선이 모인다. 지난 줄이 남아 문맥이 유지된다 / Draws the eye to the line being sung while keeping the previous line for context.

- 가사 영상, 음악 소개 영상을 만들 때 / Make lyric videos or music intros.
- 순서가 있는 문장을 하나씩 초점에 올려 읽게 할 때 / Bring sequential sentences into focus one at a time.

좋은 예 / Good: 현재 줄이 scale 1, opacity 1로 중앙에 있고 지난 줄은 opacity 0.3으로 위에 남으며 줄 이동은 500ms, 줄 간격 1.5em이다
나쁜 예 / Bad: 줄 이동이 박자와 무관하고 지난 줄이 그대로 밝아 어느 줄이 현재인지 모른다
주의 / Avoid: 화면에 동시에 3줄 초과 금지 · 현재 줄과 지난 줄의 밝기 차 0.5 이상 · 줄 전환은 가사 시작 시각에 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 줄 이동 | 500ms | 350~700ms | 위로 1.5em |
| 지난 줄 opacity | 0.3 | 0.2~0.4 | 어둡게 유지 |
| 다음 줄 opacity | 0.5 | 0.3~0.6 | 미리보기 |
| 줄 간격 | 1.5em | 1.3~1.8em | 읽기 간격 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
lines.forEach((el, i) => {
  tl.to(lines, { yPercent: -150 * (i + 1), duration: 0.5, ease: 'power2.out' }, starts[i]);
  tl.to(el, { opacity: 1, scale: 1, duration: 0.3 }, starts[i]);
  tl.to(el, { opacity: 0.3, scale: 0.92, duration: 0.3 }, starts[i + 1]);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 가사 줄 초점 자막을 만들어줘. 가사 줄 목록(<LRC>)에서 현재 줄은 화면 중앙에 scale 1, opacity 1이고, 다음 줄은 opacity 0.5로 아래, 지난 줄은 opacity 0.3, scale 0.92로 위에 남아. 줄 전환마다 컨테이너를 0.5초 power2.out으로 1.5em 올려. 동시에 3줄까지만 보이게 해.
```

### 한국어 · Codex
```text
<파일>에서 줄 시작 시각마다 컨테이너 y tween(0.5s, power2.out)과 현재/지난 줄 opacity tween을 건다. 두 개 시작 시각 직후 0.6초 시점을 캡처해 현재 줄이 중앙에 있고 지난 줄이 0.3 이하인지, 4줄째 이상이 안 보이는지 확인해.
```

### English · Claude Code
```text
Create lyric-focus captions in <target>. From the line list (<LRC>), the current line sits at the center with scale 1 and opacity 1, the next line below at opacity 0.5, and the previous line above at opacity 0.3 and scale 0.92. On each line change lift the container 1.5em over 0.5 seconds with power2.out. Show at most 3 lines at once.
```

### English · Codex
```text
In <file> add, at each line start, a container y tween (0.5s, power2.out) plus current/previous opacity tweens. Capture 0.6s after two start times to confirm the current line is centered, the previous is at 0.3 or lower, and no fourth line is visible.
```

예시 / Example: 가사 줄 초점를 `.hero`에 적용해. / Apply Lyric Line Focus to `.hero`.

## 적용 / Application

- HyperFrames: 컨테이너 하나를 y로 밀고 각 줄의 opacity/scale만 개별 tween한다. 가사 시작 시각은 LRC 값을 그대로 position으로 쓴다
- ReelForge: 가사 씬 브리프에 줄 배열과 시작 시각, 지난·다음 줄 opacity 값을 명시한다. 줄 수가 많으면 씬을 나눈다
- Scrolline Deck: 줄 인덱스 = floor(progress x N)로 정하고 이동은 진행률 구간 안 ease-out으로 처리한다

조합 / Pair with: [카라오케 자막 · Karaoke Caption](../karaoke-caption/) · [자막 페이지 교체 · Caption Page Swap](../caption-page-swap/) · [단어 떠오르기 · Word Rise Fade](../word-rise-fade/)

출처 / Sources: [dcmcand/dynamic-typography-videos](https://github.com/dcmcand/dynamic-typography-videos) (Apache-2.0) · [rayanfer32/remotion-lyrics](https://github.com/rayanfer32/remotion-lyrics) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
