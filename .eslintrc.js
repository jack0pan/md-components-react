module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier', 'plugin:sonarjs/recommended', 'plugin:storybook/recommended'],
  plugins: ['sonarjs', 'eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
  },
};
