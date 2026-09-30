# Nº 341 이미지 팬아웃 · Image Fan Out

> 클립 렌더 예정 / Clip rendering planned.

**겹친 작은 이미지들이 간격과 각도를 벌리며 부채꼴로 펼쳐진다.**

Overlapping images spread into a fan with spacing and rotation.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: 이미지 부채꼴 펼치기

## 선택 기준 / Selection

압축된 여러 자료의 존재를 보여 준다. / Reveals the presence of multiple compacted assets.

- 이미지 팬아웃으로 압축된 여러 자료의 존재를 보여 준다 때 / Use this effect when you need to communicate: Reveals the presence of multiple compacted assets.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 겹친 사진 다섯 장이 24px 간격의 부채꼴로 펼쳐진다
나쁜 예 / Bad: 사진이 너무 돌아가 내용을 읽을 수 없다
주의 / Avoid: 사진이 너무 돌아가 내용을 읽을 수 없다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.5s | 0.3~0.75s | 1920x1080 시연 기준의 한 동작 시간 |
| 각도 간격 | 8deg | 4~12deg | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const cards = gsap.utils.toArray('.photo');
cards.forEach((el,i)=>{
  const offset = i-(cards.length-1)/2;
  tl.fromTo(el,{x:0,rotation:0},{x:offset*24,rotation:offset*8,duration:.5,ease:'power2.out'},i*.05);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 이미지 팬아웃을 적용해. 겹친 작은 이미지들이 간격과 각도를 벌리며 부채꼴로 펼쳐진다. 기본 지속 0.5초, 각도 간격 8deg, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 이미지 팬아웃을 적용해. 기본 지속 0.5초, 각도 간격 8deg, 이징 power2.out를 사용해. 0초, 0.25초, 0.9초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Image Fan Out to <target> in <file>. Overlapping images spread into a fan with spacing and rotation. Use a 0.5-second duration, 8-degree rotation spacing, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Image Fan Out to <target> in the demonstration scene in <file>. Use a 0.5-second duration, 8-degree rotation spacing, and power2.out easing. Capture at 0, 0.25, and 0.9 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 이미지 팬아웃를 `.hero`에 적용해. / Apply Image Fan Out to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 이미지 팬아웃 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.5초, 각도 간격 8deg, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.5초, 각도 간격 8deg, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 겹친 사진 다섯 장이 24px 간격의 부채꼴로 펼쳐진다.
- Scrolline Deck: 진행률 0~1을 0.5초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [카드 스택 셔플 · Card Stack Shuffle](../card-stack-shuffle/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/images-badge) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
