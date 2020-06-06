import React from 'react';
import { Link } from 'gatsby';

import { ExternalLink } from 'components/external-link';
import { ReactComponent as GithubIcon } from 'icons/github.svg';
import { Wrapper, Logo, LinkGroup, iconStyle, LogoLinkStyle } from './style';

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
export const Header: React.FC<IHeaderProps> = ({
  title,
  navigation,
}: IHeaderProps) => {
  return (
    <Wrapper>
      <Logo>
        <Link css={LogoLinkStyle} to="" data-testid="logo-link">
          {title}
        </Link>
      </Logo>

      {navigation && (
        <LinkGroup data-testid="link-group">
          {navigation.github && (
            <ExternalLink href={navigation.github}>
              <GithubIcon css={iconStyle} />
            </ExternalLink>
          )}
        </LinkGroup>
      )}
    </Wrapper>
  );
};

Header.defaultProps = {};
