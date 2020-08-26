import React from 'react';
import { Link } from 'gatsby';

interface IPostListItemProps {
  // id: string;
  pathname: string;
  category: string;
  title: string;
  date: string;
  description?: string;
}

export default function PostListItem({
  pathname,
  category,
  title,
  date,
  description,
}: IPostListItemProps): JSX.Element {
  return (
    <li>
      <Link to={pathname}>
        <h3>
          [{category}] {title} <span>— {date}</span>
        </h3>
        <p>{description}</p>
      </Link>
    </li>
  );
}
