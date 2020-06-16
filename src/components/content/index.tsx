import React from 'react';

import { Wrapper } from './style';

const Content: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
