import React from 'react';

interface IExternalLinkProps {
  /* external link url */
  href: string;
}

export const ExternalLink: React.FC<IExternalLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
