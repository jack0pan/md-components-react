module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'at-rule-no-unknown': null,
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
    'selector-class-pattern': null,
  },
};
