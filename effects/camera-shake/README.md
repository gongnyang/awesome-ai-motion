# Nº 227 카메라 셰이크 · Camera Shake

> 클립 렌더 예정 / Clip rendering planned.

**화면 전체가 작은 이동과 회전으로 흔들리며 충격 뒤에는 진폭이 줄어든다.**

Shake the entire scene with small translations and rotations that decay after impact.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 주목 끌기, 분위기 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: 카메라 흔들림

## 선택 기준 / Selection

충격의 강도와 핸드헬드 촬영의 불안정함을 전달한다. / Conveys impact and handheld instability.

- 충돌 직후 충격을 전달할 때 / Emphasize the instant after a collision.
- 짧은 핸드헬드 감각을 더할 때 / Add a brief handheld feel.

좋은 예 / Good: 충돌 순간 6px 흔들림이 300ms 안에 사라진다.
나쁜 예 / Bad: 설명 내내 큰 흔들림을 반복해 자막을 읽기 어렵다.
주의 / Avoid: 자막은 흔들리는 월드 바깥에 둔다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 300ms | 150~450ms | 충격 뒤 감쇠 |
| 이동 진폭 | 6px | 2~10px | 1920x1080 기준 |
| 회전 진폭 | 0.6deg | 0.2~0.8deg | 중심 회전 |
| 크롭 여유 | 2% | 1~3% | 빈 가장자리 방지 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {p:0};
gsap.set('.world', {scale:1.02});
tl.to(s, {p:1, duration:0.3, ease:'none', onUpdate:()=>{
  const a = Math.exp(-5*s.p)*(1-s.p), w = s.p*Math.PI*12;
  gsap.set('.world', {x:6*a*Math.sin(w), y:4*a*Math.sin(w*1.7), rotation:0.6*a*Math.sin(w*0.8)});
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 카메라 셰이크를 적용해. GSAP 코어 진행값으로 시드 노이즈의 이동과 회전 진폭을 감쇠시켜 HTML 월드 래퍼에 적용한다. 지속 300ms; 이동 진폭 6px; 회전 진폭 0.6deg; 크롭 여유 2%. 이징은 none로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 카메라 셰이크를 적용해. GSAP 코어 진행값으로 시드 노이즈의 이동과 회전 진폭을 감쇠시켜 HTML 월드 래퍼에 적용한다. 지속 300ms; 이동 진폭 6px; 회전 진폭 0.6deg; 크롭 여유 2%. 이징은 none를 사용해. 0초·0.15초·0.3초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Camera Shake to <target> in <file>. Apply deterministic sine-based shake with 6px translation and 0.6-degree rotation for 300ms, decay to zero, and overscan by 2%. Use none and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Camera Shake to the target scene in <file>. Apply deterministic sine-based shake with 6px translation and 0.6-degree rotation for 300ms, decay to zero, and overscan by 2%. Use none. Capture at 0, 0.15, and 0.3 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 카메라 셰이크를 `.hero`에 적용해. / Apply Camera Shake to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 0.3초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 300ms; 이동 진폭 6px; 회전 진폭 0.6deg; 크롭 여유 2%를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 0.3초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [입자 버스트 · Particle Burst](../particle-burst/) · [플래시 전환 · Flash Transition](../flash-transition/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-shake/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
