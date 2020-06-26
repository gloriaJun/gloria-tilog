import React from 'react';

import { Header } from 'components/header';
import Content from 'components/content';
import GlobalStyle from 'styles/global-style';

export interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />

      <Header title={'L.E.T'} />

      <Content>{children}</Content>
    </>
  );
};
