import React from 'react';

import { Wrapper } from './style';

export interface IContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: IContentProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
