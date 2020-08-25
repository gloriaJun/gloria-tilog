import React from 'react';
import { Helmet } from 'react-helmet';

interface IHeadProps {
  lang?: string;
  title: string;
  description: string;
}

export default function Head({
  lang = 'en',
  title,
  description,
}: IHeadProps): JSX.Element {
  return (
    <Helmet>
      <html lang={lang} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
