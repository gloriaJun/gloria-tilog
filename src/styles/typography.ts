import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = () => ({
  'h1,h2,h3,h4,h5,h6': {
    fontWeight: 400,
  },
  blockquote: {
    fontStyle: 'italic',
    fontSize: '1rem',
  },
  'a:hover': {
    textDecoration: 'none',
    color: '#ff7675',
  },
});

const typography = new Typography(moragaTheme);

export default typography;
