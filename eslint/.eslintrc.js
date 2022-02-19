module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'import',
    'sort-imports-es6-autofix',
    'filenames',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'eol-last': 'error',
    eqeqeq: ['error', 'allow-null'],
    'filenames/match-regex': [2, '^[a-z-.0-9]+$'],
    'filenames/match-exported': [2, 'kebab'],
    'import/no-absolute-path': [
      2,
      {
        esmodule: true,
      },
    ],
    indent: 'off',
    'no-console': 'error',
    'no-alert': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'object-shorthand': ['error', 'always'],
    'require-atomic-updates': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'tsdoc/syntax': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./', '../'],
      },
    ],
  },
};
