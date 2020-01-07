import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  //@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  //@import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);

  ${normalize()}

  body {
  }
`;

export default GlobalStyle;
