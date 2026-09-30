# Nº 581 원호 스피너 · Arc Spinner

![원호 스피너 · Arc Spinner](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**원호가 돌면서 길어졌다 짧아져 계속 작업 중임을 알린다.**

A rotating arc alternately lengthens and shortens.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 분위기 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: Spinner arc loader, 회전 원호 로더

## 선택 기준 / Selection

끝나지 않은 처리 상태를 전달한다. / Signals unfinished processing without a completion estimate.

- 처리 시간이 정해지지 않은 요청을 표시할 때 / Use when presenting arc spinner in a waiting or ambient scene.
- 작은 버튼 안에 로딩을 표시할 때 / Use for a compact status indicator with a stable surrounding layout.

좋은 예 / Good: 원호가 1초에 한 바퀴 돌고 1.5초마다 길이가 왕복한다.
나쁜 예 / Bad: 원호 길이를 완료율처럼 설명한다.
주의 / Avoid: 원호 길이를 완료율처럼 설명한다. · 정보를 읽는 동안 반복 진폭을 키우지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 3s | 2.1~4.2s | 유한 구간을 호스트 시간으로 반복 |
| 회전 주기 | 1s | 0.8~1.4s | 3초 구간에서 세 바퀴 |
| 길이 주기 | 1.5s | 1.2~2s | 회전과 독립 |
| 원호 길이 | 12~72% | 10~80% | 정량 완료율 아님 |
| 이징 | none | none | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
const arc = document.querySelector('.arc');
gsap.set(arc, {attr:{pathLength:100}, strokeDasharray:'12 100', transformOrigin:'50% 50%'});
tl.to(arc, {rotation:1080, duration:3, ease:'none'}, 0);
for (let i=0; i<2; i++) {
  tl.to(arc, {strokeDasharray:'72 100', duration:0.75, ease:'sine.inOut'}, i*1.5);
  tl.to(arc, {strokeDasharray:'12 100', duration:0.75, ease:'sine.inOut'}, i*1.5+0.75);
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 원호 스피너을 적용해. 3초, 회전 주기 1s; 길이 주기 1.5s; 원호 길이 12~72%, 이징 none로 구현해. paused 타임라인으로 seek 가능하게 하고 반복은 유한 구간의 지역 시간으로 계산해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 원호 스피너을 적용해. 3초, 회전 주기 1s; 길이 주기 1.5s; 원호 길이 12~72%, none를 사용하고 0초, 1.5초, 3초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Arc Spinner to <target> in <file>. Use a 3s segment with none; implement these explicit settings: Rotation period: 1s, Arc length period: 1.5s, Arc length: 12~72%. Use a paused, seekable timeline and repeat through local timeline time.
```

### English · Codex
```text
Apply Arc Spinner to the <target> layer in <file> with Rotation period: 1s, Arc length period: 1.5s, Arc length: 12~72%, using the supplied core snippet and a 3s segment with none. Capture at 0s, 1.5s, and 3s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 원호 스피너를 `.hero`에 적용해. / Apply Arc Spinner to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 3초 구간을 넣고 seek로 자세를 계산한다. 반복은 호스트의 지역 시간으로 환산한다.
- ReelForge: 씬 워커 브리프에 원호 스피너, 3초, 회전 주기 1s; 길이 주기 1.5s; 원호 길이 12~72%, none를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 3초 구간에 매핑한다. scrub에서는 스프링 대신 선형 이동과 ease-out을 용도별로 나눈다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [상태 보간 · State Tween](../state-tween/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) (GSAP Standard License) · [motion.dev examples](https://motion.dev/examples/react-loading-circle-spinner) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
