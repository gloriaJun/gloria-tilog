/** @jsx jsx */
import { css } from '@emotion/core';
import normalize from 'emotion-normalize';

export const reset = css`
  ${normalize}

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
