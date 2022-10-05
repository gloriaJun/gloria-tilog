import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';

export const ListWrapper = styled.div([tw`mx-auto`]);

export const CategoryTitle = styled.h2([
  tw`mt-2 leading-8 tracking-tight text-gray-900`,
]);

export const ListGroup = styled.ul([tw`list-none p-0`]);

export const ListItem = styled.li([tw``]);

export const Card = styled.div([
  tw`bg-white shadow-xl rounded-lg mb-6 px-4 py-2 tracking-wide hover:bg-gray-100`,
]);

export const CustomLink = styled(Link)([
  tw`no-underline text-current hover:text-current`,
]);
export const Title = styled.h3([tw`text-gray-800 tracking-normal`]);

export const Info = styled.div([tw`flex items-center text-sm text-gray-700`]);

export const Category = styled.p([tw`mr-2 text-blue-500`]);

export const PostDate = styled.span([tw`text-gray-500`]);

export const Description = styled.p([tw`text-sm text-gray-700 px-2 mr-1`]);
