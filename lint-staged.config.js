module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  '**/*.js': 'standard --fix',
  'src/**/*.scss': 'stylelint --cache --fix --custom-syntax postcss-scss',
  'src/**/*.{ts,tsx}': 'ts-standard --fix'
}
