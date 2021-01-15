---
category: 'Javascript'
tags: ['vuejs', 'frontend', 'chart']
title: '(VueJS) chart 출력하기'
date: '2018-12-19 14:35:00'
---

- TOC
  {:toc}

이번에 진행할 프로젝트에서 차트를 이용한 데이타 시각화가 필요해서 관련한 라이브러리를 조사하고 테스트해보게 되었다.
조사를 하면서 기록을 남기기 위한 글...

## chart 라이브러리 종류

[9 Best JavaScript Charting Libraries](https://hackernoon.com/9-best-javascript-charting-libraries-46e7f4dc34e6)에 게시된 글을 기반으로 차트 관련 라이브러리를 조사..

#### ECHARTS

[EChart](https://ecomfe.github.io/echarts-doc/public/en/index.html)

- 아파치 라이선스 (별도의 로고 표시 없이 무료로 사용이 가능한 것으로 보여짐)
- 중국에서 만든 라이브러리
- 가이드 문서가 잘 작성되어있음.
- 다양한 [예제](https://ecomfe.github.io/echarts-examples/public/index.html)가 제공됨
- 순수 자바스크립트로 개발되어있음

###### VueJs component

- https://github.com/ElemeFE/v-charts

  - ElementUI를 만든 곳에서 제작
  - [Document](https://v-charts.js.org/#/en/start)가 잘 작성되어 있다.
  - UI가 깔끔한 느낌
  - MIT 라이선스

- https://github.com/ecomfe/vue-echarts
  - UI가 v-charts에 비하여 큼직한 느낌이다.
  - 관련 예제가 v-charts에 비하여 부실

#### Chart.js

[Chart.js](https://www.chartjs.org/)

- MIT 라이선스
- 다양한 [예제](https://www.chartjs.org/samples/latest/)가 잘 제공됨
- 가이드 문서가 잘 작성되어있음
- 깔끔하고, 사용하기 쉽고, 사용자 친화적인 차트라고...
- 플러그인을 이용하여 기능을 확장할 수 있음 (https://www.chartjs.org/docs/latest/notes/extensions.html)

###### VueJs component

- https://github.com/apertureless/vue-chartjs/
  - MIT 라이선스

#### CHARTIST

[chartist-js](https://gionkunz.github.io/chartist-js/)

- 애니메이션이 특화된 차트 라이브러리

#### highcharts

[highcharts](https://github.com/highcharts/highcharts)

- 애니메이션이 특화된 차트 라이브러리
- 유료

![차트라이브러리 비교](https://cdn-images-1.medium.com/max/2000/1*g9yUCa-NqAjwvuJUIzwV5Q.png)

## 이번 프로젝트에서 채택한 라이브러리는....

EChart를 직접 설정하여 사용해보기로..
해당 라이브러리를 사용하게 된 계기는 일단, Vue.js 컴포넌트로 제공이 되었으며, 해당 문서가 나름 잘 작성되어있고, 차트의 디자인도 무난하였다.
그리고 무엇보다 차트 예제가 잘 작성되어있고, JSFiddle이나 Codepen에도 있어서 작성된 예제를 기반으로 실시간으로 코드를 수정하면서 테스트해볼 수가 있어서, 다른 라이브러리들보다 큰 어려움 없이 실무에 적용이 가능할 것으로 생각이 되었기 때문이다.

## Reference

- [24 JavaScript Libraries for Creating Beautiful Charts](https://www.sitepoint.com/15-best-javascript-charting-libraries/)
