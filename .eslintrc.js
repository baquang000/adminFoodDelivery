module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Enable this if you are using Prettier for code formatting
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
    },
    rules: {
      'vue/multi-word-component-names': 0, // Disable rule for single-word component names if needed
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable if you don't want to enforce return types
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };
  