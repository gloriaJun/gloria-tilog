/** @jsx jsx */
import { ReactElement } from 'react';
import { Global, css, jsx } from '@emotion/core';
import normalize from 'emotion-normalize';

const styles = css`
  ${normalize}

  /* reset */
   * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = (): ReactElement => <Global styles={styles} />;

export default GlobalStyle;
