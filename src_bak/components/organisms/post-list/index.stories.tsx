// import React from 'react';
// import { Story, Meta } from '@storybook/react/types-6-0';

// import {
//   PostList,
//   PostListItem,
//   IPostListProps,
//   IPostListItemProps,
// } from './index';

// interface IPostListStoryProps extends IPostListProps {
//   items: IPostListItemProps[];
// }

// export default {
//   title: 'PostList',
//   component: PostList,
//   subcomponents: { PostListItem },
//   argTypes: {},
// } as Meta;

// const Template: Story<IPostListStoryProps> = ({ items, ...args }) => {
//   return (
//     <PostList {...args}>
//       {items.map((item) => (
//         <PostListItem key={item.category} {...item} />
//       ))}
//     </PostList>
//   );
// };

// export const Default = Template.bind({});
// Default.args = {
//   items: [
//     {
//       pathname: 'example',
//       category: 'storybook',
//       title: 'How to configure storybook',
//       date: '2020-05-28',
//       description:
//         'Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...',
//     },
//   ],
// };
