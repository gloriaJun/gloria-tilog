/* eslint-disable no-underscore-dangle */

// jest.mock('gatsby');

// Related to jest.config.js globals
// Load in this loadershim into `setupFiles` for all files that will be included before all tests are run
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - assigning to global is ok here
global.___loader = {
  enqueue: jest.fn(),
};
