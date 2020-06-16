import React from 'react';

import { Link } from 'gatsby';
import { TagGroup, TagItem } from './style';

export interface IPostTagsProps {
  tags?: string[];
}

export const PostTags: React.FC<IPostTagsProps> = ({ tags }) => {
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
