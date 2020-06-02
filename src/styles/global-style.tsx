/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import { reset } from './reset';
import { color, typography } from './variables';

const styles = css`
  ${reset}

  body {
    font-size: ${typography.size.paragraph[1]};
    color: ${color.gray_100};
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
