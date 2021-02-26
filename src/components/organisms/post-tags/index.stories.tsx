import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PostTags, IPostTagsProps } from './index';

export default {
  title: 'PostTags',
  component: PostTags,
  argTypes: {},
} as Meta;

const Template: Story<IPostTagsProps> = (args) => {
  return <PostTags {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tags: ['tag1', 'long-text-tag2', 'short-tag3'],
};
