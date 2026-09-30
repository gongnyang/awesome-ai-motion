# R3 출처 조사 기록

조사일: 2026-09-30. 영상·스크롤덱·웹으로 재현 가능한 CSS와 UI 모션 아이디어를 조사했다. 원장은 204줄이다. 코드와 애셋은 재사용하지 않았다. 구현 설명은 독립 재현 원리이며 파라미터는 도감 제안 기본값이다. 라이브러리 원 기본값으로 오인하지 않도록 각 줄에 표시했다. 프롬프트는 요청된 필드 구조를 유지하려고 notes 안에 넣었다.

## 대조 범위

- animate.css: source 디렉터리의 98개 효과 파일 전부를 방향·등장/퇴장·강도 변형으로 병합했다. 현재 파일 목록에는 기존 shake와 shakeX가 함께 있다.
- Animista: 공식 animista.json의 basic, entrances, exits, text, attention, background 6개 카테고리와 662개 변형을 전부 대조했다.
- Hover.css: scss/effects의 111개 효과를 대조했다. 단순 hover 트리거 자체를 기법으로 넣지 않고 시간표에 따라 재생 가능한 시각 동작만 기록했다.
- magic.css: assets/scss의 65개 개별 효과를 전부 대조했다.
- CSShake: default, crazy, hard, horizontal, little, rotate, slow, vertical 8개 프리셋을 하나의 진동 기법으로 병합했다.
- Foundation Motion UI: fade, hinge, shake, slide, spin, wiggle, zoom 및 series 시간차를 기존 현상에 병합했다.
- loading.io: 공식 저장소의 circle, default, dual-ring, ellipsis, facebook, grid, heart, hourglass, ring, ripple, roller, spinner 12개 로더를 대조했다.
- SpinKit: Plane, Chase, Bounce, Wave, Pulse, Flow, Swing, Circle, Circle Fade, Grid, Fold, Wander 12개 로더를 대조했다.
- CSS-Loaders: 공식 인덱스의 44개 카테고리를 확인했다. 모양과 색·개수만 다른 항목을 기법별 변형으로 묶었다. 600여 개 데모를 각각 별도 기법으로 세지 않았다.
- Magic UI: 공식 카탈로그 77개 상세 항목 중 모션 66개를 연결했다. 정적 디바이스 프레임·격자 무늬·파일 트리 등 11개는 제외했다.
- motion-primitives: 33개 모션 컴포넌트를 연결했다. 설치 문서는 제외했다.
- Aceternity UI: 공식 공개 카탈로그 112개 상세 항목 중 105개를 연결했다. 정적 그리드·코드블록·폼·섹션 모음 7개는 제외했다. 유료 템플릿과 프리미엄 블록은 조사 범위로 확대하지 않았다.
- React Bits: src/content의 고유 컴포넌트 212개를 대조했다. 211개를 연결했고 CurvedInput 1개는 정적 곡선 입력 형태로 제외했다. 이름만으로 현상이 불분명한 20개는 공식 Demo 문서의 설명과 파라미터 표를 추가 확인했다.
- uiverse.io: 웹 페이지는 403이다. 공개 galaxy 저장소의 Buttons, Loaders, Checkboxes 등 파일 목록과 LICENSE를 확인하고 기존 기법의 공개 패턴 출처로 병합했다. 3천여 제출물의 개별 움직임 전수 감상은 하지 못했다.
- shadcn 계열: shadcn-ui/ui의 컴포넌트 목록, tailwindcss-animate의 4가지 진입·퇴장 속성, Vaul의 드로어 패턴을 확인했다. 설치·포커스 관리·키보드 이벤트는 독립 모션에서 제외했다.
- Codrops: 공개 튜토리얼 검색과 대표 전환·스크롤·이미지·글자 패턴을 조사했다. 전체 역사적 글과 모든 Creative Hub 제출물의 전수 조사를 의미하지 않는다. 개별 레포 LICENSE와 사이트 일반 라이선스를 구분했다.
- LottieFiles와 Rive: 대표 로더 결과 전환, 빈 상태, 로그인 캐릭터, 낮/밤 토글의 작품 페이지를 확인했다. 파일 포맷과 런타임 사용법은 기법 수로 세지 않았다.

