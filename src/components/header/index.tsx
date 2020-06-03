import React from 'react';
import { Link } from 'gatsby';

import { Wrapper, Logo, LinkGroup, iconStyle } from './style';
import { ReactComponent as GithubIcon } from 'icons/github.svg';
import { css } from '@emotion/core';

interface Navigation {
  github: string;
}

interface IHeaderProps {
  /** Title for the site */
  title: string;
  /** Object of navigation items */
  navigation?: Navigation;
}

/**
 * header of layout
 */
export const Header: React.FC<IHeaderProps> = ({ title, navigation }) => {
  return (
    <Wrapper>
      <Logo>
        <Link to="">{title}</Link>
      </Logo>

      <LinkGroup>
        <a href={navigation?.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon css={iconStyle} />
        </a>
      </LinkGroup>
    </Wrapper>
  );
};

Header.defaultProps = {
  navigation: {
    github: '',
  },
};
