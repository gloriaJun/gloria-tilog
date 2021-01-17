// import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';
// import { withA11y } from '@storybook/addon-a11y';
// import { action } from '@storybook/addon-actions';
//
// // simple layout component that generates a mocked Global Style in Styled components
import GlobalStyleProvider from './decorator/GlobalStyleProvider';

// Storybook Addons
// ============================================
// system wide decorator that all of the stories will use
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'responsive',
  },
  options: {
    showRoots: true,
    panelPosition: 'right',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  },
});

// Storybook Decorators
// ============================================
// Global Styles ==============================
addDecorator(GlobalStyleProvider);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// // Emotion Theme Provider =====================
// addDecorator(EmotionThemeProvider);

// // gatsby-plugin-intl Provider ================
// // Set supported locales
// export const locales = ['en-us', 'es-es'];

// // Import translation messages
// export const messages = locales.reduce((acc, locale) => {
//   return {
//     ...acc,
//     [locale]: require(`../src/locales/${locale}.json`),
//   };
// }, {});

// const getMessages = locale => messages[locale];

// // Set `storybook-addon-intl` configuration (handles `react-intl`)
// setIntlConfig({
//   locales,
//   defaultLocale: 'en-us',
//   getMessages,
// });

// // Load the locale data for all your supported locales
// addLocaleData(enLocaleData);
// addLocaleData(esLocaleData);

// // Register decorators
// // Adds gatsby-plugin-intl IntlContextProvider which wraps the Gatsby Link component
// addDecorator(GatsbyIntlProvider);
// // Adds react-intl
// addDecorator(withIntl);

// Gatsby Setup
// ============================================
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
global.__BASE_PATH__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
