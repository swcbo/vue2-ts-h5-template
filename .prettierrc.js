module.exports = {
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  trailingComma: 'es5',
  printWidth: 100,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['*.json', '.babelrc'],
      options: {
        parser: 'json',
        tabWidth: 2,
      },
    },
  ],
  // "vetur.format.defaultFormatterOptions": {
  //   "jsxBracketSameLine": true,
  //   "bracketSpacing": true,
  //   "semi": false,
  //   "singleQuote": true,
  //   "htmlWhitespaceSensitivity": "ignore",
  //   "trailingComma": "none",
  //   "eslintIntegration": true,
  //   "proseWrap": "preserve"
  // }
}
