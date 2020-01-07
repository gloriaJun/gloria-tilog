import React from 'react';

import Header from 'components/header';

import GlobalStyle from 'styles/GlobalStyle';

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header title={'L.E.T'} />

      <h1>Hello, World!!!</h1>
      <h2>This is message.</h2>
    </>
  );
};

export default IndexPage;
