---
category: 'Javascript'
tags: ['vuejs', 'frontend', 'storybook']
title: '(VueJS) Storybook with vue'
date: '2018-03-06 14:35:00'
---

- TOC
  {:toc}

[Storybook](https://storybook.js.org/)은 컴포넌트 단위의 개발 환경을 지원하는 개발도구이다
독립적인 컴포넌트 개발이 가능하도록 지원해주어 각각의 컴포넌트 개발에 집중할 수 있다.
또한 [AddOn](https://storybook.js.org/addons/introduction/)을 활용하여 각각의 컴포넌트들에 대한 추가적인 정보를 제공할 수 있게도 해주어서 컴포넌트 다큐먼트로도 활용이 가능하지 않을까함

## Installation

생성한 프로젝트에 storybook을 설치한다

```bash
npm i --save-dev @storybook/vue
```

###### config 파일 생성

Story 파일 로딩을 위해 `storybook/config.js`파일에 아래와 같이 설정한다

```javascript
// config.js
import { configure } from '@storybook/vue';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
```

`stories` 디렉토리 하위에 `.sotries.js` 확장자가 포함된 모든 파일을 로딩하기 위해서 위와 같이 작성하였음 ([Loading stories dynamically](https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically) 참고)

###### stories 작성

```javascript
// index.js
import { storiesOf } from '@storybook/vue';

// component
import ProgressBar from '../src/components/status/ProgressBar.vue';

storiesOf('status', module) // 상위 카테고리 지정
  .add('progressBar', () => ({
    // 하위 내용 지정
    components: { ProgressBar },
    template: `<div style="padding: 2rem;">
      <progress-bar :value=20></progress-bar>
    </div>`,
  }));
```

###### storybook 실행

`package.json`에 storybook 실행을 위한 명령어를 script에 추가해준다

```json
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
```

이후에는 아래와 같이 storybook을 실행하면 된다

```bash
npm run storybook
```

## style 파일 로딩하기

`.css, .scss ...`과 같은 작성한 스타일 파일 로딩하는 방법

**preview-head.html**  
html 태그를 이용하여 import하는 방법이다.
`.stroybook/preview-head.html` 파일을 생성하고 아래와 같은 형태로 작성한다.

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>
<link
  href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
  rel="stylesheet"
/>
```

좀 더 자세한 내용은 [Add Custom Head Tags](https://storybook.js.org/configurations/add-custom-head-tags/)의 내용을 참고

## webpack 빌드 설정

`.storybook/webpack.config.js` 파일을 생성해서 아래와 같이 작성한다.

```javascript
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: resolve('src'),
      },
    ],
  },
};
```

좀 더 자세한 내용은 [Custom Webpack Config](https://storybook.js.org/configurations/custom-webpack-config/)의 내용을 참고

## Addon

#### addon-actions

[addon-actions](https://github.com/storybooks/storybook/tree/master/addons/actions)은 이벤트 핸들러에 의해 전달받은 데이타를 `ACTION LOGGER` 화면에 출력해준다
**Installation**

```bash
npm install --save-dev @storybook/addon-actions
```

**Usage**  
`.storybook/addons.js`에 아래와 같이 작성해준다

```javascript
import '@storybook/addon-actions/register';
```

stories 파일에 해당 addon을 import 한 뒤에 이벤트에 연결해준다

```javascript
// index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'

// component
import MyButton from '../src/components/button/MyButton.vue'

storiesOf('button', module) // 상위 카테고리 지정
  .addDecorator(VueInfoAddon)
  .add('MyButton', () => ({ // 하위 내용 지정
    components: { MyButton },
    template: '<my-button onClick={ action('button-click') }>Button</my-button>'
  }))
```

#### storybook-addon-console

[storybook-addon-console](https://github.com/storybooks/storybook-addon-console)은 디버그 콘솔에 출력되는 메시지를 `ACTION LOGGER` 창에 출력해준다.

> addon-actions 이 사전에 설치되어있어야 한다.
> **Installation**

```bash
npm install --save-dev @storybook/addon-console
```

**Usage**  
`.storybook/config.js`에 아래의 내용을 추가로 작성한다

```javascript
// addons
import { setConsoleOptions } from '@storybook/addon-console';

// for redirect console log
const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude],
});
```

#### storybook-addon-vue-info

[storybook-addon-vue-info](https://github.com/pocka/storybook-addon-vue-info/)은 컴포넌트의 정보를 추가로 화면에 출력해준다.

**Installation**

```bash
npm install --save-dev storybook-addon-vue-info
```

**Usage**  
stories 파일에 해당 addon을 import 해준다

```javascript
// index.js
import { storiesOf, addDecorator } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

// component
import ProgressBar from '../src/components/status/ProgressBar.vue';

addDecorator(VueInfoAddon);

storiesOf('status', module) // 상위 카테고리 지정
  .add('progressBar', () => ({
    // 하위 내용 지정
    components: { ProgressBar },
    template: '<progress-bar :value=20></progress-bar>',
  }));
```

#### viewport

[Storybook Viewport Addon](https://github.com/storybooks/storybook/tree/master/addons/viewport)

```bash
npm i --save-dev @storybook/addon-viewport
```

```javascript
// .storybook/config.js
import '@storybook/addon-viewport/register';
```

#### addon-centered

[Storybook Centered Decorator](https://www.npmjs.com/package/@storybook/addon-centered)
preview 화면을 가운데로 정렬한다.

```bash
npm install @storybook/addon-centered --save-dev
```

```javascript
// .storybook/config.js
import previewCentered from '@storybook/addon-centered';
addDecorator(previewCentered);
```

#### addon-storysource

[Storybook Storysource Addon](https://www.npmjs.com/package/@storybook/addon-storysource)는 해당 컴포넌트에 대하여 작성한 스토리 스크립트를 하단의 창에 출력해준다.

```bash
npm install @storybook/addon-storysource --save-dev
```

```javascript
// .storybook/webpack.config.js
const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../stories')],
    enforce: 'pre',
  });

  // Return the altered config
  return storybookBaseConfig;
};
```

## Reference

- [공식가이드 - Storybook for Vue](https://storybook.js.org/basics/guide-vue/)
- [GongZza's Blog - Storybook for Vue](https://gongzza.github.io/javascript/vuejs/storybook-for-vue/)
- [DailyEngineering - Storybook 입문 가이드](https://hyunseob.github.io/2018/01/08/storybook-beginners-guide/)
