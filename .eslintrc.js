// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
