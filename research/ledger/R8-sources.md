# R8 출처 조사 원장

조사일: 2026-09-30, Asia/Seoul.

중복 정리한 기법 135개를 R8.jsonl에 기록했다. README를 연 저장소는 83개이며 목록과 연결을 따라 생성, 입자, 셰이더, SVG, 3D와 에이전트 스킬을 우선 조사했다. 아래 목록은 이번 조사에서 실제로 연 출처의 범위다. GitHub 전체의 모든 저장소를 검색했다는 뜻은 아니다.

정의, 전달 효과, 파라미터와 재현 방향은 새로 작성했다. 구현 코드를 복사하지 않았다. 파라미터는 라이브러리 기본값이 아닌 독립 재현 제안값이다. 요청 스키마에 별도 prompt 키가 없으므로 모든 행의 notes에 재현 프롬프트를 기록했다.

방향, 강도, 색상과 발생 위치만 다른 효과는 variants로 묶었다. 알고리즘 이름이 달라도 화면 현상이 같은 것은 합쳤다. hover와 커서 반응은 영상 시간축의 고정 입력 궤적으로 바꿀 수 있는 경우만 포함했다. 정적 디자인, 인증, 설치, 렌더 운영과 영상 생성 API 호출 자체는 기법으로 세지 않았다.

라이선스는 실제 LICENSE, LICENSE.txt, LICENSE.md, LICENCE.md, UNLICENSE 또는 license.txt 본문을 기준으로 기록했다. unknown은 파일 확인 실패를 뜻하며 무라이선스라고 단정하지 않는다. README의 MIT 또는 Unlicense 표기만으로 확정하지 않았다. GPL, AGPL, LGPL, 미확인 및 제한 조건 출처는 참고만이다. 목록의 CC0가 연결된 프로젝트에도 적용된다고 해석하지 않는다.

## 저장소 목록

