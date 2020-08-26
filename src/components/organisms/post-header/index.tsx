import React from 'react';
import { Link } from 'gatsby';

import { Wrapper, Title, Info, Category, Date } from './style';

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
        <Date>{date}</Date>
        {category && (
          <Link to={category} data-testid="category-link">
            <Category>{category}</Category>
          </Link>
        )}
      </Info>
    </Wrapper>
  );
};
