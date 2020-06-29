import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Header, IHeaderProps } from './index';

export default {
  title: 'Header',
  component: Header,
};

export const normal: React.FC<IHeaderProps> = () => {
  const title = text('title', 'Logo');

  return <Header title={title} />;
};

export const withNavi: React.FC<IHeaderProps> = () => {
  const title = text('title', 'Logo');

  return (
    <Header title={title} navigation={{ github: 'https://github.com/' }} />
  );
};
