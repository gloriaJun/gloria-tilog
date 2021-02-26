import React from 'react';

import { PostTags, IPostTagsProps } from './index';

export default {
  title: 'PostTags',
  component: PostTags,
};

export const normal: React.FC<IPostTagsProps> = () => {
  return <PostTags tags={['tag1', 'long-text-tag2', 'short-tag3']} />;
};
