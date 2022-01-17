module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  '**/*.{js,ts,tsx}': 'eslint --fix',
  'src/**/*.scss': 'stylelint --cache --fix --custom-syntax postcss-scss',
}
