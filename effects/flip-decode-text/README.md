# Nº 098 3D 회전 해독 · 3D Flip Decode

> 클립 렌더 예정 / Clip rendering planned.

**글자가 회전하며 임의 문자를 몇 번 거친 뒤 실제 글자로 착지하는 해독 효과**

Each character rotates through a few random symbols and lands on its true glyph.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 주목 끌기, 설명 | 숏폼, 제품 시연, 설명 영상 | css |

## 선택 기준 / Selection

암호가 풀리는 기계적 진행. 정보가 확정되는 순간이 뚜렷하다 / A mechanical decoding progression, with the moment of certainty clearly visible.

- 보안·해독·분석 결과를 밝히는 타이틀 / A title that reveals a security, decoding or analysis result
- AI가 추론 결과를 확정해 내놓는 장면 / A scene where an AI locks in its reasoning result

좋은 예 / Good: "접근 승인"이 글자마다 0.6초 동안 rotateX 90도를 돌며 임의 문자 3개를 거치고 왼쪽부터 0.04초씩 늦게 착지한다
나쁜 예 / Bad: 임의 문자가 매 프레임 바뀌고 Math.random이 쓰여 캡처할 때마다 다른 글자가 나온다
주의 / Avoid: 임의 문자열은 시드 난수로 미리 뽑아 둔다. Math.random은 쓰지 않는다 · 착지 글자는 정확한 글자로 끝나야 한다. 마지막 0.1초는 흔들림 없이 정지한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 글자당 시간 | 0.6s | 0.4~0.8s | 회전과 교체 포함 |
| 글자 간 시작 차 | 0.04s | 0.02~0.08s | 왼쪽부터 |
| 회전각 | 90deg | 90~180deg | rotateX |
| 중간 임의 문자 | 3개 | 2~5개 | 시드 고정 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const pool = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
chars.forEach((c, i) => {
  const frames = [0,1,2].map(() => pool[Math.floor(rnd() * pool.length)]);
  const o = {p:0};
  tl.to(o, {p:1, duration:0.6, ease:'power2.out', onUpdate(){ const k = Math.min(3, Math.floor(o.p * 4)); node(i).textContent = k < 3 ? frames[k] : c; node(i).style.transform = `rotateX(${(1 - o.p) * 90}deg)`; }}, 0.2 + i * 0.04);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문구를 해독 효과로 공개해줘. 글자마다 rotateX 90도에서 0도로 0.6초 도는 동안 임의 문자 3개(시드 7 고정)를 거쳐 정답 글자에 착지하고, 시작 차는 왼쪽부터 0.04초. 착지 전 마지막 0.1초는 정답 글자로 고정해.
```

### 한국어 · Codex
```text
<파일>에 flip decode text를 적용해. 시드 7의 선형 합동 난수로 글자별 임의 문자 3개를 미리 뽑고, progress 0~1에서 인덱스를 선택, rotateX (1-p)*90deg, duration 0.6, stagger 0.04. 0.4초·0.9초·1.6초를 캡처해 임의 문자 상태와 완료 상태를 확인하고 두 번 렌더한 프레임이 동일한지 비교해.
```

### English · Claude Code
```text
Reveal the text in <target> as a decode. Each glyph rotates rotateX 90deg to 0 over 0.6s while cycling 3 random symbols (seed fixed at 7) before landing on the correct glyph, starting 0.04s apart left to right. Hold the correct glyph for the last 0.1s.
```

### English · Codex
```text
Apply flip decode text in <file>. Pre-draw 3 random symbols per glyph with a seed-7 LCG; pick index from progress 0..1; rotateX (1-p)*90deg; duration 0.6; stagger 0.04. Capture at 0.4s, 0.9s and 1.6s, verify scramble and settled states, and render twice to confirm identical frames.
```

예시 / Example: 3D 회전 해독를 `.hero`에 적용해. / Apply 3D Flip Decode to `.hero`.

## 적용 / Application

- HyperFrames: 시드 난수 결과를 배열로 굳히고 onUpdate에서 progress로 인덱스를 고른다. seek해도 같은 문자가 나오도록 상태를 저장하지 않는다
- ReelForge: 브리프에 목표 문자열, 임의 문자 풀, 시드값 7, 글자당 0.6초, 시작 차 0.04초를 싣는다
- Scrolline Deck: 진행률을 글자별 구간으로 나눠 착지 글자가 확정된 뒤에는 되돌려도 유지되도록 한다. 임의 문자는 진행률 기반이라 뒤로 감아도 같다

조합 / Pair with: [스크램블 · Text Scramble](../text-scramble/) · [분할 플랩 문자판 · Split Flap Display](../split-flap/) · [글자 뒤집기 등장 · Letter Flip Reveal](../letter-flip-3d/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/hacker-flip-3d.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
