import React from 'react';

import { ExternalLink } from 'components/atoms/external-link';
import { Wrapper, Logo, LinkGroup, LogoLink } from './style';
import Icon from 'components/atoms/icon';

interface Navigation {
  github: string;
}

export interface IHeaderProps {
  /** Title for the site */
  title?: string;
  /** Object of navigation items */
  navigation?: Navigation;
}

/**
 * header of layout
 */

export default function Header({
  title,
  navigation,
}: IHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <Logo>
        <LogoLink to="/" data-testid="logo-link">
          {title}
        </LogoLink>
      </Logo>

      {navigation && (
        <LinkGroup data-testid="link-group">
          {navigation.github && (
            <ExternalLink href={navigation.github}>
              <Icon icon={'github'} />
            </ExternalLink>
          )}
        </LinkGroup>
      )}
    </Wrapper>
  );
}
