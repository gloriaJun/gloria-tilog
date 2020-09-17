/** @jsx jsx */
import { ReactElement } from 'react';
import tw from 'twin.macro';
import { Global, css, jsx } from '@emotion/core';

const styles = css`
  body {
    ${tw`font-sans`};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-bold`}
  }
`;

const GlobalStyle = (): ReactElement => <Global styles={styles} />;

export default GlobalStyle;
