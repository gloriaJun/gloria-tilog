import React from 'react';

import { Layout, ILayoutProps } from './index';

export default {
  title: 'Layout',
  component: Layout,
};

export const normal: React.FC<ILayoutProps> = () => {
  return <Layout>Content</Layout>;
};
