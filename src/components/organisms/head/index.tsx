import React from 'react';
import { Helmet } from 'react-helmet';

interface IHeadProps {
  siteTitle: string;
  pageTitle?: string;
}

export default function Head({
  siteTitle,
  pageTitle,
}: IHeadProps): JSX.Element {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {siteTitle} | {pageTitle}
      </title>
    </Helmet>
  );
}
