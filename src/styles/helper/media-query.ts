import { css, SerializedStyles } from '@emotion/core';

const getMediaQuery = (breakpoint: number, styles: SerializedStyles) => css`
  @media (min-width: ${breakpoint}px) {
    ${styles}
  }
`;

const mediaQuery = {
  //   custom: customMediaQuery,
  desktop: (styles: SerializedStyles): SerializedStyles =>
    getMediaQuery(992, styles),
  tablet: (styles: SerializedStyles): SerializedStyles =>
    getMediaQuery(768, styles),
  phone: (styles: SerializedStyles): SerializedStyles =>
    getMediaQuery(576, styles),
};

export default mediaQuery;
