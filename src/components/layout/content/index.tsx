import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  margin: 1rem 2.5rem;
`;

const Content = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
