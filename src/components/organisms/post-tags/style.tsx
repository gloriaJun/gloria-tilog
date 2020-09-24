import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';

export const TagGroup = styled.ul([tw`p-2`]);

export const TagItem = styled.li([
  tw`inline-flex  text-sm bg-green-600 text-white rounded-full h-6 px-3 mr-2 justify-center items-center hover:bg-opacity-75`,
  `
  ::before {
    content: '#'
  }
  `,
]);

export const TagLink = styled(Link)([tw`no-underline text-current`]);
