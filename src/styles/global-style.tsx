/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import normalize from 'emotion-normalize';

const styles = css`
  ${normalize}

  /* reset */
   * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
