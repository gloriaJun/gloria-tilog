import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 3.5rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  z-index: 10;
`;

export interface IHeaderProps {
  title: string;
}

// interface PathParamsProps {
//   pathname: string;
// }

/**
 * The world's most _basic_ button
 */
const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

Header.defaultProps = {
  // title: '',
};

export default Header;
