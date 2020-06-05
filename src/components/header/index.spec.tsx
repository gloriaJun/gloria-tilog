import React from 'react';

// import { render } from '../../../__tests__';
import { render } from 'tests/helpers';
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
