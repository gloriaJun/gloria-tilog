/** @jsx jsx */
import { ReactElement } from 'react';
import tw from 'twin.macro';
import { Global, css, jsx } from '@emotion/react';

const styles = css`
  body {
    ${tw`font-sans`};
  }
`;

const GlobalStyle = (): ReactElement => <Global styles={styles} />;

export default GlobalStyle;
