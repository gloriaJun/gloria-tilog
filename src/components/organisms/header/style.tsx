import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Wrapper = styled.header([
  tw`flex items-center justify-between flex-wrap bg-indigo-500 p-4 z-50`,
]);

export const Logo = styled.div([tw`text-white text-2xl`]);

export const LogoLink = styled(Link)([tw`no-underline text-white`]);

export const LinkGroup = styled.div([tw`flex`]);

export const iconStyle = css`
  font-size: 1.2rem;
  width: 1em;
  height: 1em;
  fill: #e2e8f0;
  transition: fill 0.2s ease-in-out;
  &:hover {
    fill: #2d3748;
  }
`;
