import styled from '@emotion/styled';

import { color } from 'styles/variables';

export const Wrapper = styled.header``;

export const Title = styled.h1`
  margin-bottom: 0.8rem;
`;

export const Info = styled.div`
  display: flex;
  font-size: 0.9rem;

  p {
    margin: 0;
  }
`;

export const Category = styled.p`
  color: ${color.primary};
`;

export const Date = styled.p`
  ::after {
    padding: 0 5px;
    content: '|';
  }
  color: ${color.gray_30};
`;
