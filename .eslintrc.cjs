module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: true,
      },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
