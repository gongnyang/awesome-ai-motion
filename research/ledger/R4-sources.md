# R4 전환과 편집 조사 출처

조사일: 2026-09-30. 구현 코드를 원장에 복사하지 않았다. 동작 정의와 파라미터 사실을 정리했고 재현 방법과 프롬프트는 새로 작성했다. 프롬프트는 지정 스키마에 별도 키가 없어 notes에 기록했다. 원장 제안은 구현 출발값이며 출처 기본값과 구별했다.

원장 150줄. gl-transitions 125개 셰이더와 FFmpeg xfade 기본 전환 58개를 빠짐없이 대응시켰다. Remotion presentation 21개도 모두 대응시켰다. 방향과 개폐 방향 및 같은 동작의 파라미터 차이는 variants로 묶었다.

## 레포와 문서

| 출처 | 라이선스 확인 | 얻은 내용 |
| --- | --- | --- |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions) | [루트 LICENSE](https://github.com/gl-transitions/gl-transitions/blob/master/LICENSE), MIT | transitions 디렉터리의 125개 이름과 동작, uniform 기본값을 전부 조사했다. |
| [InvertedPageCurl](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/InvertedPageCurl.glsl) | 파일 헤더 BSD-3-Clause, 루트 LICENSE MIT | 원통형 페이지 말림. 파일별 BSD 표기를 루트 MIT보다 우선해 기록했다. |
| [StereoViewer](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StereoViewer.glsl) | 파일 헤더 BSD-2-Clause, 루트 LICENSE MIT | 둥근 창의 축소, 반대 회전 분리, 새 창 공개. 파일별 BSD 표기를 기록했다. |
| [Remotion](https://github.com/remotion-dev/remotion) | [LICENSE.md](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md), Remotion License | 개인과 소규모 조직 및 회사 사용 조건이 다른 자체 라이선스다. MIT로 기록하지 않았다. 참고만. |
| [Remotion presentations](https://www.remotion.dev/docs/transitions/presentations) | 레포 자체 라이선스 | 기본 CSS/SVG 전환과 HTML-in-canvas 전환 및 유료 cube를 포함해 21개 동작을 확인했다. |
| [Remotion transition timing](https://www.remotion.dev/docs/transitions/timings) | 레포 자체 라이선스 | presentation 동작과 linearTiming 및 springTiming의 시간 규칙을 분리했다. |
| [Remotion official examples](https://github.com/remotion-dev/remotion/tree/main/packages/example/src/Transitions) | 레포 자체 라이선스 | BasicTransition, AudioTransition, CustomTransition, PushCutDemo, WebGlTransition의 동작을 확인했다. 커스텀 별 마스크의 중간 홀드를 변형으로 병합했다. |
| [Remotion overlay example](https://github.com/remotion-dev/remotion/tree/main/packages/example/src/TransitionSeriesOverlay) | 레포 자체 라이선스 | 컷 앞뒤를 덮는 전면 그래픽 브리지와 offset을 확인했다. |
| [Remotion starter templates](https://www.remotion.dev/templates) | 템플릿마다 재확인 필요, 레포 내 패키지는 자체 라이선스 | 공식 레지스트리 20개를 훑고 전환·편집 관련 Hello World, Overlay, Code Hike, Prompt-to-Video, TikTok과 예제 합계 66개 파일을 조사했다. 배포용 보일러플레이트와 순수 자막·시각화는 담당 영역 밖으로 제외했다. |
| [Motion Canvas](https://github.com/motion-canvas/motion-canvas) | [LICENSE](https://github.com/motion-canvas/motion-canvas/blob/main/LICENSE), MIT | 기본 전환 5개와 useTransition 확장 인터페이스를 조사했다. |
| [Motion Canvas transitions](https://motioncanvas.io/docs/transitions/) | 레포 MIT, 문서 별도 표기 미확인 | fadeTransition, slideTransition, zoomInTransition, zoomOutTransition, waitTransition의 기본 600ms를 확인했다. |
| [Motion Canvas examples](https://github.com/motion-canvas/motion-canvas/tree/main/packages/examples/src) | 레포 MIT | transitions-first와 transitions-second의 슬라이드 연결을 확인했다. 나머지 예제는 순수 도형·코드·레이아웃 등으로 전환 담당 밖이다. |
| [Revideo current repository](https://github.com/midrender/revideo) | [LICENSE](https://github.com/midrender/revideo/blob/main/LICENSE), MIT | 이전 redotvideo 주소 계열의 현재 레포와 엔진 라이선스를 확인했다. 엔진 MIT를 예제 레포에 전이하지 않았다. |
| [Revideo current docs](https://midrender.com/revideo/docs) | 엔진 MIT, 문서 별도 표기 미확인 | docs.re.video가 현재 문서로 이동함을 확인했다. |
| [Revideo examples](https://github.com/midrender/examples) | 무라이선스 | main 전체 아카이브에 LICENSE 또는 COPYING 파일이 없다. stitching-videos는 300ms 퇴장과 300ms 등장을 겹치지 않고 배경을 경유한다. 참고만. |
| [Revideo stitching example](https://github.com/midrender/examples/blob/main/stitching-videos/src/project.tsx) | 무라이선스 | 크기 맞춤과 순차 클립 연결, 단색 경유 페이드 동작을 얻었다. 참고만. |
| [Editly](https://github.com/mifi/editly) | [LICENSE](https://github.com/mifi/editly/blob/master/LICENSE), MIT | gl-transitions 전 이름을 사용할 수 있고 방향별 4개 별칭과 dummy 및 random 선택이 있다. 기본 duration=500ms이며 random은 동작이 아니라 선택 정책이다. |
| [FFmpeg xfade](https://ffmpeg.org/ffmpeg-filters.html#xfade) | [LICENSE.md](https://github.com/FFmpeg/FFmpeg/blob/master/LICENSE.md) 및 [COPYING.LGPLv2.1](https://github.com/FFmpeg/FFmpeg/blob/master/COPYING.LGPLv2.1), LGPL-2.1-or-later | 기본 전환 58개와 custom 인터페이스를 얻었다. 기본 duration=1000ms, offset=0ms다. GPL 옵션을 켠 배포는 GPL-2.0-or-later가 되므로 참고만이다. 원장은 기본 xfade 파일의 LGPL을 기록했다. |
| [FFmpeg xfade source catalogue](https://github.com/FFmpeg/FFmpeg/blob/master/libavfilter/vf_xfade.c) | 파일 헤더 LGPL-2.1-or-later, 루트 LICENSE와 대조 | AVOption 전체 목록으로 문서와 이름을 대조했다. diagtl 계열은 좌표 곱의 그라데이션이고 wipetl 계열과 다르다. |
| [Premiere classic transitions](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-transitions.html) | unknown, 참고만 | dissolve, immersive video, iris, page peel, slide, wipe, zoom 카테고리를 훑었다. 이름보다 가림·이동·회전·발광·왜곡의 동작으로 병합했다. |
| [Premiere dissolve list](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-dissolve-transitions.html) | unknown, 참고만 | 가산, 비가산, 선형광 Film Dissolve와 Morph Cut을 단순 crossfade와 구별했다. |
| [Premiere modern transitions](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) | unknown, 참고만 | 2026년 공개 목록에서 네온 와이프, 광선, 잔광, 거울, 접기, 혼돈, 빛샘 등 대표 동작을 얻었다. 제품 템플릿을 복제하지 않는다. |
| [DaVinci Resolve Edit](https://www.blackmagicdesign.com/products/davinciresolve/edit) | unknown, 참고만 | wipes와 dissolves 및 광학 흐름 Smooth Cut의 대표 동작을 확인했다. |
| [DaVinci Resolve Cut](https://www.blackmagicdesign.com/products/davinciresolve/cut) | unknown, 참고만 | dissolve, iris, motion, shape, wipe의 대표 범주와 컷 편집을 확인했다. |
| [DaVinci Resolve Advanced Editing guide](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Advanced-Editing.pdf) | unknown, 참고만 | Additive, Blur, Cross, Dip to Color, Non-Additive, Smooth Cut 및 짧은 4프레임 Smooth Cut 사례를 얻었다. 예전 버전 문서임을 유지했다. |
| [DaVinci Resolve 17 new features](https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_17_New_Features_Guide.pdf) | unknown, 참고만 | Fusion Cross Dissolve의 노드 확장과 Smooth Cut의 광학 흐름 정의를 확인했다. |
| [CapCut Reel transition guide](https://www.capcut.com/resource/how-to-make-transition-video-on-reels) | unknown, 참고만 | Switch, Page, Dissolution, Lens Stretch/Zoom, Rotation, Mask 대표 전환을 기존 동작과 병합했다. |
| [CapCut dissolve guide](https://www.capcut.com/resource/dissolve-transition-in-video) | unknown, 참고만 | Match Dissolve와 Ripple Dissolve 및 색면 경유 페이드를 확인했다. |
| [CapCut filmmaking transitions](https://www.capcut.com/resource/types-of-filmmaking-transitions) | unknown, 참고만 | cutaway의 맥락 역할과 대표 장면 교체를 확인했다. |

## 편집 용어와 개별 문서

- [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade), LGPL-2.1-or-later: 교차 페이드, 직선 와이프, 밀어내기 전환, 덮기와 걷어내기, 색면 경유 페이드, 흑백 경유 전환, 색 거리 전환, 시계 와이프, 아이리스 공개, 아이리스 닫기 후 열기, 사각 창 닫기 후 열기, 양쪽 마스크 개폐 등의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/fade), Remotion License: 교차 페이드의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-transitions.html), unknown: 교차 페이드, 직선 와이프, 밀어내기 전환, 아이리스 공개, 휩 팬 컷, 기하 아이리스, 띠 슬라이드, 페인트 튐 와이프, 나선 상자 와이프, 지그재그 블록 와이프, 구면 블러 전환, 구면 뫼비우스 줌의 동작과 출처를 확인했다.
- [CapCut](https://www.capcut.com/resource/how-to-make-transition-video-on-reels), unknown: 교차 페이드, 직선 와이프, 밀어내기 전환, 아이리스 공개, 가림 숨은 컷의 동작과 출처를 확인했다.
- [motion-canvas/motion-canvas](https://motioncanvas.io/docs/transitions/), MIT: 교차 페이드, 밀어내기 전환, 영역 줌 연결, 장면 유지 겹침의 동작과 출처를 확인했다.
- [Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve/edit), unknown: 교차 페이드, 광학 흐름 모프 컷의 동작과 출처를 확인했다.
- [mifi/editly](https://github.com/mifi/editly#transition-types), MIT: 교차 페이드, 직선 와이프, 밀어내기 전환, 축소 밀어내기, 물러나며 덮기, 색면 경유 페이드, 흑백 경유 전환, 색상환 경유 페이드, 색 채널 시차 페이드, 색 거리 전환, 곱셈 중간상 전환, 시계 와이프 등의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-dissolve-transitions.html), unknown: 교차 페이드, 색면 경유 페이드, 가산 디졸브의 동작과 출처를 확인했다.
- [Blackmagic Design](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Advanced-Editing.pdf), unknown: 교차 페이드, 가산 디졸브의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/wipe), Remotion License: 직선 와이프의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/slide), Remotion License: 밀어내기 전환의 동작과 출처를 확인했다.
- [midrender/examples](https://github.com/midrender/examples/blob/main/stitching-videos/src/project.tsx), 무라이선스: 색면 경유 페이드의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/clock-wipe), Remotion License: 시계 와이프의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/iris), Remotion License: 아이리스 공개의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://github.com/remotion-dev/remotion/blob/main/packages/example/src/Transitions/CustomTransition.tsx), Remotion License: 별 모양 와이프의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/dissolve), Remotion License: 노이즈 연소 테두리의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/film-burn), Remotion License: 필름 번의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://github.com/remotion-dev/remotion/blob/main/packages/template-prompt-to-video/src/lib/utils.ts), Remotion License: 초점 흐림 디졸브의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/linear-blur), Remotion License: 직선 블러 디졸브의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/cross-zoom), Remotion License: 교차 줌의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/zoom-in-out), Remotion License: 확대 후 복귀 전환의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/dreamy-zoom), Remotion License: 몽환 줌 플래시의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/zoom-blur), Remotion License: 회전 줌 블러의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/ripple), Remotion License: 물결 디졸브의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/crosswarp), Remotion License: 교차 왜곡의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/flip), Remotion License: 평면 플립의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/book-flip), Remotion License: 책 페이지 넘기기의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/cube), Remotion License: 큐브 회전의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/swap), Remotion License: 원근 자리 교환의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/apply-video-transitions/transitions-overview.html), unknown: 하드 컷의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/none), Remotion License: 하드 컷의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/match-cut.html), unknown: 매치 컷의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/discover/jump-cut.html), unknown: 점프 컷의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/discover/j-cut-and-l-cut.html), unknown: J 컷, L 컷, 배경음 브리지의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/smash-cut.html), unknown: 스매시 컷의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film.html), unknown: 인서트 컷, 반응 컷, 동작 중 컷, 시선 연결 컷, 숏 리버스 숏의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/production/cinematography/camera-shots-and-angles.html), unknown: 인서트 컷, 반응 컷, 숏 리버스 숏의 동작과 출처를 확인했다.
- [CapCut](https://www.capcut.com/resource/types-of-filmmaking-transitions), unknown: 컷어웨이의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/cross-cut.html), unknown: 교차 편집의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/discover/edit-a-video.html), unknown: 몽타주, 비트 컷의 동작과 출처를 확인했다.
- [Adobe](https://www.adobe.com/creativecloud/video/hub/ideas/what-is-continuity-editing-in-film.html), unknown: 시선 연결 컷의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/th_th/premiere-pro/how-to/edit-music-video.html), unknown: 비트 컷, 속도 램프 컷의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/blur-slide), Remotion License: 휩 팬 컷의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/push-cut), Remotion License: 확대 플래시 컷의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/uk/premiere/desktop/add-video-effects/apply-video-transitions/apply-morph-cut-to-smoothen-jump-cuts.html), unknown: 광학 흐름 모프 컷의 동작과 출처를 확인했다.
- [CapCut](https://www.capcut.com/resource/dissolve-transition-in-video), unknown: 매치 디졸브의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/transitionseries), Remotion License: 오버레이 브리지의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://github.com/remotion-dev/remotion/tree/main/packages/template-overlay), Remotion License: 오버레이 브리지의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/premiere-pro/using/duration-speed.html), unknown: 속도 램프 컷의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://www.remotion.dev/docs/freeze), Remotion License: 정지 프레임 구두점 컷의 동작과 출처를 확인했다.
- [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html), unknown: 빛샘 브리지, 빛 스윕 와이프, 네온 테두리 와이프, 렌즈 플레어 브리지, 광선 폭발 전환, 솔라리제이션 디졸브, 형광 잔광 디졸브, 거울 전환, 종이 접기 전환, 프레임 테두리 전환, 스프링 슬라이드 전환, 혼돈 붕괴 전환 등의 동작과 출처를 확인했다.
- [remotion-dev/remotion](https://github.com/remotion-dev/remotion/blob/main/packages/template-code-hike/src/CodeTransition.tsx), Remotion License: 공통 토큰 위치 연결의 동작과 출처를 확인했다.

## gl-transitions 전체 대응

| 셰이더 이름 | 원장 ID | 동작 |
| --- | --- | --- |
| [fade](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fade.glsl) | R4-001 | 교차 페이드 |
| [wipeDown](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wipeDown.glsl) | R4-002 | 직선 와이프 |
| [wipeLeft](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wipeLeft.glsl) | R4-002 | 직선 와이프 |
| [wipeRight](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wipeRight.glsl) | R4-002 | 직선 와이프 |
| [wipeUp](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wipeUp.glsl) | R4-002 | 직선 와이프 |
| [directionalwipe](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/directionalwipe.glsl) | R4-002 | 직선 와이프 |
| [Directional](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Directional.glsl) | R4-003 | 밀어내기 전환 |
| [directional-easing](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/directional-easing.glsl) | R4-003 | 밀어내기 전환 |
| [DirectionalScaled](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DirectionalScaled.glsl) | R4-004 | 축소 밀어내기 |
| [LeftRight](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/LeftRight.glsl) | R4-006 | 물러나며 덮기 |
| [TopBottom](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TopBottom.glsl) | R4-006 | 물러나며 덮기 |
| [fadecolor](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fadecolor.glsl) | R4-007 | 색면 경유 페이드 |
| [fadegrayscale](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fadegrayscale.glsl) | R4-008 | 흑백 경유 전환 |
| [HSVfade](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/HSVfade.glsl) | R4-009 | 색상환 경유 페이드 |
| [colorphase](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/colorphase.glsl) | R4-010 | 색 채널 시차 페이드 |
| [ColourDistance](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ColourDistance.glsl) | R4-011 | 색 거리 전환 |
| [multiply_blend](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/multiply_blend.glsl) | R4-012 | 곱셈 중간상 전환 |
| [angular](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/angular.glsl) | R4-013 | 시계 와이프 |
| [Radial](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Radial.glsl) | R4-013 | 시계 와이프 |
| [circleopen](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/circleopen.glsl) | R4-014 | 아이리스 공개 |
| [CircleCrop](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/CircleCrop.glsl) | R4-015 | 아이리스 닫기 후 열기 |
| [circle](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/circle.glsl) | R4-015 | 아이리스 닫기 후 열기 |
| [RectangleCrop](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/RectangleCrop.glsl) | R4-016 | 사각 창 닫기 후 열기 |
| [Rectangle](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Rectangle.glsl) | R4-017 | 사각 색면 개폐 |
| [Box](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Box.glsl) | R4-018 | 위치 지정 사각 공개 |
| [HorizontalOpen](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/HorizontalOpen.glsl) | R4-019 | 양쪽 마스크 개폐 |
| [HorizontalClose](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/HorizontalClose.glsl) | R4-019 | 양쪽 마스크 개폐 |
| [VerticalOpen](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/VerticalOpen.glsl) | R4-019 | 양쪽 마스크 개폐 |
| [VerticalClose](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/VerticalClose.glsl) | R4-019 | 양쪽 마스크 개폐 |
| [BowTieHorizontal](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/BowTieHorizontal.glsl) | R4-020 | 나비넥타이 와이프 |
| [BowTieVertical](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/BowTieVertical.glsl) | R4-020 | 나비넥타이 와이프 |
| [BowTieWithParameter](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/BowTieWithParameter.glsl) | R4-020 | 나비넥타이 와이프 |
| [StarWipe](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StarWipe.glsl) | R4-021 | 별 모양 와이프 |
| [heart](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/heart.glsl) | R4-022 | 실루엣 확장 와이프 |
| [cannabisleaf](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/cannabisleaf.glsl) | R4-022 | 실루엣 확장 와이프 |
| [polar_function](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/polar_function.glsl) | R4-023 | 극좌표 꽃잎 와이프 |
| [pinwheel](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/pinwheel.glsl) | R4-024 | 바람개비 와이프 |
| [PolkaDotsCurtain](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/PolkaDotsCurtain.glsl) | R4-025 | 물방울 점 커튼 |
| [chessboard](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/chessboard.glsl) | R4-026 | 체커보드 와이프 |
| [randomsquares](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/randomsquares.glsl) | R4-027 | 무작위 타일 디졸브 |
| [BlockDissolve](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/BlockDissolve.glsl) | R4-027 | 무작위 타일 디졸브 |
| [randomNoisex](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/randomNoisex.glsl) | R4-028 | 픽셀 노이즈 디졸브 |
| [squareswire](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/squareswire.glsl) | R4-029 | 격자 테두리 확장 공개 |
| [windowslice](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/windowslice.glsl) | R4-030 | 슬라이스 와이프 |
| [windowblinds](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/windowblinds.glsl) | R4-031 | 교대 블라인드 디졸브 |
| [wind](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wind.glsl) | R4-032 | 바람 줄무늬 와이프 |
| [perlin](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/perlin.glsl) | R4-035 | 노이즈 구름 디졸브 |
| [crosshatch](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/crosshatch.glsl) | R4-036 | 교차 해칭 디졸브 |
| [luma](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/luma.glsl) | R4-037 | 휘도 맵 와이프 |
| [luminance_melt](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/luminance_melt.glsl) | R4-038 | 휘도 녹아내리기 |
| [dissolve](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/dissolve.glsl) | R4-039 | 노이즈 연소 테두리 |
| [burn0](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/burn0.glsl) | R4-039 | 노이즈 연소 테두리 |
| [burn](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/burn.glsl) | R4-040 | 색조 연소 페이드 |
| [undulatingBurnOut](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/undulatingBurnOut.glsl) | R4-041 | 물결 연소 와이프 |
| [FilmBurn](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/FilmBurn.glsl) | R4-042 | 필름 번 |
| [Overexposure](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Overexposure.glsl) | R4-043 | 과노출 플래시 |
| [DefocusBlur](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DefocusBlur.glsl) | R4-044 | 초점 흐림 디졸브 |
| [LinearBlur](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/LinearBlur.glsl) | R4-045 | 직선 블러 디졸브 |
| [CrossZoom](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/CrossZoom.glsl) | R4-047 | 교차 줌 |
| [SimpleZoom](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/SimpleZoom.glsl) | R4-048 | 단순 줌 전환 |
| [SimpleZoomOut](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/SimpleZoomOut.glsl) | R4-048 | 단순 줌 전환 |
| [zoomInOut](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/zoomInOut.glsl) | R4-049 | 확대 후 복귀 전환 |
| [scale-in](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/scale-in.glsl) | R4-050 | 새 장면 확대 복귀 |
| [ZoomLeftWipe](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomLeftWipe.glsl) | R4-051 | 줌 와이프 |
| [ZoomRigthWipe](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomRigthWipe.glsl) | R4-051 | 줌 와이프 |
| [ZoomInCircles](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomInCircles.glsl) | R4-052 | 동심원 줌 |
| [Dreamy](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Dreamy.glsl) | R4-053 | 몽환 파동 디졸브 |
| [DreamyZoom](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DreamyZoom.glsl) | R4-054 | 몽환 줌 플래시 |
| [ripple](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ripple.glsl) | R4-056 | 물결 디졸브 |
| [WaterDrop](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/WaterDrop.glsl) | R4-057 | 물방울 파문 공개 |
| [ButterflyWaveScrawler](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ButterflyWaveScrawler.glsl) | R4-058 | 나비 곡선 파동 왜곡 |
| [CrazyParametricFun](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/CrazyParametricFun.glsl) | R4-059 | 매개 곡선 파동 왜곡 |
| [directionalwarp](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/directionalwarp.glsl) | R4-060 | 방향 압축 왜곡 |
| [crosswarp](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/crosswarp.glsl) | R4-061 | 교차 왜곡 |
| [displacement](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/displacement.glsl) | R4-062 | 변위 맵 디졸브 |
| [morph](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/morph.glsl) | R4-063 | 색 기반 모프 |
| [coord-from-in](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/coord-from-in.glsl) | R4-063 | 색 기반 모프 |
| [squeeze](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/squeeze.glsl) | R4-064 | 압착 전환 |
| [Swirl](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Swirl.glsl) | R4-065 | 소용돌이 전환 |
| [Revolve_Left](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Revolve_Left.glsl) | R4-066 | 소용돌이 줌 회전 |
| [kaleidoscope](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/kaleidoscope.glsl) | R4-067 | 만화경 전환 |
| [powerKaleido](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/powerKaleido.glsl) | R4-067 | 만화경 전환 |
| [flyeye](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/flyeye.glsl) | R4-068 | 곤충 눈 굴절 |
| [pixelize](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/pixelize.glsl) | R4-069 | 픽셀화 디졸브 |
| [mosaic_transition](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/mosaic_transition.glsl) | R4-069 | 픽셀화 디졸브 |
| [AdvancedMosaic](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/AdvancedMosaic.glsl) | R4-069 | 픽셀화 디졸브 |
| [Mosaic](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Mosaic.glsl) | R4-070 | 줌 모자이크 이동 |
| [GridFlip](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/GridFlip.glsl) | R4-071 | 격자 플립 |
| [TilesWave](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TilesWave.glsl) | R4-072 | 타일 파도 플립 |
| [PuzzleRight](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/PuzzleRight.glsl) | R4-071 | 격자 플립 |
| [fragment](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fragment.glsl) | R4-073 | 조각 분해 |
| [DoomScreenTransition](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DoomScreenTransition.glsl) | R4-074 | 세로 기둥 녹아내리기 |
| [Bounce](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Bounce.glsl) | R4-075 | 바운스 덮기 |
| [SimpleFlip](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/SimpleFlip.glsl) | R4-076 | 평면 플립 |
| [BookFlip](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/BookFlip.glsl) | R4-077 | 책 페이지 넘기기 |
| [InvertedPageCurl](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/InvertedPageCurl.glsl) | R4-078 | 페이지 말림 |
| [Fold](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Fold.glsl) | R4-079 | 맞접기 전환 |
| [cube](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/cube.glsl) | R4-080 | 큐브 회전 |
| [doorway](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/doorway.glsl) | R4-081 | 문 열고 진입 |
| [swap](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/swap.glsl) | R4-082 | 원근 자리 교환 |
| [Rolls](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Rolls.glsl) | R4-083 | 모서리 회전 넘기기 |
| [RotateScaleVanish](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/RotateScaleVanish.glsl) | R4-084 | 회전 축소 소멸 |
| [rotate_scale_fade](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/rotate_scale_fade.glsl) | R4-084 | 회전 축소 소멸 |
| [Slides](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Slides.glsl) | R4-085 | 앵커 확대 축소 교체 |
| [splitSlideInHorizontal](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInHorizontal.glsl) | R4-086 | 반쪽 슬라이드 |
| [splitSlideInVertical](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInVertical.glsl) | R4-086 | 반쪽 슬라이드 |
| [splitSlideOutHorizontal](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideOutHorizontal.glsl) | R4-086 | 반쪽 슬라이드 |
| [splitSlideOutVertical](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideOutVertical.glsl) | R4-086 | 반쪽 슬라이드 |
| [splitSlideInOutHorizontal](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInOutHorizontal.glsl) | R4-086 | 반쪽 슬라이드 |
| [splitSlideInOutVertical](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInOutVertical.glsl) | R4-086 | 반쪽 슬라이드 |
| [rotateTransition](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/rotateTransition.glsl) | R4-087 | 회전 반복 타일 전환 |
| [tangentMotionBlur](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/tangentMotionBlur.glsl) | R4-088 | 접선 잔상 회전 |
| [StereoViewer](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StereoViewer.glsl) | R4-089 | 스테레오 뷰어 교체 |
| [GlitchDisplace](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/GlitchDisplace.glsl) | R4-090 | 글리치 변위 |
| [GlitchMemories](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/GlitchMemories.glsl) | R4-091 | 블록 RGB 글리치 |
| [parametric_glitch](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/parametric_glitch.glsl) | R4-092 | 매개 파형 글리치 |
| [Drop_Zone_Flicker](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Drop_Zone_Flicker.glsl) | R4-093 | 점멸 잔상 글리치 |
| [StripDatamoshGlitch](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StripDatamoshGlitch.glsl) | R4-094 | 띠 데이터모시 |
| [TVStatic](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TVStatic.glsl) | R4-095 | TV 잡음 삽입 |
| [StaticFade](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StaticFade.glsl) | R4-096 | 잡음 혼합 페이드 |
| [static_wipe](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/static_wipe.glsl) | R4-097 | 잡음 띠 와이프 |
| [old_tv_lost_signal](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/old_tv_lost_signal.glsl) | R4-098 | TV 추적 신호 흔들림 |
| [EdgeTransition](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/EdgeTransition.glsl) | R4-099 | 윤곽선 경유 전환 |
| [x_axis_translation](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/x_axis_translation.glsl) | R4-100 | 이동 페이드 경계 |
| [hexagonalize](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/hexagonalize.glsl) | R4-101 | 육각 픽셀화 |

## FFmpeg xfade 전체 대응

| 이름 | 원장 ID | 동작 |
| --- | --- | --- |
| fade | R4-001 | 교차 페이드 |
| fadefast | R4-001 | 교차 페이드 |
| fadeslow | R4-001 | 교차 페이드 |
| wipeleft | R4-002 | 직선 와이프 |
| wiperight | R4-002 | 직선 와이프 |
| wipeup | R4-002 | 직선 와이프 |
| wipedown | R4-002 | 직선 와이프 |
| wipetl | R4-002 | 직선 와이프 |
| wipetr | R4-002 | 직선 와이프 |
| wipebl | R4-002 | 직선 와이프 |
| wipebr | R4-002 | 직선 와이프 |
| slideleft | R4-003 | 밀어내기 전환 |
| slideright | R4-003 | 밀어내기 전환 |
| slideup | R4-003 | 밀어내기 전환 |
| slidedown | R4-003 | 밀어내기 전환 |
| coverleft | R4-005 | 덮기와 걷어내기 |
| coverright | R4-005 | 덮기와 걷어내기 |
| coverup | R4-005 | 덮기와 걷어내기 |
| coverdown | R4-005 | 덮기와 걷어내기 |
| revealleft | R4-005 | 덮기와 걷어내기 |
| revealright | R4-005 | 덮기와 걷어내기 |
| revealup | R4-005 | 덮기와 걷어내기 |
| revealdown | R4-005 | 덮기와 걷어내기 |
| fadeblack | R4-007 | 색면 경유 페이드 |
| fadewhite | R4-007 | 색면 경유 페이드 |
| fadegrays | R4-008 | 흑백 경유 전환 |
| distance | R4-011 | 색 거리 전환 |
| radial | R4-013 | 시계 와이프 |
| circleopen | R4-014 | 아이리스 공개 |
| circleclose | R4-014 | 아이리스 공개 |
| circlecrop | R4-015 | 아이리스 닫기 후 열기 |
| rectcrop | R4-016 | 사각 창 닫기 후 열기 |
| vertopen | R4-019 | 양쪽 마스크 개폐 |
| vertclose | R4-019 | 양쪽 마스크 개폐 |
| horzopen | R4-019 | 양쪽 마스크 개폐 |
| horzclose | R4-019 | 양쪽 마스크 개폐 |
| dissolve | R4-028 | 픽셀 노이즈 디졸브 |
| hlslice | R4-030 | 슬라이스 와이프 |
| hrslice | R4-030 | 슬라이스 와이프 |
| vuslice | R4-030 | 슬라이스 와이프 |
| vdslice | R4-030 | 슬라이스 와이프 |
| hlwind | R4-032 | 바람 줄무늬 와이프 |
| hrwind | R4-032 | 바람 줄무늬 와이프 |
| vuwind | R4-032 | 바람 줄무늬 와이프 |
| vdwind | R4-032 | 바람 줄무늬 와이프 |
| smoothleft | R4-033 | 부드러운 방향 디졸브 |
| smoothright | R4-033 | 부드러운 방향 디졸브 |
| smoothup | R4-033 | 부드러운 방향 디졸브 |
| smoothdown | R4-033 | 부드러운 방향 디졸브 |
| diagtl | R4-034 | 모서리 그라데이션 디졸브 |
| diagtr | R4-034 | 모서리 그라데이션 디졸브 |
| diagbl | R4-034 | 모서리 그라데이션 디졸브 |
| diagbr | R4-034 | 모서리 그라데이션 디졸브 |
| hblur | R4-046 | 가로 블러 디졸브 |
| zoomin | R4-048 | 단순 줌 전환 |
| squeezeh | R4-064 | 압착 전환 |
| squeezev | R4-064 | 압착 전환 |
| pixelize | R4-069 | 픽셀화 디졸브 |
| custom | 제외 | 사용자 픽셀 수식 확장 인터페이스로 고정된 가시 동작이 없다. |

## Remotion presentation 전체 대응

| 이름 | 원장 ID | 동작 |
| --- | --- | --- |
| [fade](https://www.remotion.dev/docs/transitions/presentations/fade) | R4-001 | 교차 페이드 |
| [wipe](https://www.remotion.dev/docs/transitions/presentations/wipe) | R4-002 | 직선 와이프 |
| [slide](https://www.remotion.dev/docs/transitions/presentations/slide) | R4-003 | 밀어내기 전환 |
| [clock-wipe](https://www.remotion.dev/docs/transitions/presentations/clock-wipe) | R4-013 | 시계 와이프 |
| [iris](https://www.remotion.dev/docs/transitions/presentations/iris) | R4-014 | 아이리스 공개 |
| [linear-blur](https://www.remotion.dev/docs/transitions/presentations/linear-blur) | R4-045 | 직선 블러 디졸브 |
| [cross-zoom](https://www.remotion.dev/docs/transitions/presentations/cross-zoom) | R4-047 | 교차 줌 |
| [zoom-in-out](https://www.remotion.dev/docs/transitions/presentations/zoom-in-out) | R4-049 | 확대 후 복귀 전환 |
| [dreamy-zoom](https://www.remotion.dev/docs/transitions/presentations/dreamy-zoom) | R4-054 | 몽환 줌 플래시 |
| [zoom-blur](https://www.remotion.dev/docs/transitions/presentations/zoom-blur) | R4-055 | 회전 줌 블러 |
| [ripple](https://www.remotion.dev/docs/transitions/presentations/ripple) | R4-056 | 물결 디졸브 |
| [crosswarp](https://www.remotion.dev/docs/transitions/presentations/crosswarp) | R4-061 | 교차 왜곡 |
| [flip](https://www.remotion.dev/docs/transitions/presentations/flip) | R4-076 | 평면 플립 |
| [book-flip](https://www.remotion.dev/docs/transitions/presentations/book-flip) | R4-077 | 책 페이지 넘기기 |
| [cube](https://www.remotion.dev/docs/transitions/presentations/cube) | R4-080 | 큐브 회전 |
| [swap](https://www.remotion.dev/docs/transitions/presentations/swap) | R4-082 | 원근 자리 교환 |
| [film-burn](https://www.remotion.dev/docs/transitions/presentations/film-burn) | R4-042 | 필름 번 |
| [dissolve](https://www.remotion.dev/docs/transitions/presentations/dissolve) | R4-039 | 노이즈 연소 테두리 |
| [push-cut](https://www.remotion.dev/docs/transitions/presentations/push-cut) | R4-119 | 확대 플래시 컷 |
| [none](https://www.remotion.dev/docs/transitions/presentations/none) | R4-102 | 하드 컷 |
| [blur-slide](https://www.remotion.dev/docs/transitions/presentations/blur-slide) | R4-118 | 휩 팬 컷 |

## 조사 범위와 제외

- 편집 도구의 ripple trim, slip trim, track selection 등 조작 자체는 화면 전환 기법이 아니므로 제외했다. 장면 시연으로 보이는 컷·속도 변화·음향 연결은 포함했다.
- 전환과 무관한 자막 강조, 차트, 입자, 3D 물체 애니메이션은 다른 담당 영역이다. Remotion Code Hike의 공통 토큰 연결은 화면 상태 전환으로 포함했다.
- 브랜드별 전환 프리셋 이름과 제공 개수는 버전과 플랜에 따라 변한다. Premiere·Resolve·CapCut은 요청대로 대표 전환을 조사했다.
- 런타임은 새로 재현할 권장 매체다. 원본 엔진 의존성을 뜻하지 않는다. Remotion HTML-in-canvas의 일부 예제는 Chrome 실험 기능을 요구하지만 원장 재현 방법은 독립 WebGL이다.
- FFmpeg custom과 Editly random, Motion Canvas useTransition은 확장 또는 선택 인터페이스로 개별 효과 수에 넣지 않았다.

## 못 연 곳과 우회 결과

- https://api.github.com/repos/revideo-dev/revideo/git/trees/HEAD?recursive=1: 404. 현재 midrender/revideo와 midrender/examples를 찾아 우회했다.
- https://api.github.com/repos/midrender/revideo/git/trees/HEAD?recursive=1: 비인증 API 403 rate limit. raw LICENSE와 공식 README 및 문서로 우회했다.
- https://api.github.com/repos/midrender/examples/git/trees/HEAD?recursive=1: 비인증 API 403 rate limit. codeload main 전체 아카이브를 메모리에서 조사했다.
- https://raw.githubusercontent.com/midrender/examples/main/LICENSE: 404. 아카이브 전체에도 LICENSE 또는 COPYING 파일이 없어 무라이선스로 표시했다.
- https://raw.githubusercontent.com/midrender/examples/main/stitching-videos/src/scenes/example.tsx: 404. 실제 src/project.tsx를 찾아 조사했다.
- https://www.remotion.dev/docs/time-warp: 404. 속도 램프 출처는 Adobe의 공식 Time Remapping 문서로 교체했다.


## 검증

- JSONL 150줄을 파싱해 필수 키, 연속 ID, family, runtime, source와 variants 타입을 확인했다.
- gl-transitions 125/125, FFmpeg 기본 전환 58/58, Remotion presentation 21/21의 이름 대응을 확인했다.
- PuzzleRight는 실제로 GridFlip과 같은 셀 압축 플립이라 같은 원장 항목으로 합쳤다.
- 코드 구현 파일을 산출물에 포함하지 않았다. 출처 목록과 설명 및 파라미터만 기록했다.
