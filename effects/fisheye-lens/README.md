# Nº 308 어안 렌즈 확대 · Fisheye Lens

> 클립 렌더 예정 / Clip rendering planned.

**초점 주변의 점과 눈금 간격이 벌어지고 주변부는 압축되며 전체 범위는 화면에 남는다.**

Expand marks and tick spacing near a focus while compressing nearby context within the same extent.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | svg |

다른 이름 / Also known as: Fisheye chart lens, 차트 어안 렌즈

## 선택 기준 / Selection

전체 맥락을 유지하면서 밀집한 구간의 세부를 읽게 한다. / Reveals dense detail while retaining the overall context.

- 밀집한 점의 세부를 읽힐 때 / Inspect details in a dense cluster of marks.
- 전체 범위를 유지하며 한 구간을 설명할 때 / Explain one region while retaining the full extent.

좋은 예 / Good: 초점 반경 120px 안의 점과 눈금을 함께 벌려 원래 범위를 유지한다.
나쁜 예 / Bad: 점만 벌리고 눈금은 그대로 두어 값 해석이 틀어진다.
주의 / Avoid: 왜곡 중 거리로 수치를 비교하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 500~1200ms | 마크와 눈금 동기화 |
| 반경 | 120px | 80~180px | 초점 영향 범위 |
| 왜곡 강도 | 2 | 1~3 | 초점 가까이 확대 |
| 이징 | power1.inOut | power1.inOut~power2.inOut | 부드러운 좌표 전환 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {p:0};
const focus = 960, radius = 120, strength = 2;
const lens = x=>{const d=x-focus,a=Math.abs(d); return a>=radius?x:focus+Math.sign(d)*radius*(strength+1)*a/(strength*a+radius);};
tl.to(s, {p:1, duration:0.8, ease:'power1.inOut', onUpdate:()=>{
  marksAndTicks.forEach(m=>m.el.setAttribute('transform',`translate(${m.x+s.p*(lens(m.x)-m.x)} ${m.y})`));
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 어안 렌즈 확대를 적용해. SVG에서 초점 거리별 비선형 좌표 변환을 원래 좌표와 혼합해 마크와 눈금을 함께 이동한다. 지속 800ms; 반경 120px; 왜곡 강도 2; 이징 power1.inOut. 이징은 power1.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 어안 렌즈 확대를 적용해. SVG에서 초점 거리별 비선형 좌표 변환을 원래 좌표와 혼합해 마크와 눈금을 함께 이동한다. 지속 800ms; 반경 120px; 왜곡 강도 2; 이징 power1.inOut. 이징은 power1.inOut를 사용해. 0초·0.4초·0.8초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Fisheye Lens to <target> in <file>. Blend original SVG coordinates with a bounded fisheye mapping over 800ms, using a 120px radius and strength 2; transform marks and ticks together. Use power1.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Fisheye Lens to the target scene in <file>. Blend original SVG coordinates with a bounded fisheye mapping over 800ms, using a 120px radius and strength 2; transform marks and ticks together. Use power1.inOut. Capture at 0, 0.4, and 0.8 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 어안 렌즈 확대를 `.hero`에 적용해. / Apply Fisheye Lens to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 0.8초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 800ms; 반경 120px; 왜곡 강도 2; 이징 power1.inOut를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 0.8초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [주석 등장 · Annotation Callout](../annotation-callout/) · [브러시 연동 갱신 · Brush-linked Update](../brush-linked-update/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
