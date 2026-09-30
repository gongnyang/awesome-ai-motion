# Nº 070 회전 스케일 · Rotate Scale

> 클립 렌더 예정 / Clip rendering planned.

**회전하면서 커졌다 원래 크기로 돌아오는 강조 동작**

An element spins while growing, then settles back to its original size.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 주목 끌기, 전환 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 회전 신축

## 선택 기준 / Selection

한 대상의 변화를 풍부하게 강조한다. 등장이나 상태 전환의 에너지를 더한다 / Adds energy to one object's entrance or state change.

- 로고·아이콘이 등장하며 힘 있게 자리 잡을 때 / When a logo or icon should land with force
- 상태 전환(잠금 해제, 완료)을 아이콘으로 보여 줄 때 / When showing a state change such as unlock or done with an icon

좋은 예 / Good: 자물쇠 아이콘이 360도 돌며 scale 0.7에서 1.2를 거쳐 1로 정착한다
나쁜 예 / Bad: 720도 이상 여러 바퀴 돌아 방향을 잃거나, 텍스트를 함께 회전시켜 읽을 수 없다
주의 / Avoid: 회전은 360도 이하 · 텍스트가 든 요소는 회전 대신 scale만 사용 · 이동과 동시에 걸지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 0.7s | 0.5~1.0s | 전체 동작 |
| 회전 | 360deg | 180~360deg | 한 방향 고정 |
| 배율 경로 | 0.7→1.2→1 | 0.6~1.3 | 정점에서 오버슈트 |
| 이징 | power3.out | power2~power4.out | 끝에서 부드럽게 정지 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.icon', { rotation: -360, scale: 0.7 }, { rotation: 0, scale: 1.2, duration: 0.45, ease: 'power3.out' }, 0.3)
  .to('.icon', { scale: 1, duration: 0.25, ease: 'power2.inOut' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 아이콘에 회전 스케일 효과를 넣어줘. 0.3초부터 0.45초 동안 rotation -360에서 0, scale 0.7에서 1.2로 power3.out, 이어서 0.25초 동안 scale 1.2에서 1로 power2.inOut. 중심점은 50% 50%, paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 rotate-scale을 적용해. fromTo(rotation -360→0, scale 0.7→1.2, 0.45s, power3.out, position 0.3) 뒤 to(scale 1, 0.25s). 0.3초·0.55초·1.0초를 캡처해 시작 기울기, 최대 배율 1.2, 종료 배율 1.0을 확인해.
```

### English · Claude Code
```text
Add a rotate-scale to the <target> icon with GSAP. From 0.3s for 0.45s, rotation -360 to 0 and scale 0.7 to 1.2 with power3.out, then scale 1.2 to 1 over 0.25s with power2.inOut. Pivot at 50% 50% and use one paused timeline.
```

### English · Codex
```text
Apply rotate-scale to <target> in <file>. fromTo (rotation -360 to 0, scale 0.7 to 1.2, 0.45s, power3.out, position 0.3), then to scale 1 over 0.25s. Capture at 0.3s, 0.55s and 1.0s to check the start tilt, the peak scale 1.2 and the final scale 1.0.
```

예시 / Example: 회전 스케일를 `.hero`에 적용해. / Apply Rotate Scale to `.hero`.

## 적용 / Application

- HyperFrames: fromTo로 시작 상태를 명시하고 paused 타임라인에서 seek해도 초기값이 유지되게 한다
- ReelForge: 브리프에 회전 각·배율 경로·소요 시간을 넣는다. 아이콘 SVG 중심점을 정렬해 도는 중심이 어긋나지 않게 한다
- Scrolline Deck: scrub에서는 진행률 0~0.6에 회전과 확대, 0.6~1에 복귀를 나눠 ease-out으로 매핑한다

조합 / Pair with: [스프링 오버슛 · Spring & Overshoot](../spring-overshoot/) · [스케일 팝 · Scale Pop](../scale-pop/) · [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
