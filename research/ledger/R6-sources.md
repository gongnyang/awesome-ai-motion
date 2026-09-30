# R6 데이터 시각화 모션 출처 원장

조사일: 2026-09-30. 중복 정리 후 105개 기법을 기록했다.

기법과 공개 설명만 참고했다. 구현 코드를 가져오지 않았다. params의 재현 기본값은 별도 표기가 없으면 제안값이다. notes에 짧은 재현 프롬프트를 함께 기록했다. 상호작용 사례는 영상의 자동 재생 단계로 바꿀 수 있을 때만 포함했다.

연구 분류는 Heer & Robertson의 7유형인 시점 변환, 좌표 기반 변환, 필터, 순서, 시간 단계, 시각 인코딩 변화, 데이터 스키마 변화로 검토했다. 추상 분류 자체를 효과 수에 넣지 않고 구체적인 움직임을 기록했다.

라이선스는 저장소 루트의 LICENSE 파일 내용으로 확인했다. 라이브러리 라이선스를 Observable 노트북, 기사, 데이터나 폰트에 전이하지 않았다. unknown은 확인 불가를 뜻한다. 루트에서 LICENSE를 찾지 못한 경우에도 무라이선스라고 확정하지 않았다. Mapbox는 본체 약관과 포함된 제삼자 라이선스를 구분했다.

## 사용한 출처

