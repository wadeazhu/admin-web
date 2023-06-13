module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    node: true
  },
  extends: [
    '@oazhu/eslint-config-vue'
  ],

  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
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
