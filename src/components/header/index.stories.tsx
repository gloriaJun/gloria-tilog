import React from 'react';
import Header from './index';

export default {
  title: 'Layout/Header',
  component: Header,
};

export const normal = () => {
  return <Header title={'HELLO'} />;
};
