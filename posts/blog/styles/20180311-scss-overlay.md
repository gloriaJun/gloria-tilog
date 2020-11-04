---
category: 'Styles'
tags: ['css', 'scss']
title: "(SCSS) 마우스 오버 시에 이미지 오버레이"
date: '2018-03-11 10:28:00'
---

###### html
```html
<div class="image-item">
  <img src="https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg">
  <div class="overlay"></div>
</div>
```

###### css
```scss
.image-item {
  position: relative;
  display: block;
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover .overlay {
    display: block;
  }
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, .4);
    color: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;
    z-index: 1;
    .close {
      position: absolute;
      cursor: pointer;
      font-size: 1.8rem;
      top: 5px;
      right: 8px;
    }
  }
}
```

###### 실행 결과
<p data-height="265" data-theme-id="0" data-slug-hash="vREoqL" data-default-tab="css,result" data-user="gloriaJun" data-embed-version="2" data-pen-title="image overlay" class="codepen">See the Pen <a href="https://codepen.io/gloriaJun/pen/vREoqL/">image overlay</a> by gloria (<a href="https://codepen.io/gloriaJun">@gloriaJun</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
