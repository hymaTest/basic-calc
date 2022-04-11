// const path = require('path');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-undef': 0,
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'max-classes-per-file': 0,
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-mixed-operators': 0,
    'class-methods-use-this': 0,
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './*.js',
          './dev/*.js',
        ],
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 1,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
      ],
      plugins: [
        '@typescript-eslint',
        'import',
        'jest',
      ],
      env: {
        'jest/globals': true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        useJSXTextNode: true,
        project: './tsconfig.json',
        tsconfigRootDir: './',
        extraFileExtensions: ['.vue'],
      },
      rules: {
        'comma-dangle': [
          'error',
          'always-multiline',
        ],
        'no-undef': 0,
        'no-param-reassign': [
          'error',
          {
            props: false,
          },
        ],
        'max-classes-per-file': 0,
        'max-len': [
          'error',
          {
            code: 80,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
          },
        ],
        'no-mixed-operators': 0,
        'class-methods-use-this': 0,
        'function-call-argument-newline': [
          'error',
          'consistent',
        ],
        'no-plusplus': [
          'error',
          {
            allowForLoopAfterthoughts: true,
          },
        ],
        'no-underscore-dangle': [
          'error',
          {
            allowAfterThis: true,
          },
        ],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['./src/**/__test__/**/*.ts'],
          },
        ],
        'import/extensions': [
          'error',
          {
            js: 'never',
            ts: 'never',
          },
        ],
        '@typescript-eslint/no-empty-function': [
          'error',
          {
            allow: ['arrowFunctions'],
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 0,
        'linebreak-style': [
          'error',
          'unix',
        ],
        'array-bracket-newline': [
          'error',
          {
            multiline: true,
            minItems: 2,
          },
        ],
        'array-element-newline': [
          'error',
          {
            multiline: true,
            minItems: 2,
          },
        ],
        'function-paren-newline': [
          'error',
          {
            minItems: 2,
          },
        ],
        'object-property-newline': [
          'error',
          {
            allowAllPropertiesOnSameLine: false,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
