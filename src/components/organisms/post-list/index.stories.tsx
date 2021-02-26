import React from 'react';

import { PostList, PostListItem, IPostListProps } from './index';

export default {
  title: 'PostList',
  component: PostList,
};

export const normal: React.FC<IPostListProps> = () => {
  return (
    <PostList title={'Group Title'}>
      <PostListItem
        pathname={'example'}
        category={'storybook'}
        title={'How to configure storybook'}
        date={'2020-05-28'}
        description={
          'Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...'
        }
      />
    </PostList>
  );
};
