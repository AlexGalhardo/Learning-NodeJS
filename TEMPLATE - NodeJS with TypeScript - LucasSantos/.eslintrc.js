module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'prettier',
    'plugin:editorconfig/all'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'editorconfig',
    '@typescript-eslint'
  ],
  rules: {
  }
}
