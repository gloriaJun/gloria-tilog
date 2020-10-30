---
layout: post
title: "(VueJs) 참고 사이트 모음"
date: 2018-01-20 14:35:00
author: gloria
categories: frontend
tags: javascript frontend vuejs
---

* TOC
{:toc}


## Vue.js

MVVM 패턴의 ViewModel 레이어에 해당하는 자바스크립트 라이브러리 이다.

#### MVVM 패턴에 대입하여 Vue.js 살펴보기
###### View
사용자에게 보여지는 부분이다.
```html
<div id="app">
  <h2></h2>
</div>
```

###### ViewModel
View에서 선언한 구조에 대한 객체이자 뷰와 모델을 연결하고 보여줄 정보를 제어하는 부분이다.
```javascript
let simple = new Vue({
  el : #app,
  data : model
});
```

###### Model
모델에 대한 데이터를 담은 객체이다.
```javascript
let model = {
  message : "hello!"
}
```

#### LifeCycle

![Vuejs생명주기](https://kr.vuejs.org/images/lifecycle.png)
각 생명 주기의 단계에서 하는 일을 정리하면 아래와 같다.
- beforeCreate ~ created : 데이터 및 이벤트 초기화
- created ~ beforeMount : 뷰 생성
- mounted ~ updated : 데이터 바인딩, 데이터 변경 주시 및 뷰 업데이트
- destroyed : 자식 컴포넌트, 이벤트 리스너 해제


## Reference
#### 공식 문서
- [VueJS 공식문서](https://vuejs.org/v2/guide/)

#### 개념잡기
- [Tour of Vue.js](https://www.slideshare.net/sunhyouplee/tour-of-vuejs-70654520)
기본적인 내용들에 대해 쉽게 잘 정리되어있음
- [Vue.js 입문서 - 프론트엔드 개발자를 위한](https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/)
- http://vuejs.kr/snippets/

#### 컴포넌트 모음
- [awesome-vue](https://github.com/vuejs/awesome-vue#projects-using-vuejs)

#### 스타일 가이드
- [공식 스타일 가이드 - vuejs-component-style-guide](https://github.com/pablohpsilva/vuejs-component-style-guide)
- [GitLab - Style guides and linting](https://docs.gitlab.com/ce/development/fe_guide/style_guide_js.html)

#### UI Framework & Library
- https://vuetifyjs.com
- https://element.eleme.io
- https://quasar-framework.org


#### 예제모음
- [Vue.js Examples](https://vuejsexamples.com/)
- [Vue.js 한국 사용자 모임-코드조각](http://vuejs.kr/snippets/)
- [Vue.js — Forms, components and considerations](https://blog.webf.zone/vue-js-forms-components-and-considerations-d81b3ffe9efb)

###### Dynamic Components
- [Dynamic Component Templates with Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)
- [Swappable Dynamic Components in Vue.js](https://alligator.io/vuejs/dynamic-components/)


###### Template
- https://github.com/dobromir-hristov/vue-i18n-starter

###### Vue 적용 사례
- [배민찬은 Vue를 어떻게 사용하나요?](http://woowabros.github.io/experience/2018/06/07/vue-story-of-baminchan.html)
- [GitLab은 왜 Vue.js를 선택했나](https://taegon.kim/archives/6690)
- [GitLab은 Vue를 어떻게 사용하는가: 일 년 후](https://taegon.kim/archives/6698)
- [Zoom Tech - Vuejs로 모바일 웹 구축하기](https://zuminternet.github.io/ZUM-Pilot-vuejs/)
- [우아한형제들 - 기존 Express 서버에 Vue.js 적용해보기 (feat.EJS)](http://woowabros.github.io/experience/2018/12/27/node-express-vue-with-ejs.html)

###### Tip
- [숨겨진 Vue 패턴들](https://medium.com/@Dongmin_Jang/vuejs-%EC%88%A8%EA%B2%A8%EC%A7%84-vue-%ED%8C%A8%ED%84%B4%EB%93%A4-1ea3adc585ac)
- [VueJs best practices](https://blog.usejournal.com/vue-js-best-practices-c5da8d7af48d)