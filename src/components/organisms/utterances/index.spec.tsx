import React from 'react';

import { render } from '__tests__/helpers/testing-lib';
import { Utterances } from './index';

describe('<Utterances />', () => {
  test('should generate script tag', () => {
    const { getByTestId } = render(<Utterances repo="test/repo" />);
    const container = getByTestId('utterances');

    expect(container).not.NaN;
  });
});
