# Nº 584 불확정 프로그레스 · Indeterminate Progress

> 클립 렌더 예정 / Clip rendering planned.

**짧은 밝은 막대가 트랙을 반복해서 지나간다.**

A bright bar repeatedly sweeps across a clipped track.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | css |

다른 이름 / Also known as: Indeterminate loading sweep, 불확정 로딩 쓸기, 무정량 진행 막대

## 선택 기준 / Selection

정확한 완료율 없이 진행 중임을 전달한다. / Shows activity when the completion percentage is unknown.

- 업로드 준비처럼 완료율을 모를 때 / Use when presenting indeterminate progress in a waiting or ambient scene.
- 데이터 요청이 진행 중임을 표시할 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 밝은 막대가 1.5초 동안 트랙을 지나며 폭을 바꾼다.
나쁜 예 / Bad: 실제 완료율이 있는데도 불확정 막대만 보여준다.
주의 / Avoid: 실제 완료율이 있는데도 불확정 막대만 보여준다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1.5s | 1.05~2.1s | 유한 구간을 호스트 시간으로 반복 |
| 막대 폭 | 20~60% | 15~65% | 가운데에서 최대 폭 |
| 트랙 이동 | 100% | 100~120% | 트랙 오른쪽으로 완전히 퇴장 |
| 이징 | sine.inOut | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.track', {overflow:'hidden'});
gsap.set('.bar', {left:'-20%', width:'20%'});
tl.to('.bar', {left:'20%', width:'60%', duration:0.75, ease:'sine.inOut'}, 0);
tl.to('.bar', {left:'100%', width:'20%', duration:0.75, ease:'sine.inOut'}, 0.75);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 불확정 프로그레스을 적용해. 1.5초, 막대 폭 20~60%; 트랙 이동 100%, 이징 sine.inOut로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 불확정 프로그레스을 적용해. 1.5초, 막대 폭 20~60%; 트랙 이동 100%, sine.inOut를 사용하고 0초, 0.75초, 1.5초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Indeterminate Progress to <target> in <file>. Use a 1.5s segment with sine.inOut; implement these explicit settings: Bar width: 20~60%, Track travel: 100%. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Indeterminate Progress to the <target> layer in <file> with Bar width: 20~60%, Track travel: 100%, using the supplied core snippet and a 1.5s segment with sine.inOut. Capture at 0s, 0.75s, and 1.5s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 불확정 프로그레스를 `.hero`에 적용해. / Apply Indeterminate Progress to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.5초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 불확정 프로그레스, 1.5초, 막대 폭 20~60%; 트랙 이동 100%, sine.inOut를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.5초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-loading-progress-bar) (unknown) · [motion.dev examples](https://motion.dev/examples/react-loading-line-reveal) (unknown) · [css-loaders.com](https://css-loaders.com/) (unknown) · [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) (MIT) · [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
