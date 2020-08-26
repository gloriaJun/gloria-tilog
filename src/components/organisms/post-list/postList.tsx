import React from 'react';

interface IPostListProps {
  title?: string | undefined;
  children?: React.ReactNode;
}

export default function PostList({
  title,
  children,
}: IPostListProps): JSX.Element {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>{children}</ul>
    </>
  );
}
