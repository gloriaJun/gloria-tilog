import React from 'react';
import { text } from '@storybook/addon-knobs';

import Header from './index';

export default {
  title: 'Layout/Header',
  component: Header,
};

export const header = () => {
  const title = text('title', 'Logo');

  return <Header title={title} />;
};
