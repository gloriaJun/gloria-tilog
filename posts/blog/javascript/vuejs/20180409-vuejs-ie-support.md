---
category: 'Javascript'
tags: ['vuejs', 'frontend', 'polyfill']
title: '(VueJS) IE 호환성 적용하기'
date: '2018-04-04 14:35:00'
---

VueJS는 기본적으로 IE8 이하는 지원하지 않는다.
그 이후의 IE에 대해 정상적으로 동작하도록 적용하기 위해서는 polyfill을 적용해야한다.

#### 의존 라이브러리 설치

```bash
npm install --save babel-polyfill event-source-polyfill es6-promise
```

#### 적용

`main.js`의 최상단에 import 해준다

```javascript
import 'babel-polyfill';
import 'event-source-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
```

axios를 사용하는 경우에는 es6-promise를 적용해주어야 한다.
`webpack.base.conf.js`에 다음과 같이 추가해준다.

```javascript
'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
require('es6-promise').polyfill();
```
