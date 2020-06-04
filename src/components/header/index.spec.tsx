import React from 'react';

import { render } from '../../../test-helpers';
// import { render } from 'tests';
import { Header } from './index';

describe('<Header />', () => {
  test('should display header', () => {
    const result = render(<Header title="aa" />);

    console.log(result);
    //     const loginForm = await findByTestId("login-form");
    //     expect(loginForm).toHaveFormValues({
    //       username: "",
    //       password: "",
    //       remember: true
  });
});
