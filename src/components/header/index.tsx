import React from 'react';

import { Wrapper, Logo, LinkGroup } from './style';
import { ReactComponent as GithubIcon } from 'icons/github.svg';

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
        <a href="">{title}</a>
      </Logo>

      <LinkGroup>
        <span>Test</span>
        <GithubIcon />
      </LinkGroup>
    </Wrapper>
  );
};

Header.defaultProps = {
  // title: '',
};

export default Header;
