module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    '@oazhu/eslint-config-vue'
  ],

  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  ignorePatterns: ['node_modules/*', 'public/*']
}
