# Nº 382 역기구학 뻗기 · Inverse Kinematics Reach

> 클립 렌더 예정 / Clip rendering planned.

**손이나 발의 목표 위치에 맞춰 연결된 관절이 굽혀진다.**

Connected joints bend to place a hand or foot at a target position.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 고급 | 설명, 피드백 | 설명 영상, 제품 시연, 발표 | webgl |

## 선택 기준 / Selection

말단의 목표 위치가 관절 전체의 자세를 결정하는 관계를 보여준다. / Shows how an end-effector target determines the pose of an entire joint chain.

- 로봇 팔이 물체에 닿는 원리를 설명할 때 / Explain how a robot arm reaches an object.
- 캐릭터의 손 뻗기나 발 접지를 시연할 때 / Demonstrate a character reaching with a hand or planting a foot.

좋은 예 / Good: 고정된 어깨에서 길이 240px인 세 링크가 목표를 따라 굽혀지고 손끝이 이동한 목표에 닿는다.
나쁜 예 / Bad: 손끝만 이동하고 팔의 길이가 늘어나 관절 연결이 끊긴다.
주의 / Avoid: 목표를 총 링크 길이 밖으로 배치하지 않는다. · 매 seek에서 이전 관절각을 이어받지 않는다. · 관절 제한이 필요한 캐릭터에는 무제한 회전을 그대로 쓰지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 목표 이동 시간 | 1.6s | 1.0~2.4s | 손끝 이동을 읽을 수 있는 시간. |
| 목표 이동 거리 | 504px | 240~600px | 총 링크 길이 720px의 0.7배. 도달 가능한 위치로 제한한다. |
| 관절 수 | 3개 | 2~5개 | 기본 링크 길이는 각각 240px. |
| 해결 반복 | 8회 | 4~16회 | 매 샘플마다 CCD를 반복해 손끝 오차를 줄인다. |
| 이징 | power2.inOut | power1.inOut~power3.inOut | cubic.inOut에 해당하는 GSAP 이름. |

## 구현 / Implementation (GSAP)

```js
const state = { x: 144 }, tl = gsap.timeline({ paused: true });
function solve(x) {
  const a = [0.4, 0.4, 0.4], target = { x, y: 120 };
  const fk = () => { let r = 0; const p = [{ x: 0, y: 0 }]; a.forEach(v => { r += v; const q = p[p.length - 1]; p.push({ x: q.x + 240 * Math.cos(r), y: q.y + 240 * Math.sin(r) }); }); return p; };
  for (let n = 0; n < 8; n++) for (let j = 2; j >= 0; j--) {
    const p = fk(), b = p[j], tip = p[3]; a[j] += Math.atan2(target.y - b.y, target.x - b.x) - Math.atan2(tip.y - b.y, tip.x - b.x);
  }
  return a;
}
tl.to(state, { x: 648, duration: 1.6, ease: 'power2.inOut', onUpdate: () => solve(state.x).forEach((a, i) => gsap.set('.joint-' + i, { rotation: a * 180 / Math.PI })) });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 역기구학 뻗기를 구현해. 길이 240px인 링크 3개와 고정된 루트를 만들고 목표를 (144,120)px에서 (648,120)px로 1.6초 동안 power2.inOut으로 옮겨. 초기 로컬 각도는 각각 0.4rad로 두고 매 샘플마다 초기 자세에서 CCD를 8회 계산하며 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 로봇 팔 장면에 <대상>의 역기구학 뻗기를 적용해. 링크 240px 3개, 초기 각도 각 0.4rad, 목표 (144,120)px에서 (648,120)px, 1.6초 power2.inOut, 샘플마다 CCD 8회를 사용해. 0초, 0.8초, 1.6초 캡처에서 링크 길이 유지와 손끝 오차 5px 이내를 확인하고 역순 seek에서 같은 자세인지 검증해.
```

### English · Claude Code
```text
Implement inverse kinematics reach for <target> in <file>. Build three 240px links with a fixed root and move the target from (144,120)px to (648,120)px over 1.6 seconds using power2.inOut. Set each initial local angle to 0.4rad, run eight CCD iterations from the initial pose for every sample, and support seeking with a paused timeline.
```

### English · Codex
```text
Apply inverse kinematics reach to <target> in the robot arm scene in <file>. Use three 240px links, initial angles of 0.4rad each, a target moving from (144,120)px to (648,120)px, 1.6 seconds with power2.inOut, and eight CCD iterations per sample. Capture at 0, 0.8, and 1.6 seconds to verify constant link lengths and a tip error below 5px, then check matching poses when seeking backward.
```

예시 / Example: 역기구학 뻗기를 `.hero`에 적용해. / Apply Inverse Kinematics Reach to `.hero`.

## 적용 / Application

- HyperFrames: 관절을 부모 자식으로 연결하고 paused 타임라인의 목표 좌표로 매 seek마다 초기 각도에서 CCD를 8회 계산한다.
- ReelForge: 씬 워커 브리프에 링크 길이 240px 3개, 목표 이동 504px, 1.6초와 CCD 8회를 전달하고 WebGL 관절의 로컬 회전에 적용한다.
- Scrolline Deck: 진행률 0~1을 목표 x 좌표 144~648px에 매핑하고 자세를 재계산한다. scrub에는 스프링 대신 power2.out으로 목표 이동을 감속한다.

조합 / Pair with: [종속 도형 동기 갱신 · Dependent Geometry Update](../dependent-geometry/) · [캐릭터 관절 동작 · Character Articulation](../character-articulation/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgl_animation_skinning_ik) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
