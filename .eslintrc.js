module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
  },
};
