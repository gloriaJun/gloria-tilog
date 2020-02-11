import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

//@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
//@import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);
const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
  }
`;

export default GlobalStyle;
