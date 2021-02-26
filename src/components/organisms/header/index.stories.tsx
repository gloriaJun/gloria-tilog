import React from 'react';

import Header, { IHeaderProps } from './index';

export default {
  title: 'Header',
  component: Header,
};

export const normal: React.FC<IHeaderProps> = () => {
  return <Header title={'Logo'} />;
};

export const withNavi: React.FC<IHeaderProps> = () => {
  return (
    <Header title={'Logo'} navigation={{ github: 'https://github.com/' }} />
  );
};
