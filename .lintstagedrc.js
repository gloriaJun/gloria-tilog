module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint . --ext .js,.jsx,.ts,.tsx --fix',
    'prettier --write "**/*.{js,jsx,json,md}"',
    'git add',
  ],
  '{*.{json,md}}': ['prettier --write', 'git add'],
};
