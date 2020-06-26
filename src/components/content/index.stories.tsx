import React from 'react';

import Content from './index';

export default {
  title: 'Content',
  component: Content,
};

export const normal = (): JSX.Element => <Content>This is text.</Content>;
