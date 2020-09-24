import React from 'react';
import { text } from '@storybook/addon-knobs';

import { PostList, PostListItem, IPostListProps } from './index';

export default {
  title: 'PostList',
  component: PostList,
};

export const normal: React.FC<IPostListProps> = () => {
  const title = text('title', 'Group Title');
  const description = text(
    'description',
    'Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...',
  );

  return (
    <PostList title={title}>
      <PostListItem
        pathname={'example'}
        category={'storybook'}
        title={'How to configure storybook'}
        date={'2020-05-28'}
        description={description}
      />
    </PostList>
  );
};
