import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  margin: 3rem 5rem;
`;

const Content = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
