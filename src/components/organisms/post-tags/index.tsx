import React from 'react';

import { Link } from 'gatsby';
import { TagGroup, TagItem } from './style';

export interface IPostTagsProps {
  tags?: (string | null)[] | null;
}

export const PostTags = ({ tags }: IPostTagsProps): JSX.Element => {
  return (
    <TagGroup>
      {tags &&
        tags.map((v, k) => (
          <TagItem key={k}>
            <Link to={v}>{v}</Link>
          </TagItem>
        ))}
    </TagGroup>
  );
};
