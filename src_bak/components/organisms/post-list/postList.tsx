import React from 'react';

import { CategoryTitle, ListGroup, ListWrapper } from './style';

export interface IPostListProps {
  title?: string | undefined;
  children?: React.ReactNode;
}

export function PostList({ title, children }: IPostListProps): JSX.Element {
  return (
    <ListWrapper>
      {title && <CategoryTitle>{title}</CategoryTitle>}
      <ListGroup>{children}</ListGroup>
    </ListWrapper>
  );
}
