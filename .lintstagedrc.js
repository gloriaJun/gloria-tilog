module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'yarn run lint:fix',
    'yarn run prettier:fix',
    'git add',
  ],
  '{*.{json,md}}': ['prettier --write', 'git add'],
};
