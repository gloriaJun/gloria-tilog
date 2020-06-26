const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks(['lint-staged']),
    'pre-push': tasks(['npm run lint', 'npm prettier:check', 'npm run test']),
  },
};
