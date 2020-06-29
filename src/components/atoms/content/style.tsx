import styled from '@emotion/styled';
import { css } from '@emotion/core';

import mediaQuery from 'styles/helper/media-query';
import { space } from 'styles/variables';

export const Wrapper = styled.div`
  padding: ${space.large} ${space.medium};
  margin: ${space.large} ${space.large};

  ${mediaQuery.phone(css`
    margin: 0;
  `)}
`;
