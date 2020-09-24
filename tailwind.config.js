module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          'h1,h2,h3,h4,h5,h6': {
            fontWeight: 600,
          },
          h1: {
            fontSize: '2.25rem',
          },
          h2: {
            fontSize: '1.5rem',
          },
          h3: {
            fontSize: '1.25rem',
          },
          h4: {
            fontSize: '1.125rem',
          },
          blockquote: {
            color: theme('colors.gray.600'),
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: '0.875rem',
          },
          a: {
            color: theme('colors.blue.500'),
            '&:hover': {
              color: theme('colors.blue.800'),
            },
          },
        },
      },
    }),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
