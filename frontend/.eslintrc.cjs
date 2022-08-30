module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
  },
  'plugins': [
    'react-hooks',
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Basic settings
    'indent':               ['warn', 2],                // Indent with 2 spaces
    'no-trailing-spaces':   ['warn'],                   // Don't allow trailing spaces

    // Code settings
    'no-var':               ['warn'],                   // Don't allow var
    'prefer-const':         ['warn', { 'ignoreReadBeforeAssign': true }],  // If let is not assigned to, prefer const
    'no-return-assign':     ['error', 'always'],        // Don't allow assingment in return statement
  },
};