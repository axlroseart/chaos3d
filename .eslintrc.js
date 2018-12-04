module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 0,
      'generator-star-spacing': 0,
      'space-before-function-paren': [
        'error',
        'never'
      ],
      'no-console': 'off',
      'no-new': 0,
      'no-global-assign': [
        'error'
      ],
      'vue/no-parsing-error': [
        0,
        {
          'x-invalid-end-tag': false,
          'duplicate-attribute': false
        }
      ],
      'vue/valid-v-for': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
