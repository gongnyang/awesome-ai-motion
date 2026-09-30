# Nº 479 네거티브 스페이스 반전 · Negative Space Inversion

> 클립 렌더 예정 / Clip rendering planned.

**실루엣은 유지되고 밝은 면과 어두운 여백의 역할이 뒤바뀌는 전환**

The silhouette stays the same while the bright shape and dark space swap roles.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 전환, 비교 | 발표, 설명 영상, 숏폼 | svg |

다른 이름 / Also known as: Negative Space Invert, 여백 반전, matte-invert-negative-space, silhouette-negative-space-match

## 선택 기준 / Selection

같은 대상의 관점이나 상황이 뒤집힌다는 감각. 배경과 형태의 자리바꿈 / The sense that perspective or circumstance has flipped for the same subject: figure and ground trade places.

- 전과 후, 문제와 해결처럼 같은 대상의 반대 상태를 보일 때 / Show opposite states of the same subject, like before and after or problem and solution.
- 로고나 아이콘 실루엣으로 장면을 이을 때 / Link scenes through a logo or icon silhouette.

좋은 예 / Good: 흰 바탕의 검은 실루엣이 0.5초 동안 검은 바탕의 흰 실루엣으로 뒤집히며 형태 좌표는 그대로 유지된다
나쁜 예 / Bad: 반전 중 실루엣이 조금씩 움직여 정렬이 어긋나거나, 색이 회색 중간값에서 오래 머문다
주의 / Avoid: 실루엣 좌표는 반전 전후 완전히 같아야 한다 · 중간 회색 구간을 0.1초 안에 지나간다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.5s | 0.35~0.8s | 양 극 사이 이동 |
| 배경 색 | #fff→#111 | 고대비 두 색 | 0 이후 값 |
| 전경 색 | #111→#fff | 고대비 두 색 | 배경의 반대 |
| 이징 | power2.inOut | sine~power3 | 전환 중 밝기 급변 방지 |

## 구현 / Implementation (GSAP)

```js
tl.to('.bg', { backgroundColor: '#111', duration: 0.5, ease: 'power2.inOut' }, 0)
  .to('.shape', { fill: '#fff', duration: 0.5, ease: 'power2.inOut' }, 0)
  .to('.b', { opacity: 1, duration: 0.5, ease: 'power2.inOut' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 실루엣이 유지된 채 색 역할이 뒤집히는 네거티브 스페이스 반전을 만들어줘. 배경은 #fff에서 #111로, 실루엣 fill은 #111에서 #fff로 0.5초 동안 power2.inOut으로 보간하고 path 좌표는 바꾸지 마. 반전 뒤 B 콘텐츠가 실루엣 안쪽에 나타나게 해. paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 negative space invert를 적용해. .bg backgroundColor #fff에서 #111, .shape fill #111에서 #fff를 0.5s power2.inOut으로 동시에 보간한다. 0.25초 캡처에서 회색 중간 상태의 실루엣 경계가 또렷한지, 0초와 0.5초에서 형태 좌표가 같은지 확인해.
```

### English · Claude Code
```text
Build a negative space inversion for <target> where the silhouette stays put and the colors swap roles. Tween the background from #fff to #111 and the silhouette fill from #111 to #fff over 0.5 seconds with power2.inOut. Do not change the path coordinates, and reveal B's content inside the silhouette afterward. One paused timeline.
```

### English · Codex
```text
Apply a negative space invert in <file>. Tween .bg backgroundColor #fff to #111 and .shape fill #111 to #fff together over 0.5s with power2.inOut. Capture at 0.25 seconds to confirm the silhouette edge is crisp in the gray midpoint, and at 0 and 0.5 seconds to confirm the shape coordinates are identical.
```

예시 / Example: 네거티브 스페이스 반전를 `.hero`에 적용해. / Apply Negative Space Inversion to `.hero`.

## 적용 / Application

- HyperFrames: SVG 실루엣을 하나의 path로 두고 fill과 배경색만 보간한다. 좌표를 건드리지 않아 seek에서 어긋나지 않는다
- ReelForge: 씬 워커 브리프에 shapeSvg, colorA, colorB를 실어 두 씬이 같은 path를 공유하게 한다
- Scrolline Deck: 진행률 0.5를 반전 중간으로 두고 fill과 배경을 같은 진행률로 보간한다. 스프링은 색에 의미가 없다

조합 / Pair with: [매치컷 · Match Cut](../match-cut/) · [비교 분할 · Split Compare](../split-compare/) · [모프 전환 · Morph](../shape-morph/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#matte-invert-negative-space`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#silhouette-negative-space-match`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
