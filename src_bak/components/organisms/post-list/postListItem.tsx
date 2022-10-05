import React from 'react';

import {
  Card,
  Category,
  CustomLink,
  Description,
  Info,
  ListItem,
  PostDate,
  Title,
} from './style';

export interface IPostListItemProps {
  // id: string;
  pathname: string;
  category: string;
  title: string;
  date: string;
  description?: string;
}

export function PostListItem({
  pathname,
  category,
  title,
  date,
  description,
}: IPostListItemProps): JSX.Element {
  return (
    <ListItem>
      <Card>
        <CustomLink to={pathname}>
          <Title>{title}</Title>

          {description && <Description>{description}</Description>}

          <Info>
            {category && <Category>{category}</Category>}
            <PostDate>{date}</PostDate>
          </Info>
        </CustomLink>
      </Card>
    </ListItem>
  );
}
