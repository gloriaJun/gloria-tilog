import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as GithubIcon } from 'icons/github.svg';
import { Wrapper, Logo, LinkGroup, iconStyle } from './style';

interface Navigation {
  github: string;
}

export interface IHeaderProps {
  /** Title for the site */
  title: string;
  /** Object of navigation items */
  navigation?: Navigation;
}

/**
 * header of layout
 */
export const Header: React.FC<IHeaderProps> = ({
  title,
  navigation,
}: IHeaderProps) => {
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