감사용 식별자 매핑은 `.staging/R3/coverage.json`에 있다. 구현 코드 없이 공개 효과 이름, LICENSE 문구, 문서 설명과 파일 목록만 보관했다.

## 저장소와 공식 사이트

| 출처 | 라이선스 근거 | 얻은 기법 |
|---|---|---|
| [animate-css/animate.css](https://github.com/animate-css/animate.css) | Hippocratic-2.1. [LICENSE](https://github.com/animate-css/animate.css/blob/main/LICENSE) | 전체 등장·퇴장·강조 98효과. MIT로 표기하지 않았다. |
| [miniMAC/magic](https://github.com/miniMAC/magic) | MIT. [LICENSE](https://github.com/miniMAC/magic/blob/master/LICENSE) | 65효과의 puff, vanish, twister, open, tin, boing, bomb, space 계열. |
| [IanLunn/Hover](https://github.com/IanLunn/Hover) | MIT personal/open-source + paid commercial. [license.txt](https://github.com/IanLunn/Hover/blob/master/license.txt) | 111효과의 진동·신축·채우기·윤곽·그림자·말풍선·종이 말림. 개인·오픈소스와 상업용 조건이 다르다. |
| [elrumordelaluz/csshake](https://github.com/elrumordelaluz/csshake) | MIT. [LICENSE](https://github.com/elrumordelaluz/csshake/blob/master/LICENSE) | 강도·방향·회전·랜덤 차이의 진동 프리셋. |
| [michalsnik/aos](https://github.com/michalsnik/aos) | MIT. [LICENSE](https://github.com/michalsnik/aos/blob/next/LICENSE) | 스크롤 진입 트리거와 fade·slide·zoom·flip. duration 400ms, offset 120px의 원 기본값은 README로 확인했다. |
| [matthieua/WOW](https://github.com/matthieua/WOW) | GPL-3.0 또는 commercial, 별도 LICENSE 없음. [README.md](https://github.com/matthieua/WOW/blob/master/README.md) | CSS 애니메이션을 화면 진입 시점에 실행. 참고만. |
| [foundation/motion-ui](https://github.com/foundation/motion-ui) | MIT. [LICENSE](https://github.com/foundation/motion-ui/blob/develop/LICENSE) | fade·slide·hinge·spin·zoom·shake·wiggle과 series 순차 실행. |
| [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) | MIT. [LICENSE](https://github.com/tobiasahlin/SpinKit/blob/master/LICENSE) | 12종 로더의 점 추격·면 회전·막대 파동·격자·접기·방황. |
| [lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) | MIT. [LICENSE](https://github.com/lukehaas/css-loaders/blob/step2/LICENSE) | 8개 CSS 로더 파일의 막대·원·점 회전 패턴. |
| [loadingio/css-spinner](https://github.com/loadingio/css-spinner) | CC0 로더, 기타 코드는 MIT, 루트 LICENSE 없음. [README.md](https://github.com/loadingio/css-spinner/blob/master/README.md) | 12개 로더. 의존성 폴더의 LICENSE를 프로젝트 자체 라이선스로 오인하지 않았다. |
| [jamiebuilds/tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | MIT. [LICENSE](https://github.com/jamiebuilds/tailwindcss-animate/blob/main/LICENSE) | opacity·rotate·scale·translate의 진입과 퇴장 조합 및 시간 제어. |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | MIT. [LICENSE.md](https://github.com/magicuidesign/magicui/blob/main/LICENSE.md) | 빛 테두리·파문·입자·흐름 띠·글자·숫자·포인터·배경 루프. |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | MIT + Commons Clause v1.0. [LICENSE.md](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md) | 212개 항목의 텍스트·마이크로 UI·입자·곡면·굴절·금속·배경·도형 패턴. 컴포넌트 자체 판매·재배포 조건이 있어 참고만. |
| [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | MIT. [LICENCE.md](https://github.com/ibelick/motion-primitives/blob/main/LICENCE.md) | 33개 텍스트·패널·독·카드 확장·포인터·테두리·점진 흐림 패턴. |
| [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) | MIT. [LICENSE](https://github.com/uiverse-io/galaxy/blob/main/LICENSE) | 공개 UI 제출물의 로더·버튼·진행·파문·스켈레톤 계열 파일 목록. |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | MIT. [LICENSE.md](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md) | 모달·시트·아코디언·툴팁·토스트·토글·진행 표시·스켈레톤. |
| [emilkowalski/vaul](https://github.com/emilkowalski/vaul) | MIT. [LICENSE.md](https://github.com/emilkowalski/vaul/blob/main/LICENSE.md) | 가장자리 서랍 이동과 배경 화면 축소. |
| [codrops/ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations) | MIT. [LICENSE](https://github.com/codrops/ScrollBasedLayoutAnimations/blob/master/LICENSE) | 스크롤에 맞춰 격자와 이미지 배치를 바꾸는 대표 레이아웃 패턴. |
| [codrops/RotatedRevealers](https://github.com/codrops/RotatedRevealers) | unknown, README에 독자 조건. [README.md](https://github.com/codrops/RotatedRevealers/blob/master/README.md) | 기울어진 큰 면과 내부의 반대 이동에 의한 리빌. LICENSE가 없어 참고만. |
| [animista.net/play](https://animista.net/play) | BSD-2-Clause (FreeBSD), [공식 전문](https://animista.net/license) | 6개 카테고리 전체 목록. 레포는 확인하지 못했으므로 사이트 라이선스 전문을 근거로 삼았다. |
| [animista.net/animista.json](https://animista.net/animista.json) | BSD-2-Clause (공식 사이트 라이선스) | 공식 카테고리·그룹·변형 662개의 식별자. 생성 CSS와 키프레임은 저장하지 않았다. |
| [magicui.design/docs/components](https://magicui.design/docs/components) | MIT, 공식 magicui LICENSE.md | 전체 공개 컴포넌트 인덱스와 상세 문서 링크. |
| [ui.aceternity.com/components](https://ui.aceternity.com/components) | unknown | 공개 카탈로그 설명으로 모션을 분류했다. 공식 소유 레포의 LICENSE를 확인하지 못해 참고만. |
| [ui.aceternity.com/terms](https://ui.aceternity.com/terms) | 사이트 일반 약관, 컴포넌트 라이선스 unknown | 약관의 Pro 언급과 콘텐츠 권리 유보를 확인했다. 다른 사람이 만든 MIT npm 패키지를 공식 라이선스 근거로 쓰지 않았다. |
| [reactbits.dev](https://reactbits.dev) | MIT + Commons Clause, 공식 LICENSE.md | 클라이언트 앱이라 정적 HTML에 효과가 없어 GitHub 목록과 Demo 설명으로 보완했다. |
| [motion-primitives.com/docs](https://motion-primitives.com/docs) | MIT, 공식 LICENCE.md | 33개 컴포넌트의 전체 내비게이션 목록. |
| [css-loaders.com/](https://css-loaders.com/) | unknown | 44개 로더 카테고리. 공식 연결된 레포 LICENSE를 찾지 못해 참고만. |
| [loading.io/css/](https://loading.io/css/) | CC0 로더, README 확인 | 12종 로더 인덱스를 웹 도구로 열고 공식 저장소와 대조했다. |
| [tympanus.net/codrops/licensing/](https://tympanus.net/codrops/licensing/) | 일반 데모 MIT, 개별 예외 가능 | 일반 라이선스 페이지. 과거 개별 레포에 있는 독자 조건을 이 문서로 덮어쓰지 않았다. |
| [tympanus.net/codrops/2019/04/18/how-to-create-and-animate-rotated-overlays/](https://tympanus.net/codrops/2019/04/18/how-to-create-and-animate-rotated-overlays/) | unknown, 개별 레포 LICENSE 없음 | 기울어진 오버레이 리빌. 검색 색인과 공식 레포 README를 확인했다. 참고만. |
| [tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/](https://tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/) | unknown | 메뉴 이미지 클리핑·반대 이동·지연 추종. 검색 색인으로 확인했다. 참고만. |
| [tympanus.net/codrops/2020/05/23/an-infinitely-scrollable-vertical-menu/](https://tympanus.net/codrops/2020/05/23/an-infinitely-scrollable-vertical-menu/) | unknown | 복제 항목과 같은 시각 위치의 재설정으로 무한 흐름을 만드는 원리. 참고만. |
| [tympanus.net/codrops/2020/12/01/crafting-a-scrollable-and-draggable-parallax-slider/](https://tympanus.net/codrops/2020/12/01/crafting-a-scrollable-and-draggable-parallax-slider/) | unknown | 이미지 내부 시차와 슬라이더 확장·열림. 참고만. |
| [tympanus.net/codrops/2024/02/07/on-scroll-revealing-webgl-image-explorations/](https://tympanus.net/codrops/2024/02/07/on-scroll-revealing-webgl-image-explorations/) | unknown | 스크롤 이미지 픽셀 리빌과 이미지 말림 참고 링크. 참고만. |
| [tympanus.net/codrops/2024/11/06/how-to-create-an-organic-text-distortion-effect-with-infinite-scrolling/](https://tympanus.net/codrops/2024/11/06/how-to-create-an-organic-text-distortion-effect-with-infinite-scrolling/) | unknown | 스크롤 속도와 사인·코사인으로 줄별 유기 변형. 참고만. |
| [tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/](https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/) | unknown | 고정 장면의 열 등장·격자 확대·텍스트 단계 노출. 참고만. |
| [tympanus.net/Tutorials/ShaderOnScroll/](https://tympanus.net/Tutorials/ShaderOnScroll/) | unknown | 스크롤 이미지 변위와 그레인. 참고만. |
| [lottiefiles.com/free-animation/loading-animation-with-success-and-error-K2tYPTbs5Q](https://lottiefiles.com/free-animation/loading-animation-with-success-and-error-K2tYPTbs5Q) | Lottie Simple License, 작품 페이지 | Patrick Rigor의 세 점 로더가 성공 또는 오류 형태로 변하는 패턴. |
| [lottiefiles.com/free-animation/empty-state-EfSeWUwwKs](https://lottiefiles.com/free-animation/empty-state-EfSeWUwwKs) | Lottie Simple License, 작품 페이지 | Creative Salt & Pepper의 빈 상태 일러스트 패턴. 상세 동작은 독립 재현안이다. |
| [rive.app/community/files/133-207-loading-animation/](https://rive.app/community/files/133-207-loading-animation/) | CC BY, 작품 페이지, 버전 미확인 | Bobbeh의 버튼 로딩 상태 패턴. |
| [rive.app/community/files/4771-9633-login-teddy/](https://rive.app/community/files/4771-9633-login-teddy/) | CC BY, 작품 페이지, 버전 미확인 | yoonikuu의 Login Teddy와 원본 Animated Login Screen 링크. 팔·시선 움직임은 독립 재현안이다. |
| [rive.app/community/files/8362-16053-daynight-mode-switch-interaction/](https://rive.app/community/files/8362-16053-daynight-mode-switch-interaction/) | CC BY, 작품 페이지, 버전 미확인 | Raihan_DesignPX의 낮/밤 토글 전환. |

## 접근 실패와 보완

- GitHub REST API: 여러 저장소가 공유 IP의 API rate limit에 걸렸다. codeload 아카이브를 메모리에서 읽어 파일 목록과 LICENSE 문서만 추출했다. 구현 파일은 추출하지 않았다.
- https://github.com/minimamente/magic: 404. 공식 이름 miniMAC/magic으로 해결했다.
- https://github.com/Afif13/CSS-Loaders: 404. 존재하는 레포라고 가정하지 않고 css-loaders.com의 라이선스를 unknown으로 남겼다.
- https://github.com/wwebdev/css-loaders: API 한도로 목록을 확인하지 못했다. 원장 출처로 쓰지 않았다.
- https://github.com/barvian/motion-number: main과 master 아카이브 모두 404. 원장 출처로 쓰지 않았다.
- https://github.com/the-animation-authority/animista 및 https://github.com/ImL1s/animista: 확인한 공식 레포가 아니다. 전자는 404이며 원장에는 쓰지 않았다. Animista 공식 JSON으로 보완했다.
- https://uiverse.io/loaders: 403. uiverse-io/galaxy의 목록과 MIT LICENSE로 보완했다.
- https://loading.io/css/: 일반 HTTP 요청은 403. 웹 도구와 loadingio/css-spinner의 README로 보완했다.
- https://lottiefiles.com/free-animations/loading: 일반 HTTP 요청은 403. 개별 작품 페이지는 웹 도구로 확인했다.
- https://rive.app/community/: 404. marketplace 목록도 웹 도구 내부 오류다. 개별 커뮤니티 작품 페이지로 보완했다.
- https://ui.aceternity.com/components 및 https://magicui.design/docs/components: 최초 Brotli 디코딩 실패. Accept-Encoding identity로 다시 열어 전체 링크 목록을 확인했다.
- https://ui.aceternity.com/license 및 https://ui.aceternity.com/license-agreement: 404. https://ui.aceternity.com/terms-of-service도 웹 도구로 열지 못했다. /terms는 열었으나 개별 코드 라이선스의 대체 근거로 쓰지 않았다.
- Codrops category/tutorials와 다수 개별 글: 일반 HTTP 요청은 403이며 웹 도구 직접 열기도 일부 실패했다. 공식 글의 검색 색인과 열리는 GitHub README·LICENSE로 보완했다. 모든 Codrops 제출물의 전수 확인은 남아 있다.
- Codrops의 RotatedRevealers, MenuHoverImage, InfiniteMenu, OrganicTextDistortion, ShaderOnScroll, ImageTrail, OnScrollTextAnimations, UnrollingImages, StickyGridScroll에 대해 main/master의 LICENSE·LICENSE.md·license.txt 경로를 시도했다. 개별 파일을 확인하지 못한 것은 unknown으로 남겼다. 저장소 자체 존재 여부와 파일 부재를 동일시하지 않았다.

## 제외와 확인 한계

- 정적 UI 레이아웃과 폼 이벤트만 있는 항목은 제외했다. hover에 반응하는 이동·신축·빛·흐림은 포인터 시간표를 쓰면 영상으로 재생할 수 있어 포함했다.
- CurvedInput은 글자가 곡선에 놓이는 정적 형태이므로 제외했다. GlassSurface는 이동 중 굴절 패턴으로, ModelViewer는 자동 회전 시연 패턴으로 바꿀 수 있어 포함했다.
- README만 확인된 WOW와 loading.io는 이 사실을 license 문자열과 이 문서에 표시했다. 의존성 LICENSE나 제3자 포트의 MIT를 원본 권한으로 전용하지 않았다.
- 각 source의 라이선스는 참고한 코드·작품의 상태를 기록한다. 도감의 새 구현이 그 코드를 포함한다는 의미가 아니다.
- CSS-Loaders, Uiverse, Codrops의 열린 인덱스 범위와 모든 개별 제출물의 동작 감상은 다르다. 접근 실패·대표 사례·형태 변형 병합 범위를 위에 명시했다.
