import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { zIndex, color, space, icon } from 'styles/variables';

const headerFontColor = color.white;

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  color: ${headerFontColor};
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  color: ${headerFontColor};
`;

export const iconStyle = css`
  ${icon.style};
`;