import { css } from '@emotion/core';

import { color } from './color';

const size = {
  small: '20px',
  medium: '24px',
  large: '32px',
};

export const icon = {
  size,
  style: css`
    font-size: ${size.medium};
    width: 1em;
    height: 1em;
    fill: ${color.gray_10};
    transition: fill 0.2s ease-in-out;
    &:hover {
      fill: ${color.black};
    }
  `,
};
