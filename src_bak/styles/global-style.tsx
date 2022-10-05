/** @jsx jsx */
import { ReactElement } from 'react';
import tw from 'twin.macro';
import { Global, css, jsx } from '@emotion/react';

const styles = css`
  body {
    ${tw`font-sans`};
  }
  article ul {
    list-style: disc;
    ${tw`list-disc list-inside my-2 pl-6`};
  }
`;

const GlobalStyle = (): ReactElement => <Global styles={styles} />;

export default GlobalStyle;
