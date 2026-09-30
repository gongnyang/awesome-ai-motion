# Nº 502 도메인 워핑 · Domain Warping

> 클립 렌더 예정 / Clip rendering planned.

**노이즈를 다시 노이즈로 왜곡해 만든 유기적이고 끝없이 흐르는 셰이더 배경**

A shader background made by warping noise with more noise, organic and endlessly flowing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 브랜딩 | 발표, 웹 UI, 설명 영상 | webgl |

다른 이름 / Also known as: Flow noise field, 흐르는 노이즈 필드, Noise warping, Marble flow

## 선택 기준 / Selection

액체나 연기처럼 살아 있는 깊이를 주고, 화면 전체에 은은한 첨단 분위기를 만든다 / Adds living, liquid depth and a quiet high-tech mood across the whole screen.

- 히어로 배경이나 인트로에 살아 있는 추상 질감을 깔 때 / To lay a living abstract texture under a hero or intro
- 단색 배경이 심심한 타이틀 장면에 저강도 움직임을 줄 때 / To add low-intensity motion to a title scene with a dull flat background

좋은 예 / Good: 짙은 남색과 청록 사이를 5초 동안 천천히 흐르는 배경 위에 흰 제목이 또렷하게 올라간다
나쁜 예 / Bad: 시간 속도를 1.0 이상으로 올려 어지럽게 만들거나, 대비가 큰 색을 써 위 텍스트가 읽히지 않는다
주의 / Avoid: 텍스트 뒤에서는 명도 대비 폭을 0.25 이하로 제한 · time을 Date.now가 아니라 진행값으로 구동한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 루프 길이 | 5000ms | 4000~8000ms | 시작과 끝이 이어지게 시간 원형화 |
| FBM 옥타브 | 5 | 3~6 | 높을수록 GPU 비용 증가 |
| 시간 속도 | 0.4 | 0.2~0.7 | uTime 증가 배율 |
| 워프 강도 | 4.0 | 2.0~6.0 | q와 r 두 단계 |
| 팔레트 | 3색 mix | 2~4색 | 텍스트 대비 우선 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
// fragment shader 핵심, uTime = progress*loopSeconds
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.;a*=.5;}return v;}
vec2 q=vec2(fbm(uv*3.),fbm(uv*3.+5.2));
vec2 r=vec2(fbm(uv*3.+4.*q+vec2(1.7,9.2)+.15*uTime),fbm(uv*3.+4.*q+vec2(8.3,2.8)+.126*uTime));
float f=fbm(uv*3.+4.*r);
gl_FragColor=vec4(mix(mix(c1,c2,f),c3,length(r)*.6),1.);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 도메인 워핑 셰이더를 넣어줘. WebGL fragment shader에서 FBM 5옥타브 노이즈를 두 번 겹쳐 왜곡하고(warp 4.0), uTime은 진행값 x 5초 x 0.4로 구동해. 색은 남색, 청록, 흰빛 세 색 mix로 하고 텍스트 뒤 명도 폭은 0.25 이하. 루프는 5초에 이어지게 하고 Date.now와 Math.random은 쓰지 마.
```

### 한국어 · Codex
```text
<파일>에 domain-warping WebGL 배경을 구현해. FBM 5옥타브, warp 4.0, uTime=progress*5*0.4, 3색 팔레트, 해상도 1920x1080. 0초, 2.5초, 5초 프레임을 캡처해 0초와 5초가 같은 프레임인지(루프 이음), 위 텍스트 대비가 유지되는지 확인해. 셰이더 컴파일 오류 로그도 확인해.
```

### English · Claude Code
```text
Add a domain-warping shader background to <target>. In a WebGL fragment shader, warp 5-octave FBM noise with itself twice (warp strength 4.0), driving uTime as progress x 5s x 0.4. Mix three colors (navy, teal, near-white) and keep luminance range behind text at or below 0.25. Make it loop cleanly at 5s and avoid Date.now and Math.random.
```

### English · Codex
```text
Implement a domain-warping WebGL background in <file>: 5-octave FBM, warp 4.0, uTime=progress*5*0.4, 3-color palette, 1920x1080. Capture frames at 0s, 2.5s, and 5s to confirm 0s equals 5s (seamless loop) and that text contrast holds. Also check the console for shader compile errors.
```

예시 / Example: 도메인 워핑를 `.hero`에 적용해. / Apply Domain Warping to `.hero`.

## 적용 / Application

- HyperFrames: WebGL canvas의 uTime uniform을 paused 타임라인의 진행값으로만 갱신한다. requestAnimationFrame 시계는 쓰지 않는다. 오프라인 렌더는 프레임마다 draw를 한 번 호출한다
- ReelForge: 브리프에 palette 토큰, loopMs, octaves, warpStrength를 싣고 캔버스 해상도는 1920x1080 고정, 글자는 DOM으로 위에 얹는다
- Scrolline Deck: 스크롤 진행률을 uTime에 매핑하되 속도를 0.4 이하로 제한한다. 스크롤이 멈추면 배경도 정지해 시선을 빼앗지 않는다

조합 / Pair with: [메시 그라디언트 흐름 · Mesh Gradient Flow](../mesh-gradient-flow/) · [그라디언트 드리프트 · Gradient Drift](../gradient-drift/) · [난류 왜곡 · Turbulent Displace](../turbulent-displace/) · [홀로그램 광택 · Holographic sheen](../holographic-sheen/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/mesh-gradient-bg/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-background/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/aurora-drift/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/techniques.md`) (unknown) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
