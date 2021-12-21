module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  'src/**/*.{ts,tsx}': 'ts-standard --fix',
  'src/**/*.scss': 'stylelint --cache --fix --custom-syntax postcss-scss'
}
