---
layout: post
title: "(VueJs) Code Style"
date: 2018-03-02 11:35:00
author: gloria
categories: frontend
tags: javascript frontend vuejs eslint
---

* TOC
{:toc}

VueJS로 프로젝트를 진행하면서 다큐먼트에서 제공하는 [스타일 가이드](https://kr.vuejs.org/v2/style-guide/)에 맞춰서 작성을 하기로 하면서 정리한 내용들

## 컴포넌트 구조
[poblohpsilva](https://github.com/pablohpsilva)가 작성한
[vuejs-component-style-guide](https://github.com/pablohpsilva/vuejs-component-style-guide)에 제시한 구조를 따름
```javascript
<template lang="html">
  <div class="Ranger__Wrapper">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    // Do not forget this little guy
    name: 'RangeSlider',
    // share common functionality with component mixins
    mixins: [],
    // compose new components
    extends: {},
    // component properties/variables
    props: {
      bar: {}, // Alphabetized
      foo: {},
      fooBar: {},
    },
    // variables
    data() {},
    computed: {},
    // when component uses other components
    components: {},
    // methods
    watch: {},
    methods: {},
    // component Lifecycle hooks
    beforeCreate() {},
    mounted() {},
};
</script>

<style scoped>
  .Ranger__Wrapper { /* ... */ }
</style>
```

## eslint-plugin-vue 적용
Vue팀에서 제안하는 스타일가이드가 적용된 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)를 적용하였음

#### 플러그인 적용
```bash
npm install --save-dev eslint eslint-loader babel-eslint
npm install --save-dev eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-friendly-formatter
npm install --save-dev eslint-plugin-vue
```

#### EsLint config 설정
설치 후에 아래와 같이 `.eslintrc.js` 파일을 수정한다.
```javascript
//.eslintrc.js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
```

`main.js`에서 Vue 선언 부분에 아래와 같이 주석을 추가해주어야 lint error를 방지할 수 있다.
```javascript
// main.js
//
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App)
})
```

만약, `/* eslint-disable no-new */` 주석 구문이 없으면 아래와 같은 에러가 발생한다.
```
[프로젝트 경로]/src/main.js
  16:1  error  Do not use 'new' for side effects  no-new

✖ 1 problem (1 error, 0 warnings)
```

#### EsLint ignore 파일 작성
```
// .eslintignore
/build/
/config/
/dist/
/*.js
```

#### package.json 실행 스크립트 정의
```json
"scripts": {
    "lint": "eslint --ext .js,.vue src",
},
```

#### 빌드 시에 eslint가 수행되도록 설정
`webpack.config.js` 또는 `/build/webpack.base.conf.js` 파일에 아래와 같이 추가한다.
```javascript
// webpack.config.js
module.exports = {
//(...중략...)
  module: {
    rules: [
//(...중략...)
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
//(...중략...)      
    ]
//(...중략...)    
  }
//(...중략...)
}
```


## Reference
- [vuejs-component-style-guide](https://github.com/pablohpsilva/vuejs-component-style-guide)
- [Vue.js 컴포넌트 스타일 가이드](http://vuejs.kr/jekyll/update/2017/03/13/vuejs-component-style-guide/) (`vuejs-component-style-guide`의 번역글)
- [Vue.js 공식 ESLint 플러그인 적용하기](http://vuejs.kr/vue/eslint/2017/12/03/eslint-plugin-vue/)
