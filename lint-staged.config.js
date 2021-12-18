module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "src/**/*.{ts,tsx}": "ts-standard --fix",
  "src/**/*.css": "stylelint --cache --fix",
};
