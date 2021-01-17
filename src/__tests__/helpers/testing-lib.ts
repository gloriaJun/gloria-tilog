import React from 'react';
import {
  render as testingLibraryRender,
  RenderResult,
  RenderOptions,
  Queries,
} from '@testing-library/react';

// re-export everything
export * from '@testing-library/react';

export const render = <Q extends Queries>(
  component: React.ReactElement,
  options?: RenderOptions,
): RenderResult | RenderResult<Q> => {
  return testingLibraryRender(component, { ...options });
};
