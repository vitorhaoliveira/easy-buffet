import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
// removed: import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: { project: false },
      globals: { ...globals.browser }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
      // removed tailwindcss
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // React / hooks
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // removed 'tailwindcss/classnames-order': 'warn',

      // Style
      semi: ['error', 'never'],
      'no-extra-semi': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always']
    }
  }
]
