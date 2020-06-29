import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface IHeadProps {
  lang?: string;
  title?: string;
  description?: string;
}

export default function Head({
  lang = 'en',
  title,
  description,
}: IHeadProps): JSX.Element {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <Helmet>
      <html lang={lang} />
      <meta charSet="utf-8" />
      <title>{title || siteMetadata.title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  );
}
