# Nº 022 회전 · Rotation

> 클립 렌더 예정 / Clip rendering planned.

**중심점 둘레로 방향을 바꾸는 기본 회전**

Turns an element around a center point to change its direction.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 강조, 순서·흐름 | 웹 UI, 설명 영상, 발표 | gsap |

## 선택 기준 / Selection

방향과 자세가 바뀌었다는 것을 명확히 알린다 / Clearly tells that direction or posture has changed.

- 화살표·펼침 아이콘이 상태에 따라 돌 때 / When an arrow or expand icon turns with state
- 카드나 다이어그램 노드를 90도 돌려 축을 바꿀 때 / When rotating a card or diagram node 90 degrees to switch axis

좋은 예 / Good: 화살표 아이콘이 300ms 동안 90도 돌아 아래를 가리킨다
나쁜 예 / Bad: 회전 중심이 요소 밖이라 궤도를 그리며 흔들리거나, 텍스트를 여러 바퀴 돌린다
주의 / Avoid: 회전 중심을 명시 · 텍스트는 회전 없이 아이콘만 · 각도는 90 또는 180 배수

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 각도 | 90deg | 45~180deg | 한 방향 고정 |
| 길이 | 300ms | 200~500ms | 회전 시간 |
| 원점 | 50% 50% | 요소별 | 아이콘 중앙 |
| 이징 | power2.out | power2~power3.out | 도착에서 감속 |

## 구현 / Implementation (GSAP)

```js
tl.to('.chevron', { rotation: 90, transformOrigin: '50% 50%', duration: 0.3, ease: 'power2.out' }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 화살표 아이콘을 회전시켜줘. 0.4초부터 0.3초 동안 rotation 0에서 90도, transformOrigin 50% 50%, power2.out. 각도는 절대값으로 지정하고 텍스트는 돌리지 않아. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 rotate를 적용해. to({rotation 90, transformOrigin '50% 50%'}, 0.3s, power2.out, position 0.4). 0.4초·0.55초·0.9초를 캡처해 0도, 중간각, 90도를 확인하고 중심이 이동하지 않았는지 좌표를 비교해.
```

### English · Claude Code
```text
Rotate the <target> arrow icon with GSAP. From 0.4s over 0.3s rotate 0 to 90 degrees around 50% 50% with power2.out. Use absolute angles and do not rotate text. Paused timeline.
```

### English · Codex
```text
Apply rotate to <target> in <file>. to({rotation 90, transformOrigin '50% 50%'}, 0.3s, power2.out, position 0.4). Capture at 0.4s, 0.55s and 0.9s to check 0 degrees, a mid angle and 90 degrees, and compare coordinates to confirm the center did not move.
```

예시 / Example: 회전를 `.hero`에 적용해. / Apply Rotation to `.hero`.

## 적용 / Application

- HyperFrames: rotation은 transform이므로 paused seek에 안전하다. 각도 값은 누적하지 말고 절대값으로 지정
- ReelForge: 브리프에 각도·원점·길이를 싣는다. 여러 개를 돌릴 때는 stagger 0.05초
- Scrolline Deck: scrub에서는 각도를 진행률에 선형 매핑한다. 도착에서 ease-out으로 정지

조합 / Pair with: [회전 스케일 · Rotate Scale](../rotate-scale/) · [토글 슬라이드 · Toggle Slide](../toggle-slide/) · [아코디언 펼치기 · Accordion Expansion](../accordion-expand/)

출처 / Sources: motion dictionary 1-principles.md#8. 2D 속성 기본 동작 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
