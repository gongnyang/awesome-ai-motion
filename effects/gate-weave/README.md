# Nº 469 게이트 위브 · Gate Weave

> 클립 렌더 예정 / Clip rendering planned.

**영상이 작은 기계적 오프셋으로 흔들리고 노출이 미세하게 밝아졌다 어두워지는 필름 게이트 떨림**

The footage shakes with tiny mechanical offsets while exposure brightens and darkens slightly, like film gate weave.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Gate weave and flicker, 필름 게이트 흔들림과 플리커, Film weave, Exposure flicker

## 선택 기준 / Selection

필름 영사기에서 나온 듯한 아날로그 신뢰감과 질감을 만든다. 디지털의 완벽한 고정을 깨뜨린다 / Builds analog projector trust and texture, and breaks the perfect stillness of digital.

- 필름 룩을 만들고 싶을 때 그레인과 함께 얹는다 / To build a film look alongside grain
- AI 생성 컷이나 정지 이미지를 필름 프레임처럼 보이게 할 때 / To make AI shots or stills feel like film frames

좋은 예 / Good: 화면 전체가 짧은 변의 0.15% 이내(약 1.6px)로 흔들리고 노출이 ±3%로 1.2초 주기로 오르내린다
나쁜 예 / Bad: 흔들림을 눈에 띄는 3px 이상으로 키워 카메라 흔들림처럼 보이거나, 주기가 빨라 멀미를 준다
주의 / Avoid: 위치 진폭 짧은 변의 0.15% 초과 금지 · 글자와 UI는 흔들리는 레이어 밖에 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 위치 범위 | 1.6px | 0.8~2.4px | 짧은 변 0.15% 이하 |
| 노출 진폭 | 0.03 | 0.02~0.05 | brightness |
| 주기 | 1200ms | 800~2000ms | 노출 오르내림 |
| 갱신 | 12fps | 8~24fps | 위치 스텝 |
| 시드 표 | 32개 | 16~48개 | 고정 오프셋 시간표 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const offs=[[.5,-.8],[-1.1,.3],[.7,1.2],[-.4,-1.0],[1.3,.1],[-.9,.6]]; // 시드 고정 표
for(let f=0;f<dur*12;f++){const [x,y]=offs[f%offs.length];
 tl.to('.film',{x,y,duration:1/12,ease:'none'},t+f/12);}
tl.to('.film',{filter:'brightness(1.03)',duration:.6,yoyo:true,repeat:Math.floor(dur/.6)-1,ease:'sine.inOut'},t);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<영상 레이어>에 게이트 위브를 넣어줘. 고정 시드 오프셋 표(±1.3px 이내)를 12fps로 순환하며 x, y를 이동하고, brightness는 1.0에서 1.03 사이를 1.2초 주기 sine.inOut으로 오르내리게 해. 자막과 UI는 흔들림 밖에 두고 Math.random은 쓰지 마. paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 영상 컨테이너에 gate-weave를 적용해. 위치 ±1.3px 표 순환 12fps, 노출 ±0.03 주기 1200ms. 1.00초와 1.08초 프레임을 캡처해 위치가 1~2px 다른지, 자막 위치는 고정인지, 같은 시점 재렌더가 동일한지 확인해.
```

### English · Claude Code
```text
Add gate weave to <video layer>. Cycle a fixed-seed offset table (within +/-1.3px) at 12fps for x and y, and oscillate brightness between 1.0 and 1.03 on a 1.2s sine.inOut cycle. Keep captions and UI outside the weave and do not use Math.random. Use a paused timeline so it is seekable.
```

### English · Codex
```text
Apply gate-weave to the video container in <file>: offset table within +/-1.3px at 12fps, exposure +/-0.03 with a 1200ms period. Capture frames at 1.00s and 1.08s to verify positions differ by 1-2px, caption position stays fixed, and re-rendering the same time is identical.
```

예시 / Example: 게이트 위브를 `.hero`에 적용해. / Apply Gate Weave to `.hero`.

## 적용 / Application

- HyperFrames: 영상 레이어만 .film 컨테이너에 넣고 자막과 UI는 밖에 둔다. 위치 표를 시드 고정 배열로 두고 tl에서 스텝으로 준다
- ReelForge: 브리프에 weavePx, exposureAmp, exposurePeriodMs를 싣는다. 영상 위에 한 번만 걸어 씬마다 중복 적용하지 않는다
- Scrolline Deck: 진행률을 프레임 인덱스로 양자화해 오프셋 표를 읽는다. 스크롤이 멈추면 마지막 값에 정지하되 진폭이 작아 눈에 띄지 않는다

조합 / Pair with: [필름 그레인 · Film Grain](../film-grain/) · [필름 먼지와 스크래치 · Film Dust and Scratches](../film-dust-scratches/) · [빛샘 · Light Leak](../light-leak/) · [비네트 펄스 · Vignette Pulse](../vignette-pulse/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:media-use/references/media-treatment-recipes.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
