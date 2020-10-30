---
layout: post
title: "(VueJs) AdminLTE 적용하기"
date: 2018-02-20 20:35:00
author: gloria
categories: frontend
tags: javascript frontend vuejs bootstrap adminlte
---

* TOC
{:toc}

Vue.js 프로젝트에 adminLTE 템플릿 적용하기

## 플러그인 설치
의존 라이브러리를 설치한다.
```sh
# adminlte에서 사용하는 라이브러리 설치
npm install --save jquery bootstrap
# jquery 사용을 위해 아래의 라이브러리를 설치
npm i --save-dev expose-loader  
# adminlte 설치
npm install --save admin-lte
```

## 라이브러리 import
```javascript
//main.js
/*
 plugin
 */
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'admin-lte'

/*
  styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.min.css'
```

## 빌드 설정
font 파일 빌드를 위해 `url-loader`를 설치하고 빌드 파일에 추가로 설정해준다.
(*webpack-simple을 이용한 프로젝트 생성을 한 경우에 해당 빌드 설정이 필요했었음*)

#### 라이브러리 설치
```sh
npm install --save-dev url-loader
```

#### 빌드 설정
```javascript
//webpack.config.js
{
  test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
  loader: 'url-loader?importLoaders=1&limit=100000'
}
```

## Reference
- [vue.js에서 jQuery, Bootstrap 추가하여 사용하기](http://vuejs.kr/jekyll/update/2017/03/02/vuejs-jquery-bootstrap/)
- [vue.js에서 jQuery, Bootstrap 추가하여 사용하기-webpack이용](https://lovemewithoutall.github.io/it/install-bootstrap-for-vue/)
