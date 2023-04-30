import React from 'react';

import GlobalStyle from '../../src/styles/global-style';

const GlobalStyleProvider = (storyFn) => (
  <>
    <GlobalStyle />
    <div>{storyFn()}</div>
  </>
);

export default GlobalStyleProvider;
