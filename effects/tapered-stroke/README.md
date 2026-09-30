# Nº 436 테이퍼 스트로크 · Tapered Stroke

> 클립 렌더 예정 / Clip rendering planned.

**선의 시작과 끝이 가늘어지며 붓처럼 길어졌다 줄어드는 가변 폭 스트로크**

A line's start and end thin out like a brush stroke as it lengthens and shortens.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 강조, 분위기 | 설명 영상, 숏폼, 웹 UI | svg |

## 선택 기준 / Selection

방향성과 속도감을 만든다. 균일한 선보다 손으로 그린 붓 획의 활력이 있다 / Builds direction and speed, and gives a hand-drawn stroke more life than a uniform line.

- 서명, 밑줄, 화살표를 붓 느낌으로 그릴 때 / Draw signatures, underlines or arrows with a brush feel.
- 속도감이 필요한 궤적 표시를 만들 때 / Trajectories that need a sense of speed.
- 로고 주변 획 장식을 그릴 때 / Stroke decoration around a logo.

좋은 예 / Good: 선이 900ms에 그려지며 중간 최대 폭 12px, 양끝 0px로 가늘어지고 마지막에 꼬리부터 줄어 사라진다
나쁜 예 / Bad: 폭이 균일해 일반 선과 구분이 안 되거나, 폭 변화가 급해 획이 뚝뚝 끊겨 보인다
주의 / Avoid: 폭 변화는 sin 곡선처럼 부드럽게 한다 · 최대 폭은 선 길이의 3% 이하로 한다 · 끝 폭은 0으로 수렴시킨다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 그리기 시간 | 0.9s | 0.6~1.4s | 길이 전개 |
| 최대 폭 | 12px | 6~18px | 중앙 |
| 끝 폭 | 0px | 0~2px | 양끝 |
| 사라짐 | 0.4s | 0.3~0.6s | 꼬리부터 |
| 이징 | power2.out | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
// 폭 프로파일 w(u)=W*sin(pi*u)로 만든 면(fill path)을 진행률 p 구간만큼 그림
const o = { p: 0 };
tl.to(o, { p: 1, duration: 0.9, ease: 'power2.out', onUpdate: () => el.setAttribute('d', ribbon(pts, 0, o.p, 12)) }, 0.3);
tl.to(o, { p: 1, duration: 0.4, ease: 'power2.in', onUpdate: () => el.setAttribute('d', ribbon(pts, o.q, 1, 12)) }, 1.6); // q 0→1 꼬리
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 SVG로 <곡선>에 테이퍼 스트로크를 그려 줘. 경로 샘플 점에서 폭 프로파일 W*sin(pi*u), 최대 12px, 양끝 0px인 면 경로를 만들고, 0.3초부터 0.9초 동안 power2.out으로 진행률 0→1까지 그려. 1.6초부터 0.4초 동안 꼬리부터 지워 사라지게 해. 폭 변화는 부드럽게 하고 paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 곡선에 tapered-stroke를 적용해. ribbon(pts, start, end, W)로 sin 폭 프로파일 면을 만들고, 진행률 p를 position 0.3, duration 0.9, ease power2.out으로 0→1, 꼬리 q를 position 1.6, duration 0.4로 0→1 tween해 setAttribute('d', ...). 0.6초는 반쯤 그려짐, 1.3초는 완성, 2.1초는 사라졌는지, 양끝 폭이 0인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP and SVG to draw a tapered stroke along <curve>. Build a filled path from sampled points with width profile W*sin(pi*u), max 12px and 0px at both ends, and draw it from progress 0 to 1 starting at 0.3 seconds over 0.9 seconds with power2.out. From 1.6 seconds erase it tail first over 0.4 seconds. Smooth width change, paused timeline.
```

### English · Codex
```text
Apply tapered-stroke to the curve in <file>. Build the sin-profile ribbon with ribbon(pts, start, end, W), tween progress p 0 to 1 at position 0.3, duration 0.9, ease power2.out and tail q 0 to 1 at position 1.6, duration 0.4, calling setAttribute('d', ...). Capture 0.6s (half drawn), 1.3s (complete), 2.1s (gone) and confirm both end widths are 0.
```

예시 / Example: 테이퍼 스트로크를 `.hero`에 적용해. / Apply Tapered Stroke to `.hero`.

## 적용 / Application

- HyperFrames: 면 경로 함수 ribbon(pts, start, end, W)를 순수 함수로 두고 진행률로만 갱신한다. 점 샘플은 로드 시 고정한다
- ReelForge: 브리프에 경로 점 배열 또는 SVG path, 최대 폭 12, 끝 폭 0, 그리기 0.9s를 싣는다
- Scrolline Deck: 진행률 0~1을 그려지는 구간 끝점에 매핑한다. 꼬리 소멸은 시작점 진행률로 매핑한다

조합 / Pair with: [선 그리기 · Line Draw](../line-draw/) · [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [패스 하이라이트 · Path Highlight](../path-highlight/)

출처 / Sources: [schoolofmotion.com](https://schoolofmotion.com/blog/after-effects-text-animator-tapered-stroke) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
