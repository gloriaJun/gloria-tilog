---
layout: post
title: "(VueJs) vue-router"
date: 2018-03-01 14:35:00
author: gloria
categories: frontend
tags: javascript frontend vuejs
---

* TOC
{:toc}

호출되는 router에 따라 동적으로 title이나 메시지가 변경되도록 하는 방법

#### header tag 내부의 title 변경하기
```javascript
const routes = [
  {
    path: '/user',
    component: USER,
    meta: {title: 'User Page'}
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
```

#### header tag 내부의 favicon 변경하기
```javascript
const routes = [
  {
    path: '/user',
    component: USER,
    meta: {
      title: 'User Page',
      favicon: '/static/favicon.ico'
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.querySelector('link[rel="shortcut icon"]').setAttribute('href', meta.favicon)
})
```

#### 파라미터 전달
```javascript
const routes = [
  {
    path: '/user',
    component: USER,
    meta: {title: 'User Page'},
    props: {msg: 'hello'}
  }
]
```

User 컴포넌트에서는 props로 전달을 받는다.
```javascript
export default {
  name: 'User',
  props: {
    msg: {
      type: String
    }
  }
}
```

만약, User의 상위 객체에 해당 값을 전달하고자 하면 다음과 같이 전달하면 된다.
###### 방법 1)
```javascript
// User.vue
export default {
  name: 'User',
  props: {
    msg: {
      type: String
    }
  },
  created () {
    this.$parent.$data.msg = this.msg
  }
}
```

###### 방법 2)
(*router의 meta를 이용하는 방법이 더 간단하고 깔끔한 것 같다*)
즉, router에서 meta에 해당 객체를 담아서 전달
```javascript
// App.vue
export default {
  name: 'App',
  data () {
    return {
      bannerData: {}
    }
  },
  components: {
    AppBanner,
    AppFooter
  },
  created () {
    this.bannerData = this.$route.meta.banner
  }
}
```
