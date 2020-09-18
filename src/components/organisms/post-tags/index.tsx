import React from 'react';

import { TagLink, TagGroup, TagItem } from './style';

export interface IPostTagsProps {
  tags?: string[] | null;
}

export const PostTags = ({ tags }: IPostTagsProps): JSX.Element => {
  return (
    <TagGroup>
      {tags &&
        tags.map((v, k) => (
          <TagItem key={k}>
            <TagLink to={v}>{v}</TagLink>
          </TagItem>
        ))}
    </TagGroup>
  );
};
