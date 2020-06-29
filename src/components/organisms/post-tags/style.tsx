import styled from '@emotion/styled';

import { color, space, border } from 'styles/variables';

export const TagGroup = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: ${space.small} 0;
`;

export const TagItem = styled.li`
  font-size: 0.85rem;
  color: ${color.secondary};
  background-color: ${color.gray_10};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px ${space.small};
  margin: 0 ${space.xsmall};
  border-radius: ${border.radius.small};

  a {
    color: inherit;
    text-shadow: none;
    background-image: none;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;