- [d3/d3-transition](https://d3js.org/d3-transition) | 라이선스: ISC | 속성 보간, 지연, 연쇄 전환, 중단과 현재 상태 연결 | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-transition/main/LICENSE)
- [d3/d3-ease](https://d3js.org/d3-ease) | 라이선스: BSD-3-Clause | linear, poly, quad, cubic, sin, exp, circle, elastic, back, bounce 계열과 조절값 | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-ease/main/LICENSE)
- [d3/d3-interpolate](https://d3js.org/d3-interpolate) | 라이선스: ISC | 숫자, 색상, 좌표와 변환 보간 | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-interpolate/main/LICENSE)
- [d3/d3-force](https://d3js.org/d3-force/simulation) | 라이선스: ISC | 속도 감쇠, 냉각, 고정점과 재가열에 따른 네트워크 움직임 | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-force/main/LICENSE)
- [d3/d3-zoom](https://d3js.org/d3-zoom) | 라이선스: ISC | 연속 이동, 확대, 확대 중심과 제약 | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-zoom/main/LICENSE)
- [d3/d3-sankey](https://github.com/d3/d3-sankey) | 라이선스: BSD-3-Clause | 흐름 폭, 노드 정렬, 링크 재배치. 정적 레이아웃에서 모션 변형을 도출한다 | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-sankey/master/LICENSE)
- [bost.ocks.org](https://bost.ocks.org/mike/constancy/) | 라이선스: unknown | 항목 정체성을 유지하는 정렬과 데이터 갱신 | LICENSE 확인 불가, 참고만
- [bost.ocks.org](https://bost.ocks.org/mike/transition/) | 라이선스: unknown | 단계 전환과 경로 보간의 대응 문제 | LICENSE 확인 불가, 참고만
- [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) | 라이선스: unknown | 시점, 좌표 기반, 필터, 순서, 시간, 인코딩, 스키마 변화의 7분류와 단계화 원칙 | LICENSE 확인 불가, 참고만
- [MIT Visualization Group](https://vis.csail.mit.edu/pubs/animated-vega-lite/) | 라이선스: unknown | 시간을 데이터 채널과 이벤트로 표현하는 연구. 표준 Vega-Lite와 구분 | LICENSE 확인 불가, 참고만
- [uwdata/gemini](https://github.com/uwdata/gemini) | 라이선스: BSD-3-Clause | 마크, 축, 범례 단계의 동기화와 연쇄 전환 | [LICENSE 확인](https://raw.githubusercontent.com/uwdata/gemini/master/LICENSE)
- [NilsRodrigues/d3-scattertrans](https://github.com/NilsRodrigues/d3-scattertrans) | 라이선스: MIT | 선형, 스플라인, 회전과 깊이 단계형 산점도 전환 | [LICENSE 확인](https://raw.githubusercontent.com/NilsRodrigues/d3-scattertrans/main/LICENSE)
- [Rodrigues et al. 2024](https://arxiv.org/abs/2401.04692) | 라이선스: unknown | 산점도 추적 과제의 회전, 스플라인, 깊이 확장 비교 | LICENSE 확인 불가, 참고만
- [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) | 라이선스: Apache-2.0 | enter, update, leave 애니메이션 시간과 항목 대응 | [LICENSE 확인](https://raw.githubusercontent.com/apache/echarts/master/LICENSE)
- [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) | 라이선스: Apache-2.0 | 차트 간 도형 변환과 일대일, 일대다, 다대일 대응 | [LICENSE 확인](https://raw.githubusercontent.com/apache/echarts/master/LICENSE)
- [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/v5-feature/) | 라이선스: Apache-2.0 | 실시간 정렬, 숫자 보간과 커스텀 도형 애니메이션 | [LICENSE 확인](https://raw.githubusercontent.com/apache/echarts/master/LICENSE)
- [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) | 라이선스: MIT | 속성별 시간, 반복, 색상과 가시성 전환. 문서 기본 시간 1000ms, easeOutQuart | [LICENSE 확인](https://raw.githubusercontent.com/chartjs/Chart.js/master/LICENSE.md)
- [chartjs/Chart.js](https://www.chartjs.org/docs/latest/samples/animations/progressive-line.html) | 라이선스: MIT | 이전 점에서 다음 점으로 이어지는 순차 선 생성 | [LICENSE 확인](https://raw.githubusercontent.com/chartjs/Chart.js/master/LICENSE.md)
- [chartjs/Chart.js](https://www.chartjs.org/docs/latest/samples/animations/loop.html) | 라이선스: MIT | 라인 곡률의 반복 변형 | [LICENSE 확인](https://raw.githubusercontent.com/chartjs/Chart.js/master/LICENSE.md)
- [vega/vega](https://vega.github.io/vega/docs/event-streams/) | 라이선스: BSD-3-Clause | timer 이벤트로 데이터 프레임을 반복 갱신한다 | [LICENSE 확인](https://raw.githubusercontent.com/vega/vega/main/LICENSE)
- [vega/vega](https://vega.github.io/vega/examples/force-directed-layout/) | 라이선스: BSD-3-Clause | 포스 기반 그래프 움직임 | [LICENSE 확인](https://raw.githubusercontent.com/vega/vega/main/LICENSE)
- [vega/vega](https://vega.github.io/vega/examples/hypothetical-outcome-plots/) | 라이선스: BSD-3-Clause | 분포에서 뽑은 가상 시계열을 프레임별로 표시한다 | [LICENSE 확인](https://raw.githubusercontent.com/vega/vega/main/LICENSE)
- [Flourish](https://flourish.studio/blog/line-chart-race/) | 라이선스: unknown | 전체, 확대 창, 누적 공개의 레이스 모드와 시간별 캡션 | LICENSE 확인 불가, 참고만
- [Flourish](https://flourish.studio/blog/make-arrow-plots/) | 라이선스: unknown | 방향 변화 화살표와 시간 경로 표시 | LICENSE 확인 불가, 참고만
- [Flourish](https://app.flourish.studio/@flourish/scatter) | 라이선스: unknown | 동일 이름의 점 이동, 시간 슬라이더, 추적선, stagger 옵션 | LICENSE 확인 불가, 참고만
- [Flourish](https://flourish.studio/visualisations/pictogram-charts/) | 라이선스: unknown | 아이콘 수량, 와플 비율, 평점과 애니메이션 기능 | LICENSE 확인 불가, 참고만
- [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761548263823-Number-ticker-an-overview) | 라이선스: unknown | 수치 보간, 음수 시작점, 문장 안 복수 숫자와 시간 설정 | LICENSE 확인 불가, 참고만
- [Flourish](https://flourish.studio/blog/number-ticker-countdown-templates/) | 라이선스: unknown | 목표 수치까지의 티커와 목표 시점까지의 카운트다운 | LICENSE 확인 불가, 참고만
- [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview) | 라이선스: unknown | 고정 트랙, 선수 이동, 선두 추적 카메라와 순위 표시 | LICENSE 확인 불가, 참고만
- [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/9196682333199-Sports-template-player-animations) | 라이선스: unknown | 스포츠 전술의 점 이동과 궤적 | LICENSE 확인 불가, 참고만
- [Flourish](https://flourish.studio/visualisations/) | 라이선스: unknown | 템플릿 유형과 스토리 전환의 전체 범위 확인 | LICENSE 확인 불가, 참고만
- [HubSpot/odometer](https://github.com/HubSpot/odometer) | 라이선스: MIT | 각 자릿수의 세로 롤링 전환 | [LICENSE 확인](https://raw.githubusercontent.com/HubSpot/odometer/master/LICENSE)
- [fnando/sparkline](https://github.com/fnando/sparkline) | 라이선스: MIT | 미니 추세선과 이동 커서. 자동 재생 변형은 새로 설계한다 | [LICENSE 확인](https://raw.githubusercontent.com/fnando/sparkline/main/LICENSE)
- [vizabi/bubblechart](https://github.com/vizabi/bubblechart) | 라이선스: unknown | Gapminder식 시간별 거품과 추적선 루트 LICENSE가 보이지 않아 unknown으로 남겼다. 구형 vizabi/vizabi의 BSD-3-Clause를 전이하지 않는다. | LICENSE 확인 불가, 참고만
- [Gapminder](https://www.gapminder.org/free-material/) | 라이선스: CC-BY-4.0 | 무료 자료에 대한 별도 라이선스. 저장소 코드와 분리 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/bar-chart-race) | 라이선스: unknown | 길이와 순위를 함께 갱신하는 막대 레이스 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/stacked-to-grouped-bars) | 라이선스: unknown | 누적 막대와 그룹 막대의 단계 전환 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/streamgraph-transitions) | 라이선스: unknown | 연속 면 레이어의 윤곽 전환 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/scatterplot-tour) | 라이선스: unknown | 군집 경계 상자를 차례로 확대하고 전체 보기로 돌아오는 산점도 시점 투어. 축 변수 전환 사례가 아니다. | LICENSE 확인 불가, 참고만
- [Observable @mbostock](https://observablehq.com/@mbostock/the-wealth-health-of-nations) | 라이선스: unknown | 국가별 수치와 인구를 시간별 거품으로 표시 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/animated-treemap) | 라이선스: unknown | 사각형 분할 면적의 시간별 갱신 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/temporal-force-directed-graph) | 라이선스: unknown | 노드와 링크의 시간별 출입과 포스 재배치 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/smooth-zooming) | 라이선스: unknown | 이동과 확대를 결합하는 시점 전환 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/zoom-to-bounding-box) | 라이선스: unknown | 선택 영역 경계 상자에 맞춘 확대 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/world-tour) | 라이선스: unknown | 지구 회전으로 국가를 차례로 정면에 배치 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/orthographic-to-equirectangular) | 라이선스: unknown | 구형 투영과 평면 투영 간 전환 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/collapsible-tree) | 라이선스: unknown | 하위 노드 펼침과 접힘 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/zoomable-sunburst) | 라이선스: unknown | 방사 계층의 하위 영역 확대 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/zoomable-circle-packing) | 라이선스: unknown | 중첩 원의 내부 계층 확대 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/zoomable-treemap) | 라이선스: unknown | 사각 분할 내부 계층 확대 | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/bar-chart-transitions/2) | 라이선스: unknown | 항목 ID를 유지하는 막대 값과 정렬 갱신. 오래된 sortable-bar-chart 대신 공식 후속 예제를 기록했다. | LICENSE 확인 불가, 참고만
- [Observable @d3](https://observablehq.com/@d3/connected-scatterplot) | 라이선스: unknown | 시간 순서대로 연결되는 산점도 경로 | LICENSE 확인 불가, 참고만
- [Observable](https://old.observablehq.com/blog/effective-animation) | 라이선스: unknown | 차트 전환, 그룹 비교, 공간 변화, 운동 부호화, 시간 변화의 5유형과 기사 링크 | LICENSE 확인 불가, 참고만
- [the-pudding/how-to-implement-scrollytelling](https://pudding.cool/process/how-to-implement-scrollytelling/) | 라이선스: unknown | 고정 그래픽과 문단별 상태 변화 | LICENSE 확인 불가, 참고만
- [the-pudding/responsive-scrollytelling](https://pudding.cool/process/responsive-scrollytelling/) | 라이선스: MIT | 상단 고정, 겹치는 설명, 모바일 레이아웃 | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/responsive-scrollytelling/master/LICENSE)
- [russellsamora/scrollama](https://github.com/russellsamora/scrollama) | 라이선스: MIT | 진입 임계점과 구간 진행률 기반 상태 전환 | [LICENSE 확인](https://raw.githubusercontent.com/russellsamora/scrollama/main/LICENSE)
- [reuters-graphics/svelte-scroller](https://github.com/reuters-graphics/svelte-scroller) | 라이선스: custom permissive (Rich Harris 2018) | 스크롤 index, offset, progress와 임계 영역 | [LICENSE 확인](https://raw.githubusercontent.com/reuters-graphics/svelte-scroller/master/LICENSE)
- [reuters-graphics/example_svelte-graph-patterns](https://reuters-graphics.github.io/example_svelte-graph-patterns/) | 라이선스: unknown | D3 차트, Svelte 전환, 스크롤과 GSAP 패턴 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-globetrotter](https://github.com/reuters-graphics/chart-module-globetrotter) | 라이선스: unknown | 지구 회전, 목적지 방향과 확대 옵션 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-spike-map](https://github.com/reuters-graphics/chart-module-spike-map) | 라이선스: unknown | 지도 위 수치 스파이크. 높이 보간은 도출한 변형 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-global-rate-map](https://github.com/reuters-graphics/chart-module-global-rate-map) | 라이선스: unknown | 국가별 색상 지표. 시점별 보간은 도출한 변형 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-india-covid-cartogram](https://github.com/reuters-graphics/chart-module-india-covid-cartogram) | 라이선스: unknown | 지도 배열 소형 시계열과 축 범위 변경 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-testing-dots](https://github.com/reuters-graphics/chart-module-testing-dots) | 라이선스: unknown | 검사 수와 양성 수의 단위 점 비교 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-countryRankingStrips](https://github.com/reuters-graphics/chart-module-countryRankingStrips) | 라이선스: unknown | 국가별 분포와 순위 스트립 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-stacked-area-chart](https://github.com/reuters-graphics/chart-module-stacked-area-chart) | 라이선스: unknown | 누적 면 시계열 | LICENSE 확인 불가, 참고만
- [reuters-graphics/chart-module-polling-lines](https://github.com/reuters-graphics/chart-module-polling-lines) | 라이선스: unknown | 여론조사 시계열과 구간 표시 | LICENSE 확인 불가, 참고만
- [reuters-graphics/awesome-charts](https://github.com/reuters-graphics/awesome-charts) | 라이선스: unknown | 공개 차트 모듈을 추가로 찾는 목록 | LICENSE 확인 불가, 참고만
- [the-pudding/pop-love-songs](https://github.com/the-pudding/pop-love-songs) | 라이선스: MIT | 단위 노래, beeswarm, 누적 면과 순위 레이어의 스토리 | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/pop-love-songs/main/LICENSE)
- [the-pudding/sankey-nba](https://github.com/the-pudding/sankey-nba) | 라이선스: MIT | Sankey와 tree 구조의 관계. 파일 목록으로 확인 | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/sankey-nba/master/LICENSE)
- [the-pudding/3d-cities-story](https://github.com/the-pudding/3d-cities-story) | 라이선스: MIT | 도시 밀도 높이와 시점. 개별 움직임은 확인한 구조에서 도출 | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/3d-cities-story/master/LICENSE)
- [the-pudding/queues](https://github.com/the-pudding/queues) | 라이선스: MIT | 대기열 Scene 구성. 동작 키워드를 직접 검사한다 | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/queues/main/LICENSE)
- [The New York Times](https://www.nytimes.com/interactive/2018/03/19/upshot/race-class-white-and-black-men.html) | 라이선스: unknown | 소득 계층 간 단위 입자 이동. 본문 차단, Observable 공식 설명으로 간접 확인 | LICENSE 확인 불가, 참고만
- [The New York Times](https://www.nytimes.com/interactive/2022/02/02/upshot/tom-brady-career-stats.html) | 라이선스: unknown | 연령과 연도 기준 전환. 본문 차단, Observable 공식 설명으로 간접 확인 | LICENSE 확인 불가, 참고만
- [Reuters Graphics](https://www.reuters.com/graphics/HEALTH-BIRDFLU/MIGRATION/movaqmblrva/) | 라이선스: unknown | 계절별 지역 조류 수 변화. 본문 차단, Observable 공식 설명으로 간접 확인 | LICENSE 확인 불가, 참고만
- [Bloomberg Graphics](https://www.bloomberg.com/graphics/2015-whats-warming-the-world/) | 라이선스: unknown | 원인별 기후 선 비교 후보. 원문 차단으로 특정 움직임은 단정하지 않는다 | LICENSE 확인 불가, 참고만
- [mapbox/mapbox-gl-js](https://docs.mapbox.com/mapbox-gl-js/example/animate-point-along-route/) | 라이선스: Mapbox TOS proprietary; 포함된 v1.13 이하는 BSD-3-Clause | 경로 위 이동 표식과 방향 회전 | [LICENSE 확인](https://raw.githubusercontent.com/mapbox/mapbox-gl-js/main/LICENSE.txt)
- [visgl/deck.gl](https://deck.gl/docs/api-reference/geo-layers/trips-layer) | 라이선스: MIT | 시간표 기반 경로 꼬리와 시점 재생 | [LICENSE 확인](https://raw.githubusercontent.com/visgl/deck.gl/master/LICENSE)
- [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | 라이선스: BSD-3-Clause | 지도 확대, 회전, 비행과 지형 표현. 포함된 제삼자 라이선스와 본체 BSD-3-Clause를 구분 | [LICENSE 확인](https://raw.githubusercontent.com/maplibre/maplibre-gl-js/main/LICENSE.txt)
- [sjwilliams/scrollstory](https://github.com/sjwilliams/scrollstory) | 라이선스: MIT | NYT 공개 기사 사례를 연결하는 스크롤 상태 도구 | [LICENSE 확인](https://raw.githubusercontent.com/sjwilliams/scrollstory/master/LICENSE)
- [Yang et al. Tilt Map](https://arxiv.org/abs/2006.14120) | 라이선스: unknown | 코로플레스, 높이 지도와 막대 차트의 연결 전환 연구 | LICENSE 확인 불가, 참고만

## 추가로 훑은 저장소

아래는 README, 파일 목록과 라이선스의 조사 범위를 기록한 목록이다. 모든 저장소에 새로운 모션이 있는 것은 아니며 정적 차트, 데이터와 도구만 확인한 출처는 기법 수를 늘리지 않았다.

- [NilsRodrigues/animated-scatterplot-transitions-for-comparative-study](https://github.com/NilsRodrigues/animated-scatterplot-transitions-for-comparative-study) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/NilsRodrigues/animated-scatterplot-transitions-for-comparative-study/main/LICENSE)
- [ai2html/ai2html](https://github.com/ai2html/ai2html) | 라이선스: unknown | 후보 URL을 확인했으나 404였다. 구현 근거로 사용하지 않았다. | 참고만
- [d3/d3-geo](https://github.com/d3/d3-geo) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/d3/d3-geo/main/LICENSE)
- [gapminder/gapminder-tools](https://github.com/gapminder/gapminder-tools) | 라이선스: unknown | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | 참고만
- [nytimes/ai2html](https://github.com/nytimes/ai2html) | 라이선스: unknown | 후보 URL을 확인했으나 404였다. 구현 근거로 사용하지 않았다. | 참고만
- [nytimes/scrollstory](https://github.com/nytimes/scrollstory) | 라이선스: unknown | 저장소 URL이 404여서 내용은 확인하지 못했다. | 참고만
- [observablehq/plot](https://github.com/observablehq/plot) | 라이선스: ISC | Plot의 라이선스를 확인했다. D3 전환 사례의 라이선스로 대신 쓰지 않았다. | [LICENSE 확인](https://raw.githubusercontent.com/observablehq/plot/main/LICENSE)
- [reuters-graphics/graphics-components](https://github.com/reuters-graphics/graphics-components) | 라이선스: unknown | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | 참고만
- [reuters-graphics/graphics-svelte-components](https://github.com/reuters-graphics/graphics-svelte-components) | 라이선스: unknown | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | 참고만
- [the-pudding/ai](https://github.com/the-pudding/ai) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/ai/main/LICENSE)
- [the-pudding/census-history](https://github.com/the-pudding/census-history) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/census-history/master/LICENSE)
- [the-pudding/cities_interactive](https://github.com/the-pudding/cities_interactive) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/cities_interactive/master/LICENSE)
- [the-pudding/climate-zones](https://github.com/the-pudding/climate-zones) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/climate-zones/main/LICENSE)
- [the-pudding/heat-records-map](https://github.com/the-pudding/heat-records-map) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/heat-records-map/main/LICENSE)
- [the-pudding/income](https://github.com/the-pudding/income) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/income/master/LICENSE)
- [the-pudding/maps-lapse](https://github.com/the-pudding/maps-lapse) | 라이선스: unknown | README의 지도 스프라이트 자료만 확인했다. 모션 기법을 추가하지 않았다. | 참고만
- [the-pudding/people-map](https://github.com/the-pudding/people-map) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/people-map/master/LICENSE)
- [the-pudding/svelte-starter](https://github.com/the-pudding/svelte-starter) | 라이선스: MIT | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/the-pudding/svelte-starter/main/LICENSE)
- [uwdata/animated-vega-lite](https://github.com/uwdata/animated-vega-lite) | 라이선스: unknown | 저장소 URL이 404여서 내용은 확인하지 못했다. | 참고만
- [vega/vega-lite](https://github.com/vega/vega-lite) | 라이선스: BSD-3-Clause | README와 파일 목록을 훑어 관련 차트, 지도 또는 스토리 구조를 확인했다. | [LICENSE 확인](https://raw.githubusercontent.com/vega/vega-lite/main/LICENSE)
- [vizabi/vizabi](https://github.com/vizabi/vizabi) | 라이선스: BSD-3-Clause | 구형 Vizabi의 BSD-3-Clause를 확인했다. 새 bubblechart 저장소와 별도로 취급했다. | [LICENSE 확인](https://raw.githubusercontent.com/vizabi/vizabi/develop/LICENSE)

## 조직 목록과 구체적인 파일 확인

- [조직 저장소 목록](https://github.com/orgs/the-pudding/repositories?page=1&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/the-pudding/repositories?page=2&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/the-pudding/repositories?page=3&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/the-pudding/repositories?page=4&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/the-pudding/repositories?page=5&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/the-pudding/repositories?page=6&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/reuters-graphics/repositories?page=1&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/reuters-graphics/repositories?page=2&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 30개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/reuters-graphics/repositories?page=3&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 20개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/reuters-graphics/repositories?page=4&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 0개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/reuters-graphics/repositories?page=5&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 0개를 확인했다.
- [조직 저장소 목록](https://github.com/orgs/reuters-graphics/repositories?page=6&type=all) | 라이선스: 목록 자체 unknown | HTTP 200, 저장소 0개를 확인했다.
- [파일·패턴 확인](https://reuters-graphics.github.io/example_svelte-graph-patterns/) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 내용은 복사하지 않고 모션 관련 키워드와 구조만 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/pop-love-songs/tree/main/src) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/pop-love-songs/tree/main/src/components) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/queues/tree/main/src/components) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/sankey-nba/tree/master/src/js/pudding-chart) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/3d-cities-story/tree/master/src/js/pudding-chart) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/pop-love-songs/tree/main/src/components/viz) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://github.com/the-pudding/pop-love-songs/tree/main/src/components/story-steps) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 파일 경로와 구성 이름을 확인했다.
- [파일·패턴 확인](https://raw.githubusercontent.com/the-pudding/queues/main/src/components/Scene.svelte) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 내용은 복사하지 않고 모션 관련 키워드와 구조만 확인했다.
- [파일·패턴 확인](https://raw.githubusercontent.com/the-pudding/3d-cities-story/master/src/js/graphic.js) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 내용은 복사하지 않고 모션 관련 키워드와 구조만 확인했다.
- [파일·패턴 확인](https://raw.githubusercontent.com/NilsRodrigues/d3-scattertrans/main/README.md) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 내용은 복사하지 않고 모션 관련 키워드와 구조만 확인했다.
- [파일·패턴 확인](https://raw.githubusercontent.com/NilsRodrigues/d3-scattertrans/master/README.md) | 라이선스: 해당 저장소 값 참조 | HTTP 200. 내용은 복사하지 않고 모션 관련 키워드와 구조만 확인했다.

## 접근 실패와 제한

접근 실패한 자료는 직접 확인한 것으로 쓰지 않았다. 공식 검색 결과 또는 공식 설명으로 간접 확인한 경우 아래에 구분한다.

- [https://observablehq.com/@d3/gallery](https://observablehq.com/@d3/gallery) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/bar-chart-race](https://observablehq.com/@d3/bar-chart-race) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/stacked-to-grouped-bars](https://observablehq.com/@d3/stacked-to-grouped-bars) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/streamgraph-transitions](https://observablehq.com/@d3/streamgraph-transitions) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/scatterplot-tour](https://observablehq.com/@d3/scatterplot-tour) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/the-wealth-health-of-nations](https://observablehq.com/@d3/the-wealth-health-of-nations) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/animated-treemap](https://observablehq.com/@d3/animated-treemap) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/temporal-force-directed-graph](https://observablehq.com/@d3/temporal-force-directed-graph) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/smooth-zooming](https://observablehq.com/@d3/smooth-zooming) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/zoom-to-bounding-box](https://observablehq.com/@d3/zoom-to-bounding-box) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/world-tour](https://observablehq.com/@d3/world-tour) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/orthographic-to-equirectangular](https://observablehq.com/@d3/orthographic-to-equirectangular) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/collapsible-tree](https://observablehq.com/@d3/collapsible-tree) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/zoomable-sunburst](https://observablehq.com/@d3/zoomable-sunburst) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/zoomable-circle-packing](https://observablehq.com/@d3/zoomable-circle-packing) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/zoomable-treemap](https://observablehq.com/@d3/zoomable-treemap) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/sortable-bar-chart](https://observablehq.com/@d3/sortable-bar-chart) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://observablehq.com/@d3/connected-scatterplot](https://observablehq.com/@d3/connected-scatterplot) | HTTP 429 보안 확인 화면. 일부 URL은 웹 도구로 제목을 확인했으나 전체 노트북은 확인하지 못했다.
- [https://echarts.apache.org/handbook/en/basics/animation/](https://echarts.apache.org/handbook/en/basics/animation/) | HTTP 404 후보 경로 없음. 성공한 공식 경로로 대체하거나 제외했다.
- [https://vis.stanford.edu/papers/animated-transitions](https://vis.stanford.edu/papers/animated-transitions) | HTTP error 시간 초과. Heer & Robertson 논문은 Columbia PDF로 대체했다.
- [https://www.bloomberg.com/graphics/2015-whats-warming-the-world/](https://www.bloomberg.com/graphics/2015-whats-warming-the-world/) | HTTP 403 접근 차단.
- [https://raw.githubusercontent.com/nytimes/ai2html/gh-pages/LICENSE.txt](https://raw.githubusercontent.com/nytimes/ai2html/gh-pages/LICENSE.txt) | HTTP 404 후보 경로 없음. 성공한 공식 경로로 대체하거나 제외했다.
- [https://raw.githubusercontent.com/nytimes/ai2html/master/LICENSE.txt](https://raw.githubusercontent.com/nytimes/ai2html/master/LICENSE.txt) | HTTP 404 후보 경로 없음. 성공한 공식 경로로 대체하거나 제외했다.
- [https://raw.githubusercontent.com/nytimes/scrollstory/master/license.txt](https://raw.githubusercontent.com/nytimes/scrollstory/master/license.txt) | HTTP 404 후보 경로 없음. 성공한 공식 경로로 대체하거나 제외했다.
- [https://echarts.apache.org/handbook/en/how-to/animation/bar-race/](https://echarts.apache.org/handbook/en/how-to/animation/bar-race/) | HTTP 404 후보 경로 없음. 성공한 공식 경로로 대체하거나 제외했다.
- [https://echarts.apache.org/handbook/en/how-to/animation/universal-transition/](https://echarts.apache.org/handbook/en/how-to/animation/universal-transition/) | HTTP 404 후보 경로 없음. 성공한 공식 경로로 대체하거나 제외했다.
- [https://helpcenter.flourish.studio/hc/en-us/articles/8761548263823-Number-ticker-an-overview](https://helpcenter.flourish.studio/hc/en-us/articles/8761548263823-Number-ticker-an-overview) | HTTP 403 직접 요청은 차단되었지만 공식 문서 검색 결과의 설명을 확인했다.
- [https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview](https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview) | HTTP 403 직접 요청은 차단되었지만 공식 문서 검색 결과의 설명을 확인했다.
- [https://helpcenter.flourish.studio/hc/en-us/articles/9196682333199-Sports-template-player-animations](https://helpcenter.flourish.studio/hc/en-us/articles/9196682333199-Sports-template-player-animations) | HTTP 403 직접 요청은 차단되었지만 공식 문서 검색 결과의 설명을 확인했다.
- [NYT 소득 이동 기사](https://www.nytimes.com/interactive/2018/03/19/upshot/race-class-white-and-black-men.html) | 원문 접근 불가. Observable 공식 설명에서 단위 입자 흐름을 간접 확인했다.
- [NYT Tom Brady 기사](https://www.nytimes.com/interactive/2022/02/02/upshot/tom-brady-career-stats.html) | 원문 접근 불가. Observable 공식 설명에서 연령과 연도 기준 전환을 간접 확인했다.
- [Reuters 조류 이동 기사](https://www.reuters.com/graphics/HEALTH-BIRDFLU/MIGRATION/movaqmblrva/) | 원문 접근 불가. Observable 공식 설명에서 계절별 지역 수 변화만 간접 확인했다.
- [GitHub 조직 API](https://api.github.com/orgs/reuters-graphics/repos) | the-pudding, reuters-graphics, bloomberg, nytimes 목록 요청 모두 HTTP 403 호출 한도. GitHub 웹 목록으로 Pudding과 Reuters 조사를 이어갔다.
- [GitHub 조직 탭](https://github.com/reuters-graphics?tab=repositories) | 웹 도구는 URL 제한으로 실패했다. 직접 읽기는 HTTP 200으로 성공했다.

## 해석의 범위

Flourish의 템플릿·마케팅 설명은 기법의 공개 사례이며 소스 코드 라이선스는 unknown이다. Reuters의 여러 차트 모듈은 공개 README와 구조를 확인했으나 LICENSE를 찾지 못해 unknown으로 두었다. 정적 차트에 일반 보간을 적용해 만든 모션은 각 항목 notes에 도출한 변형이라고 적었다.

Vega의 timer 기반 프레임 갱신, Animated Vega-Lite의 연구 확장, Gemini의 차트 간 전환을 구분했다. 표준 Vega-Lite에 모든 차트 모프가 내장되어 있다고 해석하지 않았다.

Bloomberg의 기후 기사 원문은 차단되었다. 출처 후보로 남기되 해당 기사에서 특정 모션을 직접 확인했다고 주장하지 않았다. The Pudding의 코드 라이선스와 로고·폰트 권리는 별개다. 자료와 시각 자산은 재사용하지 않는다.

## Observable 대체 확인 경로

노트북 HTML의 429 차단 뒤 document API로 원본의 설명 문단과 구성 요소를 확인했다. 구현 코드는 원장에 복사하지 않았다. API가 성공한 노트북은 원본 내용을 확인한 출처로 취급한다. 개별 노트북의 LICENSE 파일은 확인하지 못해 unknown을 유지한다.

- [노트북 설명 확인](https://api.observablehq.com/document/@d3/bar-chart-race) | HTTP 200 | Bar Chart Race | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/stacked-to-grouped-bars) | HTTP 200 | Stacked-to-grouped bars | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/streamgraph-transitions) | HTTP 200 | Streamgraph transitions | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/scatterplot-tour) | HTTP 200 | Scatterplot tour | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/the-wealth-health-of-nations) | HTTP 404 | the-wealth-health-of-nations | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/animated-treemap) | HTTP 200 | Animated treemap | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/temporal-force-directed-graph) | HTTP 200 | Temporal force-directed graph | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/smooth-zooming) | HTTP 200 | Smooth zooming | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/zoom-to-bounding-box) | HTTP 200 | Zoom to bounding box | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/world-tour) | HTTP 200 | World tour | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/orthographic-to-equirectangular) | HTTP 200 | Orthographic to equirectangular | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/collapsible-tree) | HTTP 200 | Collapsible tree | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/zoomable-sunburst) | HTTP 200 | Zoomable sunburst | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/zoomable-circle-packing) | HTTP 200 | Zoomable circle packing | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/zoomable-treemap) | HTTP 200 | Zoomable treemap | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/sortable-bar-chart) | HTTP 200 | Bar Chart Transitions | 라이선스: unknown, 참고만
- [노트북 설명 확인](https://api.observablehq.com/document/@d3/connected-scatterplot) | HTTP 200 | Scatterplot, Connected | 라이선스: unknown, 참고만

잘못된 @d3/the-wealth-health-of-nations는 404였다. 공식 글의 링크를 따라 @mbostock/the-wealth-health-of-nations로 바로잡았다. scatterplot-tour는 변수 전환이 아니라 군집 확대 투어임을 원문으로 확인해 기법과 출처를 수정했다. sortable-bar-chart는 폐기 안내가 있어 bar-chart-transitions/2로 대체했다.

## 최종 주소 재확인

- [Rosling 노트북 문서](https://api.observablehq.com/document/@mbostock/the-wealth-health-of-nations) | HTTP 200, 제목 The Wealth & Health of Nations 확인. 개별 LICENSE 미확인.
- [막대 전환 후속 예제](https://api.observablehq.com/document/@d3/bar-chart-transitions/2) | HTTP 200, ID로 값과 정렬을 대응하는 원문 설명 확인. 개별 LICENSE 미확인.
- [Flourish Scatter 템플릿](https://app.flourish.studio/@flourish/scatter) | HTTP 200, 공식 Scatter 템플릿 확인. 숫자 경로 /1512는 404였으며 정식 템플릿 주소로 수정했다.
- [Flourish Scatter 안내](https://flourish.studio/visualisations/scatter-charts/) | HTTP 200, Scatter 유형 안내 확인. /visualisations/scatter-plots/ 후보는 404로 제외했다.
