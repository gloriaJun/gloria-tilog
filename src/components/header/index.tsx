import React from 'react';

import { Wrapper, Logo } from './style';

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
      <Logo>
        <h1>
          <a href="">{title}</a>
        </h1>
      </Logo>
    </Wrapper>
  );
};

Header.defaultProps = {
  // title: '',
};

export default Header;
