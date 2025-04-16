import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  {
    ignores: ['node_modules', '.next', 'out'], // Exclude Next.js and node_modules directories
  },
  js.configs.recommended, // ESLint recommended config
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Global variables for browser environment
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      next: nextPlugin, // Add Next.js plugin for Next.js-specific rules
    },
    rules: {
      'prettier/prettier': 'error', // Ensure Prettier formatting is enforced
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
      },
    },
  },
  nextPlugin.configs.recommended, // Apply Next.js recommended ESLint rules
  prettierConfig, // Apply Prettier configuration to disable conflicting ESLint rules
]
