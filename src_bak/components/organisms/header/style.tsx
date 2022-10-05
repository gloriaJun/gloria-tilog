import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.nav([
  tw`flex items-center justify-between flex-wrap bg-indigo-500 p-4 z-50`,
]);

export const Logo = styled.div([tw`text-white text-2xl`]);

export const LogoLink = styled(Link)([
  tw`no-underline text-white hover:text-current`,
]);

export const LinkGroup = styled.div([tw`flex`]);
