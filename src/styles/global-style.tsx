/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import normalize from 'emotion-normalize';

const styles = css`
  ${normalize}

  body {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
