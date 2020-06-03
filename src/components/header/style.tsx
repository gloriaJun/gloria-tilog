import styled from '@emotion/styled';

import { zIndex, color, space } from 'styles/variables';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${space.xlarge} ${space.large};
  margin-bottom: ${space.medium};
  width: 100%;
  background-color: ${color.primary};
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${zIndex.high};
`;

export const Logo = styled.h1`
  color: ${color.white};
`;

export const LinkGroup = styled.div`
  color: ${color.white};
`;
