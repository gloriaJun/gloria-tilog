---
category: 'Javascript'
tags: ['vuejs', 'frontend', 'nuxt', 'vuex']
title: '(VueJS) 개발 환경 구성'
date: '2018-03-19 22:35:00'
---

- TOC
  {:toc}

Nuxt.js를 이용하여 기존에 SPA로 구현한 코드를 SSR로 리팩토링을 하고 있다.
static page로 generate 해주는 기능도 있어 공부삼아 리팩토링 중~~

# 구현 환경

Vue.js 2
Nuxt v2.3.4

# Project 생성

## Starter Template

[Starter Template](https://github.com/nuxt-community/awesome-nuxt#starter-template)을 사용해서 프로젝트를 생성할 수 있다.
또는 [Nuxt 가이드](https://ko.nuxtjs.org/guide/installation)에서 제공하는 starter 템플릿을 이용하여 간단하게 생성해도 된다.

```bash
vue init nuxt-community/starter-template <project-name>
```

## 직접 구성하기

프로젝트를 생성하고자 하는 폴더를 생성한 뒤에 nuxt를 설치하여 직접 구성할 수 있다.

```bash
cd <project-folder>
yarn init # or npm init
yarn add nuxt
```

nuxt를 설치한 뒤에 `package.json`에 script 부분을 아래와 같이 추가해준다.

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start"
},
```

간단한 환경 구성에 테스트를 위해 `pages/index.vue`를 생성한다.

```html
<template>
  <h1>Hello world!</h1>
</template>
```

http://localhost:3000/ 에 접속하면 어플리케이션이 실행되는 것을 확인할 수 있다.

# nuxt.config.js - Nuxt 환경 구성

기본 설정으로 사용이 가능하지만, `nuxt.config.js`을 생성하여 개발 환경에 맞추어 커스터마이징을 할 수 있다.

## head 관련 설정

`index.html` 파일이 별도로 정의되어 있지 않은데, 해당 파일의 `<head></head>` 태그에 정의하는 부분을 설정한다.
https://ko.nuxtjs.org/api/configuration-head

```javascript

```

## build 관련 설정

https://ko.nuxtjs.org/api/configuration-build

### vendor

외부 라이브러리 모듈/파일을 추가한다.

```javascript
module.export = {
  build: {
    vendor: ['axios'],
    analyze: true,
  },
};
```

### analyze

webpack-bundle-analyzer를 사용하여 번들을 시각화, 최적화 할 수 있도록 알려주는 부분에 대한 설정이다.

```json
// package.json
"scripts": {
  "analyze": "nuxt build --analyze"
},
```

```javascript
module.export = {
  build: {
    analyze: true,
  },
};
```

# ESLint 설정

eslint를 사용하기 위해 관련 의존 라이브러리를 설치한다.

```bash
yarn add --dev babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-vue eslint-plugin-prettier prettier
```

`package.json`에 lint를 수행하기 위한 스크립트를 정의한다.

```json
"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  "lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
},
```

`.eslintrc.js`를 정의한다.

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    semi: [2, 'always'],
    'vue/max-attributes-per-line': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['nuxt', 'nuxt-link'],
      },
    ],
  },
};
```

빌드 시에 lint 동작을 추가 하기 위해서는 `nuxt.config.js`에 아래의 내용을 추가한다.

```javascript
/**
  * Build configuration
  */
build: {
  /*
    You can extend webpack config here
    */
  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      });
    }
  },
},
```

# 플러그인 설치

플러그인 정의를 위한 Nuxt의 가이드 내용은 [플러그인](https://ko.nuxtjs.org/guide/plugins)을 참고한다.

## bootstrap-vue

[bootstrap-vue](https://bootstrap-vue.js.org/docs) 패키지를 설치한다.

```bash
npm i bootstrap-vue --save
npm i node-sass sass-loader --save-dev
```

플러그인을 import 하기 위한 `plugins/bootstrap-vue.js` 파일을 생성한다.

```javascript
// plugins/bootstrap-vue.js
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
```

사용자 style 커스텀을 위한 `assets/style/app.scss`를 생성한다.

```scss
@import '~bootstrap/scss/bootstrap.scss';
```

`nuxt.config.js`에 플러그인와 css 파일에 대한 정의를 추가한다.

```javascript
// nuxt.config.js
plugins: [
    '~/plugins/bootstrap-vue.js'
],
css: [
  {src: '~/assets/style/app.scss', lang: 'scss'},
  {src: 'bootstrap-vue/dist/bootstrap-vue.css', lang: 'css'}
]
```

# 테스트

Jest를 이용한 단위 테스트 환경 구성

```bash
yarn add --dev jest @vue/test-utils vue-jest babel-jest jest-serializer-vue babel-preset-env
```

## package.json

```json
"scripts": {
  "test:unit": "jest --coverage"
},
```

## .babelrc

```json
{
  "presets": ["env"]
}
```

## jest.config.js

```javascript
module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue',
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    // process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  // serializer for snapshots
  snapshotSerializers: ['jest-serializer-vue'],
};
```

테스트를 위해 아래와 같이 테스트 코드를 작성 후에 테스트 실행을 해본다.

```javascript
import { mount } from '@vue/test-utils';
import Layout from '@/layouts/default.vue';

describe('Counter.vue', () => {
  test('Setup correctly', () => {
    expect(true).toBe(true);
  });

  test('snapshot', () => {
    const wrapper = mount(Layout);
    expect(wrapper.element).toMatchSnapshot();
  });
});
```

# GitHub Pages에 배포하기

자세한 내용은 [How to deploy on GitHub Pages?](https://nuxtjs.org/faq/github-pages#deploying-to-github-pages-for-repository) 문서를 참고한다.

내가 적용한 과정은...

1. `push-dir`을 설치한다.

```bash
yarn install --dev push-dir
```

2. `package.json`을 수정한다.

```json
// package.json
  "scripts": {
    (..SKIP...)
    "generate": "nuxt generate",
    "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup",
    (..SKIP...)
  }
```

위와 같이 설정한 뒤에 deploy를 수행해보면 github의 해당 레파지토리에 gh-pages 브랜치가 생성되고, `http://<username>.github.io/<repository-name>`에서 결과물을 확인할 수 있다.

## travis.yml 설정

해당 빌드하여 gh-pages에 적용하는 부분을 travisCI와 연동을 하기 위해서는 `.travis.yml`을 작성하여 반영한다.

```yml
language: node_js

node_js:
  - 10

cache:
  directories:
    - 'node_modules'

branches:
  only:
    - master

install:
  - npm install
  - npm run generate

deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_TOKEN # Set in travis-ci.org dashboard, marked secure https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target-branch: gh-pages
  local-dir: dist
  on:
    branch: master

notifications:
  email: false
  slack:
    rooms:
      - glriaroom:GJpK4bqmhqF9CtV1l4qVSp6Q#devops
    on_success: change # default : always
    on_failure: always # default : always
```

# 내가 느끼는 장단점

보름 정도 사용해보고 느낀 내 생각은...경험이 부족해서 느낄 수도 있지만..

## 장점

- webpack의 자질구레한 설정들이 간편해졌다
- 빠르게 개발을 위한 환경을 구성할 수 있다.

## 단점

- webpack관련 설정들(예를 들어 proxy..)을 커스터마이징하려고 할 때 관련된 정보를 얻기가 쉽지 않다.
- 빌드 및 배포 설정 관련하여 개발 중 문제가 발생했을 때 구글링해서 관련 정보를 찾기 어려운 경우가 많다.

## Reference

- [Awesome Nuxt.js ](https://github.com/nuxt-community/awesome-nuxt#starter-template)
