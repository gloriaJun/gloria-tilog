import React from 'react';

import { Wrapper, Title, Info, Category, PostDate, CustomLink } from './style';

export interface IPostHeaderProps {
  title: string;
  date: string;
  category: string | null;
}

export const PostHeader = ({
  title,
  date,
  category,
}: IPostHeaderProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        <PostDate>{date}</PostDate>
        {category && (
          <Category>
            <CustomLink to={category} data-testid="category-link">
              {category}
            </CustomLink>
          </Category>
        )}
      </Info>
    </Wrapper>
  );
};
