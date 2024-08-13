/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-reserved-component-names': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
