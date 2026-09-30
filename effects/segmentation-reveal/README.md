# Nº 394 영역 분할 스캔 · Segmentation Reveal

> 클립 렌더 예정 / Clip rendering planned.

**대상의 여러 구역에 반투명 색 마스크가 주사선 순서로 차오르고 라벨이 붙는다.**

A scan progressively reveals predefined colored region masks.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | canvas |

다른 이름 / Also known as: Segmentation flood

## 선택 기준 / Selection

기계가 대상을 부분별로 분석하는 과정을 보여준다. / Shows a system analyzing separate parts of a subject.

- 차량의 차체와 바퀴를 30% 불투명도의 서로 다른 색으로 공개한다. / Explain region-level image analysis.
- 기계가 대상을 부분별로 분석하는 과정을 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 차량의 차체와 바퀴를 30% 불투명도의 서로 다른 색으로 공개한다.
나쁜 예 / Bad: 마스크를 완전 불투명하게 덮어 원본을 가린다.
주의 / Avoid: 영역 색만으로 구분하지 말고 라벨을 붙인다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1500ms | 1000~2500ms | 상단부터 스캔 |
| 스캔 단계 | 24 | 12~48 | 마스크 행 단위 공개 |
| 마스크 불투명도 | 0.3 | 0.2~0.45 | 원본 윤곽 유지 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}),s={p:0};
tl.to(s,{p:1,duration:1.5,ease:'none',onUpdate:()=>{
 ctx.clearRect(0,0,1920,1080);ctx.save();
 ctx.beginPath();ctx.rect(0,0,1920,Math.floor(s.p*24)/24*1080);ctx.clip();
 ctx.globalAlpha=0.3;ctx.drawImage(regionMask,0,0);ctx.restore();
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 영역 분할 스캔을 적용해. 사전 정의 영역 마스크를 행 단위 임계값으로 공개한다. 지속 1500ms; 스캔 단계 24; 마스크 불투명도 0.3을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 영역 분할 스캔을 적용해. 사전 정의 영역 마스크를 행 단위 임계값으로 공개한다. 지속 1500ms; 스캔 단계 24; 마스크 불투명도 0.3을 적용한다. 0초, 0.75초, 1.5초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Segmentation Reveal on <target> in <file>. Reveal a predefined region mask over 1500ms in 24 scan steps at 0.3 opacity. Add region labels after their masks are revealed. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Segmentation Reveal on <target> in <file>. Reveal a predefined region mask over 1500ms in 24 scan steps at 0.3 opacity. Add region labels after their masks are revealed. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.75s, and 1.5s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 영역 분할 스캔를 `.hero`에 적용해. / Apply Segmentation Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 영역 분할 스캔 상태를 넣고 seek 시 1.5초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 1500ms; 스캔 단계 24; 마스크 불투명도 0.3을 싣고 차량의 차체와 바퀴를 30% 불투명도의 서로 다른 색으로 공개한다.
- Scrolline Deck: 진행률 0~1을 1.5초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [대상 추적 박스 · Object Tracking Box](../object-tracking-box/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/segmentation-flood/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
