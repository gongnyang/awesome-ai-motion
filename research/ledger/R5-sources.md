# R5 조사 출처

조사일: 2026-09-30. 기법 아이디어만 기록했고 외부 코드·표현식·프리셋을 원장에 복사하지 않았다. 주요 파라미터와 프롬프트는 자체 작성한 재현 제안이다. 공개 문서는 별도 허용 라이선스를 확인하지 못하면 unknown으로 기록한다. 사이트 공개와 코드 재사용 허용을 구분한다.

## 레포와 LICENSE 확인

- [airbnb/lottie-web](https://github.com/airbnb/lottie-web): MIT. [LICENSE](https://github.com/airbnb/lottie-web/blob/master/LICENSE.md) 본문 확인. 벡터 경로·트림·리피터·마스크·텍스트·표현식 이식 경계와 렌더러별 지원 확인.
- [LottieFiles/awesome-lottie](https://github.com/LottieFiles/awesome-lottie): unknown. Lottie 관련 렌더러·디자인 도구·튜토리얼 탐색 경로. README 확인, LICENSE·LICENSE.md·LICENSE.txt는 404로 라이선스 미확인. 참고만.
- [inlife/awesome-ae](https://github.com/inlife/awesome-ae): CC0-1.0. [LICENSE](https://github.com/inlife/awesome-ae/blob/master/LICENSE) 본문 확인. 애니메이션 원리·표현식·로고·타이포·프리셋 관련 공개 자료 탐색 경로.
- [rive-app/rive-runtime](https://github.com/rive-app/rive-runtime): MIT. [LICENSE](https://github.com/rive-app/rive-runtime/blob/main/LICENSE) 본문 확인. 벡터 런타임 이식 후보와 별도 Rive 블렌드 패턴 구분.
- https://github.com/bodymovin/lottie-web: 레포 페이지 404, raw LICENSE.md 404, API 403. 별칭으로 간주해 라이선스를 추정하지 않고 실제 확인한 airbnb/lottie-web을 원장 출처로 사용했다.
- https://github.com/rive-app/rive: API 접근 403으로 라이선스 unknown. 참고만. 실제 LICENSE를 읽은 rive-app/rive-runtime을 별도 기록했다.

## 훑은 사이트·문서

- https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html: unknown, 참고만. 트림·리피터·오프셋·지그재그·퍼커앤블로트·트위스트·라운드 코너·병합·위글·대시·그라디언트 선.
- https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-examples/expression-examples.html: unknown, 참고만. 위글·사이클·궤도·부모 지연·이미지 꼬리·오버슈트.
- https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-language-reference/expression-language-reference.html: unknown, 참고만. valueAtTime·루프 모드·시간 위글·인덱스·난수·시간 함수.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html: unknown, 참고만. 터뷸런트·파동·변위 맵·굽힘·볼록·메시·코너 핀·극좌표·트윌·렌즈·구면.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html: unknown, 참고만. 스크리블·Stroke·Write-on·램프·빛·파동·빔·오디오·격자·셀·플레어.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/noise-grain-effects.html: unknown, 참고만. 프랙탈·임계 노이즈·그레인.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/time-effects.html: unknown, 참고만. 에코·시간 포스터라이즈·시간 변위·타임워프·모션 블러.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/transition-effects.html: unknown, 참고만. 선형·방사·블라인드·카드·블록·아이리스·그라디언트와 CC 전환 목록.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/stylize-effects.html: unknown, 참고만. 글로우·모션 타일·거친 외곽·모자이크·스트로브·흩어짐·경계선.
- https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/perspective-effects.html: unknown, 참고만. 그림자와 평면 깊이 표현.
- https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html: unknown, 참고만. 범위·위글·표현식 셀렉터·자간·문자 오프셋·패스·문자별 3D.
- https://helpx.adobe.com/after-effects/desktop/work-with-layers/camera-layer/cameras-lights-points-interest.html: unknown, 참고만. 카메라 위치·회전·주목점·피사계심도.
- https://helpx.adobe.com/after-effects/desktop/work-with-layers/3d-layers/3d-layers.html: unknown, 참고만. 3D 평면·축·문자·깊이별 레이어 관계.
- https://helpx.adobe.com/after-effects/desktop/animate-in-after-effects/animation-keyframes/keyframe-interpolation.html: unknown, 참고만. 시간·공간 베지어·선형·홀드 보간.
- https://motionscript.com/articles/bounce-and-overshoot.html: unknown, 참고만. 관성 감쇠 진동과 중력 충돌 바운스의 구분. 직접 HTTP는 465였으나 웹 열기로 본문 확인.
- https://motionscript.com/design-guide/looping-wiggle.html: unknown, 참고만. 끝과 시작을 연결하는 노이즈 루프 아이디어. 직접 HTTP는 465였으나 웹 열기로 본문 확인.
- https://schoolofmotion.com/blog/text-animators-after-effects: unknown, 참고만. 셀렉터 기반 문자·단어·줄 애니메이션과 조합 예시.
- https://schoolofmotion.com/blog/after-effects-text-animator-tapered-stroke: unknown, 참고만. 문자 셀렉터를 활용한 테이퍼 선의 개념.
- https://motiondesign.school/blog/animation-principles-in-logo-animation/: unknown, 참고만. 로고 애니메이션에서 기본 원리와 브랜드 모티프 적용.
- https://motiondesign.school/blog/after-effects-tutorial/: unknown, 참고만. 공개 액체 금속 튜토리얼의 변형·재질·반사 용어.
- https://www.benmarriott.com/: unknown, 참고만. 공개 강좌 소개의 텍스처·루프 주제 탐색. 유료 강좌 내부는 미열람.
- https://www.youtube.com/@BenMarriott/videos: unknown, 참고만. 채널 페이지 탐색. 동적 영상 목록의 본문은 확인하지 못함.
- https://rive.app/docs/editor/text/text-runs: unknown, 참고만. 텍스트 런 단위 구조를 통한 타이포 이식 후보.
- https://github.com/airbnb/lottie-web/wiki/Features: unknown, 참고만. 렌더러별 기능 표와 지원 경계.
- https://github.com/airbnb/lottie-web/wiki/Expressions: unknown, 참고만. 표현식 베이크 및 제한된 네이티브 함수 안내.
- https://rive.app/docs/editor/manipulating-shapes/trim-path: unknown, 참고만. Rive trim path의 start·end·offset과 트림 방식.
- https://schoolofmotion.com/blog/sports-lower-thirds: unknown, 참고만. 이름·직함·대결 정보의 하단 자막 구성과 읽기 유지 시간.
- https://schoolofmotion.com/blog/automation-in-after-effects: unknown, 참고만. 가변 하단 자막의 공개 자동화 구조와 텍스트 교체 개념.
- https://au.linkedin.com/posts/ben-marriott-223b7456_new-tutorial-animating-a-liquid-reveal-in-activity-6677034182167945216-6dAj: unknown, 참고만. Ben Marriott 본인의 공개 액체 리빌 튜토리얼 소개.
- https://digitalproduction.com/2020/09/17/liquid-reveal-after-effects-tutorial/: unknown, 참고만. 액체 리빌 공개 튜토리얼과 원저자 링크 확인용 보조 출처.
- https://www.youtube.com/@BenMarriott/videos: unknown, 참고만. 채널 영상 목록 탐색. 특정 스미어 튜토리얼은 확인하지 못함.
- https://rive.app/features: unknown, 참고만. Rive 타임라인·블렌드·보간·벡터 기능 개요.
- https://rive.app/docs/editor/state-machine/states: unknown, 참고만. 단일 타임라인·블렌드 상태 개념.
- https://raw.githubusercontent.com/wiki/airbnb/lottie-web/Features.md: unknown, 참고만. 기능 표 원문 재확인.
- https://raw.githubusercontent.com/wiki/airbnb/lottie-web/Expressions.md: unknown, 참고만. 표현식 지원 문서 원문 재확인.
- https://cycorefx.com/downloads/cfx_hd_std/CycoreFX%201.6%20Manual.pdf: unknown, 참고만. Page Turn의 fold position·direction·radius·backside 등 공식 효과 설명.
- https://schoolofmotion.com/blog/anchor-point-expressions-in-after-effects: unknown, 참고만. sourceRectAtTime의 텍스트 크기 측정과 고정 앵커 개념.

## 못 연 곳·불완전한 접근

- https://helpx.adobe.com/after-effects/using/motion-blur.html: 404. 기법 출처로 단독 사용하지 않았다.
- https://motionscript.com/mastering-expressions/follow-the-leader.html: 465. 기법 출처로 단독 사용하지 않았다.
- https://rive.app/docs/editor/shapes/trim-path: 404. 기법 출처로 단독 사용하지 않았다.
- https://rive.app/docs/editor/animate-mode/animation-overview: 404. 기법 출처로 단독 사용하지 않았다.
- https://github.com/airbnb/lottie-web: 403. GitHub API 응답은 라이선스 증거로 쓰지 않았다. raw LICENSE 또는 레포 페이지로 대체 확인을 시도했다.
- https://github.com/bodymovin/lottie-web: 403. GitHub API 응답은 라이선스 증거로 쓰지 않았다. raw LICENSE 또는 레포 페이지로 대체 확인을 시도했다.
- https://github.com/LottieFiles/awesome-lottie: 403. GitHub API 응답은 라이선스 증거로 쓰지 않았다. raw LICENSE 또는 레포 페이지로 대체 확인을 시도했다.
- https://github.com/inlife/awesome-ae: 403. GitHub API 응답은 라이선스 증거로 쓰지 않았다. raw LICENSE 또는 레포 페이지로 대체 확인을 시도했다.
- https://github.com/rive-app/rive: 403. GitHub API 응답은 라이선스 증거로 쓰지 않았다. raw LICENSE 또는 레포 페이지로 대체 확인을 시도했다.
- https://github.com/rive-app/rive-runtime: 403. GitHub API 응답은 라이선스 증거로 쓰지 않았다. raw LICENSE 또는 레포 페이지로 대체 확인을 시도했다.
- https://rive.app/docs/editor/animate-mode/overview: 404. 기법 출처로 단독 사용하지 않았다.
- https://rive.app/docs/editor/state-machine/blend-states: 404. 기법 출처로 단독 사용하지 않았다.
- https://raw.githubusercontent.com/LottieFiles/awesome-lottie/master/LICENSE: 404. 기법 출처로 단독 사용하지 않았다.
- https://schoolofmotion.com/courses/animation-bootcamp: error. 기법 출처로 단독 사용하지 않았다.
- https://github.com/bodymovin/lottie-web: 404. 기법 출처로 단독 사용하지 않았다.
- https://raw.githubusercontent.com/LottieFiles/awesome-lottie/master/LICENSE.md: 404. LICENSE.txt도 404. unknown을 유지했다.
- https://raw.githubusercontent.com/bodymovin/lottie-web/master/LICENSE.md: 404. airbnb/lottie-web의 실제 LICENSE.md로 대체했다.
- Ben Marriott의 특정 스미어 프레임 영상: 검색과 동적 채널 목록에서 특정 URL·본문을 확인하지 못했다. 원장에서는 Ben Marriott 귀속을 제거했다.

## 기록 범위와 병합

최종 126줄. 기능명만 나열하지 않고 눈에 보이는 현상으로 기록했다. Motion Tile과 CC RepeTile, 범용 관성 오버슈트와 텍스트 팝, 오프셋 윤곽과 윤곽 파동, 하단 자막의 진입과 역순 퇴장을 각각 병합했다. 패널·로고·타이포 조합 관례는 공개 원리에 기반한 자체 구성 예시로 표시했다. 순수 hover·편집기 조작·파일 처리·렌더 자동화는 기법으로 추가하지 않았다.

원장 runtime은 새로 재현할 때의 권장 단일 경로다. 원본 구현이나 라이선스 허용 범위를 뜻하지 않는다. Lottie·Rive로 옮길 수 있다는 문구는 후보 분류이며 실제 호환 완료 주장으로 쓰지 않는다.
