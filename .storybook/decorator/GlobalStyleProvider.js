import React from 'react';

import GlobalStyle from '../../src/styles/global-style';

const GlobalStyleProvider = (storyFn) => (
  <>
    <GlobalStyle />
    <div style={{ padding: '1rem' }}>{storyFn()}</div>
  </>
);

export default GlobalStyleProvider;
