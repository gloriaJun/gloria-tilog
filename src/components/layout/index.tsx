import React from 'react';

import Header from 'components/organisms/header';
import Content from 'components/atoms/content';
import GlobalStyle from 'styles/global-style';

export interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Content>{children}</Content>
    </>
  );
};
