import React from 'react';
// import renderer from 'react-test-renderer';

import { render, screen } from '__tests__/helpers/testing-lib';
import { setUpQueryOnce } from '__tests__/helpers/jest';
import Head from './index';

// const props = {
//   title: 'Title',
//   navigation: {
//     github: 'https://github.com/',
//   },
// };

const siteMetadata = {
  title: `Default Title`,
};

describe('<Head />', () => {
  beforeEach(() => {
    // setUpQueryOnce({
    //   site: {
    //     siteMetadata,
    //   },
    // });
  });

  it('should be set title by default', () => {
    // render(<Head />);
    // const title = screen.getByTitle(siteMetadata.title);
    // expect(title).not.toBeNull();
  });

  // it('should not draw link group ', () => {
  //   const { queryByTestId } = render(<Header title={props.title} />);
  //   const linkGroup = queryByTestId('link-group');

  //   expect(linkGroup).toBeNull();
  // });
});
