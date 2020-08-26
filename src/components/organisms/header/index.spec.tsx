import React from 'react';

import { render } from '__tests__/helpers/testing-lib';
import Header from './index';

const props = {
  title: 'Title',
  navigation: {
    github: 'https://github.com/',
  },
};

describe('<Header />', () => {
  test('should logo link is empty value', () => {
    const { getByTestId } = render(<Header {...props} />);
    const logoLink = getByTestId('logo-link');

    expect(logoLink).toHaveAttribute('href', '/');
  });

  test('should not draw link group ', () => {
    const { queryByTestId } = render(<Header title={props.title} />);
    const linkGroup = queryByTestId('link-group');

    expect(linkGroup).toBeNull();
  });
});
