import React from 'react';
import { text } from '@storybook/addon-knobs';

import { PostHeader, IPostHeaderProps } from './index';

export default {
  title: 'PostHeader',
  component: PostHeader,
};

export const normal: React.FC<IPostHeaderProps> = () => {
  const title = text('title', 'Writing the blog conents');
  const category = text('category', 'Javascript');
  const date = text('date', '2020-05-28');

  return <PostHeader title={title} category={category} date={date} />;
};
