// import React from 'react';
<<<<<<< HEAD
import { addParameters } from '@storybook/react';
=======
import { addDecorator, addParameters } from '@storybook/react';
>>>>>>> d557def812489b95083297b8e30cc9f2e1bbc9f5
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { withA11y } from '@storybook/addon-a11y';
// import { action } from '@storybook/addon-actions';
//
// // simple layout component that generates a mocked Global Style in Styled components
<<<<<<< HEAD
// import GlobalStyle from '../src/components/GlobalStyle';
=======
import GlobalStyleProvider from './decorator/GlobalStyleProvider';
>>>>>>> d557def812489b95083297b8e30cc9f2e1bbc9f5

// Storybook Addons
// ============================================
// system wide decorator that all of the stories will use
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
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

<<<<<<< HEAD
// // Storybook Decorators
// // ============================================
// // Global Styles ==============================
// addDecorator(story => (
//   <>
//     <GlobalStyles />
//     <div style={{ padding: '3rem' }}>{story()}</div>
//   </>
// ));
=======
// Storybook Decorators
// ============================================
// Global Styles ==============================
addDecorator(GlobalStyleProvider);
>>>>>>> d557def812489b95083297b8e30cc9f2e1bbc9f5

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
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
