import React from 'react';
import { Link } from 'gatsby';

import { Wrapper, Title, Info, Category, Date } from './style';

export interface IPostHeaderProps {
  title: string;
  date: string;
  category: string;
}

export const PostHeader: React.FC<IPostHeaderProps> = ({
  title,
  date,
  category,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        <Date>{date}</Date>
        <Link to={category} data-testid="category-link">
          <Category>{category}</Category>
        </Link>
      </Info>
    </Wrapper>
  );
};
