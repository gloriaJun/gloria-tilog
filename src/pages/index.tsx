import React from 'react';

import Header from 'components/header';
import Content from 'components/content';

import GlobalStyle from 'styles/global-style';

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Header title={'L.E.T'} />

      <Content>
        <h1>Hello, World!!!</h1>
        <h2>This is message.</h2>
      </Content>
    </>
  );
};

export default IndexPage;
