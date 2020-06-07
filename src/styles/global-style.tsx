/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import { reset } from './reset';

const styles = css`
  ${reset}

  body {
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
