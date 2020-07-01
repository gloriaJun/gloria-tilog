import React from 'react';

import { render } from '__tests__/helpers/testing-lib';
import { PostHeader } from './index';

const props = {
  title: 'Title',
  category: 'category',
  date: '2020-6-12',
};

describe('<PostHeader />', () => {
  test('should category link href has category value', () => {
    const { getByTestId } = render(<PostHeader {...props} />);
    const categoryLink = getByTestId('category-link');

    expect(categoryLink).toHaveAttribute('href', `/${props.category}`);
  });
});
