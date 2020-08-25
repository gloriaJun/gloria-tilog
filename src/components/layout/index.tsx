import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/organisms/header';
import Content from 'components/atoms/content';
import GlobalStyle from 'styles/global-style';

export interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          social {
            github
          }
          author
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />

      <Header title={siteMetadata.title} navigation={siteMetadata.social} />

      <Content>{children}</Content>
    </>
  );
};