| 저장소 | 라이선스와 확인 근거 | 얻은 내용 |
| --- | --- | --- |
| [adobe-webplatform/Snap.svg](https://github.com/adobe-webplatform/Snap.svg) | Apache-2.0 [파일](https://raw.githubusercontent.com/adobe-webplatform/Snap.svg/master/LICENSE) | SVG 점선 흐름, SVG 경로 따라가기, SVG 그라디언트 스윕, SVG 난류 왜곡, SVG 아이콘 내부 모션에 연결했다. 원장 5개 기법에 출처로 기록했다. |
| [Animatious/awesome-animation](https://github.com/Animatious/awesome-animation) | MIT [파일](https://raw.githubusercontent.com/Animatious/awesome-animation/master/LICENSE) | 애니메이션 라이브러리와 SVG, canvas, 물리 계열 연결을 탐색했다. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Apache-2.0 [파일](https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/LICENSE) | 공식 marketplace.json에서 HyperFrames 등록과 영상 생성 플러그인을 확인했다. 등록만으로 기법이나 라이선스를 추정하지 않았다. |
| [anthropics/skills](https://github.com/anthropics/skills) | 스킬별 Apache-2.0 [파일](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/algorithmic-art/LICENSE.txt) | 노이즈 흐름장, 움직이는 보로노이 셀, 원 채우기 이완, 재귀 가지 성장, 파동 간섭, 색종이 분출에 연결했다. 원장 6개 기법에 출처로 기록했다. |
| [artcodev/three-fluid-fx](https://github.com/artcodev/three-fluid-fx) | MIT [파일](https://raw.githubusercontent.com/artcodev/three-fluid-fx/main/LICENSE) | 컬 노이즈 소용돌이, 유체 잉크 확산, 유체 드러내기 마스크, 흐름맵 번짐, 수면 굴절, 코스틱 빛 물결에 연결했다. 원장 6개 기법에 출처로 기록했다. |
| [ashima/webgl-noise](https://github.com/ashima/webgl-noise) | MIT [파일](https://raw.githubusercontent.com/ashima/webgl-noise/HEAD/LICENSE) | 펄린 드리프트에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [basementstudio/scrollytelling](https://github.com/basementstudio/scrollytelling) | MIT [파일](https://raw.githubusercontent.com/basementstudio/scrollytelling/HEAD/LICENSE) | 깊이 시차, 스크롤 영상 프레임 스크럽에 연결했다. 원장 2개 기법에 출처로 기록했다. |
| [Bewelge/Physarum-WebGL](https://github.com/Bewelge/Physarum-WebGL) | MIT [파일](https://raw.githubusercontent.com/Bewelge/Physarum-WebGL/HEAD/LICENSE.txt) | 점균 흔적 네트워크에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [camilleroux/awesome-generative-art](https://github.com/camilleroux/awesome-generative-art) | CC0-1.0 [파일](https://raw.githubusercontent.com/camilleroux/awesome-generative-art/HEAD/LICENSE) | 생성 예술 도구와 작품 분류에서 노이즈, 입자, 성장 계열을 추적했다. |
| [cangdongcheng/reaction-diffusion](https://github.com/cangdongcheng/reaction-diffusion) | MIT [파일](https://raw.githubusercontent.com/cangdongcheng/reaction-diffusion/HEAD/LICENSE) | 반응 확산 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [chinaBerg/awesome-canvas](https://github.com/chinaBerg/awesome-canvas) | MIT [파일](https://raw.githubusercontent.com/chinaBerg/awesome-canvas/main/LICENSE) | canvas 사례에서 입자, 생성형 그림, 게임 물리 연결을 찾았다. |
| [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills) | unknown, 파일 미확인, 참고만 | 프레넬 테두리 광택, 제품 턴테이블, 3D 블렌드 셰이프 모프에 연결했다. 원장 3개 기법에 출처로 기록했다. |
| [codrops/InfiniteTubes](https://github.com/codrops/InfiniteTubes) | unknown, 파일 미확인, 참고만 | 스플라인 터널 비행에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [codrops/LiquidDistortion](https://github.com/codrops/LiquidDistortion) | unknown, 파일 미확인, 참고만 | 변위 이미지 전환에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [codrops/OnScrollShapeMorph](https://github.com/codrops/OnScrollShapeMorph) | MIT [파일](https://raw.githubusercontent.com/codrops/OnScrollShapeMorph/main/LICENSE) | SVG 경로 모프에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [codrops/ParticleEffectsButtons](https://github.com/codrops/ParticleEffectsButtons) | unknown, 파일 미확인, 참고만 | README에서 모션 관련 사례와 연결을 검토했다. 별도 기법으로 추가할 고유 현상은 찾지 못했다. |
| [codrops/RainEffect](https://github.com/codrops/RainEffect) | unknown, 파일 미확인, 참고만 | 빗방울 유리에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [codrops/RotatingOnScrollAnimations](https://github.com/codrops/RotatingOnScrollAnimations) | MIT [파일](https://raw.githubusercontent.com/codrops/RotatingOnScrollAnimations/HEAD/LICENSE) | 3D 카드 기울임과 부유에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [codrops/ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations) | MIT [파일](https://raw.githubusercontent.com/codrops/ScrollBasedLayoutAnimations/main/LICENSE) | README에서 모션 관련 사례와 연결을 검토했다. 별도 기법으로 추가할 고유 현상은 찾지 못했다. |
| [codrops/WebGLBlobs](https://github.com/codrops/WebGLBlobs) | MIT [파일](https://raw.githubusercontent.com/codrops/WebGLBlobs/main/LICENSE) | 노이즈 블롭 변형에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [danhnm1203/scrollytelling](https://github.com/danhnm1203/scrollytelling) | MIT [파일](https://raw.githubusercontent.com/danhnm1203/scrollytelling/HEAD/LICENSE) | 스크롤 영상 프레임 스크럽에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [devloop01/differential-growth](https://github.com/devloop01/differential-growth) | unknown, 파일 미확인, 참고만 | 차등 선 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [diffusionstudio/lottie](https://github.com/diffusionstudio/lottie) | MIT [파일](https://raw.githubusercontent.com/diffusionstudio/lottie/HEAD/LICENSE) | SVG 선 그리기, SVG 윤곽에서 채움, SVG 그라디언트 스윕에 연결했다. 원장 3개 기법에 출처로 기록했다. |
| [dinaf2026-web/awesome-remotion-skills](https://github.com/dinaf2026-web/awesome-remotion-skills) | unknown, 파일 미확인, 참고만 | Remotion 스킬 목록을 찾아 영상 제작 지침과 개별 모션 현상을 구분했다. |
| [dsforza96/tree-gen](https://github.com/dsforza96/tree-gen) | MIT [파일](https://raw.githubusercontent.com/dsforza96/tree-gen/HEAD/LICENSE) | 공간 점유 가지 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [fand/vfx-js](https://github.com/fand/vfx-js) | MIT [파일](https://raw.githubusercontent.com/fand/vfx-js/HEAD/LICENSE) | 움직이는 보로노이 셀, 입자 조립과 분산, 블룸 맥박, JPEG 코덱 글리치, 픽셀 정렬 늘어짐, 픽셀화와 해상도 복구 등에 연결했다. 원장 10개 기법에 출처로 기록했다. |
| [frankxai/awesome-motion-design-agent-skills](https://github.com/frankxai/awesome-motion-design-agent-skills) | CC0-1.0 [파일](https://raw.githubusercontent.com/frankxai/awesome-motion-design-agent-skills/main/LICENSE) | 모션 에이전트 스킬 목록에서 WebGL, HyperFrames, Remotion 출처를 추적했다. |
| [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) | MIT [파일](https://raw.githubusercontent.com/freshtechbro/claudedesignskills/HEAD/LICENSE) | 디자인 스킬 모음에서 모션 관련 지침을 훑고 제작 과정 자체를 기법으로 세지 않았다. |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 [파일](https://raw.githubusercontent.com/heygen-com/hyperframes/main/LICENSE) | 균열과 파편 분해, 색수차 분리, 슬라이스 글리치, 셔터 모션 블러, 공간 돌리 이동, 3D 카메라 비행 등에 연결했다. 원장 19개 기법에 출처로 기록했다. |
| [iart-ai/awesome-motion-skills](https://github.com/iart-ai/awesome-motion-skills) | CC0-1.0 [파일](https://raw.githubusercontent.com/iart-ai/awesome-motion-skills/master/LICENSE) | SVG, WebGL, JavaScript, 생성 일러스트 스킬 출처를 발견했다. |
| [iart-ai/generative-illustration-skills](https://github.com/iart-ai/generative-illustration-skills) | unknown, 파일 미확인, 참고만 | 분리 그림 레이어 모션에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [iart-ai/javascript-animation-skills](https://github.com/iart-ai/javascript-animation-skills) | MIT [파일](https://raw.githubusercontent.com/iart-ai/javascript-animation-skills/HEAD/LICENSE) | 손그림 끓는 선에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [iart-ai/motion-skills](https://github.com/iart-ai/motion-skills) | MIT [파일](https://raw.githubusercontent.com/iart-ai/motion-skills/master/LICENSE) | 스킬 분류와 연결을 확인하고 같은 현상의 중복 수집을 피했다. |
| [iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills) | MIT [파일](https://raw.githubusercontent.com/iart-ai/web-animation-skills/main/LICENSE) | GSAP와 CSS 지침을 확인하고 담당 영역 밖의 일반 효과 확장은 생략했다. |
| [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills) | MIT [파일](https://raw.githubusercontent.com/iart-ai/webgl-animation-skills/main/LICENSE) | 노이즈 흐름장, 컬 노이즈 소용돌이, 프랙탈 노이즈 변화, 도메인 워핑, 연결 입자 네트워크, 색종이 분출 등에 연결했다. 원장 22개 기법에 출처로 기록했다. |
| [jasonwebb/2d-differential-growth-experiments](https://github.com/jasonwebb/2d-differential-growth-experiments) | CC0-1.0 [파일](https://raw.githubusercontent.com/jasonwebb/2d-differential-growth-experiments/HEAD/LICENSE) | 차등 선 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [jasonwebb/2d-diffusion-limited-aggregation-experiments](https://github.com/jasonwebb/2d-diffusion-limited-aggregation-experiments) | CC0-1.0 [파일](https://raw.githubusercontent.com/jasonwebb/2d-diffusion-limited-aggregation-experiments/HEAD/LICENSE) | 확산 제한 가지 퇴적에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources) | unknown, 파일 미확인, 참고만 | 반응 확산 성장, 확산 제한 가지 퇴적, 차등 선 성장, 점균 흔적 네트워크, 공간 점유 가지 성장, 입자 생명 군집 등에 연결했다. 원장 9개 기법에 출처로 기록했다. |
| [jasonwebb/reaction-diffusion-playground](https://github.com/jasonwebb/reaction-diffusion-playground) | CC0-1.0 [파일](https://raw.githubusercontent.com/jasonwebb/reaction-diffusion-playground/HEAD/LICENSE) | 반응 확산 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [kosmos/awesome-generative-art](https://github.com/kosmos/awesome-generative-art) | unknown, 파일 미확인, 참고만 | 생성 예술 도구와 프레임워크 연결을 교차 확인했다. |
| [LottieFiles/awesome-lottie](https://github.com/LottieFiles/awesome-lottie) | unknown, 파일 미확인, 참고만 | Lottie 제작과 재생 생태계를 확인하고 포맷 자체를 별도 기법으로 세지 않았다. |
| [lottiefiles/motion-design-skill](https://github.com/lottiefiles/motion-design-skill) | MIT [파일](https://raw.githubusercontent.com/lottiefiles/motion-design-skill/HEAD/LICENSE) | SVG 선 그리기에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [maptalks/awesome-maptalks](https://github.com/maptalks/awesome-maptalks) | unknown, 파일 미확인, 참고만 | 지도 시각화 연결을 확인했으나 데이터 담당 영역으로 분류해 추가 수집을 생략했다. |
| [martinlaxenaire/curtainsjs](https://github.com/martinlaxenaire/curtainsjs) | MIT [파일](https://raw.githubusercontent.com/martinlaxenaire/curtainsjs/master/LICENSE.txt) | 변위 이미지 전환, 정점 파도 변형, 흐름맵 번짐, 기울어진 페이지 스크롤에 연결했다. 원장 4개 기법에 출처로 기록했다. |
| [mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch) | MIT [파일](https://raw.githubusercontent.com/mattdesl/canvas-sketch/HEAD/LICENSE.md) | 생성 그림 제작 도구와 애니메이션 루프 개념을 확인했다. |
| [mattdesl/workshop-generative-art](https://github.com/mattdesl/workshop-generative-art) | 구현 CC-BY-NC-SA-4.0, README의 문서 MIT 표기 [파일](https://raw.githubusercontent.com/mattdesl/workshop-generative-art/HEAD/src/LICENSE.md) | 노이즈와 흐름장 학습 자료를 확인했다. 구현 부분은 CC-BY-NC-SA-4.0으로 참고만. |
| [maxwellito/vivus](https://github.com/maxwellito/vivus) | MIT [파일](https://raw.githubusercontent.com/maxwellito/vivus/HEAD/LICENSE) | SVG 선 그리기, SVG 선 구간 이동, SVG 윤곽에서 채움에 연결했다. 원장 3개 기법에 출처로 기록했다. |
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | MIT [파일](https://raw.githubusercontent.com/mrdoob/three.js/master/LICENSE) | 조화파 장, 빗줄기 낙하, 불꽃 기둥, 연기 확산, 입자 조립과 분산, 이상 끌개 궤적 등에 연결했다. 원장 46개 기법에 출처로 기록했다. |
| [nature-of-code/noc-book-2](https://github.com/nature-of-code/noc-book-2) | unknown, 파일 미확인, 참고만 | 노이즈 흐름장, 랜덤 워크, 펄린 드리프트, 재귀 가지 성장, 셀룰러 오토마타 변화, 입자 끌림과 밀림 등에 연결했다. 원장 11개 기법에 출처로 기록했다. |
| [nature-of-code/noc-examples-p5.js](https://github.com/nature-of-code/noc-examples-p5.js) | MIT [파일](https://raw.githubusercontent.com/nature-of-code/noc-examples-p5.js/HEAD/LICENSE) | README에서 모션 관련 사례와 연결을 검토했다. 별도 기법으로 추가할 고유 현상은 찾지 못했다. |
| [naughtyduk/particlesGL](https://github.com/naughtyduk/particlesGL) | custom personal-noncommercial/commercial-paid [파일](https://raw.githubusercontent.com/naughtyduk/particlesGL/HEAD/LICENCE.md) | 입자 조립과 분산, 입자 끌림과 밀림, 입자 비디오 모자이크에 연결했다. 원장 3개 기법에 출처로 기록했다. |
| [nexu-io/motion-anything](https://github.com/nexu-io/motion-anything) | Apache-2.0 [파일](https://raw.githubusercontent.com/nexu-io/motion-anything/HEAD/LICENSE) | 에이전트 모션 제작과 평가 흐름을 확인하고 도구 이름을 기법으로 세지 않았다. |
| [nicknikolov/pex-space-colonization](https://github.com/nicknikolov/pex-space-colonization) | unknown, 파일 미확인, 참고만 | 공간 점유 가지 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [nicoptere/physarum](https://github.com/nicoptere/physarum) | Unlicense [파일](https://raw.githubusercontent.com/nicoptere/physarum/HEAD/LICENSE) | 점균 흔적 네트워크에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [oframe/ogl](https://github.com/oframe/ogl) | unknown, 파일 미확인, 참고만 | 흐름맵 번짐, 프레넬 테두리 광택, 블룸 맥박, 카메라 공전, 스플라인 터널 비행, 이동 안개 공개 등에 연결했다. 원장 9개 기법에 출처로 기록했다. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | MIT [파일](https://raw.githubusercontent.com/Orkas-AI/Orkas-VideoStudio/HEAD/LICENSE) | 영상 제작 스킬과 파이프라인을 확인하고 기존 기법과 중복되는 항목을 제외했다. |
| [paper-design/shaders](https://github.com/paper-design/shaders) | Apache-2.0 [파일](https://raw.githubusercontent.com/paper-design/shaders/HEAD/LICENSE) | 프랙탈 노이즈 변화, 도메인 워핑, 움직이는 보로노이 셀, 조화파 장, 파동 간섭, 메타볼 합체 등에 연결했다. 원장 24개 기법에 출처로 기록했다. |
| [patriciogonzalezvivo/thebookofshaders](https://github.com/patriciogonzalezvivo/thebookofshaders) | custom educational-link-only, all rights reserved [파일](https://raw.githubusercontent.com/patriciogonzalezvivo/thebookofshaders/HEAD/LICENSE) | 노이즈와 생성 패턴 학습 연결을 확인했다. 자체 제한 조건으로 참고만. |
| [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) | MIT [파일](https://raw.githubusercontent.com/PavelDoGreat/WebGL-Fluid-Simulation/master/LICENSE) | 유체 잉크 확산에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [piellardj/paint-webgl](https://github.com/piellardj/paint-webgl) | unknown, 파일 미확인, 참고만 | 액체를 따라 이동하는 페인트 표현을 확인했다. |
| [piellardj/reaction-diffusion-webgl](https://github.com/piellardj/reaction-diffusion-webgl) | MIT [파일](https://raw.githubusercontent.com/piellardj/reaction-diffusion-webgl/HEAD/LICENSE) | 반응 확산 성장에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [pixel-point/animate-text](https://github.com/pixel-point/animate-text) | unknown, 파일 미확인, 참고만 | 깊이 시차에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [processing/p5.js](https://github.com/processing/p5.js) | LGPL-2.1 [파일](https://raw.githubusercontent.com/processing/p5.js/main/license.txt) | 예제 도구의 라이선스를 검증했다. 라이브러리는 LGPL-2.1로 참고만이며 예제 사이트 MIT와 구분한다. |
| [processing/p5.js-website](https://github.com/processing/p5.js-website) | MIT [파일](https://raw.githubusercontent.com/processing/p5.js-website/main/LICENSE) | 재귀 가지 성장, 셀룰러 오토마타 변화, 프랙탈 줌, 조화파 장, 만화경 모션, 연결 입자 네트워크 등에 연결했다. 원장 14개 기법에 출처로 기록했다. |
| [QC20/Colourful-Attraction](https://github.com/QC20/Colourful-Attraction) | MIT [파일](https://raw.githubusercontent.com/QC20/Colourful-Attraction/HEAD/LICENSE) | 이상 끌개 궤적에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [raphamorim/awesome-canvas](https://github.com/raphamorim/awesome-canvas) | MIT [파일](https://raw.githubusercontent.com/raphamorim/awesome-canvas/main/LICENSE.md) | canvas 라이브러리와 시각 효과 출처를 교차 확인했다. |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | unknown, 파일 미확인, 참고만 | 오디오 반응 도형 맥박, 스펙트럼 리본과 파형에 연결했다. 원장 2개 기법에 출처로 기록했다. |
| [Robpayot/webgl-distortion-bulge-effect](https://github.com/Robpayot/webgl-distortion-bulge-effect) | MIT [파일](https://raw.githubusercontent.com/Robpayot/webgl-distortion-bulge-effect/master/LICENSE) | 볼록 렌즈 왜곡에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [RolandR/diffusion-limited-aggregation](https://github.com/RolandR/diffusion-limited-aggregation) | AGPL-3.0 [파일](https://raw.githubusercontent.com/RolandR/diffusion-limited-aggregation/HEAD/LICENSE) | 확산 제한 가지 퇴적에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [romanticamaj/awesome-ui-motion-skills](https://github.com/romanticamaj/awesome-ui-motion-skills) | MIT [파일](https://raw.githubusercontent.com/romanticamaj/awesome-ui-motion-skills/HEAD/LICENSE) | UI 모션 스킬 카탈로그를 확인하고 동일 현상과 순수 입력 지침을 제외했다. |
| [sergey-pimenov/awesome-web-animation](https://github.com/sergey-pimenov/awesome-web-animation) | CC0-1.0 [파일](https://raw.githubusercontent.com/sergey-pimenov/awesome-web-animation/HEAD/license) | 웹 모션 목록의 SVG, canvas, 3D 연결을 확인했다. |
| [sjfricke/awesome-webgl](https://github.com/sjfricke/awesome-webgl) | CC0-1.0 [파일](https://raw.githubusercontent.com/sjfricke/awesome-webgl/master/LICENSE) | WebGL 프레임워크, 예제, 셰이더 관련 출처를 확장했다. |
| [skeeto/webgl-particles](https://github.com/skeeto/webgl-particles) | Unlicense [파일](https://raw.githubusercontent.com/skeeto/webgl-particles/HEAD/UNLICENSE) | README에서 모션 관련 사례와 연결을 검토했다. 별도 기법으로 추가할 고유 현상은 찾지 못했다. |
| [stegu/psrdnoise](https://github.com/stegu/psrdnoise) | unknown, 파일 미확인, 참고만 | 회전 노이즈 자료를 확인했다. LICENSE 파일 미확인으로 참고만. |
| [streamich/awesome-css-animations](https://github.com/streamich/awesome-css-animations) | unknown, 파일 미확인, 참고만 | CSS 효과 목록을 훑고 타 워커 담당 라이브러리의 별도 확장은 생략했다. |
| [terkelg/awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding) | unknown, 파일 미확인, 참고만 | 창작 코딩 목록에서 p5, WebGL, 셰이더, 물리와 생성형 아트 출처를 추적했다. |
| [thednp/kute.js](https://github.com/thednp/kute.js) | MIT [파일](https://raw.githubusercontent.com/thednp/kute.js/master/LICENSE) | SVG 선 그리기, SVG 경로 모프, SVG 선 구간 이동에 연결했다. 원장 3개 기법에 출처로 기록했다. |
| [tsparticles/presets](https://github.com/tsparticles/presets) | MIT [파일](https://raw.githubusercontent.com/tsparticles/presets/HEAD/LICENSE) | 앰비언트 입자 유영, 연결 입자 네트워크, 색종이 분출, 불꽃놀이 확산, 입자 분수, 눈 내림 등에 연결했다. 원장 12개 기법에 출처로 기록했다. |
| [tsparticles/tsparticles](https://github.com/tsparticles/tsparticles) | MIT [파일](https://raw.githubusercontent.com/tsparticles/tsparticles/main/LICENSE) | README에서 모션 관련 사례와 연결을 검토했다. 별도 기법으로 추가할 고유 현상은 찾지 못했다. |
| [vaitko/awesome-immersive-storytelling](https://github.com/vaitko/awesome-immersive-storytelling) | CC0-1.0 [파일](https://raw.githubusercontent.com/vaitko/awesome-immersive-storytelling/main/LICENSE) | 스크롤 영상 프레임 스크럽에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [veltman/flubber](https://github.com/veltman/flubber) | MIT [파일](https://raw.githubusercontent.com/veltman/flubber/HEAD/LICENSE) | SVG 경로 모프, SVG 도형 분할과 합체에 연결했다. 원장 2개 기법에 출처로 기록했다. |
| [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg) | unknown, 파일 미확인, 참고만 | SVG 난류 왜곡에 연결했다. 원장 1개 기법에 출처로 기록했다. |
| [zbryikt/awesome-webgl](https://github.com/zbryikt/awesome-webgl) | unknown, 파일 미확인, 참고만 | WebGL 사례와 도구 연결을 교차 확인했다. |

## 공식 예제와 문서, 실제 읽은 스킬 문서

공식 예제 색인의 이름과 문서 설명을 기반으로 현상을 도출했다. 모든 데모를 브라우저에서 재생하거나 프레임별로 검증한 것은 아니다. three.js의 WebGPU 사례에서 얻은 아이디어는 독립 WebGL 재현 방향으로 기록했다. p5 라이브러리의 LGPL과 p5 예제 사이트 저장소의 MIT를 구분했다.

Paper의 paper-texture, static-mesh-gradient, static-radial-gradient는 정적 패턴이어서 새 기법으로 세지 않았다. waves, dot-grid, fluted-glass는 정적 파라미터의 시간 변화 재현 제안을 관련 행에 명시했다. Nature of Code는 공식 예제 색인과 저장소 README를 읽었으며 모든 장 본문을 읽었다고 간주하지 않는다.

아래 라이선스는 같은 출처 저장소에서 확인한 것으로, 별도 사이트 콘텐츠 전체의 이용 조건을 확정하는 표기가 아니다.

| 문서 또는 사이트 | 연관 저장소 라이선스 | 얻은 내용 |
| --- | --- | --- |
| [animate-catalog](https://raw.githubusercontent.com/pixel-point/animate-text/HEAD/catalog/text-animations/catalog.json) | unknown, 참고만 | 24개 bundled 텍스트 효과 사양 목록을 확인했다. 깊이 시차만 담당 범위에서 병합했다. |
| [animate-skill](https://raw.githubusercontent.com/pixel-point/animate-text/HEAD/skills/animate-text/SKILL.md) | unknown, 참고만 | 모션 관련 설명과 원 저장소 연결을 확인했다. |
| [art-license](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/algorithmic-art/LICENSE.txt) | Apache-2.0, 스킬별 | algorithmic-art의 실제 Apache-2.0 라이선스를 확인했다. |
| [art-skill](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/algorithmic-art/SKILL.md) | Apache-2.0, 스킬별 | 흐름장, 노이즈, 군집과 생성형 아트 원칙을 읽었다. |
| [claude-market](https://raw.githubusercontent.com/anthropics/claude-plugins-official/HEAD/.claude-plugin/marketplace.json) | Apache-2.0 | 공식 플러그인 등록 파일의 HyperFrames 및 영상 생성 관련 항목을 확인했다. |
| [curtains-index](https://www.curtainsjs.com/examples/) | MIT | 왜곡, 흐름장, 복수 텍스처 전환과 스크롤 깊이 예제를 확인했다. |
| [gif-license](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/slack-gif-creator/LICENSE.txt) | Apache-2.0, 스킬별 | slack-gif-creator의 실제 Apache-2.0 라이선스를 확인했다. |
| [gif-skill](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/slack-gif-creator/SKILL.md) | Apache-2.0, 스킬별 | 루프, 물리와 GIF에서 보이는 반복 동작 지침을 읽었다. |
| [hf-adapters-lottie.md](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/adapters/lottie.md) | Apache-2.0 | 모션 기법, 깊이, 잔상과 매체 연결 지침을 읽었다. |
| [hf-adapters-three.md](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/adapters/three.md) | Apache-2.0 | 모션 기법, 깊이, 잔상과 매체 연결 지침을 읽었다. |
| [hf-references-motion-blur.md](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/references/motion-blur.md) | Apache-2.0 | 모션 기법, 깊이, 잔상과 매체 연결 지침을 읽었다. |
| [hf-rule-3d-camera-flight](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/3d-camera-flight.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-3d-page-scroll](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/3d-page-scroll.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-3d-text-depth-layers](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/3d-text-depth-layers.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-chromatic-glitch](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/chromatic-glitch.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-depth-of-field-blur](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/depth-of-field-blur.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-depth-scatter-assemble](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/depth-scatter-assemble.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-split-tilt-cards](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/split-tilt-cards.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-svg-icon-enrichment](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/svg-icon-enrichment.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rule-svg-path-draw](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules/svg-path-draw.md) | Apache-2.0 | 해당 세부 규칙에서 3D, 깊이, SVG 또는 셰이더 현상과 파라미터를 확인했다. |
| [hf-rules-index.md](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/rules-index.md) | Apache-2.0 | 모션 기법, 깊이, 잔상과 매체 연결 지침을 읽었다. |
| [hf-techniques.md](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/techniques.md) | Apache-2.0 | 모션 기법, 깊이, 잔상과 매체 연결 지침을 읽었다. |
| [hyper-animation](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-animation/SKILL.md) | Apache-2.0 | 모션 관련 설명과 원 저장소 연결을 확인했다. |
| [hyper-creative](https://raw.githubusercontent.com/heygen-com/hyperframes/HEAD/skills/hyperframes-creative/SKILL.md) | Apache-2.0 | 모션 관련 설명과 원 저장소 연결을 확인했다. |
| [iart-particle-system](https://raw.githubusercontent.com/iart-ai/webgl-animation-skills/HEAD/skills/particle-system/SKILL.md) | MIT | 입자 방출, 힘, 수명, 유형과 GPU 방식의 아이디어를 읽었다. |
| [iart-shader-glsl](https://raw.githubusercontent.com/iart-ai/webgl-animation-skills/HEAD/skills/shader-glsl/SKILL.md) | MIT | 노이즈, UV 변형과 시간 기반 셰이더 변화를 읽었다. |
| [iart-threejs-animation](https://raw.githubusercontent.com/iart-ai/webgl-animation-skills/HEAD/skills/threejs-animation/SKILL.md) | MIT | 키프레임, 스켈레톤, 모프 타깃과 믹싱의 시각적 역할을 읽었다. |
| [kute-draw](https://thednp.github.io/kute.js/svgDraw.html) | MIT | SVG 선 드로잉과 구간 표시를 확인했다. |
| [kute-morph](https://thednp.github.io/kute.js/svgMorph.html) | MIT | SVG 패스 모프의 점 대응과 보간 조건을 확인했다. |
| [kute-transform](https://thednp.github.io/kute.js/svgTransform.html) | MIT | SVG 원점과 변환 표현을 확인했다. |
| [noc-index](https://natureofcode.com/examples/) | unknown, 참고만 | 랜덤, 힘, 진동, 입자, 자율 에이전트, 프랙탈과 셀룰러 예제 목록을 확인했다. |
| [ogl-index](https://oframe.github.io/ogl/examples/) | unknown, 참고만 | 플로우맵, 빛, 안개, 블룸, 튜브, 그림자와 윤곽 예제 목록을 확인했다. |
| [p5-index](https://p5js.org/examples/) | MIT, 예제 사이트 | 공식 예제 제목과 URL에서 파도, 입자, 재귀, 프랙탈, 물리와 셰이더 범위를 확인했다. |
| [paper-color-panels](https://shaders.paper.design/color-panels) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-dithering](https://shaders.paper.design/dithering) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-dot-grid](https://shaders.paper.design/dot-grid) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-dot-orbit](https://shaders.paper.design/dot-orbit) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-fluted-glass](https://shaders.paper.design/fluted-glass) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-gem-smoke](https://shaders.paper.design/gem-smoke) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-god-rays](https://shaders.paper.design/god-rays) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-grain-gradient](https://shaders.paper.design/grain-gradient) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-halftone-cmyk](https://shaders.paper.design/halftone-cmyk) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-halftone-dots](https://shaders.paper.design/halftone-dots) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-heatmap](https://shaders.paper.design/heatmap) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-image-dithering](https://shaders.paper.design/image-dithering) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-index](https://shaders.paper.design/) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-lens-distortion](https://shaders.paper.design/lens-distortion) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-liquid-metal](https://shaders.paper.design/liquid-metal) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-mesh-gradient](https://shaders.paper.design/mesh-gradient) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-metaballs](https://shaders.paper.design/metaballs) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-neuro-noise](https://shaders.paper.design/neuro-noise) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-paper-texture](https://shaders.paper.design/paper-texture) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-perlin-noise](https://shaders.paper.design/perlin-noise) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-pulsing-border](https://shaders.paper.design/pulsing-border) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-simplex-noise](https://shaders.paper.design/simplex-noise) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-smoke-ring](https://shaders.paper.design/smoke-ring) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-spiral](https://shaders.paper.design/spiral) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-static-mesh-gradient](https://shaders.paper.design/static-mesh-gradient) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-static-radial-gradient](https://shaders.paper.design/static-radial-gradient) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-swirl](https://shaders.paper.design/swirl) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-voronoi](https://shaders.paper.design/voronoi) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-warp](https://shaders.paper.design/warp) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-water](https://shaders.paper.design/water) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [paper-waves](https://shaders.paper.design/waves) | Apache-2.0 | 효과 설명과 조절 항목을 읽고 화면 현상 기준으로 병합했다. |
| [pixel-catalog](https://raw.githubusercontent.com/pixel-point/animate-text/HEAD/skills/animate-text/references/catalog.md) | unknown, 참고만 | 공개 및 추가 bundled 사양 목록의 깊이 모션을 확인했다. |
| [preset-ambient](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/ambient/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-bigCircles](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/bigCircles/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-bubbles](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/bubbles/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-confetti](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/confetti/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-fire](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/fire/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-firefly](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/firefly/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-fireworks](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/fireworks/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-fountain](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/fountain/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-hyperspace](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/hyperspace/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-links](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/links/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-matrix](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/matrix/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-seaAnemone](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/seaAnemone/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-snow](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/snow/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [preset-stars](https://raw.githubusercontent.com/tsparticles/presets/HEAD/presets/stars/README.md) | MIT | 프리셋의 시각적 주제와 지속 또는 분출 구분을 확인했다. |
| [presets-catalog](https://raw.githubusercontent.com/tsparticles/presets/HEAD/README.md) | MIT | 모션 관련 설명과 원 저장소 연결을 확인했다. |
| [remotion-skill](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/SKILL.md) | unknown, 참고만 | 모션 관련 설명과 원 저장소 연결을 확인했다. |
| [rm-3d.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/3d.md) | unknown, 참고만 | 영상 시간축에서 3D, Lottie, 오디오 또는 전환을 적용하는 지침을 읽었다. |
| [rm-REFERENCE.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/REFERENCE.md) | unknown, 참고만 | 영상 시간축에서 3D, Lottie, 오디오 또는 전환을 적용하는 지침을 읽었다. |
| [rm-audio-visualization.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/audio-visualization.md) | unknown, 참고만 | 영상 시간축에서 3D, Lottie, 오디오 또는 전환을 적용하는 지침을 읽었다. |
| [rm-lottie.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/lottie.md) | unknown, 참고만 | 영상 시간축에서 3D, Lottie, 오디오 또는 전환을 적용하는 지침을 읽었다. |
| [rm-transitions.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/transitions.md) | unknown, 참고만 | 영상 시간축에서 3D, Lottie, 오디오 또는 전환을 적용하는 지침을 읽었다. |
| [skills-hyperframes](https://www.skills.sh/heygen-com/hyperframes/hyperframes-animation) | Apache-2.0 | 스킬 소개와 원 저장소 연결을 확인했다. 마켓 등록만으로 별도 모션을 세지 않았다. |
| [skills-motion](https://skills.sh/?q=motion) | unknown, 마켓 또는 사이트 자체 라이선스 미확인 | 스킬 소개와 원 저장소 연결을 확인했다. 마켓 등록만으로 별도 모션을 세지 않았다. |
| [skills-particle](https://www.skills.sh/iart-ai/webgl-animation-skills/particle-system) | MIT | 스킬 소개와 원 저장소 연결을 확인했다. 마켓 등록만으로 별도 모션을 세지 않았다. |
| [skills-pixel](https://www.skills.sh/pixel-point/animate-text/animate-text) | unknown, 참고만 | 스킬 소개와 원 저장소 연결을 확인했다. 마켓 등록만으로 별도 모션을 세지 않았다. |
| [skills-remotion](https://www.skills.sh/remotion-dev/skills/remotion-best-practices) | unknown, 참고만 | 스킬 소개와 원 저장소 연결을 확인했다. 마켓 등록만으로 별도 모션을 세지 않았다. |
| [skills-webgl](https://skills.sh/iart-ai/webgl-animation-skills/particle-systems) | MIT | 스킬 소개와 원 저장소 연결을 확인했다. 마켓 등록만으로 별도 모션을 세지 않았다. |
| [snap-docs](http://snapsvg.io/docs/) | Apache-2.0 | 경로, 채움, 변환과 필터 조절 API의 화면 표현을 확인했다. |
| [three-index](https://raw.githubusercontent.com/mrdoob/three.js/HEAD/examples/files.json) | MIT | 공식 예제 이름 목록에서 모션, 카메라, 물리, 깊이, 잔상과 입자 관련 예제를 확인했다. |
| [vfx-catalog](https://raw.githubusercontent.com/fand/vfx-js/HEAD/packages/effects/README.md) | MIT | 왜곡, 글리치, 픽셀, ASCII와 색 계열 효과 목록을 확인했다. |
| [vfx-effects](https://amagi.dev/vfx-js/) | MIT | 공식 효과 소개에서 화면 현상을 교차 확인했다. |
| [webgl-skill](https://raw.githubusercontent.com/iart-ai/webgl-animation-skills/HEAD/README.md) | MIT | 모션 관련 설명과 원 저장소 연결을 확인했다. |
| [workshop-exercises](https://raw.githubusercontent.com/mattdesl/workshop-generative-art/HEAD/docs/exercises.md) | 구현 CC-BY-NC-SA-4.0, 참고만 | 흐름장, 노이즈와 입자 관련 학습 과제 설명을 확인했다. |
| [workshop-license](https://raw.githubusercontent.com/mattdesl/workshop-generative-art/HEAD/src/LICENSE.md) | 구현 CC-BY-NC-SA-4.0, 참고만 | 구현 부분의 비상업 CC-BY-NC-SA-4.0 조건을 확인했다. |

추가 스킬별 라이선스: [slack-gif-creator/LICENSE.txt](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/slack-gif-creator/LICENSE.txt)는 Apache-2.0이다. anthropics/skills 전체에 단일 라이선스를 추정하지 않았다.

## 원장의 세부 예제 연결

원장 sources에 넣은 공식 예제와 세부 문서 URL을 다시 모았다. 같은 URL은 여러 기법에 연결되어도 한 번만 적었다. 이 목록의 개별 URL은 위 색인과 설명에서 확인한 연결을 포함하며 개별 데모 실행 검증 목록은 아니다.

- [anthropics/skills: SKILL.md](https://github.com/anthropics/skills/blob/HEAD/skills/algorithmic-art/SKILL.md) | Apache-2.0 | R8-001, R8-007, R8-008, R8-009, R8-013.
- [anthropics/skills: SKILL.md](https://github.com/anthropics/skills/blob/HEAD/skills/slack-gif-creator/SKILL.md) | Apache-2.0 | R8-017.
- [artcodev/three-fluid-fx: ](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/distortion/) | MIT | R8-055, R8-056, R8-083.
- [artcodev/three-fluid-fx: ](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/overlay/) | MIT | R8-032.
- [artcodev/three-fluid-fx: ](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/particles-3d/) | MIT | R8-002.
- [artcodev/three-fluid-fx: ](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/reveal-mask/) | MIT | R8-049.
- [fand/vfx-js: effects#effects](https://github.com/fand/vfx-js/tree/main/packages/effects#effects) | MIT | R8-007, R8-029, R8-061, R8-065, R8-066, R8-067, R8-068, R8-069, R8-071, R8-072.
- [heygen-com/hyperframes: lottie.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/adapters/lottie.md) | Apache-2.0 | R8-103, R8-123.
- [heygen-com/hyperframes: motion-blur.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/references/motion-blur.md) | Apache-2.0 | R8-085.
- [heygen-com/hyperframes: 3d-camera-flight.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-camera-flight.md) | Apache-2.0 | R8-090, R8-092.
- [heygen-com/hyperframes: 3d-page-scroll.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-page-scroll.md) | Apache-2.0 | R8-097.
- [heygen-com/hyperframes: 3d-text-depth-layers.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-text-depth-layers.md) | Apache-2.0 | R8-124.
- [heygen-com/hyperframes: chromatic-glitch.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/chromatic-glitch.md) | Apache-2.0 | R8-063, R8-064.
- [heygen-com/hyperframes: depth-of-field-blur.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/depth-of-field-blur.md) | Apache-2.0 | R8-094.
- [heygen-com/hyperframes: depth-scatter-assemble.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/depth-scatter-assemble.md) | Apache-2.0 | R8-095.
- [heygen-com/hyperframes: split-tilt-cards.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/split-tilt-cards.md) | Apache-2.0 | R8-096.
- [heygen-com/hyperframes: svg-icon-enrichment.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/svg-icon-enrichment.md) | Apache-2.0 | R8-113, R8-118.
- [heygen-com/hyperframes: svg-path-draw.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/svg-path-draw.md) | Apache-2.0 | R8-109.
- [heygen-com/hyperframes: techniques.md](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/techniques.md) | Apache-2.0 | R8-042, R8-093, R8-114, R8-120.
- [iart-ai/webgl-animation-skills: SKILL.md](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) | MIT | R8-001, R8-002, R8-016, R8-017, R8-020, R8-021, R8-022, R8-023, R8-024, R8-030.
- [iart-ai/webgl-animation-skills: SKILL.md](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/shader-glsl/SKILL.md) | MIT | R8-005, R8-006, R8-047, R8-048, R8-050, R8-064, R8-073.
- [iart-ai/webgl-animation-skills: SKILL.md](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/threejs-animation/SKILL.md) | MIT | R8-088, R8-089, R8-090, R8-093, R8-104.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#differential-growth](https://github.com/jasonwebb/morphogenesis-resources#differential-growth) | unknown | R8-129.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#diffusion-limited-aggregation-dla](https://github.com/jasonwebb/morphogenesis-resources#diffusion-limited-aggregation-dla) | unknown | R8-128.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#eden-growth-model](https://github.com/jasonwebb/morphogenesis-resources#eden-growth-model) | unknown | R8-133.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#lloyds-relaxation](https://github.com/jasonwebb/morphogenesis-resources#lloyds-relaxation) | unknown | R8-134.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#particle-life](https://github.com/jasonwebb/morphogenesis-resources#particle-life) | unknown | R8-132.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#physarum](https://github.com/jasonwebb/morphogenesis-resources#physarum) | unknown | R8-130.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#reaction-diffusion](https://github.com/jasonwebb/morphogenesis-resources#reaction-diffusion) | unknown | R8-127.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#space-colonization](https://github.com/jasonwebb/morphogenesis-resources#space-colonization) | unknown | R8-131.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#wave-function-collapse-wfc](https://github.com/jasonwebb/morphogenesis-resources#wave-function-collapse-wfc) | unknown | R8-135.
- [jasonwebb/morphogenesis-resources: morphogenesis-resources#weighted-voronoi-stippling](https://github.com/jasonwebb/morphogenesis-resources#weighted-voronoi-stippling) | unknown | R8-134.
- [martinlaxenaire/curtainsjs: ](https://www.curtainsjs.com/examples/multiple-planes-scroll-effect/) | MIT | R8-097.
- [martinlaxenaire/curtainsjs: ](https://www.curtainsjs.com/examples/multiple-textures/) | MIT | R8-048.
- [martinlaxenaire/curtainsjs: ](https://www.curtainsjs.com/examples/ping-pong-shading-flowmap/) | MIT | R8-055.
- [martinlaxenaire/curtainsjs: ](https://www.curtainsjs.com/examples/simple-plane/) | MIT | R8-051.
- [mrdoob/three.js: #physics_ammo_break](https://threejs.org/examples/#physics_ammo_break) | MIT | R8-042.
- [mrdoob/three.js: #physics_ammo_cloth](https://threejs.org/examples/#physics_ammo_cloth) | MIT | R8-039.
- [mrdoob/three.js: #physics_ammo_instancing](https://threejs.org/examples/#physics_ammo_instancing) | MIT | R8-041.
- [mrdoob/three.js: #physics_ammo_rope](https://threejs.org/examples/#physics_ammo_rope) | MIT | R8-038.
- [mrdoob/three.js: #physics_ammo_volume](https://threejs.org/examples/#physics_ammo_volume) | MIT | R8-040.
- [mrdoob/three.js: #physics_rapier_instancing](https://threejs.org/examples/#physics_rapier_instancing) | MIT | R8-041.
- [mrdoob/three.js: #webgl_animation_skinning_additive_blending](https://threejs.org/examples/#webgl_animation_skinning_additive_blending) | MIT | R8-104.
- [mrdoob/three.js: #webgl_animation_skinning_blending](https://threejs.org/examples/#webgl_animation_skinning_blending) | MIT | R8-103, R8-104.
- [mrdoob/three.js: #webgl_animation_skinning_ik](https://threejs.org/examples/#webgl_animation_skinning_ik) | MIT | R8-105.
- [mrdoob/three.js: #webgl_animation_walk](https://threejs.org/examples/#webgl_animation_walk) | MIT | R8-103.
- [mrdoob/three.js: #webgl_geometry_teapot](https://threejs.org/examples/#webgl_geometry_teapot) | MIT | R8-088.
- [mrdoob/three.js: #webgl_geometry_terrain](https://threejs.org/examples/#webgl_geometry_terrain) | MIT | R8-044.
- [mrdoob/three.js: #webgl_geometry_text](https://threejs.org/examples/#webgl_geometry_text) | MIT | R8-124.
- [mrdoob/three.js: #webgl_gpgpu_birds](https://threejs.org/examples/#webgl_gpgpu_birds) | MIT | R8-035.
- [mrdoob/three.js: #webgl_gpgpu_protoplanet](https://threejs.org/examples/#webgl_gpgpu_protoplanet) | MIT | R8-034.
- [mrdoob/three.js: #webgl_gpgpu_water](https://threejs.org/examples/#webgl_gpgpu_water) | MIT | R8-050.
- [mrdoob/three.js: #webgl_instancing_dynamic](https://threejs.org/examples/#webgl_instancing_dynamic) | MIT | R8-012.
- [mrdoob/three.js: #webgl_instancing_morph](https://threejs.org/examples/#webgl_instancing_morph) | MIT | R8-106.
- [mrdoob/three.js: #webgl_lights_spotlights](https://threejs.org/examples/#webgl_lights_spotlights) | MIT | R8-100.
- [mrdoob/three.js: #webgl_lights_sunlight](https://threejs.org/examples/#webgl_lights_sunlight) | MIT | R8-126.
- [mrdoob/three.js: #webgl_marchingcubes](https://threejs.org/examples/#webgl_marchingcubes) | MIT | R8-043.
- [mrdoob/three.js: #webgl_materials_cubemap_dynamic](https://threejs.org/examples/#webgl_materials_cubemap_dynamic) | MIT | R8-101.
- [mrdoob/three.js: #webgl_modifier_curve_instanced](https://threejs.org/examples/#webgl_modifier_curve_instanced) | MIT | R8-108.
- [mrdoob/three.js: #webgl_morphtargets](https://threejs.org/examples/#webgl_morphtargets) | MIT | R8-106.
- [mrdoob/three.js: #webgl_morphtargets_face](https://threejs.org/examples/#webgl_morphtargets_face) | MIT | R8-106.
- [mrdoob/three.js: #webgl_morphtargets_sphere](https://threejs.org/examples/#webgl_morphtargets_sphere) | MIT | R8-052.
- [mrdoob/three.js: #webgl_points_dynamic](https://threejs.org/examples/#webgl_points_dynamic) | MIT | R8-029.
- [mrdoob/three.js: #webgl_points_waves](https://threejs.org/examples/#webgl_points_waves) | MIT | R8-012.
- [mrdoob/three.js: #webgl_portal](https://threejs.org/examples/#webgl_portal) | MIT | R8-098.
- [mrdoob/three.js: #webgl_postprocessing_afterimage](https://threejs.org/examples/#webgl_postprocessing_afterimage) | MIT | R8-084.
- [mrdoob/three.js: #webgl_postprocessing_dof](https://threejs.org/examples/#webgl_postprocessing_dof) | MIT | R8-094.
- [mrdoob/three.js: #webgl_postprocessing_glitch](https://threejs.org/examples/#webgl_postprocessing_glitch) | MIT | R8-064.
- [mrdoob/three.js: #webgl_postprocessing_godrays](https://threejs.org/examples/#webgl_postprocessing_godrays) | MIT | R8-062.
- [mrdoob/three.js: #webgl_postprocessing_outline](https://threejs.org/examples/#webgl_postprocessing_outline) | MIT | R8-086.
- [mrdoob/three.js: #webgl_postprocessing_pixel](https://threejs.org/examples/#webgl_postprocessing_pixel) | MIT | R8-067.
- [mrdoob/three.js: #webgl_postprocessing_rgb_halftone](https://threejs.org/examples/#webgl_postprocessing_rgb_halftone) | MIT | R8-069.
- [mrdoob/three.js: #webgl_postprocessing_sobel](https://threejs.org/examples/#webgl_postprocessing_sobel) | MIT | R8-086.
- [mrdoob/three.js: #webgl_postprocessing_transition](https://threejs.org/examples/#webgl_postprocessing_transition) | MIT | R8-047.
- [mrdoob/three.js: #webgl_postprocessing_unreal_bloom](https://threejs.org/examples/#webgl_postprocessing_unreal_bloom) | MIT | R8-061.
- [mrdoob/three.js: #webgl_shaders_ocean](https://threejs.org/examples/#webgl_shaders_ocean) | MIT | R8-056.
- [mrdoob/three.js: #webgl_shaders_sky](https://threejs.org/examples/#webgl_shaders_sky) | MIT | R8-126.
- [mrdoob/three.js: #webgl_shadowmap](https://threejs.org/examples/#webgl_shadowmap) | MIT | R8-102.
- [mrdoob/three.js: #webgpu_caustics](https://threejs.org/examples/#webgpu_caustics) | MIT | R8-083.
- [mrdoob/three.js: #webgpu_compute_cloth](https://threejs.org/examples/#webgpu_compute_cloth) | MIT | R8-039.
- [mrdoob/three.js: #webgpu_compute_particles_rain](https://threejs.org/examples/#webgpu_compute_particles_rain) | MIT | R8-021.
- [mrdoob/three.js: #webgpu_fog_height](https://threejs.org/examples/#webgpu_fog_height) | MIT | R8-099.
- [mrdoob/three.js: #webgpu_lines_fat_wireframe](https://threejs.org/examples/#webgpu_lines_fat_wireframe) | MIT | R8-107.
- [mrdoob/three.js: #webgpu_mirror](https://threejs.org/examples/#webgpu_mirror) | MIT | R8-101.
- [mrdoob/three.js: #webgpu_modifier_curve](https://threejs.org/examples/#webgpu_modifier_curve) | MIT | R8-108.
- [mrdoob/three.js: #webgpu_portal](https://threejs.org/examples/#webgpu_portal) | MIT | R8-098.
- [mrdoob/three.js: #webgpu_postprocessing_ca](https://threejs.org/examples/#webgpu_postprocessing_ca) | MIT | R8-063.
- [mrdoob/three.js: #webgpu_postprocessing_motion_blur](https://threejs.org/examples/#webgpu_postprocessing_motion_blur) | MIT | R8-085.
- [mrdoob/three.js: #webgpu_tsl_compute_attractors_particles](https://threejs.org/examples/#webgpu_tsl_compute_attractors_particles) | MIT | R8-033.
- [mrdoob/three.js: #webgpu_tsl_galaxy](https://threejs.org/examples/#webgpu_tsl_galaxy) | MIT | R8-045.
- [mrdoob/three.js: #webgpu_tsl_procedural_terrain](https://threejs.org/examples/#webgpu_tsl_procedural_terrain) | MIT | R8-044.
- [mrdoob/three.js: #webgpu_tsl_vfx_flames](https://threejs.org/examples/#webgpu_tsl_vfx_flames) | MIT | R8-022.
- [mrdoob/three.js: #webgpu_tsl_vfx_tornado](https://threejs.org/examples/#webgpu_tsl_vfx_tornado) | MIT | R8-046.
- [mrdoob/three.js: #webgpu_volume_cloud](https://threejs.org/examples/#webgpu_volume_cloud) | MIT | R8-023.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/autonomous-agents/) | unknown | R8-001, R8-035, R8-036.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/cellular-automata/) | unknown | R8-010.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/forces/) | unknown | R8-034.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/fractals/) | unknown | R8-009.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/oscillation/) | unknown | R8-037.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/particles/) | unknown | R8-030.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/physics-libraries/) | unknown | R8-038.
- [nature-of-code/noc-book-2: ](https://natureofcode.com/random/) | unknown | R8-003, R8-004.
- [oframe/ogl: fog.html](https://oframe.github.io/ogl/examples/fog.html) | unknown | R8-099.
- [oframe/ogl: fresnel.html](https://oframe.github.io/ogl/examples/fresnel.html) | unknown | R8-060.
- [oframe/ogl: mouse-flowmap.html](https://oframe.github.io/ogl/examples/mouse-flowmap.html) | unknown | R8-055.
- [oframe/ogl: orbit-controls.html](https://oframe.github.io/ogl/examples/orbit-controls.html) | unknown | R8-089.
- [oframe/ogl: point-lighting.html](https://oframe.github.io/ogl/examples/point-lighting.html) | unknown | R8-100.
- [oframe/ogl: post-bloom.html](https://oframe.github.io/ogl/examples/post-bloom.html) | unknown | R8-061.
- [oframe/ogl: shadow-maps.html](https://oframe.github.io/ogl/examples/shadow-maps.html) | unknown | R8-102.
- [oframe/ogl: tube.html](https://oframe.github.io/ogl/examples/tube.html) | unknown | R8-091.
- [oframe/ogl: wireframe-shader.html](https://oframe.github.io/ogl/examples/wireframe-shader.html) | unknown | R8-107.
- [paper-design/shaders: color-panels](https://shaders.paper.design/color-panels) | Apache-2.0 | R8-081.
- [paper-design/shaders: dithering](https://shaders.paper.design/dithering) | Apache-2.0 | R8-070.
- [paper-design/shaders: dot-grid](https://shaders.paper.design/dot-grid) | Apache-2.0 | R8-012.
- [paper-design/shaders: dot-orbit](https://shaders.paper.design/dot-orbit) | Apache-2.0 | R8-082.
- [paper-design/shaders: fluted-glass](https://shaders.paper.design/fluted-glass) | Apache-2.0 | R8-058.
- [paper-design/shaders: gem-smoke](https://shaders.paper.design/gem-smoke) | Apache-2.0 | R8-080.
- [paper-design/shaders: god-rays](https://shaders.paper.design/god-rays) | Apache-2.0 | R8-062.
- [paper-design/shaders: grain-gradient](https://shaders.paper.design/grain-gradient) | Apache-2.0 | R8-074.
- [paper-design/shaders: halftone-cmyk](https://shaders.paper.design/halftone-cmyk) | Apache-2.0 | R8-069.
- [paper-design/shaders: halftone-dots](https://shaders.paper.design/halftone-dots) | Apache-2.0 | R8-069.
- [paper-design/shaders: heatmap](https://shaders.paper.design/heatmap) | Apache-2.0 | R8-079.
- [paper-design/shaders: image-dithering](https://shaders.paper.design/image-dithering) | Apache-2.0 | R8-070.
- [paper-design/shaders: lens-distortion](https://shaders.paper.design/lens-distortion) | Apache-2.0 | R8-054.
- [paper-design/shaders: liquid-metal](https://shaders.paper.design/liquid-metal) | Apache-2.0 | R8-059.
- [paper-design/shaders: mesh-gradient](https://shaders.paper.design/mesh-gradient) | Apache-2.0 | R8-073.
- [paper-design/shaders: metaballs](https://shaders.paper.design/metaballs) | Apache-2.0 | R8-043.
- [paper-design/shaders: neuro-noise](https://shaders.paper.design/neuro-noise) | Apache-2.0 | R8-075.
- [paper-design/shaders: perlin-noise](https://shaders.paper.design/perlin-noise) | Apache-2.0 | R8-005.
- [paper-design/shaders: pulsing-border](https://shaders.paper.design/pulsing-border) | Apache-2.0 | R8-078.
- [paper-design/shaders: simplex-noise](https://shaders.paper.design/simplex-noise) | Apache-2.0 | R8-005.
- [paper-design/shaders: smoke-ring](https://shaders.paper.design/smoke-ring) | Apache-2.0 | R8-077.
- [paper-design/shaders: spiral](https://shaders.paper.design/spiral) | Apache-2.0 | R8-076.
- [paper-design/shaders: swirl](https://shaders.paper.design/swirl) | Apache-2.0 | R8-076.
- [paper-design/shaders: voronoi](https://shaders.paper.design/voronoi) | Apache-2.0 | R8-007.
- [paper-design/shaders: warp](https://shaders.paper.design/warp) | Apache-2.0 | R8-006.
- [paper-design/shaders: water](https://shaders.paper.design/water) | Apache-2.0 | R8-050, R8-056.
- [paper-design/shaders: waves](https://shaders.paper.design/waves) | Apache-2.0 | R8-012, R8-013.
- [pixel-point/animate-text: catalog.md#additional-bundled-specs](https://github.com/pixel-point/animate-text/blob/HEAD/skills/animate-text/references/catalog.md#additional-bundled-specs) | unknown | R8-093.
- [processing/p5.js-website: ](https://p5js.org/examples/3D-Adjusting-Positions-With-A-Shader/) | MIT | R8-051.
- [processing/p5.js-website: ](https://p5js.org/examples/3D-Filter-Shader/) | MIT | R8-063.
- [processing/p5.js-website: ](https://p5js.org/examples/3D-Framebuffer-Blur/) | MIT | R8-094.
- [processing/p5.js-website: ](https://p5js.org/examples/3D-Orbit-Control/) | MIT | R8-089.
- [processing/p5.js-website: ](https://p5js.org/examples/Angles-And-Motion-Sine-Cosine/) | MIT | R8-012.
- [processing/p5.js-website: ](https://p5js.org/examples/Classes-And-Objects-Connected-Particles/) | MIT | R8-016.
- [processing/p5.js-website: ](https://p5js.org/examples/Classes-And-Objects-Flocking/) | MIT | R8-035.
- [processing/p5.js-website: ](https://p5js.org/examples/Classes-And-Objects-Snowflakes/) | MIT | R8-020.
- [processing/p5.js-website: ](https://p5js.org/examples/Math-And-Physics-Game-Of-Life/) | MIT | R8-010.
- [processing/p5.js-website: ](https://p5js.org/examples/Math-And-Physics-Mandelbrot/) | MIT | R8-011.
- [processing/p5.js-website: ](https://p5js.org/examples/Math-And-Physics-Smoke-Particle-System/) | MIT | R8-023.
- [processing/p5.js-website: ](https://p5js.org/examples/Math-And-Physics-Soft-Body/) | MIT | R8-040.
- [processing/p5.js-website: ](https://p5js.org/examples/Repetition-Kaleidoscope/) | MIT | R8-014.
- [processing/p5.js-website: ](https://p5js.org/examples/Repetition-Recursive-Tree/) | MIT | R8-009.
- [remotion-dev/skills: audio-visualization.md](https://github.com/remotion-dev/skills/blob/HEAD/skills/remotion-best-practices/remotion-markup/audio-visualization.md) | unknown | R8-120, R8-121.
- [thednp/kute.js: svgDraw.html](https://thednp.github.io/kute.js/svgDraw.html) | MIT | R8-109, R8-112.
- [thednp/kute.js: svgMorph.html](https://thednp.github.io/kute.js/svgMorph.html) | MIT | R8-110.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/ambient/README.md) | MIT | R8-015.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/bigCircles/README.md) | MIT | R8-015.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/bubbles/README.md) | MIT | R8-026.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/confetti/README.md) | MIT | R8-017.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/fire/README.md) | MIT | R8-022.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/firefly/README.md) | MIT | R8-025.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/fireworks/README.md) | MIT | R8-018.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/fountain/README.md) | MIT | R8-019.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/hyperspace/README.md) | MIT | R8-027.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/links/README.md) | MIT | R8-016.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/matrix/README.md) | MIT | R8-072.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/seaAnemone/README.md) | MIT | R8-028.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/snow/README.md) | MIT | R8-020.
- [tsparticles/presets: README.md](https://github.com/tsparticles/presets/blob/HEAD/presets/stars/README.md) | MIT | R8-015.

## 못 연 곳과 조사 제약

아래 저장소 후보는 README 경로 탐색에서 본문을 얻지 못했다. 이름을 추측한 후보도 포함하며 저장소가 없다고 단정하지 않는다. 후보를 성공적으로 연 대체 저장소와 구분해 기록한다. awesome-motion-design와 awesome-remotion의 단일 대표 저장소는 확인하지 못해 모션 스킬 목록과 Remotion 공식 스킬로 보완했다.

- [후보 av/awesome-remotion](https://github.com/av/awesome-remotion) | unknown | README 본문 확인 실패, 참고만.
- [후보 bkmashiro/creative-lab](https://github.com/bkmashiro/creative-lab) | unknown | README 본문 확인 실패, 참고만.
- [후보 BSVG/awesome-svg](https://github.com/BSVG/awesome-svg) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/DistortionEffect](https://github.com/codrops/DistortionEffect) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/DistortionHoverEffect](https://github.com/codrops/DistortionHoverEffect) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/ImageParticles](https://github.com/codrops/ImageParticles) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/InteractiveParticles](https://github.com/codrops/InteractiveParticles) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/ParticleEffects](https://github.com/codrops/ParticleEffects) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/ShapeMorphingSlideshow](https://github.com/codrops/ShapeMorphingSlideshow) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/ShapeOverlays](https://github.com/codrops/ShapeOverlays) | unknown | README 본문 확인 실패, 참고만.
- [후보 codrops/WebGLDistortionHover](https://github.com/codrops/WebGLDistortionHover) | unknown | README 본문 확인 실패, 참고만.
- [후보 danielgamage/awesome-remotion](https://github.com/danielgamage/awesome-remotion) | unknown | README 본문 확인 실패, 참고만.
- [후보 flubber/flubber](https://github.com/flubber/flubber) | unknown | README 본문 확인 실패, 참고만.
- [후보 fukatsu/vfx-js](https://github.com/fukatsu/vfx-js) | unknown | README 본문 확인 실패, 참고만.
- [후보 funwithtriangles/threejs-shader-examples](https://github.com/funwithtriangles/threejs-shader-examples) | unknown | README 본문 확인 실패, 참고만.
- [후보 gre/awesome-remotion](https://github.com/gre/awesome-remotion) | unknown | README 본문 확인 실패, 참고만.
- [후보 jasonwebb/space-colonization-trees](https://github.com/jasonwebb/space-colonization-trees) | unknown | README 본문 확인 실패, 참고만.
- [후보 kmcic/awesome-svg](https://github.com/kmcic/awesome-svg) | unknown | README 본문 확인 실패, 참고만.
- [후보 nathanoehl/smooth-scroll-webgl](https://github.com/nathanoehl/smooth-scroll-webgl) | unknown | README 본문 확인 실패, 참고만.
- [후보 patrickmn/awesome-animation](https://github.com/patrickmn/awesome-animation) | unknown | README 본문 확인 실패, 참고만.
- [후보 patrickmn/awesome-motion-design](https://github.com/patrickmn/awesome-motion-design) | unknown | README 본문 확인 실패, 참고만.
- [후보 pixi/pixijs-particles](https://github.com/pixi/pixijs-particles) | unknown | README 본문 확인 실패, 참고만.
- [후보 saharan/Physarum](https://github.com/saharan/Physarum) | unknown | README 본문 확인 실패, 참고만.
- [후보 shadcn/awesome-motion-design](https://github.com/shadcn/awesome-motion-design) | unknown | README 본문 확인 실패, 참고만.
- [후보 svg/awesome-svg](https://github.com/svg/awesome-svg) | unknown | README 본문 확인 실패, 참고만.
- [후보 TheCodingTrain/website-archive](https://github.com/TheCodingTrain/website-archive) | unknown | README 본문 확인 실패, 참고만.
- [후보 wsvincent/awesome-remotion](https://github.com/wsvincent/awesome-remotion) | unknown | README 본문 확인 실패, 참고만.
- [후보 yacoubb/awesome-remotion](https://github.com/yacoubb/awesome-remotion) | unknown | README 본문 확인 실패, 참고만.
- [후보 yacoubb/hover-effect](https://github.com/yacoubb/hover-effect) | unknown | README 본문 확인 실패, 참고만.
- [ogl-license](https://raw.githubusercontent.com/oframe/ogl/HEAD/LICENSE) | HTTP 404 | 본문 확인 실패. 해당 경로는 기법의 확정 출처로 쓰지 않았다.
- [rm-animations.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/animations.md) | HTTP 404 | 본문 확인 실패. 해당 경로는 기법의 확정 출처로 쓰지 않았다.
- [rm-spring.md](https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion-best-practices/remotion-markup/spring.md) | HTTP 404 | 본문 확인 실패. 해당 경로는 기법의 확정 출처로 쓰지 않았다.
- [terkelg-license](https://raw.githubusercontent.com/terkelg/awesome-creative-coding/HEAD/license.md) | HTTP 404 | 본문 확인 실패. 해당 경로는 기법의 확정 출처로 쓰지 않았다.
- [willian-license](https://raw.githubusercontent.com/willianjusten/awesome-svg/HEAD/LICENSE) | HTTP 404 | 본문 확인 실패. 해당 경로는 기법의 확정 출처로 쓰지 않았다.

- GitHub REST API의 저장소 트리 요청은 HTTP 403과 호출 제한으로 실패했다. 대신 raw README, LICENSE와 공식 예제 색인을 읽었다. 전체 파일 트리를 훑었다고 주장하지 않는다.
- skills.sh 초기 광역 페이지는 Brotli 디코딩 오류가 있었고 특정 스킬 페이지를 다시 열어 HTTP 200으로 확인했다. 검색어 쿼리 페이지가 전체 검색 결과를 제공한다고 해석하지 않았다.
- OGL의 README는 Unlicense를 말하지만 LICENSE 파일 경로에서 본문을 얻지 못했으므로 unknown으로 유지했다.
- Codrops의 일부 README는 자체 이용 조건을 포함하지만 별도 LICENSE 파일 미확인 출처는 unknown으로 유지하고 참고만으로 표시했다.
- The Book of Shaders의 실제 LICENSE는 교육용 연결 등의 제한 조건과 권리 유보를 포함한다. CC 라이선스라고 추정하지 않았다.
- 각 스킬 문서는 조사 자료로 읽었다. 설치, 활성화, 외부 스킬 실행과 플러그인 코드는 이용하지 않았다.
