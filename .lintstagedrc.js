module.exports = {
  '*.{js,jsx,ts,tsx,json,md,mdx}': ['prettier --write', 'git add'],
  '*.{js,jsx,ts,tsx}': [
    () => 'yarn run lint:all',
    'yarn run cspell',
    'git add',
  ],
};
