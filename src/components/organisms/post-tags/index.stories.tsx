import React from 'react';
import { array } from '@storybook/addon-knobs';

import { PostTags, IPostTagsProps } from './index';

export default {
  title: 'PostTags',
  component: PostTags,
};

export const normal: React.FC<IPostTagsProps> = () => {
  const tags = array('tags', ['tag1', 'long-text-tag2', 'short-tag3']);

  return <PostTags tags={tags} />;
};
