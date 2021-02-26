import React from 'react';

import { PostHeader, IPostHeaderProps } from './index';

export default {
  title: 'PostHeader',
  component: PostHeader,
};

export const normal: React.FC<IPostHeaderProps> = () => {
  return (
    <PostHeader
      title={'Writing the blog conents'}
      category={'Javascript'}
      date={'2020-05-28'}
    />
  );
};
