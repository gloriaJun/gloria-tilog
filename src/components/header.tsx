import React from 'react';
import styled from '@emotion/styled';

type HeaderProps = {
  title: string;
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 3.5rem;
  background-color: #cd84f1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);

  color: #fff;
`;

const Header = ({ title }: HeaderProps) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

export default Header;
