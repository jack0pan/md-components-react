module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  '**/*.{js,ts,tsx}': 'eslint --fix',
  'src/**/*.css': 'stylelint --cache --fix',
};
