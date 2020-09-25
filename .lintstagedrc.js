module.exports = {
  '*.{js,jsx,ts,tsx}': ['npm run lint:fix', 'npm run prettier:fix', 'git add'],
  '{*.{json,md}}': ['prettier --write', 'git add'],
};
