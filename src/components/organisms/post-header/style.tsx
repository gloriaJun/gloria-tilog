import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.header([``]);

export const Title = styled.h1([tw`mb-1`]);

export const Info = styled.div([tw`flex text-sm text-gray-700`]);

export const Category = styled.p([tw``]);

export const CustomLink = styled(Link)([tw``]);

export const Date = styled.p([
  tw`text-gray-600`,
  `
  ::after {
    padding: 0 5px;
    content: '|';
  }`,
]);
