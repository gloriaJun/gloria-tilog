import React from 'react';

interface IExternalLinkProps {
  /* external link url */
  href: string;
  children: React.ReactNode;
}

export const ExternalLink = ({
  href,
  children,
}: IExternalLinkProps): JSX.Element => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
