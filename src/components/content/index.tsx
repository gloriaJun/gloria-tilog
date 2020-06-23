import React from 'react';
import styled from '@emotion/styled';

import mediaQuery from 'styles/helper/media-query';
import { css } from '@emotion/core';

interface IContentProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  margin: 3rem 5rem;
  ${mediaQuery.phone(css`
    margin: 1rem 1.5rem;
  `)}
`;

export default function Content({ children }: IContentProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
