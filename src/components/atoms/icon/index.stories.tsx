import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { iconTypes, IIconProps } from './index';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<IIconProps> = (args) => {
  return <Icon {...args} />;
};

export const Default = () => {
  return (
    <ul>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export const Github = Template.bind({});
Github.args = {
  icon: 'github',
};
