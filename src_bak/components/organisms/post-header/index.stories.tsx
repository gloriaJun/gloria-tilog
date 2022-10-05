import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PostHeader, IPostHeaderProps } from './index';

export default {
  title: 'PostHeader',
  component: PostHeader,
  argTypes: {},
} as Meta;

const Template: Story<IPostHeaderProps> = (args) => {
  return <PostHeader {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Writing the blog conents',
  category: 'Javascript',
  date: '2020-05-28',
};
