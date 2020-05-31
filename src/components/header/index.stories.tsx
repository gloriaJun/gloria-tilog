import React from 'react';

import Header from './index';

export default {
  title: 'Layout/Header',
  component: Header,
};

export const header = () => {
  return <Header title={'HELLO'} />;
};
