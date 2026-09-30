# Nº 133 컬럼 멜트 · Column Melt

> 클립 렌더 예정 / Clip rendering planned.

**세로로 잘린 화면 띠들이 서로 다른 속도로 아래로 내려가 다음 장면을 드러낸다**

A scene is cut into vertical strips that drop at different speeds, revealing the next scene like a melting screen.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Screen melt columns, 세로 기둥 녹아내리기

## 선택 기준 / Selection

화면이 무게를 받아 위에서부터 녹아내리는 느낌. 게임 종료나 장면 폭파처럼 거칠고 장난스러운 교체에 어울린다 / The old screen collapses under its own weight. Rough, playful, and clearly game-like.

- 게임, 레트로, 코미디 톤의 장면에서 이전 화면을 무너뜨리듯 지울 때 / When erasing a scene with a retro, game, or comedic tone
- 짧은 숏폼에서 컷 하나를 눈에 띄게 만들고 싶을 때 / When one cut in a short-form clip needs to stand out

좋은 예 / Good: 화면을 세로 30개 띠로 나눠 띠마다 0~0.25초씩 다르게 출발해 1.0초 안에 모두 아래로 빠지고 새 장면이 자리를 채운다
나쁜 예 / Bad: 띠 수가 6개 이하라 블라인드처럼 보이거나, 지연 편차가 없어 화면 전체가 한 장으로 내려간다
주의 / Avoid: 띠 지연 편차는 0.3초 이하로 둔다(길면 전환이 끝나지 않은 느낌) · 진지한 업무 보고나 데이터 장표에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 띠 수 | 30 | 16~48 | 많을수록 고운 녹음 |
| 띠별 지연 편차 | 0~0.25s | 0.1~0.3s | 시드 난수로 고정 |
| 전체 지속 | 1000ms | 700~1200ms | 가장 늦은 띠가 끝나는 시각 |
| 낙하 거리 | 화면 높이 100% | 100~110% | 띠가 화면 밖으로 완전히 나가야 함 |
| 이징 | none(linear) | none~power1.in | 중력이 붙는 가속은 약하게 |

이징 / Ease: `none / power1.in`

## 구현 / Implementation (GSAP)

```js
const N=30, H=1080; // 시드 고정 지연표
const d = i => ((i*37)%N)/N*0.25;
for (let i=0;i<N;i++) {
  tl.to(`.col-${i}`, { y: H, duration: 0.75, ease: 'power1.in' }, d(i));
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면을 다음 장면으로 바꿀 때 컬럼 멜트 전환을 넣어줘. 화면을 세로 30개 띠로 나누고 띠마다 0에서 0.25초 사이 고정 지연을 준 뒤, 각 띠가 0.75초 동안 power1.in으로 아래로 빠지게 해. 전체 길이는 1.0초, 아래 레이어에는 다음 장면이 이미 깔려 있어야 해. GSAP 타임라인 하나로 seek 가능하게 만들고 Math.random은 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 장면 전환부에 컬럼 멜트를 구현해. 띠 30개, 지연 d(i)=((i*37)%30)/30*0.25, duration 0.75, ease power1.in, y는 1080px. 0.2초, 0.5초, 1.0초 시점을 캡처해 띠 높이가 서로 다르게 내려오는지, 1.0초에 이전 장면 픽셀이 남지 않았는지 확인해.
```

### English · Claude Code
```text
Apply a Column Melt transition to <target> when switching to the next scene. Split the frame into 30 vertical strips, give each a fixed delay between 0 and 0.25s, and drop each by 1080px over 0.75s with power1.in. Total length 1.0s, with the next scene already sitting underneath. Use one seekable GSAP timeline and no Math.random.
```

### English · Codex
```text
Implement Column Melt in the scene transition in <file>. 30 strips, delay d(i)=((i*37)%30)/30*0.25, duration 0.75, ease power1.in, y 1080px. Capture at 0.2s, 0.5s, and 1.0s to confirm strips fall at visibly different heights and that no pixels of the old scene remain at 1.0s.
```

예시 / Example: 컬럼 멜트를 `.hero`에 적용해. / Apply Column Melt to `.hero`.

## 적용 / Application

- HyperFrames: 띠 30개를 A 장면의 clip 복제본으로 만들고 지연표를 시드 함수로 계산해 한 paused 타임라인에 얹는다. 난수 대신 (i*37)%N 같은 고정식을 쓴다
- ReelForge: 씬 워커 브리프에 띠 수, 지연 편차, 전체 지속 세 값을 싣고, 다음 장면을 아래 레이어에 두라고 명시한다
- Scrolline Deck: scrub에서는 띠별 지연을 진행률 0~0.25 구간으로 환산하고 이징은 ease-out에 가깝게 눌러 되감아도 자연스럽게 한다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [샤터 전환 · Shatter Transition](../shatter-transition/) · [글리치 전환 · Glitch Transition](../glitch-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DoomScreenTransition.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
