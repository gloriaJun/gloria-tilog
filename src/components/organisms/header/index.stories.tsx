import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { IHeaderProps } from './index';

export default {
  title: 'Header',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<IHeaderProps> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Logo',
};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  title: 'My Blog',
  navigation: {
    github: 'https://github.com/',
  },
};
